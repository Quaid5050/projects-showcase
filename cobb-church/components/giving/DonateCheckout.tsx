'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Heart, Shield } from 'lucide-react'

const PRESETS = [
  { label: '$25', cents: 2500 },
  { label: '$50', cents: 5000 },
  { label: '$100', cents: 10000 },
  { label: '$250', cents: 25000 },
]

export default function DonateCheckout() {
  const [amountCents, setAmountCents] = useState(5000)
  const [custom, setCustom] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [frequency, setFrequency] = useState<'ONE_TIME' | 'MONTHLY'>('ONE_TIME')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const checkout = async () => {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/donations/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amountCents,
          donorEmail: email.trim() || undefined,
          donorName: name.trim() || undefined,
          frequency,
        }),
      })
      const j = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(typeof j.error === 'string' ? j.error : 'Could not start checkout')
        return
      }
      if (j.url) {
        window.location.href = j.url as string
        return
      }
      setError('No checkout URL returned')
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardContent className="p-8">
        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

        <div className="flex gap-2 mb-6">
          <Button
            type="button"
            variant={frequency === 'ONE_TIME' ? 'default' : 'outline'}
            className={frequency === 'ONE_TIME' ? 'bg-navy-dark text-white' : 'border-navy-dark'}
            onClick={() => setFrequency('ONE_TIME')}
          >
            One-time
          </Button>
          <Button
            type="button"
            variant={frequency === 'MONTHLY' ? 'default' : 'outline'}
            className={frequency === 'MONTHLY' ? 'bg-navy-dark text-white' : 'border-navy-dark'}
            onClick={() => setFrequency('MONTHLY')}
          >
            Monthly
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-6">
          {PRESETS.map((p) => (
            <Button
              key={p.cents}
              type="button"
              variant="outline"
              className={`border-2 font-semibold ${amountCents === p.cents ? 'border-gold bg-gold/10' : 'border-gray-300 hover:border-gold'}`}
              onClick={() => {
                setAmountCents(p.cents)
                setCustom('')
              }}
            >
              {p.label}
            </Button>
          ))}
        </div>

        <div className="mb-6 space-y-2">
          <Label htmlFor="other-amt">Other amount (USD)</Label>
          <Input
            id="other-amt"
            placeholder="e.g. 75"
            value={custom}
            onChange={(e) => {
              setCustom(e.target.value)
              const n = parseFloat(e.target.value)
              if (!Number.isNaN(n) && n > 0) {
                setAmountCents(Math.round(n * 100))
              }
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="dn">Name (optional)</Label>
            <Input id="dn" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="de">Email (optional)</Label>
            <Input id="de" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>

        <Button
          type="button"
          className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold py-6 text-lg mb-4"
          disabled={loading || amountCents < 100}
          onClick={() => void checkout()}
        >
          <Heart className="mr-2 h-5 w-5" />
          {loading ? 'Redirecting…' : 'GIVE NOW (SECURE CHECKOUT)'}
        </Button>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <Shield className="h-4 w-4" />
          <p>Secure payment via Stripe (test mode when configured).</p>
        </div>
      </CardContent>
    </Card>
  )
}
