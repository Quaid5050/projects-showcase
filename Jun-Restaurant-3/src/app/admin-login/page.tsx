'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'

// ============================================================
// Admin login page — standalone, outside the admin layout
// ============================================================

export default function AdminLoginPage() {
  const router = useRouter()
  const setUser = useAuthStore((s) => s.setUser)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Invalid email or password')
        return
      }

      if (data.data.user.role !== 'admin') {
        setError('This account does not have admin access.')
        return
      }

      setUser(data.data.user)
      router.push('/admin')
    } catch {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Card */}
        <div className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-3xl mb-3">🏮</p>
            <h1 className="text-xl font-bold text-white mb-1">Admin Login</h1>
            <p className="text-xs text-[#666]">Mascot Chinese Cuisine</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {error && (
              <div className="p-3 bg-red-900/30 border border-red-700/50 rounded-lg text-sm text-red-400">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs text-[#888] mb-1.5 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="w-full bg-[#2a2a2a] border border-[#333] text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#e8604c] placeholder:text-[#555] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-[#888] mb-1.5 uppercase tracking-wide">
                Password
              </label>
              <input
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#2a2a2a] border border-[#333] text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#e8604c] placeholder:text-[#555] transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 rounded-lg text-sm font-semibold text-white disabled:opacity-50 transition-opacity mt-2"
              style={{ background: 'linear-gradient(90deg, #e8604c, #f0a500)' }}
            >
              {isLoading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
