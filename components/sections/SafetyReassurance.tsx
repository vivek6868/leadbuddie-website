import { Section } from '@/components/ui/Section'
import { CheckCircle2 } from 'lucide-react'

const items = [
  'Use your existing WhatsApp setup',
  'Keep customer conversations organized in one secure workspace',
  'Run on official Meta-approved messaging infrastructure',
]

export function SafetyReassurance() {
  return (
    <Section background="gray">
      <div className="mx-auto max-w-4xl rounded-[28px] border border-border bg-bg-card/90 p-8 md:p-10">
        <h2 className="text-center text-3xl font-bold text-text-primary md:text-4xl">Built for trust, speed, and channel clarity</h2>
        <ul className="mt-8 space-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-text-secondary">
              <CheckCircle2 className="h-6 w-6 shrink-0 text-wa" />
              <span className="text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
