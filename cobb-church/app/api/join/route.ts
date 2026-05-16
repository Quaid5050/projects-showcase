import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { sendEmail } from '@/lib/email'
import { joinAdminNotification, joinApplicantConfirmation } from '@/lib/emailTemplates'

const joinSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(1, 'Phone is required'),
  churchName: z.string().min(1, 'Church name is required'),
  churchCity: z.string().min(1, 'Church city is required'),
  churchWebsite: z.string().optional().nullable(),
  role: z.string().min(1, 'Role is required'),
  connectionQuestion: z.string().optional().nullable(),
  howToConnect: z.array(z.string()).optional(),
})

function adminNotifyEmail() {
  return (
    process.env.ADMIN_NOTIFICATION_EMAIL ||
    process.env.ADMIN_EMAIL ||
    'admin@cobbchurch.org'
  )
}

export async function POST(request: NextRequest) {
  try {
    const json = await request.json()
    const parsed = joinSchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const d = parsed.data
    const howToConnect = d.howToConnect ?? []
    const messageParts = [d.connectionQuestion?.trim()].filter(Boolean)
    if (howToConnect.length) {
      messageParts.push(`How they want to connect: ${howToConnect.join(', ')}`)
    }
    const message = messageParts.join('\n\n') || null

    const application = await prisma.onboardingApplication.create({
      data: {
        firstName: d.firstName,
        lastName: d.lastName,
        email: d.email,
        phone: d.phone,
        churchName: d.churchName,
        churchCity: d.churchCity,
        churchWebsite: d.churchWebsite || null,
        roleTitle: d.role,
        message,
        howToConnect,
        status: 'PENDING',
      },
    })

    const applicantTpl = joinApplicantConfirmation({
      firstName: d.firstName,
      churchName: d.churchName,
    })
    await sendEmail({
      to: d.email,
      subject: applicantTpl.subject,
      text: applicantTpl.text,
      html: applicantTpl.html,
      template: 'join_applicant_confirmation',
      relatedEntityType: 'OnboardingApplication',
      relatedEntityId: application.id,
    })

    const adminTpl = joinAdminNotification({
      firstName: d.firstName,
      lastName: d.lastName,
      email: d.email,
      phone: d.phone,
      churchName: d.churchName,
      churchCity: d.churchCity,
      roleTitle: d.role,
    })
    await sendEmail({
      to: adminNotifyEmail(),
      subject: adminTpl.subject,
      text: adminTpl.text,
      html: adminTpl.html,
      template: 'join_admin_notification',
      relatedEntityType: 'OnboardingApplication',
      relatedEntityId: application.id,
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you for joining the Cobb Church Network! We will be in touch soon.',
      id: application.id,
    })
  } catch (e) {
    console.error('[API] join error', e)
    return NextResponse.json({ error: 'An error occurred while processing your request' }, { status: 500 })
  }
}
