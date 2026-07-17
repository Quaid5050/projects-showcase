import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData()

    const name = String(data.get('name') || '')
    const phone = String(data.get('phone') || '')
    const city = String(data.get('city') || '')
    const urgency = String(data.get('urgency') || '')
    const careType = String(data.get('care_type') || '')
    const message = String(data.get('message') || '')

    if (!name || !phone || !city || !careType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Maplepath Healthcare Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || process.env.GMAIL_USER,
      replyTo: undefined,
      subject: 'New Care Assessment Request — Maplepath Healthcare',
      html: `
        <h2>New Care Assessment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>When Needed:</strong> ${urgency || 'Not specified'}</p>
        <p><strong>Type of Care:</strong> ${careType}</p>
        <p><strong>Message:</strong> ${message || 'None'}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
