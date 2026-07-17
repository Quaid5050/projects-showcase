'use client'
import { useState } from 'react'
import AnimateIn from '@/components/AnimateIn'
import Link from 'next/link'

const faqs = [
  { q: 'How quickly can care actually start?', a: 'We guarantee care begins within 24 hours of a confirmed assessment. In urgent situations — hospital discharge, a recent fall, sudden deterioration — we do everything possible to arrange same-day care. Our phones are answered 24/7 by a real person. Call now and we can begin the process tonight.' },
  { q: 'Are your caregivers WSIB-covered?', a: 'Yes. All Maplepath PSWs are fully enrolled in WSIB from their first day. We also carry comprehensive organizational liability insurance. You bear zero financial exposure if a caregiver is injured in your home. WSIB clearance certificates are available on request.' },
  { q: 'How is my health information protected (PHIPA)?', a: "Maplepath operates in full compliance with PHIPA — Ontario's Personal Health Information Protection Act. All personal health information is used solely to deliver care, stored securely, and never shared with any third party without your explicit written consent. Our staff are trained on PHIPA obligations annually." },
  { q: 'Is there a minimum commitment or contract?', a: "No long-term contracts. Minimum is a 3-hour visit. You can start, pause, or stop care at any time with reasonable notice. Schedules adjust as your loved one's needs change. We believe care should flex around your family — not the other way around." },
  { q: 'Will we get the same caregiver every visit?', a: "Yes — consistency is central to our model. We assign a dedicated primary caregiver and maintain that relationship as the standard. In the rare event of a change due to illness or scheduling, we notify you immediately, introduce the backup in advance where possible, and ensure full briefing continuity so nothing is lost." },
  { q: 'Is home care covered by OHIP?', a: "OHIP does not cover private home care directly. However, Ontario Health at Home (formerly CCAC/LHIN) may provide some publicly funded support based on an assessment. Many families also use private health insurance, veterans' benefits, or Employee Assistance Programs. We help you navigate all funding options during your free assessment." },
  { q: "What's the difference between a PSW and a nurse?", a: "A PSW (Personal Support Worker) assists with Activities of Daily Living — bathing, dressing, grooming, meal prep, medication reminders, mobility, and companionship. PSWs do not perform medical procedures such as wound care, injections, or clinical assessments. For clients requiring nursing alongside PSW support, we coordinate with visiting nurses through Ontario Health at Home." },
  { q: 'Can I meet the caregiver before they start?', a: "Absolutely — and we strongly encourage it. Part of our standard onboarding is a meet-and-greet between the assigned caregiver and your loved one before the first paid visit. If the match isn't right, we'll find someone better. No pressure, no awkwardness — we want everyone to feel comfortable from day one." },
  { q: 'What areas do you serve?', a: 'We serve all of Halton Region — Oakville, Burlington, Milton, Georgetown, Halton Hills (our home base), Acton, Waterdown, and surrounding rural Halton communities. Not sure if you\'re in our area? Call us — we\'ll find a way.' },
  { q: 'How do you match a caregiver to my loved one?', a: "We don't send whoever is available. We carefully match your loved one with a caregiver based on personality, language preference, interests, specific care needs, and compatibility. This thoughtful matching is one of the most important things we do — getting it right from the start means your loved one actually looks forward to their caregiver's visits." },
]

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <>
      <div className="bg-[#1C3162] py-16 px-[5%]">
        <div className="max-w-[1180px] mx-auto text-center">
          <AnimateIn>
            <h1 className="font-serif text-[clamp(32px,4vw,52px)] font-semibold text-white mb-3">Your Questions, Answered Honestly</h1>
            <p className="text-white/70 text-lg font-light max-w-xl mx-auto">We believe families deserve complete transparency. These are the questions we hear most often.</p>
          </AnimateIn>
        </div>
      </div>

      <section className="py-[80px] px-[5%] bg-white">
        <div className="max-w-[800px] mx-auto">
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <AnimateIn key={i} delay={i * 40}>
                <div className={`bg-white border-[1.5px] rounded-xl overflow-hidden transition-all ${open === i ? 'border-[#5DA6DD] shadow-md' : 'border-[rgba(42,67,115,.1)]'}`}>
                  <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center px-6 py-5 text-left gap-4" aria-expanded={open === i}>
                    <h3 className="text-[15px] font-semibold text-[#1C3162] leading-snug">{f.q}</h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${open === i ? 'bg-[#1C3162]' : 'bg-[#EBF4FC]'}`}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill={open === i ? 'white' : '#5DA6DD'} style={{ transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}>
                        <path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                      </svg>
                    </div>
                  </button>
                  {open === i && (
                    <div className="px-6 pb-5 border-t border-[rgba(42,67,115,.08)]">
                      <p className="text-[14px] text-[#5C6B80] leading-relaxed pt-4">{f.a}</p>
                    </div>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-[#EBF0F8] rounded-2xl">
            <h3 className="font-serif text-xl font-semibold text-[#1C3162] mb-2">Still have questions?</h3>
            <p className="text-[#5C6B80] mb-5 text-sm">Call us any time — a real person answers 24 hours a day and can answer any question you have about care for your loved one.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:18776275313" className="inline-flex items-center gap-2 px-6 py-3 bg-[#E0262E] text-white rounded font-bold hover:bg-[#C01E25] transition-all no-underline text-sm">Call 1-877-MAPLE13</a>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-[1.5px] border-[#1C3162] text-[#1C3162] rounded font-bold hover:bg-[#1C3162] hover:text-white transition-all no-underline text-sm">Send a Message →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
