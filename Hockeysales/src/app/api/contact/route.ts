import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getDb } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    // Save the inquiry so it shows up in the admin dashboard (best effort).
    try {
      const db = await getDb();
      await db.collection("inquiries").insertOne({
        name: String(name).slice(0, 120),
        email: String(email).slice(0, 160),
        phone: phone ? String(phone).slice(0, 40) : "",
        message: String(message).slice(0, 4000),
        replied: false,
        createdAt: new Date(),
      });
    } catch (dbErr) {
      console.error("Failed to save inquiry to DB:", dbErr);
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Strides Hockey Sales Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0a1628; padding: 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px;">Strides Hockey Sales</h1>
            <p style="color: #8facc8; margin: 4px 0 0; font-size: 13px;">New Contact Form Submission</p>
          </div>
          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #333; width: 120px; vertical-align: top;">Name:</td>
                <td style="padding: 10px 0; color: #555;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #333; vertical-align: top;">Email:</td>
                <td style="padding: 10px 0; color: #555;"><a href="mailto:${email}" style="color: #006399;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #333; vertical-align: top;">Phone:</td>
                <td style="padding: 10px 0; color: #555;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #333; vertical-align: top;">Message:</td>
                <td style="padding: 10px 0; color: #555; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="background-color: #f5f5f5; padding: 16px; text-align: center; font-size: 12px; color: #999;">
            This email was sent from the Strides Hockey Sales website contact form.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}