import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdminApi } from '@/lib/api-auth'
import { uniqueChurchSlug } from '@/lib/slug'

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!

  const { id } = await context.params
  const church = await prisma.church.findUnique({
    where: { id },
  })

  if (!church) {
    return NextResponse.json({ error: 'Church not found' }, { status: 404 })
  }

  return NextResponse.json(church)
}

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!

  const { id } = await context.params
  const body = await request.json()

  const name = typeof body.name === 'string' ? body.name.trim() : undefined
  const slug =
    name && name.length > 0
      ? await uniqueChurchSlug(name, id)
      : undefined

  const pastorName =
    body.pastorName !== undefined || body.pastor !== undefined
      ? String(body.pastorName || body.pastor || '').trim()
      : undefined

  const church = await prisma.church.update({
    where: { id },
    data: {
      ...(name ? { name, slug } : {}),
      ...(pastorName !== undefined ? { pastorName } : {}),
      ...(body.description !== undefined ? { description: body.description } : {}),
      ...(body.address !== undefined ? { address: body.address } : {}),
      ...(body.city !== undefined ? { city: body.city } : {}),
      ...(body.state !== undefined ? { state: body.state } : {}),
      ...(body.zip !== undefined ? { zip: body.zip } : {}),
      ...(body.phone !== undefined ? { phone: body.phone } : {}),
      ...(body.email !== undefined ? { email: body.email } : {}),
      ...(body.website !== undefined ? { website: body.website } : {}),
      ...(body.image !== undefined ? { image: body.image } : {}),
      ...(body.denomination !== undefined ? { denomination: body.denomination } : {}),
      ...(body.size !== undefined ? { size: body.size } : {}),
      ...(body.founded !== undefined ? { founded: body.founded } : {}),
      ...(body.services !== undefined ? { services: body.services } : {}),
      ...(body.ministries !== undefined ? { ministries: body.ministries } : {}),
      ...(body.published !== undefined ? { published: body.published } : {}),
      ...(body.approvalStatus !== undefined ? { approvalStatus: body.approvalStatus } : {}),
    },
  })

  return NextResponse.json(church)
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!

  const { id } = await context.params

  await prisma.church.delete({
    where: { id },
  })

  return NextResponse.json({ success: true })
}
