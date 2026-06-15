import { HeroCinematic } from '@/components/sections/HeroCinematic'
import { MetaTechProviderBadge } from '@/components/sections/MetaTechProviderBadge'
import { ProblemStatement } from '@/components/sections/ProblemStatement'
import { BuddieAgent } from '@/components/sections/BuddieAgent'
import { AutonomyModes } from '@/components/sections/AutonomyModes'
import { RevenueCalculator } from '@/components/sections/RevenueCalculator'
import { CustomerLifecycle } from '@/components/sections/CustomerLifecycle'
import { IndustryPacks } from '@/components/sections/IndustryPacks'
import { Outcomes } from '@/components/sections/Outcomes'
import { SocialProof } from '@/components/sections/SocialProof'
import { PricingPreviewNew } from '@/components/sections/PricingPreviewNew'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTACinematic } from '@/components/sections/FinalCTACinematic'
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

      {/* 1 — Cinematic Hero */}
      <HeroCinematic />
      <MetaTechProviderBadge />

      {/* 2 — The Problem (Contrast) */}
      <ProblemStatement />

      {/* 3 — Meet Buddie Agent Work Queue */}
      <BuddieAgent />

      {/* 4 — Autonomy Modes */}
      <AutonomyModes />

      {/* 5 — Revenue Leak Calculator */}
      <RevenueCalculator />

      {/* 6 — Customer Lifecycle Flow */}
      <CustomerLifecycle />

      {/* 7 — Industry Verticals */}
      <IndustryPacks />

      {/* 9 — Outcomes & Verified Testimonials */}
      <Outcomes />

      {/* Trust & Conversion Essentials */}
      <SocialProof />
      <PricingPreviewNew />
      <FAQSection />

      {/* 10 — Final Cinematic CTA & Founder Story */}
      <FinalCTACinematic />
      <FounderSection />
    </>
  )
}

