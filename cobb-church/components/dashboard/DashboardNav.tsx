'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/directory', label: 'Directory' },
  { href: '/resources', label: 'Resources' },
  { href: '/events', label: 'Events' },
  { href: '/dashboard/events', label: 'My events' },
  { href: '/dashboard/crisis', label: 'Crisis alerts' },
  { href: '/dashboard/messages', label: 'Messages' },
  { href: '/dashboard/notifications', label: 'Notifications' },
  { href: '/dashboard/profile', label: 'Profile' },
]

export default function DashboardNav() {
  const pathname = usePathname()

  return (
    <header className="bg-navy-dark text-white border-b border-navy-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/dashboard" className="font-bold text-gold tracking-tight">
          Church Dashboard
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {links.map((l) => {
            const active =
              l.href === '/dashboard'
                ? pathname === '/dashboard'
                : pathname === l.href || pathname.startsWith(`${l.href}/`)
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'hover:text-gold transition-colors',
                  active ? 'text-gold font-semibold' : 'text-gray-200'
                )}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="text-white hover:text-gold self-start lg:self-auto"
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </header>
  )
}
