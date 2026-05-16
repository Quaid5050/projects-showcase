import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const session = await auth()
  if ((session?.user as any)?.role !== "admin") return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const jobs = await prisma.job.findMany({ include: { handyman: { select: { id: true, name: true, city: true, phone: true } } }, orderBy: { createdAt: "desc" } })
  return NextResponse.json(jobs)
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    if ((session?.user as any)?.role !== "admin") return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    
    const body = await req.json()
    
    // Clean up the data - remove empty strings and convert types
    const data: any = {
      title: body.title,
      description: body.description,
      location: body.location || body.city,
      city: body.city,
      serviceType: body.serviceType,
      status: body.status || "open",
      feePercent: body.feePercent || 15,
    }
    
    // Optional fields
    if (body.postalCode) data.postalCode = body.postalCode
    if (body.clientName) data.clientName = body.clientName
    if (body.clientPhone) data.clientPhone = body.clientPhone
    if (body.scheduledDate) data.scheduledDate = new Date(body.scheduledDate)
    if (body.jobValue) data.jobValue = parseFloat(body.jobValue)
    if (body.handymanId) data.handymanId = body.handymanId
    
    const job = await prisma.job.create({ 
      data, 
      include: { handyman: { select: { id: true, name: true, city: true } } } 
    })
    
    return NextResponse.json(job)
  } catch (error) {
    console.error("Job creation error:", error)
    return NextResponse.json({ error: "Failed to create job", details: (error as Error).message }, { status: 500 })
  }
}
