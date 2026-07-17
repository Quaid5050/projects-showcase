'use client'
import { useState } from 'react'
import AnimateIn from '@/components/AnimateIn'

const tabs = [
  { id: 'priv', label: 'Privacy Policy' },
  { id: 'phipa', label: 'PHIPA Compliance' },
  { id: 'wsib', label: 'WSIB & Insurance' },
  { id: 'terms', label: 'Terms of Service' },
]

const content: Record<string, React.ReactNode> = {
  priv: (
    <div>
      <h3 className="font-serif text-2xl font-semibold text-[#1C3162] mb-3">Privacy Policy</h3>
      <p className="text-sm text-[#5C6B80] mb-4"><strong>Effective:</strong> January 1, 2026 &nbsp;|&nbsp; <strong>Updated:</strong> March 2026</p>
      <div className="bg-[#EBF4FC] border-l-[3px] border-[#5DA6DD] px-4 py-3 rounded-r mb-5">
        <p className="text-sm text-[#2A4373] font-semibold">Maplepath Healthcare is committed to protecting the privacy of all personal information collected from clients, families, and website visitors in compliance with PHIPA and PIPEDA.</p>
      </div>
      <h4 className="font-bold text-[#1C3162] text-sm mb-2">Information We Collect</h4>
      <ul className="list-disc pl-5 mb-4 space-y-1 text-sm text-[#5C6B80]">
        <li>Contact information: name, phone, email, and home address</li>
        <li>Personal health information provided during care assessments (treated as PHI under PHIPA)</li>
        <li>Website usage data (anonymized analytics)</li>
        <li>Correspondence submitted through contact forms or by email</li>
      </ul>
      <h4 className="font-bold text-[#1C3162] text-sm mb-2">How We Use Your Information</h4>
      <ul className="list-disc pl-5 mb-4 space-y-1 text-sm text-[#5C6B80]">
        <li>To contact you regarding your care assessment request</li>
        <li>To deliver, coordinate, and continuously improve care services</li>
        <li>To communicate important updates about your care plan</li>
        <li>To comply with applicable legal and regulatory obligations in Ontario</li>
      </ul>
      <h4 className="font-bold text-[#1C3162] text-sm mb-2">Information Sharing</h4>
      <p className="text-sm text-[#5C6B80] mb-4">We do not sell, rent, or trade your personal information to any third party. Information is shared only with direct care staff on a need-to-know basis, or as required by law. Personal health information is never shared without your explicit written consent.</p>
      <h4 className="font-bold text-[#1C3162] text-sm mb-2">Your Rights</h4>
      <p className="text-sm text-[#5C6B80]">You have the right to access, correct, or request deletion of your personal information. Contact our Privacy Officer: <strong>info@maplepathhealthcare.ca</strong> · 37 Main St. S, Halton Hills, ON L7G 3G2</p>
    </div>
  ),
  phipa: (
    <div>
      <h3 className="font-serif text-2xl font-semibold text-[#1C3162] mb-3">PHIPA Compliance Statement</h3>
      <p className="text-sm text-[#5C6B80] mb-4">Maplepath Healthcare operates in full compliance with the <strong>Personal Health Information Protection Act (PHIPA), S.O. 2004, c. 3, Sched. A</strong> — Ontario's primary health privacy legislation.</p>
      <div className="bg-[#EBF4FC] border-l-[3px] border-[#5DA6DD] px-4 py-3 rounded-r mb-5">
        <p className="text-sm text-[#2A4373] font-semibold">All personal health information (PHI) collected by Maplepath Healthcare is used solely for the purpose of providing, coordinating, or improving health care services to our clients.</p>
      </div>
      <h4 className="font-bold text-[#1C3162] text-sm mb-2">Our PHIPA Obligations</h4>
      <ul className="list-disc pl-5 mb-4 space-y-1 text-sm text-[#5C6B80]">
        <li>We collect only PHI reasonably necessary for the purpose of providing care</li>
        <li>PHI is used only for the purposes for which it was collected, or as permitted by PHIPA</li>
        <li>PHI is not disclosed to any third party without express consent, unless required by law</li>
        <li>Appropriate security safeguards are maintained proportional to information sensitivity</li>
        <li>Clients have the right to access their PHI and request corrections</li>
        <li>PHI is retained only as long as necessary</li>
      </ul>
      <h4 className="font-bold text-[#1C3162] text-sm mb-2">Privacy Officer</h4>
      <p className="text-sm text-[#5C6B80]">PHIPA compliance questions: <strong>info@maplepathhealthcare.ca</strong></p>
    </div>
  ),
  wsib: (
    <div>
      <h3 className="font-serif text-2xl font-semibold text-[#1C3162] mb-3">WSIB Coverage & Insurance</h3>
      <div className="bg-[#EBF4FC] border-l-[3px] border-[#5DA6DD] px-4 py-3 rounded-r mb-5">
        <p className="text-sm text-[#2A4373] font-semibold">All Maplepath Healthcare caregivers are fully covered under WSIB. You bear no financial liability if a caregiver is injured in your home.</p>
      </div>
      <h4 className="font-bold text-[#1C3162] text-sm mb-2">WSIB Coverage</h4>
      <ul className="list-disc pl-5 mb-4 space-y-1 text-sm text-[#5C6B80]">
        <li>Active WSIB coverage maintained for all workers providing care in clients' homes</li>
        <li>If a caregiver is injured in your home, WSIB covers their medical costs and wage replacement</li>
        <li>You as a client bear no financial responsibility for workplace injuries sustained by our staff</li>
        <li>WSIB clearance certificates available upon written request</li>
      </ul>
      <h4 className="font-bold text-[#1C3162] text-sm mb-2">General Liability Insurance</h4>
      <p className="text-sm text-[#5C6B80] mb-4">Maplepath Healthcare carries comprehensive general liability insurance covering property damage and other incidents that may occur during delivery of care services.</p>
      <h4 className="font-bold text-[#1C3162] text-sm mb-2">Why This Matters</h4>
      <p className="text-sm text-[#5C6B80]">Families who hire independent caregivers privately may unknowingly assume legal and financial responsibility under Ontario's Workplace Safety and Insurance Act. Hiring through Maplepath means you are fully protected with no administrative burden. Certificates available on request: <strong>info@maplepathhealthcare.ca</strong></p>
    </div>
  ),
  terms: (
    <div>
      <h3 className="font-serif text-2xl font-semibold text-[#1C3162] mb-3">Terms of Service</h3>
      <p className="text-sm text-[#5C6B80] mb-4"><strong>Effective:</strong> January 1, 2026</p>
      <h4 className="font-bold text-[#1C3162] text-sm mb-2">Website Use</h4>
      <p className="text-sm text-[#5C6B80] mb-4">Content on maplepathhealthcare.ca is for general informational purposes and does not constitute medical advice. Always consult a qualified healthcare professional for medical decisions.</p>
      <h4 className="font-bold text-[#1C3162] text-sm mb-2">Care Services Agreement</h4>
      <p className="text-sm text-[#5C6B80] mb-4">Formal care services are initiated through a signed Service Agreement outlining specific services, schedule, rates, and terms applicable to your care plan.</p>
      <h4 className="font-bold text-[#1C3162] text-sm mb-2">No Long-Term Contracts</h4>
      <p className="text-sm text-[#5C6B80] mb-4">Maplepath Healthcare does not require long-term care contracts. Care can be modified or discontinued with reasonable notice as outlined in the Service Agreement.</p>
      <h4 className="font-bold text-[#1C3162] text-sm mb-2">Governing Law</h4>
      <p className="text-sm text-[#5C6B80] mb-4">These terms are governed by the laws of the Province of Ontario and applicable federal laws of Canada.</p>
      <h4 className="font-bold text-[#1C3162] text-sm mb-2">Contact</h4>
      <p className="text-sm text-[#5C6B80]"><strong>info@maplepathhealthcare.ca</strong> · 37 Main St. S, Halton Hills, ON L7G 3G2 · 1-877-627-5313</p>
    </div>
  ),
}

export default function PrivacyPage() {
  const [active, setActive] = useState('priv')
  return (
    <>
      <div className="bg-[#1C3162] py-16 px-[5%]">
        <div className="max-w-[1180px] mx-auto text-center">
          <AnimateIn>
            <h1 className="font-serif text-[clamp(32px,4vw,52px)] font-semibold text-white mb-3">Privacy Policy, PHIPA & Terms</h1>
            <p className="text-white/70 text-lg font-light max-w-xl mx-auto">The protection of your personal and health information is a fundamental obligation — not a formality.</p>
          </AnimateIn>
        </div>
      </div>

      <section className="py-[80px] px-[5%] bg-white">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-[#EBF0F8] rounded-2xl overflow-hidden border border-[rgba(42,67,115,.1)]">
            <div className="flex bg-white border-b border-[rgba(42,67,115,.1)] flex-wrap">
              {tabs.map(t => (
                <button key={t.id} onClick={() => setActive(t.id)} className={`px-5 py-3.5 text-sm font-semibold border-b-[3px] transition-all ${active === t.id ? 'text-[#1C3162] border-[#5DA6DD]' : 'text-[#5C6B80] border-transparent hover:text-[#1C3162]'}`}>
                  {t.label}
                </button>
              ))}
            </div>
            <div className="p-10">{content[active]}</div>
          </div>
        </div>
      </section>
    </>
  )
}
