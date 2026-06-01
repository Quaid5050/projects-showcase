import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import connectDB from "@/lib/mongodb";
import MenuItem from "@/models/MenuItem";
import slugify from "slugify";

async function guard(session: any) {
  return !session || (session.user as any)?.role !== "admin";
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (await guard(session)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectDB();
  const items = await MenuItem.find({}).populate("category").sort({ name: 1 }).lean();
  return NextResponse.json(items);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (await guard(session)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectDB();
  const body = await req.json();
  const slug = slugify(body.name, { lower: true, strict: true }) + "-" + Date.now();
  const item = await MenuItem.create({ ...body, slug });
  return NextResponse.json(item, { status: 201 });
}
