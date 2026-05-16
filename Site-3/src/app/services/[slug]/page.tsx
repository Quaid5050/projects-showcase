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
    title: `${feature.title} | Services | Merchant Orders`,
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
      <section className="pt-32 pb-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-emerald-600/10 blur-[150px]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-emerald-500/20 text-emerald-400 mb-8 border border-emerald-500/30">
                <feature.icon size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                {feature.title}
              </h1>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                {feature.description}
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white border-0">
                  Get Started
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why choose our {feature.title} service?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We don't just provide software; we provide a complete service experience. Our team works with you to implement, configure, and optimize the {feature.title.toLowerCase()} specifically for your restaurant's operational needs.
              </p>
              
              <ul className="space-y-4 mb-8">
                {feature.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 size={24} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-800 font-medium text-lg">{bullet}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2} animation="scale-up">
              <div className="relative w-full max-w-lg mx-auto bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden flex items-center justify-center shadow-xl group">
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

      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Process
            </h2>
            <div className="grid sm:grid-cols-3 gap-8 mt-12">
              {[
                { step: "01", title: "Consultation", desc: "We analyze your requirements." },
                { step: "02", title: "Implementation", desc: "We set up and customize the tools." },
                { step: "03", title: "Optimization", desc: "We help you grow post-launch." }
              ].map((process, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left">
                  <span className="text-3xl font-black text-emerald-100 mb-4 block">{process.step}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{process.title}</h3>
                  <p className="text-slate-600">{process.desc}</p>
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
