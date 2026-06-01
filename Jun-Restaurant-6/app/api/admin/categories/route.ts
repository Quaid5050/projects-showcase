import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import connectDB from "@/lib/mongodb";
import Category from "@/models/Category";
import slugify from "slugify";

async function guard(session: any) {
  return !session || (session.user as any)?.role !== "admin";
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (await guard(session)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectDB();
  const cats = await Category.find({}).sort({ sortOrder: 1, name: 1 }).lean();
  return NextResponse.json(cats);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (await guard(session)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectDB();
  const body = await req.json();
  const slug = slugify(body.name, { lower: true, strict: true });
  const cat = await Category.create({ ...body, slug });
  return NextResponse.json(cat, { status: 201 });
}
