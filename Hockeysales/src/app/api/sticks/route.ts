import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

// GET /api/sticks — public: stick inventory
export async function GET() {
  try {
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
  } catch (error) {
    console.error("GET /api/sticks error:", error);
    return NextResponse.json({ sticks: [] }, { status: 200 });
  }
}
