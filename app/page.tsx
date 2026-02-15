import { HeroNew } from '@/components/sections/HeroNew'
import { TrustedByStrip } from '@/components/sections/TrustedByStrip'
import { HeroValueCard } from '@/components/sections/HeroValueCard'
import { TrustBar } from '@/components/sections/TrustBar'
import { ValuePropositions } from '@/components/sections/ValuePropositions'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ChatbotWebsiteSection } from '@/components/sections/ChatbotWebsiteSection'
import { SolutionsPath } from '@/components/sections/SolutionsPath'
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
      <TrustedByStrip />
      <HeroValueCard />
      <TrustBar />
      <ValuePropositions />
      <HowItWorks />
      <ChatbotWebsiteSection />
      <SolutionsPath />
      <FeatureShowcase />
      <DemoSection />
      <TestimonialsSection />
      <PricingPreviewNew />
      <FAQSection />
      <FinalCTA />
    </>
  )
}

