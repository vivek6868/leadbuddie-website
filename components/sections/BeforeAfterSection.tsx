import { Section } from '@/components/ui/Section'
import { X, CheckCircle2 } from 'lucide-react'

const beforeItems = ['Disconnected WhatsApp and Instagram inboxes', 'Leads buried inside personal chats', 'Slow handoffs between teammates', 'Missed follow-ups and low visibility']
const afterItems = ['One CRM for every conversation', 'Clear ownership with full lead context', 'Fast AI-assisted replies and notes', 'Reliable follow-ups that move deals forward']

export function BeforeAfterSection() {
  return (
    <Section background="gray">
      <h2 className="mb-10 text-center text-3xl font-bold text-text-primary md:text-4xl">Before and after a real conversation CRM</h2>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <div className="rounded-[28px] border border-border bg-bg-elevated/70 p-7">
          <h3 className="mb-5 text-xl font-semibold text-text-primary">Before LeadBuddie</h3>
          <ul className="space-y-4">
            {beforeItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-text-secondary">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-[#f87171]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[28px] border border-brand/30 bg-brand-subtle p-7">
          <h3 className="mb-5 text-xl font-semibold text-text-primary">After LeadBuddie</h3>
          <ul className="space-y-4">
            {afterItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-text-primary">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-wa" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
