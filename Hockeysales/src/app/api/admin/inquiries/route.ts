import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/admin/inquiries — all contact form submissions
export async function GET(req: NextRequest) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const db = await getDb();
  const inquiries = await db.collection("inquiries").find({}).sort({ createdAt: -1 }).toArray();
  const mapped = inquiries.map((i) => ({
    id: i._id.toString(),
    name: i.name,
    email: i.email,
    phone: i.phone || "",
    message: i.message,
    replied: !!i.replied,
    createdAt: i.createdAt ? new Date(i.createdAt).toISOString() : null,
  }));
  return NextResponse.json({ inquiries: mapped });
}
