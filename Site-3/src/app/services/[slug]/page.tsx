import React from "react"
import { notFound } from "next/navigation"
import { features } from "@/data/features"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { CTA } from "@/components/sections/CTA"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export function generateStaticParams() {
  return features.map((feature) => ({
    slug: feature.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const feature = features.find((f) => f.id === resolvedParams.slug)
  if (!feature) return { title: "Service Not Found" }

  return {
    title: `${feature.title} | Services | Merchant Orders™`,
    description: feature.description,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const feature = features.find((f) => f.id === resolvedParams.slug)

  if (!feature) {
    notFound()
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-[#020509] text-white relative overflow-hidden cinema-grid">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-emerald-600/8 blur-[150px]" />
        </div>
        <div className="divider-glow absolute bottom-0 left-0 right-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="dramatic">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 mb-8 shadow-[0_0_30px_rgba(0,255,136,0.15)]">
                <feature.icon size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-[-0.03em] leading-[0.95]">
                {feature.title}
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                {feature.description}
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-black font-black border-0 shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:shadow-[0_0_50px_rgba(0,255,136,0.5)] transition-all duration-300">
                  Get Started →
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#040810] relative">
        <div className="divider-glow absolute top-0 left-0 right-0" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-emerald-500/4 blur-[120px] pointer-events-none -translate-y-1/2" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <AnimatedSection animation="slide-right">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                Why choose our {feature.title} service?
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                We don't just provide software; we provide a complete service experience. Our team works with you to implement, configure, and optimize {feature.title.toLowerCase()} specifically for your restaurant's operational needs.
              </p>

              <ul className="space-y-3 mb-8">
                {feature.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/2 hover:border-emerald-500/20 hover:bg-white/4 transition-all duration-200">
                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2} animation="slide-left">
              <div className="relative w-full max-w-lg mx-auto bg-[#0a0f1a] rounded-3xl border border-white/6 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_30px_rgba(0,255,136,0.05)] group">
                <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
                <img
                  src={`/images/feature-page-${feature.id}.webp`}
                  alt={feature.title}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#020509] border-t border-white/5 relative">
        <div className="divider-glow absolute top-0 left-0 right-0" />

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <AnimatedSection animation="dramatic" className="max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-emerald-500/70 mb-4">
              Our Process
            </span>
            <h2 className="text-4xl font-black text-white mb-12 tracking-tight">
              How We Make It <span className="gradient-text">Happen</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-4">
              {[
                { step: "01", title: "Consultation", desc: "We analyze your requirements and goals." },
                { step: "02", title: "Implementation", desc: "We set up and fully customize the tools." },
                { step: "03", title: "Optimization", desc: "We help you grow and improve post-launch." },
              ].map((process, i) => (
                <div key={i} className="rounded-2xl border border-white/6 bg-white/2 p-6 text-left hover:border-emerald-500/20 hover:bg-white/4 transition-all duration-300">
                  <span className="text-4xl font-black text-white/5 mb-4 block">{process.step}</span>
                  <h3 className="text-lg font-black text-white mb-2">{process.title}</h3>
                  <p className="text-slate-400 text-sm">{process.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </>
  )
}
