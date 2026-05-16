import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { requireChurchDashboardApi } from '@/lib/api-auth'

const bodySchema = z.object({
  crisisAlertId: z.string().min(1),
  message: z.string().min(1),
  contactName: z.string().min(1),
  contactEmail: z.string().email(),
  contactPhone: z.string().min(1),
})

export async function POST(req: NextRequest) {
  const { session, response } = await requireChurchDashboardApi()
  if (!session) return response!

  const parsed = bodySchema.safeParse(await req.json().catch(() => ({})))
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input', details: parsed.error.flatten() }, { status: 400 })
  }

  const alert = await prisma.crisisAlert.findFirst({
    where: { id: parsed.data.crisisAlertId, active: true },
  })
  if (!alert) {
    return NextResponse.json({ error: 'Crisis alert not found or not active' }, { status: 400 })
  }

  const churchId = session.user.churchId

  await prisma.crisisResponse.create({
    data: {
      crisisAlertId: alert.id,
      userId: session.user.id,
      churchId,
      message: parsed.data.message,
      contactName: parsed.data.contactName,
      contactEmail: parsed.data.contactEmail,
      contactPhone: parsed.data.contactPhone,
    },
  })

  const admins = await prisma.user.findMany({
    where: { role: 'ADMIN', status: 'ACTIVE' },
    select: { id: true },
  })
  for (const a of admins) {
    await prisma.notification.create({
      data: {
        userId: a.id,
        type: 'CRISIS_RESPONSE',
        title: 'Crisis response submitted',
        body: `${parsed.data.contactName} from your network offered help on: ${alert.title}`,
        actionUrl: `/admin/crisis-alerts/${alert.id}`,
      },
    })
  }

  return NextResponse.json({ ok: true })
}
