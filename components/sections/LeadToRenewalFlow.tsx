import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import {
  MessageCircle,
  Sparkles,
  Target,
  CalendarClock,
  CircleCheck,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'

type Step = {
  number: string
  icon: LucideIcon
  iconTone: string
  iconBg: string
  title: string
  caption: string
  annotation: string
  annotationDot: string
}

const STEPS: Step[] = [
  {
    number: '01',
    icon: MessageCircle,
    iconTone: 'text-teal-300',
    iconBg: 'bg-teal-400/15 border-teal-400/30',
    title: 'Customer messages at 11 PM',
    caption: '"Hi, my Kent RO AMC is expiring next week — what are the options?"',
    annotation: 'WhatsApp inbox',
    annotationDot: 'bg-teal-400',
  },
  {
    number: '02',
    icon: Sparkles,
    iconTone: 'text-cyan-300',
    iconBg: 'bg-cyan-400/15 border-cyan-400/30',
    title: 'Co-pilot replies in seconds',
    caption: 'Drafts a relevant reply with your AMC plans + pricing. Sends or waits for your approval — your choice.',
    annotation: 'AI reply suggested',
    annotationDot: 'bg-emerald-400',
  },
  {
    number: '03',
    icon: Target,
    iconTone: 'text-indigo-300',
    iconBg: 'bg-indigo-400/15 border-indigo-400/30',
    title: 'Lead auto-qualified',
    caption: 'Detects intent — AMC renewal interest. Tags the conversation. Surfaces it on your pipeline so you do not miss it.',
    annotation: 'Lead auto-qualified',
    annotationDot: 'bg-cyan-400',
  },
  {
    number: '04',
    icon: CalendarClock,
    iconTone: 'text-amber-300',
    iconBg: 'bg-amber-400/15 border-amber-400/30',
    title: 'Customer says "call me next week"',
    caption: 'Co-pilot schedules a callback with the note. Surfaces it on the right day, on the right list — no sticky notes, no forgotten promises.',
    annotation: 'Callback scheduled',
    annotationDot: 'bg-amber-400',
  },
  {
    number: '05',
    icon: CircleCheck,
    iconTone: 'text-emerald-300',
    iconBg: 'bg-emerald-400/15 border-emerald-400/30',
    title: 'You call back. AMC renewed.',
    caption: 'Renewal closed for ₹2,499. Activity logged on the customer record. Next renewal reminder set automatically a year out.',
    annotation: 'AMC renewed',
    annotationDot: 'bg-emerald-400',
  },
]

export function LeadToRenewalFlow() {
  return (
    <Section background="elevated">
      <SectionHeader
        label="See it work end-to-end"
        title="One WhatsApp message. Five steps. One closed renewal."
        description="Capabilities work better together. Here is how a single lead flows from a late-night WhatsApp to a paid AMC renewal — with your AI co-pilot at every touchpoint."
        centered
        className="mb-14 md:mb-16"
      />

      {/* Desktop: horizontal 5-column flow */}
      <div className="hidden lg:block">
        <ol className="grid grid-cols-5 gap-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            const isLast = i === STEPS.length - 1
            const delay = `${0.1 + i * 0.1}s`
            return (
              <li key={step.number} className="relative" data-reveal style={{ ['--reveal-delay' as any]: delay }}>
                <div className="flex flex-col h-full rounded-3xl border border-white/[0.08] bg-bg-card/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold tracking-[0.16em] text-text-muted">{step.number}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5">
                      <span className={`h-1.5 w-1.5 rounded-full ${step.annotationDot} animate-pulse-slow`} aria-hidden="true" />
                      <span className="text-[10px] font-medium text-text-secondary whitespace-nowrap">{step.annotation}</span>
                    </span>
                  </div>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${step.iconBg} ${step.iconTone} mb-4`}>
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary leading-snug mb-2">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.caption}</p>
                </div>
                {!isLast && (
                  <div className="pointer-events-none absolute top-1/2 -right-3 -translate-y-1/2 z-10 hidden lg:flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-bg-card animate-flow-arrow">
                    <ArrowRight className="h-3.5 w-3.5 text-teal-300" />
                  </div>
                )}
              </li>
            )
          })}
        </ol>
      </div>

      {/* Mobile / tablet: vertical timeline */}
      <ol className="lg:hidden space-y-4 max-w-2xl mx-auto">
        {STEPS.map((step, i) => {
          const Icon = step.icon
          const isLast = i === STEPS.length - 1
          const delay = `${0.05 + i * 0.08}s`
          return (
            <li
              key={step.number}
              className="relative pl-14"
              data-reveal
              style={{ ['--reveal-delay' as any]: delay }}
            >
              {!isLast && (
                <span className="absolute left-[22px] top-12 bottom-[-1rem] w-px bg-gradient-to-b from-white/15 via-white/8 to-transparent" aria-hidden="true" />
              )}
              <div className={`absolute left-0 top-1 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${step.iconBg} ${step.iconTone} ring-4 ring-bg-primary`}>
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-bg-card/80 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold tracking-[0.16em] text-text-muted">{step.number}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${step.annotationDot} animate-pulse-slow`} aria-hidden="true" />
                    <span className="text-[10px] font-medium text-text-secondary whitespace-nowrap">{step.annotation}</span>
                  </span>
                </div>
                <h3 className="text-base font-semibold text-text-primary leading-snug mb-1">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.caption}</p>
              </div>
            </li>
          )
        })}
      </ol>

      {/* Outcome strip */}
      <div
        className="mt-12 max-w-3xl mx-auto rounded-2xl border border-teal-400/20 bg-teal-400/[0.04] px-6 py-5 text-center backdrop-blur-sm"
        data-reveal
        style={{ ['--reveal-delay' as any]: '0.5s' }}
      >
        <p className="text-sm md:text-base leading-relaxed">
          <strong className="font-semibold text-text-primary">The renewal that would have slipped is the one that pays your rent next month.</strong>
          <br className="hidden sm:block" />
          <span className="text-text-secondary">LeadBuddie makes sure none of them slip — even when you cannot pick up the phone.</span>
        </p>
      </div>
    </Section>
  )
}
