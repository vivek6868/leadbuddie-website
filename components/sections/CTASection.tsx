import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  title?: string
  description?: string
  primaryCTA?: string
  primaryHref?: string
  secondaryCTA?: string
  secondaryHref?: string
}

export function CTASection({
  title = "Ready to Never Lose a Lead Again?",
  description = "Start your 14-day free trial today. No credit card required.",
  primaryCTA = "Start Free Trial",
  primaryHref = "/pricing",
  secondaryCTA,
  secondaryHref,
}: CTASectionProps) {
  return (
    <Section className="bg-gradient-to-r from-primary-600/10 via-secondary-600/10 to-primary-600/10 border-y border-primary-600/20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg text-dark-300 mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" href={primaryHref} className="group">
            {primaryCTA}
            <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          {secondaryCTA && secondaryHref && (
            <Button size="lg" variant="outline" href={secondaryHref}>
              {secondaryCTA}
            </Button>
          )}
        </div>
      </div>
    </Section>
  )
}

