'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function CrisisAlertNewForm() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [urgency, setUrgency] = useState('high')
  const [location, setLocation] = useState('')
  const [instructions, setInstructions] = useState('')
  const [notifyByEmail, setNotifyByEmail] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/admin/crisis-alerts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          body,
          urgency,
          location,
          instructions,
          active: false,
          notifyByEmail,
        }),
      })
      const j = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(typeof j.error === 'string' ? j.error : 'Failed')
        return
      }
      router.push(`/admin/crisis-alerts/${(j as { id: string }).id}`)
      router.refresh()
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="max-w-xl space-y-4 border rounded-lg p-6 bg-white">
      <h1 className="text-2xl font-bold text-gray-900">New crisis alert</h1>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div>
        <Label htmlFor="ct">Title</Label>
        <Input id="ct" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="cb">Description</Label>
        <Textarea id="cb" rows={6} value={body} onChange={(e) => setBody(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="urg">Urgency</Label>
        <Input id="urg" value={urgency} onChange={(e) => setUrgency(e.target.value)} required placeholder="e.g. high" />
      </div>
      <div>
        <Label htmlFor="loc">Location (optional)</Label>
        <Input id="loc" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Area or address" />
      </div>
      <div>
        <Label htmlFor="ins">Instructions (optional)</Label>
        <Textarea id="ins" rows={3} value={instructions} onChange={(e) => setInstructions(e.target.value)} />
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={notifyByEmail} onChange={(e) => setNotifyByEmail(e.target.checked)} />
        Send email to active church users when this alert is activated
      </label>
      <Button type="submit" disabled={loading} className="bg-gold text-navy-dark">
        {loading ? 'Saving…' : 'Save draft'}
      </Button>
    </form>
  )
}
