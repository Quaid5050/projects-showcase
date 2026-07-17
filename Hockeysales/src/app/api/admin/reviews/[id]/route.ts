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

// PATCH /api/admin/reviews/[id] — approve / unapprove
export async function PATCH(req: NextRequest, { params }: Ctx) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const { id } = await params;
  const _id = toObjectId(id);
  if (!_id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  const { verified } = await req.json();
  const db = await getDb();
  await db.collection("reviews").updateOne({ _id }, { $set: { verified: !!verified } });
  return NextResponse.json({ success: true });
}

// DELETE /api/admin/reviews/[id]
export async function DELETE(req: NextRequest, { params }: Ctx) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const { id } = await params;
  const _id = toObjectId(id);
  if (!_id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  const db = await getDb();
  await db.collection("reviews").deleteOne({ _id });
  return NextResponse.json({ success: true });
}
