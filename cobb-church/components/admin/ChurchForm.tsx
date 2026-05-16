'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'

interface ChurchFormProps {
  church?: any
}

export default function ChurchForm({ church }: ChurchFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: church?.name || '',
    description: church?.description || '',
    pastorName: church?.pastorName || '',
    address: church?.address || '',
    city: church?.city || '',
    state: church?.state || 'GA',
    zip: church?.zip || '',
    phone: church?.phone || '',
    email: church?.email || '',
    website: church?.website || '',
    image: church?.image || '',
    denomination: church?.denomination || '',
    size: church?.size || '',
    founded: church?.founded || '',
    services: church?.services?.join(', ') || '',
    ministries: church?.ministries?.join(', ') || '',
    published: church?.published ?? true,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const data = {
        ...formData,
        services: formData.services.split(',').map((s: string) => s.trim()).filter(Boolean),
        ministries: formData.ministries.split(',').map((m: string) => m.trim()).filter(Boolean),
      }

      const url = church 
        ? `/api/admin/churches/${church.id}`
        : '/api/admin/churches'
      
      const method = church ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        router.push('/admin/churches')
        router.refresh()
      }
    } catch (error) {
      console.error('Error saving church:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Church Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pastorName">Pastor Name *</Label>
              <Input
                id="pastorName"
                name="pastorName"
                value={formData.pastorName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address *</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="state">State *</Label>
              <Input
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="zip">ZIP Code *</Label>
              <Input
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                name="image"
                type="url"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="denomination">Denomination</Label>
              <Input
                id="denomination"
                name="denomination"
                value={formData.denomination}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="size">Church Size</Label>
              <Input
                id="size"
                name="size"
                placeholder="e.g., 100-200"
                value={formData.size}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="founded">Founded Year</Label>
              <Input
                id="founded"
                name="founded"
                placeholder="e.g., 1995"
                value={formData.founded}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="services">Services (comma-separated)</Label>
            <Input
              id="services"
              name="services"
              placeholder="Sunday Worship, Bible Study, Youth Group"
              value={formData.services}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ministries">Ministries (comma-separated)</Label>
            <Input
              id="ministries"
              name="ministries"
              placeholder="Children's Ministry, Outreach, Music"
              value={formData.ministries}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="published"
              checked={formData.published}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, published: checked }))
              }
            />
            <Label htmlFor="published">Published</Label>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" disabled={loading}>
              {loading ? 'Saving...' : church ? 'Update Church' : 'Create Church'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}
