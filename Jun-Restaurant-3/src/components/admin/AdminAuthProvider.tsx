'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/store/authStore'

// Hydrates auth state from the session cookie — used only by the admin layout.
// The public site no longer requires auth, so this lives here instead of the root Providers.
export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const setUser = useAuthStore((s) => s.setUser)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/auth/me')
        if (res.ok) {
          const data = await res.json()
          setUser(data.data.user)
        } else {
          setUser(null)
        }
      } catch {
        setUser(null)
      }
    }
    fetchUser()
  }, [setUser])

  return <>{children}</>
}
