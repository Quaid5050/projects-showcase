"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-gold-primary/20 bg-luxury-black/98 shadow-[0_4px_30px_rgba(0,0,0,0.4),0_0_0_1px_rgba(249,200,51,0.05)] backdrop-blur-xl"
          : "border-b border-white/10 bg-luxury-black/95 backdrop-blur-md",
      )}
    >
      {/* Gold accent line */}
      <div
        className={cn(
          "absolute left-0 right-0 top-0 h-px transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-60",
        )}
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(249,200,51,0.6) 20%, rgba(249,200,51,0.8) 50%, rgba(249,200,51,0.6) 80%, transparent 100%)",
        }}
      />

      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 outline-none group sm:gap-3">
          <motion.div
            className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Image
              src="/images/logo.png"
              alt="Silken Trading"
              fill
              className="object-contain object-left transition duration-300 group-hover:drop-shadow-[0_0_12px_rgba(249,200,51,0.4)]"
              sizes="56px"
              priority
            />
          </motion.div>
          <span className="font-display text-lg tracking-wide text-gold-primary sm:text-xl lg:text-2xl group-hover:text-yellow-glow transition-colors">
            Silken Trading
          </span>
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link relative px-3 py-2.5 text-sm font-medium text-yellow-pastel/90 xl:px-4"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/products"
              className="rounded-lg border border-gold-primary/50 px-4 py-2 text-sm font-medium text-gold-primary transition-all duration-300 hover:border-gold-primary hover:bg-gold-primary/10 hover:shadow-[0_0_24px_rgba(249,200,51,0.2)] xl:px-5 xl:py-2.5"
            >
              Shop
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="rounded-lg bg-gradient-to-r from-gold-primary to-yellow-glow px-4 py-2 text-sm font-semibold text-luxury-black shadow-[0_0_20px_rgba(249,200,51,0.25)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(249,200,51,0.4)] xl:px-5 xl:py-2.5"
            >
              Book Installation
            </Link>
          </motion.div>
        </div>

        <motion.button
          type="button"
          className="rounded-xl p-2.5 text-yellow-pastel transition-colors hover:bg-gold-primary/10 hover:text-gold-primary lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-gold-primary/20 bg-luxury-black/98 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-0 px-4 py-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <Link
                    href={link.href}
                    className="block rounded-xl px-4 py-3.5 text-yellow-pastel transition hover:bg-gold-primary/10 hover:text-gold-primary"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
                <Link
                  href="/products"
                  className="rounded-xl border border-gold-primary/50 px-4 py-3.5 text-center font-medium text-gold-primary"
                  onClick={() => setOpen(false)}
                >
                  Shop Products
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl bg-gradient-to-r from-gold-primary to-yellow-glow px-4 py-3.5 text-center font-semibold text-luxury-black"
                  onClick={() => setOpen(false)}
                >
                  Book Installation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
