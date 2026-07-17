import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Services | Flashchic Photobooth – 360 Video & Photo Booth',
  description: 'Photobooth, 360 videobooth, and combo packages for events in Laval, Montréal. Professional setup, custom overlays, instant sharing.',
}

const services = [
  {
    id: 'photobooth',
    name: 'Photobooth',
    tagline: 'Timeless Photos, Instant Joy',
    price: '$150',
    unit: '/hr',
    minimum: '2-hour minimum',
    image: '/1.png',
    description: 'Our classic photobooth brings a luxury touch to any event. With a stunning backdrop, professional lighting, and unlimited captures, your guests will have photos to treasure forever.',
    includes: [
      'Professional photobooth setup with backdrop',
      'Unlimited HD photo captures',
      'Custom overlay design',
      'Fun props (hats, glasses, signs & more)',
      'Instant photo access and sharing',
      'Professional delivery, setup & teardown',
      'Qualified booth operator',
    ],
    requirements: [
      '10\' x 10\' x 8\' space required',
      'Standard 110V, 10 amp outlet within 15 ft',
      '2-hour minimum rental',
    ],
  },
  {
    id: 'videobooth',
    name: '360 Videobooth',
    tagline: 'Cinematic 360° Slow Motion',
    price: '$150',
    unit: '/hr',
    minimum: '2-hour minimum',
    image: '/360.png',
    description: 'The ultimate event centerpiece. Our 360 video booth captures your guests on a rotating stage with stunning slow-motion HD footage — shareable in seconds.',
    includes: [
      '42" rotating video stage (up to 4 people)',
      'High quality 360° slow-motion HD video',
      'Professional RGB video lighting',
      'Custom overlay and song choice',
      'Unlimited HD slow-motion captures',
      'Instant video access and social sharing',
      'Qualified booth operator/technician',
      'Delivery, setup & teardown included',
    ],
    requirements: [
      '10\' x 10\' x 8\' space required',
      'Stable, level surface',
      'Reliable WiFi (2MB+ upload speed)',
      '2-hour minimum rental',
    ],
  },
  {
    id: 'combo',
    name: 'Photo + Video Combo',
    tagline: 'The Complete Luxury Experience',
    price: '$250',
    unit: '/hr',
    minimum: '3-hour minimum',
    image: '/4th.png',
    description: 'Why choose when you can have both? The ultimate event package combines our photobooth and 360 video booth for a complete luxury experience your guests will never forget.',
    includes: [
      'Everything in Photobooth package',
      'Everything in 360 Videobooth package',
      'Premium backdrop included',
      '360 photo/video booth with backdrop',
      'Professional RGB video lighting',
      'Full operator team',
      'Custom overlays for both booths',
    ],
    requirements: [
      'Larger space required for both setups',
      'Two standard 110V outlets needed',
      'Reliable WiFi (2MB+ upload speed)',
      '3-hour minimum rental',
    ],
    featured: true,
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1800&q=80"
            alt="Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-display text-xs tracking-[0.4em] text-[#d4af37] uppercase mb-4">What We Offer</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-white mb-6">
            Our <span className="gold-text font-semibold">Services</span>
          </h1>
          <div className="gold-divider mb-6" />
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
            Premium booth experiences tailored to elevate every celebration.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, i) => (
            <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`relative ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-[480px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
                  {service.featured && (
                    <div className="absolute top-6 left-6 bg-[#d4af37] text-[#0a0a0a] text-xs tracking-widest uppercase px-4 py-2 font-semibold">
                      Best Value
                    </div>
                  )}
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 border-l border-t border-[#d4af37]/40" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r border-b border-[#d4af37]/40" />
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <p className="font-display text-xs tracking-[0.4em] text-[#d4af37] uppercase mb-2">{service.tagline}</p>
                <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">{service.name}</h2>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display text-3xl gold-text font-semibold">{service.price}</span>
                  <span className="text-white/40 text-sm">{service.unit} · {service.minimum}</span>
                </div>

                <p className="text-white/60 leading-relaxed mb-8 font-light">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-sans text-xs tracking-[0.2em] text-[#d4af37] uppercase mb-4">What's Included</h4>
                  <ul className="space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                          <path d="M20 6 9 17l-5-5"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 p-4 border border-[#d4af37]/20 bg-[#d4af37]/5">
                  <h4 className="font-sans text-xs tracking-[0.2em] text-[#d4af37] uppercase mb-3">Requirements</h4>
                  <ul className="space-y-1">
                    {service.requirements.map((req) => (
                      <li key={req} className="flex items-center gap-2 text-xs text-white/50">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 16v-4M12 8h.01"/>
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/booking" className="btn-gold px-8 py-3 text-xs tracking-widest font-semibold inline-block">
                  Book {service.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-6 bg-[#0d0d0d] border-t border-[#d4af37]/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.4em] text-[#d4af37] uppercase mb-4">Extra Services</p>
            <h2 className="font-display text-3xl font-light text-white">Additional Fees</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="luxury-card p-6 flex items-center justify-between">
              <div>
                <p className="text-white font-semibold mb-1">Travel — Montréal & Area</p>
                <p className="text-white/50 text-sm">Local events, no travel charge</p>
              </div>
              <span className="font-display text-2xl gold-text">$0</span>
            </div>
            <div className="luxury-card p-6 flex items-center justify-between">
              <div>
                <p className="text-white font-semibold mb-1">Travel — 200km+</p>
                <p className="text-white/50 text-sm">Events 2+ hours outside Montréal</p>
              </div>
              <span className="font-display text-2xl gold-text">$150</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0a0a0a] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-light text-white mb-6">
            Not Sure Which Package? <span className="gold-text font-semibold">Let's Talk.</span>
          </h2>
          <p className="text-white/50 mb-10 font-light">
            Contact us and we'll help you find the perfect setup for your event size, budget, and vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold px-10 py-4 text-sm tracking-widest font-semibold">
              Contact Us
            </Link>
            <Link href="/booking" className="px-10 py-4 text-sm tracking-widest border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 transition-all font-sans">
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
