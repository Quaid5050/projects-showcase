"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Send } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/content";

const SERVICES_LINKS = [
  "Paid Advertising",
  "Design & Branding",
  "Video Editing & Production",
  "Content Strategy",
  "Social Media Management",
  "AI Automation",
];

const SOCIALS = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/Bizzonedigital",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/bizzonedigital",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/102540390",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16">
      <div className="section pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link href="/#home" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="BizzOne Digital"
                width={34}
                height={34}
                className="rounded-lg"
              />
              <span className="font-display text-base font-bold text-white">
                BizzOne
                <span className="text-brand-mint"> Digital</span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              An AI Automation & Digital Growth Agency helping businesses
              attract, engage and convert with data-driven solutions.
            </p>

            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="grid h-9 w-9 place-items-center rounded-lg glass text-white/70 transition-colors hover:text-brand-mint"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-brand-mint"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h4>

            <ul className="mt-4 space-y-2.5">
              {SERVICES_LINKS.map((service) => (
                <li key={service}>
                  <Link
                    href="/#services"
                    className="text-sm text-white/55 transition-colors hover:text-brand-mint"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Newsletter
            </h4>

            <p className="mt-4 text-sm text-white/55">
              Get tips & insights to grow your business digitally.
            </p>

            <div className="mt-4 flex items-center gap-2 rounded-xl glass p-1.5">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/35 focus:outline-none"
              />

              <button
                aria-label="Subscribe"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-ink"
                style={{
                  background: "linear-gradient(135deg,#C8F31D,#B47BFF)",
                }}
              >
                <Send size={15} />
              </button>
            </div>

            <div className="mt-6 space-y-1.5 text-sm text-white/50">
              <p>{COMPANY.email}</p>
              <p>{COMPANY.phone}</p>
            </div>
          </div>
        </div>

        {/* Hours & Address */}
        <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Business Hours
            </h4>
            <div className="mt-3 space-y-1 text-sm text-white/55">
              <p>Monday – Saturday: 9:00 AM – 5:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Visit Us
            </h4>
            <div className="mt-3 space-y-1 text-sm text-white/55">
              <p>{COMPANY.address}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="section flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>

          <div className="flex gap-4 sm:-translate-x-4">
            <Link href="/privacy-policy" className="text-white/80 transition-colors hover:text-brand-mint">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-white/80 transition-colors hover:text-brand-mint">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}