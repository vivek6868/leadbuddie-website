import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MessageCircle, Inbox, Sparkles, Instagram, type LucideIcon } from 'lucide-react'

const steps: { step: string; title: string; copy: string; icon: LucideIcon }[] = [
  {
    step: '01',
    title: 'Connect WhatsApp and Instagram',
    copy: 'Bring your messaging channels into LeadBuddie without changing how customers reach you.',
    icon: MessageCircle,
  },
  {
    step: '02',
    title: 'Route every chat into your CRM',
    copy: 'Every new enquiry lands in a shared pipeline with ownership, notes, and next steps.',
    icon: Inbox,
  },
  {
    step: '03',
    title: 'Use AI to move faster',
    copy: 'Summaries, smart replies, and follow-up reminders help your team convert consistently.',
    icon: Sparkles,
  },
  {
    step: '04',
    title: 'Close and scale',
    copy: 'Track performance across social channels and keep more conversations moving toward revenue.',
    icon: Instagram,
  },
]

export function HowItWorks() {
  return (
    <Section>
      <SectionHeader
        label="How It Works"
        title="A premium CRM flow for social-first sales"
        description="From incoming chat to closed deal, the workflow stays simple."
        centered
        className="mb-14"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map(({ step, title, copy, icon: Icon }, i) => (
          <div
            key={step}
            data-reveal
            style={{ ['--reveal-delay' as any]: `${i * 0.1}s` }}
            className="rounded-[28px] border border-border bg-bg-card/90 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-brand/40"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-semibold tracking-[0.18em] text-brand-light">STEP {step}</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-subtle text-brand-light">
                <Icon className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-text-primary">{title}</h3>
            <p className="mt-4 leading-relaxed text-text-secondary">{copy}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
