import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import { company } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Terms of Use | Yuvaan International',
  description: 'Website terms and product disclaimer for Yuvaan International.',
  alternates: { canonical: '/terms-of-use' },
};

export default function TermsOfUsePage() {
  const sections = [
    ['Acceptance of terms', 'By using this website, you agree to use it only for lawful business information and inquiry purposes.'],
    ['Website purpose', 'This website introduces Yuvaan International business categories, product inquiries, distributor opportunities, market-development discussions, and project-collaboration interests.'],
    ['Permitted use', 'You may review public information, submit accurate inquiry details, and contact Yuvaan International about legitimate business opportunities.'],
    ['Prohibited use', 'You must not misuse forms, submit false information, attempt unauthorized access, interfere with website operation, scrape content unlawfully, or use the site for spam or harmful activity.'],
    ['Intellectual property', 'Website text, layout, graphics, and content are provided for informational use and may not be copied or republished without permission except where law permits.'],
    ['Trademark treatment', company.trademarkNotice],
    ['Accuracy and availability', 'Website information may change and may not always be complete, current, or available. Product, territory, documentation, supplier, and market information must be confirmed before any commercial commitment.'],
    ['Product-information limitations', 'Product descriptions are general commercial information. They do not replace technical data sheets, safety data sheets, testing reports, supplier documentation, regulatory review, or site-specific assessment.'],
    ['Surface and performance limitations', 'Surface suitability, appearance, traction performance, maintenance intervals, insurance outcomes, and commercial terms depend on the surface, application, site conditions, maintenance, jurisdiction, and supporting documentation. A test-area assessment is required before full application.'],
    ['No implied relationship', 'Website content does not imply any supplier, partner, customer, distributor, representative, insurer, government, or certification relationship unless confirmed in a written agreement or verified document.'],
    ['No investment or financial advice', 'Information on this website is provided for general business discussion and does not constitute an offer, solicitation, financial advice, investment advice, securities offering, or commitment to provide funding.'],
    ['Third-party links', 'Third-party links are provided for convenience only. Yuvaan International is not responsible for third-party websites, content, practices, or availability.'],
    ['Disclaimer of warranties', 'The website is provided on an as-is and as-available basis without warranties of uninterrupted operation, error-free content, or fitness for a particular purpose.'],
    ['Limitation of liability', 'To the extent permitted by applicable law, Yuvaan International is not liable for losses arising from website use, reliance on public content, unavailable services, third-party links, or unverified information.'],
    ['Indemnity', 'You agree to be responsible for losses arising from your unlawful use of the website, false submissions, or violation of these terms.'],
    ['Governing law', `These terms should be interpreted with reference to applicable law for ${company.locationDisplay}, unless a written agreement states otherwise.`],
    ['Changes to terms', 'These terms may be updated as website features, business processes, or legal requirements change.'],
    ['Contact information', `Questions about these terms can be sent to ${company.publicEmail}.`],
  ];

  return (
    <div className="min-h-screen bg-surface-soft pt-28 sm:pt-32 pb-20">
      <Container size="md">
        <div className="surface-card p-5 sm:p-8 md:p-10">
          <h1 className="font-sora font-bold text-3xl sm:text-4xl text-ink mb-4">Terms of Use</h1>
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
