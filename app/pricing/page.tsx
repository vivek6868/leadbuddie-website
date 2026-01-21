import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { PricingGrid } from '@/components/pricing/PricingGrid'

export const metadata: Metadata = {
  title: 'Pricing - LeadBuddie',
  description: 'Simple, India-first pricing for WhatsApp CRM and AI chat automation. Start with a 7-day free trial. No credit card required.',
}

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

      <PricingGrid />

      {/* CTA */}
      <Section background="gray" className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">
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
