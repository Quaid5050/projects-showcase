import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/herobg.png"
            alt="Luxury event photobooth"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-[#0a0a0a]/40" />
        </div>

        {/* Gold particle lines */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
          <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/15 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="font-display text-xs tracking-[0.4em] text-[#d4af37] uppercase mb-6 animate-fade-in">
            Laval, Québec · Premium Booth Experiences
          </p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-6 text-white">
            Capture Your
            <span className="block gold-text font-semibold">Finest Moments</span>
          </h1>

          <div className="gold-divider mb-8" />

          <p className="font-sans font-light text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Luxury photobooth & 360 video booth rental for birthdays, corporate events, weddings, and every occasion worth celebrating.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/booking" className="btn-gold px-10 py-4 text-sm tracking-[0.2em] font-semibold w-full sm:w-auto text-center">
              Reserve Your Date
            </Link>
            <Link href="/services" className="px-10 py-4 text-sm tracking-[0.2em] border border-white/30 hover:border-[#d4af37] text-white hover:text-[#d4af37] transition-all duration-300 w-full sm:w-auto text-center font-sans">
              Explore Services
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#d4af37]/60 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-[#111111] border-y border-[#d4af37]/15 py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '360°', label: 'Video Booth' },
              { number: '2h', label: 'Min. Rental' },
              { number: 'HD', label: 'Slow Motion' },
              { number: '∞', label: 'Captures' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-semibold gold-text mb-1">{stat.number}</div>
                <div className="font-sans text-xs tracking-[0.2em] text-white/40 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.4em] text-[#d4af37] uppercase mb-4">What We Offer</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
              Our <span className="gold-text font-semibold">Services</span>
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Photobooth',
                price: '$150/hr',
                description: 'Photobooth with backdrop, props & custom overlay. Unlimited captures with instant sharing.',
                features: ['Custom overlay & backdrop', 'Unlimited HD photos', 'Instant sharing', 'Fun props included', '2-hr minimum'],
                image: '/card1.png',
              },
              {
                title: '360 Videobooth',
                price: '$150/hr',
                description: 'Cinematic 360° slow-motion video on a 42" rotating stage. The ultimate event centerpiece.',
                features: ['42" rotating video stage', 'HD slow-motion', 'Custom song & overlay', 'RGB video lighting', 'Up to 4 people'],
                image: '/card2.png',
              },
              {
                title: 'Photo + Video Combo',
                price: '$250/hr',
                description: 'The complete luxury experience — both photobooth and 360 video booth for your event.',
                features: ['Both booths included', '3-hr minimum', '360 video + photos', 'Premium backdrop', 'Full operator support'],
                image: '/card3.png',
              },
            ].map((service, i) => (
              <div key={service.title} className="luxury-card group overflow-hidden relative">
                {i === 2 && (
                  <div className="absolute top-4 right-4 z-20 bg-[#d4af37] text-[#0a0a0a] text-[10px] tracking-widest uppercase px-3 py-1 font-semibold">
                    Best Value
                  </div>
                )}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="font-display text-2xl text-white">{service.title}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-xl font-semibold gold-text">{service.price}</span>
                    <span className="text-white/30 text-xs font-sans tracking-widest uppercase">per hour</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-5 font-light">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-white/70">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"/>
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link href="/booking" className="block text-center btn-gold py-3 text-xs tracking-widest font-semibold">
                    Book This
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="text-[#d4af37] text-sm tracking-widest hover:text-white transition-colors border-b border-[#d4af37]/40 pb-px">
              View All Services & Details →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ABOUT STRIP ─── */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="/our.png"
                alt="Flashchic photobooth setup"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/60 to-transparent" />
            </div>
            {/* Gold frame accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-[#d4af37]/50" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-[#d4af37]/50" />

            {/* Stats badge */}
            <div className="absolute bottom-8 left-8 bg-[#0a0a0a]/90 border border-[#d4af37]/40 px-6 py-4">
              <div className="font-display text-3xl gold-text font-semibold">100+</div>
              <div className="text-white/50 text-xs tracking-widest uppercase mt-1">Events Captured</div>
            </div>
          </div>

          <div>
            <p className="font-display text-xs tracking-[0.4em] text-[#d4af37] uppercase mb-4">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
              Where <span className="gold-text font-semibold">Luxury</span><br />Meets Memory
            </h2>
            <div className="gold-divider mb-8 ml-0" style={{margin: '0 0 2rem 0', background: 'linear-gradient(90deg, #d4af37, transparent)'}} />
            <p className="text-white/60 leading-relaxed mb-6 font-light">
              Flashchic Photobooth was born from a passion for creating unforgettable moments. Founded by Stéphanie Lebrun, we bring professional-grade photobooth and 360 video experiences to events across Laval, Montréal, and beyond.
            </p>
            <p className="text-white/60 leading-relaxed mb-8 font-light">
              From intimate birthday celebrations to large corporate galas, our luxury setups, professional operators, and instant sharing technology ensure every guest leaves with a lasting memory.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { icon: '★', label: 'Premium Quality', desc: 'HD slow-motion & professional lighting' },
                { icon: '⚡', label: 'Instant Access', desc: 'Share videos & photos right from the event' },
                { icon: '✦', label: 'Custom Experience', desc: 'Personalized overlays, songs & props' },
                { icon: '◈', label: 'Full Service', desc: 'Setup, operator & takedown included' },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span className="text-[#d4af37] text-lg mt-0.5 flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-white text-sm font-semibold mb-1">{item.label}</p>
                    <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-gold px-8 py-3 text-xs tracking-widest font-semibold inline-block">
              Our Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* ─── EVENTS WE SERVE ─── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.4em] text-[#d4af37] uppercase mb-4">Perfect For</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
              Every <span className="gold-text font-semibold">Occasion</span>
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Birthdays', img: 'https://images.unsplash.com/photo-1544155892-b2b6c64204fc?q=80' },
              { label: 'Baby Showers', img: 'https://images.unsplash.com/photo-1528218635780-5952720c9729?q=80' },
              { label: 'Corporate', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80' },
              { label: 'Weddings', img: 'https://images.unsplash.com/photo-1721655426205-53214210577d?q=80' },
              { label: 'Galas', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80' },
              { label: 'Parties', img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&q=80' },
            ].map((event) => (
              <div key={event.label} className="group relative overflow-hidden aspect-square">
                <Image
                  src={event.img}
                  alt={event.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/50 group-hover:bg-[#0a0a0a]/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="font-display text-white text-sm tracking-widest">{event.label}</span>
                </div>
                <div className="absolute inset-0 border border-[#d4af37]/0 group-hover:border-[#d4af37]/40 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING PREVIEW ─── */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-display text-xs tracking-[0.4em] text-[#d4af37] uppercase mb-4">Transparent Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
            Simple, <span className="gold-text font-semibold">Clear Rates</span>
          </h2>
          <div className="gold-divider mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { name: 'Photobooth', rate: '$150', unit: '/hr', min: '2 hr min', highlight: false },
              { name: 'Photo + Video Combo', rate: '$250', unit: '/hr', min: '3 hr min', highlight: true },
              { name: '360 Videobooth', rate: '$150', unit: '/hr', min: '2 hr min', highlight: false },
            ].map((pkg) => (
              <div key={pkg.name} className={`p-8 ${pkg.highlight ? 'pricing-featured' : 'luxury-card'}`}>
                <p className="font-display text-xs tracking-[0.3em] text-[#d4af37] uppercase mb-4">{pkg.name}</p>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="font-display text-5xl font-light text-white">{pkg.rate}</span>
                  <span className="text-white/40 text-sm">{pkg.unit}</span>
                </div>
                <p className="text-white/40 text-xs tracking-widest mb-6">{pkg.min}</p>
                <Link href="/pricing" className={`block text-center py-3 text-xs tracking-widest font-sans font-semibold transition-all ${
                  pkg.highlight ? 'btn-gold' : 'border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10'
                }`}>
                  See Details
                </Link>
              </div>
            ))}
          </div>

          <p className="text-white/40 text-sm mb-6">Travel included for Montréal & surrounding area. +$150 for events 200km+</p>
          <Link href="/booking" className="btn-gold px-12 py-4 text-sm tracking-widest font-semibold inline-block">
            Check Availability
          </Link>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1800&q=80"
            alt="Book your photobooth"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="font-display text-xs tracking-[0.4em] text-[#d4af37] uppercase mb-4">Ready to Book?</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
            Make Your Event<br /><span className="gold-text font-semibold">Unforgettable</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 font-light">
            Secure your date with a 50% deposit. Limited availability — book early.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-gold px-12 py-4 text-sm tracking-widest font-semibold">
              Reserve Now
            </Link>
            <a href="tel:5148318409" className="px-12 py-4 text-sm tracking-widest border border-white/30 hover:border-[#d4af37] text-white hover:text-[#d4af37] transition-all duration-300 font-sans">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
