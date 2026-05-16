"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { CTALink } from "@/components/CTAButton";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

function navActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const svcRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!svcOpen) return;
    const close = (e: MouseEvent) => {
      if (!svcRef.current?.contains(e.target as Node)) setSvcOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [svcOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    startTransition(() => setOpen(false));
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const mergeHero = isHome;
  const darkGlass = mergeHero && !scrolled;

  const linkClass = (active: boolean) =>
    cn(
      "inline-flex items-center border-b-2 border-transparent pb-0.5 text-[9px] font-bold uppercase leading-none tracking-[0.1em] transition-colors sm:text-[10px] xl:tracking-[0.14em] 2xl:text-[11px]",
      darkGlass &&
        (active
          ? "border-accent text-accent"
          : "text-zinc-400 hover:text-white"),
      !darkGlass &&
        (active
          ? "border-accent text-accent"
          : "text-zinc-500 hover:text-charcoal")
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[60] transition-all duration-300 ease-out",
        darkGlass
          ? "border-b border-white/10 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)]"
          : "border-b border-border/60 bg-white/95 shadow-[var(--shadow-card)] backdrop-blur-md"
      )}
    >
      {darkGlass ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-black/55"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_-30%,rgba(232,93,4,0.22),transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-70"
            aria-hidden
          />
        </>
      ) : null}

      <div className="relative mx-auto flex h-[88px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-6 lg:px-8">
        <BrandLogo
          priority
          chip={false}
          onDarkBackground={darkGlass}
          className="z-20 shrink-0"
        />

        <div className="z-20 flex min-w-0 flex-1 items-center justify-end lg:justify-center">
          <nav
            className="hidden min-w-0 items-center justify-center lg:flex"
            aria-label="Main"
          >
            <div className="flex max-w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 xl:gap-x-6 2xl:gap-x-7">
              {NAV_LINKS.map((item) => {
                const active = navActive(pathname, item.href);
                return (
                  <Link key={item.href} href={item.href} className={linkClass(active)}>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>

        <div
          className={cn(
            "z-20 hidden shrink-0 items-center gap-2 border-l pl-5 sm:gap-2.5 sm:pl-6 lg:flex xl:gap-3 xl:pl-8 2xl:gap-3.5 2xl:pl-10",
            darkGlass ? "border-white/10" : "border-border"
          )}
        >
          <div className="relative hidden 2xl:block" ref={svcRef}>
            <button
              type="button"
              onClick={() => setSvcOpen((v) => !v)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors",
                darkGlass
                  ? "border-white/15 bg-white/[0.07] text-zinc-200 hover:border-white/25 hover:bg-white/10"
                  : "border-border bg-zinc-50 text-charcoal hover:border-accent/30 hover:bg-white"
              )}
              aria-expanded={svcOpen}
              aria-haspopup="menu"
            >
              En
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 opacity-70 transition-transform",
                  svcOpen && "rotate-180"
                )}
              />
            </button>
            {svcOpen ? (
              <div
                role="menu"
                className={cn(
                  "absolute right-0 top-full z-30 mt-2 min-w-[140px] rounded-xl border py-1 shadow-lg",
                  darkGlass
                    ? "border-white/10 bg-charcoal/95 text-white backdrop-blur-md"
                    : "border-border bg-white text-charcoal"
                )}
              >
                <button
                  type="button"
                  role="menuitem"
                  className={cn(
                    "block w-full px-4 py-2 text-left text-xs font-semibold",
                    darkGlass ? "hover:bg-white/10" : "hover:bg-black/[0.06]"
                  )}
                  onClick={() => setSvcOpen(false)}
                >
                  English
                </button>
                <button
                  type="button"
                  role="menuitem"
                  className={cn(
                    "block w-full px-4 py-2 text-left text-xs text-muted",
                    darkGlass ? "hover:bg-white/10" : "hover:bg-black/[0.06]"
                  )}
                  onClick={() => setSvcOpen(false)}
                >
                  Français (soon)
                </button>
              </div>
            ) : null}
          </div>

          <a
            href={`tel:${SITE.phoneTel}`}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-2 text-[10px] font-bold uppercase tracking-wide transition-colors xl:px-3",
              darkGlass
                ? "max-w-[10rem] border-white/15 bg-white/[0.07] text-zinc-100 hover:border-white/25 xl:max-w-none"
                : "border-border bg-white text-charcoal hover:border-accent/35"
            )}
            title={SITE.phoneDisplay}
          >
            <Phone className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
            <span className="hidden truncate sm:inline xl:whitespace-nowrap">
              {SITE.phoneDisplay}
            </span>
          </a>

          <CTALink
            href="/booking"
            variant="primary"
            size="md"
            className="!rounded-full px-4 shadow-lg shadow-accent/25 sm:px-5 xl:px-6"
          >
            Book Now
          </CTALink>
        </div>

        <button
          type="button"
          className={cn(
            "ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border lg:hidden",
            darkGlass
              ? "border-white/20 bg-white/10 text-white"
              : "border-border bg-card text-charcoal"
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border bg-white lg:hidden"
          >
            <div className="flex max-h-[min(70vh,calc(100dvh-88px))] flex-col gap-1 overflow-y-auto px-4 py-4">
              {NAV_LINKS.map((item, i) => {
                const active = navActive(pathname, item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-[0.14em]",
                        active
                          ? "bg-accent/10 text-accent"
                          : "text-charcoal hover:bg-black/[0.04]"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border py-3 text-xs font-bold uppercase tracking-wide text-charcoal"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  Call
                </a>
                <CTALink href="/booking" className="w-full justify-center rounded-full">
                  Book Now
                </CTALink>
                <CTALink
                  href="/upload-project"
                  variant="outline"
                  className="w-full justify-center rounded-full"
                >
                  Free estimate
                </CTALink>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
