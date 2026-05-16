import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdminApi } from '@/lib/api-auth'
import { sendEmail, appOrigin } from '@/lib/email'
import { crisisAlertEmail } from '@/lib/emailTemplates'
import { activeChurchUserRecipients, notifyUsersAtChurch } from '@/lib/notify-church'

export async function POST(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!
  const { id } = await ctx.params
  const alert = await prisma.crisisAlert.findUnique({ where: { id } })
  if (!alert) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  await prisma.crisisAlert.update({
    where: { id },
    data: { active: true },
  })

  const churches = await prisma.church.findMany({
    where: { published: true, approvalStatus: 'APPROVED' },
    select: { id: true },
  })
  for (const c of churches) {
    await notifyUsersAtChurch(c.id, [
      {
        type: 'CRISIS_ALERT',
        title: `Crisis alert: ${alert.title}`,
        body: alert.body.slice(0, 500),
        actionUrl: '/dashboard/crisis',
      },
    ])
  }

  if (alert.notifyByEmail) {
    const origin = appOrigin()
    const recipients = await activeChurchUserRecipients()
    for (const r of recipients) {
      const tpl = crisisAlertEmail({
        pastorName: r.pastorName,
        title: alert.title,
        description: alert.body,
        urgency: alert.urgency,
        location: alert.location,
        instructions: alert.instructions,
        dashboardUrl: origin,
      })
      await sendEmail({
        to: r.email,
        subject: tpl.subject,
        text: tpl.text,
        html: tpl.html,
        template: 'crisis_alert',
        relatedEntityType: 'CrisisAlert',
        relatedEntityId: alert.id,
      })
    }
    await prisma.crisisAlert.update({
      where: { id },
      data: { emailSentAt: new Date() },
    })
  }

  return NextResponse.json({ ok: true })
}
