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

function cleanItems(raw: unknown) {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((i) => ({
      curve: String(i?.curve ?? "").slice(0, 40),
      flex: String(i?.flex ?? "").slice(0, 80),
      hand: String(i?.hand ?? "").slice(0, 10),
    }))
    .filter((i) => i.curve || i.flex || i.hand);
}

export async function PATCH(req: NextRequest, { params }: Ctx) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const { id } = await params;
  const _id = toObjectId(id);
  if (!_id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  const body = await req.json();
  const update: Record<string, unknown> = {};
  if (body.model !== undefined) update.model = String(body.model).slice(0, 120);
  if (body.brand !== undefined) update.brand = String(body.brand).slice(0, 60);
  if (body.isNew !== undefined) update.isNew = !!body.isNew;
  if (body.items !== undefined) update.items = cleanItems(body.items);

  const db = await getDb();
  await db.collection("sticks").updateOne({ _id }, { $set: update });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest, { params }: Ctx) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const { id } = await params;
  const _id = toObjectId(id);
  if (!_id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  const db = await getDb();
  await db.collection("sticks").deleteOne({ _id });
  return NextResponse.json({ success: true });
}
