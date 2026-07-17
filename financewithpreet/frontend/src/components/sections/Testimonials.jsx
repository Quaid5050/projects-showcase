import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const QuoteIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-gold-500/30">
    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3.008.68-1.058 1.63-1.86 2.85-2.407L9.45 4.867C8.275 5.48 7.255 6.37 6.39 7.54c-.865 1.168-1.43 2.42-1.69 3.754-.26 1.33-.19 2.542.21 3.632.4 1.09 1.1 1.95 2.1 2.58a4.8 4.8 0 0 0 2.665.79c.9 0 1.648-.27 2.24-.812.592-.542.888-1.274.888-2.197zm6.668 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.692-1.327-.817-.55-.124-1.07-.132-1.54-.022-.16-.95.1-1.95.78-3.008.68-1.062 1.63-1.86 2.85-2.41L16.12 4.87c-1.175.613-2.195 1.503-3.06 2.673-.865 1.168-1.43 2.42-1.69 3.754-.26 1.33-.19 2.542.21 3.632.4 1.09 1.1 1.95 2.1 2.58a4.8 4.8 0 0 0 2.664.79c.9 0 1.648-.27 2.24-.812.592-.542.888-1.274.888-2.197z"/>
  </svg>
)
const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
)
const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
)
const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
)

const testimonials = [
  { name: 'Gurpreet Singh', location: 'Brampton, ON', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80', text: "Preet helped our family secure life insurance and set up our kids' RESP. She explained everything in Punjabi which made it so easy to understand. Highly recommend!", rating: 5 },
  { name: 'Mandeep Kaur', location: 'Surrey, BC', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80', text: "We were completely lost when it came to retirement planning. Finance With Preet made it simple, stress-free and showed us exactly what we needed. Our future feels so much more secure now.", rating: 5 },
  { name: 'Harjit & Simran Dhaliwal', location: 'Mississauga, ON', image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&q=80', text: "After our mortgage, we didn't think we could afford more coverage. Preet showed us affordable options that fit our budget perfectly. Professional, patient and genuinely caring.", rating: 5 },
  { name: 'Amritpal Sandhu', location: 'Calgary, AB', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80', text: "The TFSA strategy Preet set up for us has already made a huge difference. We're finally building wealth instead of just paying bills. Wish we found her sooner!", rating: 5 },
  { name: 'Parveen Bains', location: 'Edmonton, AB', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80', text: 'Amazing service from start to finish. Preet is very knowledgeable, honest and always available to answer questions. Our whole family now works with her.', rating: 5 },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(p => (p + 1) % testimonials.length)

  const visible = [
    testimonials[(current) % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  return (
    <section className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3 inline-block">Client Testimonials</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">Trusted by Canadian Families</h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-5" />
          <p className="text-gray-600 text-lg mb-0 max-w-2xl mx-auto leading-relaxed">Real stories from real families whose lives we've helped transform financially.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <motion.div
              key={`${current}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative bg-white border rounded-2xl p-7 transition-all duration-300 ${
                i === 1 ? 'border-gold-500/40 shadow-xl' : 'border-gray-200 hover:border-gold-500/30 hover:shadow-lg'
              }`}
            >
              {i === 1 && <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />}
              <QuoteIcon />
              <p className="text-gray-700 leading-relaxed my-4 text-sm">{t.text}</p>
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => <StarIcon key={j} />)}
              </div>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-gold-500/30" />
                <div>
                  <p className="font-semibold text-navy-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4">
          <button onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:border-gold-500/60 hover:text-gold-600 transition-all duration-200">
            <ChevronLeft />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'bg-gold-500 w-6 h-2' : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                }`} />
            ))}
          </div>
          <button onClick={next}
            className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:border-gold-500/60 hover:text-gold-600 transition-all duration-200">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}
