'use client'

import type { ReactNode } from 'react'

/**
 * Wraps route content so each navigation gets a fresh mount and CSS entrance
 * animation (see globals.css). Scoped to <main> via app/template.tsx.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return <div className="page-transition-root">{children}</div>
}
