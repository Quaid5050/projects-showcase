'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function NewResourceForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialType = useMemo(() => {
    const t = (searchParams.get('type') || 'offer').toLowerCase()
    return t === 'request' ? 'REQUEST' : 'OFFER'
  }, [searchParams])

  const [type, setType] = useState<'OFFER' | 'REQUEST'>(initialType)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/dashboard/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, category, type }),
      })
      if (!res.ok) {
        const j = await res.json().catch(() => ({}))
        setError(j.error || 'Could not save')
        return
      }
      router.push('/dashboard')
      router.refresh()
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy-dark font-display">
          {type === 'OFFER' ? 'Offer a Resource' : 'Request a Resource'}
        </h1>
        <p className="text-gray-600 mt-1">This will be linked to your church.</p>
      </div>
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" checked={type === 'OFFER'} onChange={() => setType('OFFER')} />
              Offer
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" checked={type === 'REQUEST'} onChange={() => setType('REQUEST')} />
              Request
            </label>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="e.g. Volunteers, Space, Essentials"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                required
              />
            </div>
            <div className="flex gap-3">
              <Button type="submit" disabled={loading} className="bg-gold hover:bg-gold-light text-navy-dark">
                {loading ? 'Saving…' : 'Save'}
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link href="/dashboard/resources">Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
