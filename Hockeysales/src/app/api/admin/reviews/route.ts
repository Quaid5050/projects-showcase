import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/admin/reviews — all reviews (pending + approved)
export async function GET(req: NextRequest) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const db = await getDb();
  const reviews = await db.collection("reviews").find({}).sort({ createdAt: -1 }).toArray();
  const mapped = reviews.map((r) => ({
    id: r._id.toString(),
    name: r.name,
    role: r.role || "",
    rating: r.rating,
    quote: r.quote,
    verified: !!r.verified,
    createdAt: r.createdAt ? new Date(r.createdAt).toISOString() : null,
  }));
  return NextResponse.json({ reviews: mapped });
}
