'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import type { Church } from '@prisma/client'

type ChurchProfileFormProps = {
  church: Church
}

export default function ChurchProfileForm({ church }: ChurchProfileFormProps) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)
  const [form, setForm] = useState({
    name: church.name,
    pastorName: church.pastorName,
    email: church.email,
    phone: church.phone,
    website: church.website || '',
    address: church.address,
    city: church.city,
    state: church.state,
    zip: church.zip,
    description: church.description,
    denomination: church.denomination || '',
    ministries: church.ministries.join(', '),
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    try {
      const res = await fetch('/api/dashboard/church', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          website: form.website || null,
          denomination: form.denomination || null,
          ministries: form.ministries.split(',').map((s) => s.trim()).filter(Boolean),
        }),
      })
      if (!res.ok) {
        const j = await res.json().catch(() => ({}))
        setMessage({ type: 'err', text: j.error || 'Save failed' })
        return
      }
      setMessage({ type: 'ok', text: 'Profile saved successfully.' })
    } catch {
      setMessage({ type: 'err', text: 'Network error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="p-6 space-y-4">
          {message && (
            <p className={message.type === 'ok' ? 'text-green-700 text-sm' : 'text-red-600 text-sm'}>
              {message.text}
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Church name</Label>
              <Input id="name" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pastorName">Pastor name</Label>
              <Input id="pastorName" name="pastorName" value={form.pastorName} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" value={form.phone} onChange={handleChange} required />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="website">Website</Label>
              <Input id="website" name="website" value={form.website} onChange={handleChange} />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" name="address" value={form.address} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" name="city" value={form.city} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input id="state" name="state" value={form.state} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip">Zip</Label>
              <Input id="zip" name="zip" value={form.zip} onChange={handleChange} required />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" value={form.description} onChange={handleChange} rows={4} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="denomination">Denomination</Label>
              <Input id="denomination" name="denomination" value={form.denomination} onChange={handleChange} />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="ministries">Ministries (comma-separated)</Label>
              <Input id="ministries" name="ministries" value={form.ministries} onChange={handleChange} />
            </div>
          </div>
          <Button type="submit" disabled={loading} className="bg-gold hover:bg-gold-light text-navy-dark font-semibold">
            {loading ? 'Saving…' : 'Save changes'}
          </Button>
        </CardContent>
      </Card>
    </form>
  )
}
