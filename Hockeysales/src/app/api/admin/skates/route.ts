import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

function cleanSizes(raw: unknown): string[] {
  if (Array.isArray(raw)) return raw.map((s) => String(s).slice(0, 40)).filter(Boolean);
  if (typeof raw === "string") return raw.split(",").map((s) => s.trim()).filter(Boolean);
  return [];
}

// GET /api/admin/skates
export async function GET(req: NextRequest) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const db = await getDb();
  const skates = await db.collection("skates").find({}).sort({ createdAt: 1 }).toArray();
  const mapped = skates.map((s) => ({
    id: s._id.toString(),
    name: s.name,
    price: s.price || "",
    desc: s.desc || "",
    status: s.status || "In Stock",
    image: s.image || "",
    sizes: Array.isArray(s.sizes) ? s.sizes : [],
  }));
  return NextResponse.json({ skates: mapped });
}

// POST /api/admin/skates
export async function POST(req: NextRequest) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const body = await req.json();
  if (!body.name) {
    return NextResponse.json({ error: "Skate name is required." }, { status: 400 });
  }
  const db = await getDb();
  const result = await db.collection("skates").insertOne({
    name: String(body.name).slice(0, 160),
    price: body.price ? String(body.price).slice(0, 60) : "",
    desc: body.desc ? String(body.desc).slice(0, 500) : "",
    status: body.status ? String(body.status).slice(0, 40) : "In Stock",
    image: body.image ? String(body.image).slice(0, 1000) : "",
    sizes: cleanSizes(body.sizes),
    createdAt: new Date(),
  });
  return NextResponse.json({ success: true, id: result.insertedId.toString() });
}
