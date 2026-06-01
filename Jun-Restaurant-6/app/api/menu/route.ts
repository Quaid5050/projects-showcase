import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import MenuItem from "@/models/MenuItem";
import Category from "@/models/Category";

export async function GET(req: NextRequest) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  const query: any = { isAvailable: true };

  if (category && category !== "all") {
    const cat = await Category.findOne({ slug: category }).lean();
    if (cat) query.category = (cat as any)._id;
  }

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }

  const items = await MenuItem.find(query).populate("category").sort({ name: 1 }).lean();
  return NextResponse.json(items);
}
