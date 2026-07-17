import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

// GET /api/products — public: list all products managed in the admin panel
export async function GET() {
  try {
    const db = await getDb();
    const products = await db.collection("products").find({}).sort({ createdAt: -1 }).toArray();
    const mapped = products.map((p) => ({
      id: p._id.toString(),
      name: p.name,
      brand: p.brand || "",
      category: p.category || "",
      price: p.price || "",
      status: p.status || "In Stock",
      description: p.description || "",
      image: p.image || "",
    }));
    return NextResponse.json({ products: mapped });
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json({ products: [] }, { status: 200 });
  }
}
