import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Internal notification email recipients
const INTERNAL_EMAILS = ['hello@hutliv.com', 'leadbuddie@gmail.com', 'vivek@hutliv.com', 'anupriya@hutliv.com']

type RateState = { count: number; resetAt: number }

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const RATE_LIMIT_MAX = 8 // per IP per window

// Best-effort in-memory limiter (works per server instance).
// For stronger protection across instances, swap to a shared store (Upstash/Redis).
const rateMap: Map<string, RateState> = (globalThis as unknown as { __lb_rateMap?: Map<string, RateState> })
  .__lb_rateMap ?? new Map<string, RateState>()
;(globalThis as unknown as { __lb_rateMap?: Map<string, RateState> }).__lb_rateMap = rateMap

function getClientIp(request: NextRequest): string {
  // Vercel / proxies often provide x-forwarded-for.
  const xff = request.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0]?.trim() || 'unknown'
  return request.headers.get('x-real-ip') ?? 'unknown'
}

function isValidEmail(email: string): boolean {
  // pragmatic email validation (avoid rejecting real-world emails)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: NextRequest) {
  try {
    // Check if Resend is configured
    if (!resend || !process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, message, subjectType, website } = body as {
      name?: string
      email?: string
      message?: string
      subjectType?: string
      // Honeypot (should remain empty)
      website?: string
    }

    // Honeypot check (bots tend to fill hidden fields)
    if (typeof website === 'string' && website.trim().length > 0) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Rate limit by IP (best-effort)
    const ip = getClientIp(request)
    const now = Date.now()
    const curr = rateMap.get(ip)
    if (!curr || curr.resetAt <= now) {
      rateMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    } else {
      curr.count += 1
      if (curr.count > RATE_LIMIT_MAX) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429, headers: { 'Retry-After': String(Math.ceil((curr.resetAt - now) / 1000)) } }
        )
      }
    }

    const isDemoRequest = subjectType === 'demo'
    const messageText = (message && message.trim()) || (isDemoRequest ? 'I would like to request a demo.' : '')

    // Validate input (message required only for general contact)
    const safeName = typeof name === 'string' ? name.trim() : ''
    const safeEmail = typeof email === 'string' ? email.trim() : ''
    if (!safeName || !safeEmail) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }
    if (!isValidEmail(safeEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email' },
        { status: 400 }
      )
    }
    if (!isDemoRequest && !messageText) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }
    if (safeName.length > 120 || safeEmail.length > 254 || messageText.length > 5000) {
      return NextResponse.json(
        { error: 'Message is too long' },
        { status: 400 }
      )
    }

    const internalSubject = isDemoRequest
      ? `Demo request from ${safeName}`
      : `New Contact Form Submission from ${safeName}`
    const internalTitle = isDemoRequest ? 'Demo Request' : 'New Contact Form Submission'
    const ackSubject = isDemoRequest ? "We've received your demo request 👍" : "We've received your message 👍"
    const ackBody = isDemoRequest
      ? "We've received your demo request and our team will reach out to schedule a call shortly."
      : "We've received your message and our team will get back to you shortly."

    const safeMessageHtml = escapeHtml(messageText).replace(/\n/g, '<br>')

    // Send both emails in parallel
    const [internalResult, acknowledgementResult] = await Promise.all([
      // 1. Internal notification email to team (sent to both addresses)
      resend.emails.send({
        from: 'LeadBuddie <no-reply@leadbuddie.com>',
        to: INTERNAL_EMAILS,
        replyTo: safeEmail,
        subject: internalSubject,
        html: `
          <h2>${internalTitle}</h2>
          <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessageHtml}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">You can reply directly to this email to respond to ${escapeHtml(safeName)}.</p>
        `,
      }),
      // 2. Auto-reply acknowledgment email to user
      resend.emails.send({
        from: 'LeadBuddie Team <no-reply@leadbuddie.com>',
        to: safeEmail,
        subject: ackSubject,
        html: `
          <p>Hi ${escapeHtml(safeName)},</p>
          <p>Thanks for contacting <strong>LeadBuddie</strong>.</p>
          <p>${ackBody}</p>
          <p>– LeadBuddie Team</p>
        `,
      }),
    ])

    // Log the results for debugging
    console.log('Internal email result:', JSON.stringify(internalResult, null, 2))
    console.log('Acknowledgement email result:', JSON.stringify(acknowledgementResult, null, 2))

    // Check if there are any errors in the response
    if (internalResult.error) {
      console.error('Internal email error:', internalResult.error)
    }
    if (acknowledgementResult.error) {
      console.error('Acknowledgement email error:', acknowledgementResult.error)
    }

    return NextResponse.json(
      { 
        success: true, 
        data: {
          internal: internalResult,
          acknowledgement: acknowledgementResult,
        }
      }, 
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

