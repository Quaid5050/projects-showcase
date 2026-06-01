import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, budget, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 });
    }

    // Nodemailer transporter — Gmail + App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email to owner (Parminder / whoever is set in .env)
    const ownerMail = {
      from: `"Simba Homes Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `New Inquiry — ${service || 'General'} | ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f4f6f9; padding: 0;">
          <!-- Header -->
          <div style="background: #1E2533; padding: 32px 40px; border-top: 4px solid #D01C2A;">
            <h1 style="margin: 0; color: #ffffff; font-size: 22px; letter-spacing: 1px;">SIMBA HOMES LTD</h1>
            <p style="margin: 4px 0 0; color: #718096; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">New Website Inquiry</p>
          </div>

          <!-- Body -->
          <div style="background: #ffffff; padding: 40px;">
            <h2 style="margin: 0 0 24px; color: #1E2533; font-size: 18px;">Contact Details</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #718096; font-size: 13px; width: 130px;">Full Name</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1E2533; font-size: 14px; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #718096; font-size: 13px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1E2533; font-size: 14px;"><a href="mailto:${email}" style="color: #D01C2A;">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #718096; font-size: 13px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1E2533; font-size: 14px;">${phone || '—'}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #718096; font-size: 13px;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><span style="background: #D01C2A; color: #fff; padding: 3px 10px; font-size: 12px; border-radius: 2px;">${service || 'Not specified'}</span></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #718096; font-size: 13px;">Budget</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1E2533; font-size: 14px;">${budget || '—'}</td></tr>
            </table>

            <div style="margin-top: 28px;">
              <p style="color: #718096; font-size: 13px; margin: 0 0 10px; text-transform: uppercase; letter-spacing: 1px;">Project Details</p>
              <div style="background: #f4f6f9; border-left: 3px solid #D01C2A; padding: 16px 20px; color: #1E2533; font-size: 14px; line-height: 1.8;">${message.replace(/\n/g, '<br/>')}</div>
            </div>

            <div style="margin-top: 32px; padding: 16px; background: #f4f6f9; border-radius: 2px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: #D01C2A; color: #fff; padding: 12px 32px; text-decoration: none; font-size: 13px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">Reply to ${name}</a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #1E2533; padding: 20px 40px; text-align: center;">
            <p style="margin: 0; color: #4A5568; font-size: 11px;">This email was sent from the Simba Homes Ltd website contact form.</p>
          </div>
        </div>
      `,
    };

    // Auto-reply to client
    const clientMail = {
      from: `"Simba Homes Ltd" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `We received your inquiry — Simba Homes Ltd`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1E2533; padding: 32px 40px; border-top: 4px solid #D01C2A;">
            <h1 style="margin: 0; color: #ffffff; font-size: 22px; letter-spacing: 1px;">SIMBA HOMES LTD</h1>
            <p style="margin: 4px 0 0; color: #718096; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">British Columbia, Canada</p>
          </div>

          <div style="background: #ffffff; padding: 40px;">
            <h2 style="margin: 0 0 16px; color: #1E2533; font-size: 20px;">Thank you, ${name}!</h2>
            <p style="color: #4A5568; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
              We have received your inquiry and will get back to you within <strong>24 business hours</strong>.
            </p>
            <p style="color: #4A5568; font-size: 14px; line-height: 1.7; margin: 0 0 32px;">
              In the meantime, feel free to call us directly at <a href="tel:+17787077325" style="color: #D01C2A; font-weight: bold;">+1 778 707 7325</a>.
            </p>

            <div style="background: #f4f6f9; border-left: 3px solid #D01C2A; padding: 16px 20px; margin-bottom: 32px;">
              <p style="margin: 0 0 8px; font-size: 12px; color: #718096; text-transform: uppercase; letter-spacing: 1px;">Your Inquiry Summary</p>
              <p style="margin: 0; color: #1E2533; font-size: 14px;"><strong>Service:</strong> ${service || 'Not specified'}</p>
              ${budget ? `<p style="margin: 4px 0 0; color: #1E2533; font-size: 14px;"><strong>Budget:</strong> ${budget}</p>` : ''}
            </div>

            <p style="color: #718096; font-size: 13px; margin: 0;">— Parminder &amp; the Simba Homes Team</p>
          </div>

          <div style="background: #1E2533; padding: 20px 40px; text-align: center;">
            <p style="margin: 0 0 6px; color: #4A5568; font-size: 11px;">Simba Homes Ltd · British Columbia, Canada</p>
            <p style="margin: 0; color: #4A5568; font-size: 11px;">
              <a href="mailto:info@simbahomes.ca" style="color: #D01C2A;">info@simbahomes.ca</a> · +1 778 707 7325
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(ownerMail);
    await transporter.sendMail(clientMail);

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('Email error:', err);
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}