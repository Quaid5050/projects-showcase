export default function WhyChooseUs() {
  const features = [
    {
      icon: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <path d="M16 4l2.5 6.5H25l-5.2 3.8 2 6.5L16 17l-5.8 3.8 2-6.5L7 10.5h6.5L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 24l-3 4M24 24l3 4M16 22v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>`,
      title: 'Certified Experts',
      desc: 'All technicians are manufacturer-certified with ongoing training on the latest vehicle systems.',
    },
    {
      icon: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <path d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 10v6l4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 16h2M26 16h2M16 4v2M16 26v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>`,
      title: 'Fast Turnaround',
      desc: 'We respect your time. Most services completed same day with precise scheduling.',
    },
    {
      icon: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <path d="M16 3L5 8v9c0 5.8 4.7 11.2 11 12.8C22.3 28.2 27 22.8 27 17V8L16 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 16l3.5 3.5L21 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`,
      title: 'Genuine Parts',
      desc: 'We only use OEM and manufacturer-approved parts with full warranty coverage.',
    },
    {
      icon: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 14h6M8 18h4M20 14h4M20 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 8V6M22 8V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>`,
      title: 'Transparent Pricing',
      desc: 'Upfront quotes with no hidden charges. You approve before any work begins.',
    },
    {
      icon: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <path d="M6 16l4-4 4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 6h24M4 26h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>`,
      title: '12-Month Warranty',
      desc: 'All repairs backed by a 12-month or 20,000 km warranty for your peace of mind.',
    },
    {
      icon: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <path d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M22 10l-8 8M14 10l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <path d="M10 16h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="10" r="1.5" fill="currentColor"/>
      </svg>`,
      title: '24h Emergency',
      desc: 'Breakdown? Our emergency line is available around the clock, 365 days a year.',
    },
  ]

  return (
    <>
      {/* Why Choose Us */}
      <section className="py-24 bg-forge-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4">
              <span className="w-8 h-px bg-forge-red"/>
              Why AutoForge
              <span className="w-8 h-px bg-forge-red"/>
            </div>
            <h2 className="section-title text-5xl sm:text-6xl">
              THE <span className="text-gradient-red">AUTOFORGE</span> DIFFERENCE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <div key={i} className="group card-dark p-7 hover:shadow-lg hover:shadow-forge-red/5">
                <div className="w-10 h-10 text-forge-red mb-5 transition-transform duration-300 group-hover:scale-110"
                  dangerouslySetInnerHTML={{ __html: feat.icon }}
                />
                <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-forge-red transition-colors duration-200">
                  {feat.title}
                </h3>
                <p className="text-forge-gray text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-forge-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(-45deg, rgba(0,0,0,0.5) 0px, rgba(0,0,0,0.5) 2px, transparent 2px, transparent 10px)'}}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '8,000+', label: 'Cars Serviced' },
              { value: '15+', label: 'Years in Business' },
              { value: '12', label: 'Expert Technicians' },
              { value: '98%', label: 'Happy Customers' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-display text-5xl sm:text-6xl text-white leading-none mb-2">{stat.value}</span>
                <span className="text-white/70 text-sm tracking-wider uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
