import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { PRICING_PLANS } from '@/lib/constants'
import { Check } from 'lucide-react'

export function PricingPreviewNew() {
  return (
    <Section background="gray">
      <SectionHeader
        label="Pricing"
        title="Choose the plan that fits your social sales flow"
        description="Every plan is built for WhatsApp + Instagram CRM workflows, with a 7-day free trial to get started."
        centered
        className="mb-16"
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {PRICING_PLANS.slice(0, 4).map((plan) => (
          <Card key={plan.id} className={plan.highlighted ? 'border-brand' : ''} hover>
            {plan.highlighted && <Badge className="mb-5">Most Popular</Badge>}
            <h3 className="text-2xl font-bold text-text-primary">{plan.name}</h3>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-4xl font-bold text-text-primary">{plan.price === 0 ? 'Free' : `₹${plan.price}`}</span>
              {plan.price > 0 && <span className="pb-1 text-text-secondary">/month</span>}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{plan.description}</p>
            <ul className="mt-6 space-y-3">
              {plan.features.slice(0, 4).map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-text-secondary">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-wa" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={plan.cta === 'Contact Us' ? '/contact' : 'https://app.leadbuddie.com'} variant={plan.highlighted ? 'primary' : 'outline'} className="w-full">
                {plan.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-text-secondary">Meta conversation charges may apply separately based on usage.</p>
    </Section>
  )
}
