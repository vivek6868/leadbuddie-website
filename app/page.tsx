import { Hero } from '@/components/home/Hero'
import {
  TrustStrip,
  NumbersBand,
  MeetBuddie,
  AutonomyModes,
  BuiltForGlobal,
  FinalCTA,
} from '@/components/home/Sections'
import { HomePricing } from '@/components/home/HomePricing'
import { BookingWow, TodaysBookings } from '@/components/home/BookingWow'
import { ProblemSolution } from '@/components/home/ProblemSolution'
import { HowItWorksBand } from '@/components/home/HowItWorksBand'
import { WorksForYourBusiness } from '@/components/home/WorksForYourBusiness'
import { VoiceAndLanguage } from '@/components/home/VoiceAndLanguage'
import { ProductAwareness } from '@/components/home/ProductAwareness'
import { CustomerLifecycle } from '@/components/sections/CustomerLifecycle'
import { RevenueCalculator } from '@/components/sections/RevenueCalculator'
import { Outcomes } from '@/components/sections/Outcomes'
import { FAQSection } from '@/components/sections/FAQSection'
import { FounderSection } from '@/components/sections/FounderSection'
import { JsonLd } from '@/components/seo/JsonLd'
import { softwareApplicationSchema, faqSchema } from '@/lib/seo'
import { HOMEPAGE_FAQ } from '@/lib/faq'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LeadBuddie — AI Sales Employee for WhatsApp that Books Leads',
  description:
    'AI sales employee for WhatsApp — Buddie replies to leads, understands voice notes, speaks Hindi, Tamil & 10+ languages, follows up automatically, qualifies serious customers, and books calls, demos, site visits & appointments. Official WhatsApp Business API. Free 30-day trial, no card.',
  keywords:
    'AI sales employee for WhatsApp, WhatsApp CRM India, WhatsApp automation for business, WhatsApp appointment booking, WhatsApp lead management software, AI chatbot for WhatsApp, WhatsApp Business API India, book appointments on WhatsApp, WhatsApp voice note transcription, WhatsApp AI in Hindi, WhatsApp AI in Tamil, multilingual WhatsApp chatbot, WhatsApp chat translation',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'LeadBuddie — AI Sales Employee for WhatsApp',
    description:
      'Buddie replies to your WhatsApp leads — even voice notes, in Hindi, Tamil & 10+ languages — follows up, qualifies serious customers, and books calls, demos, site visits & appointments automatically.',
    url: 'https://leadbuddie.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeadBuddie — AI Sales Employee for WhatsApp',
    description:
      'Buddie replies, follows up, qualifies, and books your WhatsApp leads automatically. Built for Indian businesses. Free 30-day trial.',
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={[softwareApplicationSchema(), faqSchema(HOMEPAGE_FAQ)]} />

      {/* WhatsApp Premium homepage — AI Sales Employee + Bookings positioning */}
      <Hero />
      <TrustStrip />

      {/* 1. The wow moment: WhatsApp chat → booked customer */}
      <BookingWow />

      {/* 2. Owner's morning view — Today's Bookings */}
      <TodaysBookings />

      {/* 3. Problem → Solution (the daily WhatsApp headache) */}
      <ProblemSolution />

      {/* 4. Proof numbers */}
      <NumbersBand />

      {/* 5. Meet the AI Employee (approval desk) */}
      <MeetBuddie />

      {/* 6. How it works — 3-step band */}
      <HowItWorksBand />

      {/* 7. The 3 Autonomy/Trust Modes */}
      <AutonomyModes />

      {/* 8. Works for your business — vertical grid */}
      <WorksForYourBusiness />

      {/* 9. Voice notes & every language — Buddie hears, replies, translates */}
      <VoiceAndLanguage />

      {/* 10. Product Awareness Agent — sends the right product */}
      <ProductAwareness />

      {/* 10. Full lead journey & screenshots */}
      <CustomerLifecycle />

      {/* 10. ROI / AMC Revenue Leak Calculator */}
      <RevenueCalculator />

      {/* 11. Metrics & Verified Customer Stories */}
      <Outcomes />

      {/* 12. Built for India · multilingual */}
      <BuiltForGlobal />

      <HomePricing />
      <FinalCTA />

      {/* Retained shared sections */}
      <FAQSection />
      <FounderSection />
    </>
  )
}
