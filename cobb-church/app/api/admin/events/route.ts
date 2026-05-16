import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdminApi } from '@/lib/api-auth'

export async function GET() {
  try {
    const { session, response } = await requireAdminApi()
    if (!session) return response!

    const events = await prisma.event.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(events)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { session, response } = await requireAdminApi()
    if (!session) return response!

    const body = await request.json()
    
    const event = await prisma.event.create({
      data: {
        ...body,
        slug: body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        date: new Date(body.date),
      },
    })

    return NextResponse.json(event)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 })
  }
}
