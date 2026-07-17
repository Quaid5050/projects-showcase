import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import nodemailer from "nodemailer";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string }> };
const STATUSES = ["new", "confirmed", "rejected", "shipped", "completed"];

function toObjectId(id: string): ObjectId | null {
  try {
    return new ObjectId(id);
  } catch {
    return null;
  }
}

// PATCH /api/admin/orders/[id] — update status (emails the customer on confirm/reject)
export async function PATCH(req: NextRequest, { params }: Ctx) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const { id } = await params;
  const _id = toObjectId(id);
  if (!_id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  const { status } = await req.json();
  if (!STATUSES.includes(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  const db = await getDb();
  const order = await db.collection("orders").findOne({ _id });
  if (!order) return NextResponse.json({ error: "Order not found" }, { status: 404 });

  await db.collection("orders").updateOne({ _id }, { $set: { status } });

  // Email the customer when the order is confirmed or rejected (best effort).
  if ((status === "confirmed" || status === "rejected") && order.email) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
      });
      const confirmed = status === "confirmed";
      await transporter.sendMail({
        from: `"Strides Hockey Sales" <${process.env.GMAIL_USER}>`,
        to: order.email,
        subject: confirmed ? "Your Strides Hockey Order is Confirmed" : "Update on Your Strides Hockey Order",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #0a1628; padding: 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px;">Strides Hockey Sales</h1>
            </div>
            <div style="padding: 24px; color: #444; line-height: 1.6;">
              <p>Hi ${order.name},</p>
              ${
                confirmed
                  ? `<p>Good news — your order has been <strong>confirmed</strong>. Our team will be in touch shortly with the next steps.</p>`
                  : `<p>Thank you for your interest. Unfortunately we are unable to fulfil this order at the moment. Please reply to this email and we will help you find an alternative.</p>`
              }
              <p style="margin-top:16px;"><strong>Product:</strong> ${order.product}<br/><strong>Quantity:</strong> ${order.quantity || 1}</p>
              <p style="margin-top:16px;">Thank you,<br/>Strides Hockey Sales</p>
            </div>
          </div>`,
      });
    } catch (mailErr) {
      console.error("Order status email failed:", mailErr);
    }
  }

  return NextResponse.json({ success: true });
}

// DELETE /api/admin/orders/[id]
export async function DELETE(req: NextRequest, { params }: Ctx) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const { id } = await params;
  const _id = toObjectId(id);
  if (!_id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  const db = await getDb();
  await db.collection("orders").deleteOne({ _id });
  return NextResponse.json({ success: true });
}
