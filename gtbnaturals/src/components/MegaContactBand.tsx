import { Facebook, Mail, Phone } from 'lucide-react'
import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { siteContact } from '../data/siteContact'

const social = [
  { icon: Facebook, href: 'https://www.facebook.com/share/1BUmzfawct/', label: 'Facebook' },
] as const

function InfoCard({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="surface-card surface-card-outlined flex h-full flex-col rounded-xl p-5">
      <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-orange to-amber" aria-hidden />
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cream">{title}</h2>
      <div className="mt-4 flex-1 text-sm text-muted">{children}</div>
    </div>
  )
}

function IconTile({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange/88 to-orange/68 text-white shadow-sm ring-1 ring-orange/45">
      {children}
    </span>
  )
}

/** Large contact / hours / booking strip — lives at the bottom of the page inside `<footer>`. */
export function MegaContactBand() {
  const year = new Date().getFullYear()
  const c = siteContact

  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
<div className="grid gap-4 lg:grid-cols-2 lg:gap-5 max-w-5xl mx-auto">
            <InfoCard title="Contact us">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <IconTile>
                  <Phone className="h-4 w-4" aria-hidden />
                </IconTile>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">Phone</p>
                  <a
                    href={`tel:${c.phoneTel}`}
                    className="text-cream rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                  >
                    {c.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <IconTile>
                  <Mail className="h-4 w-4" aria-hidden />
                </IconTile>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">General</p>
                  <a
                    href={`mailto:${c.email}`}
                    className="break-all text-cream rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                  >
                    {c.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <IconTile>
                  <Mail className="h-4 w-4" aria-hidden />
                </IconTile>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">Bookings</p>
                  <a
                    href={`mailto:${c.emailBook}`}
                    className="break-all text-cream rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                  >
                    {c.emailBook}
                  </a>
                </div>
              </li>
            </ul>
          </InfoCard>

        

          <InfoCard title="Appointments">
            <p className="text-xs leading-relaxed text-muted">
              . visits and bodywork sessions are scheduled by appointment. Share your goals when you reach out —
              we will suggest supportive next steps.
            </p>
            <ul className="mt-4 space-y-2 border-t border-stone-200 pt-4">
              {c.bookingMeta.map((row) => (
                <li key={row.label} className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                  <span className="text-muted">{row.label}</span>
                  <span className="text-right font-medium text-cream">{row.value}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/booking"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-orange/88 to-orange/68 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition hover:from-orange/95 hover:to-orange/75 hover:shadow-lg hover:shadow-orange/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              Contact us
            </Link>
          </InfoCard>
        </div>
      </div>

      <div className="border-t border-stone-200/70 py-3">
        <div className="flex justify-center gap-3">
          {social.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-orange/35 bg-linear-to-br from-orange/18 to-amber/16 text-orange shadow-sm shadow-orange/20 transition hover:from-orange/88 hover:to-orange/70 hover:text-white hover:shadow-md hover:shadow-orange/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-stone-200/70 py-3 sm:py-3.5">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-3 px-4 text-center sm:px-6 md:grid-cols-3 md:gap-4 md:text-left lg:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted md:text-left">
            © {year} Dr. Jagatjit Ahluwalia. All rights reserved.
          </p>
          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-block rounded opacity-95 ring-offset-2 ring-offset-base-950 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange"
            >
              <img src="/logo1.png" alt="GTB Holistic ." className="mx-auto h-8 w-auto sm:h-9" width={100} height={36} />
            </Link>
          </div>
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-cream md:text-right">{c.tagline}</p>
        </div>
      </div>
    </div>
  )
}