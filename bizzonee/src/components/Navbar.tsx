"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";
import { SERVICES } from "@/lib/services";
import NeonButton from "@/components/ui/NeonButton";

// Web Development has its own top-level nav item, so keep it out of the dropdown.
const DROPDOWN_SERVICES = SERVICES.filter(
  (s) => s.slug !== "website-design-and-development"
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setOpen(false);
    setMobileServices(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-7xl container-px py-3">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-glass" : ""
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="BizzOne Digital"
              width={34}
              height={34}
              className="rounded-lg"
            />
            <span className="font-display text-base font-bold tracking-tight text-white">
              BizzOne<span className="text-brand-mint"> Digital</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) =>
              l.label === "Services" ? (
                <div
                  key={l.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={l.href}
                    className="flex items-center gap-1 text-sm font-medium text-white transition-colors hover:text-brand-mint"
                  >
                    {l.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4"
                      >
                        <div className="grid w-[34rem] grid-cols-2 gap-1 rounded-2xl glass-strong p-3 shadow-glass">
                          {DROPDOWN_SERVICES.map((s) => {
                            const Icon = s.icon;

                            return (
                              <Link
                                key={s.slug}
                                href={`/service/${s.slug}`}
                                onClick={() => setServicesOpen(false)}
                                className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
                              >
                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-mint/10 text-brand-mint transition-colors group-hover:bg-brand-mint/20">
                                  <Icon size={16} />
                                </span>

                                <span className="text-sm font-medium text-white group-hover:text-brand-mint">
                                  {s.title}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-white transition-colors hover:text-brand-mint"
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <NeonButton
              href="/#contact"
              className="!px-5 !py-2.5 !text-xs"
            >
              <PhoneCall size={14} />
              Book Strategy Call
            </NeonButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl glass text-white lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-4 mb-2 max-h-[80vh] overflow-y-auto rounded-2xl glass-strong p-4 lg:hidden"
          >
            {NAV_LINKS.map((l) =>
              l.label === "Services" ? (
                <div key={l.href}>
                  <button
                    onClick={() => setMobileServices((v) => !v)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-white hover:bg-white/5"
                  >
                    Services

                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        mobileServices ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServices && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-3 border-l border-white/10 pl-2">
                          <Link
                            href="/#services"
                            onClick={closeMobile}
                            className="block rounded-lg px-4 py-2.5 text-sm font-medium text-brand-mint hover:bg-white/5"
                          >
                            All Services
                          </Link>

                          {DROPDOWN_SERVICES.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/service/${s.slug}`}
                              onClick={closeMobile}
                              className="block rounded-lg px-4 py-2.5 text-sm text-white hover:bg-white/5 hover:text-brand-mint"
                            >
                              {s.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={closeMobile}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-white hover:bg-white/5 hover:text-brand-mint"
                >
                  {l.label}
                </Link>
              )
            )}

            <Link
              href="/#contact"
              onClick={closeMobile}
              className="mt-2 block rounded-xl bg-brand-purple px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Book Strategy Call
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}