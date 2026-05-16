"use client";

import { Calendar, FileText, Phone } from "lucide-react";
import { CTALink } from "@/components/CTAButton";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export function StickyCTA() {
  return (
    <>
      <div
        className={cn(
          "pointer-events-none fixed bottom-6 right-6 z-[55] hidden flex-col gap-2 md:flex"
        )}
      >
        <div className="pointer-events-auto flex flex-col gap-2 rounded-2xl border border-border bg-white/95 p-2 shadow-[var(--shadow-soft)] backdrop-blur">
          <CTALink
            href="/booking"
            size="sm"
            className="min-w-[160px] justify-center shadow-none"
          >
            <Calendar className="h-4 w-4" />
            Book Now
          </CTALink>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex min-w-[160px] items-center justify-center gap-2 rounded-xl border border-border bg-charcoal px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-foreground"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <CTALink
            href="/upload-project"
            variant="outline"
            size="sm"
            className="min-w-[160px] justify-center"
          >
            <FileText className="h-4 w-4" />
            Free estimate
          </CTALink>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-[55] border-t border-border bg-white/95 p-2 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-xs font-semibold text-charcoal active:bg-black/[0.04]"
          >
            <Phone className="h-5 w-5 text-accent" />
            Call
          </a>
          <CTALink
            href="/booking"
            className="flex flex-col items-center justify-center gap-1 rounded-xl bg-accent py-2 text-xs font-semibold text-white shadow-sm"
          >
            <Calendar className="h-5 w-5" />
            Book
          </CTALink>
          <CTALink
            href="/upload-project"
            variant="ghost"
            className="flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-xs font-semibold text-charcoal"
          >
            <FileText className="h-5 w-5 text-accent" />
            Estimate
          </CTALink>
        </div>
      </div>
    </>
  );
}
