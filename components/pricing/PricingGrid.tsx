'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { PRICING_PLANS } from '@/lib/constants'
import { Check } from 'lucide-react'

const pricingFAQ = [
  {
    question: 'What happens after my free trial?',
    answer:
      "After your 7-day free trial, you can choose to continue with any paid plan. If you don't want to continue, simply cancel - no charges will be made.",
  },
  {
    question: 'Can I change plans later?',
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.",
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, debit cards, UPI, and bank transfers. All payments are processed securely.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer:
      "Yes! We offer a 7-day money-back guarantee. If you're not satisfied, contact us within 7 days for a full refund.",
  },
  {
    question: 'What are WhatsApp conversation charges?',
    answer:
      'Meta charges for WhatsApp Business API conversations. These charges are separate from LeadBuddie subscription fees and are billed directly by Meta based on your usage.',
  },
]

type BillingPeriod = 'monthly' | 'annual'

export function PricingGrid() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly')
  const isAnnual = billingPeriod === 'annual'

  return (
    <>
      <Section>
        {/* Billing toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center rounded-full bg-gray-100 p-1 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 rounded-full transition-all ${
                !isAnnual ? 'bg-white text-ink shadow-sm' : 'text-gray-500'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod('annual')}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-1 ${
                isAnnual ? 'bg-white text-ink shadow-sm' : 'text-gray-500'
              }`}
            >
              Annual
              <span className="text-[10px] font-semibold text-teal-600 uppercase tracking-wide">
                2 months free
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {PRICING_PLANS.map((plan) => {
            const monthlyPrice = plan.price
            const annualPrice = monthlyPrice === 0 ? 0 : monthlyPrice * 10 // 2 months free (12 - 2 = 10)
            const displayPrice = isAnnual ? annualPrice : monthlyPrice
            const periodLabel = displayPrice === 0 ? 'month' : isAnnual ? 'year' : 'month'
            const showSavings = isAnnual && monthlyPrice > 0

            return (
              <Card
                key={plan.id}
                className={`relative ${
                  plan.highlighted ? 'border-teal-500 border-2 shadow-lg shadow-teal-500/20' : ''
                }`}
                hover
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="teal">Most Popular</Badge>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-ink mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-1">
                    <span className="text-4xl font-bold text-ink">
                      {displayPrice === 0 ? 'Free' : `₹${displayPrice.toLocaleString('en-IN')}`}
                    </span>
                    {displayPrice > 0 && (
                      <span className="text-gray-600 ml-2">/{periodLabel}</span>
                    )}
                  </div>
                  {showSavings && (
                    <p className="text-xs font-semibold text-teal-600 mb-1">
                      Save 2 months with annual billing
                    </p>
                  )}
                  {monthlyPrice > 0 && (
                    <p className="text-xs text-gray-500">
                      {isAnnual
                        ? `₹${monthlyPrice.toLocaleString('en-IN')}/month, billed annually`
                        : 'Billed monthly'}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 mt-3">{plan.description}</p>
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
            )
          })}
        </div>

        <div className="bg-teal-50 rounded-xl p-6 mb-16">
          <p className="text-sm text-gray-700 text-center">
            <strong>Note:</strong> WhatsApp conversation charges by Meta may apply. These are
            separate from LeadBuddie subscription fees.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-ink mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={pricingFAQ} />
        </div>
      </Section>
    </>
  )
}


