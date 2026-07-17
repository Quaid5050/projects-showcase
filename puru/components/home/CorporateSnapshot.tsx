'use client';
import { Globe, Handshake, Building2, Search, Settings, Truck } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/ui/Container';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import { siteContent } from '@/lib/data/site-content';

const { coreBusiness } = siteContent;

const pillarIcons = [Globe, Handshake, Building2];
const pillarColors = [
  { icon: 'text-teal', bg: 'bg-teal/10', border: 'border-teal/20', dot: 'bg-teal' },
  { icon: 'text-aqua', bg: 'bg-aqua/10', border: 'border-aqua/20', dot: 'bg-aqua' },
  { icon: 'text-copper', bg: 'bg-copper/10', border: 'border-copper/20', dot: 'bg-copper' },
];

const supportCards = [
  { icon: Globe,    title: 'Global Trade Support',          desc: 'International sourcing, import/export coordination, and supply chain review across target markets.' },
  { icon: Search,   title: 'Technology Commercialization',  desc: 'Reviewing commercial pathways for technologies, products, and partnership opportunities.' },
  { icon: Handshake,title: 'Business Matchmaking',          desc: 'Joint ventures, cross-border partnerships, and government relations to accelerate global growth.' },
  { icon: Truck,    title: 'Wholesale & Distribution',      desc: 'Commercial distribution discussions and wholesale channel development for global product categories.' },
  { icon: Settings, title: 'Industrial Machinery',          desc: 'Specialized sourcing and trade support for industrial machinery, equipment, and heavy industry.' },
  { icon: Building2,title: 'Infrastructure Projects',       desc: 'Renewable energy, PPP projects, and investment facilitation for large-scale development.' },
];

export default function CorporateSnapshot() {
  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      <GlobalGridBackground />

      <Container>
        {/* Three Pillars */}
        <SectionHeading
          eyebrow={coreBusiness.eyebrow}
          title={`${coreBusiness.heading.split(' ').slice(0,3).join(' ')} <span class='gradient-text'>${coreBusiness.heading.split(' ').slice(3).join(' ')}</span>`}
          subtitle={coreBusiness.subheading}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 items-stretch">
          {coreBusiness.pillars.map((pillar, i) => {
            const IconComp = pillarIcons[i];
            const color = pillarColors[i];
            return (
              <ScrollReveal key={i} delay={i * 0.12} direction="up" className="h-full">
                <div className={`group relative h-full flex flex-col p-8 rounded-2xl glass border ${color.border} hover:shadow-lg transition-all duration-300 overflow-hidden`}>
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />
                  </div>

                  <div className={`relative z-10 w-14 h-14 flex-shrink-0 rounded-xl ${color.bg} border ${color.border} flex items-center justify-center mb-6`}>
                    <IconComp className={`w-7 h-7 ${color.icon}`} />
                  </div>

                  <h3 className={`relative z-10 font-sora font-bold text-xl text-soft-white mb-3 flex-shrink-0`}>{pillar.title}</h3>
                  <p className="relative z-10 font-inter text-soft-white/55 text-sm leading-relaxed mb-6 flex-grow">{pillar.description}</p>

                  <ul className="relative z-10 space-y-2 mt-auto">
                    {pillar.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-soft-white/60 text-xs font-inter">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${color.dot}`} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* What We Do cards */}
        <SectionHeading
          eyebrow="What We Do"
          title="International Trade <span class='gradient-text'>Solutions</span>"
          subtitle="YUVAAN INTERNATIONAL supports every stage of the global trade process — from sourcing to infrastructure development."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {supportCards.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08} direction="up" className="h-full">
              <div className="group relative h-full flex flex-col p-8 rounded-2xl glass border border-teal/10 hover:border-teal/30 card-hover transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />
                </div>
                <div className="relative z-10 w-12 h-12 flex-shrink-0 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="relative z-10 font-sora font-semibold text-xl text-soft-white mb-3 flex-shrink-0">{item.title}</h3>
                <p className="relative z-10 font-inter text-soft-white/50 text-sm leading-relaxed flex-grow">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
