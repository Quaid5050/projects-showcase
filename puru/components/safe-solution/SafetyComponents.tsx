'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  FileText,
  Gauge,
  Loader2,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  distributorProcess,
  floorCareProcess,
  performanceMetrics,
  productClaimFootnote,
  productSystem,
  safeSolutionRoutes,
  safeSolutionSummary,
  safetyBenefits,
  technicalDocuments,
} from '@/lib/data/safe-solution';

const cardIcons = [ShieldCheck, Gauge, Sparkles];

export function ProductSystemCard({
  item,
  index,
  detailed = false,
}: {
  item: (typeof productSystem)[number];
  index: number;
  detailed?: boolean;
}) {
  const Icon = cardIcons[index] ?? ShieldCheck;

  return (
    <div className="group h-full surface-card p-5 sm:p-7 card-hover">
      <div className="flex items-start gap-4 mb-5">
        <div className="w-12 h-12 rounded-xl bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-sora font-bold text-ink text-xl">{item.name}</h3>
          <p className="font-inter text-accent text-sm mt-1">{item.subtitle}</p>
        </div>
      </div>

      {detailed ? (
        <ul className="space-y-3">
          {item.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span className="font-inter text-steel-grey text-sm leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="font-inter text-steel-grey text-sm leading-relaxed">{item.shortLabel}</p>
      )}
    </div>
  );
}

export function NewProductSpotlight() {
  return (
    <section className="section-pad bg-surface-soft">
      <Container>
        <ScrollReveal>
          <div className="surface-card overflow-hidden grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-inter font-bold uppercase tracking-[0.25em] mb-5">
                {safeSolutionSummary.eyebrow}
              </span>
              <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight mb-5">
                Safe Solution® <span className="gradient-text">Floor Safety System</span>
              </h2>
              <p className="font-inter text-steel-grey text-base sm:text-lg leading-relaxed max-w-2xl mb-7">
                {safeSolutionSummary.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={safeSolutionRoutes.detail} className="btn-primary">
                  Explore the Complete System <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={safeSolutionRoutes.distributor} className="btn-secondary">
                  Become a Distributor <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative min-h-[280px] border-t border-surface-border bg-surface-muted p-4 sm:p-5 lg:border-l lg:border-t-0">
              <div className="relative h-full flex flex-col justify-between">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent-soft text-accent flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-inter text-steel-grey uppercase tracking-widest">Commercial Floor Care</span>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {productSystem.map((item, index) => (
                    <div key={item.name} className="rounded-2xl bg-white border border-surface-border p-3 min-h-32">
                      <p className="font-sora font-bold text-ink text-sm">{item.name}</p>
                      <p className="font-inter text-steel-grey text-xs mt-2 leading-relaxed">{item.shortLabel}</p>
                      <div className={`mt-4 h-1 rounded-full ${index === 0 ? 'bg-accent' : index === 1 ? 'bg-accent-bright' : 'bg-ink-soft'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export function ProductSystemSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`${compact ? 'py-12' : 'section-pad'} bg-white`}>
      <Container>
        <SectionHeading
          eyebrow="Three-Part Product System"
          title="Safe Solution®, CRS™ and <span class='gradient-text'>Clean Step™</span>"
          subtitle="The system combines initial treatment, residue control, scheduled inspection, and rejuvenation instead of presenting floor safety as a one-time application."
          className="mb-10 sm:mb-14"
        />
        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {productSystem.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.08} className="h-full">
              <ProductSystemCard item={item} index={index} detailed={!compact} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function MetricsAndBenefitsSection() {
  return (
    <section className="section-pad bg-surface-soft">
      <Container>
        <SectionHeading
          eyebrow="Commercial Floor-Safety Benefits"
          title="Commercial <span class='gradient-text'>Floor-Safety Benefits</span>"
          subtitle="A structured program helps commercial sites connect floor treatment, routine maintenance, inspection, documentation, and rejuvenation into one practical operating approach."
          className="mb-10"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {safetyBenefits.map((benefit) => (
            <div key={benefit} className="surface-card p-5 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="font-inter text-steel-grey text-sm leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {performanceMetrics.map((metric) => (
            <MetricCard key={metric.value} value={metric.value} label={metric.label} />
          ))}
        </div>
        <p className="font-inter text-steel-grey/70 text-xs leading-relaxed mt-6">{productClaimFootnote}</p>
      </Container>
    </section>
  );
}

export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="surface-card p-5">
      <p className="font-sora font-bold text-2xl text-accent mb-2">{value}</p>
      <p className="font-inter text-steel-grey text-xs leading-relaxed">{label}</p>
    </div>
  );
}

export function SafetyNotice({ children, tone = 'teal' }: { children: React.ReactNode; tone?: 'teal' | 'copper' }) {
  const color = tone === 'copper'
    ? 'border-amber-200 bg-amber-50'
    : 'border-accent/20 bg-accent-soft';
  return (
    <div className={`rounded-2xl border p-5 ${color}`}>
      <p className="font-inter text-sm leading-relaxed text-steel-grey">{children}</p>
    </div>
  );
}

export function ProcessTimeline({ items = floorCareProcess }: { items?: string[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={item} className="relative surface-card p-5">
          <span className="font-sora font-bold text-4xl text-accent/20">{String(index + 1).padStart(2, '0')}</span>
          <p className="font-sora font-semibold text-ink mt-3">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function DocumentCard({ title, status }: { title: string; status: string }) {
  return (
    <div className="surface-card p-5 flex items-start gap-3">
      <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
      <div>
        <p className="font-sora font-semibold text-ink text-sm">{title}</p>
        <p className="font-inter text-steel-grey text-xs mt-1">{status}</p>
      </div>
    </div>
  );
}

export function DocumentsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {technicalDocuments.map((doc) => (
        <DocumentCard key={doc.title} title={doc.title} status={doc.status} />
      ))}
    </div>
  );
}

export function DistributorCTA({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? 'py-10' : 'section-pad bg-white'}>
      <Container>
        <div className="rounded-3xl border border-accent/20 bg-accent-soft p-5 text-center sm:p-8 lg:p-10">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white px-3 py-1 font-inter text-[10px] font-bold uppercase tracking-[0.16em] text-accent sm:text-xs sm:tracking-[0.25em]">
            Territory Opportunity
          </span>
          <h2 className="mb-4 font-sora text-2xl font-bold text-ink sm:text-4xl">
            Distributors Wanted Worldwide
          </h2>
          <p className="font-inter text-steel-grey text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-7">
            We are seeking qualified commercial cleaning companies, safety-product suppliers, flooring specialists, facilities-service providers, and established B2B distributors to represent the Safe Solution® Floor Safety System in new markets.
          </p>
          <Link href={safeSolutionRoutes.distributor} className="btn-primary w-full sm:w-auto">
            Apply for Your Territory <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function FinalConversionPanels() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <Link href={safeSolutionRoutes.floorAssessment} className="group surface-card p-5 card-hover sm:p-7">
        <ClipboardCheck className="w-9 h-9 text-accent mb-5" />
        <h3 className="mb-3 font-sora text-xl font-bold text-ink sm:text-2xl">Request a Commercial Floor Assessment</h3>
        <p className="font-inter text-steel-grey text-sm leading-relaxed mb-5">Tell us about your facility, surface type, and current floor-safety concern.</p>
        <span className="inline-flex items-center gap-2 text-accent font-inter font-semibold text-sm">Request Assessment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
      </Link>
      <Link href={safeSolutionRoutes.distributor} className="group surface-card p-5 card-hover sm:p-7">
        <Users className="w-9 h-9 text-accent mb-5" />
        <h3 className="mb-3 font-sora text-xl font-bold text-ink sm:text-2xl">Become a Safe Solution® Distributor</h3>
        <p className="font-inter text-steel-grey text-sm leading-relaxed mb-5">Apply to represent Safe Solution®, CRS™, Clean Step™, and the Floor Care Safety Program in your market.</p>
        <span className="inline-flex items-center gap-2 text-accent font-inter font-semibold text-sm">Start Distributor Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
      </Link>
    </div>
  );
}

type DistributorFormState = Record<string, string | boolean | string[]>;

const interestOptions = ['Safe Solution®', 'CRS™', 'Clean Step™', 'Complete Floor Care Safety Program'];

export function DistributorApplicationForm() {
  const [form, setForm] = useState<DistributorFormState>({
    interests: [],
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [startedAt] = useState(() => Date.now());

  const update = (key: string, value: string | boolean | string[]) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleInterest = (interest: string) => {
    const current = Array.isArray(form.interests) ? form.interests : [];
    update('interests', current.includes(interest) ? current.filter((item) => item !== interest) : [...current, interest]);
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    const details = [
      `Inquiry type: Distributor Application`,
      `Product: Safe Solution® Floor Safety System`,
      `Applicant job title: ${form.jobTitle || ''}`,
      `Company website: ${form.website || ''}`,
      `City: ${form.city || ''}`,
      `Requested territory: ${form.territory || ''}`,
      `Years in operation: ${form.years || ''}`,
      `Industries served: ${form.industries || ''}`,
      `Current product lines: ${form.productLines || ''}`,
      `Sales-team size: ${form.salesTeamSize || ''}`,
      `Existing reseller/dealer network: ${form.network || ''}`,
      `Warehousing capability: ${form.warehousing || ''}`,
      `Technical/service capability: ${form.technicalCapability || ''}`,
      `Main customer types: ${form.customerTypes || ''}`,
      `Markets currently served: ${form.markets || ''}`,
      `Product interest: ${Array.isArray(form.interests) ? form.interests.join(', ') : ''}`,
      `Estimated annual sales opportunity: ${form.annualOpportunity || ''}`,
      `Currency: ${form.currency || ''}`,
      `Estimated first-year volume: ${form.firstYearVolume || ''}`,
      `Company-profile link or note: ${form.profileLink || ''}`,
      `Additional message: ${form.message || ''}`,
    ].join('\n');

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName,
          companyName: form.companyName,
          email: form.email,
          phone: form.phone,
          country: form.country,
          website: form.website || undefined,
          businessType: 'Distributor',
          inquiryCategory: 'Partnership',
          productOrServiceNeeded: 'Safe Solution® Floor Safety System - Distributor Application',
          targetMarket: form.territory,
          quantityOrVolume: form.annualOpportunity,
          message: details,
          consent: form.consent === true,
          source: 'partnership',
          startedAt,
          websiteHoneypot: form.websiteHoneypot || '',
        }),
      });
      const data = await response.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const fieldClass = 'block w-full min-w-0 rounded-xl border border-surface-border bg-white px-4 py-3 font-inter text-base text-ink placeholder:text-steel-grey/60 transition-all focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 sm:text-sm';
  const labelClass = 'block font-inter text-steel-grey text-xs font-medium mb-1.5 tracking-wide uppercase';

  if (status === 'success') {
    return (
      <div className="surface-card p-8 text-center">
        <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
        <h3 className="font-sora font-bold text-2xl text-ink mb-2">Distributor Application Received</h3>
        <p className="font-inter text-steel-grey">Thank you. Yuvaan International will review your territory and capability details.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="surface-card min-w-0 space-y-5 p-4 sm:p-8">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={String(form.websiteHoneypot || '')}
        onChange={(event) => update('websiteHoneypot', event.target.value)}
        className="hidden"
        aria-hidden="true"
      />
      {status === 'error' && <p className="rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm p-4">Please review the required fields and try again.</p>}
      <div className="grid md:grid-cols-2 gap-5">
        {[
          ['fullName', 'Applicant full name *'],
          ['jobTitle', 'Job title'],
          ['companyName', 'Company name *'],
          ['email', 'Business email *'],
          ['phone', 'Telephone or WhatsApp *'],
          ['website', 'Company website'],
          ['country', 'Country *'],
          ['city', 'City'],
          ['territory', 'Requested territory *'],
          ['years', 'Years in operation'],
          ['industries', 'Industries served'],
          ['productLines', 'Current product lines'],
          ['salesTeamSize', 'Sales-team size'],
          ['network', 'Existing reseller or dealer network'],
          ['warehousing', 'Warehousing capability'],
          ['technicalCapability', 'Technical or service capability'],
          ['customerTypes', 'Main customer types'],
          ['markets', 'Markets currently served'],
          ['annualOpportunity', 'Estimated annual sales opportunity'],
          ['firstYearVolume', 'Estimated first-year volume'],
          ['profileLink', 'Company-profile URL or note'],
        ].map(([key, label]) => (
          <div key={key}>
            <label className={labelClass}>{label}</label>
            <input
              required={label.includes('*')}
              value={String(form[key] || '')}
              onChange={(event) => update(key, event.target.value)}
              className={fieldClass}
            />
          </div>
        ))}
      </div>

      <div>
        <label className={labelClass}>Currency</label>
        <select value={String(form.currency || '')} onChange={(event) => update('currency', event.target.value)} className={`${fieldClass} [&>option]:bg-white`}>
          <option value="">Select currency</option>
          <option value="CAD">CAD</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <p className={labelClass}>Product interest</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {interestOptions.map((interest) => (
            <label key={interest} className="flex items-center gap-3 rounded-xl bg-surface-soft border border-surface-border p-3 cursor-pointer">
              <input type="checkbox" checked={Array.isArray(form.interests) && form.interests.includes(interest)} onChange={() => toggleInterest(interest)} className="h-5 w-5 shrink-0 accent-accent" />
              <span className="font-inter text-steel-grey text-sm">{interest}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className={labelClass}>Additional message *</label>
        <textarea
          required
          rows={5}
          value={String(form.message || '')}
          onChange={(event) => update('message', event.target.value)}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us about your company, territory, customer base, and why you are interested in Safe Solution®."
        />
      </div>

      <p className="font-inter text-steel-grey text-xs leading-relaxed">
        Provide a link to your company profile, or our team will request supporting documents after the initial review.
      </p>

      <label className="flex items-start gap-3 rounded-xl bg-surface-soft border border-surface-border p-4 cursor-pointer">
        <input required type="checkbox" checked={form.consent === true} onChange={(event) => update('consent', event.target.checked)} className="mt-0.5 h-5 w-5 shrink-0 accent-accent" />
        <span className="font-inter text-steel-grey text-sm leading-relaxed">I agree to be contacted about this distributor application and understand territory opportunities are subject to review.</span>
      </label>

      <button disabled={status === 'loading'} className="btn-primary w-full !py-4 disabled:opacity-60">
        {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        Apply for Your Territory
      </button>
    </form>
  );
}

export function DistributorProcessTimeline() {
  return <ProcessTimeline items={distributorProcess} />;
}
