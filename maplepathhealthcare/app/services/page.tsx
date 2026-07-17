import AnimateIn from '@/components/AnimateIn'
import Link from 'next/link'

const services = [
  { title: 'Dementia & Alzheimer\'s Care', desc: 'Specialized memory care in the familiarity of home — reducing anxiety, preserving routine, and keeping your loved one safe and engaged as the condition evolves.', img: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80', feat: true, icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/> },
  { title: 'PSW & Personal Support', desc: 'Certified PSWs providing dignified assistance with bathing, dressing, grooming, mobility, and toileting — delivered with warmth, patience, and deep respect.', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80', icon: <path d="M12 12c2.7 0 5-2.3 5-5S14.7 2 12 2 7 4.3 7 7s2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"/> },
  { title: 'Palliative & End-of-Life Care', desc: 'Compassionate support for individuals in palliative stages — focused on comfort, dignity, and peace at home surrounded by family.', img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80', icon: <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/> },
  { title: 'Overnight & 24-Hour Care', desc: 'Continuous overnight support giving families peace of mind — eliminating the fear of a fall or health episode going unnoticed through the night.', img: 'https://images.unsplash.com/photo-1685657814797-83706c4e5279?q=80', icon: <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm.5 15H11v-6h1.5V17zm0-8H11V7h1.5v2z"/> },
  { title: 'Post-Hospital Recovery', desc: 'Bridging the gap between discharge and independence — preventing re-admission and supporting a safe, smooth recovery at home.', img: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80', icon: <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-4 8h-2v2h-2v-2H9V9h2V7h2v2h2v2z"/> },
  { title: 'Companionship & Social Support', desc: 'Meaningful visits that combat isolation — conversation, light activities, and genuine connection that keep your loved one mentally and emotionally alive.', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80', icon: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/> },
  { title: 'Meal Preparation & Nutrition', desc: 'Nutritious home-cooked meals tailored to dietary needs — ensuring mealtimes remain a moment of comfort and that your loved one is properly nourished daily.', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', icon: <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03z"/> },
  { title: 'Parkinson\'s & Neurological Care', desc: 'Skilled, patient support for individuals with Parkinson\'s or other neurological conditions — focused on safe mobility, fall prevention, and daily quality of life.', img: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&q=80', icon: <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/> },
  { title: 'Medication Reminders', desc: 'Ensuring the right medications at the right times — reducing dangerous missed doses and keeping family and healthcare providers properly informed.', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', icon: <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/> },
]

export default function ServicesPage() {
  return (
    <>
      <div className="bg-[#1C3162] py-16 px-[5%]">
        <div className="max-w-[1180px] mx-auto text-center">
          <AnimateIn>
            <h1 className="font-serif text-[clamp(32px,4vw,52px)] font-semibold text-white mb-3">Our Home Care Services</h1>
            <p className="text-white/70 text-lg font-light max-w-2xl mx-auto">From a few hours per week to full-time 24-hour support — every plan is personalised, flexible, and requires no long-term commitment.</p>
          </AnimateIn>
        </div>
      </div>

      <section className="py-[80px] px-[5%] bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimateIn key={i} delay={i * 60}>
                <article className={`service-card relative rounded-xl overflow-hidden border-[1.5px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group ${s.feat ? 'bg-[#1C3162] border-transparent' : 'bg-white border-[rgba(42,67,115,.1)]'}`}>
                  <div className="sc-bar absolute left-0 top-0 bottom-0 w-[3px] bg-[#5DA6DD] z-10" />
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className={`absolute inset-0 ${s.feat ? 'bg-[#1C3162]/60' : 'bg-[#1C3162]/30'}`} />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">{s.icon}</svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`font-serif text-lg font-semibold mb-2 ${s.feat ? 'text-white' : 'text-[#1C3162]'}`}>{s.title}</h3>
                    <p className={`text-sm leading-relaxed mb-4 ${s.feat ? 'text-white/68' : 'text-[#5C6B80]'}`}>{s.desc}</p>
                    <Link href="/contact" className={`inline-flex items-center gap-1 text-sm font-bold no-underline transition-all group-hover:gap-2 ${s.feat ? 'text-[#A8D5C8]' : 'text-[#5DA6DD]'}`}>
                      Request this service →
                    </Link>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-[5%] bg-[#EBF0F8]">
        <div className="max-w-[1180px] mx-auto text-center">
          <h2 className="font-serif text-3xl font-semibold text-[#1C3162] mb-4">Not sure what care you need?</h2>
          <p className="text-[#5C6B80] mb-6 max-w-lg mx-auto">Call us — we guide every family through the process at no cost. A real care coordinator will help you identify the right level of support.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:18776275313" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E0262E] text-white rounded font-bold hover:bg-[#C01E25] transition-all no-underline">Call 1-877-MAPLE13</a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border-[1.5px] border-[#1C3162] text-[#1C3162] rounded font-bold hover:bg-[#1C3162] hover:text-white transition-all no-underline">Free Assessment →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
