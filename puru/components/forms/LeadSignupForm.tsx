'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  company: z.string().optional(),
  businessType: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const businessTypes = ['Importer', 'Exporter', 'Manufacturer', 'Wholesaler', 'Distributor', 'Industrial Machinery Buyer', 'Product Supplier', 'Other'];

export default function LeadSignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/lead-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) { setStatus('success'); reset(); }
      else { setStatus('error'); }
    } catch { setStatus('error'); }
    finally { setIsSubmitting(false); }
  };

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 p-4 rounded-xl bg-teal/10 border border-teal/20">
        <CheckCircle className="w-5 h-5 text-teal" />
        <p className="text-soft-white/80 text-sm font-inter">Thank you! We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  const fc = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-inter text-base text-soft-white placeholder:text-soft-white/30 transition-all focus:border-teal/50 focus:outline-none sm:text-sm';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input {...register('name')} placeholder="Your Name *" className={fc} />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <input {...register('email')} type="email" placeholder="Email Address *" className={fc} />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input {...register('phone')} placeholder="Phone (optional)" className={fc} />
        <input {...register('company')} placeholder="Company (optional)" className={fc} />
      </div>
      <select {...register('businessType')} className={`${fc} [&>option]:bg-navy`}>
        <option value="">Business Type (optional)</option>
        {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4" /> Something went wrong. Please try again.
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-teal to-aqua text-navy font-semibold font-inter hover:shadow-glow-teal transition-all disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : 'Get In Touch'}
      </button>
    </form>
  );
}
