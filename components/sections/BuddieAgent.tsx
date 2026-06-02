'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Sparkles,
  Eye,
  Hand,
  Zap,
  ShieldCheck,
  AlertTriangle,
  Send,
  Check,
  FileText,
  Clock,
  Languages,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react'
import { EASE_OUT, Reveal, Stagger, StaggerItem, Float } from '@/components/ui/motion'

/**
 * BuddieAgent — the AI Sales Employee section on the homepage.
 *
 * This is the "what Buddie actually does today" surface. It mirrors the live product in
 * leadmate-hutliv: replies to WhatsApp leads, sends brochures from a Common Topic match,
 * follows up quiet leads, escalates hot buyers and complaints, and runs in one of three
 * autonomy modes (Watch / Approve / Auto) the owner can change in seconds.
 *
 * Design grammar (kept consistent with WorkflowStory / HeroCinematic):
 *   - Dark backdrop with radial brand glow
 *   - Tone-based color system (brand/teal/amber/emerald/sky)
 *   - Framer Motion: Reveal + Stagger for the cards, Float for the conversation panel
 *   - Authentic product copy reused from the actual UI (e.g. "I draft, you send" from
 *     the autonomy ladder), so this section doesn't drift from what owners see.
 */

// ── Autonomy modes ────────────────────────────────────────────────────────────
// These three are the actual modes in the product (lib/buddie/types.ts:AutonomyLevel).
// Copy is lifted verbatim from components/buddie/autonomy-ladder.tsx so the website
// promises the same thing the settings page shows.
const MODES: { icon: LucideIcon; label: string; copy: string; accent: string }[] = [
  {
    icon: Eye,
    label: 'Watch',
    copy: 'I draft, you send. Nothing goes out.',
    accent: 'border-sky-400/30 bg-sky-400/[0.06] text-sky-300',
  },
  {
    icon: Hand,
    label: 'Approval',
    copy: 'I queue replies for approve, edit, or reject.',
    accent: 'border-amber-400/30 bg-amber-400/[0.06] text-amber-300',
  },
  {
    icon: Zap,
    label: 'Auto',
    copy: 'I reply on my own, in your rules.',
    accent: 'border-emerald-400/30 bg-emerald-400/[0.06] text-emerald-300',
  },
]

// ── Trust mechanics — the four reasons owners actually trust Buddie ──────────
const TRUST: { icon: LucideIcon; title: string; copy: string; tone: string }[] = [
  {
    icon: Sparkles,
    title: 'Fast first reply, always',
    copy: 'When a brand-new lead messages — or one returns after 7+ quiet days — Buddie replies in seconds, even on Watch or Approve.',
    tone: 'text-brand-light bg-brand/10 border-brand/25',
  },
  {
    icon: AlertTriangle,
    title: 'Hot buyers come to you',
    copy: 'Buying intent, complaints, or refund language hands off automatically — Buddie does not reply, you take it from there.',
    tone: 'text-rose-300 bg-rose-400/10 border-rose-400/25',
  },
  {
    icon: ShieldCheck,
    title: 'Never invents a price',
    copy: 'If you haven\'t set pricing, Buddie defers: "Let me check the latest pricing and share shortly." It will not make up numbers.',
    tone: 'text-teal-300 bg-teal-400/10 border-teal-400/25',
  },
  {
    icon: Clock,
    title: 'Full audit, every action',
    copy: 'Every reply, draft, escalation, and follow-up is logged with the reason. Open the activity feed any time and see why.',
    tone: 'text-violet-300 bg-violet-400/10 border-violet-400/25',
  },
]

// ── Live conversation visual — shows Buddie replying to a real WhatsApp message ──
function ConversationVisual({ reduce }: { reduce: boolean }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0e0e1a] to-[#0a0a14] p-4 shadow-[0_30px_80px_-30px_rgba(124,58,237,0.5)]">
      {/* Mock WhatsApp header */}
      <div className="mb-3 flex items-center justify-between border-b border-white/[0.06] pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/15 text-[11px] font-bold text-cyan-200">
            RK
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Ramesh K.</p>
            <p className="text-[10px] text-emerald-300">online · WhatsApp</p>
          </div>
        </div>
        <span className="rounded-full bg-cyan-400/15 px-2 py-0.5 text-[9px] font-semibold uppercase text-cyan-300">
          New lead
        </span>
      </div>

      <div className="space-y-2.5">
        {/* Customer message */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="max-w-[78%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[12px] leading-snug text-slate-800 shadow-sm"
        >
          Hi, looking for an RO purifier for home. What models do you have?
          <p className="mt-1 text-right text-[9px] text-slate-400">11:42 AM</p>
        </motion.div>

        {/* Buddie typing indicator */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="flex items-center gap-2"
        >
          <span className="rounded-full bg-brand/15 px-2 py-0.5 text-[9px] font-semibold uppercase text-brand-light">
            Buddie
          </span>
          <span className="text-[10px] text-white/40">typing…</span>
        </motion.div>

        {/* Buddie reply */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.7 }}
          className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3 py-2 text-[12px] leading-snug text-slate-800 shadow-sm"
        >
          Hi Ramesh! Thanks for reaching out 👋 We have three popular models for home use — the Kent Grand, Aquaguard Marvel, and Pureit Copper+. What’s your daily water usage? I can recommend the right one.
          <p className="mt-1 text-right text-[9px] text-slate-400">11:42 AM ✓✓</p>
        </motion.div>

        {/* First-reply override badge — real product badge */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: EASE_OUT, delay: 1 }}
          className="ml-auto flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-1 text-[10px] font-medium text-brand-light"
        >
          <Sparkles className="h-3 w-3" strokeWidth={2.4} />
          Fast first reply · brand-new lead · sent in 4s
        </motion.div>

        {/* Second message — asks for brochure */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 1.3 }}
          className="max-w-[78%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[12px] leading-snug text-slate-800 shadow-sm"
        >
          Can you send me the brochure?
          <p className="mt-1 text-right text-[9px] text-slate-400">11:43 AM</p>
        </motion.div>

        {/* Buddie sends a PDF */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 1.7 }}
          className="ml-auto max-w-[80%] space-y-1.5"
        >
          <div className="flex items-center gap-2 rounded-xl rounded-tr-sm bg-[#DCF8C6] px-3 py-2 shadow-sm">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-rose-500/15 text-rose-600">
              <FileText className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold text-slate-800">RO-Catalog-2026.pdf</p>
              <p className="text-[10px] text-slate-500">PDF · 2.4 MB</p>
            </div>
          </div>
          <div className="rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3 py-2 text-[12px] leading-snug text-slate-800 shadow-sm">
            Sharing our 2026 catalog with all models, pricing, and AMC options. Let me know which one looks right for your home!
            <p className="mt-1 text-right text-[9px] text-slate-400">11:43 AM ✓✓</p>
          </div>
        </motion.div>

        {/* Quiet line — what's happening behind the scenes */}
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 2.2 }}
          className="pt-2 text-center text-[10px] italic text-white/35"
        >
          Common Topic matched on “brochure” → Buddie sent the catalog automatically.
        </motion.p>
      </div>
    </div>
  )
}

// ── Approval queue preview card — tiny mock of /buddie ───────────────────────
function ApprovalQueueVisual({ reduce }: { reduce: boolean }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d0d18]/90 p-4 shadow-[0_30px_80px_-30px_rgba(45,212,191,0.35)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
            Approval desk
          </p>
          <p className="mt-0.5 text-sm font-semibold text-white">3 tasks waiting</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="rounded-full bg-brand/15 px-2 py-0.5 text-[9px] font-semibold text-brand-light">3 pending</span>
          <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[9px] font-semibold text-emerald-300">12 sent today</span>
        </div>
      </div>

      <Stagger className="mt-3 space-y-2" stagger={0.12}>
        {/* Reply task */}
        <StaggerItem>
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
            <div className="flex items-start gap-2.5">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-400/15 text-[10px] font-bold text-violet-200">
                SM
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="truncate text-[12px] font-semibold text-white">Suresh M.</p>
                  <span className="rounded-full bg-brand/15 px-1.5 py-0.5 text-[9px] font-semibold text-brand-light">approval</span>
                </div>
                <p className="mt-0.5 text-[10px] text-white/40">Ready to send reply · 2m ago</p>
                <p className="mt-1.5 text-[11px] italic leading-snug text-white/70">
                  “Hi Suresh, the Kent Grand RO is ₹15,999 with 1-year warranty and free home installation. Want me to share the AMC options too?”
                </p>
              </div>
            </div>
            <div className="mt-2.5 flex gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-lg bg-brand px-2.5 py-1 text-[10px] font-semibold text-white">
                <Send className="h-3 w-3" strokeWidth={2.6} /> Send
              </span>
              <span className="rounded-lg border border-white/12 px-2.5 py-1 text-[10px] font-medium text-white/55">Edit</span>
              <span className="rounded-lg px-2.5 py-1 text-[10px] font-medium text-white/40">Reject</span>
            </div>
          </div>
        </StaggerItem>

        {/* Review (escalation) task */}
        <StaggerItem>
          <div className="rounded-xl border border-rose-400/[0.18] bg-rose-400/[0.04] p-3">
            <div className="flex items-start gap-2.5">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-400/15 text-[10px] font-bold text-rose-200">
                PA
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="truncate text-[12px] font-semibold text-white">Priya A.</p>
                  <span className="rounded-full bg-rose-400/15 px-1.5 py-0.5 text-[9px] font-semibold text-rose-300">handoff</span>
                  <span className="rounded-full bg-rose-400/20 px-1.5 py-0.5 text-[9px] font-semibold text-rose-300">urgent</span>
                </div>
                <p className="mt-0.5 text-[10px] text-white/40">Needs human review · 5m ago</p>
                <p className="mt-1.5 text-[11px] italic leading-snug text-white/70">
                  Customer mentioned “not working” and asked for a refund. Buddie did not reply — you take it from here.
                </p>
              </div>
            </div>
            <div className="mt-2.5 flex gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-lg bg-rose-500 px-2.5 py-1 text-[10px] font-semibold text-white">
                <Check className="h-3 w-3" strokeWidth={2.6} /> Mark handled
              </span>
            </div>
          </div>
        </StaggerItem>
      </Stagger>
    </div>
  )
}

export function BuddieAgent() {
  const reduce = useReducedMotion() ?? false

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      {/* Ambient brand glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(124,58,237,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(45,212,191,0.12),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl">
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-light">
              <Sparkles className="h-3 w-3" strokeWidth={2.4} />
              Meet Buddie
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance text-3xl font-bold leading-[1.1] text-white md:text-5xl">
              Your AI sales employee on WhatsApp.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-white/60 md:text-lg">
              Replies to leads in seconds. Sends brochures and catalogs. Follows up quiet customers.
              Hands off the hot ones. Three trust modes — <strong className="text-white/85">Watch</strong>,{' '}
              <strong className="text-white/85">Approval</strong>, or <strong className="text-white/85">Auto</strong> —
              you choose how much rope to give.
            </p>
          </Reveal>
        </div>

        {/* ── Hero panel: conversation + autonomy ladder ─────────────────── */}
        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Live conversation */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-[32px] bg-gradient-to-br from-brand/20 via-transparent to-emerald-400/10 blur-3xl" />
              <Float amplitude={10} duration={10}>
                <ConversationVisual reduce={reduce} />
              </Float>
            </div>
          </Reveal>

          {/* Autonomy ladder + tagline */}
          <div className="space-y-6">
            <Reveal delay={0.18}>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  How much can I do on my own?
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Pick a trust mode. Switch anytime.
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/55">
                  Mode = <em>how</em> Buddie acts. Toggles below = <em>what</em> it&apos;s allowed to do.
                  The same toggles apply in every mode.
                </p>
              </div>
            </Reveal>

            <Stagger className="space-y-2" stagger={0.1}>
              {MODES.map(({ icon: Icon, label, copy, accent }) => (
                <StaggerItem key={label}>
                  <div className={`flex items-start gap-3 rounded-xl border p-3.5 ${accent}`}>
                    <Icon className="mt-0.5 h-4 w-4 flex-shrink-0" strokeWidth={2.2} />
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-white">{label}</p>
                      <p className="mt-0.5 text-[12px] leading-snug text-white/60">{copy}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.4}>
              <p className="text-[11px] italic leading-snug text-white/40">
                Locked behavior: first reply to a brand-new lead always sends instantly — regardless of mode.
                Speed wins the first response; trust grows from there.
              </p>
            </Reveal>
          </div>
        </div>

        {/* ── Trust mechanics grid ───────────────────────────────────────── */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                Why owners trust it on autopilot
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                Four guardrails that ship out of the box.
              </h3>
            </div>
          </Reveal>

          <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {TRUST.map(({ icon: Icon, title, copy, tone }) => (
              <StaggerItem key={title}>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.04]">
                  <span className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border ${tone}`}>
                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <p className="text-[15px] font-semibold text-white">{title}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/55">{copy}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ── Approval queue preview + side notes ────────────────────────── */}
        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                The approval queue
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                See every reply before it ships — in two taps.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/60">
                Approval mode is the trust bridge. Buddie drafts every reply, every brochure send, every
                follow-up nudge — you skim the queue 2&ndash;3 times a day and tap Send or Edit. Most
                owners graduate to Auto within a couple of weeks once they see the drafts are sound.
              </p>

              <Stagger className="mt-6 space-y-3" stagger={0.1}>
                {[
                  { icon: Languages, copy: 'Detects English, Hindi, Tamil, Tanglish — escalates buying intent and complaints in any of them.' },
                  { icon: Send, copy: 'Follow-up cron pokes quiet leads at 1h / 6h / 18h inside the 24-hour WhatsApp window — toggle each timing independently.' },
                  { icon: ShieldCheck, copy: 'Append-only audit log: every decision explains itself. No black boxes.' },
                ].map(({ icon: Icon, copy }) => (
                  <StaggerItem key={copy} className="flex items-start gap-2.5">
                    <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-light" strokeWidth={2} />
                    <p className="text-[13px] leading-relaxed text-white/65">{copy}</p>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal delay={0.3}>
                <a
                  href="/demo"
                  className="mt-7 inline-flex items-center gap-1.5 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_-20px_rgba(124,58,237,0.7)] transition-transform hover:scale-[1.02]"
                >
                  See Buddie reply to a live lead
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                </a>
              </Reveal>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-[32px] bg-gradient-to-br from-teal-400/15 via-transparent to-brand/15 blur-3xl" />
              <Float amplitude={8} duration={12}>
                <ApprovalQueueVisual reduce={reduce} />
              </Float>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
