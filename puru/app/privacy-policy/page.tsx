import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import { company } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Privacy Policy | Yuvaan International',
  description: 'Privacy information for Yuvaan International website inquiries and contact forms.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  const sections = [
    ['Website operator', `${company.displayName} operates this website from ${company.locationDisplay}. This policy explains how inquiry information is handled through the website.`],
    ['Information collected', 'We may collect name, company, job title, email, phone or WhatsApp, country, city, website, product interest, requested territory, business details, message content, consent confirmation, and technical submission information.'],
    ['Information submitted through forms', 'General inquiries, floor-assessment requests, distributor applications, partnership inquiries, and investment or project inquiries may ask for different business details so the request can be reviewed.'],
    ['Technical information and logs', 'The hosting platform and website systems may process technical information such as request time, IP address, browser details, pages requested, errors, and security or spam signals.'],
    ['Collection methods', 'Information is collected when you submit a form, contact Yuvaan International, follow links, or interact with the website infrastructure.'],
    ['Purposes of processing', 'Information is used to respond to inquiries, review commercial fit, evaluate distributor or partnership requests, maintain records, improve website reliability, prevent spam or abuse, and comply with applicable obligations.'],
    ['Consent', 'By submitting a form, you consent to being contacted about your inquiry. You can withdraw consent for future contact by using the public contact email.'],
    ['Service providers', 'Website hosting, database, email delivery, analytics if configured, spam prevention, and related technology providers may process information only as needed to support website operation.'],
    ['Website hosting and email delivery', 'The website is hosted on a third-party platform and form notifications are delivered through the configured email provider.'],
    ['Cross-border processing', 'Information may be processed in Canada and other jurisdictions where service providers operate.'],
    ['Data retention', 'Inquiry records are retained only as long as reasonably required for business review, follow-up, records, security, and legal or operational needs.'],
    ['Security safeguards', 'Reasonable technical and organizational safeguards are used, but no internet transmission or storage system is completely secure.'],
    ['Access and correction requests', 'You may request access to or correction of information submitted through the website by contacting Yuvaan International.'],
    ['Withdrawal of consent', 'You may request that future contact stop, subject to any records that must be retained for legitimate business, security, or legal reasons.'],
    ['Cookies', 'The website may use cookies or similar technologies required for functionality, security, hosting, or performance.'],
    ['Analytics', 'Analytics are described here only if configured. If analytics are later enabled, the applicable provider and purpose should be reviewed before launch.'],
    ['Third-party links', 'This website may link to third-party websites. Yuvaan International is not responsible for their privacy practices or content.'],
    ['Complaint process', `Privacy questions or concerns can be sent to ${company.publicEmail}.`],
    ['Policy changes', 'This policy may be updated as website features, service providers, or legal requirements change.'],
    ['Contact information', `Privacy Contact: ${company.publicEmail} | ${company.publicPhoneDisplay}`],
  ];

  return (
    <div className="min-h-screen bg-surface-soft pt-28 sm:pt-32 pb-20">
      <Container size="md">
        <div className="surface-card p-5 sm:p-8 md:p-10">
          <h1 className="font-sora font-bold text-3xl sm:text-4xl text-ink mb-4">Privacy Policy</h1>
          <p className="font-inter text-steel-grey mb-8">Effective date: July 15, 2026</p>
          <div className="space-y-7">
            {sections.map(([title, body]) => (
              <section key={title}>
                <h2 className="font-sora font-semibold text-xl text-ink mb-2">{title}</h2>
                <p className="break-words font-inter leading-relaxed text-steel-grey">{body}</p>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
