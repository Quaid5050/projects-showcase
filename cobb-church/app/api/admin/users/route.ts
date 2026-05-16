import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { requireAdminApi } from '@/lib/api-auth'

export async function GET() {
  const { session, response } = await requireAdminApi()
  if (!session) return response!

  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
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

  return NextResponse.json(users)
}

export async function POST(request: Request) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!

  const body = await request.json()
  if (!body?.email || !body?.password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
  }

  const role = body.role === 'ADMIN' ? 'ADMIN' : 'CHURCH_USER'
  const hashedPassword = await bcrypt.hash(body.password, 10)

  const user = await prisma.user.create({
    data: {
      name: body.name || null,
      email: body.email,
      password: hashedPassword,
      role,
      churchId: body.churchId || null,
      status: body.status === 'INACTIVE' ? 'INACTIVE' : 'ACTIVE',
      image: body.image || null,
    },
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
