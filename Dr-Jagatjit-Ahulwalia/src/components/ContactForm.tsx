import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { catalogServices } from '../data/servicesCatalog'
import { Button } from './ui/Button'

const placeholders = {
  phone: '(403) 555-0123',
  email: 'care@drjahluwalia.example',
  address: 'Calgary, AB — Wellness studio',
  hours: 'Monday–Friday · 9:00 a.m. – 5:00 p.m.',
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    window.setTimeout(() => setSubmitted(false), 5000)
  }

  const field =
    'w-full rounded-xl border border-white/10 bg-base-950/80 px-4 py-3 text-cream placeholder:text-muted/45 outline-none transition focus:border-primary/45 focus:ring-2 focus:ring-primary/30'

  return (
    <div className={compact ? '' : 'grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14'}>
      {!compact ? (
        <div>
          <h2 className="font-serif text-3xl font-semibold text-cream sm:text-4xl">Contact &amp; booking</h2>
          <p className="mt-4 text-muted">
            Appointment requests and questions are welcome. This form is a demo front-end—connect it to your CRM or
            inbox when ready.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-glass backdrop-blur-md">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <div>
                <p className="font-semibold text-cream">Phone</p>
                <a href={`tel:${placeholders.phone.replace(/\D/g, '')}`} className="text-muted hover:text-primary">
                  {placeholders.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-glass backdrop-blur-md">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <div>
                <p className="font-semibold text-cream">Email</p>
                <a href={`mailto:${placeholders.email}`} className="text-muted hover:text-primary">
                  {placeholders.email}
                </a>
              </div>
            </li>
            <li className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-glass backdrop-blur-md">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-coral" aria-hidden />
              <div>
                <p className="font-semibold text-cream">Location</p>
                <p className="text-muted">{placeholders.address}</p>
              </div>
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-muted shadow-glass backdrop-blur-md">
              <p className="font-semibold text-cream">Hours</p>
              <p className="mt-1">{placeholders.hours}</p>
            </li>
          </ul>
        </div>
      ) : null}

      <motion.form
        layout
        onSubmit={handleSubmit}
        className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-card backdrop-blur-xl sm:p-8"
        noValidate
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-cream">
              Name
            </label>
            <input id="cf-name" name="name" type="text" required autoComplete="name" className={field} placeholder="Full name" />
          </div>
          <div>
            <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-cream">
              Email
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={field}
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-cream">
              Phone
            </label>
            <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className={field} placeholder="Optional" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="cf-service" className="mb-1.5 block text-sm font-medium text-cream">
              Service interested in
            </label>
            <select id="cf-service" name="service" className={field} defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              {catalogServices.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="General inquiry">General inquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="cf-date" className="mb-1.5 block text-sm font-medium text-cream">
              Preferred date
            </label>
            <input id="cf-date" name="preferredDate" type="date" className={field} />
          </div>
          <div>
            <label htmlFor="cf-time" className="mb-1.5 block text-sm font-medium text-cream">
              Preferred time
            </label>
            <input id="cf-time" name="preferredTime" type="time" className={field} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-cream">
              Message
            </label>
            <textarea
              id="cf-message"
              name="message"
              rows={compact ? 3 : 5}
              className={field}
              placeholder="Share goals, scheduling preferences, or questions."
            />
          </div>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-muted">
          By submitting, you agree to the{' '}
          <a href="/privacy" className="text-primary underline-offset-2 hover:underline">
            Privacy Policy
          </a>
          . Information is used only to respond to appointment inquiries.
        </p>

        {submitted ? (
          <p
            className="mt-4 rounded-xl border border-primary/35 bg-primary/10 px-4 py-3 text-sm text-cream"
            role="status"
            aria-live="polite"
          >
            Thank you—your message is ready to send once a backend endpoint is connected.
          </p>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-4">
          <Button type="submit" variant="primary">
            <Send className="h-4 w-4" aria-hidden />
            Request appointment
          </Button>
        </div>
      </motion.form>
    </div>
  )
}
