import { Section } from '@/components/ui/Section'
import { PRICING_PLANS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'
import { Check } from 'lucide-react'
import Link from 'next/link'

export function PricingPreview() {
  return (
    <Section className="bg-dark-800/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-dark-300 max-w-2xl mx-auto">
          Start with a 14-day free trial. No credit card required.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`bg-dark-900 border rounded-lg p-6 ${
              plan.highlighted
                ? 'border-primary-600 shadow-lg shadow-primary-600/20'
                : 'border-dark-700'
            }`}
          >
            {plan.highlighted && (
              <div className="text-center mb-4">
                <span className="inline-block bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-dark-400 text-sm mb-4">{plan.description}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">
                {formatPrice(plan.price, plan.currency)}
              </span>
              <span className="text-dark-400">/{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-dark-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              href="/pricing"
              variant={plan.highlighted ? 'primary' : 'outline'}
              className="w-full"
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <Button href="/pricing" variant="ghost" size="lg">
          View Full Pricing Details →
        </Button>
      </div>
    </Section>
  )
}

