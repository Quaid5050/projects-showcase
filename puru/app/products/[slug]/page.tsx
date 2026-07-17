import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, ChevronDown, MessageSquare, Tag, Users } from 'lucide-react';
import { productCategories, getProductBySlug } from '@/lib/data/products';
import { industries } from '@/lib/data/industries';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { relatedProductMap } from '@/lib/data/related-products';

export const dynamic = 'force-dynamic';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Not Found' };
  return {
    title: `${product.title} | Products | YUVAAN INTERNATIONAL`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const mappedRelated = (relatedProductMap[slug] ?? [])
    .map((relatedSlug) => productCategories.find((p) => p.slug === relatedSlug))
    .filter(Boolean) as typeof productCategories;
  const related = mappedRelated.length > 0
    ? mappedRelated.slice(0, 4)
    : productCategories
      .filter((p) => p.slug !== slug && p.relatedIndustries.some((r) => product.relatedIndustries.includes(r)))
      .slice(0, 4);
  const industryLinks = product.relatedIndustries
    .map((name) => {
      const normalized = name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const match = industries.find((industry) =>
        industry.slug === normalized ||
        industry.title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === normalized
      );
      return match ? { label: name, href: `/industries/${match.slug}` } : null;
    })
    .filter(Boolean) as Array<{ label: string; href: string }>;

  return (
    <div className="min-h-screen bg-surface-soft">
      <section className="relative pt-28 sm:pt-32 pb-12 overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image src={product.image} alt="" fill className="object-cover opacity-25" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/75" />
        </div>
        <Container className="relative z-10">
          <ScrollReveal>
            <nav className="flex flex-wrap items-center gap-2 text-xs text-white/50 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>/</span>
              <span className="text-white/80">{product.title}</span>
            </nav>
          </ScrollReveal>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center">
            <ScrollReveal>
              {product.tag && (
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-accent/20 border border-accent/30 text-accent-bright mb-4">
                  {product.tag}
                </span>
              )}
              <span className="block text-xs tracking-[0.28em] uppercase text-white/45 font-semibold mb-3">{product.eyebrow}</span>
              <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-5">{product.title}</h1>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">{product.fullDescription}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {product.tradeTypes.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/85">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={`/contact?product=${encodeURIComponent(product.slug)}#inquiry-form`} className="btn-primary">
                  <MessageSquare className="w-4 h-4" /> Request a Quote
                </Link>
                <Link href="/products" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all">
                  <ArrowLeft className="w-4 h-4" /> All Products
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-3xl overflow-hidden border border-white/15 bg-white/5 shadow-card-dark">
                <div className="relative aspect-[4/3]">
                  <Image src={product.image} alt={product.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="surface-card p-6">
              <p className="text-xs uppercase tracking-widest text-steel-grey mb-2">Category</p>
              <p className="font-sora font-semibold text-ink text-lg">{product.category}</p>
            </div>
            <div className="surface-card p-6 lg:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-accent" />
                <p className="text-xs uppercase tracking-widest text-steel-grey">Who This Is For</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.audience.map((a) => (
                  <span key={a} className="text-xs text-ink-muted bg-surface-muted px-2.5 py-1 rounded-full border border-surface-border">{a}</span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-12 sm:pb-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <ScrollReveal>
              <h2 className="font-sora font-bold text-2xl sm:text-3xl text-ink mb-3">Key Features &amp; Support Areas</h2>
              <p className="text-steel-grey leading-relaxed mb-6">
                Practical commercial capabilities within this category. Technical documentation and specifications are available upon request where applicable.
              </p>
              <ul className="space-y-3">
                {product.keyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 surface-card p-4">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-ink-muted leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="surface-card p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-accent" />
                  <h3 className="font-sora font-semibold text-ink">Applications &amp; Related Industries</h3>
                </div>
                <p className="text-sm text-steel-grey mb-4 leading-relaxed">
                  Explore related industry contexts where this category is commonly discussed.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {industryLinks.length > 0 ? industryLinks.map((ind) => (
                    <Link key={ind.href} href={ind.href} className="text-xs font-semibold text-accent bg-accent-soft px-3 py-1.5 rounded-full hover:bg-accent hover:text-white transition-colors">
                      {ind.label}
                    </Link>
                  )) : product.relatedIndustries.map((name) => (
                    <span key={name} className="text-xs text-ink-muted bg-surface-muted px-3 py-1.5 rounded-full border border-surface-border">{name}</span>
                  ))}
                </div>
                <div className="rounded-2xl bg-surface-muted border border-surface-border p-5">
                  <h3 className="font-sora font-semibold text-ink mb-2">Available Technical Information</h3>
                  <p className="text-sm text-steel-grey leading-relaxed mb-4">
                    Product data sheets, safety documentation, and commercial details are available upon request. We do not publish unverified downloads or placeholder PDFs.
                  </p>
                  <Link href={`/contact?product=${encodeURIComponent(product.slug)}#inquiry-form`} className="btn-secondary !text-xs">
                    Request Documents
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {product.faqs.length > 0 && (
        <section className="py-12 sm:py-16 bg-white">
          <Container size="md">
            <h2 className="font-sora font-bold text-2xl sm:text-3xl text-ink text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {product.faqs.map((faq) => (
                <details key={faq.q} className="group surface-card overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="font-sora font-semibold text-ink pr-4">{faq.q}</span>
                    <ChevronDown className="w-4 h-4 text-accent flex-shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-sm text-steel-grey leading-relaxed border-t border-surface-border pt-4">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-12 sm:py-16">
          <Container>
            <h2 className="font-sora font-bold text-2xl text-ink mb-6">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="group surface-card overflow-hidden card-hover">
                  <div className="relative aspect-[16/10] image-zoom bg-surface-muted">
                    <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-sora font-semibold text-ink group-hover:text-accent transition-colors mb-1">{p.title}</h3>
                    <p className="text-xs text-steel-grey line-clamp-2 mb-3">{p.shortDescription}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
                      View <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-14 sm:py-16 bg-ink">
        <Container size="sm">
          <div className="text-center">
            <h2 className="font-sora font-bold text-2xl sm:text-3xl text-white mb-3">
              Request a quote for {product.title}
            </h2>
            <p className="text-white/65 mb-8 leading-relaxed">
              Share your requirement and our team will review the practical next step.
            </p>
            <Link href={`/contact?product=${encodeURIComponent(product.slug)}#inquiry-form`} className="btn-primary">
              Contact Our Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
