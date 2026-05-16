'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function AnnouncementCreateForm() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [notifyByEmail, setNotifyByEmail] = useState(false)
  const [published, setPublished] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/admin/announcements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, published, notifyByEmail }),
      })
      const j = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(typeof j.error === 'string' ? j.error : 'Failed to create')
        return
      }
      setTitle('')
      setBody('')
      setNotifyByEmail(false)
      router.refresh()
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4 max-w-xl border rounded-lg p-6 bg-white">
      <h2 className="font-semibold text-lg">New announcement</h2>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div>
        <Label htmlFor="at">Title</Label>
        <Input id="at" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="ab">Body</Label>
        <Textarea id="ab" rows={5} value={body} onChange={(e) => setBody(e.target.value)} required />
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} />
        Published (visible on church dashboards)
      </label>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={notifyByEmail} onChange={(e) => setNotifyByEmail(e.target.checked)} />
        Email active church users (uses EmailLog / Resend when configured)
      </label>
      <Button type="submit" disabled={loading} className="bg-gold text-navy-dark">
        {loading ? 'Saving…' : 'Create announcement'}
      </Button>
    </form>
  )
}
