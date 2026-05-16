const testimonials = [
  {
    name: 'James Carter',
    role: 'Fleet Manager, Logistics Co.',
    text: 'AutoForge has been maintaining our entire fleet for 5 years. Their diagnostic accuracy and turnaround time are unmatched. Highly recommended for commercial and personal vehicles alike.',
    rating: 5,
  },
  {
    name: 'Emily Johnson',
    role: 'Regular Customer',
    text: 'After a bad experience with another workshop, AutoForge completely restored my trust in car service centers. Transparent billing, professional staff, and my car runs like new.',
    rating: 5,
  },
  {
    name: 'Michael Thompson',
    role: 'Business Owner',
    text: 'I brought in my BMW with a complex engine issue that two other shops couldn’t solve. AutoForge diagnosed it quickly and had it fixed the same day. Truly expert-level work.',
    rating: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? 'text-forge-red' : 'text-forge-border'}`} viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1.5l1.75 3.55 3.92.57-2.84 2.77.67 3.9L8 10.32l-3.5 1.97.67-3.9L2.33 5.62l3.92-.57L8 1.5z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-forge-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4">
            <span className="w-8 h-px bg-forge-red"/>
            Customer Reviews
            <span className="w-8 h-px bg-forge-red"/>
          </div>
          <h2 className="section-title text-5xl sm:text-6xl">
            WHAT THEY <span className="text-gradient-red">SAY</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="group card-dark p-8 relative overflow-hidden hover:shadow-xl hover:shadow-forge-red/5 transition-all duration-300">
              {/* Quote mark */}
              <svg className="absolute top-5 right-6 w-16 h-16 text-forge-border group-hover:text-forge-red/10 transition-colors duration-300" viewBox="0 0 64 64" fill="currentColor">
                <path d="M12 8C5.4 8 0 13.4 0 20v12c0 6.6 5.4 12 12 12h4c0 6.6 5.4 12 12 12v-8c-2.2 0-4-1.8-4-4V20c0-2.2 1.8-4 4-4V8H12zm36 0c-6.6 0-12 5.4-12 12v12c0 6.6 5.4 12 12 12h4c0 6.6 5.4 12 12 12v-8c-2.2 0-4-1.8-4-4V20c0-2.2 1.8-4 4-4V8H48z"/>
              </svg>

              <Stars count={t.rating} />
              <p className="text-forge-light text-sm leading-relaxed mt-5 mb-6 relative">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 border-t border-forge-border pt-5">
                <div className="w-10 h-10 bg-forge-red/20 flex items-center justify-center border border-forge-red/30">
                  <span className="font-display text-lg text-forge-red">{t.name[0]}</span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-forge-gray text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
