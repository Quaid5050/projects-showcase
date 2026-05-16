import Link from 'next/link'
import { services } from '../../components/servicesData'

export const metadata = {
  title: 'Services | AutoForge Workshop',
  description: 'Full range of professional automotive services: engine repair, tire change, oil service, brake service, diagnostics, body work and more.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-forge-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(#E8192C 1px, transparent 1px), linear-gradient(90deg, #E8192C 1px, transparent 1px)', backgroundSize: '80px 80px'}}/>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-forge-red/5 to-transparent"/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label mb-4">
            <span className="w-8 h-px bg-forge-red"/>
            What We Offer
          </div>
          <h1 className="section-title text-6xl sm:text-7xl lg:text-8xl mb-6">
            OUR<br/><span className="text-gradient-red">SERVICES</span>
          </h1>
          <p className="text-forge-light max-w-lg leading-relaxed">
            From express maintenance to full engine rebuilds, our certified technicians deliver world-class service on every vehicle, every time.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-forge-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <div key={service.id} className="group card-dark p-8 relative overflow-hidden hover:shadow-xl hover:shadow-forge-red/5 transition-all duration-300">
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-forge-red group-hover:w-full transition-all duration-500"/>
                {/* Corner number */}
                <div className="absolute top-6 right-8 font-display text-6xl text-forge-border group-hover:text-forge-red/15 transition-colors duration-300 leading-none select-none">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="w-14 h-14 text-forge-red shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                    dangerouslySetInnerHTML={{ __html: service.icon }}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-2xl text-white tracking-wide mb-2 group-hover:text-forge-red transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-forge-gray text-sm leading-relaxed mb-5">
                      {service.fullDesc}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 border-t border-forge-border pt-5">
                      <div className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-forge-red" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
                          <path d="M7 4v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                        <span className="text-forge-gray text-xs">{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-forge-red" viewBox="0 0 14 14" fill="none">
                          <path d="M7 1.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" stroke="currentColor" strokeWidth="1.2"/>
                          <path d="M4.5 7h5M7 4.5v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                        <span className="text-forge-red text-xs font-semibold">{service.price}</span>
                      </div>
                      <Link href="/contact" className="ml-auto text-forge-gray hover:text-forge-red text-xs font-medium transition-colors flex items-center gap-1 group/link">
                        Book This Service
                        <svg className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-forge-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4">
              <span className="w-8 h-px bg-forge-red"/>
              How It Works
              <span className="w-8 h-px bg-forge-red"/>
            </div>
            <h2 className="section-title text-5xl sm:text-6xl">
              OUR <span className="text-gradient-red">PROCESS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-forge-border"/>

            {[
              { step: '01', title: 'Book Appointment', desc: 'Call us or fill out the online form to schedule your service.' },
              { step: '02', title: 'Drop Your Car', desc: 'Bring your vehicle in at your scheduled time. We start immediately.' },
              { step: '03', title: 'Diagnostics & Quote', desc: 'We inspect your car and provide a clear, itemized quote before any work.' },
              { step: '04', title: 'Pickup & Drive', desc: 'Collect your fully serviced vehicle with a detailed service report.' },
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-forge-card border-2 border-forge-red flex items-center justify-center mb-6 z-10 relative">
                  <span className="font-display text-2xl text-forge-red">{step.step}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-forge-gray text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forge-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl text-white tracking-wide">NEED A QUOTE? CALL US TODAY.</h3>
            <p className="text-white/70 mt-1">Free estimates on all services. No obligation.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a href="tel:+19052061313" className="bg-white text-forge-red font-semibold px-7 py-3.5 hover:bg-forge-black hover:text-white transition-colors duration-300 inline-flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M2 3.5A1.5 1.5 0 013.5 2h1.372c.648 0 1.22.42 1.421 1.04l.924 2.77a1.5 1.5 0 01-.343 1.548L5.96 8.272a10.24 10.24 0 004.768 4.768l.914-.914a1.5 1.5 0 011.548-.343l2.77.924c.62.2 1.04.773 1.04 1.42V13.5a1.5 1.5 0 01-1.5 1.5H13C6.925 15 2 10.075 2 4v-.5z" stroke="currentColor" strokeWidth="1.3"/>
              </svg>
              +1 905 2061 313
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-semibold px-7 py-3.5 hover:bg-white hover:text-forge-red transition-colors duration-300">
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
