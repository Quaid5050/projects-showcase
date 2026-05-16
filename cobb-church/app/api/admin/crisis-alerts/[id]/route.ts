import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { requireAdminApi } from '@/lib/api-auth'

const patchSchema = z.object({
  title: z.string().min(1).optional(),
  body: z.string().min(1).optional(),
  urgency: z.string().min(1).optional(),
  location: z.string().optional(),
  instructions: z.string().optional(),
  active: z.boolean().optional(),
  notifyByEmail: z.boolean().optional(),
})

export async function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!
  const { id } = await ctx.params
  const alert = await prisma.crisisAlert.findUnique({
    where: { id },
    include: {
      responses: {
        orderBy: { createdAt: 'desc' },
        include: { church: { select: { name: true } }, user: { select: { name: true, email: true } } },
      },
    },
  })
  if (!alert) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(alert)
}

export async function PATCH(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!
  const { id } = await ctx.params
  const parsed = patchSchema.safeParse(await req.json().catch(() => ({})))
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input', details: parsed.error.flatten() }, { status: 400 })
  }
  const row = await prisma.crisisAlert.update({
    where: { id },
    data: parsed.data,
  })
  return NextResponse.json(row)
}

export async function DELETE(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!
  const { id } = await ctx.params
  await prisma.crisisResponse.deleteMany({ where: { crisisAlertId: id } })
  await prisma.crisisAlert.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
