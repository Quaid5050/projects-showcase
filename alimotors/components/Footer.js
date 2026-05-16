import Link from 'next/link'
import Image from 'next/image'
import logo from './logo.png'

const services = [
  'Engine Repair',
  'Tire Change',
  'Oil Change',
  'Brake Service',
  'Car Diagnostics',
  'Body Paint Work',
]

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-forge-dark border-t border-forge-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src={logo}
                  alt="AutoForge Logo"
                  width={180}
                  height={70}
                  className="h-14 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            <p className="text-forge-gray text-sm leading-relaxed mb-6">
              Your trusted automotive service partner, delivering reliable car repair and maintenance with precision, care, and attention to detail.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">

              {/* Facebook */}
              <div className="w-8 h-8 border border-forge-border hover:border-forge-red flex items-center justify-center transition-colors duration-200 cursor-pointer group">
                <svg
                  className="w-3.5 h-3.5 text-forge-gray group-hover:text-forge-red transition-colors"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Instagram */}
              <div className="w-8 h-8 border border-forge-border hover:border-forge-red flex items-center justify-center transition-colors duration-200 cursor-pointer group">
                <svg
                  className="w-3.5 h-3.5 text-forge-gray group-hover:text-forge-red transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                </svg>
              </div>

              {/* TikTok */}
              <div className="w-8 h-8 border border-forge-border hover:border-forge-red flex items-center justify-center transition-colors duration-200 cursor-pointer group">
                <svg
                  className="w-3.5 h-3.5 text-forge-gray group-hover:text-forge-red transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.53V6.76a4.85 4.85 0 01-1.01-.07z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white text-lg tracking-wider mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-forge-gray hover:text-forge-red text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-forge-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-white text-lg tracking-wider mb-6">
              Our Services
            </h4>

            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-forge-gray hover:text-forge-red text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-forge-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white text-lg tracking-wider mb-6">
              Contact Info
            </h4>

            <ul className="space-y-4">
              <li className="text-forge-gray text-sm">
                1125 Crestlawn Dr, Mississauga, ON L4W 1A7, Canada
              </li>

              <li>
                <a
                  href="tel:+19052061313"
                  className="text-forge-gray hover:text-forge-red text-sm transition-colors"
                >
                  +19052061313
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@autoforge.com"
                  className="text-forge-gray hover:text-forge-red text-sm transition-colors"
                >
                  info@autoforge.com
                </a>
              </li>

              <li className="text-forge-gray text-sm">
                <div>Mon - Sat: 8:00 AM - 8:00 PM</div>
                <div>Sunday: 9:00 AM - 5:00 PM</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forge-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-forge-gray text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} AutoForge Workshop. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-forge-gray hover:text-forge-red text-sm transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-forge-gray hover:text-forge-red text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}