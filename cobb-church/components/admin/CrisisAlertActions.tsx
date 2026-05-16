'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function CrisisAlertActions({ id, active }: { id: string; active: boolean }) {
  const router = useRouter()
  const [loading, setLoading] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const activate = async () => {
    setError(null)
    setLoading('activate')
    try {
      const res = await fetch(`/api/admin/crisis-alerts/${id}/activate`, { method: 'POST' })
      if (!res.ok) {
        const j = await res.json().catch(() => ({}))
        setError(typeof j.error === 'string' ? j.error : 'Activate failed')
        return
      }
      router.refresh()
    } catch {
      setError('Network error')
    } finally {
      setLoading(null)
    }
  }

  const deactivate = async () => {
    setError(null)
    setLoading('deactivate')
    try {
      const res = await fetch(`/api/admin/crisis-alerts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ active: false }),
      })
      if (!res.ok) {
        setError('Update failed')
        return
      }
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
      {!active ? (
        <Button type="button" className="bg-red-700 text-white" disabled={loading !== null} onClick={() => void activate()}>
          {loading === 'activate' ? 'Activating…' : 'Activate alert (notify churches)'}
        </Button>
      ) : (
        <Button type="button" variant="outline" disabled={loading !== null} onClick={() => void deactivate()}>
          {loading === 'deactivate' ? 'Updating…' : 'Deactivate'}
        </Button>
      )}
    </div>
  )
}
