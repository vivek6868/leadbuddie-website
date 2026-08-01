import { Metadata } from 'next'
import { FeatureList } from '@/components/features/FeatureList'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Features — LeadBuddie AI Sales Employee for WhatsApp',
  description: 'Explore LeadBuddie capabilities for approved WhatsApp replies, business training, product-aware conversations, booking and quote requests, follow-ups, handover and team collaboration.',
  alternates: { canonical: '/features' },
}

export default function FeaturesPage() {
  return (
    <>
      <FeatureList />
      <ComplianceSection />
      <CTASection />
    </>
  )
}
