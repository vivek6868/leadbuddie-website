import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { PRICING_PLANS } from '@/lib/constants'
import { Check } from 'lucide-react'

export function PricingPreviewNew() {
  return (
    <Section>
      <SectionHeader
        label="Pricing"
        title="Simple, Transparent Pricing"
        description="Start with a 7-day free trial. No credit card required."
        centered
        className="mb-16"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRICING_PLANS.map((plan) => (
          <Card
            key={plan.id}
            className={`relative ${plan.highlighted ? 'border-teal-500 border-2 shadow-lg' : ''}`}
            hover
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge variant="teal">Most Popular</Badge>
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price === 0 ? 'Free' : `₹${plan.price}`}
                </span>
                {plan.price > 0 && (
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                )}
              </div>
              <p className="text-sm text-gray-600">{plan.description}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-teal-600 flex-shrink-0 mr-2 mt-0.5" size={18} />
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              href={plan.cta === 'Contact Us' ? '/contact' : 'https://app.leadbuddie.com'}
              variant={plan.highlighted ? 'primary' : 'outline'}
              className="w-full"
            >
              {plan.cta}
            </Button>
          </Card>
        ))}
      </div>
      <p className="text-center text-sm text-gray-500 mt-8">
        * WhatsApp conversation charges by Meta may apply.
      </p>
    </Section>
  )
}

