import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Configure email transporter
    // Replace with your actual SMTP credentials in .env.local
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM || 'flashchic84@gmail.com',
        pass: process.env.EMAIL_PASS, // App password from Gmail settings
      },
    })

    const mailOptions = {
      from: `"Flashchic Website" <${process.env.EMAIL_FROM || 'flashchic84@gmail.com'}>`,
      to: process.env.EMAIL_TO || 'flashchic84@gmail.com',
      replyTo: email,
      subject: `[Website Contact] ${subject || 'New Message'} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #111; color: #fff; padding: 40px; border: 1px solid #d4af37;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #d4af37; font-size: 24px; letter-spacing: 4px; text-transform: uppercase;">Flashchic Photobooth</h1>
            <p style="color: #888; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">New Contact Message</p>
          </div>
          <hr style="border-color: #d4af37; opacity: 0.3; margin-bottom: 30px;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #888; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; width: 120px;">Name</td><td style="padding: 8px 0; color: #fff;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #888; font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Email</td><td style="padding: 8px 0; color: #d4af37;"><a href="mailto:${email}" style="color: #d4af37;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #888; font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Phone</td><td style="padding: 8px 0; color: #fff;">${phone}</td></tr>` : ''}
            ${subject ? `<tr><td style="padding: 8px 0; color: #888; font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Subject</td><td style="padding: 8px 0; color: #fff;">${subject}</td></tr>` : ''}
          </table>
          <hr style="border-color: #d4af37; opacity: 0.2; margin: 20px 0;" />
          <div style="background: #1a1a1a; padding: 20px; border-left: 3px solid #d4af37; margin-top: 20px;">
            <p style="color: #888; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px;">Message</p>
            <p style="color: #ddd; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 30px; text-align: center;">
            <a href="mailto:${email}" style="background: #d4af37; color: #0a0a0a; padding: 12px 30px; text-decoration: none; font-weight: bold; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Reply to ${name}</a>
          </div>
          <p style="margin-top: 30px; color: #444; font-size: 11px; text-align: center;">Flashchic Photobooth · Laval, Québec · flashchic84@gmail.com</p>
        </div>
      `,
    }

    // Send confirmation to the sender
    const autoReply = {
      from: `"Flashchic Photobooth" <${process.env.EMAIL_FROM || 'flashchic84@gmail.com'}>`,
      to: email,
      subject: 'We received your message — Flashchic Photobooth',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #111; color: #fff; padding: 40px; border: 1px solid #d4af37;">
          <h1 style="color: #d4af37; font-size: 22px; letter-spacing: 3px; text-transform: uppercase; text-align: center;">Flashchic Photobooth</h1>
          <hr style="border-color: #d4af37; opacity: 0.3; margin: 20px 0;" />
          <p style="color: #ddd; line-height: 1.7;">Hi ${name},</p>
          <p style="color: #ddd; line-height: 1.7;">Thank you for reaching out! We've received your message and will get back to you within <strong style="color: #d4af37;">24 hours</strong>.</p>
          <p style="color: #ddd; line-height: 1.7;">If you need to reach us sooner, call us at <a href="tel:5148318409" style="color: #d4af37;">(514) 831-8409</a>.</p>
          <p style="color: #888; font-size: 12px; margin-top: 30px;">— Stéphanie & the Flashchic Team<br/>Laval, Québec</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
    await transporter.sendMail(autoReply)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact email error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
