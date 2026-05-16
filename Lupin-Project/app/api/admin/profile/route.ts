import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function GET() {
  const session = await auth()
  if ((session?.user as any)?.role !== "admin") return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  
  // Try to get admin from DB, fallback to env
  const admin = await prisma.admin.findFirst()
  if (admin) {
    return NextResponse.json({ email: admin.email, name: admin.name, source: "database" })
  }
  return NextResponse.json({ 
    email: process.env.ADMIN_EMAIL, 
    name: "Admin", 
    source: "environment" 
  })
}

export async function PATCH(req: NextRequest) {
  const session = await auth()
  if ((session?.user as any)?.role !== "admin") return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  
  const { email, password, name } = await req.json()
  
  // Get or create admin
  let admin = await prisma.admin.findFirst()
  
  const data: any = {}
  if (email) data.email = email
  if (name) data.name = name
  if (password) data.password = await bcrypt.hash(password, 12)
  
  if (admin) {
    admin = await prisma.admin.update({ where: { id: admin.id }, data })
  } else {
    // Create first admin from env
    admin = await prisma.admin.create({
      data: {
        email: email || process.env.ADMIN_EMAIL!,
        password: password ? await bcrypt.hash(password, 12) : await bcrypt.hash(process.env.ADMIN_PASSWORD!, 12),
        name: name || "Admin",
      },
    })
  }
  
  return NextResponse.json({ success: true, email: admin.email, name: admin.name })
}
