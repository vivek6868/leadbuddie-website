import { HeroNew } from '@/components/sections/HeroNew'
import { WhatsAppFlowDemo } from '@/components/sections/WhatsAppFlowDemo'
import { AiCopilotCapabilities } from '@/components/sections/AiCopilotCapabilities'
import { LeadToRenewalFlow } from '@/components/sections/LeadToRenewalFlow'
import { WaterPurifierPack } from '@/components/sections/WaterPurifierPack'
import { IndustryEarlyAccess } from '@/components/sections/IndustryEarlyAccess'
import { MetaTechProviderBadge } from '@/components/sections/MetaTechProviderBadge'
import { CustomerProofSection } from '@/components/sections/CustomerProofSection'
import { WhoIsThisFor } from '@/components/sections/WhoIsThisFor'
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection'
import { ValuePropositions } from '@/components/sections/ValuePropositions'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { SafetyReassurance } from '@/components/sections/SafetyReassurance'
import { ChatbotWebsiteSection } from '@/components/sections/ChatbotWebsiteSection'
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
      <WhatsAppFlowDemo />
      <AiCopilotCapabilities />
      <LeadToRenewalFlow />
      <WaterPurifierPack />
      <IndustryEarlyAccess />
      <CustomerProofSection />
      <WhoIsThisFor />
      <BeforeAfterSection />
      <ValuePropositions />
      <HowItWorks />
      <SafetyReassurance />
      <ChatbotWebsiteSection />
      {/* Removed: SolutionsPath (generic "Pick your perfect LeadBuddie path" tabs — did not reinforce AI co-pilot positioning) */}
      {/* Removed: IndustryExamples (replaced by WaterPurifierPack + IndustryEarlyAccess above) */}
      {/* Retired: BuiltForIndustry — split into WaterPurifierPack (live) + IndustryEarlyAccess (next verticals). File kept on disk, no longer imported. */}
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
