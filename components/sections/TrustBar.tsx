import { Section } from '@/components/ui/Section'
import { Shield, Zap, Lock } from 'lucide-react'

const trustItems = [
  {
    icon: Shield,
    text: 'Built for WhatsApp Business API',
  },
  {
    icon: Zap,
    text: 'AI-powered automation',
  },
  {
    icon: Lock,
    text: 'Secure business data isolation',
  },
]

export function TrustBar() {
  return (
    <Section background="gray" className="py-8">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {trustItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-gray-700">
            <item.icon className="text-teal-600" size={24} />
            <span className="font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

