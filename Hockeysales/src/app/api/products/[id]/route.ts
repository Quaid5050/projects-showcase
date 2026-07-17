import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

// GET /api/products/[id] — public: a single product for the checkout page
export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    let _id: ObjectId;
    try {
      _id = new ObjectId(id);
    } catch {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const db = await getDb();
    const p = await db.collection("products").findOne({ _id });
    if (!p) return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json({
      product: {
        id: p._id.toString(),
        name: p.name,
        brand: p.brand || "",
        category: p.category || "",
        price: p.price || "",
        status: p.status || "In Stock",
        description: p.description || "",
        image: p.image || "",
      },
    });
  } catch (error) {
    console.error("GET /api/products/[id] error:", error);
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
