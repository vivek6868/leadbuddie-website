import { Section } from '@/components/ui/Section'
import { FEATURES } from '@/lib/constants'
import * as Icons from 'lucide-react'

export function FeaturesShowcase() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Everything You Need to Manage WhatsApp Leads
        </h2>
        <p className="text-lg text-dark-300 max-w-2xl mx-auto">
          A WhatsApp-style chat inbox plus AI tools designed for Indian SMBs, contractors, and small agencies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((feature) => {
          const IconComponent = (Icons as any)[feature.icon] || Icons.Sparkles
          return (
            <div
              key={feature.id}
              className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 hover:border-primary-600/50 transition-all hover:shadow-lg hover:shadow-primary-600/10"
            >
              <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center mb-4">
                <IconComponent className="text-primary-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-dark-300">{feature.description}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

