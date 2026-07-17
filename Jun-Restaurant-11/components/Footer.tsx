import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, MapPinIcon, ClockIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a0a00] text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-[#8B0000]/40">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Burnaby Palace Restaurant"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="text-[#FFD700] font-bold text-base">Burnaby Palace Restaurant</p>
                <p className="text-gray-400 text-xs">Chinese Cuisine</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Authentic Chinese cuisine prepared with care. Order online for convenient pickup.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#FFD700] font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPinIcon className="w-4 h-4 text-[#8B0000] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">3110 Boundary Rd, Burnaby, BC V5M 4A2</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-[#8B0000] flex-shrink-0" />
                <a href="tel:+16044371818" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  +1 604-437-1818
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-[#8B0000] flex-shrink-0" />
                <span className="text-gray-400">Open Daily: 11:00 AM – 9:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#FFD700] font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/menu', label: 'Menu' },
                { href: '/cart', label: 'Cart' },
                { href: '/#contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#FFD700] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {currentYear} Burnaby Palace Restaurant. All rights reserved.</p>
          <p>3110 Boundary Rd, Burnaby, BC · +1 604-437-1818</p>
        </div>
      </div>
    </footer>
  );
}
