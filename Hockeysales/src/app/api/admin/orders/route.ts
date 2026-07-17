import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/admin/orders — all orders
export async function GET(req: NextRequest) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const db = await getDb();
  const orders = await db.collection("orders").find({}).sort({ createdAt: -1 }).toArray();
  const mapped = orders.map((o) => ({
    id: o._id.toString(),
    name: o.name,
    email: o.email,
    phone: o.phone || "",
    product: o.product,
    quantity: o.quantity || 1,
    details: o.details || "",
    status: o.status || "new",
    createdAt: o.createdAt ? new Date(o.createdAt).toISOString() : null,
  }));
  return NextResponse.json({ orders: mapped });
}
