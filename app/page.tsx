import { HeroNew } from '@/components/sections/HeroNew'
import { MetaTechProviderBadge } from '@/components/sections/MetaTechProviderBadge'
import { CustomerProofSection } from '@/components/sections/CustomerProofSection'
import { WhoIsThisFor } from '@/components/sections/WhoIsThisFor'
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection'
import { ValuePropositions } from '@/components/sections/ValuePropositions'
import { IndustryExamples } from '@/components/sections/IndustryExamples'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { GoogleSheetsIntegrationSection } from '@/components/sections/GoogleSheetsIntegrationSection'
import { SafetyReassurance } from '@/components/sections/SafetyReassurance'
import { ChatbotWebsiteSection } from '@/components/sections/ChatbotWebsiteSection'
import { SolutionsPath } from '@/components/sections/SolutionsPath'
import { FeatureShowcase } from '@/components/sections/FeatureShowcase'
import { DemoSection } from '@/components/sections/DemoSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PricingPreviewNew } from '@/components/sections/PricingPreviewNew'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { FounderSection } from '@/components/sections/FounderSection'

export default function HomePage() {
  return (
    <>
      <HeroNew />
      <MetaTechProviderBadge />
      <CustomerProofSection />
      <GoogleSheetsIntegrationSection />
      <WhoIsThisFor />
      <BeforeAfterSection />
      <ValuePropositions />
      <IndustryExamples />
      <HowItWorks />
      <SafetyReassurance />
      <ChatbotWebsiteSection />
      <SolutionsPath />
      <FeatureShowcase />
      <DemoSection />
      <TestimonialsSection />
      <PricingPreviewNew />
      <FAQSection />
      <FinalCTA />
      <FounderSection />
    </>
  )
}

