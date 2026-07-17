import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getDb } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

// POST /api/orders — public: a customer places an order request
export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, product, quantity, details } = await req.json();

    if (!name || !email || !product) {
      return NextResponse.json({ error: "Name, email, and product are required." }, { status: 400 });
    }

    const db = await getDb();
    const order = {
      name: String(name).slice(0, 120),
      email: String(email).slice(0, 160),
      phone: phone ? String(phone).slice(0, 40) : "",
      product: String(product).slice(0, 300),
      quantity: quantity ? Number(quantity) || 1 : 1,
      details: details ? String(details).slice(0, 2000) : "",
      status: "new" as const,
      createdAt: new Date(),
    };
    const result = await db.collection("orders").insertOne(order);

    // Notify the shop (best effort — don't fail the order if email fails)
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
      });
      await transporter.sendMail({
        from: `"Strides Hockey Sales Website" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `New Order Request from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #0a1628; padding: 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px;">Strides Hockey Sales</h1>
              <p style="color: #8facc8; margin: 4px 0 0; font-size: 13px;">New Order Request</p>
            </div>
            <div style="padding: 24px; color: #555;">
              <p><strong>Name:</strong> ${order.name}</p>
              <p><strong>Email:</strong> ${order.email}</p>
              <p><strong>Phone:</strong> ${order.phone || "Not provided"}</p>
              <p><strong>Product:</strong> ${order.product}</p>
              <p><strong>Quantity:</strong> ${order.quantity}</p>
              <p><strong>Details:</strong><br/>${order.details || "—"}</p>
              <p style="margin-top:16px;">Confirm this order in the admin panel: /admin/orders</p>
            </div>
          </div>`,
      });
    } catch (mailErr) {
      console.error("Order email notification failed:", mailErr);
    }

    return NextResponse.json({ success: true, id: result.insertedId.toString() });
  } catch (error) {
    console.error("POST /api/orders error:", error);
    return NextResponse.json({ error: "Failed to place order. Please try again." }, { status: 500 });
  }
}
