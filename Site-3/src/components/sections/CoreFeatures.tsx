import React from "react"
import Link from "next/link"
import { features } from "@/data/features"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export const CoreFeatures = () => {
  return (
    <section className="py-24 md:py-36 bg-[#020509] relative overflow-hidden cinema-grid" id="features">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      {/* Top divider */}
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection animation="dramatic" className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-emerald-500/70 mb-4">
            Platform Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Everything to{" "}
            <span className="gradient-text">Dominate</span>{" "}
            Your Market
          </h2>
          <p className="text-lg text-slate-400">
            A complete arsenal of tools to own your orders, understand your customers, and scale without limits.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.id}
              delay={index * 0.08}
              animation="fade-up"
              className={index === 6 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <div className="h-full p-8 rounded-2xl border border-white/6 bg-white/2 backdrop-blur-sm flex flex-col group hover:border-emerald-500/25 hover:bg-white/4 hover:shadow-[0_0_40px_rgba(0,255,136,0.07)] transition-all duration-500 relative overflow-hidden">
                {/* Hover glow corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />

                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] group-hover:scale-110 transition-all duration-300 relative z-10">
                  <feature.icon size={26} />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{feature.title}</h3>

                {feature.headline && (
                  <p className="text-emerald-400 text-sm font-semibold mb-2 relative z-10">{feature.headline}</p>
                )}

                <p className="text-slate-400 mb-6 flex-grow text-sm leading-relaxed relative z-10">{feature.description}</p>

                <ul className="space-y-2.5 mb-6 relative z-10">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={feature.link}
                  className="inline-flex items-center gap-2 text-sm text-emerald-400 font-semibold hover:text-emerald-300 mt-auto group/link relative z-10"
                >
                  Explore Feature
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="divider-glow absolute bottom-0 left-0 right-0" />
    </section>
  )
}
