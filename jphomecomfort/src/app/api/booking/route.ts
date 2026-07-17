import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, date, time, message } = await req.json();
    if (!name || !email) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_APP_PASSWORD },
    });

    await transporter.sendMail({
      from: `"JP Home Comfort" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Booking: ${service || "General"}  ${name}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto"><div style="background:#1B2A4A;padding:24px;border-radius:12px 12px 0 0;border-top:4px solid #E31E24"><h1 style="color:#fff;margin:0;font-size:20px">New Booking Request</h1><p style="color:#0099D6;margin:4px 0 0">JP Home Comfort</p></div><div style="background:#fff;padding:24px;border:1px solid #e2e8f0;border-top:0;border-radius:0 0 12px 12px"><table style="width:100%;border-collapse:collapse"><tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;width:120px">Name</td><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-weight:600;color:#1B2A4A">${name}</td></tr><tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b">Email</td><td style="padding:10px 0;border-bottom:1px solid #f1f5f9"><a href="mailto:${email}" style="color:#0099D6">${email}</a></td></tr>${phone?`<tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f1f5f9"><a href="tel:${phone}" style="color:#0099D6">${phone}</a></td></tr>`:``}${service?`<tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b">Service</td><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-weight:600">${service}</td></tr>`:``}${date?`<tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b">Date</td><td style="padding:10px 0;border-bottom:1px solid #f1f5f9">${date}</td></tr>`:``}${time?`<tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b">Time</td><td style="padding:10px 0;border-bottom:1px solid #f1f5f9">${time}</td></tr>`:``}${message?`<tr><td style="padding:10px 0;color:#64748b;vertical-align:top">Message</td><td style="padding:10px 0">${message}</td></tr>`:``}</table></div></div>`,
    });

    await transporter.sendMail({
      from: `"JP Home Comfort" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Booking Received  JP Home Comfort`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto"><div style="background:#1B2A4A;padding:24px;border-radius:12px 12px 0 0;border-top:4px solid #E31E24;text-align:center"><h1 style="color:#fff;margin:0">Booking Received!</h1></div><div style="background:#fff;padding:24px;border:1px solid #e2e8f0;border-top:0;border-radius:0 0 12px 12px"><p>Hi ${name},</p><p style="color:#475569">Thank you for choosing JP Home Comfort! We received your booking and will contact you shortly to confirm.</p><p style="color:#475569">For urgent help, call <a href="tel:+16479485859" style="color:#E31E24;font-weight:700">+1 647-948-5859</a></p><p style="color:#475569"> JP Home Comfort Team</p></div></div>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
