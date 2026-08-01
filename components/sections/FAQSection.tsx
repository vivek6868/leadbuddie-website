import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { HOMEPAGE_FAQ as faqItems } from '@/lib/faq'

export function FAQSection() {
  return (
    <Section>
      <SectionHeader
        label="FAQ"
        title="Questions owners ask before putting Buddie on WhatsApp"
        description="How setup, business knowledge, automatic replies, requests and human handover work."
        centered
        className="mb-12"
      />
      <div className="mx-auto max-w-3xl">
        <FAQAccordion items={faqItems} />
      </div>
    </Section>
  )
}
