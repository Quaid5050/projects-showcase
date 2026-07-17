import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import MenuItem from "@/models/MenuItem";

export const dynamic = "force-dynamic";

export async function PUT(
  request: NextRequest,
  ctx: RouteContext<"/api/menu/[id]">
) {
  try {
    await connectDB();
    const { id } = await ctx.params;
    const body = await request.json();
    const item = await MenuItem.findByIdAndUpdate(id, body, { new: true });
    if (!item) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json({ item });
  } catch (error) {
    console.error("PUT /api/menu/[id] error:", error);
    return Response.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  ctx: RouteContext<"/api/menu/[id]">
) {
  try {
    await connectDB();
    const { id } = await ctx.params;
    await MenuItem.findByIdAndDelete(id);
    return Response.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/menu/[id] error:", error);
    return Response.json({ error: "Failed to delete" }, { status: 500 });
  }
}
