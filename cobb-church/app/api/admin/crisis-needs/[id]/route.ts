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
    const crisisNeed = await prisma.crisisNeed.findUnique({
      where: { id },
    })

    if (!crisisNeed) {
      return NextResponse.json({ error: 'Crisis need not found' }, { status: 404 })
    }

    return NextResponse.json(crisisNeed)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch crisis need' }, { status: 500 })
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

    const crisisNeed = await prisma.crisisNeed.update({
      where: { id },
      data: {
        ...body,
        needBy: body.needBy ? new Date(body.needBy) : null,
      },
    })

    return NextResponse.json(crisisNeed)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update crisis need' }, { status: 500 })
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
    await prisma.crisisNeed.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete crisis need' }, { status: 500 })
  }
}
