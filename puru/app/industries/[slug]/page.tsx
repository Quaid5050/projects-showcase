import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, Users, ChevronDown, MessageSquare, Package } from 'lucide-react';
import { industries, getIndustryBySlug } from '@/lib/data/industries';
import { productCategories } from '@/lib/data/products';
import { getIcon } from '@/lib/data/icons';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { safeSolutionRoutes } from '@/lib/data/safe-solution';
import { relatedIndustryMap } from '@/lib/data/related-industries';

export const dynamic = 'force-dynamic';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: 'Not Found' };
  return {
    title: `${industry.title} | Industries | YUVAAN INTERNATIONAL`,
    description: industry.description,
  };
}

export default async function IndustryDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const Icon = getIcon(industry.icon);

  const relatedProducts = productCategories.filter((p) =>
    industry.relatedProducts.includes(p.title)
  );
  const relatedProductIcons = relatedProducts.map((p) => getIcon(p.icon));

  const mappedIndustrySlugs = relatedIndustryMap[slug] ?? [];
  const moreIndustries = mappedIndustrySlugs.length > 0
    ? (mappedIndustrySlugs.map((industrySlug) => industries.find((i) => i.slug === industrySlug)).filter(Boolean) as typeof industries)
    : industries.filter((i) => i.slug !== slug).slice(0, 3);
  const floorSafetyRelevant = [
    'healthcare',
    'education',
    'manufacturing',
    'commercial',
    'government',
    'transportation',
    'real-estate',
    'infrastructure',
    'hospitality-food-service',
    'warehousing-logistics',
    'facilities-management',
  ].includes(slug);

  return (
    <div className="min-h-screen bg-surface-soft">
      <section className="relative pt-28 sm:pt-32 pb-12 overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image src={industry.image} alt="" fill className="object-cover opacity-30" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />
        </div>
        <Container className="relative z-10">
          <ScrollReveal>
            <nav className="mb-8 flex flex-wrap items-center gap-2 font-inter text-xs text-white/50">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
              <span>/</span>
              <span className="min-w-0 break-words text-white/80">{industry.title}</span>
            </nav>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="mb-4 inline-block max-w-full text-xs font-semibold uppercase tracking-[0.14em] text-accent-bright sm:tracking-[0.28em]">{industry.eyebrow}</span>
              <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">{industry.title}</h1>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">{industry.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {industry.tradeTypes.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full text-xs font-inter font-medium bg-white/10 border border-white/15 text-white/85">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact#inquiry-form" className="btn-primary">
                  <MessageSquare className="w-4 h-4" /> Send Inquiry
                </Link>
                <Link href="/industries" className="btn-secondary !text-white !border-white/25 !bg-transparent hover:!bg-white/10">
                  <ArrowLeft className="w-4 h-4" /> All Industries
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-3xl overflow-hidden border border-white/15 bg-white/5 shadow-card-dark">
                <div className="relative aspect-[4/3]">
                  <Image src={industry.image} alt={industry.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
                </div>
                <div className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent-bright flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-white/50 uppercase tracking-widest mb-0.5">Sector</p>
                    <p className="font-sora font-semibold text-white">{industry.eyebrow}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <ScrollReveal direction="left">
              <span className="mb-4 inline-block max-w-full text-xs font-semibold uppercase tracking-[0.14em] text-accent sm:tracking-[0.28em]">The Challenge</span>
              <h2 className="font-sora font-bold text-3xl text-ink mb-5">Operating in {industry.title}</h2>
              <p className="font-inter text-steel-grey leading-relaxed">{industry.fullDescription}</p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="surface-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-accent" />
                  <p className="font-inter text-xs text-steel-grey uppercase tracking-widest">Who We Serve</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {industry.whoWeServe.map((w) => (
                    <span key={w} className="text-xs font-inter text-steel-grey bg-surface-soft px-2.5 py-1 rounded-full border border-surface-border">{w}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface-soft">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <span className="mb-4 inline-block max-w-full text-xs font-semibold uppercase tracking-[0.14em] text-accent sm:tracking-[0.28em]">Our Solution</span>
              <h2 className="font-sora font-bold text-3xl md:text-4xl text-ink mb-4">What We <span className="gradient-text">Support</span></h2>
              <p className="font-inter text-steel-grey text-base leading-relaxed">Here is how YUVAAN INTERNATIONAL supports businesses in the {industry.title} sector.</p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <ul className="space-y-4">
                {industry.whatWeSupport.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 surface-card p-4">
                    <div className="w-6 h-6 rounded-full bg-accent-soft text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <p className="font-inter text-steel-grey text-sm leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {floorSafetyRelevant && (
        <section className="py-12 sm:py-16 bg-white">
          <Container>
            <div className="surface-card overflow-hidden grid lg:grid-cols-[1fr_0.8fr] gap-0 border-accent/20">
              <div className="p-6 sm:p-8">
                <span className="mb-4 inline-block max-w-full text-xs font-semibold uppercase tracking-[0.14em] text-accent sm:tracking-[0.28em]">Floor Safety Solutions</span>
                <h2 className="font-sora font-bold text-2xl sm:text-3xl text-ink mb-4">
                  Safe Solution® for {industry.title} Facilities
                </h2>
                <p className="font-inter text-steel-grey leading-relaxed mb-6">
                  Facilities in this sector may benefit from a structured floor-safety program that combines suitable-surface assessment, test-area application, invisible anti-slip treatment, Clean Step™ low-residue maintenance, scheduled inspection, and CRS™ rejuvenation where required.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={safeSolutionRoutes.detail} className="btn-primary">
                    Explore Safe Solution® <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href={safeSolutionRoutes.floorAssessment} className="btn-secondary">
                    Request Assessment <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[240px] border-t border-surface-border lg:border-l lg:border-t-0">
                <Image src="/images/products/safe-solution.jpg" alt="Safe Solution floor safety application context" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
            </div>
          </Container>
        </section>
      )}

      {relatedProducts.length > 0 && (
        <section className="section-pad bg-surface-soft">
          <Container>
            <ScrollReveal>
              <span className="mb-4 inline-block max-w-full text-xs font-semibold uppercase tracking-[0.14em] text-accent sm:tracking-[0.28em]">Applications</span>
              <h2 className="font-sora font-bold text-2xl sm:text-3xl text-ink mb-8">Relevant <span className="gradient-text">Product Categories</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
              {relatedProducts.map((p, i) => {
                const ProdIcon = relatedProductIcons[i];
                return (
                  <ScrollReveal key={p.slug} delay={i * 0.08} className="h-full">
                    <Link href={`/products/${p.slug}`} className="group h-full flex flex-col surface-card p-6 card-hover">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
                          <ProdIcon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-inter text-accent uppercase tracking-widest">{p.category}</span>
                      </div>
                      <h3 className="font-sora font-semibold text-ink text-lg mb-2 group-hover:text-accent transition-colors flex-shrink-0">{p.title}</h3>
                      <p className="font-inter text-steel-grey text-sm leading-relaxed flex-grow mb-4">{p.shortDescription}</p>
                      <span className="inline-flex items-center gap-1.5 text-accent text-xs font-inter font-semibold mt-auto">
                        View Category <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
            <div className="mt-8 surface-card p-6">
              <div className="flex items-center gap-2 mb-3">
                <Package className="w-4 h-4 text-accent" />
                <p className="font-inter text-xs text-steel-grey uppercase tracking-widest">Trade Types Supported</p>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {industry.tradeTypes.map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="font-inter text-steel-grey text-xs">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {industry.faqs.length > 0 && (
        <section className="section-pad bg-white">
          <Container size="md">
            <ScrollReveal>
              <h2 className="mb-8 text-center font-sora text-2xl font-bold text-ink sm:mb-12 sm:text-3xl">Frequently Asked <span className="gradient-text">Questions</span></h2>
            </ScrollReveal>
            <div className="space-y-4">
              {industry.faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <details className="group surface-card overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="font-sora font-semibold text-ink text-base pr-4">{faq.q}</span>
                      <ChevronDown className="w-4 h-4 text-accent flex-shrink-0 group-open:rotate-180 transition-transform duration-300" />
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <p className="font-inter text-steel-grey text-sm leading-relaxed border-t border-surface-border pt-4">{faq.a}</p>
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-12 sm:py-16 bg-surface-soft">
        <Container>
          <ScrollReveal>
            <h2 className="font-sora font-bold text-2xl text-ink mb-8">Explore More <span className="gradient-text">Industries</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {moreIndustries.map((ind, i) => {
              const IndIcon = getIcon(ind.icon);
              return (
                <ScrollReveal key={ind.slug} delay={i * 0.08} className="h-full">
                  <Link href={`/industries/${ind.slug}`} className="group h-full flex flex-col surface-card p-6 card-hover">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
                        <IndIcon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-inter text-accent uppercase tracking-widest">{ind.eyebrow}</span>
                    </div>
                    <h3 className="font-sora font-semibold text-ink text-lg mb-2 group-hover:text-accent transition-colors flex-shrink-0">{ind.title}</h3>
                    <p className="font-inter text-steel-grey text-sm leading-relaxed flex-grow mb-4">{ind.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-accent text-xs font-inter font-semibold mt-auto">
                      Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-ink">
        <Container size="sm">
          <div className="text-center">
            <ScrollReveal>
              <h2 className="font-sora font-bold text-3xl md:text-4xl text-white mb-4">
                Operating in the <span className="text-accent-bright">{industry.title}</span> sector?
              </h2>
              <p className="font-inter text-white/70 text-base mb-8 leading-relaxed">Submit an inquiry and our team will identify relevant trade connections, sourcing opportunities, and partnerships.</p>
              <Link href="/contact#inquiry-form" className="btn-primary">
                Send Industry Inquiry <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
