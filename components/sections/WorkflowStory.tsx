'use client'

import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import {
  MessageCircle,
  ArrowUpRight,
  UserPlus,
  Wrench,
  RefreshCcw,
  IndianRupee,
  PhoneCall,
  HeartHandshake,
  type LucideIcon,
} from 'lucide-react'
import { EASE_OUT, Reveal } from '@/components/ui/motion'

type Tone = 'wa' | 'cyan' | 'violet' | 'teal' | 'amber' | 'emerald' | 'sky' | 'rose'

const TONE: Record<Tone, { ring: string; text: string; dot: string; glow: string }> = {
  wa: { ring: 'border-[#25d366]/30 bg-[#25d366]/10', text: 'text-[#25d366]', dot: 'bg-[#25d366]', glow: 'shadow-[0_0_30px_-6px_rgba(37,211,102,0.6)]' },
  cyan: { ring: 'border-cyan-400/30 bg-cyan-400/10', text: 'text-cyan-300', dot: 'bg-cyan-400', glow: 'shadow-[0_0_30px_-6px_rgba(34,211,238,0.6)]' },
  violet: { ring: 'border-violet-400/30 bg-violet-400/10', text: 'text-violet-300', dot: 'bg-violet-400', glow: 'shadow-[0_0_30px_-6px_rgba(139,92,246,0.6)]' },
  teal: { ring: 'border-teal-400/30 bg-teal-400/10', text: 'text-teal-300', dot: 'bg-teal-400', glow: 'shadow-[0_0_30px_-6px_rgba(45,212,191,0.6)]' },
  amber: { ring: 'border-amber-400/30 bg-amber-400/10', text: 'text-amber-300', dot: 'bg-amber-400', glow: 'shadow-[0_0_30px_-6px_rgba(251,191,36,0.6)]' },
  emerald: { ring: 'border-emerald-400/30 bg-emerald-400/10', text: 'text-emerald-300', dot: 'bg-emerald-400', glow: 'shadow-[0_0_30px_-6px_rgba(52,211,153,0.6)]' },
  sky: { ring: 'border-sky-400/30 bg-sky-400/10', text: 'text-sky-300', dot: 'bg-sky-400', glow: 'shadow-[0_0_30px_-6px_rgba(56,189,248,0.6)]' },
  rose: { ring: 'border-rose-400/30 bg-rose-400/10', text: 'text-rose-300', dot: 'bg-rose-400', glow: 'shadow-[0_0_30px_-6px_rgba(251,113,133,0.6)]' },
}

type Stage = {
  icon: LucideIcon
  tone: Tone
  stage: string
  title: string
  copy: string
  visual: () => JSX.Element
}

/* --- tiny inline visuals for each stage ---------------------------------- */

function ChatVisual() {
  return (
    <div className="space-y-1.5">
      <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-white px-2.5 py-1.5 text-[11px] text-slate-800 shadow-sm">
        Hi, is the Kent Grand available?
      </div>
      <div className="ml-auto max-w-[60%] rounded-xl rounded-tr-sm bg-[#DCF8C6] px-2.5 py-1.5 text-[11px] text-slate-800 shadow-sm">
        Yes! Sharing details 👇
      </div>
    </div>
  )
}

function LeadVisual() {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/5 px-2.5 py-2">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/20 text-[10px] font-bold text-cyan-200">RK</div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-semibold text-white">Ramesh K. · New lead</p>
        <p className="text-[9px] text-white/40">Source: WhatsApp · 2m ago</p>
      </div>
      <span className="rounded-full bg-cyan-400/15 px-2 py-0.5 text-[8px] font-semibold uppercase text-cyan-300">New</span>
    </div>
  )
}

function CustomerVisual() {
  return (
    <div className="space-y-1.5 rounded-xl bg-white/5 px-2.5 py-2">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold text-white">Ramesh Kulkarni</p>
        <span className="rounded-full bg-violet-400/15 px-2 py-0.5 text-[8px] font-semibold uppercase text-violet-300">Customer</span>
      </div>
      <p className="text-[9px] text-white/45">Kent RO Grand · Installed Jan 15 · Gold AMC</p>
    </div>
  )
}

function AmcVisual() {
  return (
    <div className="space-y-1 rounded-xl bg-white/5 px-2.5 py-2">
      <div className="flex items-center justify-between text-[10px]">
        <span className="text-white/55">AMC status</span>
        <span className="font-semibold text-teal-300">Active</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-teal-400 to-emerald-400" />
      </div>
      <p className="text-[9px] text-white/40">Renews in 22 days</p>
    </div>
  )
}

function RenewalVisual() {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-2 rounded-lg border border-rose-400/20 bg-rose-400/5 px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
        <span className="flex-1 text-[10px] text-white/80">Priya D. · due in 1d</span>
        <span className="text-[9px] font-semibold text-white/50">₹2,499</span>
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
        <span className="flex-1 text-[10px] text-white/80">Ramesh K. · due in 2d</span>
        <span className="text-[9px] font-semibold text-white/50">₹3,200</span>
      </div>
    </div>
  )
}

function RevenueVisual() {
  return (
    <div className="flex items-end justify-between">
      <div>
        <p className="text-[9px] uppercase tracking-wide text-white/40">This month</p>
        <p className="text-lg font-bold text-white">₹1,84,500</p>
      </div>
      <div className="flex h-10 items-end gap-1">
        {[40, 55, 35, 70, 60, 90].map((h, i) => (
          <span key={i} className="w-1.5 rounded-sm bg-emerald-400/70" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  )
}

function CallbackVisual() {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-amber-400/20 bg-amber-400/5 px-2.5 py-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/15 text-amber-300">
        <PhoneCall className="h-3.5 w-3.5" strokeWidth={2.2} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold text-white">Call Priya · Thu 11 AM</p>
        <p className="text-[9px] text-white/45">Note: wife to approve renewal</p>
      </div>
    </div>
  )
}

function RetentionVisual() {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/5 px-2.5 py-2">
      <div className="flex -space-x-2">
        {['bg-teal-400', 'bg-violet-400', 'bg-emerald-400'].map((c, i) => (
          <span key={i} className={`h-6 w-6 rounded-full ${c} ring-2 ring-bg-card`} />
        ))}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold text-white">Renewed 2× since 2024</p>
        <p className="text-[9px] text-white/45">Loyal · low churn risk</p>
      </div>
    </div>
  )
}

const STAGES: Stage[] = [
  { icon: MessageCircle, tone: 'wa', stage: 'Conversation', title: 'A customer messages on WhatsApp', copy: 'An enquiry, a complaint, an AMC question — it lands on the number they already use.', visual: ChatVisual },
  { icon: ArrowUpRight, tone: 'cyan', stage: 'Lead', title: 'Captured as a lead automatically', copy: 'No copy-paste, no missed message after hours. The conversation becomes a tracked lead.', visual: LeadVisual },
  { icon: UserPlus, tone: 'violet', stage: 'Customer', title: 'Converted to a customer', copy: 'When they buy, the lead becomes a customer with model, install date and AMC plan attached.', visual: CustomerVisual },
  { icon: Wrench, tone: 'teal', stage: 'AMC', title: 'The contract starts tracking itself', copy: 'Installation, warranty and AMC live on one record — service history travels with the customer.', visual: AmcVisual },
  { icon: RefreshCcw, tone: 'rose', stage: 'Renewal', title: 'Renewals surface before they lapse', copy: 'Every contract sits on the renewals page sorted by urgency, so the window never quietly passes.', visual: RenewalVisual },
  { icon: IndianRupee, tone: 'emerald', stage: 'Revenue', title: 'Recovered revenue rolls up', copy: 'Renewed contracts and service revenue show on the dashboard — you see what was saved.', visual: RevenueVisual },
  { icon: PhoneCall, tone: 'amber', stage: 'Callback', title: 'Follow-ups never get forgotten', copy: '“Call me next week” becomes a real callback on the right date, with the note attached.', visual: CallbackVisual },
  { icon: HeartHandshake, tone: 'sky', stage: 'Retention', title: 'Customers stay, and come back', copy: 'Every touchpoint is remembered, so renewals compound and churn quietly drops.', visual: RetentionVisual },
]

/* --- a single stage row -------------------------------------------------- */

function StageRow({ stage, index }: { stage: Stage; index: number }) {
  const reduce = useReducedMotion()
  const t = TONE[stage.tone]
  const Icon = stage.icon
  const Visual = stage.visual
  const isLeft = index % 2 === 0

  const card = (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
      className="group rounded-2xl border border-white/[0.08] bg-bg-card/70 p-4 backdrop-blur-sm transition-colors hover:border-white/20 md:p-5"
    >
      <div className="mb-2 flex items-center gap-2">
        <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${t.text}`}>
          {String(index + 1).padStart(2, '0')} · {stage.stage}
        </span>
      </div>
      <h3 className="mb-1.5 text-base font-semibold leading-snug text-white md:text-lg">{stage.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-white/55">{stage.copy}</p>
      <div className="rounded-xl border border-white/[0.06] bg-[#0a0a12]/60 p-2.5">
        <Visual />
      </div>
    </motion.div>
  )

  const node = (
    <motion.div
      initial={reduce ? false : { scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border backdrop-blur-sm ${t.ring} ${t.text} ${t.glow}`}
    >
      <Icon className="h-5 w-5" strokeWidth={1.8} />
    </motion.div>
  )

  return (
    <div className="relative">
      {/* Desktop: alternating two-column */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
        <div className={isLeft ? 'order-1' : 'order-3 opacity-0'}>{isLeft ? card : null}</div>
        <div className="order-2 flex justify-center">{node}</div>
        <div className={isLeft ? 'order-3 opacity-0' : 'order-1'}>{!isLeft ? card : null}</div>
      </div>

      {/* Mobile: single column with node on the left */}
      <div className="flex gap-4 md:hidden">
        {node}
        <div className="min-w-0 flex-1 pb-2">{card}</div>
      </div>
    </div>
  )
}

export function WorkflowStory() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const fillScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.1),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-light">
            The operational loop
          </span>
          <h2 className="text-balance text-3xl font-bold leading-[1.1] text-white md:text-5xl">
            One message in. A tracked, renewing customer out.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            LeadBuddie isn&apos;t a feature list — it&apos;s a connected workflow.
            Watch a single WhatsApp message become the whole customer lifecycle.
          </p>
        </Reveal>

        {/* The flow */}
        <div ref={ref} className="relative mt-16 md:mt-24">
          {/* Spine — desktop centered, mobile left */}
          <div className="pointer-events-none absolute bottom-0 top-0 left-6 w-px -translate-x-1/2 bg-white/10 md:left-1/2">
            <motion.div
              className="absolute inset-x-0 top-0 origin-top bg-gradient-to-b from-brand-light via-teal-400 to-sky-400"
              style={{ scaleY: reduce ? 1 : fillScale, bottom: 0, top: 0 }}
            />
          </div>

          <div className="space-y-10 md:space-y-16">
            {STAGES.map((stage, i) => (
              <StageRow key={stage.stage} stage={stage} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
