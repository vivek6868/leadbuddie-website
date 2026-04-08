import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FAQAccordion } from '@/components/ui/FAQAccordion'

const faqItems = [
  {
    question: 'How does LeadBuddie connect to WhatsApp and Instagram?',
    answer: 'LeadBuddie is designed for businesses that manage customer conversations across WhatsApp and Instagram. We help bring those conversations into one CRM workflow so your team can manage leads with context.',
  },
  {
    question: 'Can my team collaborate on the same leads?',
    answer: 'Yes. Your team can assign chats, add notes, track lead stages, and keep everyone aligned on who owns the next step.',
  },
  {
    question: 'What does the AI actually do?',
    answer: 'LeadBuddie uses AI for things like conversation summaries, reply suggestions, and helping teams understand lead context faster. Your team stays in control of what gets sent.',
  },
  {
    question: 'Is LeadBuddie only for large teams?',
    answer: 'No. It works well for founder-led sales teams, growing service businesses, and larger teams that need a more structured social CRM setup.',
  },
  {
    question: 'What happens during the free trial?',
    answer: 'You get full access to the product so you can experience the inbox, lead management flow, and collaboration setup before committing to a paid plan.',
  },
  {
    question: 'Is our data secure?',
    answer: 'Yes. LeadBuddie is built around secure access, workspace-level visibility, and a structured CRM workflow for customer conversations.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. You can cancel your subscription at any time and your access continues through the end of your active billing period.',
  },
  {
    question: 'How do I book a demo?',
    answer: 'Use any Book Demo button on the site and our team will reach out to schedule a walkthrough based on your use case.',
  },
]

export function FAQSection() {
  return (
    <Section>
      <SectionHeader
        label="FAQ"
        title="Questions teams ask before switching to a better CRM"
        description="Everything you need to know about moving social conversations into LeadBuddie."
        centered
        className="mb-12"
      />
      <div className="mx-auto max-w-3xl">
        <FAQAccordion items={faqItems} />
      </div>
    </Section>
  )
}
