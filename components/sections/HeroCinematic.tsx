'use client'

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion'
import {
  MessageCircle,
  Sparkles,
  RefreshCcw,
  PhoneCall,
  CheckCheck,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { EASE_OUT, Float } from '@/components/ui/motion'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------------- */
/*  Animated revenue counter                                                 */
/* ------------------------------------------------------------------------- */

function RevenueCounter({ to }: { to: number }) {
  const reduce = useReducedMotion()
  const count = useMotionValue(reduce ? to : 0)
  const rounded = useTransform(count, (v) =>
    `₹${Math.round(v).toLocaleString('en-IN')}`
  )
  const [display, setDisplay] = useState(`₹${to.toLocaleString('en-IN')}`)

  useEffect(() => {
    if (reduce) return
    const unsub = rounded.on('change', (v) => setDisplay(v))
    const controls = animate(count, to, {
      duration: 2.2,
      delay: 1.1,
      ease: EASE_OUT,
    })
    return () => {
      controls.stop()
      unsub()
    }
  }, [count, rounded, to, reduce])

  return <span>{display}</span>
}

/* ------------------------------------------------------------------------- */
/*  Streaming WhatsApp mini-thread                                           */
/* ------------------------------------------------------------------------- */

type StreamMsg = { side: 'in' | 'out'; text: string; ai?: boolean }

const THREAD: StreamMsg[] = [
  { side: 'in', text: 'Hi, my Kent RO AMC expires next week — options?' },
  { side: 'out', text: 'Hi Priya! Your Gold AMC (₹2,499) covers 4 visits. Book a call?', ai: true },
  { side: 'in', text: 'Tomorrow 11am works 👍' },
  { side: 'out', text: 'Done — callback scheduled for 11 AM. Reminder set.', ai: true },
]

function StreamingThread() {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(reduce ? THREAD.length : 0)

  useEffect(() => {
    if (reduce) return
    let i = 0
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      i = i >= THREAD.length ? 1 : i + 1
      setVisible(i)
      timer = setTimeout(tick, i >= THREAD.length ? 3200 : 1500)
    }
    timer = setTimeout(tick, 900)
    return () => clearTimeout(timer)
  }, [reduce])

  return (
    <div className="flex flex-col gap-2">
      {THREAD.slice(0, visible).map((m, i) => (
        <motion.div
          key={`${i}-${m.text}`}
          initial={reduce ? false : { opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className={`flex ${m.side === 'out' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[82%] rounded-2xl px-3 py-2 text-[12px] leading-snug shadow-sm ${
              m.side === 'out'
                ? 'rounded-tr-sm bg-[#DCF8C6] text-slate-900'
                : 'rounded-tl-sm bg-white text-slate-900'
            }`}
          >
            <p>{m.text}</p>
            {m.side === 'out' && (
              <div className="mt-1 flex items-center justify-end gap-1">
                {m.ai && (
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-violet-100 px-1.5 py-px text-[8px] font-bold uppercase tracking-wide text-violet-700">
                    <Sparkles className="h-2 w-2" strokeWidth={2.6} />
                    Buddie
                  </span>
                )}
                <CheckCheck className="h-3 w-3 text-sky-500" strokeWidth={2.2} />
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------------- */
/*  The living operational workspace                                         */
/* ------------------------------------------------------------------------- */

/* --- presentational cards (shared between mobile + desktop layouts) ------ */

function ChatCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d0d18]/90 p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      <div className="mb-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25d366]/15 text-[#25d366]">
            <MessageCircle className="h-3.5 w-3.5" strokeWidth={2.2} />
          </span>
          <div>
            <p className="text-[11px] font-semibold leading-tight text-white">Priya Desai</p>
            <p className="text-[9px] leading-tight text-white/40">online · WhatsApp</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-emerald-300">
          Live
        </span>
      </div>
      <div className="rounded-xl bg-[#0a0a12] p-2.5">
        <StreamingThread />
      </div>
    </div>
  )
}

function MiniChip({
  icon: Icon,
  tone,
  title,
  sub,
}: {
  icon: typeof MessageCircle
  tone: string
  title: string
  sub: string
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-bg-card/90 px-3 py-2 shadow-xl backdrop-blur-xl">
      <span className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg ${tone}`}>
        <Icon className="h-4 w-4" strokeWidth={2.2} />
      </span>
      <div className="min-w-0">
        <p className="truncate text-[11px] font-semibold leading-tight text-white">{title}</p>
        <p className="truncate text-[9px] leading-tight text-white/45">{sub}</p>
      </div>
    </div>
  )
}

function BuddieCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/20 via-bg-card/95 to-bg-card/95 p-3.5 shadow-[0_24px_60px_-20px_rgba(124,58,237,0.5)] backdrop-blur-xl">
      <div className="mb-1.5 flex items-center gap-1.5">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand text-white">
          <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wide text-brand-light">Buddie</span>
      </div>
      <p className="text-[12px] font-medium leading-snug text-white">
        Found <span className="font-bold text-brand-light">12 customers</span> worth tracking from your chats.
      </p>
      <div className="mt-2.5 flex gap-2">
        <span className="rounded-lg bg-brand px-2.5 py-1 text-[10px] font-semibold text-white">Review</span>
        <span className="rounded-lg border border-white/15 px-2.5 py-1 text-[10px] font-medium text-white/70">Later</span>
      </div>
    </div>
  )
}

function MetricCard() {
  const reduce = useReducedMotion()
  return (
    <div className="rounded-2xl border border-emerald-400/20 bg-bg-card/92 p-3.5 shadow-xl backdrop-blur-xl">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-[9px] font-semibold uppercase tracking-wide text-white/45">Renewals recovered</span>
        <TrendingUp className="h-3.5 w-3.5 text-emerald-300" strokeWidth={2.2} />
      </div>
      <p className="text-2xl font-bold text-white">
        <RevenueCounter to={184500} />
      </p>
      <div className="mt-2 flex items-center gap-1.5">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"
            initial={reduce ? { width: '78%' } : { width: 0 }}
            whileInView={{ width: '78%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.6, ease: EASE_OUT }}
          />
        </div>
        <span className="text-[9px] font-semibold text-emerald-300">+78%</span>
      </div>
    </div>
  )
}

function CallbackPill() {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-bg-card/90 px-2.5 py-1.5 shadow-lg backdrop-blur-xl">
      <PhoneCall className="h-3 w-3 text-amber-300" strokeWidth={2.2} />
      <span className="text-[10px] font-medium text-white">3 callbacks pending</span>
    </div>
  )
}

function Workspace() {
  const reduce = useReducedMotion()

  const cardIn = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 30, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, delay, ease: EASE_OUT },
  })

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* ---------- Mobile + tablet: clean stacked flow ---------- */}
      <div className="space-y-3 lg:hidden">
        <motion.div {...cardIn(0.15)}>
          <ChatCard />
        </motion.div>
        <motion.div {...cardIn(0.3)} className="grid grid-cols-2 gap-3">
          <MiniChip icon={ArrowUpRight} tone="bg-cyan-400/15 text-cyan-300" title="Lead captured" sub="Auto-added" />
          <MiniChip icon={RefreshCcw} tone="bg-teal-400/15 text-teal-300" title="4 renewals due" sub="This week" />
        </motion.div>
        <motion.div {...cardIn(0.45)} className="grid grid-cols-[1.3fr_1fr] gap-3">
          <BuddieCard />
          <MetricCard />
        </motion.div>
        <motion.div {...cardIn(0.6)} className="flex justify-center pt-1">
          <CallbackPill />
        </motion.div>
      </div>

      {/* ---------- Desktop: cinematic floating composition ---------- */}
      <div className="relative hidden lg:block">
        {/* Animated connector lines behind the cards */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 560 520"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d="M150 130 C 250 130, 250 250, 360 250"
            stroke="url(#heroLine)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 1.2, ease: EASE_OUT }}
          />
          <motion.path
            d="M360 300 C 250 320, 230 410, 150 410"
            stroke="url(#heroLine)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 1.8, ease: EASE_OUT }}
          />
          <defs>
            <linearGradient id="heroLine" x1="0" y1="0" x2="560" y2="520">
              <stop stopColor="#7C3AED" stopOpacity="0.1" />
              <stop offset="0.5" stopColor="#8b5cf6" stopOpacity="0.7" />
              <stop offset="1" stopColor="#25d366" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Main WhatsApp inbox card */}
        <motion.div {...cardIn(0.2)} className="relative z-20 ml-auto w-[68%]">
          <ChatCard />
        </motion.div>

        {/* Lead captured chip */}
        <Float amplitude={8} duration={7} className="absolute left-0 top-[12%] z-30">
          <motion.div {...cardIn(0.6)}>
            <MiniChip icon={ArrowUpRight} tone="bg-cyan-400/15 text-cyan-300" title="Lead captured" sub="Auto-added to pipeline" />
          </motion.div>
        </Float>

        {/* Buddie suggestion card */}
        <Float amplitude={11} duration={8} delay={0.5} className="absolute left-2 bottom-[16%] z-30 w-[230px]">
          <motion.div {...cardIn(1.0)}>
            <BuddieCard />
          </motion.div>
        </Float>

        {/* Renewal due chip */}
        <Float amplitude={9} duration={6.5} delay={0.2} className="absolute right-0 top-[2%] z-10">
          <motion.div {...cardIn(0.8)}>
            <MiniChip icon={RefreshCcw} tone="bg-teal-400/15 text-teal-300" title="4 renewals due" sub="Surfaced this week" />
          </motion.div>
        </Float>

        {/* Revenue metric card */}
        <Float amplitude={10} duration={7.5} delay={0.8} className="absolute bottom-[2%] right-1 z-30 w-[180px]">
          <motion.div {...cardIn(1.2)}>
            <MetricCard />
          </motion.div>
        </Float>

        {/* Callback chip */}
        <Float amplitude={7} duration={6} delay={1.1} className="absolute right-[20%] top-[42%] z-30">
          <motion.div {...cardIn(1.0)}>
            <CallbackPill />
          </motion.div>
        </Float>

        {/* Spacer to give the absolute-positioned composition height */}
        <div className="h-[520px] w-full" aria-hidden="true" />
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------------- */
/*  Section                                                                  */
/* ------------------------------------------------------------------------- */

const TRUST = [
  'Runs on your existing WhatsApp number',
  'Official Meta tech provider · DPDP-ready',
  'In production with Mastec Water Purifier',
]

export function HeroCinematic() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  const copyIn = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE_OUT },
  })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 md:pb-28 md:pt-36 lg:px-8"
    >
      {/* Ambient cinematic backdrop */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(124,58,237,0.22),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(37,211,102,0.12),transparent_40%)]" />
        {/* Soft animated light streaks */}
        {!reduce && (
          <>
            <motion.div
              className="absolute -left-1/4 top-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-brand-light/40 to-transparent"
              animate={{ x: ['-10%', '120%'], opacity: [0, 0.8, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute right-0 top-2/3 h-px w-1/3 bg-gradient-to-r from-transparent via-teal-300/30 to-transparent"
              animate={{ x: ['20%', '-120%'], opacity: [0, 0.7, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            />
          </>
        )}
        {/* Faint grid */}
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
        {/* Bottom fade into body */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg-primary" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Copy */}
        <div>
          <motion.div
            {...copyIn(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-light opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-light" />
            </span>
            Customer operations, run on WhatsApp
          </motion.div>

          <motion.h1
            {...copyIn(0.12)}
            className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Customer Operations Platform for{' '}
            <span className="bg-gradient-to-r from-brand-light via-white to-teal-300 bg-clip-text text-transparent">
              WhatsApp-first
            </span>{' '}
            businesses
          </motion.h1>

          <motion.p
            {...copyIn(0.24)}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
          >
            Track leads, customers, renewals, follow-ups and operational
            workflows from one intelligent workspace — on the number your
            customers already message.
          </motion.p>

          <motion.div
            {...copyIn(0.36)}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <Button href="https://app.leadbuddie.com" variant="primary" size="lg" className="w-full sm:w-auto">
              Start Free
            </Button>
            <Button
              href="/demo"
              variant="outline"
              size="lg"
              className="w-full border-white/20 text-white hover:bg-white/10 sm:w-auto"
            >
              Watch Demo
            </Button>
          </motion.div>

          <motion.ul {...copyIn(0.5)} className="mt-9 flex flex-col gap-2.5">
            {TRUST.map((line) => (
              <li key={line} className="flex items-start gap-2.5 text-sm text-white/60">
                <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-light" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l2.47 2.47 6.47-6.47a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
                <span>{line}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Living workspace */}
        <div className="relative">
          <Workspace />
        </div>
      </div>
    </section>
  )
}
