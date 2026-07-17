import AssessmentForm from '@/components/AssessmentForm'
import AnimateIn from '@/components/AnimateIn'

const contacts = [
  { icon: <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>, label: 'Phone (Toll Free)', value: '1-877-MAPLE13', href: 'tel:18776275313' },
  { icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>, label: 'WhatsApp', value: 'Message us anytime', href: 'https://wa.me/18776275313', ext: true },
  { icon: <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>, label: 'Email', value: 'info@maplepathhealthcare.ca', href: 'mailto:info@maplepathhealthcare.ca' },
  { icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>, label: 'Office', value: '37 Main St. S, Halton Hills, ON L7G 3G2', href: 'https://maps.google.com/?q=37+Main+St+S+Halton+Hills', ext: true },
]

export default function ContactPage() {
  return (
    <>
      <div className="bg-[#1C3162] py-16 px-[5%]">
        <div className="max-w-[1180px] mx-auto text-center">
          <AnimateIn>
            <h1 className="font-serif text-[clamp(32px,4vw,52px)] font-semibold text-white mb-3">Get Your Free Assessment</h1>
            <p className="text-white/70 text-lg font-light max-w-xl mx-auto">A care coordinator will call you back within 2 hours. Real people, real answers — 24 hours a day.</p>
          </AnimateIn>
        </div>
      </div>

      <section className="py-[80px] px-[5%] bg-[#EBF0F8]">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">
            <div>
              <AnimateIn>
                <h2 className="font-serif text-2xl font-semibold text-[#1C3162] mb-6">Request a Free Care Assessment</h2>
                <div className="bg-white rounded-2xl border border-[rgba(42,67,115,.1)] p-8 shadow-sm">
                  <span className="inline-block bg-[#EBF4FC] text-[#1C3162] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-[#D4E7F7]">Free · No Obligation · 2-Hour Response</span>
                  <p className="text-sm text-[#5C6B80] mb-5">Fill in the form and a care coordinator calls you back within 2 hours — even evenings and weekends.</p>
                  <AssessmentForm />
                </div>
              </AnimateIn>
            </div>

            <div className="space-y-5">
              <AnimateIn delay={100}>
                <div className="bg-white rounded-2xl border border-[rgba(42,67,115,.1)] p-6 shadow-sm">
                  <h3 className="font-semibold text-[#1C3162] mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    {contacts.map((c, i) => (
                      <a key={i} href={c.href} target={c.ext ? '_blank' : undefined} rel={c.ext ? 'noopener' : undefined} className="flex items-start gap-3 no-underline group">
                        <div className="w-10 h-10 bg-[#EBF4FC] rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="#5DA6DD">{c.icon}</svg>
                        </div>
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wide text-[#5C6B80]">{c.label}</div>
                          <div className="text-sm font-semibold text-[#1C3162] group-hover:text-[#5DA6DD] transition-colors">{c.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={150}>
                <div className="bg-[#1C3162] rounded-2xl p-6 text-white">
                  <h3 className="font-serif text-lg font-semibold mb-2">Available 24 Hours a Day</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">Our phones are answered by a real person around the clock — not an answering service, not voicemail. Because crises don't happen between 9 and 5.</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="live-dot" />
                    <span className="text-white/75">Real person available right now</span>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={200}>
                <div className="bg-[#EBF4FC] rounded-2xl border border-[#D4E7F7] p-6">
                  <div className="flex gap-3">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#5DA6DD" className="flex-shrink-0 mt-0.5"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
                    <div>
                      <h4 className="font-semibold text-[#1C3162] text-sm mb-1">PHIPA Protected</h4>
                      <p className="text-[12px] text-[#5C6B80] leading-snug">All personal health information is kept strictly confidential under Ontario's PHIPA. Never shared. Never sold.</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
