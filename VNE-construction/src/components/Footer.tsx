import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { CTALink } from "@/components/CTAButton";
import { FOOTER_SERVICE_LINKS } from "@/lib/services-data";
import { NAV_LINKS, SITE } from "@/lib/site";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/cn";

function IconTile({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}

function GlassCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.5)] backdrop-blur-sm">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
        {title}
      </p>
      <div className="mt-5 space-y-4 text-sm text-zinc-300">{children}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-charcoal text-zinc-100">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(232,93,4,0.12),transparent_60%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <GlassCard title="Contact us">
            <div className="flex gap-3">
              <IconTile>
                <Phone className="h-4 w-4" aria-hidden />
              </IconTile>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                  Phone
                </p>
                <a className="font-medium text-white hover:text-accent" href={`tel:${SITE.phoneTel}`}>
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <IconTile>
                <Mail className="h-4 w-4" aria-hidden />
              </IconTile>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                  Email
                </p>
                <a
                  className="break-all font-medium text-white hover:text-accent"
                  href={`mailto:${SITE.email}`}
                >
                  {SITE.email}
                </a>
              </div>
            </div>
          </GlassCard>

          <GlassCard title="Office & hours">
            <div className="flex gap-3">
              <IconTile>
                <MapPin className="h-4 w-4" aria-hidden />
              </IconTile>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                  Address
                </p>
                <p className="font-medium leading-snug text-white">{SITE.address.full}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <IconTile>
                <Clock className="h-4 w-4" aria-hidden />
              </IconTile>
              <div className="space-y-1 text-xs leading-relaxed">
                <p>
                  <span className="text-zinc-500">Mon – Fri · </span>
                  <span className="text-white">8:00 AM – 6:00 PM</span>
                </p>
                <p>
                  <span className="text-zinc-500">Saturday · </span>
                  <span className="text-white">9:00 AM – 4:00 PM</span>
                </p>
                <p>
                  <span className="text-zinc-500">Sunday · </span>
                  <span className="text-white">Closed</span>
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard title="Service area & booking">
            <div className="flex gap-3">
              <IconTile>
                <MapPin className="h-4 w-4" aria-hidden />
              </IconTile>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                  Coverage
                </p>
                <p className="font-medium text-white">{SITE.serviceArea}</p>
              </div>
            </div>
            <ul className="space-y-2 border-t border-white/10 pt-4 text-xs text-zinc-400">
              <li>
                <span className="text-zinc-500">Response time · </span>
                Same business day when possible
              </li>
              <li>
                <span className="text-zinc-500">Booking · </span>
                Online, phone, or photo quote
              </li>
              <li>
                <span className="text-zinc-500">Payment · </span>
                As quoted — no hidden fees
              </li>
            </ul>
            <div className="pt-2">
              <CTALink href="/booking" className="!rounded-full px-6">
                Book Now
              </CTALink>
            </div>
          </GlassCard>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {[
            { href: "#", label: "Instagram", abbr: "Ig" },
            { href: "#", label: "LinkedIn", abbr: "In" },
            { href: "#", label: "Facebook", abbr: "Fb" },
          ].map(({ href, label, abbr }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={`${label} (add your URL)`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-[10px] font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:border-accent/40 hover:text-accent"
            >
              {abbr}
            </a>
          ))}
        </div>

        <nav
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-b border-white/10 pb-10 text-center"
          aria-label="Footer"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          {FOOTER_SERVICE_LINKS.slice(0, 3).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 grid gap-8 text-center md:grid-cols-3 md:items-center md:text-left">
          <p className="text-[11px] uppercase tracking-[0.12em] text-zinc-500">
            © {new Date().getFullYear()} {SITE.name.toUpperCase()}. All rights
            reserved.{" "}
            <span className="mt-2 block normal-case tracking-normal md:inline md:mt-0">
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <span className="mx-2 text-zinc-600">·</span>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </span>
          </p>
          <div className="flex justify-center md:justify-center">
            <BrandLogo compact chip />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400 md:text-right">
            Handyman &amp; home repair — Toronto
          </p>
        </div>
      </div>
    </footer>
  );
}
