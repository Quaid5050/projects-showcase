'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from './CartProvider';
import { CartIcon, MenuIcon, CloseIcon } from './Icons';

export default function Header() {
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1a0a00] shadow-lg' : 'bg-[#1a0a00]/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.png"
                alt="Burnaby Palace Restaurant"
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-[#FFD700] font-bold text-sm leading-tight">Burnaby Palace</p>
              <p className="text-gray-300 text-xs leading-tight">Chinese Cuisine</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-200 hover:text-[#FFD700] transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="relative flex items-center gap-1.5 bg-[#8B0000] hover:bg-[#a00000] text-white px-3 py-1.5 rounded-full transition-colors duration-200"
              aria-label={`Cart with ${itemCount} items`}
            >
              <CartIcon className="w-4 h-4" />
              <span className="text-xs font-medium hidden sm:inline">Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#FFD700] text-[#1a0a00] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden text-gray-200 p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1a0a00] border-t border-[#8B0000]/30">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-200 hover:text-[#FFD700] transition-colors py-2.5 text-sm font-medium border-b border-gray-800 last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              className="text-gray-200 hover:text-[#FFD700] transition-colors py-2.5 text-sm font-medium flex items-center gap-2"
              onClick={() => setMobileOpen(false)}
            >
              <CartIcon className="w-4 h-4" />
              Cart {itemCount > 0 && (
                <span className="bg-[#FFD700] text-[#1a0a00] text-xs font-bold px-1.5 py-0.5 rounded-full">{itemCount}</span>
              )}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
