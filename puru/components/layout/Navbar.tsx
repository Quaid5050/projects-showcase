'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { company } from '@/lib/data/company';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Resources Hub', href: '/resources' },
      { label: 'Global Markets', href: '/global-markets' },
      { label: 'Partnerships', href: '/partnerships' },
      { label: 'Distributors Wanted', href: '/partnerships/distributors-wanted' },
      { label: 'Investments', href: '/investments' },
      { label: 'Safe Solution®', href: '/products/new-products/safe-solution-floor-safety-system' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setOpenGroup(null);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href.split('?')[0].split('#')[0]));

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <div className={`transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-surface-border shadow-soft' : 'bg-white/75 backdrop-blur-md border-b border-transparent'}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid h-[72px] grid-cols-[auto_1fr_auto] items-center gap-3 sm:h-20 sm:gap-4">
              <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="YUVAAN INTERNATIONAL">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-surface-border bg-white sm:h-14 sm:w-14">
                  <Image src="/logo-dark.png" alt="YUVAAN INTERNATIONAL logo" fill className="object-contain p-0.5" sizes="56px" priority />
                </div>
                <div className="hidden flex-col leading-none sm:flex">
                  <span className="font-sora text-base font-bold uppercase tracking-[0.14em] text-ink">YUVAAN</span>
                  <span className="mt-1 font-inter text-[11px] uppercase tracking-[0.28em] text-accent">International</span>
                </div>
              </Link>

              <nav className="hidden lg:flex items-center justify-center gap-1" aria-label="Main Navigation">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <div key={link.label} className="relative group">
                      <Link
                        href={link.href}
                        className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                          active ? 'text-accent bg-accent-soft' : 'text-ink-muted hover:text-ink hover:bg-surface-muted'
                        }`}
                      >
                        {link.label}
                        {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                      </Link>
                      {link.children && (
                        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 absolute left-1/2 -translate-x-1/2 top-full pt-3 z-[70] transition-all">
                          <div className="w-72 rounded-2xl bg-white border border-surface-border p-2 shadow-card-hover">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm text-ink-muted hover:text-ink hover:bg-surface-muted transition-all"
                              >
                                {child.label}
                                <ArrowRight className="w-3.5 h-3.5 text-accent" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className="flex items-center justify-end gap-2">
                <Link href="/contact#inquiry-form" className="hidden btn-primary !px-5 !py-2.5 lg:inline-flex">
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-white text-ink lg:hidden"
                  aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-navigation"
                >
                  {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-white pb-[env(safe-area-inset-bottom)] lg:hidden"
          >
            <div className="px-4 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-20 sm:px-6 sm:pt-24">
              <nav id="mobile-navigation" className="flex flex-col" aria-label="Mobile Navigation">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  const expanded = openGroup === link.label;
                  return (
                    <div key={link.href} className="border-b border-surface-border">
                      <div className="flex items-center">
                        <Link
                          href={link.href}
                          className={`flex-1 py-4 font-sora text-lg font-semibold sm:text-xl ${active ? 'text-accent' : 'text-ink'}`}
                        >
                          {link.label}
                        </Link>
                        {link.children && (
                          <button
                            type="button"
                            onClick={() => setOpenGroup(expanded ? null : link.label)}
                            className="flex h-11 w-11 items-center justify-center text-steel-grey"
                            aria-label={`Toggle ${link.label} menu`}
                          >
                            <ChevronDown className={`w-5 h-5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>
                      {link.children && expanded && (
                        <div className="pb-4 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center justify-between rounded-xl px-4 py-3 bg-surface-muted text-ink-muted text-sm"
                            >
                              {child.label}
                              <ArrowRight className="w-4 h-4 text-accent" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className="mt-8 space-y-3">
                <Link href="/contact#inquiry-form" className="btn-primary w-full">
                  Request a Quote
                </Link>
                <a href={`tel:${company.publicPhoneTel}`} className="block text-center text-sm text-steel-grey hover:text-accent">
                  {company.publicPhoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
