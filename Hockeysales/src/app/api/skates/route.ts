import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

// GET /api/skates — public: skates list
export async function GET() {
  try {
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
  } catch (error) {
    console.error("GET /api/skates error:", error);
    return NextResponse.json({ skates: [] }, { status: 200 });
  }
}
