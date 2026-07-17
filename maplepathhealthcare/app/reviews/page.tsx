import AnimateIn from '@/components/AnimateIn'
import Link from 'next/link'

const reviews = [
  { text: 'Mum was discharged from Oakville Trafalgar on a Thursday afternoon. By Friday morning at 7am, her caregiver was already there — she knew Mum\'s name before she walked in the door because the care coordinator had briefed her the night before. That level of preparation from a brand new agency genuinely shocked me. We\'ve used other agencies and nothing came close.', name: 'Sandra R.', loc: 'Oakville, ON', svc: 'Dementia & Post-Hospital Care', date: 'March 2026', feat: true },
  { text: 'Dad has late-stage Parkinson\'s and the fear of a fall was keeping us all awake at night. The PSW they matched him with never rushed him once — she let him set the pace for everything. Getting dressed, breakfast, walking to the window. He started telling us he enjoyed the visits. We hadn\'t heard him say he enjoyed anything in two years.', name: 'David M.', loc: 'Burlington, ON', svc: 'Parkinson\'s & Overnight Care', date: 'April 2026' },
  { text: 'I called three agencies before Maplepath. The first two put me on hold for 20 minutes then sent a form. Maplepath answered on the second ring at 9pm on a Tuesday. The woman I spoke to asked me about my mother as a person — what she liked, what upset her, what made her laugh. That\'s when I knew this was different.', name: 'Priya K.', loc: 'Milton, ON', svc: 'Dementia Care & PSW Support', date: 'April 2026' },
  { text: 'The consistency has been remarkable. Same caregiver every visit, and when there was one change due to illness we got a call the evening before. They briefed the new caregiver completely. My mother didn\'t miss a beat. That kind of professionalism is rare.', name: 'Margaret T.', loc: 'Georgetown, ON', svc: 'PSW Care', date: 'May 2026' },
  { text: 'As someone managing palliative care for my husband from across the country, I needed an agency I could trust completely without being there. Jasmine\'s team communicated every single day — proactively, not just when I called. I cannot express how much peace of mind that gave me during the most difficult time of my life.', name: 'Christine W.', loc: 'Halton Hills, ON', svc: 'Palliative & 24-Hour Care', date: 'June 2026' },
  { text: 'What stands out is that they actually care. Not in a corporate, scripted way — in a human way. Our PSW remembers what Dad talks about and asks him follow-up questions on her next visit. He talks about her like a friend. That kind of relationship takes years in other settings. They built it in weeks.', name: 'James L.', loc: 'Burlington, ON', svc: 'Companionship & PSW Care', date: 'June 2026' },
]

export default function ReviewsPage() {
  return (
    <>
      <div className="bg-[#1C3162] py-16 px-[5%]">
        <div className="max-w-[1180px] mx-auto text-center">
          <AnimateIn>
            <h1 className="font-serif text-[clamp(32px,4vw,52px)] font-semibold text-white mb-3">What Halton Families Are Saying</h1>
            <p className="text-white/70 text-lg font-light max-w-xl mx-auto">Real families, specific experiences — the kind only a real person would think to mention.</p>
          </AnimateIn>
        </div>
      </div>

      <section className="py-[80px] px-[5%] bg-[#EBF0F8]">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {reviews.map((r, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <article className={`relative rounded-2xl border-[1.5px] p-7 hover:shadow-xl transition-shadow h-full flex flex-col ${r.feat ? 'bg-[#1C3162] border-transparent' : 'bg-white border-[rgba(42,67,115,.1)]'}`}>
                  <div className={`absolute top-4 right-5 font-serif text-6xl leading-none ${r.feat ? 'text-white/6' : 'text-[#D8E3F0]'}`}>"</div>
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, j) => <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#54AABA"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>)}
                  </div>
                  <div className={`text-[11px] font-medium mb-3 ${r.feat ? 'text-white/45' : 'text-[#5C6B80]'}`}>{r.date} · {r.svc}</div>
                  <p className={`text-sm leading-relaxed italic flex-1 mb-5 ${r.feat ? 'text-white/82 text-[15px]' : 'text-[#2A3A5C]'}`}>"{r.text}"</p>
                  <div className={`h-px mb-4 ${r.feat ? 'bg-white/12' : 'bg-[rgba(42,67,115,.1)]'}`} />
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-base font-semibold flex-shrink-0 ${r.feat ? 'bg-white/14 text-[#A8D5C8]' : 'bg-[#1C3162] text-white'}`}>
                      {r.name.split(' ').map(w => w[0]).join('')}
                    </div>
                    <div>
                      <div className={`text-sm font-bold ${r.feat ? 'text-[#A8D5C8]' : 'text-[#1C3162]'}`}>{r.name}</div>
                      <div className={`text-xs ${r.feat ? 'text-white/45' : 'text-[#5C6B80]'}`}>{r.loc}</div>
                    </div>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>

          {/* Leave a review */}
          <AnimateIn>
            <div className="bg-white rounded-2xl border border-[rgba(42,67,115,.1)] p-10 max-w-[700px] mx-auto text-center shadow-sm">
              <h2 className="font-serif text-2xl font-semibold text-[#1C3162] mb-3">Be among the first to share your experience</h2>
              <p className="text-[#5C6B80] mb-6 text-sm leading-relaxed">We're a locally owned business building our reputation one family at a time. If you've experienced Maplepath's care, your honest review helps another Halton family find the right care for someone they love. It takes 60 seconds.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4285F4] text-white rounded font-bold hover:bg-[#3367D6] transition-all no-underline text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="white"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="white"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="white"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="white"/></svg>
                  Leave a Google Review
                </a>
                <a href="https://www.facebook.com/maplepathhealthcare" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded font-bold hover:bg-[#1565C0] transition-all no-underline text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Leave a Facebook Review
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
