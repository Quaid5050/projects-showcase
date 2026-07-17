import AnimateIn from '@/components/AnimateIn'
import Link from 'next/link'

const plans = [
  {
    tier: 'Hourly Support', name: 'Companion Care', price: '$28', unit: '/hr',
    desc: 'A few hours per visit — ideal for companionship, light homemaking, meal prep, and medication reminders.',
    features: ['Companionship & conversation','Meal preparation','Light housekeeping','Medication reminders','Errands & appointments','Minimum 3 hours per visit'],
    btn: 'ol', feat: false,
  },
  {
    tier: 'Full Personal Support', name: 'PSW Care', price: '$34', unit: '/hr', pop: 'Most Requested',
    desc: 'Comprehensive personal care from a certified PSW — hands-on support with bathing, dressing, mobility, and clinical monitoring.',
    features: ['Everything in Companion Care','Bathing & personal hygiene','Dressing & grooming','Mobility & transfer support','Dementia & cognitive support','Weekly coordinator check-in'],
    btn: 'sl', feat: true,
  },
  {
    tier: '24-Hour & Intensive', name: 'Live-In Care', price: '$220', unit: '/day',
    desc: 'Full-time live-in or 24-hour rotating care — ideal for palliative care, post-hospital recovery, or advanced dementia.',
    features: ['All PSW Care services','Overnight monitoring','Palliative & end-of-life support','Daily family communication','Hospital liaison support','Care coordinator on-call 24/7'],
    btn: 'ol', feat: false,
  },
]

export default function PricingPage() {
  return (
    <>
      <div className="bg-[#1C3162] py-16 px-[5%]">
        <div className="max-w-[1180px] mx-auto text-center">
          <AnimateIn>
            <h1 className="font-serif text-[clamp(32px,4vw,52px)] font-semibold text-white mb-3">Transparent Pricing</h1>
            <p className="text-white/70 text-lg font-light max-w-xl mx-auto">Honest rates. No hidden fees. No surprises. Families deserve to know what care costs before they call.</p>
          </AnimateIn>
        </div>
      </div>

      <section className="py-[88px] px-[5%] bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-8">
            {plans.map((p, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <div className={`relative rounded-2xl border-[1.5px] p-8 transition-all hover:-translate-y-1 overflow-hidden ${p.feat ? 'bg-[#1C3162] border-transparent -mt-2 shadow-2xl' : 'bg-white border-[rgba(42,67,115,.1)] hover:shadow-lg'}`}>
                  {p.pop && <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#54AABA] text-white text-[11px] font-bold px-4 py-1 rounded-b-lg uppercase tracking-wide">{p.pop}</div>}
                  <div className={`text-[11px] font-bold uppercase tracking-widest mb-2 mt-4 ${p.feat ? 'text-white/55' : 'text-[#5DA6DD]'}`}>{p.tier}</div>
                  <div className={`font-serif text-2xl font-semibold mb-2 ${p.feat ? 'text-white' : 'text-[#1C3162]'}`}>{p.name}</div>
                  <div className="mb-4">
                    <span className={`text-xs ${p.feat ? 'text-white/50' : 'text-[#5C6B80]'}`}>Starting from</span>
                    <div className="flex items-baseline gap-1">
                      <span className={`font-serif text-[38px] font-semibold leading-none ${p.feat ? 'text-[#A8D5C8]' : 'text-[#1C3162]'}`}>{p.price}</span>
                      <span className={`text-sm ${p.feat ? 'text-white/50' : 'text-[#5C6B80]'}`}>{p.unit}</span>
                    </div>
                  </div>
                  <p className={`text-sm leading-relaxed mb-5 pb-5 border-b ${p.feat ? 'text-white/58 border-white/12' : 'text-[#5C6B80] border-[rgba(42,67,115,.1)]'}`}>{p.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {p.features.map(f => (
                      <li key={f} className={`flex items-start gap-2 text-sm ${p.feat ? 'text-white/75' : 'text-[#2A3A5C]'}`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill={p.feat ? '#89C477' : '#5DA6DD'} className="flex-shrink-0 mt-0.5"><path d="M9 12l2 2 4-4"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`block text-center py-3 rounded font-bold text-sm no-underline transition-all ${p.btn === 'sl' ? 'bg-[#54AABA] text-white hover:bg-[#4899A8]' : p.feat ? 'border-[1.5px] border-white/40 text-white hover:bg-white/10' : 'border-[1.5px] border-[#1C3162] text-[#1C3162] hover:bg-[#1C3162] hover:text-white'}`}>
                    Get Exact Quote →
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
          <p className="text-center text-sm text-[#5C6B80] leading-relaxed">
            All rates confirmed during your free assessment. <strong className="text-[#1C3162]">No contracts. No cancellation fees. No surprises.</strong><br />Ask us about Ontario Health at Home funding eligibility during your assessment.
          </p>
        </div>
      </section>

      <section className="py-14 px-[5%] bg-[#EBF0F8]">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="font-serif text-2xl font-semibold text-[#1C3162] mb-3">OHIP & Funding Options</h2>
          <p className="text-[#5C6B80] mb-5 font-light">OHIP does not cover private home care directly. However, Ontario Health at Home may provide some publicly funded support. Many families also use private health insurance, veterans' benefits, or Employee Assistance Programs. We help you navigate all funding options during your free assessment.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-[#E0262E] text-white rounded font-bold hover:bg-[#C01E25] transition-all no-underline">Book Free Assessment →</Link>
        </div>
      </section>
    </>
  )
}
