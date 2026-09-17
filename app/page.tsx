import { PremiumHome } from '@/components/home/PremiumHome'
import { JsonLd } from '@/components/seo/JsonLd'
import { softwareApplicationSchema, faqSchema } from '@/lib/seo'
import { HOMEPAGE_FAQ } from '@/lib/faq'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LeadBuddie — AI Sales Employee for WhatsApp',
  description:
    'LeadBuddie is the AI sales employee for WhatsApp. It answers enquiries from approved business knowledge, understands voice notes and replies in voice, collects the right details, and turns leads into bookings, quote requests or team handovers.',
  keywords:
    'AI sales employee for WhatsApp, WhatsApp AI employee, WhatsApp lead management software, WhatsApp booking automation, WhatsApp quote request, WhatsApp CRM India, WhatsApp Business API, train AI for business, WhatsApp automation for small business, WhatsApp voice AI, AI reply to WhatsApp voice notes, AI voice replies Hindi Tamil Malayalam',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'LeadBuddie — AI Sales Employee for WhatsApp',
    description:
      'Train an AI employee for your WhatsApp business. Buddie answers enquiries, collects the right details, and moves leads to bookings, quotes or your team.',
    url: 'https://leadbuddie.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeadBuddie — AI Sales Employee for WhatsApp',
    description:
      'The AI sales employee that turns WhatsApp enquiries into qualified next steps.',
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
