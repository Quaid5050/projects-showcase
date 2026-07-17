import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (name.length > 100 || phone.length > 20 || message.length > 2000) {
      return NextResponse.json(
        { error: "Input exceeds allowed length." },
        { status: 400 }
      );
    }

    try {
      await sendContactEmail({
        name: name.trim(),
        phone: phone.trim(),
        email: email?.trim(),
        message: message.trim(),
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
