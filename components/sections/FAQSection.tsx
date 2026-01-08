import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FAQAccordion } from '@/components/ui/FAQAccordion'

const faqItems = [
  {
    question: 'How does LeadBuddie connect to WhatsApp?',
    answer: 'LeadBuddie connects to your WhatsApp Business number through the official WhatsApp Business API. We guide you through a simple setup process that takes just a few minutes. All your conversations sync automatically to your LeadBuddie inbox.',
  },
  {
    question: 'Do I need a WhatsApp Business API account?',
    answer: 'Yes, you need a WhatsApp Business API account. We help you set this up during onboarding. If you already have one, you can connect it directly.',
  },
  {
    question: 'Can my team collaborate on leads?',
    answer: 'Yes! LeadBuddie is built for teams. You can invite team members, assign chats, add notes, and see who\'s handling which lead. Team members can collaborate in real-time on the same conversations.',
  },
  {
    question: 'How does the AI reply feature work?',
    answer: 'Our AI analyzes the full conversation context and your business description to suggest relevant replies. You can edit the suggestions before sending. The AI learns from your business to provide better suggestions over time.',
  },
  {
    question: 'What happens during the free trial?',
    answer: 'You get full access to all features for 7 days. No credit card required. After the trial, you can choose a plan that fits your needs. If you don\'t continue, your account will be paused.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription anytime from the billing page. Your service will remain active until the end of your current billing period. No cancellation fees apply.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use industry-standard encryption, secure data isolation between businesses, and comply with data protection regulations. Your WhatsApp conversations and lead data are private and secure.',
  },
  {
    question: 'What support do you offer?',
    answer: 'All plans include email support. Growth and above plans get priority support. Enterprise plans include dedicated account management and SLA-backed support.',
  },
]

export function FAQSection() {
  return (
    <Section background="gray">
      <SectionHeader
        label="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about LeadBuddie"
        centered
        className="mb-12"
      />
      <div className="max-w-3xl mx-auto">
        <FAQAccordion items={faqItems} />
      </div>
    </Section>
  )
}

