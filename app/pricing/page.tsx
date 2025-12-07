import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { PRICING_PLANS } from '@/lib/constants'
import { PricingCard } from '@/components/pricing/PricingCard'
import { PricingTable } from '@/components/pricing/PricingTable'
import { TrialBanner } from '@/components/pricing/TrialBanner'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Pricing - LeadBuddie',
  description: 'Simple, India-first pricing for WhatsApp CRM and AI chat automation. Start with a 7-day free trial. No credit card required.',
}

export default function PricingPage() {
  return (
    <>
      <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include a 7-day free trial.
          </p>
        </div>

        <TrialBanner />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Feature Comparison</h2>
          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 overflow-x-auto">
            <PricingTable />
          </div>
        </div>

        <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">What happens after my free trial?</h3>
              <p className="text-dark-300">
                After your 7-day free trial, you can choose to continue with any paid plan. 
                If you don't want to continue, simply cancel - no charges will be made.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I change plans later?</h3>
              <p className="text-dark-300">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we'll prorate any charges.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-dark-300">
                We accept all major credit cards, debit cards, UPI, and bank transfers. 
                All payments are processed securely.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Is there a money-back guarantee?</h3>
              <p className="text-dark-300">
                Yes! We offer a 7-day money-back guarantee. If you're not satisfied, 
                contact us within 7 days for a full refund.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <CTASection />
    </>
  )
}

