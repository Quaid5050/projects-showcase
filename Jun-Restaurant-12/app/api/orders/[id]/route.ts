import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

export const dynamic = "force-dynamic";

export async function GET(
  _request: NextRequest,
  ctx: RouteContext<"/api/orders/[id]">
) {
  try {
    await connectDB();
    const { id } = await ctx.params;
    const order = await Order.findById(id);
    if (!order) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json({ order });
  } catch (error) {
    console.error("GET /api/orders/[id] error:", error);
    return Response.json({ error: "Failed to fetch order" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  ctx: RouteContext<"/api/orders/[id]">
) {
  try {
    await connectDB();
    const { id } = await ctx.params;
    const body = await request.json();
    const order = await Order.findByIdAndUpdate(id, body, { new: true });
    if (!order) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json({ order });
  } catch (error) {
    console.error("PUT /api/orders/[id] error:", error);
    return Response.json({ error: "Failed to update order" }, { status: 500 });
  }
}
