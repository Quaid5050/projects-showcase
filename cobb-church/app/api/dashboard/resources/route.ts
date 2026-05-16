import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import { sendEmail } from '@/lib/email'
import { resourceSubmittedEmail } from '@/lib/emailTemplates'
import { requireChurchDashboardApi } from '@/lib/api-auth'

const createSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  type: z.enum(['OFFER', 'REQUEST']),
  status: z.enum(['ACTIVE', 'CLOSED']).optional(),
})

export async function GET() {
  const { session, response } = await requireChurchDashboardApi()
  if (!session) return response!

  const resources = await prisma.resource.findMany({
    where: { churchId: session.user.churchId },
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(resources)
}

export async function POST(request: NextRequest) {
  const { session, response } = await requireChurchDashboardApi()
  if (!session) return response!

  const json = await request.json()
  const parsed = createSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', details: parsed.error.flatten() }, { status: 400 })
  }

  const church = await prisma.church.findUnique({ where: { id: session.user.churchId } })
  if (!church) return NextResponse.json({ error: 'Church not found' }, { status: 404 })

  const resource = await prisma.resource.create({
    data: {
      title: parsed.data.title,
      description: parsed.data.description,
      category: parsed.data.category,
      type: parsed.data.type,
      churchId: session.user.churchId,
      status: parsed.data.status ?? 'ACTIVE',
      published: true,
    },
  })

  const tpl = resourceSubmittedEmail({
    churchName: church.name,
    title: resource.title,
    type: resource.type,
    category: resource.category,
  })
  await sendEmail({
    to: church.email,
    subject: tpl.subject,
    text: tpl.text,
    html: tpl.html,
    template: 'resource_submitted',
    relatedEntityType: 'Resource',
    relatedEntityId: resource.id,
  })

  return NextResponse.json(resource)
}
