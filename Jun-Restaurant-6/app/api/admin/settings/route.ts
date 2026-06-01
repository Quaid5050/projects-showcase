import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import connectDB from "@/lib/mongodb";
import SiteSetting from "@/models/SiteSetting";

async function guard(s: any) { return !s || (s.user as any)?.role !== "admin"; }

export async function GET() {
  const session = await getServerSession(authOptions);
  if (await guard(session)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectDB();
  let setting = await SiteSetting.findOne().lean();
  if (!setting) setting = await SiteSetting.create({});
  return NextResponse.json(setting);
}

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (await guard(session)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectDB();
  const body = await req.json();
  const setting = await SiteSetting.findOneAndUpdate({}, body, { new: true, upsert: true });
  return NextResponse.json(setting);
}
