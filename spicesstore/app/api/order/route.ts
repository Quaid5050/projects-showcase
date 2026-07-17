import { NextRequest, NextResponse } from "next/server";
import { spices } from "../../data/spices";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, address, notes, items, subtotal, discount, total } = body;

    // Build order details for email
    const itemDetails = items
      .map((item: { spiceId: string; quantity: number }) => {
        const spice = spices.find((s) => s.id === item.spiceId);
        if (!spice) return null;
        return `  - ${spice.name} (${spice.hindiName}) × ${item.quantity} = $${(spice.price * item.quantity).toFixed(2)}`;
      })
      .filter(Boolean)
      .join("\n");

    const discountLine = discount > 0 ? `\n  Discount (15% on orders over $100): -$${discount.toFixed(2)}` : "";

    const emailBody = `
NEW ORDER RECEIVED — Spice Route
================================

Customer Details:
  Name: ${name}
  Email: ${email}
  Phone: ${phone || "Not provided"}
  Delivery Address: ${address}

Order Items:
${itemDetails}

Order Summary:
  Subtotal: $${subtotal.toFixed(2)}${discountLine}
  TOTAL: $${total.toFixed(2)}

Notes: ${notes || "None"}

================================
Please confirm this order by replying to: ${email}
Contact customer at: ${phone || email}
================================
    `.trim();

    // Send email using nodemailer if credentials are configured
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const OWNER_EMAIL = process.env.OWNER_EMAIL || "akshayprashar6@gmail.com";

    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.default.createTransport({
        host: SMTP_HOST,
        port: 587,
        secure: false,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      // Email to owner
      await transporter.sendMail({
        from: SMTP_USER,
        to: OWNER_EMAIL,
        subject: `New Order from ${name} — $${total.toFixed(2)}`,
        text: emailBody,
      });

      // Confirmation email to customer
      await transporter.sendMail({
        from: SMTP_USER,
        to: email,
        subject: "Your Spice Route Order — We Received It!",
        text: `Hi ${name},\n\nThank you for your order! We have received it and will confirm payment details within 24 hours.\n\nYour Order:\n${itemDetails}\n\nTotal: $${total.toFixed(2)}${discount > 0 ? `\n(15% discount applied for order over $100)` : ""}\n\nDelivery to: ${address}\n\nQuestions? Call us: +1 437 243 7862\n\nThank you,\nSpice Route Team`,
      });
    } else {
      // Log to console if no SMTP configured (development)
      console.log("=== NEW ORDER ===");
      console.log(emailBody);
      console.log("================");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Order API error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
