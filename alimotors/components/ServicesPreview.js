import Link from 'next/link'
import { services } from './servicesData'

export default function ServicesPreview() {
  const preview = services.slice(0, 6)

  return (
    <section className="py-24 bg-forge-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)', backgroundSize: '60px 60px'}}/>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="section-label mb-4">
              <span className="w-8 h-px bg-forge-red"/>
              What We Do
            </div>
            <h2 className="section-title text-5xl sm:text-6xl lg:text-7xl">
              OUR<br/>
              <span className="text-gradient-red">SERVICES</span>
            </h2>
          </div>
          <p className="text-forge-gray max-w-sm text-sm leading-relaxed lg:mb-2">
            From routine maintenance to complex repairs, our certified technicians deliver quality service on every job.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-forge-border">
          {preview.map((service, idx) => (
            <div
              key={service.id}
              className="group bg-forge-black hover:bg-forge-card p-8 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-forge-red group-hover:w-full transition-all duration-500"/>

              {/* Number */}
              <span className="absolute top-6 right-6 font-display text-5xl text-forge-border group-hover:text-forge-red/20 transition-colors duration-300 leading-none select-none">
                {String(idx + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 text-forge-red mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                dangerouslySetInnerHTML={{ __html: service.icon }}
              />

              <h3 className="font-display text-2xl text-white tracking-wide mb-3 group-hover:text-forge-red transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-forge-gray text-sm leading-relaxed mb-5">
                {service.shortDesc}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-forge-red text-sm font-semibold">{service.price}</span>
                <Link href="/services" className="text-forge-gray hover:text-forge-red text-sm transition-colors flex items-center gap-1 group/link">
                  Learn more
                  <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link href="/services" className="btn-outline">
            View All Services
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
