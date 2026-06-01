import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import SiteSetting from "@/models/SiteSetting";

export async function GET() {
  await connectDB();
  let setting = await SiteSetting.findOne().lean();
  if (!setting) {
    setting = await SiteSetting.create({});
    setting = await SiteSetting.findOne().lean();
  }
  return NextResponse.json(setting);
}
