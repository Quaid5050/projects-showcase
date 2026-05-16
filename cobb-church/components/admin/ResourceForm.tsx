'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'

type ChurchOption = { id: string; name: string }

interface ResourceFormProps {
  resource?: {
    id: string
    title: string
    description: string
    category: string
    type: string
    churchId: string
    status: string
    published: boolean
  }
}

export default function ResourceForm({ resource }: ResourceFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [churches, setChurches] = useState<ChurchOption[]>([])
  const [formData, setFormData] = useState({
    title: resource?.title || '',
    description: resource?.description || '',
    category: resource?.category || '',
    type: (resource?.type === 'REQUEST' ? 'REQUEST' : 'OFFER') as 'OFFER' | 'REQUEST',
    churchId: resource?.churchId || '',
    status: (resource?.status === 'CLOSED' ? 'CLOSED' : 'ACTIVE') as 'ACTIVE' | 'CLOSED',
    published: resource?.published ?? true,
  })

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch('/api/admin/churches')
        if (!res.ok) return
        const data = (await res.json()) as { id: string; name: string }[]
        if (!cancelled) setChurches(data.map((c) => ({ id: c.id, name: c.name })))
      } catch {
        /* ignore */
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const payload = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        type: formData.type,
        churchId: formData.churchId,
        status: formData.status,
        published: formData.published,
      }

      const url = resource ? `/api/admin/resources/${resource.id}` : '/api/admin/resources'
      const method = resource ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        router.push('/admin/resources')
        router.refresh()
      }
    } catch (error) {
      console.error('Error saving resource:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="title">Resource title *</Label>
              <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Input id="category" name="category" value={formData.category} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Type *</Label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="OFFER">Offer</option>
                <option value="REQUEST">Request</option>
              </select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="churchId">Church *</Label>
              <select
                id="churchId"
                name="churchId"
                value={formData.churchId}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select church</option>
                {churches.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="ACTIVE">Active</option>
                <option value="CLOSED">Closed</option>
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="published"
              checked={formData.published}
              onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, published: checked }))}
            />
            <Label htmlFor="published">Published</Label>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" disabled={loading} className="bg-gold hover:bg-gold-light text-navy-dark">
              {loading ? 'Saving...' : resource ? 'Update Resource' : 'Create Resource'}
            </Button>
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}
