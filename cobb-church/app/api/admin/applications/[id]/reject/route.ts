import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdminApi } from '@/lib/api-auth'
import { sendEmail } from '@/lib/email'
import { applicationRejectedEmail } from '@/lib/emailTemplates'

export async function POST(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!

  const { id } = await context.params
  const application = await prisma.onboardingApplication.findUnique({ where: { id } })
  if (!application || application.status !== 'PENDING') {
    return NextResponse.json({ error: 'Application not found or not pending' }, { status: 400 })
  }

  let sendNotice = true
  try {
    const text = await request.text()
    if (text) {
      const body = JSON.parse(text) as { sendEmail?: boolean }
      sendNotice = body?.sendEmail !== false
    }
  } catch {
    sendNotice = true
  }

  await prisma.onboardingApplication.update({
    where: { id },
    data: {
      status: 'REJECTED',
      rejectedAt: new Date(),
    },
  })

  if (sendNotice) {
    const tpl = applicationRejectedEmail(application.firstName)
    await sendEmail({
      to: application.email,
      subject: tpl.subject,
      text: tpl.text,
      html: tpl.html,
      template: 'application_rejected',
      relatedEntityType: 'OnboardingApplication',
      relatedEntityId: id,
    })
  }

  return NextResponse.json({ ok: true })
}
