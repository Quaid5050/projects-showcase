'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function ApplicationActions({
  applicationId,
  status,
}: {
  applicationId: string
  status: string
}) {
  const router = useRouter()
  const [loading, setLoading] = useState<'approve' | 'reject' | null>(null)
  const [error, setError] = useState<string | null>(null)

  if (status !== 'PENDING') {
    return (
      <p className="text-sm text-gray-600">
        This application is already <strong>{status}</strong>.
      </p>
    )
  }

  const approve = async () => {
    setLoading('approve')
    setError(null)
    try {
      const res = await fetch(`/api/admin/applications/${applicationId}/approve`, { method: 'POST' })
      const j = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(j.error || 'Approve failed')
        return
      }
      router.push('/admin/applications')
      router.refresh()
    } catch {
      setError('Network error')
    } finally {
      setLoading(null)
    }
  }

  const reject = async () => {
    if (!confirm('Reject this application?')) return
    setLoading('reject')
    setError(null)
    try {
      const res = await fetch(`/api/admin/applications/${applicationId}/reject`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sendEmail: true }),
      })
      const j = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(j.error || 'Reject failed')
        return
      }
      router.push('/admin/applications')
      router.refresh()
    } catch {
      setError('Network error')
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="flex flex-wrap gap-3 items-center">
      {error && <p className="text-sm text-red-600 w-full">{error}</p>}
      <Button
        type="button"
        className="bg-gold hover:bg-gold-light text-navy-dark font-semibold"
        disabled={loading !== null}
        onClick={approve}
      >
        {loading === 'approve' ? 'Approving…' : 'Approve'}
      </Button>
      <Button type="button" variant="destructive" disabled={loading !== null} onClick={reject}>
        {loading === 'reject' ? 'Rejecting…' : 'Reject'}
      </Button>
    </div>
  )
}
