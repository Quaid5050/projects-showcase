import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectDB();
    const orders = await Order.find().sort({ createdAt: -1 });
    return Response.json({ orders });
  } catch (error) {
    console.error("GET /api/orders error:", error);
    return Response.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const order = await Order.create(body);
    return Response.json({ order }, { status: 201 });
  } catch (error) {
    console.error("POST /api/orders error:", error);
    return Response.json({ error: "Failed to create order" }, { status: 500 });
  }
}
