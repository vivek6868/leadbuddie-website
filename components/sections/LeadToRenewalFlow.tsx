'use client'

import { useEffect, useRef } from 'react'
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
    iconTone: 'text-teal-700',
    iconBg: 'bg-teal-100',
    title: 'Customer messages at 11 PM',
    caption: '"Hi, my Kent RO AMC is expiring next week — what are the options?"',
    annotation: 'WhatsApp inbox',
    annotationDot: 'bg-teal-500',
  },
  {
    number: '02',
    icon: Sparkles,
    iconTone: 'text-cyan-700',
    iconBg: 'bg-cyan-100',
    title: 'Co-pilot replies in seconds',
    caption: 'Drafts a relevant reply with your AMC plans + pricing. Sends or waits for your approval — your choice.',
    annotation: 'AI reply suggested',
    annotationDot: 'bg-emerald-500',
  },
  {
    number: '03',
    icon: Target,
    iconTone: 'text-indigo-700',
    iconBg: 'bg-indigo-100',
    title: 'Lead auto-qualified',
    caption: 'Detects intent — AMC renewal interest. Tags the conversation. Surfaces it on your pipeline so you do not miss it.',
    annotation: 'Lead auto-qualified',
    annotationDot: 'bg-cyan-500',
  },
  {
    number: '04',
    icon: CalendarClock,
    iconTone: 'text-amber-700',
    iconBg: 'bg-amber-100',
    title: 'Customer says "call me next week"',
    caption: 'Co-pilot schedules a callback with the note. Surfaces it on the right day, on the right list — no sticky notes, no forgotten promises.',
    annotation: 'Callback scheduled',
    annotationDot: 'bg-amber-500',
  },
  {
    number: '05',
    icon: CircleCheck,
    iconTone: 'text-emerald-700',
    iconBg: 'bg-emerald-100',
    title: 'You call back. AMC renewed.',
    caption: 'Renewal closed for ₹2,499. Activity logged on the customer record. Next renewal reminder set automatically a year out.',
    annotation: 'AMC renewed',
    annotationDot: 'bg-emerald-500',
  },
]

export function LeadToRenewalFlow() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    // Find every element flagged for reveal inside this section
    const targets = root.querySelectorAll<HTMLElement>('[data-reveal]')
    if (targets.length === 0) return

    // If the user prefers reduced motion, skip the observer entirely
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((el) => el.setAttribute('data-reveal', 'visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-reveal', 'visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <Section background="white">
      <div ref={containerRef}>
        <div data-reveal style={{ ['--reveal-delay' as any]: '0s' }}>
          <SectionHeader
            label="See it work end-to-end"
            title="One WhatsApp message. Five steps. One closed renewal."
            description="Capabilities work better together. Here is how a single lead flows from a late-night WhatsApp to a paid AMC renewal — with your AI co-pilot at every touchpoint."
            centered
            className="mb-16"
          />
        </div>

        {/* Desktop: horizontal 5-column flow */}
        <div className="hidden lg:block">
          <ol className="grid grid-cols-5 gap-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              const isLast = i === STEPS.length - 1
              const delay = `${0.1 + i * 0.12}s`
              return (
                <li key={step.number} className="relative" data-reveal style={{ ['--reveal-delay' as any]: delay }}>
                  <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-200 p-5 shadow-sm transition-shadow duration-200 hover:shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold tracking-[0.16em] text-gray-400">{step.number}</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-2 py-0.5 shadow-sm">
                        <span className={`h-1.5 w-1.5 rounded-full ${step.annotationDot} animate-pulse-slow`} aria-hidden="true" />
                        <span className="text-[10px] font-medium text-slate-700 whitespace-nowrap">{step.annotation}</span>
                      </span>
                    </div>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${step.iconBg} ${step.iconTone} mb-4 transition-transform duration-300 hover:scale-110`}>
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-base font-semibold text-ink leading-snug mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.caption}</p>
                  </div>
                  {!isLast && (
                    <div className="pointer-events-none absolute top-1/2 -right-3 -translate-y-1/2 z-10 hidden lg:flex h-6 w-6 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm animate-flow-arrow">
                      <ArrowRight className="h-3.5 w-3.5 text-teal-600" />
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
            const delay = `${0.1 + i * 0.1}s`
            return (
              <li
                key={step.number}
                className="relative pl-14"
                data-reveal
                style={{ ['--reveal-delay' as any]: delay }}
              >
                {!isLast && <span className="absolute left-[22px] top-12 bottom-[-1rem] w-px bg-gradient-to-b from-gray-200 via-gray-200 to-transparent" aria-hidden="true" />}
                <div className={`absolute left-0 top-1 inline-flex h-11 w-11 items-center justify-center rounded-xl ${step.iconBg} ${step.iconTone} ring-4 ring-white`}>
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <span className="text-[11px] font-bold tracking-[0.16em] text-gray-400">{step.number}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-2 py-0.5">
                      <span className={`h-1.5 w-1.5 rounded-full ${step.annotationDot} animate-pulse-slow`} aria-hidden="true" />
                      <span className="text-[10px] font-medium text-slate-700 whitespace-nowrap">{step.annotation}</span>
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-ink leading-snug mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.caption}</p>
                </div>
              </li>
            )
          })}
        </ol>

        {/* Outcome strip */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-teal-200 bg-teal-50/60 px-6 py-5 text-center" data-reveal style={{ ['--reveal-delay' as any]: '0.7s' }}>
          <p className="text-sm md:text-base text-teal-900 leading-relaxed">
            <strong className="font-semibold">The renewal that would have slipped is the one that pays your rent next month.</strong>
            <br className="hidden sm:block" />
            <span className="text-teal-800/85">LeadBuddie makes sure none of them slip — even when you cannot pick up the phone.</span>
          </p>
        </div>
      </div>
    </Section>
  )
}
