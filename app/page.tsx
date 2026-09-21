import { PremiumHome } from '@/components/home/PremiumHome'
import { JsonLd } from '@/components/seo/JsonLd'
import { softwareApplicationSchema, faqSchema } from '@/lib/seo'
import { HOMEPAGE_FAQ } from '@/lib/faq'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LeadBuddie — Agentic Business Operations for Water Treatment, Travel & Retail',
  description:
    'LeadBuddie is an agentic business operations platform for water-treatment companies, travel agencies and retail businesses. It watches customer cycles, prepares the next action and helps teams complete service, renewal, quote and order work.',
  keywords:
    'agentic business operations, AI operations agent India, water purifier service management software, RO service management software, water treatment business software, AI agent for travel agencies, AI agent for retail business, AMC renewal software',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'LeadBuddie — Give Every Customer Cycle an Operator',
    description:
      'Agentic business operations for water treatment, travel and retail. Buddie watches what is due, prepares the next action and keeps work moving.',
    url: 'https://leadbuddie.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeadBuddie — Agentic Business Operations',
    description:
      'Give every customer cycle an operator. Built first for water-treatment operations, with purpose-built workflows for travel and retail.',
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={[softwareApplicationSchema(), faqSchema(HOMEPAGE_FAQ)]} />

      <PremiumHome />
    </>
  )
}
