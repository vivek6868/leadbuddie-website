import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { PricingGrid } from '@/components/pricing/PricingGrid'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, SITE_URL } from '@/lib/seo'
import { PRICING_PLANS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Pricing — LeadBuddie AI Sales Employee for WhatsApp',
  description:
    'LeadBuddie pricing for Indian businesses — plans from ₹999/month for AI replies, follow-ups, lead qualification, bookings, campaigns and multi-number WhatsApp. Start a 30-day free Growth trial, no credit card.',
  keywords:
    'LeadBuddie pricing, WhatsApp CRM pricing India, WhatsApp automation price, AI sales employee cost, WhatsApp Business API pricing India',
  alternates: { canonical: '/pricing' },
}

// Product + per-plan Offer schema → eligible for Google price-rich results and
// gives AI answer engines accurate, citable pricing for LeadBuddie.
const pricingProductSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'LeadBuddie — AI Sales Employee for WhatsApp',
  description:
    'AI sales employee for WhatsApp that replies to leads, follows up automatically, qualifies serious customers, and books callbacks, demos, site visits and appointments. Built for Indian businesses on the official WhatsApp Business API.',
  brand: { '@type': 'Brand', name: 'LeadBuddie' },
  url: `${SITE_URL}/pricing`,
  offers: PRICING_PLANS.map((p) => ({
    '@type': 'Offer',
    name: `${p.name} plan`,
    price: String(p.price),
    priceCurrency: 'INR',
    url: `${SITE_URL}/pricing`,
    availability: 'https://schema.org/InStock',
    description: p.description,
  })),
}

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          pricingProductSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Pricing', path: '/pricing' },
          ]),
        ]}
      />
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
