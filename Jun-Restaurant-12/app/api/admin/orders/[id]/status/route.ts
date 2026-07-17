import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";
import { sendOrderStatusEmailIfNeeded } from "@/lib/email/send-status-email";

export const dynamic = "force-dynamic";

export async function PUT(
  request: NextRequest,
  ctx: RouteContext<"/api/admin/orders/[id]/status">
) {
  try {
    await connectDB();
    const { id } = await ctx.params;
    const { orderStatus } = await request.json();

    const validStatuses = ["new", "preparing", "ready", "completed", "cancelled"];
    if (!validStatuses.includes(orderStatus)) {
      return Response.json({ error: "Invalid status" }, { status: 400 });
    }

    // Get previous status before updating
    const existing = await Order.findById(id);
    if (!existing) {
      return Response.json({ error: "Order not found" }, { status: 404 });
    }

    const previousStatus = existing.orderStatus;

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { orderStatus },
      { new: true }
    );

    if (!updatedOrder) {
      return Response.json({ error: "Order not found" }, { status: 404 });
    }

    // Fire status email — non-blocking, never throws
    sendOrderStatusEmailIfNeeded(updatedOrder, previousStatus).catch((err) =>
      console.error("[status route] Email error:", err)
    );

    return Response.json({ order: updatedOrder });
  } catch (error) {
    console.error("PUT /api/admin/orders/[id]/status error:", error);
    return Response.json({ error: "Failed to update status" }, { status: 500 });
  }
}
