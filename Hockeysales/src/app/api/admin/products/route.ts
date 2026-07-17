import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/admin/products — all products
export async function GET(req: NextRequest) {
  const denied = requireAdmin(req);
  if (denied) return denied;

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
}

// POST /api/admin/products — create a product
export async function POST(req: NextRequest) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  const body = await req.json();
  if (!body.name) {
    return NextResponse.json({ error: "Product name is required." }, { status: 400 });
  }

  const db = await getDb();
  const result = await db.collection("products").insertOne({
    name: String(body.name).slice(0, 200),
    brand: body.brand ? String(body.brand).slice(0, 120) : "",
    category: body.category ? String(body.category).slice(0, 120) : "",
    price: body.price ? String(body.price).slice(0, 60) : "",
    status: body.status ? String(body.status).slice(0, 40) : "In Stock",
    description: body.description ? String(body.description).slice(0, 2000) : "",
    image: body.image ? String(body.image).slice(0, 1000) : "",
    createdAt: new Date(),
  });
  return NextResponse.json({ success: true, id: result.insertedId.toString() });
}
