import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, Globe, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import InquiryForm from '@/components/forms/InquiryForm';
import { siteContent } from '@/lib/data/site-content';
import { company, targetMarketCountLabel } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Contact | Complete Your Trade Inquiry | YUVAAN INTERNATIONAL',
  description: 'Submit your trade inquiry to YUVAAN INTERNATIONAL. Whether you are a manufacturer, investor, government agency, or business partner — our team will respond promptly.',
};

const { contact } = siteContent;
const inquiryPaths = [
  { label: 'General Business Inquiry', href: '/contact?inquiry=general#inquiry-form' },
  { label: 'Product Inquiry', href: '/contact?inquiry=product#inquiry-form' },
  { label: 'Request a Floor Assessment', href: '/contact?inquiry=floor-assessment&product=safe-solution#inquiry-form' },
  { label: 'Distributor Application', href: '/contact?inquiry=distributor&product=safe-solution#inquiry-form' },
  { label: 'Partnership Inquiry', href: '/contact?inquiry=partnership#inquiry-form' },
  { label: 'Investment or Project Inquiry', href: '/contact?inquiry=investment#inquiry-form' },
];

function InquiryFormShell() {
  return (
    <div className="space-y-5" aria-label="Inquiry form loading">
      <div className="grid sm:grid-cols-2 gap-5">
        {['Full name *', 'Company name *', 'Business email *', 'Phone or WhatsApp *'].map((label) => (
          <div key={label}>
            <label className="block font-inter text-steel-grey text-xs font-medium mb-1.5 tracking-wide uppercase">{label}</label>
            <div className="h-12 rounded-xl bg-surface-soft border border-surface-border" />
          </div>
        ))}
      </div>
      <div>
        <label className="block font-inter text-steel-grey text-xs font-medium mb-1.5 tracking-wide uppercase">Message *</label>
        <div className="h-28 rounded-xl bg-surface-soft border border-surface-border" />
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface-soft">
      <section className="relative overflow-hidden bg-ink pb-10 pt-24 sm:pb-12 sm:pt-32">
        <Container className="relative z-10">
          <ScrollReveal>
            <span className="inline-block text-xs tracking-[0.28em] uppercase text-accent-bright font-semibold mb-4">Contact</span>
            <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4 max-w-3xl">
              {contact.heading}
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
              {contact.subheading}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="mb-12">
            <ScrollReveal>
              <div className="surface-card p-5 sm:p-8">
                <h2 className="font-sora font-bold text-2xl text-ink mb-4">Choose Your Inquiry Path</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {inquiryPaths.map((path) => (
                    <Link key={path.href} href={path.href} className="group flex items-center justify-between rounded-2xl border border-surface-border bg-surface-soft p-4 transition-all hover:border-accent/40">
                      <span className="min-w-0 flex-1 pr-2 font-inter text-sm text-steel-grey group-hover:text-ink">{path.label}</span>
                      <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-1">
              <ScrollReveal direction="left">
                <div className="space-y-5 lg:sticky lg:top-28">
                  <div className="surface-card p-5 sm:p-7">
                    <h2 className="font-sora font-bold text-xl text-ink mb-6">Contact Information</h2>
                    <div className="space-y-5">
                      <a href={`tel:${company.publicPhoneTel}`} className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-inter text-xs text-steel-grey tracking-widest uppercase mb-1">Phone</p>
                          <p className="font-inter text-ink group-hover:text-accent transition-colors">{company.publicPhoneDisplay}</p>
                        </div>
                      </a>
                      <a href={`mailto:${company.publicEmail}`} className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-inter text-xs text-steel-grey tracking-widest uppercase mb-1">Email</p>
                          <p className="font-inter text-ink text-sm group-hover:text-accent transition-colors break-all">{company.publicEmail}</p>
                        </div>
                      </a>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-inter text-xs text-steel-grey tracking-widest uppercase mb-1">Headquarters</p>
                          <p className="font-inter text-ink">{company.locationDisplay}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-inter text-xs text-steel-grey tracking-widest uppercase mb-1">Market Focus</p>
                          <p className="font-inter text-ink">{targetMarketCountLabel}</p>
                          <p className="font-inter text-steel-grey text-sm">International market development</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="surface-card p-5 sm:p-7">
                    <h3 className="font-sora font-semibold text-ink text-base mb-4">What Happens Next?</h3>
                    <div className="space-y-4">
                      {[
                        'Your inquiry is reviewed by our team',
                        'We assess trade and project pathway opportunities',
                        'We contact you to discuss next steps',
                        'We coordinate and facilitate the opportunity',
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-accent-soft border border-accent/20 flex items-center justify-center text-accent text-xs font-bold flex-shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <p className="font-inter text-steel-grey text-sm leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="surface-card p-6">
                    <p className="font-inter text-xs text-steel-grey uppercase tracking-widest mb-3">We Work With</p>
                    <div className="flex flex-wrap gap-2">
                      {['Manufacturers', 'Investors', 'Importers', 'Exporters', 'Governments', 'Developers'].map((t) => (
                        <span key={t} className="text-xs font-inter text-accent bg-accent-soft px-2.5 py-1 rounded-full border border-accent/15">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2" id="inquiry-form">
              <ScrollReveal direction="right">
                <div className="surface-card p-4 min-[390px]:p-5 sm:p-8 md:p-10">
                  <h2 className="font-sora font-bold text-2xl text-ink mb-2">{contact.meetingCta}</h2>
                  <p className="font-inter text-steel-grey text-sm mb-8 leading-relaxed">
                    Fill in your details below. All fields marked with * are required.
                  </p>
                  <Suspense fallback={<InquiryFormShell />}>
                    <InquiryForm source="contact" />
                  </Suspense>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
