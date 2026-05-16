'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function ResourceRespondForm({
  resourceId,
  viewerChurchId,
  ownerChurchId,
  defaultName,
  defaultEmail,
}: {
  resourceId: string
  viewerChurchId: string | null
  ownerChurchId: string
  defaultName: string
  defaultEmail: string
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState('')
  const [contactName, setContactName] = useState(defaultName)
  const [contactEmail, setContactEmail] = useState(defaultEmail)
  const [contactPhone, setContactPhone] = useState('')

  const isOwn = viewerChurchId !== null && viewerChurchId === ownerChurchId

  const submit = async () => {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch(`/api/resources/${resourceId}/respond`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, contactName, contactEmail, contactPhone }),
      })
      const j = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(typeof j.error === 'string' ? j.error : 'Could not send response')
        return
      }
      setOpen(false)
      setMessage('')
      router.refresh()
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  if (!viewerChurchId) {
    return (
      <div className="flex flex-col gap-2">
        <Button asChild className="w-full bg-navy-dark hover:bg-navy-medium text-white font-semibold">
          <Link href={`/login?callbackUrl=${encodeURIComponent(`/resources/${resourceId}`)}`}>Sign in to respond</Link>
        </Button>
        <Button asChild variant="outline" className="w-full border-navy-dark text-navy-dark">
          <Link href="/join">Join the network</Link>
        </Button>
      </div>
    )
  }

  if (isOwn) {
    return (
      <p className="text-sm text-medium-gray text-center">This resource belongs to your church.</p>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-gold hover:bg-gold/90 text-dark-blue font-bold">Respond to this listing</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-white border-gray-200 shadow-xl">
        <DialogHeader>
          <DialogTitle>Respond to this church</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div className="space-y-2">
            <Label htmlFor="msg">Message</Label>
            <Textarea id="msg" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cn">Contact name</Label>
            <Input id="cn" value={contactName} onChange={(e) => setContactName(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ce">Contact email</Label>
            <Input id="ce" type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cp">Contact phone</Label>
            <Input id="cp" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} required />
          </div>
          <Button
            type="button"
            className="w-full bg-navy-dark text-white"
            disabled={loading}
            onClick={() => void submit()}
          >
            {loading ? 'Sending…' : 'Send response'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
