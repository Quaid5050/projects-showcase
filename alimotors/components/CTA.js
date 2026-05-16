import Image from 'next/image'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=1600&q=80"
        alt="Workshop Background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-forge-black/85"/>
      <div className="absolute inset-0 bg-gradient-to-r from-forge-black via-forge-black/60 to-transparent"/>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <div className="section-label mb-5">
            <span className="w-8 h-px bg-forge-red"/>
            Book Today
          </div>
          <h2 className="section-title text-5xl sm:text-6xl lg:text-7xl mb-6">
            READY FOR
            <br/>
            A <span className="text-gradient-red">SERVICE?</span>
          </h2>
          <p className="text-forge-light leading-relaxed mb-8">
            Schedule your appointment today and experience professional automotive care. Most bookings confirmed within 2 hours.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Book an Appointment
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <a href="tel:+92213456789" className="btn-outline">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M2 3.5A1.5 1.5 0 013.5 2h1.372c.648 0 1.22.42 1.421 1.04l.924 2.77a1.5 1.5 0 01-.343 1.548L5.96 8.272a10.24 10.24 0 004.768 4.768l.914-.914a1.5 1.5 0 011.548-.343l2.77.924c.62.2 1.04.773 1.04 1.42V13.5a1.5 1.5 0 01-1.5 1.5H13C6.925 15 2 10.075 2 4v-.5z" stroke="currentColor" strokeWidth="1.3"/>
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
