import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { HOMEPAGE_FAQ as faqItems } from '@/lib/faq'

export function FAQSection() {
  return (
    <Section>
      <SectionHeader
        label="FAQ"
        title="Questions owners ask before giving Buddie real work"
        description="Setup, what Buddie can say, what it can send, and where your team steps in."
        centered
        className="mb-12"
      />
      <div className="mx-auto max-w-3xl">
        <FAQAccordion items={faqItems} />
      </div>
    </Section>
  )
}
