import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdminApi } from '@/lib/api-auth'

export async function GET() {
  try {
    const { session, response } = await requireAdminApi()
    if (!session) return response!

    const stories = await prisma.pastorStory.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(stories)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch pastor stories' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { session, response } = await requireAdminApi()
    if (!session) return response!

    const body = await request.json()

    const story = await prisma.pastorStory.create({
      data: {
        ...body,
        slug: body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      },
    })

    return NextResponse.json(story)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create pastor story' }, { status: 500 })
  }
}
