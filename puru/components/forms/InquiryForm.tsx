'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, AlertCircle, Send, Loader2 } from 'lucide-react';

const schema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  companyName: z.string().min(1, 'Company name is required'),
  email: z.string().email('Valid email address is required'),
  phone: z.string().min(7, 'Phone number is required'),
  country: z.string().min(1, 'Country is required'),
  website: z.string().optional(),
  businessType: z.string().min(1, 'Please select a business type'),
  inquiryCategory: z.string().min(1, 'Please select an inquiry category'),
  productOrServiceNeeded: z.string().min(2, 'Please describe what you need'),
  quantityOrVolume: z.string().optional(),
  targetMarket: z.string().optional(),
  facilityType: z.string().optional(),
  city: z.string().optional(),
  floorArea: z.string().optional(),
  surfaceType: z.string().optional(),
  currentFloorProblem: z.string().optional(),
  desiredAssessmentDate: z.string().optional(),
  programInterest: z.string().optional(),
  message: z.string().min(10, 'Please provide at least 10 characters'),
  consent: z.boolean().refine((v) => v === true, 'You must agree to be contacted'),
  websiteHoneypot: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface InquiryFormProps {
  source?: 'contact' | 'product-modal' | 'homepage' | 'partnership' | 'industries';
  prefilledProduct?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

const businessTypes = ['Importer', 'Exporter', 'Manufacturer', 'Wholesaler', 'Distributor', 'Commercial Cleaning Company', 'Facilities Manager', 'Safety-Product Supplier', 'Industrial Machinery Buyer', 'Product Supplier', 'Project Partner', 'Other'];
const inquiryCategories = ['General Business Inquiry', 'Product Inquiry', 'Request a Floor Assessment', 'Distributor Application', 'Partnership Inquiry', 'Investment or Project Inquiry', 'Import', 'Export', 'Product Sourcing', 'Industrial Machinery', 'Wholesale / Distribution', 'Manufacturing', 'Partnership', 'Infrastructure / Project Opportunity', 'Other'];

export default function InquiryForm({ source = 'contact', prefilledProduct = '', onSuccess, compact = false }: InquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [startedAt] = useState(() => Date.now());
  const searchParams = useSearchParams();
  const inquiryParam = searchParams.get('inquiry') || '';
  const productParam = searchParams.get('product') || '';
  const safeSolutionProduct = productParam === 'safe-solution' ? 'Safe Solution® Floor Safety System' : prefilledProduct;
  const defaultCategory =
    inquiryParam === 'distributor' ? 'Distributor Application' :
    inquiryParam === 'floor-assessment' ? 'Request a Floor Assessment' :
    inquiryParam === 'investment' ? 'Investment or Project Inquiry' :
    inquiryParam === 'partnership' ? 'Partnership Inquiry' :
    inquiryParam === 'product' ? 'Product Inquiry' :
    inquiryParam ? 'General Business Inquiry' : '';

  const { control, register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      inquiryCategory: defaultCategory,
      productOrServiceNeeded: safeSolutionProduct,
      programInterest: safeSolutionProduct ? 'Complete Floor Care Safety Program' : '',
    },
  });

  const selectedCategory = useWatch({ control, name: 'inquiryCategory' });
  const productNeeded = useWatch({ control, name: 'productOrServiceNeeded' });
  const showSafeSolutionFields =
    selectedCategory === 'Request a Floor Assessment' ||
    selectedCategory === 'Distributor Application' ||
    productNeeded?.toLowerCase().includes('safe solution');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const safeSolutionDetails = showSafeSolutionFields
        ? [
            '',
            'Safe Solution® details:',
            `Facility type: ${data.facilityType || ''}`,
            `Country and city: ${data.country || ''}${data.city ? `, ${data.city}` : ''}`,
            `Approximate floor area: ${data.floorArea || ''}`,
            `Surface type: ${data.surfaceType || ''}`,
            `Current floor problem: ${data.currentFloorProblem || ''}`,
            `Desired assessment date: ${data.desiredAssessmentDate || ''}`,
            `Product or program interest: ${data.programInterest || ''}`,
          ].join('\n')
        : '';
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, startedAt, message: `${data.message}${safeSolutionDetails}`, source }),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitStatus('success');
        reset();
        onSuccess?.();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h3 className="font-sora font-bold text-2xl text-ink mb-3">Inquiry Received</h3>
        <p className="font-inter text-steel-grey text-base leading-relaxed max-w-sm">
          Thank you. Your inquiry has been received. Our team will review your details and contact you shortly.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="mt-8 text-sm text-accent font-inter hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const fieldClass = `block w-full min-w-0 rounded-xl border border-surface-border bg-white px-4 py-3 font-inter text-base text-ink placeholder:text-steel-grey/60 transition-all focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 sm:text-sm`;
  const errorClass = `mt-1.5 text-xs text-red-600 font-inter flex items-center gap-1`;
  const labelClass = `block font-inter text-steel-grey text-xs font-medium mb-1.5 tracking-wide uppercase`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <input {...register('websiteHoneypot')} type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {submitStatus === 'error' && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-red-600 text-sm font-inter">Something went wrong. Please try again.</p>
        </div>
      )}

      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-5`}>
        {/* Full Name */}
        <div>
          <label className={labelClass}>Full Name *</label>
          <input {...register('fullName')} placeholder="Your full name" className={fieldClass} />
          {errors.fullName && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.fullName.message}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label className={labelClass}>Company Name *</label>
          <input {...register('companyName')} placeholder="Your company name" className={fieldClass} />
          {errors.companyName && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.companyName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className={labelClass}>Email Address *</label>
          <input {...register('email')} type="email" placeholder="you@company.com" className={fieldClass} />
          {errors.email && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input {...register('phone')} type="tel" placeholder="+1 (555) 000-0000" className={fieldClass} />
          {errors.phone && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.phone.message}</p>}
        </div>

        {/* Country */}
        <div>
          <label className={labelClass}>Country *</label>
          <input {...register('country')} placeholder="Your country" className={fieldClass} />
          {errors.country && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.country.message}</p>}
        </div>

        {/* Website */}
        <div>
          <label className={labelClass}>Website <span className="text-steel-grey/60 normal-case">(optional)</span></label>
          <input {...register('website')} type="url" placeholder="https://yourcompany.com" className={fieldClass} />
        </div>

        {/* Business Type */}
        <div>
          <label className={labelClass}>Business Type *</label>
          <select {...register('businessType')} className={`${fieldClass} [&>option]:bg-white`}>
            <option value="">Select business type</option>
            {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.businessType && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.businessType.message}</p>}
        </div>

        {/* Inquiry Category */}
        <div>
          <label className={labelClass}>Inquiry Category *</label>
          <select {...register('inquiryCategory')} className={`${fieldClass} [&>option]:bg-white`}>
            <option value="">Select category</option>
            {inquiryCategories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.inquiryCategory && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.inquiryCategory.message}</p>}
        </div>
      </div>

      {/* Product / Service Needed */}
      <div>
        <label className={labelClass}>Product / Service Needed *</label>
        <input {...register('productOrServiceNeeded')} placeholder="Describe the product, machinery, or service you need" className={fieldClass} />
        {errors.productOrServiceNeeded && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.productOrServiceNeeded.message}</p>}
      </div>

      {showSafeSolutionFields && (
        <div className="space-y-5 rounded-2xl border border-accent/15 bg-accent-soft p-4 sm:p-5">
          <div>
            <p className="font-sora font-semibold text-ink">Safe Solution® Floor Assessment Details</p>
            <p className="font-inter text-steel-grey text-sm mt-1">These fields help us review floor-safety, distributor, and program inquiries more accurately.</p>
          </div>
          <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-5`}>
            <div>
              <label className={labelClass}>Facility Type</label>
              <input {...register('facilityType')} placeholder="Hotel, clinic, warehouse, school..." className={fieldClass} />
            </div>
            <div>
              <label className={labelClass}>City</label>
              <input {...register('city')} placeholder="City" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass}>Approximate Floor Area</label>
              <input {...register('floorArea')} placeholder="e.g. 5,000 sq ft" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass}>Surface Type</label>
              <input {...register('surfaceType')} placeholder="Ceramic tile, concrete, mineral surface..." className={fieldClass} />
            </div>
            <div>
              <label className={labelClass}>Current Floor Problem</label>
              <input {...register('currentFloorProblem')} placeholder="Slippery when wet, residue buildup..." className={fieldClass} />
            </div>
            <div>
              <label className={labelClass}>Desired Assessment Date</label>
              <input {...register('desiredAssessmentDate')} type="date" className={fieldClass} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Product or Program Interest</label>
            <select {...register('programInterest')} className={`${fieldClass} [&>option]:bg-white`}>
              <option value="">Select interest</option>
              <option value="Safe Solution®">Safe Solution®</option>
              <option value="CRS™">CRS™</option>
              <option value="Clean Step™">Clean Step™</option>
              <option value="Complete Floor Care Safety Program">Complete Floor Care Safety Program</option>
            </select>
          </div>
        </div>
      )}

      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-5`}>
        {/* Quantity / Volume */}
        <div>
          <label className={labelClass}>Quantity / Volume <span className="text-steel-grey/60 normal-case">(optional)</span></label>
          <input {...register('quantityOrVolume')} placeholder="e.g. 500 units, 10 tonnes" className={fieldClass} />
        </div>

        {/* Target Market */}
        <div>
          <label className={labelClass}>Target Market <span className="text-steel-grey/60 normal-case">(optional)</span></label>
          <input {...register('targetMarket')} placeholder="e.g. Canada, USA, India" className={fieldClass} />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>Message *</label>
        <textarea
          {...register('message')}
          rows={compact ? 4 : 5}
          placeholder="Describe your trade requirement, what you are looking for, and any relevant details..."
          className={`${fieldClass} resize-none`}
        />
        {errors.message && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.message.message}</p>}
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3 rounded-xl border border-surface-border bg-surface-soft p-4">
        <input
          {...register('consent')}
          type="checkbox"
          id="consent"
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-surface-border bg-white accent-accent"
        />
        <label htmlFor="consent" className="font-inter text-steel-grey text-sm leading-relaxed cursor-pointer">
          I agree to be contacted regarding this inquiry and understand submitted information will be reviewed for the requested product, partnership, distributor, investment, or floor-assessment path.
        </label>
      </div>
      {errors.consent && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.consent.message}</p>}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full !py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Submit Inquiry
          </>
        )}
      </button>
    </form>
  );
}
