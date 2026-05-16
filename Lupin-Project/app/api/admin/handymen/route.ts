import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const session = await auth()
  if ((session?.user as any)?.role !== "admin") return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const handymen = await prisma.handyman.findMany({ select: { id: true, name: true, email: true, phone: true, city: true, postalCode: true, skills: true, status: true, feePercent: true, availability: true, createdAt: true }, orderBy: { createdAt: "desc" } })
  return NextResponse.json(handymen)
}
