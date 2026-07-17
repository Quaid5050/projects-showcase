import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import MenuItem from "@/models/MenuItem";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectDB();
    const items = await MenuItem.find({ isAvailable: true }).sort({
      category: 1,
      name: 1,
    });
    return Response.json({ items });
  } catch (error) {
    console.error("GET /api/menu error:", error);
    return Response.json({ error: "Failed to fetch menu" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const item = await MenuItem.create(body);
    return Response.json({ item }, { status: 201 });
  } catch (error) {
    console.error("POST /api/menu error:", error);
    return Response.json({ error: "Failed to create menu item" }, { status: 500 });
  }
}
