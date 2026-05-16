import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { requireAdminApi } from '@/lib/api-auth'

const updateSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  category: z.string().min(1).optional(),
  type: z.enum(['OFFER', 'REQUEST']).optional(),
  churchId: z.string().min(1).optional(),
  status: z.enum(['ACTIVE', 'CLOSED']).optional(),
  published: z.boolean().optional(),
})

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!

  const { id } = await context.params
  const resource = await prisma.resource.findUnique({
    where: { id },
    include: { church: { select: { name: true, id: true } } },
  })

  if (!resource) {
    return NextResponse.json({ error: 'Resource not found' }, { status: 404 })
  }

  return NextResponse.json(resource)
}

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!

  const { id } = await context.params
  const body = await request.json()
  const parsed = updateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', details: parsed.error.flatten() }, { status: 400 })
  }

  const resource = await prisma.resource.update({
    where: { id },
    data: parsed.data,
  })

  return NextResponse.json(resource)
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!

  const { id } = await context.params
  await prisma.resource.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
