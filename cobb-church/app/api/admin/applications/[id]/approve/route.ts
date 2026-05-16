import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import { prisma } from '@/lib/prisma'
import { requireAdminApi } from '@/lib/api-auth'
import { uniqueChurchSlug } from '@/lib/slug'
import { sendEmail, appOrigin } from '@/lib/email'
import { approvalEmail, accountLoginEmail } from '@/lib/emailTemplates'

function generateTempPassword() {
  return crypto.randomBytes(10).toString('base64url').slice(0, 14)
}

export async function POST(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { session, response } = await requireAdminApi()
  if (!session) return response!

  const { id } = await context.params
  const application = await prisma.onboardingApplication.findUnique({ where: { id } })
  if (!application || application.status !== 'PENDING') {
    return NextResponse.json({ error: 'Application not found or not pending' }, { status: 400 })
  }

  const existingUser = await prisma.user.findUnique({ where: { email: application.email } })
  if (existingUser) {
    return NextResponse.json(
      { error: 'A user account already exists for this email. Reject this application or use another email.' },
      { status: 409 }
    )
  }

  const slug = await uniqueChurchSlug(application.churchName)
  const tempPass = generateTempPassword()
  const hashed = await bcrypt.hash(tempPass, 10)
  const pastorName = `${application.firstName} ${application.lastName}`.trim()

  const church = await prisma.church.create({
    data: {
      name: application.churchName,
      slug,
      pastorName,
      email: application.email,
      phone: application.phone,
      website: application.churchWebsite || null,
      address: 'TBD — update in dashboard',
      city: application.churchCity,
      state: 'GA',
      zip: '00000',
      description: application.message || 'Church profile pending update.',
      denomination: null,
      ministries: application.howToConnect?.length ? application.howToConnect : [],
      image: null,
      services: [],
      size: null,
      founded: null,
      approvalStatus: 'APPROVED',
      published: true,
    },
  })

  const user = await prisma.user.create({
    data: {
      name: pastorName,
      email: application.email,
      password: hashed,
      role: 'CHURCH_USER',
      churchId: church.id,
      status: 'ACTIVE',
    },
  })

  await prisma.church.update({
    where: { id: church.id },
    data: { ownerUserId: user.id },
  })

  await prisma.onboardingApplication.update({
    where: { id: application.id },
    data: {
      status: 'APPROVED',
      churchId: church.id,
      userId: user.id,
      approvedAt: new Date(),
    },
  })

  await prisma.notification.create({
    data: {
      userId: user.id,
      churchId: church.id,
      type: 'APPLICATION_APPROVED',
      title: 'Welcome to the Cobb Church Network',
      body: `Your application for ${church.name} was approved. Check your email for login details.`,
      actionUrl: '/dashboard',
    },
  })

  const loginLink = `${appOrigin()}/login`

  const appr = approvalEmail({
    firstName: application.firstName,
    pastorName,
    churchName: application.churchName,
    email: application.email,
  })
  await sendEmail({
    to: application.email,
    subject: appr.subject,
    text: appr.text,
    html: appr.html,
    template: 'approval',
    relatedEntityType: 'OnboardingApplication',
    relatedEntityId: application.id,
  })

  const acc = accountLoginEmail({
    firstName: application.firstName,
    churchName: application.churchName,
    email: application.email,
    loginLink,
    temporaryPassword: tempPass,
  })
  await sendEmail({
    to: application.email,
    subject: acc.subject,
    text: acc.text,
    html: acc.html,
    template: 'account_login',
    relatedEntityType: 'User',
    relatedEntityId: user.id,
  })

  return NextResponse.json({ ok: true, churchId: church.id, userId: user.id })
}
