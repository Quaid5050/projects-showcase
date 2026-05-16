'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function CrisisRespondForm({
  crisisAlertId,
  defaultName,
  defaultEmail,
}: {
  crisisAlertId: string
  defaultName: string
  defaultEmail: string
}) {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const [contactName, setContactName] = useState(defaultName)
  const [contactEmail, setContactEmail] = useState(defaultEmail)
  const [contactPhone, setContactPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/dashboard/crisis-responses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ crisisAlertId, message, contactName, contactEmail, contactPhone }),
      })
      const j = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(typeof j.error === 'string' ? j.error : 'Could not submit')
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
    return <p className="text-sm text-green-700 font-medium">Thank you — your response was sent to network leaders.</p>
  }

  return (
    <form onSubmit={submit} className="space-y-3 border border-amber-200 rounded-lg p-4 bg-amber-50/50">
      <p className="text-sm font-semibold text-navy-dark">How can your church help?</p>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="space-y-1">
        <Label htmlFor={`m-${crisisAlertId}`}>Message</Label>
        <Textarea id={`m-${crisisAlertId}`} rows={3} value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div>
          <Label htmlFor={`n-${crisisAlertId}`}>Contact name</Label>
          <Input id={`n-${crisisAlertId}`} value={contactName} onChange={(e) => setContactName(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor={`e-${crisisAlertId}`}>Contact email</Label>
          <Input id={`e-${crisisAlertId}`} type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required />
        </div>
      </div>
      <div>
        <Label htmlFor={`p-${crisisAlertId}`}>Contact phone</Label>
        <Input id={`p-${crisisAlertId}`} value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} required />
      </div>
      <Button type="submit" size="sm" className="bg-navy-dark text-white" disabled={loading}>
        {loading ? 'Sending…' : 'Submit response'}
      </Button>
    </form>
  )
}
