import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, phone, service, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Required fields missing.' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,       // e.g. Centralmausoleums@gmail.com
      pass: process.env.GMAIL_APP_PASS,   // Gmail App Password (16 chars)
    },
  });

  const mailOptions = {
    from: `"Central Mausoleums Website" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,           // receives to same inbox
    replyTo: email,                       // reply goes directly to visitor
    subject: `New Inquiry: ${service || 'General'} — ${name}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f0e8d8; padding: 40px; border: 1px solid #c9a84c;">
        <h2 style="color: #c9a84c; font-size: 20px; margin-bottom: 8px; letter-spacing: 2px;">NEW WEBSITE INQUIRY</h2>
        <p style="color: #8a7f72; font-size: 12px; margin-bottom: 32px; letter-spacing: 1px;">Central Mausoleums & Granite</p>
        <hr style="border-color: rgba(201,168,76,0.2); margin-bottom: 28px;"/>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; color: #c9a84c; font-size: 11px; letter-spacing: 1px; width: 130px;">NAME</td><td style="padding: 10px 0; color: #f0e8d8;">${name}</td></tr>
          <tr><td style="padding: 10px 0; color: #c9a84c; font-size: 11px; letter-spacing: 1px;">EMAIL</td><td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #f0e8d8;">${email}</a></td></tr>
          <tr><td style="padding: 10px 0; color: #c9a84c; font-size: 11px; letter-spacing: 1px;">PHONE</td><td style="padding: 10px 0; color: #f0e8d8;">${phone || '—'}</td></tr>
          <tr><td style="padding: 10px 0; color: #c9a84c; font-size: 11px; letter-spacing: 1px;">SERVICE</td><td style="padding: 10px 0; color: #f0e8d8;">${service || 'Not specified'}</td></tr>
        </table>
        <hr style="border-color: rgba(201,168,76,0.2); margin: 24px 0;"/>
        <p style="color: #c9a84c; font-size: 11px; letter-spacing: 1px; margin-bottom: 12px;">MESSAGE</p>
        <p style="color: #d4c9b0; line-height: 1.8; white-space: pre-wrap;">${message}</p>
        <hr style="border-color: rgba(201,168,76,0.1); margin-top: 32px;"/>
        <p style="color: #3d3830; font-size: 11px; text-align: center; margin-top: 16px;">Sent via centralmausoleums.com contact form</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Mail error:', err);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
