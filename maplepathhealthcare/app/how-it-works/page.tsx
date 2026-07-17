import AnimateIn from '@/components/AnimateIn'
import Link from 'next/link'
import Image from 'next/image'

const steps = [
  { n: '1', title: 'You Call or Submit a Request', desc: 'Phone 1-877-MAPLE13 any time — day or night — or complete our online form. A real coordinator responds within 2 hours.', img: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=500&q=80', color: '#1C3162' },
  { n: '2', title: 'Free Home Assessment', desc: 'We visit your loved one\'s home at no cost to understand their needs, routines, and preferences — then design a personalised care plan.', img: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=500&q=80', color: '#2A4373' },
  { n: '3', title: 'Thoughtful Caregiver Match', desc: 'We match your loved one with a compatible PSW based on personality, skills, language, and care needs — not just availability.', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80', color: '#54AABA' },
  { n: '4', title: 'Care Begins Within 24 Hours', desc: 'Your dedicated caregiver arrives. Your family gets back the peace of mind you\'ve been searching for. Your loved one is home and safe.', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80', color: '#E0262E' },
]

const standards = [
  { n: '1', title: 'Certification Verification', desc: 'Valid PSW certificate from an accredited Ontario program confirmed before interview.' },
  { n: '2', title: 'Criminal Background Check', desc: 'Full RCMP-level criminal record and vulnerable sector check — mandatory for every caregiver.' },
  { n: '3', title: 'Reference Verification', desc: 'Minimum three professional references contacted and verified, including at least one clinical supervisor.' },
  { n: '4', title: 'In-Person Interview & Skills Assessment', desc: 'Competency-based interview assessing clinical skill, empathy, and situational judgment.' },
  { n: '5', title: 'WHMIS & Safety Training', desc: 'All caregivers complete workplace safety and WHMIS training before their first assignment.' },
  { n: '6', title: 'WSIB Enrollment & Insurance', desc: 'Every caregiver enrolled in WSIB from day one. Full organizational liability insurance maintained.' },
  { n: '7', title: 'Ongoing Supervision & Training', desc: 'Regular check-ins, care plan reviews, and continuing education to ensure consistently excellent care.' },
]

export default function HowItWorksPage() {
  return (
    <>
      <div className="bg-[#1C3162] py-16 px-[5%]">
        <div className="max-w-[1180px] mx-auto text-center">
          <AnimateIn>
            <h1 className="font-serif text-[clamp(32px,4vw,52px)] font-semibold text-white mb-3">How It Works</h1>
            <p className="text-white/70 text-lg font-light max-w-xl mx-auto">From your first call to care in the home — fast, gentle, and completely guided by you and your family.</p>
          </AnimateIn>
        </div>
      </div>

      <section className="py-[80px] px-[5%] bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="space-y-16">
            {steps.map((s, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <div className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <span className="inline-block bg-[#EBF4FC] text-[#5DA6DD] text-[11px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Step {s.n} of 4</span>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center font-serif text-2xl font-semibold text-white shadow-lg flex-shrink-0" style={{ background: s.color }}>
                        {s.n}
                      </div>
                      <h2 className="font-serif text-2xl font-semibold text-[#1C3162]">{s.title}</h2>
                    </div>
                    <p className="text-[#5C6B80] leading-relaxed">{s.desc}</p>
                  </div>
                  <div className={`${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7-step vetting */}
      <section className="py-[80px] px-[5%] bg-[#EBF0F8]">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <AnimateIn>
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#5DA6DD] mb-2">Caregiver Standards</div>
              <h2 className="font-serif text-3xl font-semibold text-[#1C3162] mb-3">Every Maplepath PSW passes our 7-step vetting process</h2>
              <div className="w-10 h-[3px] bg-[#5DA6DD] rounded mb-5" />
              <p className="text-[#5C6B80] mb-7 font-light">We do not hire caregivers casually. Every person who enters your loved one's home has been rigorously evaluated — no exceptions, no shortcuts.</p>
              <div className="space-y-3">
                {standards.map((s, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-xl border border-[rgba(42,67,115,.1)] p-4 hover:border-[rgba(93,166,221,.35)] hover:shadow-sm transition-all">
                    <div className="w-8 h-8 rounded-full bg-[#1C3162] text-white font-serif text-sm font-semibold flex items-center justify-center flex-shrink-0">{s.n}</div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1C3162] mb-0.5">{s.title}</h4>
                      <p className="text-xs text-[#5C6B80] leading-snug">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={150}>
              <div className="bg-[#1C3162] rounded-2xl p-10 text-white sticky top-24">
                <p className="font-serif text-xl italic text-white/90 leading-relaxed mb-7">"We take the to-do list off your plate so you can go back to being family — not a caregiver yourself."</p>
                <div className="space-y-3">
                  {['Care starts within 24 hours of your confirmed assessment — or your first day is free.','Same caregiver, every time — we assign a primary PSW and notify you immediately of any change.','We call you first — if anything concerns our caregiver, you hear from us before you have to wonder.','No surprise invoices — the rate we quote is the rate you pay. Period.','Cancel anytime — no penalties, no lock-in, no hidden exit terms.'].map((g, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white/8 rounded border border-white/15">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#89C477" className="flex-shrink-0 mt-0.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      <p className="text-sm text-white/80">{g}</p>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="block text-center mt-6 py-3 bg-[#E0262E] text-white rounded font-bold hover:bg-[#C01E25] transition-all no-underline">Get Started — Free Assessment</Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
