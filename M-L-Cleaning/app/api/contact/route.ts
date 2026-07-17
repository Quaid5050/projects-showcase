import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message, preferredDate, preferredTime } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    // Build email content
    const emailContent = `
New Booking Request — M&L Cleaning Home Services LLC
=====================================================

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Service Requested: ${service || "Not specified"}
Preferred Date: ${preferredDate || "Flexible"}
Preferred Time: ${preferredTime || "Any time"}

Message:
${message || "No additional message."}

-----------------------------------------------------
Submitted via mlcleaninghs.com contact form
    `.trim();

    // Use nodemailer with Gmail SMTP
    // For production: set GMAIL_USER and GMAIL_PASS in environment variables
    const nodemailer = await import("nodemailer");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER || "mlcleaninghomeservicesllc@gmail.com",
        pass: process.env.GMAIL_PASS || "",
      },
    });

    // If credentials are configured, send the email
    const hasRealCredentials =
      !!process.env.GMAIL_PASS && process.env.GMAIL_PASS !== "your_gmail_app_password_here";

    if (hasRealCredentials) {
      try {
        await transporter.verify();
      } catch (verifyError) {
        console.error("EMAIL NOTIFICATION ERROR — SMTP login/connection failed:", verifyError);
        return NextResponse.json(
          { error: "Email service is misconfigured. Check GMAIL_USER/GMAIL_PASS." },
          { status: 500 }
        );
      }

      await transporter.sendMail({
        from: `"M&L Cleaning Website" <${process.env.GMAIL_USER}>`,
        to: "mlcleaninghomeservicesllc@gmail.com",
        replyTo: email || undefined,
        subject: `New Booking Request from ${name} — ${service || "General Inquiry"}`,
        text: emailContent,
        html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f4ff; border-radius: 16px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #2D0050, #4B0082); padding: 30px; text-align: center;">
    <h1 style="color: #FFD700; margin: 0; font-size: 22px;">New Booking Request</h1>
    <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">M&L Cleaning Home Services LLC</p>
  </div>
  <div style="padding: 30px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4B0082; width: 140px;">Name</td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${name}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4B0082;">Phone</td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><a href="tel:${phone}" style="color: #4B0082;">${phone}</a></td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4B0082;">Email</td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${email || "Not provided"}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4B0082;">Service</td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${service || "Not specified"}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4B0082;">Date</td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${preferredDate || "Flexible"}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4B0082;">Time</td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${preferredTime || "Any time"}</td></tr>
    </table>
    ${message ? `<div style="margin-top: 20px; padding: 16px; background: #fff; border-radius: 10px; border: 1px solid #e5e7eb;"><strong style="color: #4B0082;">Message:</strong><p style="margin: 8px 0 0; color: #374151;">${message}</p></div>` : ""}
    <div style="margin-top: 24px; text-align: center;">
      <a href="tel:${phone}" style="background: linear-gradient(135deg, #FFD700, #E6C200); color: #2D0050; font-weight: bold; padding: 12px 28px; border-radius: 50px; text-decoration: none; display: inline-block;">Call Back ${name}</a>
    </div>
  </div>
  <div style="background: #2D0050; padding: 16px; text-align: center; color: rgba(255,255,255,0.6); font-size: 12px;">
    Submitted via mlcleaninghs.com
  </div>
</div>
        `,
      });
      console.log(`Email notification sent successfully for booking request from ${name}.`);
    } else {
      // Log to console if no real email credentials configured
      console.warn(
        "EMAIL NOTIFICATION SKIPPED — GMAIL_PASS is missing or still set to the placeholder value. " +
        "Set a real Gmail App Password in .env.local to enable email sending."
      );
      console.log("=== CONTACT FORM SUBMISSION (not emailed) ===");
      console.log(emailContent);
      console.log("================================");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL NOTIFICATION ERROR — failed to send booking request email:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
