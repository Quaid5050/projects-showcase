import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { requireChurchDashboardApi } from '@/lib/api-auth'
import { sendEmail, appOrigin } from '@/lib/email'
import { resourceResponseToChurchEmail } from '@/lib/emailTemplates'
import { notifyUsersAtChurch } from '@/lib/notify-church'

const bodySchema = z.object({
  message: z.string().min(1),
  contactName: z.string().min(1),
  contactEmail: z.string().email(),
  contactPhone: z.string().min(1),
})

const publicResourceWhere = {
  published: true,
  status: 'ACTIVE' as const,
  church: { published: true, approvalStatus: 'APPROVED' as const },
}

export async function POST(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireChurchDashboardApi()
  if (!session) return response!

  const { id: resourceId } = await ctx.params
  const json = await req.json().catch(() => null)
  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input', details: parsed.error.flatten() }, { status: 400 })
  }

  const resource = await prisma.resource.findFirst({
    where: { id: resourceId, ...publicResourceWhere },
    include: { church: true },
  })
  if (!resource) {
    return NextResponse.json({ error: 'Resource not found' }, { status: 404 })
  }

  const senderChurchId = session.user.churchId
  if (resource.churchId === senderChurchId) {
    return NextResponse.json({ error: 'You cannot respond to your own church listing' }, { status: 400 })
  }

  const senderChurch = await prisma.church.findUnique({ where: { id: senderChurchId } })
  const senderUser = await prisma.user.findUnique({ where: { id: session.user.id } })
  if (!senderChurch || !senderUser) {
    return NextResponse.json({ error: 'Sender profile incomplete' }, { status: 400 })
  }

  const d = parsed.data
  const subject = `Response: ${resource.title}`
  const body = `A church responded to your ${resource.type === 'REQUEST' ? 'request' : 'offer'}.

From: ${senderChurch.name}
Contact: ${d.contactName}
Email: ${d.contactEmail}
Phone: ${d.contactPhone}

Message:
${d.message}`

  const rr = await prisma.resourceResponse.create({
    data: {
      resourceId: resource.id,
      responderUserId: session.user.id,
      responderChurchId: senderChurchId,
      message: d.message,
      contactName: d.contactName,
      contactEmail: d.contactEmail,
      contactPhone: d.contactPhone,
      status: 'SUBMITTED',
    },
  })

  await prisma.message.create({
    data: {
      senderUserId: session.user.id,
      senderChurchId,
      recipientChurchId: resource.churchId,
      subject,
      body,
      messageKind: 'RESOURCE_RESPONSE',
      relatedResourceId: resource.id,
      relatedResourceResponseId: rr.id,
    },
  })

  await notifyUsersAtChurch(resource.churchId, [
    {
      type: 'RESOURCE_RESPONSE',
      title: 'A church responded to your resource',
      body: `${senderChurch.name} responded to “${resource.title}”.`,
      actionUrl: '/dashboard/messages',
    },
  ])

  const origin = appOrigin()
  const tpl = resourceResponseToChurchEmail({
    resourceTitle: resource.title,
    resourceType: resource.type,
    respondingChurchName: senderChurch.name,
    pastorReceivingName: resource.church.pastorName || 'Pastor',
    contactName: d.contactName,
    contactEmail: d.contactEmail,
    contactPhone: d.contactPhone,
    message: d.message,
    dashboardUrl: origin,
  })

  await sendEmail({
    to: resource.church.email,
    subject: tpl.subject,
    text: tpl.text,
    html: tpl.html,
    template: 'resource_response',
    relatedEntityType: 'Resource',
    relatedEntityId: resource.id,
  })

  return NextResponse.json({ ok: true })
}
