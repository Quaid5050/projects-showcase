import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function GET() {
  const session = await auth()
  const user = session?.user as any
  if (!user || user.role !== "handyman") return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const profile = await prisma.handyman.findUnique({ where: { id: user.id }, select: { id: true, name: true, email: true, phone: true, city: true, postalCode: true, skills: true, bio: true, yearsExperience: true, availability: true, status: true, feePercent: true, createdAt: true } })
  return NextResponse.json(profile)
}

export async function PATCH(req: NextRequest) {
  const session = await auth()
  const user = session?.user as any
  if (!user || user.role !== "handyman") return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  
  const { password, status, feePercent, ...safe } = await req.json()
  
  // Build update data
  const updateData: any = { ...safe }
  
  // Hash password if provided
  if (password && password.trim()) {
    updateData.password = await bcrypt.hash(password, 12)
  }
  
  const updated = await prisma.handyman.update({ where: { id: user.id }, data: updateData })
  return NextResponse.json({ success: true, data: updated })
}
