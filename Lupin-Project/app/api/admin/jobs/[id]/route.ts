import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await auth()
    console.log("PATCH /api/admin/jobs/[id] - Session:", session?.user)
    
    if ((session?.user as any)?.role !== "admin") {
      console.log("Unauthorized - role:", (session?.user as any)?.role)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const { id } = await params
    const body = await req.json()
    const job = await prisma.job.update({ where: { id }, data: body, include: { handyman: { select: { id: true, name: true, city: true } } } })
    return NextResponse.json(job)
  } catch (error) {
    console.error("PATCH job error:", error)
    return NextResponse.json({ error: "Failed to update job" }, { status: 500 })
  }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if ((session?.user as any)?.role !== "admin") return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params
  await prisma.job.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
