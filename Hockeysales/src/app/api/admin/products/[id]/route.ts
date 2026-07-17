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

// PATCH /api/admin/products/[id] — update a product
export async function PATCH(req: NextRequest, { params }: Ctx) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const { id } = await params;
  const _id = toObjectId(id);
  if (!_id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  const body = await req.json();
  const allowed = ["name", "brand", "category", "price", "status", "description", "image"];
  const update: Record<string, string> = {};
  for (const key of allowed) {
    if (body[key] !== undefined) update[key] = String(body[key]).slice(0, 2000);
  }

  const db = await getDb();
  await db.collection("products").updateOne({ _id }, { $set: update });
  return NextResponse.json({ success: true });
}

// DELETE /api/admin/products/[id]
export async function DELETE(req: NextRequest, { params }: Ctx) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const { id } = await params;
  const _id = toObjectId(id);
  if (!_id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  const db = await getDb();
  await db.collection("products").deleteOne({ _id });
  return NextResponse.json({ success: true });
}
