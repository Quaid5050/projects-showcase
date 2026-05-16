import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.postimg.cc/BQ6f5LJx/0560ff84-2306-4507-ba6b-addb0d24b55b.png"
          alt="AutoForge Workshop"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forge-black via-forge-black/85 to-transparent"/>
        <div className="absolute inset-0 bg-gradient-to-t from-forge-black via-transparent to-forge-black/30"/>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-forge-red/40 to-transparent hidden lg:block z-10"/>

      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-16 xl:px-24 pt-28 pb-16">
  <div className="max-w-2xl text-left">
        
          {/* Label */}
          <div className="section-label mb-5">
            <span className="w-8 h-px bg-forge-red"/>
            Professional Auto Repair
          </div>

          {/* Headline */}
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white leading-none tracking-wide mb-6">
            WE FIX
            <br/>
            <span className="text-gradient-red">EVERY</span>
            <br/>
            ENGINE.
          </h1>

          <p className="text-forge-light text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
            Precision automotive repairs and maintenance by skilled technicians. Reliable service, quality workmanship, and complete care for your vehicle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Link href="/services" className="btn-primary">
              View Our Services
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link href="/contact" className="btn-outline">
              Book Appointment
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '8,000+', label: 'Cars Serviced' },
              { value: '24h', label: 'Emergency Service' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-3xl text-forge-red tracking-wider">{stat.value}</span>
                <span className="text-forge-gray text-xs tracking-widest uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-forge-red animate-bounce"/>
        <span className="text-forge-gray text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  )
}
