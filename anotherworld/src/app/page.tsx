import Image from "next/image";
import Link from "next/link";
import { CalendarDays, PlayCircle, ChevronDown, ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Rocket, GraduationCap, BookOpen, Shield, Wifi, Zap, Users, Clock, Star, MapPin, Phone, Gamepad2, Swords, Eye, Target, Play, Youtube } from "lucide-react";

const H = "/banner1.png";
const A = "/img1.png";
const HS = "https://lh3.googleusercontent.com/aida-public/AB6AXuD6_2dUpXyx27ZBeMDq9_oZzEbfexrxuQ_aBfJSkWK4SRM5tQ9M5_2HorbG-k8XfOgkka_agXkfKmcSFmK-XDDycsTkqolWQiIOwkPH1wI9afVRYiKPzqAm6B-vqaTiUTKGmDieesUnwl5LUTgr5b6CyXbwM9dWrBYdRHyhnFSDg0LcqgWssgWOgc9JvXzuEWS0xY9NK2w1SYaBBj9Zu3e6iK6IBkuShjtQGzyY8tiC3LLCUSHE0OAo70gOa94T1qsRuWzrMjR1ng";
const BD = "/bday.png";
const CO = "/cor.png";
const T = "https://lh3.googleusercontent.com/aida-public/AB6AXuCwXuTGGp1JMVnVuZ85bqJA22EJ3CYhwBjVcaIEH-GPWLSQuQg6XD0GsN5ZjUqiA8moY_x85Ii3I4XbGjZ5IewKI5hKVaTjIKfgiTFd2RybEhGay9MSDpv3sm_wKzIJql4FIJ27TopQa3EAMEpTRLYMvEGny8y0V-IvVB0vU4VTZ2PIL64yxt05wXYEPGyGP9VLUWiD20wOAc-x86qT21wIVfzUUfln5sTHwowf4aVZBs9fbG9kVaByekIkCQC-KONBJ_YTH6fntw";
const G1 = "/ss1.png";
const G2 = "/ss2.png";
const G3 = "/ss3.png";
const EX1 = "/fit.png";
const EX2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDwdAdH6xVGFG-n3xkvDStzjT7qkBdm2FLdjALM2cYdfK7NUz1xkb0wXHHlwp1aUstXniL9hOfGKP1A1LPEKLiE-2FEgU_eeSY5ABsFr0HEHX_u3x9oU2_4cbBP-y0MQShSDyjug3eO-ZVzuyUbVnS9mW6akQEhFpLpkEQATaj5QbuZTKfDWTgPOQE06KGQMeOyN6BFwWnbSPQWEfQOD4sox9Y8KZk-qg87X1WbHS9RvT1I_T26ekGGZZxFFYF3b0zw0IpL4O6u7g";
const games = [
  { title:"Starship Troopers", genre:"SCI-FI SHOOTER", img:"/game1.png" },
  { title:"Deadwood Mansion", genre:"SURVIVAL HORROR", img:"/game2.png" },
  { title:"Neon Pulse", genre:"RHYTHM ACTION", img:"/game3.png" },
  { title:"Starbase: Expedition", genre:"SCI-FI ADVENTURE", img:"/game4.png" },
  { title:"Arena: Space Battle", genre:"PVP SHOOTER", img:"/game5.png" },
  { title:"Undead Protocol", genre:"ZOMBIE SURVIVAL", img:"/game6.png" },
];

const faqs = [
  {q:"Is it safe for children?",a:"We recommend players be at least 8 years old. All equipment is sanitized after every use, and staff monitor every session for safety."},
  {q:"Do I need to bring anything?",a:"Just yourself! Wear comfortable shoes and clothing. Most VR headsets fit over standard glasses frames."},
  {q:"Can I host a group larger than 8?",a:"Yes! We can accommodate larger groups by rotating sessions or booking multiple arenas simultaneously."},
  {q:"How long is a session?",a:"About 40-50 minutes of gameplay within a 1-hour total experience slot including briefing and gear-up."},
  {q:"Do you offer birthday packages?",a:"Absolutely! Private room, dedicated coordinator, multiple game rotations, and optional food packages. Discounts for longer sessions."},
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO — with fallback bg ═══ */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <Image src={H} alt="VR arena" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/60 via-[#070707]/40 to-[#070707]" />
        </div>
        <div className="relative z-10 text-center px-margin-mobile max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-5 py-2 mb-8 backdrop-blur-sm bg-white/5">
            <Gamepad2 className="w-4 h-4 text-brand-red" />
            <span className="font-mono text-xs text-on-surface-variant tracking-widest">FREE-ROAM VR &bull; EDMONTON</span>
          </div>
          <h1 className="font-sora text-5xl sm:text-6xl md:text-[85px] font-extrabold tracking-tight leading-[1.05] mb-6">
            <span className="text-white">Enter Another</span><br/>
            <span className="text-brand-red">World</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Edmonton&apos;s Ultimate Free-Roam Virtual Reality Experience —<br className="hidden md:block" /> Walk, Run, Fight in Massive Arenas
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="w-full sm:w-auto bg-brand-red text-white px-10 py-4 rounded-lg font-bold text-base hover:bg-brand-red/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-red/20">
              <CalendarDays className="w-5 h-5" /> Book Now — $35/player
            </Link>
            <button className="w-full sm:w-auto border border-white/20 text-white px-10 py-4 rounded-lg font-bold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
              <PlayCircle className="w-5 h-5" /> Watch Trailer
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-10 h-10 text-white/40" />
        </div>
      </section>

      {/* ═══ FEATURES STRIP ═══ */}
      <section className="py-14 border-b border-glass-stroke bg-surface-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{icon:Users,l:"Up to 8 Players",s:"Team up with friends in immersive VR battles."},{icon:Wifi,l:"Massive Arenas",s:"Explore large-scale worlds built for free-roam action."},{icon:Zap,l:"Move Freely",s:"Walk, run, crouch, and dodge in a fully untethered experience."},{icon:Shield,l:"Epic Adventures",s:"Fight robots, conquer missions, and save another world."}].map(f=>(
            <div key={f.l} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0"><f.icon className="w-5 h-5 text-brand-red"/></div>
              <div><p className="text-white font-semibold text-sm">{f.l}</p><p className="text-on-surface-variant text-xs">{f.s}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FREE-ROAM VR ═══ */}
      <section className="section-fade py-24 px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div><span className="font-mono text-sm text-brand-red tracking-[0.15em] uppercase mb-3 block">Immersive Movement</span><h2 className="font-sora text-4xl md:text-5xl font-bold text-white">Free-Roam VR</h2></div>
          <p className="max-w-md text-on-surface-variant leading-relaxed">Untethered freedom in massive 4,000 sq ft arenas. No wires, no limits — just pure immersion.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:h-[600px]">
          <div className="md:col-span-8 relative group overflow-hidden rounded-xl h-[350px] md:h-full border border-glass-stroke bg-surface">
            <Image src={A} alt="Players in VR" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8"><h3 className="font-sora text-2xl font-bold text-white mb-2">Team Operations</h3><p className="text-on-surface-variant text-sm">Strategic co-op for up to 8 players.</p></div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-5">
            <div className="h-[250px] md:flex-1 relative group overflow-hidden rounded-xl border border-glass-stroke bg-surface">
              <Image src={HS} alt="VR headset" fill className="object-cover transition-all duration-500 group-hover:scale-105" />
            </div>
            <div className="md:flex-1 glass-panel p-7 rounded-xl flex flex-col justify-center">
              <span className="font-mono text-xs text-brand-red tracking-[0.15em] mb-4 block">SYSTEM STATUS</span>
              <div className="flex items-center gap-3 text-white mb-4"><div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"/><span className="font-semibold text-sm">ALL ARENAS ACTIVE</span></div>
              <p className="text-on-surface-variant text-xs leading-relaxed">Real-time latency &lt;5ms. Seamless 1:1 movement tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TECH BENTO ═══ */}
      <section className="section-fade py-24 bg-surface-container-low">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-white text-center mb-16">Cutting-Edge Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5 bento-card rounded-xl p-7"><Wifi className="w-7 h-7 text-brand-red mb-4"/><h3 className="font-sora text-lg font-bold text-white mb-3">Wireless 6DOF Headsets</h3><p className="text-on-surface-variant text-sm leading-relaxed">Crystal-clear optics and six degrees of freedom. Move through virtual space naturally.</p></div>
            <div className="md:col-span-3 relative rounded-xl overflow-hidden min-h-[200px] border border-glass-stroke bg-surface"><Image src={T} alt="Tech" fill className="object-cover"/></div>
            <div className="md:col-span-4 bento-card rounded-xl p-7"><Zap className="w-7 h-7 text-brand-red mb-4"/><h3 className="font-sora text-lg font-bold text-white mb-3">Full-Body Tracking</h3><p className="text-on-surface-variant text-sm leading-relaxed">Infrared array maps your body to your avatar with sub-millimeter precision.</p></div>
          </div>
        </div>
      </section>

      {/* ═══ OUR GAMES — Horizontal Scroll Carousel ═══ */}
      <section className="section-fade py-24 relative overflow-hidden" style={{background:"linear-gradient(180deg, #0e0e0e 0%, #1a0515 40%, #0e0e0e 100%)"}}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-red/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container mx-auto text-center mb-12">
          <h2 className="font-sora text-4xl md:text-5xl font-bold text-white mb-4">Our Games</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto font-mono text-sm leading-relaxed">
            We offer a collection of VR games that appeal to visitors of all ages. Everyone will find something for themselves — ranging from thrilling shooters to engaging games for kids.
          </p>
        </div>
        <div className="relative group">
          {/* Scroll arrows */}
          <button onClick={undefined} aria-label="Scroll left" className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:border-brand-red hover:text-brand-red transition-all opacity-0 group-hover:opacity-100">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={undefined} aria-label="Scroll right" className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:border-brand-red hover:text-brand-red transition-all opacity-0 group-hover:opacity-100">
            <ChevronRight className="w-6 h-6" />
          </button>
          {/* Scrollable track */}
          <div className="flex gap-5 overflow-x-auto px-margin-mobile md:px-margin-desktop pb-4 snap-x snap-mandatory scrollbar-hide" style={{scrollbarWidth:"none",msOverflowStyle:"none"}}>
            {games.map(g => (
              <Link href="/gallery" key={g.title} className="flex-shrink-0 w-[240px] md:w-[280px] snap-start group/card">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 hover:border-brand-red/40 transition-all bg-surface">
                  <Image src={g.img} alt={g.title} fill className="object-cover transition-transform duration-500 group-hover/card:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-sora text-lg font-bold text-white leading-tight">{g.title}</p>
                    <p className="font-mono text-[10px] text-brand-red tracking-widest mt-1">{g.genre}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ USEFUL CONTENT — YouTube Videos ═══ */}
      <section className="section-fade py-24 bg-surface-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-white text-center mb-14">Useful Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "What to Expect at Your First VR Session", videoId: "2QCrtn2mw2k" },
              { title: "Top 5 Team-Building Activities in Edmonton", videoId: "CalGF-mTTUg" },
              { title: "Why Free-Roam VR is the Future of Entertainment", videoId: "N1IQqIlrmw0" },
            ].map(c => (
              <div key={c.title} className="rounded-2xl overflow-hidden border border-glass-stroke bg-surface-container-low group">
                <div className="relative aspect-video overflow-hidden bg-surface">
                  <iframe
                    src={`https://www.youtube.com/embed/${c.videoId}`}
                    title={c.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                  
                </div>
                <div className="p-5">
                  <h3 className="font-sora text-sm font-bold text-white leading-snug group-hover:text-brand-red transition-colors">{c.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXTRA EXPERIENCES BANNER ═══ */}
      <section className="section-fade relative h-[300px] md:h-[400px] overflow-hidden">
        <Image src={EX1} alt="VR gaming action" fill className="object-cover brightness-[0.3]" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red/30 to-transparent" />
        <div className="relative z-10 h-full flex items-center px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
          <div className="max-w-lg">
            <span className="font-mono text-xs text-brand-red tracking-[0.15em] mb-3 block">MULTIPLAYER ARENAS</span>
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-white mb-4">Battle Your Friends in 4,000 sq ft</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">Walk freely, take cover behind real obstacles, and experience VR the way it was meant to be — untethered and unlimited.</p>
            <Link href="/book" className="bg-brand-red text-white px-8 py-3 rounded font-bold text-sm inline-flex items-center gap-2">Book Arena <ArrowRight className="w-4 h-4"/></Link>
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section className="section-fade py-24">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-sora text-4xl md:text-5xl font-bold text-white mb-6">Simple, Fair Pricing</h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">Access our entire library and free-roam arena with a single session ticket. No hidden fees.</p>
            <ul className="space-y-5">
              {["60-Minute Total Experience","Choice of any Title","Full Haptic Gear Included","Birthday & Group Discounts"].map(i=><li key={i} className="flex items-center gap-3 text-white"><CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0"/><span>{i}</span></li>)}
            </ul>
          </div>
          <div className="flex-1 w-full lg:max-w-sm">
            <div className="glass-panel p-10 rounded-2xl border-2 border-brand-red/20 text-center shadow-[0_0_60px_rgba(233,17,79,0.08)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent"/>
              <span className="font-mono text-xs text-brand-red tracking-[0.2em] block mb-6">STANDARD ADMISSION</span>
              <div className="flex items-baseline justify-center gap-1 mb-2"><span className="font-sora text-6xl font-extrabold text-white">$35</span><span className="text-on-surface-variant">/ player</span></div>
              <p className="text-on-surface-variant text-sm mb-8">~40-50 min gameplay</p>
              <Link href="/book" className="block w-full bg-brand-red text-white py-4 rounded-xl font-bold transition-all">Book Session Now</Link>
              <p className="mt-5 text-xs text-on-surface-variant">Longer sessions & birthday discounts available</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EVENTS ═══ */}
      <section className="section-fade py-24 px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[{img:BD,title:"Birthdays",desc:"The coolest party in Edmonton. Private room, pizza, unlimited VR.",link:"Explore Packages"},{img:CO,title:"Group & Corporate",desc:"Team-building that actually works. Communication, strategy, adrenaline.",link:"Inquire Today"}].map(e=>(
            <div key={e.title} className="relative rounded-2xl overflow-hidden group h-[350px] md:h-[500px] border border-glass-stroke bg-surface">
              <Image src={e.img} alt={e.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"/>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <h3 className="font-sora text-3xl md:text-4xl font-bold text-white mb-3">{e.title}</h3>
                <p className="text-on-surface-variant mb-5 text-sm leading-relaxed max-w-sm">{e.desc}</p>
                <Link href="/book" className="w-fit text-brand-red font-bold text-sm flex items-center gap-1.5 border-b border-brand-red pb-0.5 hover:gap-3 transition-all">{e.link} <ArrowRight className="w-4 h-4"/></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ COMING SOON ═══ */}
      <section className="section-fade py-24 bg-surface-container-low">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
          <h2 className="font-sora text-4xl md:text-5xl font-bold text-white mb-14">The Next Frontier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bento-card p-8 rounded-xl"><div className="flex items-center gap-4 mb-6 flex-wrap"><div className="w-12 h-12 bg-brand-red/15 rounded-full flex items-center justify-center"><GraduationCap className="w-6 h-6 text-brand-red"/></div><h4 className="font-sora text-lg font-bold text-white">Educational VR</h4><span className="ml-auto font-mono text-[10px] text-brand-red border border-brand-red/40 px-3 py-1 tracking-[0.15em] rounded-sm">COMING SOON</span></div><p className="text-on-surface-variant text-sm leading-relaxed">Travel through time or explore the human cell. Immersive journeys for schools and groups.</p></div>
            <div className="bento-card p-8 rounded-xl"><div className="flex items-center gap-4 mb-6 flex-wrap"><div className="w-12 h-12 bg-secondary/15 rounded-full flex items-center justify-center"><BookOpen className="w-6 h-6 text-secondary"/></div><h4 className="font-sora text-lg font-bold text-white">Biblical VR</h4><span className="ml-auto font-mono text-[10px] text-secondary border border-secondary/40 px-3 py-1 tracking-[0.15em] rounded-sm">COMING SOON</span></div><p className="text-on-surface-variant text-sm leading-relaxed">Step into history. High-fidelity exploration of cultural and spiritual heritage.</p></div>
          </div>
        </div>
      </section>

      {/* ═══ REVIEWS + FAQ ═══ */}
      <section id="faq" className="section-fade py-24 px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-white mb-10">What Players Say</h2>
            {[{t:"Absolutely mind-blowing. Best VR in Edmonton!",n:"Sarah J."},{t:"Corporate team event was a massive hit. Staff were amazing!",n:"Mark T."},{t:"Kids had the best birthday ever. We are definitely coming back.",n:"Lisa R."}].map(r=>(
              <div key={r.n} className="p-6 border-l-2 border-brand-red bg-surface-container-low/60 rounded-r-lg mb-6">
                <div className="flex gap-0.5 mb-3">{[1,2,3,4,5].map(i=><Star key={i} className="w-3.5 h-3.5 fill-brand-red text-brand-red"/>)}</div>
                <p className="text-on-surface italic text-sm mb-4 leading-relaxed">&ldquo;{r.t}&rdquo;</p>
                <span className="font-bold text-brand-red text-sm">— {r.n}</span>
              </div>
            ))}
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-white mb-10">FAQ</h2>
            {faqs.map(f=>(
              <details key={f.q} className="group glass-panel rounded-lg overflow-hidden mb-3">
                <summary className="flex justify-between items-center p-5 cursor-pointer hover:bg-white/[0.03] transition-all list-none"><span className="font-semibold text-white text-sm pr-4">{f.q}</span><ChevronDown className="w-5 h-5 text-on-surface-variant transition-transform group-open:rotate-180 flex-shrink-0"/></summary>
                <div className="px-5 pb-5 text-on-surface-variant text-sm leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="section-fade py-16 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{l:"LATENCY",v:"<5ms"},{l:"AVAILABILITY",v:"99.9%"},{l:"SQUAD SIZE",v:"1–8"},{l:"GEAR LEVEL",v:"MAX"}].map(s=>(
            <div key={s.l} className="stat-card rounded-xl p-6 text-center"><p className="font-mono text-[10px] text-on-surface-variant tracking-[0.15em] mb-2">{s.l}</p><p className="font-sora text-3xl md:text-4xl font-extrabold text-brand-red">{s.v}</p></div>
          ))}
        </div>
      </section>

      {/* ═══ LOCATION ═══ */}
      <section className="section-fade py-16 px-margin-mobile md:px-margin-desktop bg-surface-lowest border-y border-glass-stroke">
        <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4"><MapPin className="w-6 h-6 text-brand-red flex-shrink-0"/><div><p className="text-white font-semibold">13026 97 St NW, Edmonton, AB T5E 4C6</p><p className="text-on-surface-variant text-sm">Mon-Sun: 10:00 AM – 11:00 PM</p></div></div>
          <div className="flex items-center gap-6"><a href="tel:+15875669707" className="flex items-center gap-2 text-on-surface-variant hover:text-brand-red transition-colors text-sm"><Phone className="w-4 h-4"/>+1 587 566 9707</a><a href="mailto:yeg@another-world.com" className="text-on-surface-variant hover:text-brand-red transition-colors text-sm">yeg@another-world.com</a></div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-fade py-24 px-margin-mobile">
        <div className="max-w-3xl mx-auto glass-panel p-10 md:p-16 rounded-[2rem] text-center relative overflow-hidden border border-brand-red/10">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red to-transparent"/>
          <h2 className="font-sora text-3xl md:text-5xl font-bold text-white mb-6">Ready to escape reality?</h2>
          <p className="text-on-surface-variant md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">Your next adventure is just a click away. Book now and experience the future of entertainment.</p>
          <Link href="/book" className="bg-brand-red text-white px-12 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center gap-2">Book Your Adventure <Rocket className="w-5 h-5"/></Link>
        </div>
      </section>
    </>
  );
}