import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/layout/MarketingShell";
import { MobileDetailingBookingForm } from "@/components/booking/MobileDetailingBookingForm";

export const metadata: Metadata = {
  title: "Book Mobile Detailing | PAC Phantom Auto Center",
  description:
    "Request mobile detailing at your location — packages, scheduling, and vehicle details.",
};

export default function BookingPage() {
  return (
    <MarketingShell>
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/45">
          Mobile detailing
        </p>
        <h1 className="mt-3 font-display text-3xl text-white sm:text-4xl">
          Book driveway service
        </h1>
        <p className="mt-4 text-sm text-white/60">
          Same booking flow as the homepage modal — dedicated URL for ads,
          QR codes, and staff hand-off.{" "}
          <Link href="/mobile-detailing" className="text-white underline-offset-4 hover:underline">
            Mobile detailing
          </Link>
        </p>
        <div className="mt-10 glass-panel rounded-3xl p-6 sm:p-8">
          <MobileDetailingBookingForm />
        </div>
      </div>
    </MarketingShell>
  );
}
