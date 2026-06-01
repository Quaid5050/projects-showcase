import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import MenuItem from "@/models/MenuItem";

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  await connectDB();
  const item = await MenuItem.findOne({ slug: params.slug, isAvailable: true }).populate("category").lean();
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(item);
}
