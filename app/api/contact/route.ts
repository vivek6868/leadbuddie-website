import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Internal notification email recipients
const INTERNAL_EMAILS = ['hello@hutliv.com', 'leadbuddie@gmail.com']

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
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Send both emails in parallel
    const [internalResult, acknowledgementResult] = await Promise.all([
      // 1. Internal notification email to team (sent to both addresses)
      resend.emails.send({
        from: 'LeadBuddie <no-reply@leadbuddie.com>',
        to: INTERNAL_EMAILS,
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">You can reply directly to this email to respond to ${name}.</p>
        `,
      }),
      // 2. Auto-reply acknowledgment email to user
      resend.emails.send({
        from: 'LeadBuddie Team <no-reply@leadbuddie.com>',
        to: email,
        subject: "We've received your message 👍",
        html: `
          <p>Hi ${name},</p>
          <p>Thanks for contacting <strong>LeadBuddie</strong>.</p>
          <p>We've received your message and our team will get back to you shortly.</p>
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

