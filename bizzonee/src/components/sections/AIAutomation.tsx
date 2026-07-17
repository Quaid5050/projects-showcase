"use client";

import { motion } from "framer-motion";
import { Brain, Database, Users, FileText, Mail, DollarSign, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import NeonButton from "@/components/ui/NeonButton";

const LEFT = [
  { icon: Database, label: "CRM", y: 22 },
  { icon: Users, label: "Leads", y: 50 },
  { icon: FileText, label: "Web Forms", y: 78 },
];
function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.413A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="#25D366"/>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="white"/>
    </svg>
  );
}

const RIGHT = [
  { icon: WhatsAppIcon, label: "WhatsApp", y: 22 },
  { icon: Mail, label: "Email", y: 50 },
  { icon: DollarSign, label: "Sales", y: 78 },
];

function Line({ x2, y2, delay }: { x2: number; y2: number; delay: number }) {
  const d = `M50 50 Q ${(50 + x2) / 2} ${y2 > 50 ? y2 - 6 : y2 + 6}, ${x2} ${y2}`;
  const id = `p-${x2}-${y2}`;
  return (
    <>
      <path id={id} d={d} fill="none" stroke="url(#g)" strokeWidth="0.5" opacity="0.5" />
      <circle r="0.9" fill="#C8F31D">
        <animateMotion dur="2.6s" begin={`${delay}s`} repeatCount="indefinite" path={d} />
      </circle>
    </>
  );
}

export default function AIAutomation() {
  return (
    <section id="ai" className="relative py-24 sm:py-28">
      <div className="section">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionLabel>AI & Automation</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Work <span className="text-gradient">Smarter</span>.<br />Scale <span className="text-gradient">Faster</span>.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/90">
              Our AI-powered automation systems handle repetitive tasks, nurture leads, and keep your business running on autopilot.
            </p>
            <div className="mt-8">
              <NeonButton href="#contact" variant="primary">Explore Automation <ArrowRight size={16} /></NeonButton>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto h-[360px] w-full max-w-2xl sm:h-[420px]">
              {/* energy lines */}
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 hidden h-full w-full sm:block">
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8C00FF" />
                    <stop offset="100%" stopColor="#C8F31D" />
                  </linearGradient>
                </defs>
                {LEFT.map((n, i) => <Line key={n.label} x2={15} y2={n.y} delay={i * 0.5} />)}
                {RIGHT.map((n, i) => <Line key={n.label} x2={85} y2={n.y} delay={i * 0.5 + 0.3} />)}
              </svg>

              {/* brain */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative grid h-32 w-32 place-items-center sm:h-40 sm:w-40">
                  <span className="absolute inset-0 rounded-full bg-brand-purple/30 blur-2xl animate-pulse-soft" />
                  <span className="absolute inset-2 rounded-full border border-brand-mint/30 animate-spin-slow" />
                  <span className="absolute inset-6 rounded-full border border-brand-purple/40 animate-spin-slow [animation-direction:reverse]" />
                  <motion.span animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="relative grid h-20 w-20 place-items-center rounded-full glass-strong text-brand-mint shadow-glow-mint sm:h-24 sm:w-24">
                    <Brain size={40} />
                  </motion.span>
                </div>
              </div>

              {/* nodes */}
              {LEFT.map((n, i) => (
                <motion.div key={n.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.12 }}
                  className="absolute left-0 flex -translate-y-1/2 items-center gap-2 rounded-xl glass-strong px-3 py-2" style={{ top: `${n.y}%` }}>
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-mint/10 text-brand-mint"><n.icon size={15} /></span>
                  <span className="text-xs font-semibold text-white">{n.label}</span>
                </motion.div>
              ))}
              {RIGHT.map((n, i) => (
                <motion.div key={n.label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.12 }}
                  className="absolute right-0 flex -translate-y-1/2 items-center gap-2 rounded-xl glass-strong px-3 py-2" style={{ top: `${n.y}%` }}>
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-purple/15 text-brand-purple-light"><n.icon size={15} /></span>
                  <span className="text-xs font-semibold text-white">{n.label}</span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}