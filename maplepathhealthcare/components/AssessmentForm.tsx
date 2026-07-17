'use client'
import { useState } from 'react'

export default function AssessmentForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: data,
      })
      if (res.ok) { setStatus('sent'); form.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  if (status === 'sent') return (
    <div className="bg-[#EBF4FC] border border-[#5DA6DD] rounded-xl p-8 text-center">
      <svg className="mx-auto mb-3" width="48" height="48" viewBox="0 0 24 24" fill="#54AABA"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <h3 className="font-serif text-xl text-[#1C3162] font-semibold mb-2">Request Received!</h3>
      <p className="text-sm text-[#5C6B80]">A care coordinator will call you back within 2 hours.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="hidden" name="_subject" value="New Care Assessment — Maplepath Healthcare" />
      <input type="hidden" name="_template" value="table" />

      <div className={`grid gap-3 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label className="block text-[11px] font-bold text-[#2A3A5C] mb-1 uppercase tracking-wider">Your Name *</label>
          <input name="name" type="text" placeholder="Full name" required className="w-full px-3 py-2.5 border-[1.5px] border-[rgba(42,67,115,.18)] rounded text-sm bg-[#F5F8FC] focus:outline-none focus:border-[#5DA6DD] focus:bg-white transition-all" />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-[#2A3A5C] mb-1 uppercase tracking-wider">Phone Number *</label>
          <input name="phone" type="tel" placeholder="(905) 000-0000" required className="w-full px-3 py-2.5 border-[1.5px] border-[rgba(42,67,115,.18)] rounded text-sm bg-[#F5F8FC] focus:outline-none focus:border-[#5DA6DD] focus:bg-white transition-all" />
        </div>
      </div>

      <div className={`grid gap-3 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label className="block text-[11px] font-bold text-[#2A3A5C] mb-1 uppercase tracking-wider">Your City *</label>
          <select name="city" required className="w-full px-3 py-2.5 border-[1.5px] border-[rgba(42,67,115,.18)] rounded text-sm bg-[#F5F8FC] focus:outline-none focus:border-[#5DA6DD] focus:bg-white transition-all appearance-none">
            <option value="">Select city…</option>
            {['Oakville','Burlington','Milton','Georgetown','Halton Hills','Acton','Waterdown','Other Halton'].map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-[#2A3A5C] mb-1 uppercase tracking-wider">When Needed</label>
          <select name="urgency" className="w-full px-3 py-2.5 border-[1.5px] border-[rgba(42,67,115,.18)] rounded text-sm bg-[#F5F8FC] focus:outline-none focus:border-[#5DA6DD] focus:bg-white transition-all appearance-none">
            <option value="">Select timing…</option>
            {['Immediately (within 24 hrs)','Within this week','Within this month','Planning ahead'].map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-bold text-[#2A3A5C] mb-1 uppercase tracking-wider">Type of Care *</label>
        <select name="care_type" required className="w-full px-3 py-2.5 border-[1.5px] border-[rgba(42,67,115,.18)] rounded text-sm bg-[#F5F8FC] focus:outline-none focus:border-[#5DA6DD] focus:bg-white transition-all appearance-none">
          <option value="">Select care type…</option>
          {['PSW / Personal Support','Dementia / Alzheimer\'s Care','Palliative / End-of-Life Care','Overnight / 24-Hour Care','Post-Hospital Recovery','Parkinson\'s / Neurological Care','Companionship & Light Housekeeping','Not sure — need guidance'].map(o => <option key={o}>{o}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-[11px] font-bold text-[#2A3A5C] mb-1 uppercase tracking-wider">Brief Description (optional)</label>
        <textarea name="message" rows={3} placeholder="Tell us about your loved one's situation…" className="w-full px-3 py-2.5 border-[1.5px] border-[rgba(42,67,115,.18)] rounded text-sm bg-[#F5F8FC] focus:outline-none focus:border-[#5DA6DD] focus:bg-white transition-all resize-y" />
      </div>

      <button type="submit" disabled={status === 'sending'} className="w-full py-3.5 bg-[#1C3162] text-white rounded font-bold text-base hover:bg-[#2A4373] hover:-translate-y-px transition-all disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Request My Free Assessment →'}
      </button>

      {status === 'error' && <p className="text-red-600 text-sm text-center">Something went wrong. Please call us directly at 1-877-MAPLE13.</p>}

      <div className="flex gap-2 items-start p-3 bg-[#EBF4FC] rounded border border-[rgba(37,82,64,.12)]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#5DA6DD" className="flex-shrink-0 mt-0.5"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
        <p className="text-[11px] text-[#2A4373] leading-snug font-medium"><strong className="text-[#1C3162]">PHIPA Protected.</strong> All personal health information is kept strictly confidential under Ontario's PHIPA. Never shared. Never sold.</p>
      </div>
    </form>
  )
}
