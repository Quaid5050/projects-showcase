import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const session = await auth()
  const user = session?.user as any
  if (!user || user.role !== "handyman") return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const jobs = await prisma.job.findMany({ where: { handymanId: user.id }, orderBy: { createdAt: "desc" } })
  return NextResponse.json(jobs)
}
