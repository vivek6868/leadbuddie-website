import { Section } from '@/components/ui/Section'
import { CheckCircle2 } from 'lucide-react'

const items = [
  'Use your existing WhatsApp number',
  'No disruption to current chats',
  'Official WhatsApp Cloud API integration',
]

export function SafetyReassurance() {
  return (
    <Section background="gray">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-ink mb-8">
        Use WhatsApp Safely — No Risk to Your Number
      </h2>
      <ul className="max-w-2xl mx-auto space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-700">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-teal-600" strokeWidth={2} />
            <span className="text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
