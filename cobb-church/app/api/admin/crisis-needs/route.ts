import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdminApi } from '@/lib/api-auth'

export async function GET() {
  try {
    const { session, response } = await requireAdminApi()
    if (!session) return response!

    const crisisNeeds = await prisma.crisisNeed.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(crisisNeeds)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch crisis needs' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { session, response } = await requireAdminApi()
    if (!session) return response!

    const body = await request.json()

    const crisisNeed = await prisma.crisisNeed.create({
      data: {
        ...body,
        needBy: body.needBy ? new Date(body.needBy) : null,
      },
    })

    return NextResponse.json(crisisNeed)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create crisis need' }, { status: 500 })
  }
}
