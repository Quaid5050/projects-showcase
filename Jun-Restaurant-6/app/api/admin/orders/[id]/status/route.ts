import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";
import { sendStatusEmail } from "@/lib/email/send-status-email";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== "admin")
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { status } = await req.json();
  const validStatuses = ["pending", "paid", "preparing", "ready", "completed", "cancelled", "refunded"];
  if (!validStatuses.includes(status))
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });

  await connectDB();
  const order = await Order.findById(params.id);
  if (!order) return NextResponse.json({ error: "Not found" }, { status: 404 });

  order.orderStatus = status;
  await order.save();

  if (status === "completed" || status === "cancelled") {
    const alreadySent = order.statusEmailLog?.some((l: any) => l.status === status);
    if (!alreadySent) {
      try {
        await sendStatusEmail({
          customerEmail: order.customerEmail,
          customerName: order.customerName,
          orderNumber: order.orderNumber,
          status,
        });
        order.statusEmailLog = [
          ...(order.statusEmailLog || []),
          { status, sentAt: new Date(), recipient: order.customerEmail },
        ];
        await order.save();
      } catch (e) {
        console.error("[status email]", e);
      }
    }
  }

  return NextResponse.json({ success: true, orderStatus: status });
}
