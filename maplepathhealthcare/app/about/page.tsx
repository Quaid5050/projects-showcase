import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'
import Link from 'next/link'

const langs = ['English','French','Persian (Farsi)','Hindi','Punjabi']
const values = [
  { title: 'Compassionate Care', desc: 'Every interaction begins with listening and understanding the person, not the condition.', icon: <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/> },
  { title: 'Dignity & Respect', desc: 'Every client is treated with the dignity and respect they deserve, regardless of their condition.', icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/> },
  { title: 'Reliable Expertise', desc: 'Over 5 years of experience in care coordination, client service, and community support.', icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/> },
  { title: 'Community Connection', desc: 'Serving diverse communities in Halton Region and the Greater Toronto Area.', icon: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/> },
]

export default function AboutPage() {
  return (
    <>
      <div className="bg-[#1C3162] py-16 px-[5%]">
        <div className="max-w-[1180px] mx-auto text-center">
          <AnimateIn>
            <h1 className="font-serif text-[clamp(32px,4vw,52px)] font-semibold text-white mb-3">Our Team</h1>
            <p className="text-white/70 text-lg font-light max-w-xl mx-auto">The people behind Maplepath Healthcare — dedicated to care that truly connects.</p>
          </AnimateIn>
        </div>
      </div>

      <section className="py-[88px] px-[5%] bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-start">
            <AnimateIn>
              <div className="relative">
                <div className="w-full aspect-[4/5] bg-[#D8E3F0] rounded-2xl overflow-hidden border-[3px] border-[#D4E7F7]">
                  <Image src="/jasmine.jpg" alt="Jasmine — Director of Maplepath Healthcare" fill className="object-cover" style={{ objectPosition: 'center top' }} />
                </div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#1C3162] text-white px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap shadow-xl flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#89C477"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                  Director, MaplePath Healthcare
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={150}>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#54AABA] mb-2">Director & Care Leader</div>
                <h2 className="font-serif text-[42px] font-semibold text-[#1C3162] mb-1">Jasmine</h2>
                <div className="text-sm text-[#5C6B80] mb-6 font-medium">Director | MaplePath Healthcare</div>

                <blockquote className="font-serif text-xl italic leading-relaxed text-[#2A3A5C] border-l-[3px] border-[#D4E7F7] pl-6 mb-7">
                  "At MaplePath Healthcare, we believe everyone deserves compassionate care, respect, and the opportunity to live safely and comfortably in the place they call home."
                </blockquote>

                <div className="space-y-4 text-[15px] text-[#2A3A5C] leading-relaxed font-light mb-7">
                  <p>Jasmine is the Director of MaplePath Healthcare and brings over <strong className="text-[#1C3162] font-semibold">5 years of experience</strong> in client service, care coordination, and community support. She is passionate about helping individuals and families access compassionate, reliable, and personalized care that allows them to remain comfortable and independent in their own homes.</p>
                  <p>As Director, Jasmine is committed to ensuring that every client receives the highest standard of care, dignity, and respect. She works closely with clients, families, and caregivers to create <strong className="text-[#1C3162] font-semibold">customized care solutions</strong> that address each individual's unique needs while providing peace of mind to loved ones.</p>
                  <p>Known for her compassionate approach and strong leadership, Jasmine believes that exceptional care begins with listening, understanding, and building meaningful relationships. Her dedication to quality service and client satisfaction is at the heart of MaplePath Healthcare's mission to deliver care that truly connects.</p>
                </div>

                <div className="mb-7">
                  <h3 className="font-semibold text-[#1C3162] mb-3 text-sm uppercase tracking-wide">Languages Spoken</h3>
                  <div className="flex flex-wrap gap-2">
                    {langs.map(l => (
                      <span key={l} className="bg-[#EBF4FC] text-[#1C3162] text-sm font-medium px-3 py-1 rounded-full border border-[#D4E7F7]">{l}</span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[rgba(42,67,115,.1)] pt-6 flex items-center gap-5">
                  <div className="font-serif text-[32px] italic text-[#1C3162]">Jasmine</div>
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

      {/* Mission & Values */}
      <section className="py-[80px] px-[5%] bg-[#EBF0F8]">
        <div className="max-w-[1180px] mx-auto">
          <AnimateIn className="text-center mb-12">
            <h2 className="font-serif text-3xl font-semibold text-[#1C3162] mb-3">Our Mission & Values</h2>
            <div className="w-10 h-[3px] bg-[#5DA6DD] rounded mx-auto mb-4" />
            <p className="text-[#5C6B80] max-w-xl mx-auto font-light">Maplepath Healthcare was founded in January 2026 with a single belief: that every senior in Halton deserves to be cared for by someone who actually knows them.</p>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <div className="bg-white rounded-xl border-[1.5px] border-[rgba(42,67,115,.1)] p-6 flex gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#EBF4FC] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#5DA6DD">{v.icon}</svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C3162] mb-1">{v.title}</h3>
                    <p className="text-sm text-[#5C6B80] leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-[5%] bg-white text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="font-serif text-2xl font-semibold text-[#1C3162] mb-3">Speak with Jasmine's team today</h2>
          <p className="text-[#5C6B80] mb-6 font-light">Every family has direct access to our leadership. Call or message us — we're here 24/7.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:18776275313" className="inline-flex items-center gap-2 px-7 py-3 bg-[#E0262E] text-white rounded font-bold hover:bg-[#C01E25] transition-all no-underline">Call 1-877-MAPLE13</a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 border-[1.5px] border-[#1C3162] text-[#1C3162] rounded font-bold hover:bg-[#1C3162] hover:text-white transition-all no-underline">Free Assessment →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
