import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { requireAdminApi } from '@/lib/api-auth'

const createSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  type: z.enum(['OFFER', 'REQUEST']),
  churchId: z.string().min(1),
  status: z.enum(['ACTIVE', 'CLOSED']).optional(),
  published: z.boolean().optional(),
})

export async function GET() {
  const { session, response } = await requireAdminApi()
  if (!session) return response!

  const resources = await prisma.resource.findMany({
    orderBy: { createdAt: 'desc' },
    include: { church: { select: { name: true, id: true } } },
  })

  return NextResponse.json(resources)
}

export async function POST(request: Request) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!

  const body = await request.json()
  const parsed = createSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', details: parsed.error.flatten() }, { status: 400 })
  }

  const resource = await prisma.resource.create({
    data: {
      title: parsed.data.title,
      description: parsed.data.description,
      category: parsed.data.category,
      type: parsed.data.type,
      churchId: parsed.data.churchId,
      status: parsed.data.status ?? 'ACTIVE',
      published: parsed.data.published !== false,
    },
  })

  return NextResponse.json(resource)
}
