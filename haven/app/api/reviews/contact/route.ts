// FILE LOCATION: app/api/contact/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ── Email to Haven Customs (notification) ──
    await transporter.sendMail({
      from: `"Haven Customs Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `📩 New Contact Message — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#f0f0f0;padding:40px;border:1px solid #222">
          <div style="border-bottom:2px solid #e8001d;padding-bottom:20px;margin-bottom:30px">
            <h1 style="margin:0;font-size:24px;color:#e8001d">New Contact Message</h1>
            <p style="margin:5px 0 0;color:#888;font-size:14px">Submitted from havencustoms.ca</p>
          </div>

          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:12px 0;color:#888;width:140px;vertical-align:top;border-bottom:1px solid #1a1a1a">Name</td><td style="padding:12px 0;color:#f0f0f0;font-weight:600;border-bottom:1px solid #1a1a1a">${name}</td></tr>
            <tr><td style="padding:12px 0;color:#888;vertical-align:top;border-bottom:1px solid #1a1a1a">Email</td><td style="padding:12px 0;border-bottom:1px solid #1a1a1a"><a href="mailto:${email}" style="color:#e8001d">${email}</a></td></tr>
            <tr><td style="padding:12px 0;color:#888;vertical-align:top;border-bottom:1px solid #1a1a1a">Phone</td><td style="padding:12px 0;border-bottom:1px solid #1a1a1a"><a href="tel:${phone}" style="color:#e8001d">${phone}</a></td></tr>
            <tr><td style="padding:12px 0;color:#888;vertical-align:top">Message</td><td style="padding:12px 0;color:#f0f0f0">${message || "No message provided"}</td></tr>
          </table>

          <div style="margin-top:30px;padding:16px;background:rgba(232,0,29,0.1);border-left:3px solid #e8001d">
            <p style="margin:0;font-size:13px;color:#ccc">💡 Hit reply to respond directly to ${name} at ${email}</p>
          </div>
        </div>
      `,
    });

    // ── Confirmation email to customer ──
    await transporter.sendMail({
      from: `"Haven Customs" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `We Received Your Message — Haven Customs`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#f0f0f0;padding:40px;border:1px solid #222">
          <div style="border-bottom:2px solid #e8001d;padding-bottom:20px;margin-bottom:30px">
            <h1 style="margin:0;font-size:24px;color:#f0f0f0">Message Received</h1>
          </div>

          <p style="font-size:16px;line-height:1.8;color:#ccc">Hi <strong style="color:#f0f0f0">${name}</strong>,</p>
          <p style="font-size:16px;line-height:1.8;color:#ccc">Thank you for reaching out to Haven Customs. We have received your message and will get back to you within <strong style="color:#f0f0f0">24 hours</strong>.</p>

          ${message ? `
          <div style="margin:30px 0;padding:20px;background:#111;border:1px solid #222">
            <p style="margin:0 0 8px;color:#888;font-size:13px;text-transform:uppercase;letter-spacing:2px">Your Message</p>
            <p style="margin:0;color:#f0f0f0;line-height:1.8">${message}</p>
          </div>
          ` : ""}

          <p style="font-size:14px;color:#888;line-height:1.8">Need immediate help? Call us at <a href="tel:4164300040" style="color:#e8001d">(416) 430-0040</a></p>

          <div style="margin-top:30px;padding-top:20px;border-top:1px solid #222;text-align:center">
            <p style="margin:0;font-size:12px;color:#555">Haven Customs · 124 Production Dr, Scarborough, ON M1H 2X8</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}