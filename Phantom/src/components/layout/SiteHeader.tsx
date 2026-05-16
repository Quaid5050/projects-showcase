"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBookingModal } from "@/contexts/BookingModalContext";
import { NAV_LINKS, SITE } from "@/lib/content";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const LOGO = "/branding/pac-phantom-logo.png";

function navLinkActive(href: string, pathname: string | null) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const { openBooking } = useBookingModal();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const threshold = 32;
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setScrolled(window.scrollY > 32);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/";
  const pinned = !isHome || scrolled || open;
  const barClass = [
    "site-header-surface border-b",
    pinned
      ? "header-surface--pinned border-white/10"
      : "header-surface--hero border-transparent",
  ].join(" ");

  const linkBase =
    "shrink-0 whitespace-nowrap px-1.5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors sm:px-2 sm:text-[11px] sm:tracking-[0.16em] lg:px-2.5";

  const bookBtnClass =
    "rounded-md border-2 border-white bg-black px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm transition hover:border-white/90 hover:bg-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 sm:text-[11px]";

  return (
    <header className={`fixed inset-x-0 top-0 z-[120] ${barClass}`}>
      <div className="mx-auto flex min-h-[4.25rem] max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:min-h-[4.75rem] sm:gap-4 sm:px-6 sm:py-3.5 lg:min-h-[5rem] lg:px-8 lg:py-4">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400/80 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12">
            <Image
              src={LOGO}
              alt={`${SITE.name} logo`}
              fill
              className="object-contain invert"
              sizes="48px"
              priority
            />
          </div>
          <div className="leading-none">
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.28em] text-white sm:text-[11px] sm:tracking-[0.32em]">
              PAC Phantom
            </p>
            <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.22em] text-white/45 sm:text-[10px]">
              Auto Center
            </p>
          </div>
        </Link>

        <nav
          className="hidden min-w-0 flex-1 justify-center px-2 lg:flex"
          aria-label="Primary"
        >
          <div className="flex max-w-full items-center justify-center gap-0.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-1 md:gap-2 [&::-webkit-scrollbar]:hidden">
            {NAV_LINKS.map((l) => {
              const active = navLinkActive(l.href, pathname);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`${linkBase} border-b-2 ${
                    active
                      ? "border-rose-500 text-rose-500"
                      : "border-transparent text-white/85 hover:text-white"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={openBooking}
            aria-label="Book appointment"
            className={`hidden sm:inline-flex ${bookBtnClass}`}
          >
            Book
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 bg-black/50 text-white/90 backdrop-blur-sm transition hover:border-white/35 hover:bg-black/70 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden className="text-lg leading-none">
              {open ? "×" : "≡"}
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            className="border-t border-white/10 bg-[#050506]/98 backdrop-blur-md lg:hidden"
            aria-label="Mobile primary"
          >
            <div className="flex max-h-[75vh] flex-col gap-0.5 overflow-y-auto px-4 py-4">
              {NAV_LINKS.map((l) => {
                const active = navLinkActive(l.href, pathname);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-[0.16em] ${
                      active ? "text-rose-500" : "text-white/80 hover:bg-white/5"
                    }`}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openBooking();
                }}
                className="mt-3 w-full rounded-md border-2 border-white bg-black py-3.5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white/90 hover:bg-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
              >
                Book appointment
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
