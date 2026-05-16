import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { siteContact } from '../data/siteContact'

const social = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
] as const

function InfoCard({
  title,
  accent = 'primary' as 'primary' | 'coral' | 'gold',
  children,
}: {
  title: string
  accent?: 'primary' | 'coral' | 'gold'
  children: ReactNode
}) {
  const accentBar =
    accent === 'coral'
      ? 'from-coral/80 to-coral-soft/50'
      : accent === 'gold'
        ? 'from-gold to-orange/80'
        : 'from-primary to-primary-dark'

  return (
    <div className="flex h-full flex-col rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-base-900/80 p-5 shadow-glass backdrop-blur-md">
      <div className={`mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r ${accentBar}`} aria-hidden />
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cream">{title}</h2>
      <div className="mt-4 flex-1 text-sm text-muted">{children}</div>
    </div>
  )
}

/** Large contact / hours / booking strip — lives at the bottom of the page inside `<footer>`. */
export function MegaContactBand() {
  const year = new Date().getFullYear()
  const c = siteContact

  return (
    <div className="border-b border-white/10 bg-base-950">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
          <InfoCard title="Contact us" accent="primary">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gold/90">Phone</p>
                  <a href={`tel:${c.phoneTel}`} className="text-cream hover:text-primary">
                    {c.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gold/90">General</p>
                  <a href={`mailto:${c.email}`} className="break-all text-cream hover:text-primary">
                    {c.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-coral/30 bg-coral/10 text-coral">
                  <Mail className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gold/90">Bookings</p>
                  <a href={`mailto:${c.emailBook}`} className="break-all text-cream hover:text-coral-soft">
                    {c.emailBook}
                  </a>
                </div>
              </li>
            </ul>
          </InfoCard>

          <InfoCard title="Clinic & hours" accent="gold">
            <div className="flex gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                <MapPin className="h-4 w-4" aria-hidden />
              </span>
              <p className="text-cream/95">{c.address}</p>
            </div>
            <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4">
              <Clock className="h-4 w-4 text-primary" aria-hidden />
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted">Hours</p>
            </div>
            <ul className="mt-3 space-y-2">
              {c.hours.map((row) => (
                <li key={row.label} className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                  <span className="text-muted">{row.label}</span>
                  <span className="text-right font-medium text-cream">{row.value}</span>
                </li>
              ))}
            </ul>
          </InfoCard>

          <InfoCard title="Appointments" accent="coral">
            <p className="text-xs leading-relaxed text-muted">
              Wellness visits and bodywork sessions are scheduled by appointment. Share your goals when you reach out —
              we will suggest supportive next steps.
            </p>
            <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
              {c.bookingMeta.map((row) => (
                <li key={row.label} className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                  <span className="text-muted">{row.label}</span>
                  <span className="text-right font-medium text-cream">{row.value}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/booking"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-primary/40 bg-gradient-to-r from-primary/20 to-forest/40 py-2.5 text-xs font-semibold uppercase tracking-wider text-cream transition hover:border-primary/60 hover:from-primary/30"
            >
              Book consultation
            </Link>
          </InfoCard>
        </div>
      </div>

      <div className="border-t border-white/10 bg-base-900/40 py-3">
        <div className="flex justify-center gap-3">
          {social.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-base-950/80 text-muted transition hover:border-primary/40 hover:text-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-primary/25 bg-gradient-to-r from-forest/25 via-base-900/90 to-base-950/95 py-2.5">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-3 px-4 text-center sm:px-6 md:grid-cols-3 md:gap-4 md:text-left lg:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted md:text-left">
            © {year} Dr. Jagatjit Ahluwalia. All rights reserved.
          </p>
          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-block rounded opacity-95 ring-offset-2 ring-offset-base-950 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <img src="/logo.png" alt="GTB Holistic Wellness" className="mx-auto h-8 w-auto sm:h-9" width={100} height={36} />
            </Link>
          </div>
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-gold/90 md:text-right">{c.tagline}</p>
        </div>
      </div>
    </div>
  )
}
