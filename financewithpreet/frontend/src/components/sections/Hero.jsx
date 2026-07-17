import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import API from '../../utils/api'

const ChevronDownIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
)
const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
)
const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
)
const VolumeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
  </svg>
)
const VolumeOnIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
  </svg>
)

const DEFAULT_HERO = {
  headline: 'Helping Canadian Families Buy Homes, Build Wealth, and Protect Their Future.',
  subheadline: "Whether you're buying your first home, renewing your mortgage, investing for the future, or protecting your loved ones, we provide personalized financial guidance to help you make confident decisions every step of the way.",
  video: '/hero.mp4',
  fallbackImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1400&q=80',
  ctaPrimary: 'Book a Free Consultation',
  ctaSecondary: 'Explore Our Services',
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

export default function Hero() {
  const [hero, setHero] = useState(DEFAULT_HERO)
  const [muted, setMuted] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    API.get('/hero').then(r => {
      if (r.data) setHero({ ...DEFAULT_HERO, ...r.data })
    }).catch(() => {})
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  const isVideo = (url) => url && (url.endsWith('.mp4') || url.endsWith('.webm'))
  const mediaSrc = hero.video || hero.image || DEFAULT_HERO.video

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">

      {/* ── Background Media ── */}
      <div className="absolute inset-0">
        {isVideo(mediaSrc) && !videoError ? (
          <>
            <video
              ref={videoRef}
              src={mediaSrc}
              autoPlay loop muted playsInline
              onCanPlay={() => setVideoLoaded(true)}
              onError={() => setVideoError(true)}
              className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
            {!videoLoaded && (
              <img src={hero.fallbackImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
            )}
          </>
        ) : (
          <img src={isVideo(mediaSrc) ? hero.fallbackImage : mediaSrc} alt="Hero" className="w-full h-full object-cover" />
        )}

        {/* Multi-layer dark overlay — navy luxury feel */}
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-navy-950/40" />

        {/* Gold accent glow — bottom left */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-gold-500/5 blur-[100px] rounded-full" />
        {/* Blue glow — top right */}
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-navy-500/20 blur-[120px] rounded-full" />
      </div>

      {/* Mute Toggle */}
      {isVideo(mediaSrc) && !videoError && videoLoaded && (
        <button onClick={toggleMute} title={muted ? 'Unmute' : 'Mute'}
          className="absolute bottom-8 right-8 z-20 w-9 h-9 bg-white/5 hover:bg-gold-500/20 backdrop-blur-sm border border-white/10 hover:border-gold-500/40 rounded-full flex items-center justify-center text-gray-300 hover:text-gold-400 transition-all duration-300">
          {muted ? <VolumeOffIcon /> : <VolumeOnIcon />}
        </button>
      )}

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          {/* Trust Badge */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-400/30 text-gold-300 px-4 py-2 rounded-full text-xs font-semibold mb-8 backdrop-blur-sm"
          >
            <ShieldIcon />
            Trusted by 500+ Canadian Families
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            {(() => {
              const h = hero.headline
              const idx = h.indexOf('Buy')
              if (idx > 0) return (<>{h.slice(0, idx)}<span className="text-shimmer">{h.slice(idx)}</span></>)
              return <span className="text-shimmer">{h}</span>
            })()}
          </motion.h1>

          {/* Gold divider */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="w-16 h-0.5 bg-gold-500 mb-6"
          />

          {/* Subheadline */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-base text-gray-300 leading-relaxed mb-10 max-w-2xl"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-wrap justify-center gap-4 mb-14"
          >
            <Link to="/booking" className="btn-primary flex items-center gap-2">
              <PlayIcon /> {hero.ctaPrimary}
            </Link>
            <Link to="/services" className="btn-outline flex items-center gap-2">
              {hero.ctaSecondary}
            </Link>
          </motion.div>

          {/* Trust Icons */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={4}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3"
          >
            {['Mortgages', 'Wealth Planning', 'Insurance'].map(label => (
              <div key={label} className="flex items-center gap-2 text-gray-200">
                <span className="w-6 h-6 bg-gold-500/15 border border-gold-500/30 rounded-full flex items-center justify-center text-gold-400">
                  <CheckIcon />
                </span>
                <span className="font-medium text-sm">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <a href="#about-section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-500/50 hover:text-gold-400 animate-bounce transition-colors z-10">
        <ChevronDownIcon />
      </a>
    </section>
  )
}
