import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import connectDB from "@/lib/mongodb";
import Promotion from "@/models/Promotion";

async function guard(s: any) { return !s || (s.user as any)?.role !== "admin"; }

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (await guard(session)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectDB();
  const body = await req.json();
  const promo = await Promotion.findByIdAndUpdate(params.id, body, { new: true });
  if (!promo) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(promo);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (await guard(session)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectDB();
  await Promotion.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
