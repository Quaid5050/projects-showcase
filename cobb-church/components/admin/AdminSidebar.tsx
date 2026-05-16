'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Church,
  Calendar,
  Package,
  AlertCircle,
  MessageSquare,
  Users,
  ClipboardList,
  Megaphone,
  Siren,
  DollarSign,
  Mail,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Applications', href: '/admin/applications', icon: ClipboardList },
  { name: 'Announcements', href: '/admin/announcements', icon: Megaphone },
  { name: 'Crisis Alerts', href: '/admin/crisis-alerts', icon: Siren },
  { name: 'Churches', href: '/admin/churches', icon: Church },
  { name: 'Events', href: '/admin/events', icon: Calendar },
  { name: 'Resources', href: '/admin/resources', icon: Package },
  { name: 'Crisis Needs', href: '/admin/crisis-needs', icon: AlertCircle },
  { name: 'Pastor Stories', href: '/admin/pastor-stories', icon: MessageSquare },
  { name: 'Donations', href: '/admin/donations', icon: DollarSign },
  { name: 'Email log', href: '/admin/email-logs', icon: Mail },
  { name: 'Users', href: '/admin/users', icon: Users },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:block w-64 bg-navy-dark border-r border-navy-medium min-h-[calc(100vh-57px)]">
      <nav className="p-4 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-gold text-navy-dark'
                  : 'text-gray-300 hover:bg-navy-medium hover:text-white'
              )}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
