import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { requireChurchDashboardApi } from '@/lib/api-auth'

const patchSchema = z.object({
  read: z.boolean(),
})

export async function PATCH(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireChurchDashboardApi()
  if (!session) return response!

  const { id } = await ctx.params
  const parsed = patchSchema.safeParse(await req.json().catch(() => ({})))
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input', details: parsed.error.flatten() }, { status: 400 })
  }

  const msg = await prisma.message.findFirst({
    where: { id, recipientChurchId: session.user.churchId },
  })
  if (!msg) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const updated = await prisma.message.update({
    where: { id },
    data: { read: parsed.data.read },
  })
  return NextResponse.json(updated)
}
