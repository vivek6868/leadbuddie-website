import { PremiumHome } from '@/components/home/PremiumHome'
import { JsonLd } from '@/components/seo/JsonLd'
import { softwareApplicationSchema, faqSchema } from '@/lib/seo'
import { HOMEPAGE_FAQ } from '@/lib/faq'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LeadBuddie — Software for Water Treatment, Travel & Retail Businesses',
  description:
    'LeadBuddie keeps track of your customers for you — who is due for service, whose AMC is running out, who is still waiting for a reply. Built for water purifier dealers, travel agencies and retail businesses in India.',
  keywords:
    'water purifier service management software, RO service management software, water treatment business software, AMC renewal software India, water purifier dealer software, service due management software, travel agency software India, retail business software India',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'LeadBuddie — Every Customer Looked After, Every Time',
    description:
      'Buddie keeps track of who is due for service, whose renewal is coming up and who is waiting for a reply — then hands your team a job that is ready to do.',
    url: 'https://leadbuddie.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeadBuddie — Every Customer Looked After, Every Time',
    description:
      'Service visits, AMC renewals and customer enquiries — tracked, prepared and followed up. Built first for water purifier businesses in India.',
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
