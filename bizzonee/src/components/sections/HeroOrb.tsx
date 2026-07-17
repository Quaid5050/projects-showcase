"use client";

import { motion } from "framer-motion";
import { Search, Target, Bot, Share2, Code2, ChevronDown, type LucideIcon } from "lucide-react";

const HEX = "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)";

type Node = { icon: LucideIcon; title: string; sub: string; top: string; left: string; dir: "r" | "b" };
const NODES: Node[] = [
  { icon: Search,  title: "SEO",             sub: "Rank Higher",      top: "-4%",  left: "30%",  dir: "r" },
  { icon: Target,  title: "Paid Ads",         sub: "Get More Leads",   top: "8%",   left: "62%",  dir: "r" },
  { icon: Bot,     title: "AI Automation",    sub: "Save Time & Scale",top: "40%",  left: "60%",  dir: "r" },
  { icon: Share2,  title: "Social Media",     sub: "Engage More",      top: "30%",  left: "-4%",  dir: "r" },
  { icon: Code2,   title: "Web Development",  sub: "Build Better",     top: "82%",  left: "30%",  dir: "b" },
];

type Orbit = { rx: number; ry: number; rot: number; c: string; dur: number };
const ORBITS: Orbit[] = [
  { rx: 190, ry: 66,  rot: 0,   c: "#C8F31D", dur: 9  },
  { rx: 178, ry: 92,  rot: 58,  c: "#B47BFF", dur: 12 },
  { rx: 184, ry: 82,  rot: -52, c: "#8C00FF", dur: 14 },
  { rx: 150, ry: 150, rot: 0,   c: "#C8F31D", dur: 16 },
];
const ep = (rx: number, ry: number) =>
  `M${200 - rx},200 a${rx},${ry} 0 1,0 ${2 * rx},0 a${rx},${ry} 0 1,0 ${-2 * rx},0`;

function Hex({ icon: Icon, size = 54 }: { icon: LucideIcon; size?: number }) {
  const h = Math.round(size * 60 / 54);
  const iconSz = Math.round(size * 20 / 54);
  return (
    <span className="relative grid shrink-0 place-items-center" style={{ width: size, height: h }}>
      <span className="absolute -inset-1 blur-[6px]"
        style={{ clipPath: HEX, background: "linear-gradient(160deg, rgba(200,243,29,0.5), rgba(140,0,255,0.5))" }} />
      <span className="absolute inset-0"
        style={{ clipPath: HEX, background: "linear-gradient(160deg, rgba(200,243,29,0.6), rgba(140,0,255,0.6))" }} />
      <span className="absolute inset-[1.5px]"
        style={{ clipPath: HEX, background: "linear-gradient(165deg, rgba(22,16,38,0.96), rgba(8,6,16,0.97))" }} />
      <Icon className="relative text-brand-mint drop-shadow-[0_0_6px_rgba(200,243,29,0.8)]" size={iconSz} />
    </span>
  );
}

export default function HeroOrb() {
  return (
    <div className="relative h-full w-full select-none">
      {/* CENTERED STAGE — scales with viewport */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          /* clamp: min 260px on tiny phones, max 480px on desktop */
          width:  "min(80vw, min(100%, 520px), 60vh)",
          height: "min(80vw, min(100%, 520px), 60vh)",
        }}>

        {/* decorative floating mini-spheres */}
        {[
          { l: "8%",  t: "18%", s: 22, c: "#8C00FF" },
          { l: "18%", t: "66%", s: 13, c: "#C8F31D" },
        ].map((d, i) => (
          <motion.span key={i}
            animate={{ y: [0, i % 2 ? 12 : -12, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-20 rounded-full"
            style={{ left: d.l, top: d.t, width: d.s, height: d.s,
              background: `radial-gradient(circle at 35% 30%, #fff, ${d.c} 55%, #0b0e18)`,
              boxShadow: `0 0 14px ${d.c}` }} />
        ))}

        {/* ORBIT LINES */}
        <svg viewBox="0 0 400 400" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
          <defs>
            <linearGradient id="og" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%"   stopColor="#8C00FF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#C8F31D" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {ORBITS.map((o, i) => (
            <g key={i} transform={`rotate(${o.rot} 200 200)`}>
              <path d={ep(o.rx, o.ry)} fill="none" stroke="url(#og)" strokeWidth="1" opacity="0.45" />
              <circle r="2.8" fill={o.c} opacity="0.9">
                <animateMotion dur={`${o.dur}s`} repeatCount="indefinite" path={ep(o.rx, o.ry)} />
              </circle>
            </g>
          ))}
        </svg>

        {/* GLOWING PLATFORM */}
        <div className="absolute left-1/2 top-[68%] z-0 -translate-x-1/2 -translate-y-1/2" style={{ width: "76%", aspectRatio: "1 / 1" }}>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-2xl"
            style={{ width: "100%", height: "44%", background: "radial-gradient(ellipse, rgba(140,0,255,0.55), rgba(200,243,29,0.18) 55%, transparent 75%)" }} />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
            style={{ width: "84%", height: "32%", background: "linear-gradient(180deg, rgba(24,16,40,0.95), rgba(8,6,16,0.98))", border: "1px solid rgba(140,0,255,0.45)", boxShadow: "0 18px 50px -10px rgba(140,0,255,0.5)" }} />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: "76%", height: "76%", transform: "translate(-50%,-50%) scaleY(0.33)" }}>
            <span className="block h-full w-full animate-spin-slow"
              style={{ background: "repeating-conic-gradient(from 0deg, rgba(200,243,29,0.85) 0deg 3deg, transparent 3deg 16deg)", WebkitMask: "radial-gradient(farthest-side, transparent 70%, #000 72%, #000 80%, transparent 82%)", mask: "radial-gradient(farthest-side, transparent 70%, #000 72%, #000 80%, transparent 82%)" }} />
          </span>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
            style={{ width: "56%", height: "20%", background: "radial-gradient(ellipse at 50% 30%, rgba(180,123,255,0.55), rgba(40,15,80,0.7) 70%)", border: "1px solid rgba(200,243,29,0.3)", boxShadow: "0 0 30px -4px rgba(200,243,29,0.4)" }} />
        </div>

        {/* GLASS SPHERE */}
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" style={{ width: "50%", aspectRatio: "1 / 1" }}>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative h-full w-full">
            <span className="absolute -inset-[18%] rounded-full bg-brand-purple/35 blur-3xl" />
            <span className="absolute -inset-[8%] rounded-full bg-brand-mint/10 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full"
              style={{ background: "radial-gradient(circle at 34% 26%, rgba(180,123,255,0.6), rgba(76,10,143,0.55) 46%, rgba(10,7,20,0.92) 100%)", border: "1px solid rgba(180,123,255,0.4)", boxShadow: "inset 0 0 50px rgba(140,0,255,0.5), inset 0 -10px 40px rgba(0,0,0,0.6), 0 0 60px -12px rgba(140,0,255,0.7)" }}>
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-30">
                <g fill="none" stroke="rgba(220,255,140,0.25)" strokeWidth="0.4">
                  <circle cx="50" cy="50" r="48" /><circle cx="50" cy="50" r="34" />
                  <ellipse cx="50" cy="50" rx="48" ry="20" /><ellipse cx="50" cy="50" rx="20" ry="48" />
                  <line x1="2" y1="50" x2="98" y2="50" /><line x1="50" y1="2" x2="50" y2="98" />
                  <line x1="14" y1="14" x2="86" y2="86" /><line x1="86" y1="14" x2="14" y2="86" />
                </g>
              </svg>
              <div className="absolute inset-0 animate-spin-slow opacity-40"
                style={{ background: "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.12) 12%, transparent 26%, rgba(200,243,29,0.12) 55%, transparent 72%)" }} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: "42%", height: "42%" }}>
                <motion.span animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="block h-full w-full rounded-full blur-md"
                  style={{ background: "radial-gradient(circle, rgba(200,243,29,0.55), rgba(140,0,255,0.4) 60%, transparent)" }} />
              </div>
              <span className="absolute left-[18%] top-[12%] h-[28%] w-[40%] -rotate-12 rounded-full bg-white/25 blur-xl" />
            </div>
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <span className="font-display font-black text-[#C8F31D] drop-shadow-[0_0_24px_rgba(200,243,29,0.7)]"
                style={{ fontSize: "clamp(1.8rem, 6vw, 4rem)" }}>
                B1
              </span>
            </div>
          </motion.div>
        </div>

        {/* SERVICE NODES — text scales on small screens */}
        {NODES.map((n, i) => (
          <motion.div key={n.title}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1, y: [0, i % 2 ? -9 : 9, 0] }}
            transition={{ opacity: { delay: 0.4 + i * 0.12 }, scale: { delay: 0.4 + i * 0.12 }, y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute z-20" style={{ top: n.top, left: n.left }}>
            {n.dir === "b" ? (
              <div className="flex flex-col items-center gap-1">
                {/* scale hex on xs screens */}
                <span className="scale-75 sm:scale-90 lg:scale-100 origin-top">
                  <Hex icon={n.icon} />
                </span>
                <div className="text-center leading-tight">
                  <p className="text-[10px] font-bold text-white sm:text-xs lg:text-sm">{n.title}</p>
                  <p className="text-[9px] text-white/45 sm:text-[10px] lg:text-[11px]">{n.sub}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 sm:gap-2.5">
                <span className="scale-75 sm:scale-90 lg:scale-100 origin-center shrink-0">
                  <Hex icon={n.icon} />
                </span>
                <div className="leading-tight">
                  <p className="whitespace-nowrap text-[10px] font-bold text-white sm:text-xs lg:text-sm">{n.title}</p>
                  <p className="whitespace-nowrap text-[9px] text-white/45 sm:text-[10px] lg:text-[11px]">{n.sub}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* SCROLL DOWN */}
      <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 text-white/40 lg:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.35em]" style={{ writingMode: "vertical-rl" }}>Scroll Down</span>
        <span className="h-12 w-px bg-gradient-to-b from-white/30 to-transparent" />
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} className="text-brand-mint">
          <ChevronDown size={16} />
        </motion.span>
      </div>
    </div>
  );
}