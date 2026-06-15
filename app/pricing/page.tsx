import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { PricingGrid } from '@/components/pricing/PricingGrid'

export const metadata: Metadata = {
  title: 'Pricing — LeadBuddie AI Sales Employee for WhatsApp',
  description: 'Simple, transparent pricing for growing businesses. Start with a 30-day free trial of the Growth plan — no credit card required. Plans from ₹999/month.',
  alternates: { canonical: '/pricing' },
}

export default function PricingPage() {
  return (
    <>
      <Section className="pt-32 pb-16">
        <SectionHeader
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your business. Every signup starts with a 30-day free trial of the Growth plan — no credit card required."
          centered
        />
      </Section>

      <PricingGrid />

      {/* CTA */}
      <Section background="gray" className="py-16">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-text-primary">
            Ready to get started?
          </h2>
          <p className="mb-8 text-lg text-text-secondary">
            Start your 30-day free trial — full Growth plan access. No credit card required.
          </p>
          <Button href="https://app.leadbuddie.com" size="lg">
            Start Free Trial
          </Button>
        </div>
      </Section>
    </>
  )
}
