'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function EventRegisterForm({
  eventId,
  isLoggedInChurch,
  alreadyRegistered,
  isFull,
  defaultName,
  defaultEmail,
}: {
  eventId: string
  isLoggedInChurch: boolean
  alreadyRegistered: boolean
  isFull: boolean
  defaultName: string
  defaultEmail: string
}) {
  const router = useRouter()
  const [name, setName] = useState(defaultName)
  const [email, setEmail] = useState(defaultEmail)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  if (!isLoggedInChurch) {
    return (
      <div className="space-y-2">
        <Button asChild className="w-full bg-gold hover:bg-gold/90 text-dark-blue font-bold">
          <Link href={`/login?callbackUrl=${encodeURIComponent(`/events/${eventId}`)}`}>Sign in to RSVP</Link>
        </Button>
        <Button asChild variant="outline" className="w-full border-navy-dark text-navy-dark font-bold">
          <Link href="/join">Join the network</Link>
        </Button>
      </div>
    )
  }

  if (alreadyRegistered) {
    return <p className="text-sm text-green-700 font-medium">You are registered for this event.</p>
  }

  if (isFull) {
    return <p className="text-sm text-red-700 font-medium">This event has reached capacity.</p>
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch(`/api/events/${eventId}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ attendeeName: name, attendeeEmail: email }),
      })
      const j = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(typeof j.error === 'string' ? j.error : 'Registration failed')
        return
      }
      setDone(true)
      router.refresh()
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return <p className="text-sm text-green-700 font-medium">You&apos;re registered. Check your email for confirmation.</p>
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div>
        <Label htmlFor="att-name">Name</Label>
        <Input id="att-name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="att-email">Email</Label>
        <Input id="att-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <Button type="submit" disabled={loading} className="w-full bg-gold hover:bg-gold/90 text-dark-blue font-bold">
        {loading ? 'Saving…' : 'Register / RSVP'}
      </Button>
    </form>
  )
}
