import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

interface Item {
  curve: string;
  flex: string;
  hand: string;
}

function cleanItems(raw: unknown): Item[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((i) => ({
      curve: String(i?.curve ?? "").slice(0, 40),
      flex: String(i?.flex ?? "").slice(0, 80),
      hand: String(i?.hand ?? "").slice(0, 10),
    }))
    .filter((i) => i.curve || i.flex || i.hand);
}

// GET /api/admin/sticks
export async function GET(req: NextRequest) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const db = await getDb();
  const sticks = await db.collection("sticks").find({}).sort({ createdAt: 1 }).toArray();
  const mapped = sticks.map((s) => ({
    id: s._id.toString(),
    model: s.model,
    brand: s.brand || "",
    isNew: !!s.isNew,
    items: Array.isArray(s.items) ? s.items : [],
  }));
  return NextResponse.json({ sticks: mapped });
}

// POST /api/admin/sticks
export async function POST(req: NextRequest) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const body = await req.json();
  if (!body.model) {
    return NextResponse.json({ error: "Model name is required." }, { status: 400 });
  }
  const db = await getDb();
  const result = await db.collection("sticks").insertOne({
    model: String(body.model).slice(0, 120),
    brand: body.brand ? String(body.brand).slice(0, 60) : "",
    isNew: !!body.isNew,
    items: cleanItems(body.items),
    createdAt: new Date(),
  });
  return NextResponse.json({ success: true, id: result.insertedId.toString() });
}
