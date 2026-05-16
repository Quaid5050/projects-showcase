import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/content";

const LOGO = "/branding/pac-phantom-logo.png";

const social = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
] as const;

function IconFrame({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/12 bg-black text-white/90">
      {children}
    </span>
  );
}

function FooterCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black p-5 sm:p-6">
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90">
        {title}
      </h3>
      <div className="mt-5 space-y-4 text-sm text-white/80">{children}</div>
    </div>
  );
}

function Row({
  icon,
  content,
}: {
  icon: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <IconFrame>{icon}</IconFrame>
      <div className="min-w-0 pt-0.5 leading-snug">{content}</div>
    </div>
  );
}

export function SiteFooter() {
  const hoursBlock = (
    <div className="mt-4 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.12em] text-white/55">
      {SITE.hours.map((h) => (
        <p key={h.day} className="flex justify-between gap-4 py-1">
          <span className="text-white/40">{h.day}</span>
          <span className="text-white/75">{h.hours}</span>
        </p>
      ))}
    </div>
  );

  return (
    <footer className="footer-branded border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          <FooterCard title="Contact us">
            <Row
              icon={
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 3.5 3 2.9 3.4 2.5 4 2.5h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1L6.6 10.8Z" />
                </svg>
              }
              content={
                <a href={SITE.phoneHref} className="hover:text-rose-200">
                  {SITE.phone}
                </a>
              }
            />
            <Row
              icon={
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
                </svg>
              }
              content={
                <a href={SITE.emailHref} className="break-all hover:text-rose-200">
                  {SITE.email}
                </a>
              }
            />
          </FooterCard>

          <FooterCard title="Shop — facility">
            <Row
              icon={
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                </svg>
              }
              content={<span className="text-white/85">{SITE.address}</span>}
            />
            {hoursBlock}
          </FooterCard>

          <FooterCard title="Bookings — inquiries">
            <Row
              icon={
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 16H5V10h14v10ZM5 8V6h14v2H5Z" />
                </svg>
              }
              content={
                <span className="text-white/85">
                  Greater Toronto & mobile detailing service area — confirm when
                  booking.
                </span>
              }
            />
            <div className="mt-4 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.12em] text-white/55">
              <p className="flex justify-between gap-4 py-1">
                <span className="text-white/40">Response</span>
                <span className="text-white/75">Within one business day</span>
              </p>
              <p className="flex justify-between gap-4 py-1">
                <span className="text-white/40">Booking</span>
                <span className="text-white/75">Online + phone</span>
              </p>
            </div>
          </FooterCard>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={`${s.label} (placeholder link)`}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/15 bg-black text-[10px] font-bold uppercase tracking-wider text-white/75 transition hover:border-white/40 hover:text-white"
            >
              {s.label === "Instagram"
                ? "IG"
                : s.label === "LinkedIn"
                  ? "in"
                  : "f"}
            </a>
          ))}
        </div>

        <nav
          className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-white/10 pt-10 text-center"
          aria-label="Footer"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75 transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75 transition hover:text-white"
          >
            Booking
          </Link>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left lg:px-8">
          <p className="order-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/45 sm:order-1 sm:max-w-xs">
            © {new Date().getFullYear()} {SITE.name.toUpperCase()}. All rights
            reserved.
          </p>
          <div className="order-1 flex flex-col items-center gap-1.5 sm:order-2">
            <div className="relative h-10 w-10">
              <Image
                src={LOGO}
                alt={`${SITE.name} mark`}
                fill
                className="object-contain invert"
                sizes="40px"
              />
            </div>
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.35em] text-white/90">
              PAC Phantom
            </span>
          </div>
          <p className="order-3 max-w-xs text-[10px] font-medium uppercase leading-relaxed tracking-[0.18em] text-white/45 sm:text-right">
            Premium mechanical, customization & mobile detailing — Ontario,
            Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
