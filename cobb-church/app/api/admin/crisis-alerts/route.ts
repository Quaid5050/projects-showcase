import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { requireAdminApi } from '@/lib/api-auth'

const createSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
  urgency: z.string().min(1).optional(),
  location: z.string().optional(),
  instructions: z.string().optional(),
  active: z.boolean().optional(),
  notifyByEmail: z.boolean().optional(),
})

export async function GET() {
  const { session, response } = await requireAdminApi()
  if (!session) return response!
  const rows = await prisma.crisisAlert.findMany({ orderBy: { createdAt: 'desc' }, take: 100 })
  return NextResponse.json(rows)
}

export async function POST(req: NextRequest) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!
  const parsed = createSchema.safeParse(await req.json().catch(() => ({})))
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input', details: parsed.error.flatten() }, { status: 400 })
  }
  const d = parsed.data
  const row = await prisma.crisisAlert.create({
    data: {
      title: d.title,
      body: d.body,
      urgency: d.urgency ?? 'high',
      location: d.location ?? '',
      instructions: d.instructions ?? '',
      active: d.active ?? false,
      notifyByEmail: d.notifyByEmail ?? false,
      createdBy: session.user.email || session.user.id,
    },
  })
  return NextResponse.json(row)
}
