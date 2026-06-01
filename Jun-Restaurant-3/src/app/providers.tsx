'use client'

import React from 'react'

// Providers wrapper — extend here for any future client-side providers
export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
