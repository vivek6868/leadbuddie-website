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
import Image from 'next/image'
import QRCode from 'qrcode'
import { PLAY_STORE } from '@/lib/constants'

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
            className={`max-w-[85%] rounded-xl px-2.5 py-1.5 text-[10px] leading-snug shadow-sm ${
              m.side === 'out'
                ? 'rounded-tr-sm bg-[#DCF8C6] text-slate-900'
                : 'rounded-tl-sm bg-white text-slate-900'
            }`}
          >
            <p>{m.text}</p>
            {m.side === 'out' && (
              <div className="mt-0.5 flex items-center justify-end gap-1">
                {m.ai && (
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-violet-100 px-1 py-px text-[7px] font-bold uppercase tracking-wide text-violet-700">
                    <Sparkles className="h-1.5 w-1.5" strokeWidth={2.6} />
                    Buddie
                  </span>
                )}
                <CheckCheck className="h-2 w-2 text-sky-500" strokeWidth={2.2} />
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------------- */
/*  Mini components for floating layouts                                     */
/* ------------------------------------------------------------------------- */

function MetricCard() {
  const reduce = useReducedMotion()
  return (
    <div className="rounded-2xl border border-emerald-400/20 bg-bg-card/92 p-3 shadow-xl backdrop-blur-xl">
      <div className="mb-0.5 flex items-center justify-between">
        <span className="text-[8px] font-semibold uppercase tracking-wide text-white/45">Renewals saved</span>
        <TrendingUp className="h-3 w-3 text-emerald-300" strokeWidth={2.2} />
      </div>
      <p className="text-lg font-bold text-white leading-none">
        <RevenueCounter to={184500} />
      </p>
      <div className="mt-1.5 flex items-center gap-1">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"
            initial={reduce ? { width: '78%' } : { width: 0 }}
            whileInView={{ width: '78%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.6, ease: EASE_OUT }}
          />
        </div>
        <span className="text-[8px] font-semibold text-emerald-300">+78%</span>
      </div>
    </div>
  )
}

function CallbackPill() {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-bg-card/90 px-2.5 py-1 shadow-lg backdrop-blur-xl">
      <PhoneCall className="h-2.5 w-2.5 text-amber-300" strokeWidth={2.2} />
      <span className="text-[9px] font-medium text-white">3 callbacks pending</span>
    </div>
  )
}

/* ------------------------------------------------------------------------- */
/*  The Double Mockup Showcase Component                                     */
/* ------------------------------------------------------------------------- */

function DoubleProductShowcase() {
  const reduce = useReducedMotion()

  const cardIn = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 30, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, delay, ease: EASE_OUT },
  })

  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none aspect-[1.3/1] lg:aspect-square flex items-center justify-center">
      {/* 1. Main browser window (desktop web app) */}
      <motion.div
        {...cardIn(0.15)}
        className="absolute right-0 top-6 w-[88%] z-10"
      >
        <div className="relative rounded-2xl border border-white/10 bg-[#0d0d18]/90 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.85)] backdrop-blur-xl">
          {/* Browser header */}
          <div className="flex items-center justify-between pb-2 px-2 border-b border-white/[0.06] mb-2">
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="h-4 w-1/3 rounded bg-white/[0.04] border border-white/[0.04] flex items-center justify-center text-[7px] text-white/30 font-mono">
              app.leadbuddie.com/dashboard
            </div>
            <div className="w-8 h-2 bg-transparent" />
          </div>

          {/* Main Dashboard Image */}
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-slate-950">
            <Image
              src="/images/dashboard-overview.png"
              alt="LeadBuddie CRM Dashboard"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 600px"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* 2. Overlapping smartphone (WhatsApp experience) */}
      <Float amplitude={6} duration={8} delay={0.2} className="absolute left-0 bottom-4 z-20 w-[42%] max-w-[210px] sm:max-w-[230px]">
        <motion.div {...cardIn(0.4)}>
          <div className="relative rounded-[32px] bg-slate-950 p-2 shadow-[0_30px_70px_rgba(0,0,0,0.9)] border border-white/15">
            <div className="relative rounded-[26px] overflow-hidden bg-[#ECE5DD] aspect-[9/19]">
              {/* Camera Notch */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 h-3 w-14 rounded-full bg-slate-950 z-30" />

              {/* WhatsApp header */}
              <div className="bg-[#075E54] px-2.5 pb-1.5 pt-3.5 flex items-center justify-between z-20 relative">
                <div className="flex items-center gap-1.5">
                  <div className="h-4.5 w-4.5 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold text-[7px]">PD</div>
                  <div>
                    <p className="text-white text-[8px] font-semibold leading-none">Priya Desai</p>
                    <p className="text-[#25d366] text-[6px] leading-none mt-0.5 font-medium">online</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-400/20 px-1 py-px text-[5px] font-semibold uppercase text-emerald-300">Live</span>
              </div>

              {/* WhatsApp Messages */}
              <div className="p-1.5 space-y-1.5 h-[calc(100%-42px)] flex flex-col justify-end overflow-hidden">
                <StreamingThread />
              </div>
            </div>
          </div>
        </motion.div>
      </Float>

      {/* 3. Floating metric card (context overlay) */}
      <Float amplitude={8} duration={7} delay={0.6} className="absolute right-[4%] bottom-[8%] z-30 w-[35%] max-w-[160px]">
        <motion.div {...cardIn(0.7)}>
          <MetricCard />
        </motion.div>
      </Float>

      {/* 4. Floating callback badge */}
      <Float amplitude={5} duration={6} delay={1.1} className="absolute right-[10%] top-[8%] z-20">
        <motion.div {...cardIn(0.9)}>
          <CallbackPill />
        </motion.div>
      </Float>
    </div>
  )
}

/* ------------------------------------------------------------------------- */
/*  Main Section export                                                      */
/* ------------------------------------------------------------------------- */

const TRUST = [
  'Runs on your existing WhatsApp number',
  'Official Meta tech provider · DPDP-ready',
  'In production with Mastec Water Purifier',
]

export function HeroCinematic() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [qrUrl, setQrUrl] = useState<string>('')

  useEffect(() => {
    // Generate QR code client-side to link to Google Play Store
    QRCode.toDataURL(PLAY_STORE.url, {
      margin: 1,
      width: 120,
      color: {
        dark: '#0f172a', // slate-900 (highly visible dark color)
        light: '#ffffff',
      },
    })
      .then((url) => setQrUrl(url))
      .catch((err) => console.error('Error generating QR code', err))
  }, [])

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
        <Image
          src="/images/hero-bg.png"
          alt="LeadBuddie Tech Background"
          fill
          priority
          className="object-cover opacity-20"
        />
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
            AI sales employee for WhatsApp
          </motion.div>

          <motion.h1
            {...copyIn(0.12)}
            className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Your{' '}
            <span className="bg-gradient-to-r from-brand-light via-white to-teal-300 bg-clip-text text-transparent">
              AI sales employee
            </span>{' '}
            on WhatsApp
          </motion.h1>

          <motion.p
            {...copyIn(0.24)}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
          >
            Buddie replies to your WhatsApp leads in seconds, sends brochures,
            follows up quiet customers, and hands off the hot ones. Plus the
            full operational workspace — leads, customers, AMC renewals,
            follow-ups — on the number your customers already message.
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

          {/* Android App Promotion Card */}
          <motion.div
            {...copyIn(0.55)}
            className="mt-9 p-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm max-w-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 text-center sm:text-left">
                <span className="inline-flex items-center gap-1 rounded-full bg-teal-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-teal-300 mb-1 border border-teal-400/15">
                  LeadBuddie Mobile App
                </span>
                <h4 className="text-sm font-semibold text-white mb-3">Manage customer operations on the go</h4>
                
                {/* Play Store Link Badge */}
                <a
                  href={PLAY_STORE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 hover:border-white/20 transition-all group shadow-inner"
                >
                  <svg aria-hidden viewBox="0 0 96 96" className="h-6 w-6 shrink-0">
                    <defs>
                      <linearGradient id="gph-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00C0F1" />
                        <stop offset="100%" stopColor="#005FB0" />
                      </linearGradient>
                      <linearGradient id="gph-red" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF3B3B" />
                        <stop offset="100%" stopColor="#E60022" />
                      </linearGradient>
                      <linearGradient id="gph-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD400" />
                        <stop offset="100%" stopColor="#FFA700" />
                      </linearGradient>
                      <linearGradient id="gph-green" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00E472" />
                        <stop offset="100%" stopColor="#00A140" />
                      </linearGradient>
                    </defs>
                    <path d="M14 14 L48 48 L14 82 Z" fill="url(#gph-blue)" />
                    <path d="M14 14 L48 48 L82 28 Z" fill="url(#gph-red)" />
                    <path d="M82 28 L48 48 L82 68 Z" fill="url(#gph-yellow)" />
                    <path d="M14 82 L48 48 L82 68 Z" fill="url(#gph-green)" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[8px] uppercase tracking-wider text-white/55 leading-none">Download on</p>
                    <p className="text-xs font-bold text-white leading-tight mt-0.5 group-hover:text-teal-300 transition-colors">Google Play</p>
                  </div>
                </a>
              </div>

              {/* QR Code Container */}
              {qrUrl ? (
                <div className="hidden sm:flex flex-col items-center gap-1.5 shrink-0 bg-white p-2.5 rounded-xl border border-white/10 shadow-lg">
                  <Image
                    src={qrUrl}
                    alt="Scan to install LeadBuddie App"
                    width={84}
                    height={84}
                    className="object-contain"
                  />
                  <span className="text-[8px] font-bold text-slate-800 uppercase tracking-wide">Scan to Install</span>
                </div>
              ) : (
                <div className="hidden sm:flex h-24 w-24 bg-white/5 animate-pulse rounded-xl" />
              )}
            </div>
          </motion.div>
        </div>

        {/* Double mockup showcase: web app browser overlapping WhatsApp chat phone */}
        <div className="relative">
          <DoubleProductShowcase />
        </div>
      </div>
    </section>
  )
}
