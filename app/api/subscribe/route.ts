import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || '')

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // Send welcome email to subscriber
    const { data, error } = await resend.emails.send({
      from: 'KnitVolt <onboarding@resend.dev>',
      to: [email],
      subject: 'You\'re on the list! ⚡ Welcome to KnitVolt',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px; background: #0a0a0f; color: #ffffff;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="font-size: 32px; font-weight: 800; margin: 0;">
              Knit<span style="color: #FACC15;">Volt</span> ⚡
            </h1>
          </div>
          <div style="background: rgba(250, 204, 21, 0.08); border: 1px solid rgba(250, 204, 21, 0.15); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h2 style="font-size: 20px; font-weight: 700; margin: 0 0 8px 0; color: #FACC15;">You're in! 🎉</h2>
            <p style="color: rgba(255,255,255,0.6); font-size: 15px; line-height: 1.6; margin: 0;">
              Thanks for joining the waitlist. You'll be the first to know when we launch — plus you've unlocked <strong style="color: #FACC15;">15% off</strong> your first order.
            </p>
          </div>
          <div style="padding: 20px 0;">
            <p style="color: rgba(255,255,255,0.4); font-size: 13px; text-align: center; margin: 0;">
              Performance socks engineered for every stride.<br/>
              Launching June 2026.
            </p>
          </div>
          <div style="text-align: center; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.06);">
            <p style="color: rgba(255,255,255,0.2); font-size: 11px; margin: 0;">
              © 2026 KnitVolt. All rights reserved.<br/>
              You're receiving this because you signed up at knitvolt.com
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Something went wrong. Please try again.' },
        { status: 500 }
      )
    }

    // Also send notification to admin (you) so you know who subscribed
    await resend.emails.send({
      from: 'KnitVolt <onboarding@resend.dev>',
      to: ['jianwen05151@163.com'],
      subject: '⚡ New KnitVolt Subscriber',
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <p style="font-size: 16px;">New subscriber just joined the KnitVolt waitlist:</p>
          <p style="font-size: 20px; font-weight: bold; color: #FACC15;">${email}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Subscribe error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
