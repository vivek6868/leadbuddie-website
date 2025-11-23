import { Section } from '@/components/ui/Section'
import { FEATURES } from '@/lib/constants'
import * as Icons from 'lucide-react'
import { FeatureCard } from './FeatureCard'

export function FeatureList() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Powerful Features for Lead Management
        </h1>
        <p className="text-lg text-dark-300 max-w-2xl mx-auto">
          Everything you need to manage WhatsApp leads effectively
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((feature) => {
          const IconComponent = (Icons as any)[feature.icon] || Icons.Sparkles
          return (
            <FeatureCard
              key={feature.id}
              {...feature}
              icon={IconComponent}
            />
          )
        })}
      </div>
      
      <div className="mt-12 bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-4">WhatsApp Integration & Compliance</h2>
        <p className="text-dark-300 mb-4">
          Our WhatsApp Business API integration helps you manage leads that come through your WhatsApp Business number. 
          We receive and organize conversations, generate insights, and help you follow up effectively.
        </p>
        <div className="bg-dark-900 border border-dark-700 rounded-lg p-4">
          <p className="text-sm text-dark-400">
            <strong className="text-white">Important:</strong> LeadBuddie helps you MANAGE leads. We do NOT send spam, 
            bulk messages, or unsolicited messages. We comply with Meta's WhatsApp Business Policy and only process 
            leads that come to your WhatsApp Business number.
          </p>
        </div>
      </div>
    </Section>
  )
}

