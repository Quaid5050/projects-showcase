import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import { requireChurchDashboardApi } from '@/lib/api-auth'

const updateSchema = z.object({
  name: z.string().min(1).optional(),
  pastorName: z.string().min(1).optional(),
  email: z.string().email().optional(),
  phone: z.string().min(1).optional(),
  website: z.string().optional().nullable(),
  address: z.string().min(1).optional(),
  city: z.string().min(1).optional(),
  state: z.string().min(1).optional(),
  zip: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  denomination: z.string().optional().nullable(),
  ministries: z.array(z.string()).optional(),
  image: z.string().optional().nullable(),
})

export async function GET() {
  const { session, response } = await requireChurchDashboardApi()
  if (!session) return response!

  const church = await prisma.church.findUnique({
    where: { id: session.user.churchId },
  })
  if (!church) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(church)
}

export async function PUT(request: NextRequest) {
  const { session, response } = await requireChurchDashboardApi()
  if (!session) return response!

  const json = await request.json()
  const parsed = updateSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', details: parsed.error.flatten() }, { status: 400 })
  }

  const data = parsed.data
  const church = await prisma.church.update({
    where: { id: session.user.churchId },
    data: {
      ...data,
      ministries: data.ministries ?? undefined,
    },
  })

  return NextResponse.json(church)
}
