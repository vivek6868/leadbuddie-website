'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Sparkles,
  RefreshCcw,
  Users,
  PhoneCall,
  Check,
  ShieldCheck,
  Eye,
  Hand,
  type LucideIcon,
} from 'lucide-react'
import { EASE_OUT, Reveal, Stagger, StaggerItem, Float } from '@/components/ui/motion'

type Suggestion = {
  icon: LucideIcon
  tone: string
  title: string
  reason: string
}

const SUGGESTIONS: Suggestion[] = [
  {
    icon: RefreshCcw,
    tone: 'text-teal-300 bg-teal-400/12 border-teal-400/25',
    title: '4 renewals due tomorrow',
    reason: 'Their AMC end-dates fall within 24h and no callback is scheduled yet.',
  },
  {
    icon: Users,
    tone: 'text-violet-300 bg-violet-400/12 border-violet-400/25',
    title: '12 customers worth tracking',
    reason: 'These chats mention an installed unit but aren’t added as customers.',
  },
  {
    icon: PhoneCall,
    tone: 'text-amber-300 bg-amber-400/12 border-amber-400/25',
    title: '3 callbacks pending today',
    reason: 'You promised to call back — the dates land today across these threads.',
  },
]

const PRINCIPLES: { icon: LucideIcon; title: string; copy: string }[] = [
  { icon: Eye, title: 'Always explainable', copy: 'Every suggestion shows exactly why it surfaced — never a black box.' },
  { icon: Hand, title: 'You stay in control', copy: 'Buddie proposes. You confirm. It never messages or acts on its own.' },
  { icon: ShieldCheck, title: 'Quietly in the background', copy: 'No chatbot persona, no noise — it reviews your operations and steps back.' },
]

function SuggestionCard({ s, dim }: { s: Suggestion; dim?: boolean }) {
  const Icon = s.icon
  return (
    <div className={`flex items-start gap-3 rounded-xl border border-white/[0.07] bg-[#0a0a12]/70 p-3 ${dim ? 'opacity-60' : ''}`}>
      <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border ${s.tone}`}>
        <Icon className="h-4 w-4" strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold leading-tight text-white">{s.title}</p>
        <p className="mt-1 text-[11px] leading-snug text-white/50">{s.reason}</p>
        <div className="mt-2.5 flex gap-2">
          <span className="inline-flex items-center gap-1 rounded-lg bg-brand px-2.5 py-1 text-[10px] font-semibold text-white">
            <Check className="h-3 w-3" strokeWidth={3} /> Confirm
          </span>
          <span className="rounded-lg border border-white/12 px-2.5 py-1 text-[10px] font-medium text-white/55">
            Dismiss
          </span>
        </div>
      </div>
    </div>
  )
}

export function BuddieAgent() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(124,58,237,0.14),transparent_50%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-light">
              <Sparkles className="h-3 w-3" strokeWidth={2.4} />
              Meet Buddie
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance text-3xl font-bold leading-[1.1] text-white md:text-5xl">
              A quiet teammate that watches the operations you can&apos;t.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
              Buddie is your operational intelligence layer — not a chatbot. It
              reviews your leads, customers and renewals in the background and
              surfaces what needs attention, with the reasoning attached.
            </p>
          </Reveal>

          <Stagger className="mt-9 space-y-5" stagger={0.12}>
            {PRINCIPLES.map(({ icon: Icon, title, copy }) => (
              <StaggerItem key={title} className="flex gap-3.5">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-light">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-white">{title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-white/55">{copy}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Buddie panel */}
        <div className="relative">
          {/* ambient glow */}
          <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-gradient-to-br from-brand/25 via-transparent to-teal-400/10 blur-3xl" />

          <Float amplitude={12} duration={9}>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 36, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: EASE_OUT }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d18]/90 p-5 shadow-[0_40px_120px_-30px_rgba(124,58,237,0.5)] backdrop-blur-xl"
            >
              {/* Panel header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-hover text-white">
                    <Sparkles className="h-4.5 w-4.5" strokeWidth={2} />
                    {!reduce && (
                      <motion.span
                        className="absolute inset-0 rounded-xl ring-2 ring-brand-light/50"
                        animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.12, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    )}
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-tight text-white">Buddie</p>
                    <p className="text-[10px] leading-tight text-white/40">Reviewed 248 chats · just now</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> 19 found
                </span>
              </div>

              {/* Suggestions */}
              <Stagger className="space-y-2.5" stagger={0.15} amount={0.3}>
                {SUGGESTIONS.map((s) => (
                  <StaggerItem key={s.title}>
                    <SuggestionCard s={s} />
                  </StaggerItem>
                ))}
              </Stagger>

              {/* Footer note */}
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
                <ShieldCheck className="h-4 w-4 flex-shrink-0 text-teal-300" strokeWidth={2} />
                <p className="text-[11px] leading-snug text-white/55">
                  Buddie never sends a message or changes a record without your confirmation.
                </p>
              </div>
            </motion.div>
          </Float>
        </div>
      </div>
    </section>
  )
}
