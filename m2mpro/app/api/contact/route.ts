import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      formType, name, email, phone, city, address,
      serviceType, bedrooms, frequency, preferredDate,
      preferredTime, specialRequests, message, subject,
    } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const GMAIL_USER = process.env.EMAIL_USER!;
    const GMAIL_PASS = process.env.EMAIL_PASS!;
    const TO_EMAIL = process.env.EMAIL_TO || "info@m2mprocleaners.ca";

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    await transporter.verify();

    const isBooking = formType === "booking";

    const submittedAt = new Date().toLocaleString("en-CA", {
      timeZone: "America/Vancouver",
      dateStyle: "full",
      timeStyle: "short",
    });

    const bookingHtml = `
      <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;">
        <div style="background:#1A1A1A;padding:32px 40px;text-align:center;">
          <h1 style="color:#C9A96E;font-size:26px;margin:0;font-weight:300;letter-spacing:2px;">NEW BOOKING REQUEST</h1>
          <p style="color:rgba(255,255,255,0.5);font-size:11px;margin:8px 0 0;letter-spacing:3px;">M2M PRO CLEANERS</p>
        </div>
        <div style="padding:40px;background:white;border-left:4px solid #C9A96E;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:11px;color:#8A8078;text-transform:uppercase;letter-spacing:1px;width:130px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:15px;color:#1A1A1A;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:11px;color:#8A8078;text-transform:uppercase;letter-spacing:1px;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:15px;"><a href="mailto:${email}" style="color:#C9A96E;">${email}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:11px;color:#8A8078;text-transform:uppercase;letter-spacing:1px;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:15px;"><a href="tel:${phone}" style="color:#C9A96E;">${phone}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:11px;color:#8A8078;text-transform:uppercase;letter-spacing:1px;">City</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:15px;color:#1A1A1A;">${city || "—"}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:11px;color:#8A8078;text-transform:uppercase;letter-spacing:1px;">Address</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:15px;color:#1A1A1A;">${address || "—"}</td></tr>
            <tr style="background:#FAF8F4;"><td style="padding:10px 0 10px 8px;border-bottom:1px solid #f0ebe0;font-size:11px;color:#8A8078;text-transform:uppercase;letter-spacing:1px;">Service</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:15px;color:#C9A96E;font-weight:600;">${serviceType || "—"}</td></tr>
            <tr style="background:#FAF8F4;"><td style="padding:10px 0 10px 8px;border-bottom:1px solid #f0ebe0;font-size:11px;color:#8A8078;text-transform:uppercase;letter-spacing:1px;">Bedrooms</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:15px;color:#1A1A1A;">${bedrooms || "—"}</td></tr>
            <tr style="background:#FAF8F4;"><td style="padding:10px 0 10px 8px;border-bottom:1px solid #f0ebe0;font-size:11px;color:#8A8078;text-transform:uppercase;letter-spacing:1px;">Frequency</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:15px;color:#1A1A1A;">${frequency || "—"}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:11px;color:#8A8078;text-transform:uppercase;letter-spacing:1px;">Date</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:15px;color:#1A1A1A;">${preferredDate || "—"}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:11px;color:#8A8078;text-transform:uppercase;letter-spacing:1px;">Time</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:15px;color:#1A1A1A;">${preferredTime || "—"}</td></tr>
            <tr><td style="padding:10px 0;font-size:11px;color:#8A8078;text-transform:uppercase;letter-spacing:1px;">Submitted</td><td style="padding:10px 0;font-size:13px;color:#1A1A1A;">${submittedAt} (PT)</td></tr>
            ${specialRequests ? `<tr><td colspan="2" style="padding:10px 0;font-size:11px;color:#8A8078;text-transform:uppercase;letter-spacing:1px;">Notes<br/><span style="font-size:14px;color:#1A1A1A;font-style:italic;font-weight:normal;">${specialRequests}</span></td></tr>` : ""}
          </table>
          <div style="margin-top:24px;text-align:center;">
            <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#A07840,#C9A96E);color:#fff;padding:14px 32px;text-decoration:none;font-weight:600;font-size:13px;letter-spacing:1px;">Reply to ${name} →</a>
          </div>
        </div>
        <div style="background:#1A1A1A;padding:20px 40px;text-align:center;">
          <p style="color:rgba(255,255,255,0.4);font-size:11px;margin:0;letter-spacing:2px;">M2M PRO CLEANERS • LANGLEY, BC • (778) 893-6786</p>
        </div>
      </div>`;

    const contactHtml = `
      <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;">
        <div style="background:#1A1A1A;padding:32px 40px;text-align:center;">
          <h1 style="color:#C9A96E;font-size:26px;margin:0;font-weight:300;letter-spacing:2px;">NEW CONTACT MESSAGE</h1>
          <p style="color:rgba(255,255,255,0.5);font-size:11px;margin:8px 0 0;letter-spacing:3px;">M2M PRO CLEANERS</p>
        </div>
        <div style="padding:40px;background:white;border-left:4px solid #C9A96E;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:11px;color:#8A8078;text-transform:uppercase;letter-spacing:1px;width:130px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:15px;color:#1A1A1A;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:11px;color:#8A8078;text-transform:uppercase;letter-spacing:1px;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:15px;"><a href="mailto:${email}" style="color:#C9A96E;">${email}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:11px;color:#8A8078;text-transform:uppercase;letter-spacing:1px;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:15px;color:#1A1A1A;">${phone || "—"}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:11px;color:#8A8078;text-transform:uppercase;letter-spacing:1px;">Subject</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe0;font-size:15px;color:#1A1A1A;">${subject || "—"}</td></tr>
            <tr><td style="padding:10px 0;font-size:11px;color:#8A8078;text-transform:uppercase;letter-spacing:1px;">Submitted</td><td style="padding:10px 0;font-size:13px;color:#1A1A1A;">${submittedAt} (PT)</td></tr>
          </table>
          <div style="margin-top:20px;">
            <p style="color:#8A8078;font-size:11px;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Message</p>
            <div style="background:#FAF8F4;padding:18px;border-left:4px solid #C9A96E;color:#1A1A1A;font-size:15px;line-height:1.7;">${message?.replace(/\n/g, "<br/>") || "—"}</div>
          </div>
          <div style="margin-top:24px;text-align:center;">
            <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#A07840,#C9A96E);color:#fff;padding:14px 32px;text-decoration:none;font-weight:600;font-size:13px;letter-spacing:1px;">Reply to ${name} →</a>
          </div>
        </div>
        <div style="background:#1A1A1A;padding:20px 40px;text-align:center;">
          <p style="color:rgba(255,255,255,0.4);font-size:11px;margin:0;letter-spacing:2px;">M2M PRO CLEANERS • LANGLEY, BC • (778) 893-6786</p>
        </div>
      </div>`;

    const autoReplyHtml = `
      <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;">
        <div style="background:#1A1A1A;padding:32px 40px;text-align:center;">
          <h1 style="color:#C9A96E;font-size:22px;margin:0;font-weight:300;letter-spacing:2px;">M2M PRO CLEANERS</h1>
          <p style="color:rgba(255,255,255,0.4);font-size:11px;margin:8px 0 0;letter-spacing:3px;">LANGLEY, BC</p>
        </div>
        <div style="padding:40px;background:white;">
          <h2 style="font-weight:300;color:#1A1A1A;margin-bottom:16px;">Hello ${name},</h2>
          <p style="color:#8A8078;line-height:1.8;font-size:15px;">Thank you for reaching out to <strong style="color:#1A1A1A;">M2M Pro Cleaners</strong>. We have received your ${isBooking ? "booking request" : "message"} and our team will contact you <strong style="color:#1A1A1A;">within 2 hours</strong> to confirm the details.</p>
          ${isBooking ? `
          <div style="background:#FAF8F4;border-left:4px solid #C9A96E;padding:18px 20px;margin:24px 0;">
            <p style="color:#8A8078;font-size:11px;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Your Booking</p>
            <p style="color:#1A1A1A;font-size:15px;font-weight:600;margin:0;">${serviceType} — ${city}</p>
          </div>` : ""}
          <p style="color:#8A8078;line-height:1.8;font-size:15px;">Need immediate assistance? Call us at <a href="tel:7788936786" style="color:#C9A96E;font-weight:600;">(778) 893-6786</a></p>
        </div>
        <div style="background:#1A1A1A;padding:20px 40px;text-align:center;">
          <p style="color:rgba(255,255,255,0.4);font-size:11px;margin:0;letter-spacing:2px;">M2M PRO CLEANERS • LANGLEY, BC • (778) 893-6786</p>
        </div>
      </div>`;

    // Send to business
    await transporter.sendMail({
      from: `"M2M Pro Cleaners Website" <${GMAIL_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: isBooking
        ? `New Booking — ${serviceType} | ${name} | ${city}`
        : `Contact Form: ${subject || "General Inquiry"} — ${name}`,
      html: isBooking ? bookingHtml : contactHtml,
    });

    // Auto-reply to customer
    await transporter.sendMail({
      from: `"M2M Pro Cleaners" <${GMAIL_USER}>`,
      to: email,
      subject: "We Received Your Request — M2M Pro Cleaners",
      html: autoReplyHtml,
    });

    return NextResponse.json({ success: true });

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("EMAIL SEND ERROR:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}