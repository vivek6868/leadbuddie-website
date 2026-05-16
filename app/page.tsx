import { HeroNew } from '@/components/sections/HeroNew'
import { MetaTechProviderBadge } from '@/components/sections/MetaTechProviderBadge'
import { WhatsAppFlowDemo } from '@/components/sections/WhatsAppFlowDemo'
import { AiCopilotCapabilities } from '@/components/sections/AiCopilotCapabilities'
import { LeadToRenewalFlow } from '@/components/sections/LeadToRenewalFlow'
import { WaterPurifierPack } from '@/components/sections/WaterPurifierPack'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PricingPreviewNew } from '@/components/sections/PricingPreviewNew'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { FounderSection } from '@/components/sections/FounderSection'

function Reveal({ children }: { children: React.ReactNode }) {
  return <div data-reveal>{children}</div>
}

export default function HomePage() {
  return (
    <>
      <HeroNew />
      <MetaTechProviderBadge />
      <Reveal><WhatsAppFlowDemo /></Reveal>
      <Reveal><AiCopilotCapabilities /></Reveal>
      <Reveal><LeadToRenewalFlow /></Reveal>
      <Reveal><WaterPurifierPack /></Reveal>
      <Reveal><TestimonialsSection /></Reveal>
      <Reveal><PricingPreviewNew /></Reveal>
      <Reveal><FAQSection /></Reveal>
      <Reveal><FinalCTA /></Reveal>
      <Reveal><FounderSection /></Reveal>
    </>
  )
}
