import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { requireChurchDashboardApi } from '@/lib/api-auth'
import { sendEmail, appOrigin } from '@/lib/email'
import { eventRegistrationConfirmationEmail } from '@/lib/emailTemplates'

const bodySchema = z.object({
  attendeeName: z.string().min(1),
  attendeeEmail: z.string().email(),
})

export async function POST(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireChurchDashboardApi()
  if (!session) return response!

  const { id } = await ctx.params
  const json = await req.json().catch(() => null)
  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input', details: parsed.error.flatten() }, { status: 400 })
  }

  const event = await prisma.event.findFirst({
    where: { id, published: true },
  })
  if (!event) {
    return NextResponse.json({ error: 'Event not found' }, { status: 404 })
  }

  if (event.capacity != null && event.registered >= event.capacity) {
    return NextResponse.json({ error: 'This event is full' }, { status: 400 })
  }

  const churchId = session.user.churchId
  const existing = await prisma.eventRegistration.findFirst({
    where: { eventId: event.id, userId: session.user.id },
  })
  if (existing) {
    return NextResponse.json({ error: 'You are already registered for this event' }, { status: 409 })
  }

  const d = parsed.data

  try {
    await prisma.$transaction([
      prisma.eventRegistration.create({
        data: {
          eventId: event.id,
          userId: session.user.id,
          churchId,
          attendeeName: d.attendeeName,
          attendeeEmail: d.attendeeEmail,
          status: 'REGISTERED',
        },
      }),
      prisma.event.update({
        where: { id: event.id },
        data: { registered: { increment: 1 } },
      }),
    ])
  } catch (e: unknown) {
    const code = typeof e === 'object' && e && 'code' in e ? (e as { code: string }).code : ''
    if (code === 'P2002') {
      return NextResponse.json({ error: 'You are already registered for this event' }, { status: 409 })
    }
    throw e
  }

  const dateLabel = event.date.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const origin = appOrigin()
  const tpl = eventRegistrationConfirmationEmail({
    eventTitle: event.title,
    dateLabel,
    time: event.time,
    location: event.location,
    pastorOrUserName: d.attendeeName,
    dashboardUrl: origin,
  })

  await sendEmail({
    to: d.attendeeEmail,
    subject: tpl.subject,
    text: tpl.text,
    html: tpl.html,
    template: 'event_registration',
    relatedEntityType: 'Event',
    relatedEntityId: event.id,
  })

  return NextResponse.json({ ok: true })
}
