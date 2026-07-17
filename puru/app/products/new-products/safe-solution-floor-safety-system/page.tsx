import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Droplets, Footprints } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  DocumentsGrid,
  FinalConversionPanels,
  MetricsAndBenefitsSection,
  ProcessTimeline,
  ProductSystemCard,
  SafetyNotice,
} from '@/components/safe-solution/SafetyComponents';
import {
  floorCareProcess,
  productClaimFootnote,
  productSystem,
  safeSolutionRoutes,
  safeSolutionSummary,
  suitableSurfaces,
  targetIndustries,
} from '@/lib/data/safe-solution';

export const metadata: Metadata = {
  title: 'Safe Solution® Floor Safety System | Yuvaan International',
  description:
    'Explore the Safe Solution® commercial floor-safety system, including anti-slip surface treatment, CRS™ rejuvenation, Clean Step™ maintenance, and distributor opportunities.',
  alternates: { canonical: '/products/new-products/safe-solution-floor-safety-system' },
  openGraph: {
    title: 'Safe Solution® Floor Safety System | Yuvaan International',
    description:
      'Commercial floor-safety system with anti-slip surface treatment, CRS™ rejuvenation, Clean Step™ maintenance, and distributor opportunities.',
  },
};

export default function SafeSolutionDetailPage() {
  return (
    <div className="min-h-screen bg-surface-soft">
      <section className="relative overflow-hidden bg-ink pb-10 pt-24 sm:pb-12 sm:pt-32">
        <div className="absolute inset-0">
          <Image src="/images/products/safe-solution.jpg" alt="" fill className="object-cover opacity-25" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/75" />
        </div>
        <Container className="relative z-10">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <ScrollReveal>
              <nav className="mb-6 flex flex-wrap items-center gap-2 font-inter text-xs text-white/50 sm:mb-8">
                <Link href="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <Link href="/products" className="hover:text-white">Products</Link>
                <span>/</span>
                <Link href={safeSolutionRoutes.newProducts} className="hover:text-white">New Products</Link>
              </nav>
              <span className="inline-flex px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent-bright text-xs font-inter font-bold uppercase tracking-[0.25em] mb-5">
                New Product
              </span>
              <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
                Safe Solution® <span className="text-accent-bright">Floor Safety System</span>
              </h1>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
                {safeSolutionSummary.subtitle}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={safeSolutionRoutes.floorAssessment} className="btn-primary w-full sm:w-auto">
                  Request a Floor Assessment <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={safeSolutionRoutes.distributor} className="btn-secondary w-full !border-white/25 !bg-transparent !text-white hover:!bg-white/10 sm:w-auto">
                  Become a Distributor <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-3xl overflow-hidden border border-white/15 bg-white/5 shadow-card-dark">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/products/safe-solution.jpg"
                    alt="Safe Solution floor safety application context"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-3 sm:p-5">
                  {productSystem.map((item) => (
                    <div key={item.name} className="rounded-xl bg-white/10 border border-white/10 p-3">
                      <p className="font-sora font-bold text-white text-sm">{item.name}</p>
                      <p className="font-inter text-white/60 text-xs mt-2 leading-relaxed">{item.shortLabel}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Complete Floor Safety System"
            title="A Complete <span class='gradient-text'>Floor Safety System</span>"
            subtitle="Safe Solution®, CRS™, and Clean Step™ work together as a complete floor-safety program, covering initial anti-slip treatment, ongoing low-residue cleaning, inspection, maintenance, and traction rejuvenation."
            className="mb-10"
          />
          <div className="grid lg:grid-cols-3 gap-5 items-stretch">
            {productSystem.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 0.08} className="h-full">
                <ProductSystemCard item={item} index={index} detailed />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <h2 className="font-sora font-bold text-3xl md:text-4xl text-ink mb-5">How Safe Solution® Works</h2>
              <p className="font-inter text-steel-grey leading-relaxed mb-6">
                Safe Solution® is an invisible, non-coating micro-etch treatment designed for suitable hard mineral surfaces. It creates microscopic channels in the surface that help disperse oils and water from underfoot, supporting more consistent contact between footwear and the floor.
              </p>
              <SafetyNotice tone="teal">
                Illustrative surface-treatment diagram. Actual results depend on the surface, application, testing conditions, contamination, and maintenance.
              </SafetyNotice>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="surface-card p-6">
                  <Droplets className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-sora font-bold text-ink mb-3">Untreated surface</h3>
                  <p className="font-inter text-steel-grey text-sm leading-relaxed">Liquid contamination remains between the floor and footwear.</p>
                </div>
                <div className="surface-card p-6 border-accent/20">
                  <Footprints className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-sora font-bold text-ink mb-3">Treated surface</h3>
                  <p className="font-inter text-steel-grey text-sm leading-relaxed">Microscopic channels help disperse contamination and improve surface contact.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface-soft">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="font-sora font-bold text-3xl text-ink mb-6">Suitable Surfaces</h2>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {suitableSurfaces.map((surface) => (
                  <div key={surface} className="flex items-start gap-3 surface-card p-4">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="font-inter text-steel-grey text-sm">{surface}</span>
                  </div>
                ))}
              </div>
              <SafetyNotice tone="copper">
                Surface composition, finish, sealants, previous coatings, and condition can affect results. A test area must be completed before full application.
              </SafetyNotice>
            </div>
            <div>
              <h2 className="font-sora font-bold text-3xl text-ink mb-6">Performance and Testing</h2>
              <p className="font-inter text-steel-grey leading-relaxed mb-5">
                Performance must be reviewed against the applicable surface, test area, maintenance conditions, and supporting technical documentation.
              </p>
              <SafetyNotice>
                Performance figures are surface- and test-specific. Supporting technical documentation should be reviewed for the applicable use case.
              </SafetyNotice>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="font-sora font-bold text-3xl text-ink mb-5">Surface Appearance and Test Area</h2>
              <SafetyNotice tone="copper">
                Treatment may cause temporary whitening or efflorescence that normally reduces over time. A slight dulling effect may occur on some surfaces. A test area is completed before full application to identify any potential change in appearance.
              </SafetyNotice>
            </div>
            <div>
              <h2 className="font-sora font-bold text-3xl text-ink mb-5">Maintenance and Rejuvenation</h2>
              <p className="font-inter text-steel-grey leading-relaxed">
                Routine cleaning does not always prevent the gradual buildup of film and residue from cleaning products. When buildup reduces traction, the surface may require CRS™ cleaning and rejuvenation. Most commercial applications may require assessment or rejuvenation within approximately one to three years, depending on traffic, contamination, surface condition, and maintenance practices.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <ProcessTimeline items={floorCareProcess} />
          </div>
        </Container>
      </section>

      <MetricsAndBenefitsSection />

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            eyebrow="Clean Step™ Multi-Purpose Cleaner"
            title="Superior Low-Residue Cleaning for <span class='gradient-text'>Safer Floors</span>"
            subtitle="Clean Step™ supports ongoing floor appearance, cleanliness, and safety as part of the complete program."
            className="mb-10"
          />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ['Super Low-Residue Formula', 'Many commercial cleaners can leave residue that attracts and holds dirt, affecting appearance and traction. Clean Step™ is designed as a highly effective, low-residue cleaner to support cleaner and safer floor surfaces.'],
              ['Optimal pH-Neutral Strength', 'Safe Solution® treated floors should be maintained using a high-quality, user-friendly cleaner that does not leave significant residue. Clean Step™ is designed to support the ongoing floor-safety program.'],
              ['Commercial Cost Efficiency', 'Regular use of one versatile commercial cleaner may reduce the need to stock multiple specialized products. Commercial and distributor pricing can be provided through an approved quotation.'],
            ].map(([title, copy]) => (
              <div key={title} className="surface-card p-6">
                <h3 className="font-sora font-bold text-ink text-xl mb-3">{title}</h3>
                <p className="font-inter text-steel-grey text-sm leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface-soft">
        <Container>
          <SectionHeading
            eyebrow="Floor Care Safety Program"
            title="The Benefits of a Structured Program <span class='gradient-text'>Without Unnecessary Lock-In</span>"
            subtitle="The Floor Care Safety Program combines treatment, approved cleaning, scheduled inspections, written documentation, and CRS™ rejuvenation to help commercial floors remain at maximum effectiveness."
            className="mb-10"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ['Clear Commercial Terms', 'Program scope, cancellation, renewal, service intervals, and customer responsibilities should be confirmed in the customer agreement.'],
              ['Scheduled Inspection and Rejuvenation', 'Commercial protection and maintenance intervals vary. Scheduled inspections help determine whether cleaning, maintenance, or CRS™ rejuvenation is required.'],
              ['Annual Program Option', 'Where available, customers may select an annual inspection and rejuvenation program for maximum floor-care consistency.'],
              ['Complete Floor-Safety Support', 'The program may include written inspections, Safe Solution® treatment, Clean Step™ maintenance cleaner, scheduled CRS™ rejuvenation, maintenance guidance, commercial pricing, and follow-up documentation.'],
            ].map(([title, copy]) => (
              <div key={title} className="surface-card p-6">
                <h3 className="font-sora font-bold text-ink text-lg mb-3">{title}</h3>
                <p className="font-inter text-steel-grey text-sm leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Target Industries"
            title="Where Floor-Safety Programs <span class='gradient-text'>Fit Best</span>"
            subtitle="Safe Solution® is relevant to sites where hard surfaces, traffic, maintenance, and documentation can affect operational safety."
            className="mb-10"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {targetIndustries.map((industry) => (
              <Link key={industry.title} href={industry.href} className="surface-card p-5 card-hover transition-all">
                <p className="font-sora font-semibold text-ink">{industry.title}</p>
                <span className="inline-flex items-center gap-1 text-accent text-xs font-inter font-semibold mt-4">
                  View route <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface-soft">
        <Container>
          <SectionHeading
            eyebrow="Technical Documents"
            title="Prepared Document Area <span class='gradient-text'>for Approved Files</span>"
            subtitle="Technical documentation is available to qualified customers and distribution partners upon request."
            className="mb-10"
          />
          <DocumentsGrid />
          <p className="font-inter text-steel-grey/70 text-xs leading-relaxed mt-6">{productClaimFootnote}</p>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <FinalConversionPanels />
        </Container>
      </section>
    </div>
  );
}
