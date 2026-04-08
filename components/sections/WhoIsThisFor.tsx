import { Section } from '@/components/ui/Section'
import { CheckCircle2 } from 'lucide-react'

const items = [
  'You reply to leads on both WhatsApp and Instagram',
  'Multiple teammates need context before jumping into chats',
  'Important follow-ups get delayed or forgotten',
  'You want one CRM instead of scattered DMs and notes',
]

export function WhoIsThisFor() {
  return (
    <Section>
      <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[28px] border border-border bg-[linear-gradient(160deg,rgba(124,58,237,0.18),rgba(26,26,40,0.92)_45%,rgba(37,211,102,0.08))] p-8 shadow-[0_24px_90px_rgba(0,0,0,0.3)]">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-light">Who it&apos;s for</p>
          <h2 className="mt-4 text-3xl font-bold text-text-primary md:text-4xl">LeadBuddie fits teams that live inside social conversations</h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            If your pipeline starts in DMs, comments, replies, or WhatsApp threads, LeadBuddie turns that chaos into one
            clean revenue workflow.
          </p>
        </div>

        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-4 rounded-2xl border border-border bg-bg-card/85 p-5">
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-wa" />
              <span className="text-base leading-relaxed text-text-secondary md:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
