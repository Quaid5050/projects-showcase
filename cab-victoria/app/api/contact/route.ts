import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, service, date, message } = body

    if (!name || !phone || !service) {
      return NextResponse.json({ error: 'Name, phone and service are required.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f9f9f9;border-radius:8px;">
        <div style="background:#1a1a1a;color:#f5a623;padding:16px 20px;border-radius:6px 6px 0 0;text-align:center;">
          <h2 style="margin:0;font-size:20px;">New Booking Enquiry — BookaCab</h2>
        </div>
        <div style="background:#fff;padding:20px;border:1px solid #e0e0e0;border-radius:0 0 6px 6px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 8px;border-bottom:1px solid #eee;font-weight:bold;color:#333;width:140px;">Name</td><td style="padding:10px 8px;border-bottom:1px solid #eee;color:#555;">${name}</td></tr>
            <tr><td style="padding:10px 8px;border-bottom:1px solid #eee;font-weight:bold;color:#333;">Phone</td><td style="padding:10px 8px;border-bottom:1px solid #eee;color:#555;">${phone}</td></tr>
            <tr><td style="padding:10px 8px;border-bottom:1px solid #eee;font-weight:bold;color:#333;">Email</td><td style="padding:10px 8px;border-bottom:1px solid #eee;color:#555;">${email || 'Not provided'}</td></tr>
            <tr><td style="padding:10px 8px;border-bottom:1px solid #eee;font-weight:bold;color:#333;">Service</td><td style="padding:10px 8px;border-bottom:1px solid #eee;color:#555;">${service}</td></tr>
            <tr><td style="padding:10px 8px;border-bottom:1px solid #eee;font-weight:bold;color:#333;">Date</td><td style="padding:10px 8px;border-bottom:1px solid #eee;color:#555;">${date || 'Not specified'}</td></tr>
            <tr><td style="padding:10px 8px;font-weight:bold;color:#333;vertical-align:top;">Message</td><td style="padding:10px 8px;color:#555;">${message || 'No message'}</td></tr>
          </table>
        </div>
        <p style="text-align:center;color:#999;font-size:11px;margin-top:14px;">Sent from BookaCab Victoria website contact form</p>
      </div>
    `

    await transporter.sendMail({
      from: `"BookaCab Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: `"${name}" <${process.env.GMAIL_USER}>`,
      subject: `New Booking: ${service} — ${name}`,
      html: htmlBody,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send. Please try calling or texting Jay directly.' }, { status: 500 })
  }
}