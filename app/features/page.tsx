import { Metadata } from 'next'
import { FeatureList } from '@/components/features/FeatureList'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { CTASection } from '@/components/sections/CTASection'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Features - LeadBuddie',
  description: 'AI-powered lead scoring, WhatsApp integration, smart follow-ups, and more. Everything you need to manage WhatsApp leads effectively.',
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

