import { HeroNew } from '@/components/sections/HeroNew'
import { TrustBar } from '@/components/sections/TrustBar'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FeatureHighlights } from '@/components/sections/FeatureHighlights'
import { FeatureShowcase } from '@/components/sections/FeatureShowcase'
import { DemoSection } from '@/components/sections/DemoSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PricingPreviewNew } from '@/components/sections/PricingPreviewNew'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <HeroNew />
      <TrustBar />
      <HowItWorks />
      <FeatureHighlights />
      <FeatureShowcase />
      <DemoSection />
      <TestimonialsSection />
      <PricingPreviewNew />
      <FAQSection />
      <FinalCTA />
    </>
  )
}

