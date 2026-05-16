"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  CalendarClock,
  Shield,
  Sparkles,
} from "lucide-react";
import { CTALink } from "@/components/CTAButton";
import { cn } from "@/lib/cn";

const badges = [
  { label: "Transparent Pricing", icon: BadgeCheck },
  { label: "Fast Scheduling", icon: CalendarClock },
  { label: "Skilled Technicians", icon: Shield },
];

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden pt-[88px]">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,93,4,0.35),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.08),_transparent_50%),linear-gradient(165deg,#0b0b0b_0%,#1a1a1a_45%,#121212_100%)]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-80"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-20 pt-10 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pt-16">
        <div className="max-w-2xl flex-1">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-200"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Handyman in Toronto
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
          >
            Reliable Handyman Services Near You – Fast, Affordable &
            Professional
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-zinc-300"
          >
            Trusted home repair, installation, painting, and property
            maintenance services for homeowners, tenants, landlords, and
            businesses in Toronto. When you search{" "}
            <span className="text-white">handyman services near me</span>, we
            show up ready to work.
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <CTALink href="/booking" size="lg" className="justify-center">
              Book Now
            </CTALink>
            <CTALink
              href="/upload-project"
              variant="outline"
              size="lg"
              className="justify-center border-white/25 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
            >
              Get a Free Estimate
            </CTALink>
          </motion.div>
          <motion.ul
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {badges.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-100"
              >
                <Icon className="h-4 w-4 text-accent" aria-hidden />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="w-full max-w-md flex-1 lg:max-w-lg"
        >
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.65)] backdrop-blur-md sm:p-8"
            )}
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/25 blur-3xl" />
            <p className="text-sm font-semibold text-white">Quick booking preview</p>
            <p className="mt-1 text-xs text-zinc-400">
              Choose a service and time — full details on the booking page.
            </p>
            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                  Popular
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  TV mounting · Furniture assembly · Drywall repair
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <p className="text-xs text-zinc-400">This week</p>
                  <p className="mt-1 text-sm font-semibold text-white">Open slots</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <p className="text-xs text-zinc-400">From</p>
                  <p className="mt-1 text-sm font-semibold text-accent">$175 minimum</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <CTALink href="/booking" className="w-full justify-center">
                Continue to book
              </CTALink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
