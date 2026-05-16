import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdminApi } from '@/lib/api-auth'

export async function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!
  const { id } = await ctx.params
  const event = await prisma.event.findUnique({ where: { id } })
  if (!event) return NextResponse.json({ error: 'Event not found' }, { status: 404 })

  const rows = await prisma.eventRegistration.findMany({
    where: { eventId: id },
    orderBy: { createdAt: 'desc' },
    include: {
      user: { select: { name: true, email: true } },
      church: { select: { name: true, slug: true } },
    },
  })
  return NextResponse.json({ event, registrations: rows })
}
