"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/site";
import CTAButton from "@/components/ui/CTAButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between container-px transition-all duration-300 ${
          scrolled ? "my-2 py-2.5" : "my-3 py-3"
        }`}
      >
        <div
          className={`flex w-full items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-glass" : ""
          }`}
        >
          <Link href="#home" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt={COMPANY.name} width={36} height={36} className="rounded-lg" />
            <span className="font-display text-base font-bold tracking-tight text-white">
              BizzOne<span className="text-brand-green">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/65 transition-colors hover:text-brand-green"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <CTAButton href="#contact" className="!px-5 !py-2.5 !text-xs">
              Get a Quote
            </CTAButton>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl glass text-white md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-4 mb-2 rounded-2xl glass-strong p-4 md:hidden"
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-brand-green"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl bg-brand-purple px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Get a Quote
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}