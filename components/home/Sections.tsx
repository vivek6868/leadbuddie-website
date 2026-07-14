/*
 * Homepage redesign sections (WhatsApp Premium) — trust strip, numbers band,
 * Meet-Buddie approval desk, autonomy modes, built-for-India, pricing, final CTA.
 * Layout/visuals ported from the Claude Design handoff; copy + stats + pricing
 * use the site's real data (lib/constants) where the design used placeholders.
 */
import { Button } from '@/components/ui/Button'
import { BuddieFace, Pill, P } from './atoms'
import { ApprovalDeskDemo } from './ApprovalDeskDemo'

/* ── Trust strip ─────────────────────────────────────────────────────────── */
const TRUST_ITEMS = [
  { glyph: '✓', label: 'Meta Tech Provider', sub: 'Official WhatsApp partner' },
  { glyph: '⚲', label: 'DPDP compliant', sub: 'Secure data isolation' },
  { glyph: '₹', label: 'Cancel anytime', sub: '30 days free, no card' },
  { glyph: '→', label: 'On your number', sub: 'Existing WhatsApp · quick setup' },
  { glyph: '★', label: '1.5 lakh+ messages handled', sub: 'Across 75+ onboarded businesses' },
]

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-black/[0.015]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-5 sm:px-6 md:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {TRUST_ITEMS.map((it, i) => (
          <div
            key={i}
            className={`flex items-center gap-2.5 px-1 py-2 lg:px-2 ${
              i < TRUST_ITEMS.length - 1 ? 'lg:border-r lg:border-border' : ''
            }`}
          >
            <span
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold text-brand"
              style={{ background: 'rgba(0,0,0,0.04)' }}
            >
              {it.glyph}
            </span>
            <div>
              <div className="text-[0.78rem] font-bold tracking-tight text-text-primary">{it.label}</div>
              <div className="mt-px text-[0.68rem] text-text-muted">{it.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Numbers band ────────────────────────────────────────────────────────── */
// Figures the site actually backs — pulled from live production DB (Jul 2026):
// 1.5 lakh+ messages / 10,000+ leads / 75+ businesses are real platform totals;
// 200+ leads/day is the live 7-day platform run-rate (226/day at last check).
// Update these as the platform grows — never publish a number the DB can't back.
const STATS = [
  { value: '1.5L+', label: 'WhatsApp messages handled', sub: 'Across 75+ onboarded businesses', accent: P.brand },
  { value: '10,000+', label: 'Leads captured & worked', sub: 'Replies in 10s — even at 2am', accent: P.success },
  { value: '200+', label: 'New leads every day', sub: 'Captured across the platform', accent: P.brand },
]

export function NumbersBand() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_2fr] lg:gap-14">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">Why it works</div>
          <h2 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-text-primary">
            Pays for itself<br />in the first week.
          </h2>
          <p className="mt-4 max-w-md text-[0.97rem] leading-relaxed text-text-secondary">
            Live totals from businesses running LeadBuddie — water purifiers, gyms, salons,
            footwear retail, travel, matrimony and more. Real production numbers, not projections.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <div key={i} className="rounded-[18px] border border-border bg-bg-card p-6">
              <div
                className="font-heading text-[2.75rem] font-extrabold leading-none tracking-[-0.03em] tabular-nums"
                style={{ color: s.accent }}
              >
                {s.value}
              </div>
              <div className="mt-2.5 text-sm font-bold text-text-primary">{s.label}</div>
              <div className="mt-1 text-xs text-text-muted">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Meet Buddie at work ─────────────────────────────────────────────────── */
const PROMISES: [string, string][] = [
  ['Always replies in 10 seconds', 'Even at 2am or during a wedding'],
  ['Never invents a price', 'If unsure, politely defers to you'],
  ['Hands off complaints', 'Refund / warranty → straight to your inbox'],
]

export function MeetBuddie() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">Meet Buddie at work</div>
          <h2 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-text-primary">
            It&apos;s not a dashboard.<br />It&apos;s a real employee leaving<br />you tidy notes.
          </h2>
          <p className="mt-4 max-w-lg text-[0.97rem] leading-relaxed text-text-secondary">
            Buddie watches every WhatsApp chat, drafts the right reply, and stacks 3–4 things on
            your desk in your business language. Approve them in 30 seconds with your morning coffee.
          </p>
          <ul className="mt-6 flex flex-col gap-2.5">
            {PROMISES.map(([t, s], i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md text-[11px] font-extrabold"
                  style={{ background: P.successSoft, color: P.success }}
                >
                  ✓
                </span>
                <div>
                  <div className="text-sm font-semibold text-text-primary">{t}</div>
                  <div className="mt-px text-xs text-text-muted">{s}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Approval desk - client-side animated mockup */}
        <div className="flex w-full justify-center">
          <ApprovalDeskDemo />
        </div>
      </div>
    </section>
  )
}

/* ── Autonomy modes ──────────────────────────────────────────────────────── */
const MODES = [
  {
    name: 'Watch', glyph: '◐', cta: 'Zero risk',
    tagline: 'Observes silently. Drafts nothing.',
    desc: 'Best for week 1 — Buddie learns your tone, logs intent, tags warm leads. Sends nothing on its own.',
    footer: '"Quietly watching 12 chats today"',
  },
  {
    name: 'Approve', glyph: '✓', cta: 'Recommended', featured: true,
    tagline: 'Drafts. You tap to send.',
    desc: 'Buddie writes the reply. You see it on your phone, edit if needed, tap once to send. Best for high-value sales.',
    footer: '"3 drafts waiting for your tap"',
  },
  {
    name: 'Auto', glyph: '✦', cta: 'Full autopilot',
    tagline: 'Replies on its own.',
    desc: 'Within rules you set, Buddie replies, sends brochures, schedules service. Best for FAQ + after-hours.',
    footer: '"19 replies sent automatically since 6am"',
  },
]

export function AutonomyModes() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">Trust at your pace</div>
          <h2 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-text-primary">
            Three modes. One tap to switch.
          </h2>
          <p className="mt-3.5 text-[0.97rem] leading-relaxed text-text-secondary">
            Start by watching. Move to Approve when you trust the drafts. Hand over the boring
            stuff to Auto when you&apos;re ready.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {MODES.map((m) => (
            <div
              key={m.name}
              className={`relative overflow-hidden rounded-[22px] border p-7 ${
                m.featured ? 'border-border-light bg-bg-card' : 'border-border bg-bg-card'
              }`}
              style={m.featured ? { boxShadow: `0 24px 60px -24px ${P.glow}` } : undefined}
            >
              {m.featured && (
                <span
                  aria-hidden
                  className="absolute -top-px left-[20%] right-[20%] h-0.5 rounded-full"
                  style={{ background: P.brandGrad }}
                />
              )}
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-xl font-extrabold"
                  style={
                    m.featured
                      ? { background: P.brandGrad, color: '#fff', boxShadow: `0 8px 16px -6px ${P.glow}` }
                      : { background: 'var(--color-sunk)', color: P.brand }
                  }
                >
                  {m.glyph}
                </span>
                <div>
                  <div className="text-lg font-bold tracking-tight text-text-primary">{m.name}</div>
                  <div
                    className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.08em]"
                    style={{ color: m.featured ? P.brand : 'var(--color-text-muted)' }}
                  >
                    {m.cta}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold leading-snug text-text-primary">{m.tagline}</p>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-text-secondary">{m.desc}</p>
              <div className="mt-5 rounded-lg border border-border bg-bg-elevated px-3 py-2.5 text-xs italic text-text-muted">
                {m.footer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Built for India (Multilingual AI) ───────────────────────────────────── */
// Real customers from lib/constants TESTIMONIALS, tagged by Indian city.
const GLOBAL_CARDS = [
  { tag: 'Coimbatore · Water', who: 'Master Water Purifier', stat: '100+', statLabel: 'leads / day handled' },
  { tag: 'Mumbai · Travel', who: 'Nitya Tours & agency', stat: 'Zero', statLabel: 'missed follow-ups' },
  { tag: 'Bangalore · Fitness', who: 'Zyrax Fitness', stat: '1 inbox', statLabel: 'across all trainers' },
  { tag: 'Delhi · B2B retail', who: 'Classic Leathers', stat: '0', statLabel: 'orders lost on WhatsApp' },
]

export function BuiltForGlobal() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">Made for India · Multilingual AI</div>
            <h2 className="mt-3 font-heading text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-[2.25rem]">
              Coimbatore dealers. Chennai salons.<br />Mumbai agencies.
            </h2>
          </div>
          <div className="max-w-sm text-sm text-text-secondary">
            Buddie chats naturally in Hindi, Tamil, Telugu, English and Hinglish — even voice notes —
            understands ₹ pricing, and replies in the customer&apos;s own language. <span className="text-text-muted">Also works for global WhatsApp-first teams.</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
          {GLOBAL_CARDS.map((c, i) => (
            <div key={i} className="flex min-h-[180px] flex-col rounded-[18px] border border-border bg-bg-card p-6">
              <Pill className="self-start border border-border text-text-primary" style={{ background: 'var(--color-sunk)', fontSize: 10.5, padding: '3px 9px' }}>
                {c.tag}
              </Pill>
              <div className="mt-3.5 text-[0.8125rem] text-text-muted">{c.who}</div>
              <div className="flex-1" />
              <div className="font-heading text-[2rem] font-extrabold leading-none tracking-[-0.025em] text-brand">{c.stat}</div>
              <div className="mt-1 text-xs text-text-secondary">{c.statLabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Pricing ─────────────────────────────────────────────────────────────── */
/* Moved to components/home/HomePricing.tsx (client — monthly/annual toggle
   mirroring the in-app billing page). */

/* ── Final CTA ───────────────────────────────────────────────────────────── */
export function FinalCTA() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-border-light px-6 py-16 text-center sm:px-12"
        style={{ background: `radial-gradient(circle at 30% 30%, ${P.glow}, transparent 60%), #fff` }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            background: 'repeating-linear-gradient(45deg, transparent 0 32px, var(--color-border) 32px 33px)',
            maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 65%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black, transparent 65%)',
          }}
        />
        <div className="relative">
          <div className="flex justify-center">
            <BuddieFace size={84} halo mood="happy" floating />
          </div>
          <h2 className="mt-6 font-heading text-4xl font-bold leading-[1.02] tracking-[-0.035em] text-text-primary sm:text-5xl">
            Stop losing leads to faster competitors.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
            Set up in minutes on your existing WhatsApp number. 30 days free. No credit card.
            Cancel anytime.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="https://app.leadbuddie.com" variant="primary" size="lg" className="w-full sm:w-auto">
              Start free trial <span className="ml-1">→</span>
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto">
              Talk to a human
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
