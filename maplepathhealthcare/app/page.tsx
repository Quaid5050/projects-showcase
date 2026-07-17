import Image from 'next/image'
import Link from 'next/link'
import AssessmentForm from '@/components/AssessmentForm'
import AnimateIn from '@/components/AnimateIn'

const trustBar = [
  { icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>, title: 'PHIPA Compliant', sub: 'Health privacy protected' },
  { icon: <path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z"/>, title: 'WSIB Covered', sub: 'All workers insured' },
  { icon: <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm.5 15H11v-6h1.5V17zm0-8H11V7h1.5v2z"/>, title: 'Care in 24 Hours', sub: 'Guaranteed start' },
  { icon: <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>, title: 'Real 24/7 Answering', sub: 'A person, not voicemail' },
  { icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>, title: 'Locally Operated', sub: 'Halton — not a franchise' },
  { icon: <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 13l-4-4 1.4-1.4L12 13.2l6.6-6.6L20 8l-8 8z"/>, title: 'Verified PSWs', sub: 'Background-checked' },
]

const services = [
  { title: 'Dementia & Alzheimer\'s Care', desc: 'Specialized memory care in the familiarity of home — reducing anxiety, preserving routine.', featured: true, icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/> },
  { title: 'PSW & Personal Support', desc: 'Certified PSWs providing dignified assistance with bathing, dressing, grooming, and mobility.', icon: <path d="M12 12c2.7 0 5-2.3 5-5S14.7 2 12 2 7 4.3 7 7s2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"/> },
  { title: 'Palliative & End-of-Life Care', desc: 'Compassionate support focused on comfort, dignity, and peace at home surrounded by family.', icon: <path d="M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z"/> },
  { title: 'Overnight & 24-Hour Care', desc: 'Continuous overnight support eliminating the fear of a fall or health episode going unnoticed.', icon: <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm.5 15H11v-6h1.5V17zm0-8H11V7h1.5v2z"/> },
  { title: 'Post-Hospital Recovery', desc: 'Bridging the gap between discharge and independence — preventing re-admission.', icon: <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-4 8h-2v2h-2v-2H9V9h2V7h2v2h2v2z"/> },
  { title: 'Companionship & Social Support', desc: 'Meaningful visits that combat isolation — keeping your loved one mentally and emotionally alive.', icon: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/> },
]

const steps = [
  { n: '1', tag: 'Step 1', title: 'You Call or Submit', desc: 'Phone 1-877-MAPLE13 any time or complete our online form. A real coordinator responds within 2 hours.', color: '#1C3162', textColor: 'white' },
  { n: '2', tag: 'Step 2', title: 'Free Home Assessment', desc: 'We visit at no cost to understand needs, routines, and preferences — then design a personalised care plan.', color: '#2A4373', textColor: 'white' },
  { n: '3', tag: 'Step 3', title: 'Thoughtful Caregiver Match', desc: 'We match your loved one with a compatible PSW based on personality, skills, language, and care needs.', color: '#54AABA', textColor: 'white' },
  { n: '4', tag: 'Step 4', title: 'Care Begins in 24 Hours', desc: 'Your dedicated caregiver arrives and your family gets back the peace of mind you\'ve been searching for.', color: '#E0262E', textColor: 'white' },
]

const testimonials = [
  { text: 'Mum was discharged from Oakville Trafalgar on a Thursday afternoon. By Friday morning at 7am, her caregiver was already there — she knew Mum\'s name before she walked in the door because the care coordinator had briefed her the night before. That level of preparation from a brand new agency genuinely shocked me.', name: 'Sandra R.', loc: 'Oakville, ON', svc: 'Dementia & Post-Hospital Care', feat: true },
  { text: 'Dad has late-stage Parkinson\'s and the fear of a fall was keeping us all awake at night. The PSW they matched him with never rushed him once — she let him set the pace for everything. He started telling us he enjoyed the visits. We hadn\'t heard him say he enjoyed anything in two years.', name: 'David M.', loc: 'Burlington, ON', svc: 'Parkinson\'s & Overnight Care' },
  { text: 'I called three agencies before Maplepath. The first two put me on hold for 20 minutes then sent a form. Maplepath answered on the second ring at 9pm on a Tuesday. The woman I spoke to asked me about my mother as a person — what she liked, what upset her, what made her laugh. That\'s when I knew this was different.', name: 'Priya K.', loc: 'Milton, ON', svc: 'Dementia Care & PSW Support' },
]

const guarantees = [
  { title: '24-Hour Care Start', desc: 'Care begins within 24 hours of your confirmed assessment — or your first day is free.', icon: <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm.5 15H11v-6h1.5V17zm0-8H11V7h1.5v2z"/> },
  { title: 'Same Caregiver Always', desc: 'Your loved one keeps the same primary PSW. Changes are rare and always communicated in advance.', icon: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/> },
  { title: 'We Call You First', desc: 'If anything concerns our caregiver, you hear from us proactively — before you have to ask.', icon: <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/> },
  { title: 'No Surprise Invoices', desc: 'The rate quoted during your assessment is the rate you pay. No hidden fees, ever.', icon: <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/> },
  { title: 'Cancel Anytime', desc: 'No contracts. No penalties. Stop care at any time without hidden exit conditions.', icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/> },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#1C3162] min-h-[620px] grid lg:grid-cols-[1.05fr_.95fr] items-stretch overflow-hidden">
        <div className="px-[7%] py-[72px] flex flex-col justify-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white/75 mb-6 w-fit">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="#89C477"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
            Locally Operated · Halton Region, Ontario
          </div>
          <h1 className="font-serif text-[clamp(32px,3.8vw,54px)] font-semibold text-white leading-[1.17] mb-3 tracking-tight">
            Your mum stays home,<br /><span className="text-[#A8D5C8] italic">safe, loved, and herself.</span>
          </h1>
          <p className="font-serif text-[clamp(18px,2.2vw,28px)] font-light italic text-white/65 mb-5">While you stop worrying — and start visiting again.</p>
          <p className="text-[16.5px] text-white/72 leading-relaxed mb-6 font-light max-w-[490px]">
            Maplepath Healthcare is Halton's <strong className="text-white/92 font-semibold">locally operated PSW and home care agency</strong> — providing certified, PHIPA-compliant, deeply compassionate care across Oakville, Burlington, Milton, Georgetown & Halton Hills.
          </p>
          <div className="flex items-center gap-3 mb-6 px-4 py-2.5 bg-white/8 rounded border border-white/15 w-fit">
            <span className="live-dot" />
            <span className="text-sm text-white/75"><strong className="text-white">Real person answers 24/7</strong> — call now, someone picks up immediately</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a href="tel:18776275313" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#E0262E] text-white rounded font-bold text-base hover:bg-[#C01E25] hover:-translate-y-0.5 transition-all no-underline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
              Call 1-877-MAPLE13 — Free
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-4 border-[1.5px] border-white/30 text-white rounded font-semibold text-[15px] hover:border-white/70 hover:bg-white/7 transition-all no-underline">
              Get Free Assessment →
            </Link>
          </div>
          <div className="flex flex-wrap gap-4">
            {['Care starts within 24 hours','No long-term contracts','PHIPA compliant & WSIB covered','Background-verified PSWs','Free no-obligation assessment'].map(c => (
              <span key={c} className="flex items-center gap-2 text-[12.5px] text-white/62">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#89C477"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Assessment form panel */}
        <div className="hidden lg:flex items-center justify-center bg-white px-11 py-12" style={{ boxShadow: '-20px 0 60px rgba(0,0,0,.14)' }}>
          <div className="w-full max-w-[410px]">
            <span className="inline-block bg-[#EBF4FC] text-[#1C3162] text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4 border border-[#D4E7F7]">Free · No Obligation · 2-Hour Response</span>
            <h2 className="font-serif text-2xl font-semibold text-[#1C3162] mb-1">Request Your Free Care Assessment</h2>
            <p className="text-sm text-[#5C6B80] mb-5">Tell us about your situation and a care coordinator calls you back within 2 hours.</p>
            <AssessmentForm />
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 right-1/3 w-64 h-64 rounded-full bg-[#5DA6DD]" />
          <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-[#54AABA]" />
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-[#2A4373] px-[5%]">
        <div className="max-w-[1200px] mx-auto flex justify-center items-stretch flex-wrap">
          {trustBar.map((t, i) => (
            <div key={i} className={`flex items-center gap-2.5 px-6 py-4 ${i < trustBar.length - 1 ? 'border-r border-white/20' : ''}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,.85)" className="flex-shrink-0">{t.icon}</svg>
              <div><strong className="block text-[13px] font-bold text-white">{t.title}</strong><span className="text-[11px] text-white/72">{t.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <section className="py-[88px] px-[5%] bg-white">
        <div className="max-w-[1180px] mx-auto">
          <AnimateIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#5DA6DD] mb-2">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="#54AABA"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 13l-4-4 1.4-1.4L12 13.2l6.6-6.6L20 8l-8 8z"/></svg>
              Our Services
            </div>
            <h2 className="font-serif text-[clamp(26px,3vw,42px)] font-semibold text-[#1C3162] mb-3">Comprehensive Care, Built Around Your Loved One</h2>
            <div className="w-12 h-[3px] bg-[#5DA6DD] rounded mx-auto mb-5" />
            <p className="text-base text-[#2A3A5C] max-w-[640px] mx-auto leading-relaxed font-light">From a few hours per week to full-time 24-hour support — every plan is personalised, flexible, and requires no long-term commitment.</p>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <article className={`service-card relative rounded-xl border-[1.5px] p-7 transition-all duration-300 hover:-translate-y-1 overflow-hidden group ${s.featured ? 'bg-[#1C3162] border-transparent' : 'bg-white border-[rgba(42,67,115,.1)] hover:shadow-lg hover:border-[rgba(93,166,221,.4)]'}`}>
                  <div className="sc-bar absolute left-0 top-0 bottom-0 w-[3px] bg-[#5DA6DD]" />
                  <div className={`w-12 h-12 rounded-[11px] flex items-center justify-center mb-4 ${s.featured ? 'bg-white/10' : 'bg-[#EBF4FC]'}`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill={s.featured ? '#A8D5C8' : '#5DA6DD'}>{s.icon}</svg>
                  </div>
                  <h3 className={`font-serif text-lg font-semibold mb-2 leading-snug ${s.featured ? 'text-white' : 'text-[#1C3162]'}`}>{s.title}</h3>
                  <p className={`text-sm leading-relaxed ${s.featured ? 'text-white/68' : 'text-[#5C6B80]'}`}>{s.desc}</p>
                  <Link href="/services" className={`inline-flex items-center gap-1 text-sm font-bold mt-4 no-underline transition-all group-hover:gap-2 ${s.featured ? 'text-[#A8D5C8]' : 'text-[#5DA6DD]'}`}>
                    Learn more →
                  </Link>
                </article>
              </AnimateIn>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 border-[1.5px] border-[#1C3162] text-[#1C3162] rounded font-bold hover:bg-[#1C3162] hover:text-white transition-all no-underline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-[88px] px-[5%] bg-[#EBF0F8]">
        <div className="max-w-[1180px] mx-auto">
          <AnimateIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#5DA6DD] mb-2">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="#54AABA"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/></svg>
              Getting Started
            </div>
            <h2 className="font-serif text-[clamp(26px,3vw,42px)] font-semibold text-[#1C3162] mb-3">From your first call to care in the home — 4 simple steps</h2>
            <div className="w-12 h-[3px] bg-[#5DA6DD] rounded mx-auto mb-5" />
            <p className="text-base text-[#2A3A5C] max-w-[640px] mx-auto font-light">Fast, gentle, and completely guided by you and your family from start to finish.</p>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-[#D4E7F7] z-0" />
            {steps.map((s, i) => (
              <AnimateIn key={i} delay={i * 100} className="text-center relative z-10">
                <span className="inline-block bg-[#E6F4F7] text-[#54AABA] text-[11px] font-bold px-3 py-1 rounded-full mb-4">{s.tag}</span>
                <div className="w-16 h-16 rounded-full border-[3px] flex items-center justify-center mx-auto mb-5 font-serif text-2xl font-semibold shadow-md" style={{ background: s.color, borderColor: s.color, color: s.textColor }}>
                  {s.n}
                </div>
                <h3 className="font-serif text-[17px] font-semibold text-[#1C3162] mb-2">{s.title}</h3>
                <p className="text-sm text-[#5C6B80] leading-relaxed">{s.desc}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT JASMINE */}
      <section className="py-[88px] px-[5%] bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid lg:grid-cols-[360px_1fr] gap-16 items-start">
            <AnimateIn>
              <div className="relative">
                <div className="w-full aspect-[4/5] bg-[#D8E3F0] rounded-2xl overflow-hidden border-[3px] border-[#D4E7F7] max-w-[380px]">
                  <Image src="/jasmine.jpg" alt="Jasmine — Director of Maplepath Healthcare" fill className="object-cover" style={{ objectPosition: 'center top' }} />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#1C3162] text-white px-5 py-3 rounded-full text-[12.5px] font-bold whitespace-nowrap shadow-lg flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#89C477"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                  Based in Halton Hills, Ontario
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={150}>
              <div className="pt-1">
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#54AABA] mb-2">Meet Our Director</div>
                <h2 className="font-serif text-[36px] font-semibold text-[#1C3162] leading-tight mb-1">Jasmine</h2>
                <div className="text-sm text-[#5C6B80] mb-6 font-medium">Director, Maplepath Healthcare</div>
                <blockquote className="font-serif text-[19px] italic leading-relaxed text-[#2A3A5C] border-l-[3px] border-[#D4E7F7] pl-5 mb-6">
                  "At MaplePath Healthcare, we believe everyone deserves compassionate care, respect, and the opportunity to live safely and comfortably in the place they call home."
                </blockquote>
                <div className="space-y-4 text-[15px] text-[#2A3A5C] leading-relaxed font-light">
                  <p>Jasmine is the Director of MaplePath Healthcare and brings over <strong className="text-[#1C3162] font-semibold">5 years of experience</strong> in client service, care coordination, and community support. She is passionate about helping individuals and families access compassionate, reliable, and personalized care.</p>
                  <p>Known for her compassionate approach and strong leadership, Jasmine believes that exceptional care begins with listening, understanding, and building meaningful relationships. Her dedication to quality service and client satisfaction is at the heart of MaplePath Healthcare's mission.</p>
                  <p>Jasmine is <strong className="text-[#1C3162] font-semibold">multilingual</strong> — communicating with clients and families in English, French, Persian (Farsi), Hindi, and Punjabi, helping MaplePath Healthcare serve the diverse communities throughout Halton Region and the GTA.</p>
                </div>
                <div className="flex items-center gap-4 mt-7 pt-6 border-t border-[rgba(42,67,115,.1)]">
                  <div className="font-serif text-[28px] italic text-[#1C3162]">Jasmine</div>
                  <div>
                    <strong className="block text-sm font-bold text-[#1C3162]">Jasmine, Director</strong>
                    <span className="text-xs text-[#5C6B80]">Maplepath Healthcare · Halton Hills, ON</span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[88px] px-[5%] bg-[#EBF0F8]">
        <div className="max-w-[1180px] mx-auto">
          <AnimateIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#5DA6DD] mb-2">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="#54AABA"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
              Family Stories
            </div>
            <h2 className="font-serif text-[clamp(26px,3vw,42px)] font-semibold text-[#1C3162] mb-3">What Halton Families Are Saying</h2>
            <div className="w-12 h-[3px] bg-[#5DA6DD] rounded mx-auto mb-5" />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <article className={`relative rounded-2xl border-[1.5px] p-7 hover:shadow-xl transition-shadow ${t.feat ? 'bg-[#1C3162] border-transparent' : 'bg-white border-[rgba(42,67,115,.1)]'}`}>
                  <div className={`absolute top-4 right-5 font-serif text-6xl leading-none pointer-events-none ${t.feat ? 'text-white/6' : 'text-[#D8E3F0]'}`}>"</div>
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, j) => <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#54AABA"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>)}
                  </div>
                  <p className={`text-sm leading-relaxed italic mb-5 ${t.feat ? 'text-white/82 text-[15px]' : 'text-[#2A3A5C]'}`}>"{t.text}"</p>
                  <div className={`h-px mb-4 ${t.feat ? 'bg-white/12' : 'bg-[rgba(42,67,115,.1)]'}`} />
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-base font-semibold flex-shrink-0 ${t.feat ? 'bg-white/14 text-[#A8D5C8]' : 'bg-[#1C3162] text-white'}`}>
                      {t.name.split(' ').map(w => w[0]).join('')}
                    </div>
                    <div>
                      <div className={`text-sm font-bold ${t.feat ? 'text-[#A8D5C8]' : 'text-[#1C3162]'}`}>{t.name}</div>
                      <div className={`text-xs ${t.feat ? 'text-white/45' : 'text-[#5C6B80]'}`}>{t.loc}</div>
                      <div className={`text-[11px] font-bold flex items-center gap-1 mt-0.5 ${t.feat ? 'text-[#A8D5C8]' : 'text-[#5DA6DD]'}`}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        {t.svc}
                      </div>
                    </div>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews" className="inline-flex items-center gap-2 px-6 py-3 border-[1.5px] border-[#1C3162] text-[#1C3162] rounded font-bold hover:bg-[#1C3162] hover:text-white transition-all no-underline">
              Read More Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="py-[88px] px-[5%] bg-white">
        <div className="max-w-[1180px] mx-auto">
          <AnimateIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#54AABA] mb-2">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="#54AABA"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
              The Maplepath Promise
            </div>
            <h2 className="font-serif text-[clamp(26px,3vw,42px)] font-semibold text-[#1C3162] mb-3">Five guarantees we put in writing</h2>
            <div className="w-12 h-[3px] bg-[#54AABA] rounded mx-auto" />
          </AnimateIn>
          <div className="bg-[#E6F4F7] border-[1.5px] border-[rgba(84,170,186,.3)] rounded-2xl p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[rgba(84,170,186,.2)]">
              {guarantees.map((g, i) => (
                <AnimateIn key={i} delay={i * 80} className="text-center px-4 py-6 lg:py-0">
                  <div className="w-12 h-12 bg-[#1C3162] rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">{g.icon}</svg>
                  </div>
                  <h4 className="font-serif text-[16px] font-semibold text-[#1C3162] mb-2">{g.title}</h4>
                  <p className="text-xs text-[#5C6B80] leading-relaxed">{g.desc}</p>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-[88px] px-[5%] bg-[#EBF0F8]">
        <div className="max-w-[1180px] mx-auto">
          <div className="relative bg-gradient-to-br from-[#1C3162] via-[#1E4A38] to-[#1A2F45] rounded-2xl px-14 py-16 text-center overflow-hidden">
            <div className="absolute top-[-80px] right-[-80px] w-64 h-64 rounded-full bg-white/3" />
            <div className="absolute bottom-[-90px] left-[-40px] w-80 h-80 rounded-full bg-[#5DA6DD]/10" />
            <div className="relative z-10">
              <h2 className="font-serif text-[clamp(26px,3.5vw,44px)] font-semibold text-white mb-3 leading-snug">Your loved one doesn't have to wait another day.</h2>
              <p className="text-[17px] text-white/68 mb-8 font-light">Call us right now — a real person answers 24 hours a day. Or request a free assessment and we'll call you within 2 hours.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:18776275313" className="inline-flex items-center gap-2 px-8 py-4 bg-[#54AABA] text-white rounded font-bold text-base hover:bg-[#4899A8] hover:-translate-y-0.5 transition-all no-underline">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                  Call 1-877-MAPLE13 — Free
                </a>
                <a href="https://wa.me/18776275313" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-4 border-[1.5px] border-white/30 text-white rounded font-semibold text-[15px] hover:border-white/70 hover:bg-white/7 transition-all no-underline">
                  WhatsApp Us
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-4 border-[1.5px] border-white/30 text-white rounded font-semibold text-[15px] hover:border-white/70 hover:bg-white/7 transition-all no-underline">
                  Free Assessment →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
