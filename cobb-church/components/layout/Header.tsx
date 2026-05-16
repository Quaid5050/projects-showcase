'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Resources', href: '/resources' },
    { label: 'Directory', href: '/directory' },
    { label: 'Events', href: '/events' },
    { label: 'Crisis Response', href: '/crisis-response' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-navy-dark transition-shadow duration-200 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
              <span className="text-navy-dark text-xl font-bold">⛪</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm leading-tight">COBB CHURCH</span>
              <span className="text-xs text-gold font-semibold leading-tight">NETWORK</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  item.label === 'Crisis Response'
                    ? 'text-gold border-b-2 border-gold pb-1'
                    : 'text-white hover:text-gold'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/join">
              <Button className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6">
                JOIN THE NETWORK
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:text-gold hover:bg-navy-medium">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link
              href="/admin/login"
              className="text-xs text-gray-400 hover:text-gold transition-colors px-1"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:bg-navy-medium"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-navy-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium transition-colors ${
                  item.label === 'Crisis Response'
                    ? 'text-gold bg-navy-medium'
                    : 'text-white hover:bg-navy-medium'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-3 space-y-2">
              <Link href="/join" className="block" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold">
                  JOIN THE NETWORK
                </Button>
              </Link>
              <Link href="/login" className="block" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-white text-white hover:bg-navy-medium">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Link href="/admin/login" className="block text-center text-xs text-gray-400 py-1" onClick={() => setIsMenuOpen(false)}>
                Admin login
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
