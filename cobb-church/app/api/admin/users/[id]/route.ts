import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { requireAdminApi } from '@/lib/api-auth'

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!

  const { id } = await context.params
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      churchId: true,
      status: true,
      image: true,
      createdAt: true,
      updatedAt: true,
    },
  })

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  return NextResponse.json(user)
}

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!

  const { id } = await context.params
  const body = await request.json()

  const data: {
    name?: string | null
    email?: string
    role?: string
    churchId?: string | null
    status?: string
    image?: string | null
    password?: string
  } = {}

  if (body.name !== undefined) data.name = body.name
  if (body.email !== undefined) data.email = body.email
  if (body.role !== undefined) data.role = body.role === 'ADMIN' ? 'ADMIN' : 'CHURCH_USER'
  if (body.churchId !== undefined) data.churchId = body.churchId || null
  if (body.status !== undefined) data.status = body.status
  if (body.image !== undefined) data.image = body.image

  if (body.password) {
    data.password = await bcrypt.hash(body.password, 10)
  }

  if (Object.keys(data).length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
  }

  const user = await prisma.user.update({
    where: { id },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      churchId: true,
      status: true,
      image: true,
      createdAt: true,
      updatedAt: true,
    },
  })

  return NextResponse.json(user)
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!

  const { id } = await context.params
  await prisma.user.delete({
    where: { id },
  })

  return NextResponse.json({ success: true })
}
