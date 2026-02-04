import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Internal notification email recipients
const INTERNAL_EMAILS = ['hello@hutliv.com', 'leadbuddie@gmail.com', 'vivek@hutliv.com', 'anupriya@hutliv.com']

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
    const { name, email, message, subjectType } = body

    const isDemoRequest = subjectType === 'demo'
    const messageText = (message && message.trim()) || (isDemoRequest ? 'I would like to request a demo.' : '')

    // Validate input (message required only for general contact)
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }
    if (!isDemoRequest && !messageText) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    const internalSubject = isDemoRequest
      ? `Demo request from ${name}`
      : `New Contact Form Submission from ${name}`
    const internalTitle = isDemoRequest ? 'Demo Request' : 'New Contact Form Submission'
    const ackSubject = isDemoRequest ? "We've received your demo request 👍" : "We've received your message 👍"
    const ackBody = isDemoRequest
      ? "We've received your demo request and our team will reach out to schedule a call shortly."
      : "We've received your message and our team will get back to you shortly."

    // Send both emails in parallel
    const [internalResult, acknowledgementResult] = await Promise.all([
      // 1. Internal notification email to team (sent to both addresses)
      resend.emails.send({
        from: 'LeadBuddie <no-reply@leadbuddie.com>',
        to: INTERNAL_EMAILS,
        replyTo: email,
        subject: internalSubject,
        html: `
          <h2>${internalTitle}</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${messageText.replace(/\n/g, '<br>')}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">You can reply directly to this email to respond to ${name}.</p>
        `,
      }),
      // 2. Auto-reply acknowledgment email to user
      resend.emails.send({
        from: 'LeadBuddie Team <no-reply@leadbuddie.com>',
        to: email,
        subject: ackSubject,
        html: `
          <p>Hi ${name},</p>
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

