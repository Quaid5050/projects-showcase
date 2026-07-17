import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Star } from "lucide-react";
import { navItems } from "../../data/navigation";
import { siteConfig } from "../../data/siteContent";
import { useScrollLock } from "../../hooks/useScrollLock";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useScrollLock(menuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen && firstMenuLinkRef.current) {
      firstMenuLinkRef.current.focus();
    }
    if (!menuOpen && menuButtonRef.current) {
      // Don't auto-focus on close to avoid jarring UX
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center flex-shrink-0 group focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 rounded-lg"
            aria-label="Walking Little Star Daycare — Home"
          >
            <img
              src="/images/logo.png"
              alt="Walking Little Star Daycare"
              className="h-14 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
              loading="eager"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 font-body font-700 text-sm rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-1 ${
                  isActive(item.path)
                    ? "text-navy bg-peach"
                    : "text-text-dark hover:text-navy hover:bg-cream-warm"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-peach rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.contact.phoneLink}
              className="flex items-center gap-2 text-navy font-body font-700 text-sm hover:text-sky-brand transition-colors focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 rounded-md px-1"
              aria-label={`Call us at ${siteConfig.contact.phone}`}
            >
              <Phone size={16} className="flex-shrink-0" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <Link
              to="/booking"
              className="bg-navy text-white font-body font-700 text-sm px-5 py-2.5 rounded-full hover:bg-navy-light hover:-translate-y-0.5 transition-all duration-200 shadow-soft hover:shadow-hover focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
            >
              Book a Visit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-cream-warm transition-colors focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 text-navy"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-5 border-b border-navy/10">
                <Link
                  to="/"
                  className="flex items-center focus-visible:ring-2 focus-visible:ring-navy rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  <img
                    src="/images/logo.png"
                    alt="Walking Little Star Daycare"
                    className="h-9 w-auto object-contain"
                    loading="eager"
                  />
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 flex items-center justify-center text-navy hover:bg-cream-warm rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-navy"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 py-6 px-5 overflow-y-auto" aria-label="Mobile navigation">
                <ul className="space-y-1" role="list">
                  {navItems.map((item, idx) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        ref={idx === 0 ? firstMenuLinkRef : undefined}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl font-body font-700 text-base transition-colors focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-1 ${
                          isActive(item.path)
                            ? "bg-peach text-navy"
                            : "text-text-dark hover:bg-cream-warm hover:text-navy"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {isActive(item.path) && (
                          <Star size={14} fill="#183b65" className="text-navy flex-shrink-0" />
                        )}
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="p-5 border-t border-navy/10 space-y-3">
                <a
                  href={siteConfig.contact.phoneLink}
                  className="flex items-center justify-center gap-2 w-full py-3.5 border-2 border-navy text-navy font-body font-700 rounded-full hover:bg-navy hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
                  aria-label={`Call us at ${siteConfig.contact.phone}`}
                >
                  <Phone size={16} />
                  <span>{siteConfig.contact.phone}</span>
                </a>
                <Link
                  to="/booking"
                  className="flex items-center justify-center w-full py-3.5 bg-navy text-white font-body font-700 rounded-full hover:bg-navy-light transition-all focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Book a Visit
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
