import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdminApi } from '@/lib/api-auth'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { session, response } = await requireAdminApi()
    if (!session) return response!

    const { id } = await params
    const story = await prisma.pastorStory.findUnique({
      where: { id },
    })

    if (!story) {
      return NextResponse.json({ error: 'Pastor story not found' }, { status: 404 })
    }

    return NextResponse.json(story)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch pastor story' }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { session, response } = await requireAdminApi()
    if (!session) return response!

    const { id } = await params
    const body = await request.json()

    const story = await prisma.pastorStory.update({
      where: { id },
      data: {
        ...body,
        slug: body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      },
    })

    return NextResponse.json(story)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update pastor story' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { session, response } = await requireAdminApi()
    if (!session) return response!

    const { id } = await params
    await prisma.pastorStory.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete pastor story' }, { status: 500 })
  }
}
