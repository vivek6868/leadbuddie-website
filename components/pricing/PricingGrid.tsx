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
          <div className="inline-flex items-center rounded-full border border-border bg-bg-card p-1 text-xs font-semibold shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
            <button
              type="button"
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 rounded-full transition-all ${
                !isAnnual ? 'bg-brand text-white shadow-[0_8px_24px_rgba(124,58,237,0.35)]' : 'text-text-secondary'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod('annual')}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-1 ${
                isAnnual ? 'bg-brand text-white shadow-[0_8px_24px_rgba(124,58,237,0.35)]' : 'text-text-secondary'
              }`}
            >
              Annual
              <span className="text-[10px] font-semibold text-wa uppercase tracking-wide">
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
                  plan.highlighted ? 'border-brand border-2 shadow-[0_22px_80px_rgba(124,58,237,0.28)]' : ''
                }`}
                hover
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="teal">Most Popular</Badge>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold text-text-primary">{plan.name}</h3>
                  <div className="flex items-baseline mb-1">
                    <span className="text-4xl font-bold text-text-primary">
                      {displayPrice === 0 ? 'Free' : `₹${displayPrice.toLocaleString('en-IN')}`}
                    </span>
                    {displayPrice > 0 && (
                      <span className="ml-2 text-text-secondary">/{periodLabel}</span>
                    )}
                  </div>
                  {showSavings && (
                    <p className="mb-1 text-xs font-semibold text-wa">
                      Save 2 months with annual billing
                    </p>
                  )}
                  {monthlyPrice > 0 && (
                    <p className="text-xs text-text-muted">
                      {isAnnual
                        ? `₹${monthlyPrice.toLocaleString('en-IN')}/month, billed annually`
                        : 'Billed monthly'}
                    </p>
                  )}
                  <p className="mt-3 text-sm text-text-secondary">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 mt-0.5 flex-shrink-0 text-wa" size={18} />
                      <span className="text-sm text-text-secondary">{feature}</span>
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

        <div className="mb-16 rounded-2xl border border-border bg-bg-card/90 p-6">
          <p className="text-center text-sm text-text-secondary">
            <strong className="text-text-primary">Note:</strong> WhatsApp conversation charges by Meta may apply. These are
            separate from LeadBuddie subscription fees.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="mb-8 text-center text-2xl font-bold text-text-primary">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={pricingFAQ} />
        </div>
      </Section>
    </>
  )
}


