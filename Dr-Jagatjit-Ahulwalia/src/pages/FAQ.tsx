import { FAQAccordion } from '../components/FAQAccordion'
import { PageHero } from '../components/PageHero'
import { CTASection } from '../components/CTASection'
import { faqItems } from '../data/faqs'

export default function FAQ() {
  return (
    <div>
      <PageHero
        eyebrow="FAQ"
        title="Answers to common questions"
        subtitle="Straightforward information about what to expect, how care fits alongside medicine, and when to seek emergency support."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'FAQ' },
        ]}
      />
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqItems} />
        </div>
      </section>
      <CTASection />
    </div>
  )
}
