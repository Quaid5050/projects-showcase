import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL,        // e.g. haventinttire@gmail.com
    pass: process.env.SMTP_APP_PASSWORD,  // Gmail App Password (16-char)
  },
});

function buildContactHtml(data: Record<string, string>) {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;">
      <div style="background:#1a1a1a;padding:20px 24px;">
        <h1 style="color:#e01e25;margin:0;font-size:20px;">Haven Tint & Tire</h1>
        <p style="color:#999;margin:4px 0 0;font-size:12px;">New Contact Message</p>
      </div>
      <div style="padding:24px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#999;font-size:13px;width:120px;">Name</td><td style="padding:8px 0;font-size:14px;color:#1a1a1a;font-weight:600;">${data.name}</td></tr>
          <tr><td style="padding:8px 0;color:#999;font-size:13px;">Email</td><td style="padding:8px 0;font-size:14px;"><a href="mailto:${data.email}" style="color:#e01e25;">${data.email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#999;font-size:13px;">Phone</td><td style="padding:8px 0;font-size:14px;"><a href="tel:${data.phone}" style="color:#e01e25;">${data.phone}</a></td></tr>
          ${data.message ? `<tr><td style="padding:8px 0;color:#999;font-size:13px;vertical-align:top;">Message</td><td style="padding:8px 0;font-size:14px;color:#333;">${data.message}</td></tr>` : ''}
        </table>
      </div>
      <div style="background:#f5f5f5;padding:12px 24px;text-align:center;">
        <p style="margin:0;font-size:11px;color:#999;">Submitted via haventinttire.com contact form</p>
      </div>
    </div>`;
}

function buildBookingHtml(data: Record<string, string>) {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;">
      <div style="background:#e01e25;padding:20px 24px;">
        <h1 style="color:#fff;margin:0;font-size:20px;">Haven Tint & Tire</h1>
        <p style="color:rgba(255,255,255,0.8);margin:4px 0 0;font-size:12px;">New Booking Request</p>
      </div>
      <div style="padding:24px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#999;font-size:13px;width:130px;">Name</td><td style="padding:8px 0;font-size:14px;color:#1a1a1a;font-weight:600;">${data.name}</td></tr>
          <tr><td style="padding:8px 0;color:#999;font-size:13px;">Email</td><td style="padding:8px 0;font-size:14px;"><a href="mailto:${data.email}" style="color:#e01e25;">${data.email || 'Not provided'}</a></td></tr>
          <tr><td style="padding:8px 0;color:#999;font-size:13px;">Phone</td><td style="padding:8px 0;font-size:14px;"><a href="tel:${data.phone}" style="color:#e01e25;">${data.phone || 'Not provided'}</a></td></tr>
          ${data.address ? `<tr><td style="padding:8px 0;color:#999;font-size:13px;">Address</td><td style="padding:8px 0;font-size:14px;color:#333;">${data.address}</td></tr>` : ''}
          ${data.carBrand ? `<tr><td style="padding:8px 0;color:#999;font-size:13px;">Car Brand</td><td style="padding:8px 0;font-size:14px;color:#333;">${data.carBrand}</td></tr>` : ''}
          ${data.carNo ? `<tr><td style="padding:8px 0;color:#999;font-size:13px;">Car/Plate No</td><td style="padding:8px 0;font-size:14px;color:#333;">${data.carNo}</td></tr>` : ''}
          ${data.service ? `<tr><td style="padding:8px 0;color:#999;font-size:13px;">Service</td><td style="padding:8px 0;font-size:14px;color:#1a1a1a;font-weight:600;">${data.service}</td></tr>` : ''}
          ${data.location ? `<tr><td style="padding:8px 0;color:#999;font-size:13px;">Location</td><td style="padding:8px 0;font-size:14px;color:#333;">${data.location}</td></tr>` : ''}
          ${data.date ? `<tr><td style="padding:8px 0;color:#999;font-size:13px;">Preferred Date</td><td style="padding:8px 0;font-size:14px;color:#333;">${data.date}</td></tr>` : ''}
          ${data.time ? `<tr><td style="padding:8px 0;color:#999;font-size:13px;">Preferred Time</td><td style="padding:8px 0;font-size:14px;color:#333;">${data.time}</td></tr>` : ''}
          ${data.message ? `<tr><td style="padding:8px 0;color:#999;font-size:13px;vertical-align:top;">Notes</td><td style="padding:8px 0;font-size:14px;color:#333;">${data.message}</td></tr>` : ''}
        </table>
      </div>
      <div style="background:#1a1a1a;padding:12px 24px;text-align:center;">
        <p style="margin:0;font-size:11px;color:#999;">Submitted via haventinttire.com booking form</p>
      </div>
    </div>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, type } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const isBooking = type === 'booking';
    const subject = isBooking
      ? `🔧 New Booking Request — ${name}`
      : `📩 New Contact Message — ${name}`;
    const html = isBooking ? buildBookingHtml(body) : buildContactHtml(body);

    await transporter.sendMail({
      from: `"Haven Tint & Tire" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,       // receive on same email
      replyTo: email || undefined,
      subject,
      html,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Email send error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}