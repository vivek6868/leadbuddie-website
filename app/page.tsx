import { HeroCinematic } from '@/components/sections/HeroCinematic'
import { MetaTechProviderBadge } from '@/components/sections/MetaTechProviderBadge'
import { WorkflowStory } from '@/components/sections/WorkflowStory'
import { WaterPurifierPack } from '@/components/sections/WaterPurifierPack'
import { BuddieAgent } from '@/components/sections/BuddieAgent'
import { IndustryPacks } from '@/components/sections/IndustryPacks'
import { SocialProof } from '@/components/sections/SocialProof'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PricingPreviewNew } from '@/components/sections/PricingPreviewNew'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTACinematic } from '@/components/sections/FinalCTACinematic'
import { FounderSection } from '@/components/sections/FounderSection'

export default function HomePage() {
  return (
    <>
      {/* 1 — Cinematic hero: the living operational workspace */}
      <HeroCinematic />

      <MetaTechProviderBadge />

      {/* 2 — Workflow story: one message becomes the whole lifecycle */}
      <WorkflowStory />

      {/* 3 — Flagship operational pack (visual centerpiece) */}
      <WaterPurifierPack />

      {/* 4 — Buddie: calm operational intelligence */}
      <BuddieAgent />

      {/* 5 — Industry packs: built to scale */}
      <IndustryPacks />

      {/* 6 — Social proof / trust */}
      <SocialProof />
      <TestimonialsSection />

      {/* Conversion essentials */}
      <PricingPreviewNew />
      <FAQSection />

      {/* 7 — Cinematic final CTA */}
      <FinalCTACinematic />
      <FounderSection />
    </>
  )
}
