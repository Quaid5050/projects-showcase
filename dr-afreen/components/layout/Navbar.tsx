"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Products", href: "/shop" },
  { label: "Booking", href: "/booking" },
];

const WHATSAPP_URL = "https://wa.me/16477819461?text=Hi%20Dr.%20Afreen%2C%20I%27d%20like%20to%20book%20a%20consultation.";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.6, ease: "easeOut" }}
        className="fixed top-2 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8"
      >
        <div
          className="max-w-6xl mx-auto flex items-center justify-between gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-2xl sm:rounded-full"
          style={{
            background: "rgba(255, 252, 248, 0.72)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.85)",
            boxShadow: "0 8px 32px rgba(122, 31, 61, 0.08), 0 2px 8px rgba(247, 168, 196, 0.15)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
            <Logo size={38} className="sm:hidden ring-2 ring-pink-soft/50 group-hover:ring-pink-soft transition-all duration-300 shrink-0" />
            <Logo size={44} className="hidden sm:block ring-2 ring-pink-soft/50 group-hover:ring-pink-soft transition-all duration-300 shrink-0" />
            <div className="min-w-0">
              <div
                className="text-base sm:text-xl font-medium leading-tight truncate"
                style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}
              >
                Moon Homeopathy
              </div>
              <div
                className="text-[10px] sm:text-xs tracking-[0.12em] sm:tracking-[0.15em] truncate"
                style={{ color: "#B87A94", fontFamily: "Nunito Sans, sans-serif" }}
              >
                by Dr. Afreen
              </div>
            </div>
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-maroon" : "text-brand-dark/65 hover:text-maroon"
                  }`}
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
                      <span className="w-1 h-1 rounded-full bg-gold" />
                      <span className="w-5 h-px bg-gold/70 rounded-full" />
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-warm hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #7A1F3D, #4B1025)",
                color: "white",
                fontFamily: "Nunito Sans, sans-serif",
              }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-pink-blush/60 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-maroon" />
              ) : (
                <Menu className="w-5 h-5 text-maroon" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu backdrop + panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="fixed top-[4.25rem] sm:top-[5.5rem] left-3 right-3 sm:left-4 sm:right-4 z-50 lg:hidden rounded-2xl overflow-hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
            style={{
              background: "rgba(255, 252, 248, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(247, 168, 196, 0.3)",
              boxShadow: "0 12px 40px rgba(122, 31, 61, 0.12)",
            }}
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "bg-pink-blush text-maroon"
                          : "text-brand-dark/80 hover:bg-pink-blush/50 hover:text-maroon"
                      }`}
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 mt-3 rounded-2xl text-base font-semibold"
                style={{
                  background: "linear-gradient(135deg, #7A1F3D, #4B1025)",
                  color: "white",
                  fontFamily: "Nunito Sans, sans-serif",
                }}
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
