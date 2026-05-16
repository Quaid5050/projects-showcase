'use client'

import { useState } from 'react'
import { signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function ChurchLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Invalid email or password')
        return
      }

      const session = await getSession()
      const role = session?.user?.role
      if (role === 'ADMIN' || role === 'admin') {
        router.push('/admin/dashboard')
        router.refresh()
        return
      }
      if (role === 'CHURCH_USER' || role === 'church_user') {
        router.push('/dashboard')
        router.refresh()
        return
      }
      setError('Unable to determine account type. Please contact support.')
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-dark px-4 py-12">
      <Card className="w-full max-w-md border-navy-medium bg-white">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center">
              <span className="text-2xl font-bold text-navy-dark">CCN</span>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center text-navy-dark">Church Dashboard Login</CardTitle>
          <CardDescription className="text-center text-gray-600">
            Sign in with the email and password provided when your church was approved.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="pastor@yourchurch.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>

            <p className="text-center text-sm text-gray-600">
              Network administrator?{' '}
              <Link href="/admin/login" className="text-navy-dark font-semibold underline">
                Admin login
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
