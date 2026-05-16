import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-24 bg-forge-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=900&q=80"
                alt="Workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-forge-red/10"/>
            </div>
            {/* Accent image */}
            <div className="absolute -bottom-8 -right-6 w-40 h-40 sm:w-52 sm:h-52 border-4 border-forge-dark overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1635294084898-9a7ed6559eb4?q=80&w=850&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mechanic at work"
                fill
                className="object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -top-5 -left-5 bg-forge-red p-5 flex flex-col items-center justify-center w-24 h-24">
              <span className="font-display text-3xl text-white leading-none">15</span>
              <span className="text-white/80 text-xs text-center leading-tight">Years<br/>Expert</span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <div className="section-label mb-4">
              <span className="w-8 h-px bg-forge-red"/>
              About AutoForge
            </div>
            <h2 className="section-title text-5xl sm:text-6xl mb-6">
              BUILT ON
              <br/>
              <span className="text-gradient-red">TRUST &</span>
              <br/>
              PRECISION.
            </h2>
            <p className="text-forge-gray leading-relaxed mb-5">
              Founded as a small local garage, AutoForge Workshop has grown into a trusted automotive service center. We combine traditional craftsmanship with modern diagnostic tools to deliver reliable and precise repairs.
            </p>
            <p className="text-forge-gray leading-relaxed mb-8">
              Our technicians are trained professionals with strong hands-on experience across a wide range of vehicle systems. Every vehicle is handled with care, attention to detail, and a focus on long-term performance.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { value: '12', label: 'Certified Technicians' },
                { value: '4', label: 'Service Bays' },
                { value: '50+', label: 'Vehicle Brands' },
                { value: '98%', label: 'Customer Satisfaction' },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-forge-red pl-4">
                  <div className="font-display text-3xl text-white">{item.value}</div>
                  <div className="text-forge-gray text-xs tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
