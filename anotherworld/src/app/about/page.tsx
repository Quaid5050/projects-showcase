import Image from "next/image";
import Link from "next/link";
import { Wifi, Crosshair, Cpu, Users, MapPin, Clock, Navigation, Star, Gamepad2, PartyPopper, Building2, GraduationCap, BookOpen, Shield, Zap } from "lucide-react";

const HERO = "/about.png";
const HEADSET = "https://lh3.googleusercontent.com/aida-public/AB6AXuD6_2dUpXyx27ZBeMDq9_oZzEbfexrxuQ_aBfJSkWK4SRM5tQ9M5_2HorbG-k8XfOgkka_agXkfKmcSFmK-XDDycsTkqolWQiIOwkPH1wI9afVRYiKPzqAm6B-vqaTiUTKGmDieesUnwl5LUTgr5b6CyXbwM9dWrBYdRHyhnFSDg0LcqgWssgWOgc9JvXzuEWS0xY9NK2w1SYaBBj9Zu3e6iK6IBkuShjtQGzyY8tiC3LLCUSHE0OAo70gOa94T1qsRuWzrMjR1ng";
const TECH = "https://lh3.googleusercontent.com/aida-public/AB6AXuCwXuTGGp1JMVnVuZ85bqJA22EJ3CYhwBjVcaIEH-GPWLSQuQg6XD0GsN5ZjUqiA8moY_x85Ii3I4XbGjZ5IewKI5hKVaTjIKfgiTFd2RybEhGay9MSDpv3sm_wKzIJql4FIJ27TopQa3EAMEpTRLYMvEGny8y0V-IvVB0vU4VTZ2PIL64yxt05wXYEPGyGP9VLUWiD20wOAc-x86qT21wIVfzUUfln5sTHwowf4aVZBs9fbG9kVaByekIkCQC-KONBJ_YTH6fntw";
const SOCIAL = "https://lh3.googleusercontent.com/aida-public/AB6AXuBbjPedWdqHBTxoLrCYvUB7kgMpck-EimfPADo0gFBFo2xYvCD0dWy__eqr3iX_M8DkYfcYUfq1sVylRxTPMw7BDq9Uo1Ynj-S97fwoVwAiXaOD9sBKZsK7T9aykWWoG6rNSxBjQXL6rTFM8w12Ud6bS5QGXnhtEAOprM8WLGw9hq4a_qIbJ_DsuuarcX8QbEs0wxWDfZ1uwr71NHMaFhdfSqGrjHpBN2OgE3Q5A8V8tUl235cZ6UHAv5TBVbGt69mTSBHSWGo8iw";
const FAC = "https://lh3.googleusercontent.com/aida-public/AB6AXuAr6Lhkt05XMHCNtFPF4cR4wH8SIE0lHvWxV-YAIcsio7vrTpez_AlyEeE7uxMvOpq_Y3UVmPJZ4aGkqRvTdCXqDQZuDUjPafU7iZ8RmO4fKNoFWGOzUtznY6Mx9faxc_khFFz7c89lNyTv6Fnx6q1IRR9k8lRKckvojbOd1ifTmVgesTLSZPwKFJGxU0Oox3zmtFBIT4p4FQxW-hHCkwTVGgOp5EI-w8mFszn8pRqurmSrHcA2oEaNuhvS_2TWLrXiRJSO2Ekzrg";
const G1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCjeiRpXHviD50vUUtAVXn0ysejfqdEcx7MiJTg5gbh6EETNtYwEbM-ON2Pp3TS92LmSPRjs1ytSatsoU4FQIk9myMm3e6x57lEx2mfQiez05x_vii62AIRloeU_Pu0vNarLSFuHsPwsPoEQ4o2DhsZmBpB5hsgmwnBqH_0Xwtl7-AiZ8nqG2P-lIhDawlYrjwWlNKoshVxWsVkWaMbufDgLcHFXzHLHF39qrgq7JEhhwvcQk-b9nge6_JLOy1Zw02BS9lS5rnRjg";
const G2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDb_4B7dZnRsB-qTzi9cvGr7uQQ2Agv-YHeBIFUlfotTUGhLX5PRlWf4vRn2Z80jWV_BlBCMWezCmJEZhsk17iPnJLFMcfqKVtm2vetxymEEFA9WbettPfQQ5dbwQ_KAG6JbuAZIVKbOxKpzyVjIe3ASZsIHUGYVQIZ4z-yrYHLoqFK73EgzlhD8WH-hZf3sMPpnBHju8I6C_0Lpiu-ypmELI7SBmKn8QnGGtEIdIo8Zb-lysMImJE732B_T1HGv5DIk6GSrKn-yw";
const G3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBjyHRQB-4IhNvKUasC9iAv8_krVwXJyCnjRYGHBEZxTR5yAwm5ckN9FTbxpyzFwc0Nfk2-oxMyjJJD4sslUsHpe8B7LHm-CekznQTGMvqdcCIKWCMb78zZPo2pqMPmcouUKXdGZ8YGiyK22It49ToqBlM-nr2QPv4R29SqSkdgvQPa1PsnjwxK-8DrLDAN009kEZlnxQ53VCuwpNNIaT2S5XZAJCJ4rE1N5TbTxJQL-GvhRpU-ioJT7UWA_4QN6S9KDzFEy4TGTw";
const ARENA = "https://lh3.googleusercontent.com/aida-public/AB6AXuCNIdAFc12Ld1TFvMx7K5ZGAEr5BqQd1Jpd7llooVQk2NKbpvUmVxtE1O7HNWcvS5vbEPaqV27m5hDQuVPyOxa9NMLSOvB5TZQrlef5TkRxGw2E_dNlrwfl5kbFidSAjPJLmeiQ5DJrhFHVZIG4OUlS2ndLhDVxfpTzcU4zSbNJqKLc4wWJWQ6JfXzjqHVcpRkQkmNAQ7PPZbGQhtFtMWYG5GXyPmbESLhpYsHSfUrVUoGUs_qA81WAtkCBcyyL5C5adwoWmWXzpA";

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative min-h-[75vh] w-full flex items-end overflow-hidden pb-20 pt-32 bg-gradient-to-b from-[#1a0008] via-[#0a0a0a] to-[#070707]">
        <div className="absolute inset-0 z-0">
          <Image src={HERO} alt="VR experience" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/70" />
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container mx-auto w-full">
          <span className="font-mono text-xs text-brand-red tracking-[0.2em] uppercase mb-4 block">Our Journey</span>
          <h1 className="font-sora text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6">Our Story</h1>
          <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
            Since our inception, YEG Another World VR has been on a quest to bridge the gap between imagination and reality, bringing the future of entertainment to the heart of Edmonton.
          </p>
        </div>
      </section>

      {/* 2. UNRIVALED IMMERSION */}
      <section className="section-fade py-24 px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-sora text-3xl md:text-[40px] font-bold text-white mb-6 leading-tight">Unrivaled Immersion</h2>
            <p className="text-on-surface-variant text-base leading-relaxed mb-10">Our mission is simple: to provide the most immersive free-roam VR experience in Edmonton. We believe that technology should be invisible, allowing you to lose yourself in worlds that defy the laws of physics.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="stat-card rounded-xl p-5"><p className="font-sora text-4xl font-extrabold text-brand-red mb-1">100%</p><p className="font-mono text-[10px] text-on-surface-variant tracking-[0.15em]">WIRELESS FREEDOM</p></div>
              <div className="stat-card rounded-xl p-5"><p className="font-sora text-4xl font-extrabold text-brand-red mb-1">360°</p><p className="font-mono text-[10px] text-on-surface-variant tracking-[0.15em]">TRACKING ACCURACY</p></div>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-glass-stroke bg-surface">
            <Image src={HEADSET} alt="VR headset with LED accents" fill className="object-cover" />
            <div className="absolute bottom-4 right-4 glass-panel px-4 py-2 rounded-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse shadow-[0_0_8px_#E9114F]" />
              <span className="font-mono text-[10px] text-brand-red tracking-[0.15em]">SYSTEM READY</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CUTTING-EDGE TECH BENTO */}
      <section className="section-fade py-24 bg-surface-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
          <h2 className="font-sora text-3xl md:text-[40px] font-bold text-white text-center mb-16">Cutting-Edge Tech</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
            <div className="md:col-span-5 bento-card rounded-xl p-7"><Wifi className="w-7 h-7 text-brand-red mb-4"/><h3 className="font-sora text-lg font-bold text-white mb-3">Wireless 6DOF Headsets</h3><p className="text-on-surface-variant text-sm leading-relaxed">No wires, no limits. Our high-fidelity wireless headsets offer crystal-clear optics and six degrees of freedom, allowing you to move through the virtual space exactly as you would in the real world.</p></div>
            <div className="md:col-span-3 relative rounded-xl overflow-hidden min-h-[220px] border border-glass-stroke bg-surface"><Image src={TECH} alt="VR technology" fill className="object-cover"/></div>
            <div className="md:col-span-4 bento-card rounded-xl p-7"><Crosshair className="w-7 h-7 text-brand-red mb-4"/><h3 className="font-sora text-lg font-bold text-white mb-3">Full-Body Tracking</h3><p className="text-on-surface-variant text-sm leading-relaxed">Experience presence like never before. Every movement is captured by our infrared tracking array, mapping your real-world body to your digital avatar with sub-millimeter precision.</p></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4 bento-card rounded-xl p-7"><Cpu className="w-7 h-7 text-brand-red mb-4"/><h3 className="font-sora text-lg font-bold text-white mb-3">Edge Computing</h3><p className="text-on-surface-variant text-sm leading-relaxed">Ultra-low latency processing ensures that what you see and feel is perfectly synchronized, preventing motion sickness and maximizing your competitive edge.</p></div>
            <div className="md:col-span-4 relative rounded-xl overflow-hidden min-h-[220px] border border-glass-stroke bg-surface"><Image src={SOCIAL} alt="Social VR" fill className="object-cover"/></div>
            <div className="md:col-span-4 bento-card rounded-xl p-7"><Users className="w-7 h-7 text-brand-red mb-4"/><h3 className="font-sora text-lg font-bold text-white mb-3">Social Play</h3><p className="text-on-surface-variant text-sm leading-relaxed">Our arena is built for connection. Team up or face off in social VR experiences designed specifically for group interaction, physical coordination, and shared adrenaline.</p></div>
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCES FOR EVERYONE */}
      <section className="section-fade py-24">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
          <div className="text-center mb-16"><span className="font-mono text-xs text-brand-red tracking-[0.2em] uppercase mb-3 block">What We Offer</span><h2 className="font-sora text-3xl md:text-[40px] font-bold text-white">Experiences For Everyone</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[{img:G1,title:"Multiplayer Shooters",desc:"Squad-based tactical combat in massive free-roam arenas. Up to 8 players per session.",Icon:Gamepad2},{img:G2,title:"Horror & Survival",desc:"4D physical horror with real environmental effects. Not for the faint of heart.",Icon:Shield},{img:G3,title:"Rhythm & Action",desc:"Beat-synced movement games perfect for parties, families, and first-time VR players.",Icon:Zap}].map(g=>(
              <div key={g.title} className="group relative rounded-xl overflow-hidden border border-glass-stroke bg-surface h-[320px]">
                <Image src={g.img} alt={g.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/40 to-transparent"/>
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-brand-red/20 backdrop-blur-sm flex items-center justify-center border border-brand-red/30"><g.Icon className="w-5 h-5 text-brand-red"/></div>
                <div className="absolute bottom-0 left-0 p-6 w-full"><h3 className="font-sora text-lg font-bold text-white mb-2">{g.title}</h3><p className="text-on-surface-variant text-sm leading-relaxed">{g.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{Icon:PartyPopper,title:"Birthday Parties",desc:"Private room, dedicated coordinator, multiple game rotations, and pizza packages. The coolest party in Edmonton."},{Icon:Building2,title:"Corporate Events",desc:"Team-building that actually works. Communication, strategy, and adrenaline-fueled collaboration."},{Icon:GraduationCap,title:"Educational VR",desc:"Coming soon — immersive learning journeys for schools. Explore history, science, and culture in virtual reality."}].map(e=>(
              <div key={e.title} className="bento-card rounded-xl p-7"><div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center mb-5"><e.Icon className="w-6 h-6 text-brand-red"/></div><h3 className="font-sora text-lg font-bold text-white mb-3">{e.title}</h3><p className="text-on-surface-variant text-sm leading-relaxed">{e.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY PLAYERS CHOOSE US */}
      <section className="section-fade py-20 bg-surface-container-low">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
          <h2 className="font-sora text-3xl md:text-[40px] font-bold text-white text-center mb-14">Why Players Choose Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[{v:"2,500+",l:"SQ FT ARENA"},{v:"8",l:"PLAYERS PER SESSION"},{v:"4.9",l:"GOOGLE RATING"},{v:"<5ms",l:"SYSTEM LATENCY"}].map(s=>(
              <div key={s.l} className="stat-card rounded-xl py-7 px-4 text-center"><p className="font-sora text-3xl md:text-4xl font-extrabold text-brand-red mb-2">{s.v}</p><p className="font-mono text-[10px] text-on-surface-variant tracking-[0.12em]">{s.l}</p></div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{t:"Mind-blowing! The free-roam aspect is next level. Best VR in Edmonton!",n:"Sarah J."},{t:"Corporate team event was a hit. Staff were amazing and super professional.",n:"Mark T."},{t:"Kids had the best birthday party ever! They won't stop talking about it.",n:"Lisa R."}].map(r=>(
              <div key={r.n} className="glass-panel rounded-xl p-6"><div className="flex gap-0.5 mb-3">{[1,2,3,4,5].map(i=><Star key={i} className="w-3.5 h-3.5 fill-brand-red text-brand-red"/>)}</div><p className="text-on-surface italic text-sm mb-4 leading-relaxed">&ldquo;{r.t}&rdquo;</p><span className="font-bold text-brand-red text-sm">— {r.n}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ARENA BANNER */}
      <section className="section-fade relative h-[300px] md:h-[400px] overflow-hidden">
        <Image src={ARENA} alt="Free-roam VR arena" fill className="object-cover brightness-[0.35]"/>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-transparent"/>
        <div className="relative z-10 h-full flex items-center px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
          <div className="max-w-lg"><span className="font-mono text-xs text-brand-red tracking-[0.15em] mb-3 block">MULTIPLAYER ARENAS</span><h2 className="font-sora text-3xl md:text-4xl font-bold text-white mb-4">Walk, Run, Fight — Untethered</h2><p className="text-on-surface-variant mb-6 leading-relaxed">4,000+ sq ft of free-roam space. No cables, no boundaries.</p><Link href="/gallery" className="bg-brand-red text-white px-8 py-3 rounded font-bold text-sm inline-flex items-center gap-2">View Gallery</Link></div>
        </div>
      </section>

      {/* 7. THE ARENA — Address + Visit Us */}
      <section className="section-fade py-24 px-margin-mobile md:px-margin-desktop max-w-container mx-auto text-center">
        <span className="font-mono text-xs text-brand-red tracking-[0.2em] uppercase mb-4 block">The Arena</span>
        <h2 className="font-sora text-3xl md:text-[40px] font-bold text-white mb-4">13026 97 St NW, Edmonton</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto mb-16 leading-relaxed">Our state-of-the-art facility features over 2,500 square feet of unobstructed free-roam space, optimized for maximum immersion.</p>
        <div className="relative h-[350px] md:h-[550px] rounded-2xl overflow-hidden border border-glass-stroke bg-surface">
          <Image src={FAC} alt="Facility interior" fill className="object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent"/>
          <div className="absolute top-8 left-8 md:top-12 md:left-12 max-w-sm text-left">
            <h3 className="font-sora text-2xl md:text-3xl font-bold text-white mb-4">Visit Us</h3>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Located in the heart of Edmonton, our arena is designed with high-end aesthetics and comfortable player lounges for the ultimate outing.</p>
            <div className="space-y-3 mb-6">
              <p className="flex items-center gap-2.5 text-on-surface text-sm"><MapPin className="w-4 h-4 text-brand-red flex-shrink-0"/>13026 97 St NW, Edmonton, AB T5E 4B3</p>
              <p className="flex items-center gap-2.5 text-on-surface text-sm"><Clock className="w-4 h-4 text-brand-red flex-shrink-0"/>Mon-Sun: 10:00 AM - 11:00 PM</p>
            </div>
            <a href="https://www.google.com/maps/search/13026+97+St+NW+Edmonton+AB" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#070707] px-6 py-2.5 rounded font-bold text-sm hover:bg-gray-200 transition-colors"><Navigation className="w-4 h-4"/> Get Directions</a>
          </div>
        </div>
      </section>

      {/* 8. COMING SOON */}
      <section className="section-fade py-24 bg-surface-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
          <h2 className="font-sora text-3xl md:text-[40px] font-bold text-white mb-14 text-center">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bento-card p-8 rounded-xl"><div className="flex items-center gap-4 mb-6 flex-wrap"><div className="w-12 h-12 bg-brand-red/15 rounded-full flex items-center justify-center"><GraduationCap className="w-6 h-6 text-brand-red"/></div><h4 className="font-sora text-lg font-bold text-white">Educational VR</h4><span className="ml-auto font-mono text-[10px] text-brand-red border border-brand-red/40 px-3 py-1 tracking-[0.15em] rounded-sm">SOON</span></div><p className="text-on-surface-variant text-sm leading-relaxed">Travel through time, explore the human cell, or walk through ancient civilizations. Immersive journeys for schools, colleges, and learning groups.</p></div>
            <div className="bento-card p-8 rounded-xl"><div className="flex items-center gap-4 mb-6 flex-wrap"><div className="w-12 h-12 bg-secondary/15 rounded-full flex items-center justify-center"><BookOpen className="w-6 h-6 text-secondary"/></div><h4 className="font-sora text-lg font-bold text-white">Biblical VR</h4><span className="ml-auto font-mono text-[10px] text-secondary border border-secondary/40 px-3 py-1 tracking-[0.15em] rounded-sm">SOON</span></div><p className="text-on-surface-variant text-sm leading-relaxed">Step into history and witness foundational moments like never before. High-fidelity exploration of cultural and spiritual heritage that brings scripture to life.</p></div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="section-fade py-24 bg-surface-container-low">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container mx-auto text-center">
          <h2 className="font-sora text-3xl md:text-5xl font-bold text-white mb-6">Ready to Step Into Another World?</h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-xl mx-auto leading-relaxed">Don&apos;t just play the game. Live it. Book your session today and experience the frontier of virtual reality.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="bg-brand-red text-white px-10 py-4 rounded font-bold transition-all">Book Your Mission</Link>
            <Link href="/book" className="border border-white/20 text-white px-10 py-4 rounded font-bold hover:bg-white/5 transition-all">View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}