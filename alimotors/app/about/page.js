import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | AliMotors Workshop',
  description: 'Discover AutoForge Workshop, our mission, values, and the expert team delivering trusted auto repair services..',
}

const values = [
  {
    icon: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"><path d="M16 3L5 8v9c0 5.8 4.7 11.2 11 12.8C22.3 28.2 27 22.8 27 17V8L16 3z" stroke="currentColor" strokeWidth="1.5"/><path d="M11 16l3.5 3.5L21 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>`,
    title: 'Integrity',
    desc: 'Honest assessments, transparent pricing, and work performed only with your approval.',
  },
  {
    icon: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"><path d="M16 4l2.5 6.5H25l-5.2 3.8 2 6.5L16 17l-5.8 3.8 2-6.5L7 10.5h6.5L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>`,
    title: 'Excellence',
    desc: 'Every repair completed to manufacturer standards using only quality-approved parts.',
  },
  {
    icon: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5"/><path d="M16 10v6l4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`,
    title: 'Efficiency',
    desc: 'Prompt service that respects your schedule. Same-day service available for most jobs.',
  },
]

const team = [
  { name: 'Khalid Hassan', role: 'Master Technician & Founder', exp: '22 Years Experience', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Imran Qureshi', role: 'Engine Specialist', exp: '15 Years Experience', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  { name: 'Raheel Anwar', role: 'Electrical & Diagnostics', exp: '12 Years Experience', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
  { name: 'Zubair Shah', role: 'Body & Paint Expert', exp: '10 Years Experience', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1613214049841-028981a2eb71?w=1600&q=80" alt="Workshop" fill className="object-cover object-center"/>
        <div className="absolute inset-0 bg-forge-black/80"/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label mb-4">
            <span className="w-8 h-px bg-forge-red"/>
            Our Story
          </div>
          <h1 className="section-title text-6xl sm:text-7xl lg:text-8xl mb-6">
            ABOUT<br/><span className="text-gradient-red">AUTOFORGE</span>
          </h1>
          <p className="text-forge-light max-w-xl leading-relaxed">
            Delivering trusted automotive care with precision and expertise since 2008.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-forge-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">
                <span className="w-8 h-px bg-forge-red"/>
                Who We Are
              </div>
              <h2 className="section-title text-5xl mb-6">
                MORE THAN JUST A<br/>
                <span className="text-gradient-red">GARAGE.</span>
              </h2>
              <p className="text-forge-gray leading-relaxed mb-5">
               AutoForge Workshop was founded in 2008 with one goal: to provide drivers with professional auto repair services they can truly trust. What started as a small 2-bay garage has grown into a modern automotive workshop with certified technicians and advanced diagnostic equipment.
              </p>
              <p className="text-forge-gray leading-relaxed mb-8">
                We service all makes and models — from Japanese and Korean economy cars to European performance vehicles and American SUVs. No job is too small or too complex for our team.
              </p>
              <div className="flex flex-wrap gap-6">
                {[['2008', 'Founded'], ['8,000+', 'Cars Served'], ['50+', 'Brands Covered']].map(([v, l]) => (
                  <div key={l} className="text-center border border-forge-border px-6 py-4">
                    <div className="font-display text-3xl text-forge-red">{v}</div>
                    <div className="text-forge-gray text-xs tracking-wide">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1705357311473-90eaad838e8d?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Workshop interior" fill className="object-cover"/>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden mt-8">
                <Image src="https://images.unsplash.com/photo-1611633859589-7990d2fbb56b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mechanic at work" fill className="object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-forge-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4">
              <span className="w-8 h-px bg-forge-red"/>
              Our Foundation
              <span className="w-8 h-px bg-forge-red"/>
            </div>
            <h2 className="section-title text-5xl sm:text-6xl">
              MISSION & <span className="text-gradient-red">VALUES</span>
            </h2>
          </div>

          {/* Mission Statement */}
          <div className="border border-forge-border p-10 mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-forge-red"/>
            <p className="font-display text-2xl sm:text-3xl text-white leading-tight tracking-wide max-w-3xl">
              "To deliver world-class automotive care with honesty, efficiency, and technical expertise — keeping drivers moving with confidence."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="group card-dark p-8 hover:shadow-lg hover:shadow-forge-red/5 transition-all duration-300">
                <div className="w-10 h-10 text-forge-red mb-5 group-hover:scale-110 transition-transform duration-300"
                  dangerouslySetInnerHTML={{ __html: v.icon }}
                />
                <h3 className="font-display text-2xl text-white tracking-wide mb-3">{v.title}</h3>
                <p className="text-forge-gray text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Trust Signals */}
      <section className="py-24 bg-forge-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">
                <span className="w-8 h-px bg-forge-red"/>
                Why Trust Us
              </div>
              <h2 className="section-title text-5xl mb-8">
                CERTIFICATIONS
                <br/>
                <span className="text-gradient-red">& STANDARDS</span>
              </h2>
              <div className="space-y-5">
                {[
                  'Authorized repair center for 20+ vehicle manufacturers',
                  'Latest OBD-III diagnostic equipment updated annually',
                  'All staff undergo 40+ hours of training per year',
                  'ISO-compliant workshop processes and quality checks',
                  'Genuine OEM and manufacturer-certified replacement parts',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-forge-red mt-0.5 shrink-0" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M6.5 10l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-forge-light text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square">
              <Image src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80" alt="Workshop certifications" fill className="object-cover"/>
              <div className="absolute inset-0 bg-forge-black/30"/>
              <div className="absolute bottom-0 right-0 bg-forge-red p-8 flex flex-col items-center justify-center w-36 h-36">
                <span className="font-display text-4xl text-white leading-none">A+</span>
                <span className="text-white/80 text-xs text-center mt-1">Service Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forge-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl text-white tracking-wide">READY TO EXPERIENCE THE DIFFERENCE?</h3>
            <p className="text-white/70 mt-1">Schedule your service appointment today.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-white text-forge-red font-semibold px-8 py-3.5 hover:bg-forge-black hover:text-white transition-colors duration-300 inline-flex items-center gap-2">
            Book Now
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>
    </>
  )
}
