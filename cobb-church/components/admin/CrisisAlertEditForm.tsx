'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function CrisisAlertEditForm({
  id,
  initial,
}: {
  id: string
  initial: {
    title: string
    body: string
    urgency: string
    location: string
    instructions: string
    notifyByEmail: boolean
  }
}) {
  const router = useRouter()
  const [title, setTitle] = useState(initial.title)
  const [body, setBody] = useState(initial.body)
  const [urgency, setUrgency] = useState(initial.urgency)
  const [location, setLocation] = useState(initial.location)
  const [instructions, setInstructions] = useState(initial.instructions)
  const [notifyByEmail, setNotifyByEmail] = useState(initial.notifyByEmail)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/crisis-alerts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, urgency, location, instructions, notifyByEmail }),
      })
      if (!res.ok) {
        setError('Save failed')
        return
      }
      router.refresh()
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={save} className="space-y-4 border rounded-lg p-4 bg-gray-50">
      <h3 className="font-semibold text-navy-dark">Edit alert details</h3>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div>
        <Label htmlFor="e-title">Title</Label>
        <Input id="e-title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="e-body">Description</Label>
        <Textarea id="e-body" rows={5} value={body} onChange={(e) => setBody(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="e-urg">Urgency</Label>
        <Input id="e-urg" value={urgency} onChange={(e) => setUrgency(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="e-loc">Location</Label>
        <Input id="e-loc" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div>
        <Label htmlFor="e-ins">Instructions</Label>
        <Textarea id="e-ins" rows={3} value={instructions} onChange={(e) => setInstructions(e.target.value)} />
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={notifyByEmail} onChange={(e) => setNotifyByEmail(e.target.checked)} />
        Send email to active church users when activated
      </label>
      <Button type="submit" size="sm" disabled={loading} className="bg-navy-dark text-white">
        {loading ? 'Saving…' : 'Save changes'}
      </Button>
    </form>
  )
}
