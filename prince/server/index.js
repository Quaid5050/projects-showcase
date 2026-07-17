require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// ── Middleware ──────────────────────────────────────────────
app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:4173',
    // Add your production domain here when deployed, e.g.:
    // 'https://pranvuepropertyservices.ca'
  ],
  methods: ['POST'],
}));

// ── Nodemailer transporter (Gmail SMTP) ─────────────────────
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Verify connection on startup
transporter.verify((err) => {
  if (err) {
    console.error('❌ SMTP connection failed:', err.message);
  } else {
    console.log('✅ SMTP connected — ready to send emails');
  }
});

// ── Helper: sanitize input ──────────────────────────────────
const sanitize = (str) =>
  String(str ?? '').replace(/[<>]/g, '').trim().slice(0, 1000);

// ── POST /api/booking ───────────────────────────────────────
app.post('/api/booking', async (req, res) => {
  try {
    const {
      name, phone, email, service,
      address, date, time, message,
    } = req.body;

    // Basic validation
    if (!name || !phone || !email || !service || !address || !date) {
      return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    const s = {
      name: sanitize(name),
      phone: sanitize(phone),
      email: sanitize(email),
      service: sanitize(service),
      address: sanitize(address),
      date: sanitize(date),
      time: sanitize(time),
      message: sanitize(message),
    };

    // ── Email to business owner ──
    await transporter.sendMail({
      from: `"Pranvue Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: s.email,
      subject: `📅 New Booking Request — ${s.service} — ${s.name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8f5ff;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#241033,#5E2B97);padding:32px 28px;">
            <h1 style="color:#fff;margin:0;font-size:22px;">New Booking Request</h1>
            <p style="color:rgba(255,255,255,0.75);margin:8px 0 0;font-size:14px;">Pranvue Property Services — Website</p>
          </div>
          <div style="padding:28px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#6B6077;width:140px;font-weight:600;">Name</td><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#16121C;">${s.name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#6B6077;font-weight:600;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#16121C;"><a href="tel:${s.phone}" style="color:#5E2B97;">${s.phone}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#6B6077;font-weight:600;">Email</td><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#16121C;"><a href="mailto:${s.email}" style="color:#5E2B97;">${s.email}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#6B6077;font-weight:600;">Service</td><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#5E2B97;font-weight:700;">${s.service}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#6B6077;font-weight:600;">Address</td><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#16121C;">${s.address}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#6B6077;font-weight:600;">Date</td><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#16121C;">${s.date}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#6B6077;font-weight:600;">Time</td><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#16121C;">${s.time || 'Not specified'}</td></tr>
              ${s.message ? `<tr><td style="padding:10px 0;color:#6B6077;font-weight:600;vertical-align:top;">Notes</td><td style="padding:10px 0;color:#16121C;">${s.message}</td></tr>` : ''}
            </table>
            <div style="margin-top:24px;padding:16px;background:#5E2B97;border-radius:8px;text-align:center;">
              <a href="tel:${s.phone}" style="color:#fff;font-size:16px;font-weight:700;text-decoration:none;">📞 Call ${s.name}: ${s.phone}</a>
            </div>
          </div>
          <div style="padding:16px 28px;background:#241033;text-align:center;">
            <p style="color:rgba(255,255,255,0.5);font-size:12px;margin:0;">Pranvue Property Services · sheoranprince42@gmail.com</p>
          </div>
        </div>
      `,
    });

    // ── Confirmation email to customer ──
    await transporter.sendMail({
      from: `"Pranvue Property Services" <${process.env.GMAIL_USER}>`,
      to: s.email,
      subject: `✅ Booking Request Received — Pranvue Property Services`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8f5ff;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#241033,#5E2B97);padding:32px 28px;text-align:center;">
            <h1 style="color:#fff;margin:0;font-size:24px;">Booking Request Received!</h1>
            <p style="color:rgba(255,255,255,0.8);margin:10px 0 0;font-size:15px;">We'll confirm your details shortly.</p>
          </div>
          <div style="padding:28px;">
            <p style="font-size:16px;color:#16121C;">Hi <strong>${s.name}</strong>,</p>
            <p style="font-size:15px;color:#6B6077;line-height:1.7;">
              Thank you for requesting a booking with Pranvue Property Services.
              We've received your request and will get back to you as soon as possible to confirm the details.
            </p>
            <div style="background:#fff;border:1px solid #e8e0f5;border-radius:10px;padding:20px;margin:24px 0;">
              <p style="margin:0 0 12px;font-weight:700;color:#16121C;">Your Booking Details</p>
              <p style="margin:6px 0;font-size:14px;color:#6B6077;"><strong style="color:#16121C;">Service:</strong> ${s.service}</p>
              <p style="margin:6px 0;font-size:14px;color:#6B6077;"><strong style="color:#16121C;">Date:</strong> ${s.date}</p>
              <p style="margin:6px 0;font-size:14px;color:#6B6077;"><strong style="color:#16121C;">Address:</strong> ${s.address}</p>
              ${s.time ? `<p style="margin:6px 0;font-size:14px;color:#6B6077;"><strong style="color:#16121C;">Time:</strong> ${s.time}</p>` : ''}
            </div>
            <p style="font-size:15px;color:#6B6077;">
              Need to reach us directly?<br/>
              📞 <a href="tel:+16723999637" style="color:#5E2B97;font-weight:700;">(672) 399-9637</a><br/>
              ✉️ <a href="mailto:sheoranprince42@gmail.com" style="color:#5E2B97;">sheoranprince42@gmail.com</a>
            </p>
          </div>
          <div style="padding:16px 28px;background:#241033;text-align:center;">
            <p style="color:rgba(255,255,255,0.5);font-size:12px;margin:0;">© Pranvue Property Services · Surrey, White Rock, Langley</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Booking request sent successfully.' });

  } catch (err) {
    console.error('Booking email error:', err);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

// ── POST /api/contact ───────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    const s = {
      name: sanitize(name),
      phone: sanitize(phone),
      email: sanitize(email),
      message: sanitize(message),
    };

    // ── Email to business owner ──
    await transporter.sendMail({
      from: `"Pranvue Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: s.email,
      subject: `💬 New Contact Message — ${s.name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8f5ff;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#241033,#5E2B97);padding:32px 28px;">
            <h1 style="color:#fff;margin:0;font-size:22px;">New Contact Message</h1>
            <p style="color:rgba(255,255,255,0.75);margin:8px 0 0;font-size:14px;">Pranvue Property Services — Website</p>
          </div>
          <div style="padding:28px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#6B6077;width:120px;font-weight:600;">Name</td><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#16121C;">${s.name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#6B6077;font-weight:600;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#16121C;">${s.phone || 'Not provided'}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#6B6077;font-weight:600;">Email</td><td style="padding:10px 0;border-bottom:1px solid #e8e0f5;color:#16121C;"><a href="mailto:${s.email}" style="color:#5E2B97;">${s.email}</a></td></tr>
              <tr><td style="padding:10px 0;color:#6B6077;font-weight:600;vertical-align:top;">Message</td><td style="padding:10px 0;color:#16121C;line-height:1.6;">${s.message}</td></tr>
            </table>
            <div style="margin-top:24px;padding:16px;background:#5E2B97;border-radius:8px;text-align:center;">
              <a href="mailto:${s.email}" style="color:#fff;font-size:16px;font-weight:700;text-decoration:none;">✉️ Reply to ${s.name}</a>
            </div>
          </div>
          <div style="padding:16px 28px;background:#241033;text-align:center;">
            <p style="color:rgba(255,255,255,0.5);font-size:12px;margin:0;">Pranvue Property Services · sheoranprince42@gmail.com</p>
          </div>
        </div>
      `,
    });

    // ── Auto-reply to sender ──
    await transporter.sendMail({
      from: `"Pranvue Property Services" <${process.env.GMAIL_USER}>`,
      to: s.email,
      subject: `Thanks for contacting Pranvue Property Services`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8f5ff;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#241033,#5E2B97);padding:32px 28px;text-align:center;">
            <h1 style="color:#fff;margin:0;font-size:22px;">Message Received!</h1>
          </div>
          <div style="padding:28px;">
            <p style="font-size:16px;color:#16121C;">Hi <strong>${s.name}</strong>,</p>
            <p style="font-size:15px;color:#6B6077;line-height:1.7;">
              Thank you for reaching out to Pranvue Property Services.
              We've received your message and will get back to you within a few hours.
            </p>
            <p style="font-size:15px;color:#6B6077;">
              For urgent matters:<br/>
              📞 <a href="tel:+16723999637" style="color:#5E2B97;font-weight:700;">(672) 399-9637</a>
            </p>
          </div>
          <div style="padding:16px 28px;background:#241033;text-align:center;">
            <p style="color:rgba(255,255,255,0.5);font-size:12px;margin:0;">© Pranvue Property Services · Surrey, White Rock, Langley</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Message sent successfully.' });

  } catch (err) {
    console.error('Contact email error:', err);
    return res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});

// ── Health check ─────────────────────────────────────────────
app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

// ── Start ────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Pranvue email server running on port ${PORT}`);
});
