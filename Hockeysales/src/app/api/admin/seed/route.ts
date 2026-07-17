import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { defaultSticks, defaultSkates, defaultStickPricing } from "@/lib/productDefaults";

export const dynamic = "force-dynamic";

// POST /api/admin/seed — import default sticks/skates/pricing into empty collections.
// Safe: only inserts when a collection is empty, so it never overwrites admin edits.
export async function POST(req: NextRequest) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const db = await getDb();
  const result = { sticks: 0, skates: 0, settings: false };

  if ((await db.collection("sticks").countDocuments()) === 0) {
    const now = Date.now();
    await db.collection("sticks").insertMany(
      defaultSticks.map((s, i) => ({ ...s, isNew: !!s.isNew, createdAt: new Date(now + i) }))
    );
    result.sticks = defaultSticks.length;
  }

  if ((await db.collection("skates").countDocuments()) === 0) {
    const now = Date.now();
    await db.collection("skates").insertMany(
      defaultSkates.map((s, i) => ({ ...s, createdAt: new Date(now + i) }))
    );
    result.skates = defaultSkates.length;
  }

  if ((await db.collection("settings").countDocuments({ key: "products" })) === 0) {
    await db.collection("settings").insertOne({ key: "products", ...defaultStickPricing });
    result.settings = true;
  }

  return NextResponse.json({ success: true, ...result });
}
