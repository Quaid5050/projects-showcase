'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function MarkMessageReadButton({ messageId }: { messageId: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const markRead = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/dashboard/messages/${messageId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ read: true }),
      })
      if (res.ok) router.refresh()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button type="button" size="sm" variant="outline" className="border-navy-dark" disabled={loading} onClick={() => void markRead()}>
      {loading ? 'Saving…' : 'Mark as read'}
    </Button>
  )
}
