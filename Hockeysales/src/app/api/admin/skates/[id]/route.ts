import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string }> };

function toObjectId(id: string): ObjectId | null {
  try {
    return new ObjectId(id);
  } catch {
    return null;
  }
}

function cleanSizes(raw: unknown): string[] {
  if (Array.isArray(raw)) return raw.map((s) => String(s).slice(0, 40)).filter(Boolean);
  if (typeof raw === "string") return raw.split(",").map((s) => s.trim()).filter(Boolean);
  return [];
}

export async function PATCH(req: NextRequest, { params }: Ctx) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const { id } = await params;
  const _id = toObjectId(id);
  if (!_id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  const body = await req.json();
  const update: Record<string, unknown> = {};
  if (body.name !== undefined) update.name = String(body.name).slice(0, 160);
  if (body.price !== undefined) update.price = String(body.price).slice(0, 60);
  if (body.desc !== undefined) update.desc = String(body.desc).slice(0, 500);
  if (body.status !== undefined) update.status = String(body.status).slice(0, 40);
  if (body.image !== undefined) update.image = String(body.image).slice(0, 1000);
  if (body.sizes !== undefined) update.sizes = cleanSizes(body.sizes);

  const db = await getDb();
  await db.collection("skates").updateOne({ _id }, { $set: update });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest, { params }: Ctx) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const { id } = await params;
  const _id = toObjectId(id);
  if (!_id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  const db = await getDb();
  await db.collection("skates").deleteOne({ _id });
  return NextResponse.json({ success: true });
}
