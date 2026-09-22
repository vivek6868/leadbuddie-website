import { Metadata } from 'next'
import { FeatureList } from '@/components/features/FeatureList'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, SITE_URL, softwareApplicationSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Features — LeadBuddie AI Sales Employee for WhatsApp',
  description: 'Explore LeadBuddie capabilities for approved WhatsApp replies, business training, product-aware conversations, booking and quote requests, follow-ups, handover and team collaboration.',
  alternates: { canonical: '/features' },
  openGraph: {
    title: 'Features — LeadBuddie AI Sales Employee for WhatsApp',
    description:
      'Approved WhatsApp replies, product-aware conversations, booking and quote requests, follow-ups, AMC renewals, handover and team collaboration.',
    url: `${SITE_URL}/features`,
    type: 'website',
  },
}

export default function FeaturesPage() {
  return (
    <>
      <JsonLd
        data={[
          softwareApplicationSchema({ url: `${SITE_URL}/features` }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Features', path: '/features' },
          ]),
        ]}
      />
      <FeatureList />
      <ComplianceSection />
      <CTASection />
    </>
  )
}
