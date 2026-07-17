'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed w-full z-50 top-0">
      {/* Top info bar */}
      <div className="bg-red-600 text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+16479810084" className="flex items-center gap-1.5 hover:text-red-200 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+1 (647) 981-0084</span>
            </a>
            <a href="mailto:royalempirereno@gmail.com" className="flex items-center gap-1.5 hover:text-red-200 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>royalempirereno@gmail.com</span>
            </a>
          </div>
          <span className="text-red-200 text-xs tracking-wide">Serving Toronto & GTA — Free Estimates</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-1 md:py-2'
            : 'bg-white py-1 md:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/image.png"
                alt="Royal Empire Logo"
                width={240}
                height={96}
                className="h-14 md:h-24 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 group ${
                      isActive
                        ? 'text-red-600'
                        : 'text-gray-700 hover:text-red-600'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-red-600 rounded-full transition-all duration-300 ${
                        isActive ? 'w-4/5' : 'w-0 group-hover:w-4/5'
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* CTA button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+16479810084"
                className="flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-md hover:bg-red-700 active:scale-95 transition-all duration-200 text-sm font-semibold shadow-md shadow-red-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Now</span>
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center px-4 py-3 rounded-md text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-red-50 text-red-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
                  }`}
                >
                  {isActive && <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2" />}
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-gray-100">
              <a
                href="tel:+16479810084"
                className="flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
