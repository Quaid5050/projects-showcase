import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import connectDB from "@/lib/mongodb";
import Promotion from "@/models/Promotion";

async function guard(s: any) { return !s || (s.user as any)?.role !== "admin"; }

export async function GET() {
  const session = await getServerSession(authOptions);
  if (await guard(session)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectDB();
  return NextResponse.json(await Promotion.find({}).sort({ createdAt: -1 }).lean());
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (await guard(session)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectDB();
  const body = await req.json();
  const promo = await Promotion.create({ ...body, code: body.code?.toUpperCase() });
  return NextResponse.json(promo, { status: 201 });
}
