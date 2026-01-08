import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { PRICING_PLANS } from '@/lib/constants'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing - LeadBuddie',
  description: 'Simple, India-first pricing for WhatsApp CRM and AI chat automation. Start with a 7-day free trial. No credit card required.',
}

const pricingFAQ = [
  {
    question: 'What happens after my free trial?',
    answer: 'After your 7-day free trial, you can choose to continue with any paid plan. If you don\'t want to continue, simply cancel - no charges will be made.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, UPI, and bank transfers. All payments are processed securely.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes! We offer a 7-day money-back guarantee. If you\'re not satisfied, contact us within 7 days for a full refund.',
  },
  {
    question: 'What are WhatsApp conversation charges?',
    answer: 'Meta charges for WhatsApp Business API conversations. These charges are separate from LeadBuddie subscription fees and are billed directly by Meta based on your usage.',
  },
]

export default function PricingPage() {
  return (
    <>
      <Section className="pt-32 pb-16">
        <SectionHeader
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your business. All plans include a 7-day free trial."
          centered
        />
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {PRICING_PLANS.map((plan) => (
            <Card
              key={plan.id}
              className={`relative ${plan.highlighted ? 'border-teal-500 border-2 shadow-lg' : ''}`}
              hover
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="teal">Most Popular</Badge>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price === 0 ? 'Free' : `₹${plan.price}`}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-teal-600 flex-shrink-0 mr-2 mt-0.5" size={18} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href={plan.cta === 'Contact Us' ? '/contact' : 'https://app.leadbuddie.com'}
                variant={plan.highlighted ? 'primary' : 'outline'}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <div className="bg-teal-50 rounded-xl p-6 mb-16">
          <p className="text-sm text-gray-700 text-center">
            <strong>Note:</strong> WhatsApp conversation charges by Meta may apply. These are separate from LeadBuddie subscription fees.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <FAQAccordion items={pricingFAQ} />
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray" className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start your 7-day free trial. No credit card required.
          </p>
          <Button href="https://app.leadbuddie.com" size="lg">
            Start Free Trial
          </Button>
        </div>
      </Section>
    </>
  )
}
