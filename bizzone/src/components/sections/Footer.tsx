"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/site";

const socials = [
  { icon: Linkedin, href: COMPANY.socials.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: COMPANY.socials.instagram, label: "Instagram" },
  { icon: Facebook, href: COMPANY.socials.facebook, label: "Facebook" },
  { icon: Twitter, href: COMPANY.socials.twitter, label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px divider-glow" />
      <div className="section pb-10">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-4">
            <Link href="#home" className="flex items-center gap-2.5">
              <Image src="/logo.png" alt={COMPANY.name} width={40} height={40} className="rounded-lg" />
              <span className="font-display text-lg font-bold text-white">
                BizzOne<span className="text-brand-green">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {COMPANY.tagline}. A full-service digital partner building premium websites,
              apps, automation and marketing that drive measurable growth.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-xl glass text-white/70 transition-all duration-300 hover:text-brand-green hover:shadow-glow-green"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* quick links */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/50 transition-colors hover:text-brand-green">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-sm font-semibold text-white">Services</h4>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.title}>
                  <Link href="#services" className="text-sm text-white/50 transition-colors hover:text-brand-green">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-sm font-semibold text-white">Contact</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-brand-green">
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone}`} className="transition-colors hover:text-brand-green">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="leading-relaxed">{COMPANY.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Designed & engineered with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}