"use client";

import { useBookingModal } from "@/contexts/BookingModalContext";
import { LightSweepHeading } from "@/components/ui/LightSweepHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  /** Omit top border when this section follows a page title band. */
  withTopBorder?: boolean;
};

export function MobileDetailingSection({ withTopBorder = true }: Props) {
  const reduce = useReducedMotion();
  const { openBooking } = useBookingModal();

  return (
    <section
      id="mobile-detailing"
      className={`relative scroll-mt-28 py-24 ${withTopBorder ? "border-t border-white/10" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/45">
              Mobile detailing
            </p>
            <LightSweepHeading
              as="h2"
              className="mt-3 font-display text-3xl text-white sm:text-4xl"
            >
              Mobile detailing, delivered to your driveway
            </LightSweepHeading>
            <p className="mt-4 text-base text-white/65">
              Clients select a detailing package, choose date and time, and
              provide vehicle and address details. Our team confirms the window
              and arrives equipped for Phantom-level results on-site.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton
                onClick={openBooking}
                className="rounded-full bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black hover:bg-white/90"
              >
                Open booking
              </MagneticButton>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/85 transition hover:border-white/45"
              >
                Full booking page
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="glass-panel relative overflow-hidden rounded-3xl p-8"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <p className="text-sm font-semibold text-white">Booking flow</p>
            <p className="mt-2 text-sm text-white/55">
              Packages, scheduling, vehicle profile, and notes — structured for
              calendar, CRM, Stripe, or custom API integration later.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/60">
              <li>• Package selection with add-ons</li>
              <li>• Address + vehicle intelligence</li>
              <li>• Preferred window capture</li>
              <li>• Success state ready for webhooks</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
