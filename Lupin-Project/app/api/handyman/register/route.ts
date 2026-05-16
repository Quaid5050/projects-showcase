import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, phone, city, postalCode, skills, bio, yearsExperience, availability } = await req.json()
    const existing = await prisma.handyman.findUnique({ where: { email } })
    if (existing) return NextResponse.json({ error: "Email already registered" }, { status: 400 })
    const hashed = await bcrypt.hash(password, 12)
    const h = await prisma.handyman.create({ data: { name, email, password: hashed, phone, city, postalCode, skills: skills || [], bio, yearsExperience, availability: availability || "full-time" } })
    return NextResponse.json({ success: true, id: h.id })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Registration failed" }, { status: 500 })
  }
}
