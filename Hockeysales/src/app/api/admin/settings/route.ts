import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { defaultStickPricing } from "@/lib/productDefaults";

export const dynamic = "force-dynamic";

// GET /api/admin/settings
export async function GET(req: NextRequest) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const db = await getDb();
  const doc = await db.collection("settings").findOne({ key: "products" });
  return NextResponse.json({
    pricing: {
      seniorPrice: doc?.seniorPrice ?? defaultStickPricing.seniorPrice,
      juniorPrice: doc?.juniorPrice ?? defaultStickPricing.juniorPrice,
      warranty: doc?.warranty ?? defaultStickPricing.warranty,
    },
  });
}

// PUT /api/admin/settings — update stick pricing
export async function PUT(req: NextRequest) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const body = await req.json();
  const db = await getDb();
  await db.collection("settings").updateOne(
    { key: "products" },
    {
      $set: {
        seniorPrice: String(body.seniorPrice ?? "").slice(0, 60),
        juniorPrice: String(body.juniorPrice ?? "").slice(0, 60),
        warranty: String(body.warranty ?? "").slice(0, 120),
      },
    },
    { upsert: true }
  );
  return NextResponse.json({ success: true });
}
