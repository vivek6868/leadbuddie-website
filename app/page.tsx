import { Hero } from '@/components/home/Hero'
import {
  TrustStrip,
  NumbersBand,
  MeetBuddie,
  AutonomyModes,
  BuiltForGlobal,
  Pricing,
  FinalCTA,
} from '@/components/home/Sections'
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
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={[softwareApplicationSchema(), faqSchema(HOMEPAGE_FAQ)]} />

      {/* WhatsApp Premium homepage — Claude Design handoff (light/green direction) */}
      <Hero />
      <TrustStrip />
      <NumbersBand />
      
      {/* 1. Meet the AI Employee */}
      <MeetBuddie />
      
      {/* 2. Interactive Customer Journey & screenshots */}
      <CustomerLifecycle />
      
      {/* 3. The 3 Autonomy/Trust Modes */}
      <AutonomyModes />
      
      {/* 4. ROI / AMC Revenue Leak Calculator */}
      <RevenueCalculator />
      
      {/* 5. Metrics & Verified Customer Stories */}
      <Outcomes />
      
      {/* 6. Global multi-currency support */}
      <BuiltForGlobal />
      
      <Pricing />
      <FinalCTA />

      {/* Retained shared sections */}
      <FAQSection />
      <FounderSection />
    </>
  )
}
