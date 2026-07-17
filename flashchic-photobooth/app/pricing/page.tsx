import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Pricing | Flashchic Photobooth – Transparent Event Booth Rates',
  description: 'Clear photobooth and 360 video booth pricing for events in Laval and Montréal. No hidden fees. $150/hr photobooth, $150/hr 360 videobooth, $250/hr combo.',
}

const packages = [
  {
    name: 'Photobooth',
    price: 150,
    unit: '/hr',
    minimum: '2 hours minimum',
    minTotal: '$300',
    featured: false,
    features: [
      'Photobooth with backdrop',
      'Custom overlay design',
      'Fun props included',
      'Unlimited HD photo captures',
      'Instant photo access & sharing',
      'Qualified booth operator',
      'Professional setup & teardown',
      'Delivery included (Laval/MTL)',
    ],
    notIncluded: [
      '360 video capability',
    ],
  },
  {
    name: 'Photo + Video Combo',
    price: 250,
    unit: '/hr',
    minimum: '3 hours minimum',
    minTotal: '$750',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Both photobooth & 360 videobooth',
      '42" rotating 360 stage (4 people)',
      'Custom overlays for both booths',
      'Song choice for 360 videos',
      'RGB professional video lighting',
      'Unlimited photos & HD slow-motion videos',
      'Instant access & social sharing',
      'Full operator team',
      'Premium backdrop',
      'Props included',
      'Full delivery, setup & teardown',
    ],
    notIncluded: [],
  },
  {
    name: '360 Videobooth',
    price: 150,
    unit: '/hr',
    minimum: '2 hours minimum',
    minTotal: '$300',
    featured: false,
    features: [
      '42" rotating video stage',
      'Up to 4 people per capture',
      'HD slow-motion 360° video',
      'Professional RGB video lighting',
      'Custom overlay & song choice',
      'Unlimited captures',
      'Instant video sharing',
      'Qualified technician/operator',
      'Full delivery, setup & teardown',
    ],
    notIncluded: [
      'Traditional photo prints',
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558636508-e0969431c544?w=1800&q=80"
            alt="Pricing"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/82" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-display text-xs tracking-[0.4em] text-[#d4af37] uppercase mb-4">Transparent Rates</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-white mb-6">
            Simple <span className="gold-text font-semibold">Pricing</span>
          </h1>
          <div className="gold-divider mb-6" />
          <p className="text-white/60 text-lg font-light max-w-xl mx-auto">
            No hidden fees. Everything included. Just choose your experience.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col ${pkg.featured ? 'pricing-featured' : 'luxury-card'} p-8`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d4af37] text-[#0a0a0a] text-[10px] tracking-widest uppercase px-5 py-1.5 font-semibold whitespace-nowrap">
                    {pkg.badge}
                  </div>
                )}

                <div className="mb-8">
                  <p className="font-display text-xs tracking-[0.3em] text-[#d4af37] uppercase mb-4">{pkg.name}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-display text-5xl font-light text-white">${pkg.price}</span>
                    <span className="text-white/40 text-sm">{pkg.unit}</span>
                  </div>
                  <p className="text-white/40 text-xs tracking-wider">{pkg.minimum}</p>
                  <div className="mt-3 p-3 bg-[#d4af37]/8 border border-[#d4af37]/20">
                    <p className="text-white/60 text-xs tracking-widest">
                      Starting from <span className="text-[#d4af37] font-semibold">{pkg.minTotal}</span>
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-white/70">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                      {feat}
                    </li>
                  ))}
                  {pkg.notIncluded.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-white/30">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                        <path d="M18 6 6 18M6 6l12 12"/>
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/booking"
                  className={`block text-center py-4 text-xs tracking-[0.2em] font-semibold font-sans transition-all ${
                    pkg.featured
                      ? 'btn-gold'
                      : 'border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10'
                  }`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Fees */}
      <section className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-light text-white mb-2">
              Additional <span className="gold-text font-semibold">Fees</span>
            </h2>
            <p className="text-white/40 text-sm">Transparent — no surprises</p>
          </div>

          <div className="space-y-4">
            {[
              {
                label: 'Travel — Montréal & Laval & surrounding area',
                price: 'Free',
                note: 'No travel charge for local events',
              },
              {
                label: 'Travel — 200km+ outside Montréal',
                price: '$150',
                note: 'For events 2+ hours from Montréal',
              },
              {
                label: 'Early arrival (beyond 1hr before start)',
                price: 'Contact Us',
                note: 'Hourly non-operational rate applies',
              },
              {
                label: 'Tax (TPS/TVQ)',
                price: '15%',
                note: 'Applied to final invoice total',
              },
            ].map((fee) => (
              <div key={fee.label} className="luxury-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-white text-sm font-semibold">{fee.label}</p>
                  <p className="text-white/40 text-xs mt-0.5">{fee.note}</p>
                </div>
                <span className="font-display text-xl gold-text flex-shrink-0">{fee.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Policy */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-light text-white mb-2">
              Payment <span className="gold-text font-semibold">Policy</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Booking Deposit',
                desc: '50% deposit required at booking to secure your date. Deposit is non-refundable.',
                icon: '◈',
              },
              {
                title: 'Balance Due',
                desc: 'Remaining balance (50%) due no later than 15 days before your event date.',
                icon: '◉',
              },
              {
                title: 'Cancellation',
                desc: 'Cancellations within 30 days of the event — no refund on service fee. Deposit always non-refundable.',
                icon: '◎',
              },
              {
                title: 'Date Changes',
                desc: 'We\'ll do our best to accommodate date changes. Subject to availability.',
                icon: '◐',
              },
            ].map((policy) => (
              <div key={policy.title} className="luxury-card p-6">
                <span className="text-[#d4af37] text-xl mb-3 block">{policy.icon}</span>
                <h3 className="font-display text-lg text-white mb-2">{policy.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">{policy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0d0d0d] text-center border-t border-[#d4af37]/10">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-4xl font-light text-white mb-6">
            Ready to <span className="gold-text font-semibold">Book?</span>
          </h2>
          <p className="text-white/50 mb-10 font-light">Secure your date now with our easy booking form.</p>
          <Link href="/booking" className="btn-gold px-12 py-4 text-sm tracking-widest font-semibold inline-block">
            Reserve Your Date
          </Link>
        </div>
      </section>
    </>
  )
}
