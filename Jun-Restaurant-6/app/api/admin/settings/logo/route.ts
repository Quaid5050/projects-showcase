import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import SiteSetting from "@/models/SiteSetting";
import connectDB from "@/lib/mongodb";

async function guard(s: any) { return !s || (s.user as any)?.role !== "admin"; }

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (await guard(session)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("file") as File;
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const ext = file.name.split(".").pop() || "png";
  const filename = `logo-${Date.now()}.${ext}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");

  await mkdir(uploadDir, { recursive: true });
  await writeFile(path.join(uploadDir, filename), buffer);

  const logoPath = `/uploads/${filename}`;
  await connectDB();
  await SiteSetting.findOneAndUpdate({}, { logo: logoPath }, { upsert: true });

  return NextResponse.json({ logo: logoPath });
}
