import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const db = await getDb();
  const [newOrders, totalOrders, pendingReviews, totalReviews, products, unreadInquiries, totalInquiries] =
    await Promise.all([
      db.collection("orders").countDocuments({ status: "new" }),
      db.collection("orders").countDocuments({}),
      db.collection("reviews").countDocuments({ verified: false }),
      db.collection("reviews").countDocuments({}),
      db.collection("products").countDocuments({}),
      db.collection("inquiries").countDocuments({ replied: false }),
      db.collection("inquiries").countDocuments({}),
    ]);

  return NextResponse.json({
    newOrders,
    totalOrders,
    pendingReviews,
    totalReviews,
    products,
    unreadInquiries,
    totalInquiries,
  });
}
