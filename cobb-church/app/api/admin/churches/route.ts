import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdminApi } from '@/lib/api-auth'
import { uniqueChurchSlug } from '@/lib/slug'

export async function GET() {
  const { session, response } = await requireAdminApi()
  if (!session) return response!

  const churches = await prisma.church.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(churches)
}

export async function POST(request: Request) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!

  const body = await request.json()
  const pastorName = (body.pastorName || body.pastor || '').trim()
  const name = (body.name || '').trim()
  if (!name || !pastorName) {
    return NextResponse.json({ error: 'Name and pastor name are required' }, { status: 400 })
  }

  const slug = await uniqueChurchSlug(name)

  const church = await prisma.church.create({
    data: {
      name,
      slug,
      pastorName,
      description: body.description || '',
      address: body.address || '',
      city: body.city || '',
      state: body.state || 'GA',
      zip: body.zip || '',
      phone: body.phone || '',
      email: body.email || '',
      website: body.website || null,
      image: body.image || null,
      denomination: body.denomination || null,
      size: body.size || null,
      founded: body.founded || null,
      services: Array.isArray(body.services) ? body.services : [],
      ministries: Array.isArray(body.ministries) ? body.ministries : [],
      approvalStatus: body.approvalStatus || 'APPROVED',
      published: body.published !== false,
    },
  })

  return NextResponse.json(church)
}
