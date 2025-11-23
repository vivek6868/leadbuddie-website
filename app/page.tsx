import { Hero } from '@/components/sections/Hero'
import { ProblemStatement } from '@/components/sections/ProblemStatement'
import { FeaturesShowcase } from '@/components/sections/FeaturesShowcase'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { Screenshots } from '@/components/sections/Screenshots'
import { PricingPreview } from '@/components/sections/PricingPreview'
import { TrustBadges } from '@/components/sections/TrustBadges'
import { CTASection } from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <FeaturesShowcase />
      <Screenshots />
      <ComplianceSection />
      <PricingPreview />
      <TrustBadges />
      <CTASection />
    </>
  )
}

