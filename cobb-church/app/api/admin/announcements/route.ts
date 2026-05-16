import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { requireAdminApi } from '@/lib/api-auth'
import { sendEmail, appOrigin } from '@/lib/email'
import { announcementEmail } from '@/lib/emailTemplates'
import { activeChurchUserRecipients } from '@/lib/notify-church'

const createSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
  published: z.boolean().optional(),
  notifyByEmail: z.boolean().optional(),
})

export async function GET() {
  const { session, response } = await requireAdminApi()
  if (!session) return response!
  const rows = await prisma.announcement.findMany({ orderBy: { createdAt: 'desc' }, take: 100 })
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
  const ann = await prisma.announcement.create({
    data: {
      title: d.title,
      body: d.body,
      published: d.published ?? true,
      notifyByEmail: d.notifyByEmail ?? false,
      createdBy: session.user.email || session.user.id,
    },
  })

  if (ann.notifyByEmail && ann.published) {
    const origin = appOrigin()
    const recipients = await activeChurchUserRecipients()
    for (const r of recipients) {
      const tpl = announcementEmail({
        pastorName: r.pastorName,
        title: ann.title,
        body: ann.body,
        dashboardUrl: origin,
      })
      await sendEmail({
        to: r.email,
        subject: tpl.subject,
        text: tpl.text,
        html: tpl.html,
        template: 'announcement',
        relatedEntityType: 'Announcement',
        relatedEntityId: ann.id,
      })
    }
    await prisma.announcement.update({
      where: { id: ann.id },
      data: { emailSentAt: new Date() },
    })
  }

  return NextResponse.json(ann)
}
