import { Metadata } from 'next'
import { FeatureList } from '@/components/features/FeatureList'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { CTASection } from '@/components/sections/CTASection'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Features — LeadBuddie AI Sales Employee for WhatsApp',
  description: 'AI-powered inbox, automation, smart follow-ups, and collaboration for WhatsApp + Instagram CRM teams.',
  alternates: { canonical: '/features' },
}

export default function FeaturesPage() {
  return (
    <>
      <FeatureList />
      <ComplianceSection />
      <CTASection 
        title="Ready to Get Started?"
        description="Start your free trial and see how LeadBuddie can transform your lead management."
      />
    </>
  )
}

