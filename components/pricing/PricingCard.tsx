import { PricingPlan } from '@/lib/types'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'
import { Check } from 'lucide-react'

export function PricingCard({ 
  name, 
  price, 
  currency, 
  period, 
  description, 
  features, 
  cta, 
  highlighted 
}: PricingPlan) {
  return (
    <div
      className={`bg-dark-900 border rounded-lg p-6 md:p-8 relative ${
        highlighted
          ? 'border-primary-600 shadow-lg shadow-primary-600/20 scale-105'
          : 'border-dark-700'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-dark-400 text-sm mb-4">{description}</p>
        <div>
          <span className="text-4xl font-bold">
            {formatPrice(price, currency)}
          </span>
          <span className="text-dark-400">/{period}</span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2">
            <Check className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
            <span className="text-dark-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button
        href={cta === 'Talk to Sales' || cta === 'Contact Us' ? '/contact' : cta === 'Start Free Trial' ? 'https://app.leadbuddie.com' : '/pricing'}
        variant={highlighted ? 'primary' : 'outline'}
        className="w-full"
      >
        {cta}
      </Button>
    </div>
  )
}

