import { prisma } from '@/lib/prisma'

type SendEmailInput = {
  to: string
  subject: string
  text: string
  html: string
  template: string
  relatedEntityType?: string
  relatedEntityId?: string
}

function appOrigin() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    process.env.NEXTAUTH_URL?.replace(/\/$/, '') ||
    process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, '') ||
    'http://localhost:3000'
  )
}

async function sendViaResend(to: string, subject: string, html: string, text: string) {
  const key = process.env.RESEND_API_KEY
  if (!key) return { ok: false as const, error: 'RESEND_API_KEY not set' }

  const from = process.env.EMAIL_FROM || 'Cobb Church Network <onboarding@resend.dev>'
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from, to, subject, html, text }),
  })
  if (!res.ok) {
    const errText = await res.text().catch(() => res.statusText)
    return { ok: false as const, error: errText || res.statusText }
  }
  return { ok: true as const }
}

export async function sendEmail(input: SendEmailInput) {
  const { to, subject, text, html, template, relatedEntityType, relatedEntityId } = input

  const log = async (status: 'SENT' | 'LOGGED' | 'FAILED', error?: string) => {
    try {
      await prisma.emailLog.create({
        data: {
          to,
          subject,
          template,
          status,
          error: error ?? null,
          relatedEntityType: relatedEntityType ?? null,
          relatedEntityId: relatedEntityId ?? null,
        },
      })
    } catch (e) {
      console.error('[email] EmailLog write failed', e)
    }
  }

  const hasResend = !!process.env.RESEND_API_KEY

  if (hasResend) {
    const result = await sendViaResend(to, subject, html, text)
    if (result.ok) {
      await log('SENT')
      return { sent: true, mode: 'resend' as const }
    }
    console.error('[email] Resend failed:', result.error)
    await log('FAILED', result.error)
    return { sent: false, mode: 'resend' as const, error: result.error }
  }

  // Development / no provider: log body (no secrets) and persist log
  console.log('[email] (console mode) To:', to)
  console.log('[email] Subject:', subject)
  console.log('[email] Template:', template)
  console.log('[email] Text:\n', text)
  await log('LOGGED')
  return { sent: false, mode: 'console' as const }
}

export { appOrigin }
