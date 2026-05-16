"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  shop: [
    { href: "/products", label: "Seat Covers" },
    { href: "/products?category=mats", label: "Car Mats" },
    { href: "/products?category=visors", label: "Window Visors" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
  ],
  support: [
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold-primary/20 bg-luxury-black">
      {/* Top gold gradient line */}
      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(249,200,51,0.4) 15%, rgba(249,200,51,0.7) 50%, rgba(249,200,51,0.4) 85%, transparent 100%)",
        }}
      />
      {/* Subtle glow at top */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-24 opacity-30"
        style={{
          background: "linear-gradient(180deg, rgba(249,200,51,0.08) 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <Link href="/" className="flex items-center gap-3 outline-none group">
                <div className="relative h-12 w-12 shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Silken Trading"
                    fill
                    className="object-contain object-left transition duration-300 group-hover:drop-shadow-[0_0_16px_rgba(249,200,51,0.35)]"
                    sizes="56px"
                  />
                </div>
                <span className="font-display text-xl tracking-wide text-gold-primary transition-colors group-hover:text-yellow-glow sm:text-2xl">
                  Silken Trading
                </span>
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-yellow-pastel/70">
                Premium automotive interior products and professional installation. Transform your
                car with quality seat covers, mats, and accessories.
              </p>
              <div className="mt-5 flex flex-col gap-3 text-sm">
                <motion.a
                  href="tel:+14372659090"
                  className="flex items-center gap-3 text-yellow-pastel/80 transition-colors hover:text-gold-primary"
                  whileHover={{ x: 4 }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-primary/15 text-gold-primary">
                    <Phone size={15} />
                  </span>
                  +1 437-265-9090
                </motion.a>
                <motion.a
                  href="mailto:info@silkentrading.com"
                  className="flex items-center gap-3 text-yellow-pastel/80 transition-colors hover:text-gold-primary"
                  whileHover={{ x: 4 }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-primary/15 text-gold-primary">
                    <Mail size={15} />
                  </span>
                  info@silkentrading.com
                </motion.a>
                <span className="flex items-start gap-3 text-yellow-pastel/80">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-primary/15 text-gold-primary">
                    <MapPin size={15} />
                  </span>
                  <span className="flex flex-col gap-1 text-sm">
                    <span>96 Planchet Rd, Concord, ON L4K 2C7</span>
                    <span>125 Village Green Square, Scarborough, ON M1S 0G3</span>
                  </span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-3 gap-4 sm:col-span-2 lg:col-span-7 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <h3 className="font-display text-sm font-medium uppercase tracking-wider text-gold-primary sm:text-base">Shop</h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.shop.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-yellow-pastel/70 transition-colors hover:text-gold-primary sm:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <h3 className="font-display text-sm font-medium uppercase tracking-wider text-gold-primary sm:text-base">Company</h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-yellow-pastel/70 transition-colors hover:text-gold-primary sm:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <h3 className="font-display text-sm font-medium uppercase tracking-wider text-gold-primary sm:text-base">Support</h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-yellow-pastel/70 transition-colors hover:text-gold-primary sm:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <p className="text-xs text-yellow-pastel/50 sm:text-sm">
            © {new Date().getFullYear()} Silken Trading. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-medium text-gold-primary transition-colors hover:text-yellow-glow sm:text-sm"
          >
            Get in touch <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
