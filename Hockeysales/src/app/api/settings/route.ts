import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { defaultStickPricing } from "@/lib/productDefaults";

export const dynamic = "force-dynamic";

// GET /api/settings — public: product settings (stick pricing)
export async function GET() {
  try {
    const db = await getDb();
    const doc = await db.collection("settings").findOne({ key: "products" });
    return NextResponse.json({
      pricing: {
        seniorPrice: doc?.seniorPrice ?? defaultStickPricing.seniorPrice,
        juniorPrice: doc?.juniorPrice ?? defaultStickPricing.juniorPrice,
        warranty: doc?.warranty ?? defaultStickPricing.warranty,
      },
    });
  } catch (error) {
    console.error("GET /api/settings error:", error);
    return NextResponse.json({ pricing: defaultStickPricing }, { status: 200 });
  }
}
