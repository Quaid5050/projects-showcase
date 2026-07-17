import type { Metadata } from 'next';
import { Target, Eye, Globe, Search, Handshake, Truck, Settings, Building2, Shield, Star, TrendingUp, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { siteContent } from '@/lib/data/site-content';
import { company, markets, targetMarketCountLabel } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'About YUVAAN INTERNATIONAL | International Trade Company',
  description: 'Yuvaan International supports cross-border product sourcing, commercial partnerships, market development, industrial solutions, and international business inquiries.',
};

const { about, globalPresence, whyYuvaan } = siteContent;

const whatWeDoIcons = [Globe, Search, Handshake, Building2, Truck, Settings];
const valueIcons = [Shield, Eye, Star, Globe, Handshake, TrendingUp];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface-soft">
      <section className="relative pt-28 sm:pt-32 pb-12 overflow-hidden bg-ink">
        <Container className="relative z-10">
          <ScrollReveal>
            <span className="inline-block text-xs tracking-[0.28em] uppercase text-accent-bright font-semibold mb-4">{about.eyebrow}</span>
            <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4 max-w-3xl">
              About <span className="text-accent-bright">YUVAAN INTERNATIONAL</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
              {about.subheading}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-xs tracking-[0.28em] uppercase text-accent font-semibold mb-4">Company Overview</span>
                <h2 className="font-sora font-bold text-2xl sm:text-4xl text-ink leading-tight mb-6">
                  A Canadian Gateway for <span className="gradient-text">Global Markets</span>
                </h2>
                <p className="font-inter text-steel-grey text-lg leading-relaxed mb-6">{about.overview}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 p-4 rounded-xl bg-surface-soft border border-surface-border">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-inter text-xs text-steel-grey uppercase tracking-widest">Headquarters</p>
                      <p className="font-sora font-semibold text-ink">{company.locationDisplay}</p>
                    </div>
                  </div>
                  <div className="sm:ml-6 sm:pl-6 sm:border-l border-surface-border">
                    <p className="font-inter text-xs text-steel-grey uppercase tracking-widest">Market Focus</p>
                    <p className="font-sora font-bold text-accent text-xl">{targetMarketCountLabel}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {['Global Trading', 'Technology Commercialization', 'Infrastructure Projects', 'Wholesale Distribution', 'Business Matchmaking', 'Investment Facilitation'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-steel-grey text-sm font-inter">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-1 gap-5">
                <div className="surface-card p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                      <Target className="w-5 h-5" />
                    </div>
                    <h3 className="font-sora font-semibold text-ink text-lg">Mission</h3>
                  </div>
                  <p className="font-inter text-steel-grey text-sm leading-relaxed">{about.mission}</p>
                </div>
                <div className="surface-card p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                      <Eye className="w-5 h-5" />
                    </div>
                    <h3 className="font-sora font-semibold text-ink text-lg">Vision</h3>
                  </div>
                  <p className="font-inter text-steel-grey text-sm leading-relaxed">{about.vision}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface-soft">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="What <span class='gradient-text'>We Do</span>"
            subtitle="A comprehensive approach to international trade, technology commercialization, and project development."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {about.whatWeDo.map((item, i) => {
              const Icon = whatWeDoIcons[i];
              return (
                <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                  <div className="group h-full flex flex-col surface-card p-7 card-hover">
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-accent-soft text-accent flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-sora font-semibold text-ink text-lg mb-3 flex-shrink-0">{item.title}</h3>
                    <p className="font-inter text-steel-grey text-sm leading-relaxed flex-grow">{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            eyebrow={globalPresence.eyebrow}
            title={`International <span class='gradient-text'>Market Development</span>`}
            subtitle="Yuvaan International distinguishes its Canada base from target markets and opportunities currently under evaluation."
            className="mb-14"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {markets.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.05} className="h-full">
                <div className={`h-full flex flex-col surface-card p-5 text-center card-hover ${i === 0 ? 'border-accent/30 bg-accent-soft/30' : ''}`}>
                  <p className={`font-sora font-bold text-base mb-1 ${i === 0 ? 'text-accent' : 'text-ink'}`}>{m.name}</p>
                  <p className="font-inter text-steel-grey text-xs leading-snug">{m.note}</p>
                  {i === 0 && <span className="mt-2 text-[10px] font-inter text-accent uppercase tracking-widest">HQ</span>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface-soft">
        <Container>
          <SectionHeading
            eyebrow={whyYuvaan.eyebrow}
            title={`Your Trusted Canadian Gateway to <span class='gradient-text'>Global Markets</span>`}
            subtitle={whyYuvaan.subheading}
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-stretch">
            {whyYuvaan.reasons.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.06} className="h-full">
                <div className="group h-full flex flex-col surface-card p-6 card-hover">
                  <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-accent-soft text-accent flex items-center justify-center mb-4">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-sora font-semibold text-ink text-sm mb-2 flex-shrink-0">{v.title}</h3>
                  <p className="font-inter text-steel-grey text-xs leading-relaxed flex-grow">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            title="What <span class='gradient-text'>Drives Us</span>"
            subtitle="The principles that guide our approach to international trade, project development, and business relationships."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {about.values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <ScrollReveal key={i} delay={i * 0.08} className="h-full">
                  <div className="group h-full flex flex-col items-center text-center surface-card p-7 card-hover">
                    <div className="w-12 h-12 flex-shrink-0 mx-auto mb-4 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-sora font-semibold text-ink text-base mb-2 flex-shrink-0">{v.title}</h3>
                    <p className="font-inter text-steel-grey text-xs leading-relaxed flex-grow">{v.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-ink">
        <Container size="md">
          <div className="text-center">
            <ScrollReveal>
              <h2 className="font-sora font-bold text-2xl sm:text-4xl text-white mb-4">
                Ready to <span className="text-accent-bright">Build Something Extraordinary?</span>
              </h2>
              <p className="font-inter text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Whether you&apos;re a manufacturer, investor, government agency, or business partner — submit your inquiry and our team will respond promptly.
              </p>
              <Link href="/contact#inquiry-form" className="btn-primary">
                Submit Your Business Inquiry <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
