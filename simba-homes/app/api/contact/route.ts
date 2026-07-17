import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 });
    }

    // cPanel SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,       // mail.simbahomes.ca
      port: Number(process.env.SMTP_PORT), // 465
      secure: true,                        // SSL
      auth: {
        user: process.env.SMTP_USER,       // mail@simbahomes.ca
        pass: process.env.SMTP_PASS,       // email account password
      },
    });

    // Email to owner
    await transporter.sendMail({
      from: `"Simba Homes Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `New Inquiry — ${service || 'General'} | ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1E2533; padding: 32px 40px; border-top: 4px solid #D01C2A;">
            <h1 style="margin: 0; color: #fff; font-size: 20px; letter-spacing: 1px;">SIMBA HOMES LTD</h1>
            <p style="margin: 4px 0 0; color: #718096; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">New Website Inquiry</p>
          </div>
          <div style="background: #fff; padding: 40px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #718096; font-size: 13px; width: 120px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1E2533; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #718096; font-size: 13px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #D01C2A;">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #718096; font-size: 13px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1E2533;">${phone || '—'}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #718096; font-size: 13px;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><span style="background: #D01C2A; color: #fff; padding: 3px 10px; font-size: 12px;">${service || '—'}</span></td></tr>
              <tr><td style="padding: 10px 0; color: #718096; font-size: 13px;">Budget</td><td style="padding: 10px 0; color: #1E2533;">${budget || '—'}</td></tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #718096; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <div style="background: #f4f6f9; border-left: 3px solid #D01C2A; padding: 16px 20px; color: #1E2533; font-size: 14px; line-height: 1.8;">${message.replace(/\n/g, '<br/>')}</div>
            </div>
            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: #D01C2A; color: #fff; padding: 12px 32px; text-decoration: none; font-size: 13px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">Reply to ${name}</a>
            </div>
          </div>
          <div style="background: #1E2533; padding: 16px 40px; text-align: center;">
            <p style="margin: 0; color: #4A5568; font-size: 11px;">Simba Homes Ltd Website · simbahomes.ca</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to client
    await transporter.sendMail({
      from: `"Simba Homes Ltd" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We received your inquiry — Simba Homes Ltd`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1E2533; padding: 32px 40px; border-top: 4px solid #D01C2A;">
            <h1 style="margin: 0; color: #fff; font-size: 20px; letter-spacing: 1px;">SIMBA HOMES LTD</h1>
            <p style="margin: 4px 0 0; color: #718096; font-size: 11px; letter-spacing: 2px;">BRITISH COLUMBIA, CANADA</p>
          </div>
          <div style="background: #fff; padding: 40px;">
            <h2 style="margin: 0 0 16px; color: #1E2533;">Thank you, ${name}!</h2>
            <p style="color: #4A5568; font-size: 15px; line-height: 1.7; margin: 0 0 16px;">We have received your inquiry and will get back to you within <strong>24 business hours</strong>.</p>
            <p style="color: #4A5568; font-size: 14px; line-height: 1.7; margin: 0 0 28px;">For urgent matters, call us directly at <a href="tel:+17787077325" style="color: #D01C2A; font-weight: bold;">+1 778 707 7325</a>.</p>
            <div style="background: #f4f6f9; border-left: 3px solid #D01C2A; padding: 16px 20px; margin-bottom: 28px;">
              <p style="margin: 0 0 6px; font-size: 11px; color: #718096; text-transform: uppercase; letter-spacing: 1px;">Your Inquiry</p>
              <p style="margin: 0; color: #1E2533; font-size: 14px;"><strong>Service:</strong> ${service || '—'}</p>
              ${budget ? `<p style="margin: 4px 0 0; color: #1E2533; font-size: 14px;"><strong>Budget:</strong> ${budget}</p>` : ''}
            </div>
            <p style="color: #718096; font-size: 13px; margin: 0;">— Parminder &amp; the Simba Homes Team</p>
          </div>
          <div style="background: #1E2533; padding: 16px 40px; text-align: center;">
            <p style="margin: 0 0 4px; color: #4A5568; font-size: 11px;">info@simbahomes.ca · +1 778 707 7325</p>
            <p style="margin: 0; color: #4A5568; font-size: 11px;">simbahomes.ca</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('Email error:', err);
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}