/*
 * Product page — reworked to match the homepage's WhatsApp-Premium design
 * language (brand-green tokens + atoms) and the new positioning: an AI Sales
 * Employee for WhatsApp that replies, follows up, qualifies, and books.
 * Server component — uses the real app screenshots in /public/images.
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import {
  MessageSquare,
  RefreshCw,
  Filter,
  CalendarCheck,
  Inbox,
  Send,
  ClipboardList,
  Users,
  Check,
  ShieldCheck,
  BadgeCheck,
  type LucideIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { MetaTechProviderBadge } from '@/components/sections/MetaTechProviderBadge'
import { ProductAwareness } from '@/components/home/ProductAwareness'
import { Pill, P } from '@/components/home/atoms'

export const metadata: Metadata = {
  title: 'Product — LeadBuddie AI Sales Employee for WhatsApp',
  description:
    'Everything inside LeadBuddie — AI replies, automatic follow-ups, lead qualification, a Bookings board for callbacks, demos and visits, shared WhatsApp inbox, campaigns, AMC renewals and multi-number support. Built for Indian businesses on the official WhatsApp Business API.',
  keywords:
    'WhatsApp CRM features, WhatsApp AI replies, WhatsApp follow up automation, WhatsApp appointment booking software, WhatsApp lead management, multi-number WhatsApp, AMC renewal software',
  alternates: { canonical: '/product' },
}

/* ─── Capability grid (what's inside, in plain outcomes) ─────────────────── */
type Capability = { icon: LucideIcon; title: string; caption: string }

const CAPABILITIES: Capability[] = [
  { icon: MessageSquare, title: 'Instant AI replies', caption: 'Answers every WhatsApp enquiry in ~10 seconds — even at 2am or on a Sunday.' },
  { icon: RefreshCw, title: 'Automatic follow-ups', caption: 'Chases silent leads on its own until they reply or book. Nothing is forgotten.' },
  { icon: Filter, title: 'Lead qualification', caption: 'Filters serious buyers from time-wasters and flags the hot ones for you.' },
  { icon: CalendarCheck, title: 'Bookings board', caption: 'Turns ready leads into booked callbacks, demos, site visits & appointments.' },
  { icon: Inbox, title: 'Shared team inbox', caption: 'One inbox for the whole team — assign chats, add notes, see full history.' },
  { icon: Send, title: 'Campaigns & broadcasts', caption: 'Scheduled WhatsApp campaigns with templates and retry-on-fail.' },
  { icon: ClipboardList, title: 'AMC & renewals', caption: 'Tracks contracts and sends reminders with 1-tap payment links.' },
  { icon: Users, title: 'Team & multi-number', caption: 'Roles for your team, analytics, and up to 5 WhatsApp numbers.' },
]

/* ─── Bookings spotlight board ───────────────────────────────────────────── */
const BOARD = [
  { type: 'Demo', when: 'Tomorrow · 6:00 PM', who: 'Anjali R.' },
  { type: 'Site Visit', when: 'Wed · 11:00 AM', who: 'Rohan M.' },
  { type: 'Callback', when: 'Today · 5:30 PM', who: 'Priya S.' },
]

/* ─── Autonomy modes (compact) ───────────────────────────────────────────── */
const MODES = [
  { name: 'Watch', glyph: '◐', tagline: 'Observes silently.', desc: 'Learns your tone, tags warm leads. Sends nothing.', featured: false },
  { name: 'Approve', glyph: '✓', tagline: 'Drafts. You tap to send.', desc: 'Buddie writes it, you approve in one tap.', featured: true },
  { name: 'Auto', glyph: '✦', tagline: 'Replies & books on its own.', desc: 'Within your rules — replies, follows up, books.', featured: false },
]

/* ─── Deep dives (real app screenshots, brand-green styling) ─────────────── */
type DeepDive = {
  id: string
  label: string
  title: string
  description: string
  screenshot: string
  bullets: string[]
  reverse?: boolean
}

const DEEP_DIVES: DeepDive[] = [
  {
    id: 'inbox',
    label: 'Unified WhatsApp inbox',
    title: 'Every WhatsApp lead in one shared workspace.',
    description:
      'Buddie and your team work from the same inbox — official WhatsApp Business API, with Instagram and website chat flowing in too. Filter by assigned, unassigned, or my chats, and search the whole history in a tap.',
    screenshot: '/images/product-inbox.png',
    bullets: [
      'Official Meta WhatsApp Business API — not QR scraping',
      'Assigned / Unassigned / My-chats filters',
      'Conversation search + full message history',
      'Quick replies + template messages in-chat',
      'Desktop split-view + mobile-optimised',
      'Real-time sync with instant notifications',
    ],
  },
  {
    id: 'ai',
    label: 'Replies & follow-ups',
    title: 'Replies that sound like you — and follow-ups that never stop.',
    description:
      'Buddie reads the chat, pulls the customer’s history, drafts a reply in your tone, attaches the right brochure, qualifies the lead, and keeps following up until they reply or book. You choose how much to hand over.',
    screenshot: '/images/product-ai.png',
    reverse: true,
    bullets: [
      'Watch, Approve, or Auto — your autonomy, per business',
      'Context from the full conversation + customer history',
      'Auto-attaches the right asset (PDF, brochure, video)',
      'Detects intent: enquiry, ready-to-buy, complaint, AMC',
      'Automatic follow-ups until a reply or booking',
      'Every action logged — fully transparent',
    ],
  },
  {
    id: 'pipeline',
    label: 'Pipeline + Bookings',
    title: 'A pipeline and Bookings board that match how leads move.',
    description:
      'Custom stages, tags, budget and source — captured straight from the chat. Every booked callback, demo, site visit and appointment lands on the Bookings board on the right day, visible to the whole team.',
    screenshot: '/images/product-leads.png',
    bullets: [
      'Visual Kanban + list view, drag-and-drop stages',
      'Custom stages, priorities and tags per workspace',
      'Budget and source captured from the chat',
      'Bookings board — callbacks, demos, visits, appointments',
      'Follow-up calendar with reminders',
      'Activity timeline visible to the whole team',
    ],
  },
  {
    id: 'ops',
    label: 'Campaigns, analytics & team',
    title: 'Campaigns, analytics and your team — all in one place.',
    description:
      'Scheduled WhatsApp campaigns with retry-on-fail, response-time and conversion dashboards, source-based routing, and roles for the whole team across up to 5 WhatsApp numbers.',
    screenshot: '/images/product-campaigns.png',
    reverse: true,
    bullets: [
      'Scheduled campaigns + auto-retry on failed sends',
      'Recipient management with segmentation',
      'Response-time + conversion-rate dashboards',
      'Auto-assign leads by source (web, Instagram, Facebook)',
      'Role-based access — owner / admin / agent',
      'Up to 5 WhatsApp numbers on one workspace',
    ],
  },
]

const PACK_HIGHLIGHTS = [
  'AI sales agent for AMC renewals & callbacks',
  'Customer drawer with installed product + AMC history',
  'Renewals sorted by urgency — this week / next 14 / lapsed',
  'Service-visit booking straight from WhatsApp',
]

export default function ProductPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 78% 20%, rgba(37,211,102,0.12), transparent 55%), radial-gradient(circle at 12% 80%, rgba(37,211,102,0.06), transparent 60%)',
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-28 text-center sm:px-6 md:pt-32 lg:px-8">
          <div className="flex justify-center">
            <Pill dot dotColor={P.brand} className="border text-brand" style={{ background: P.chip, borderColor: P.chipBorder }}>
              The product
            </Pill>
          </div>

          <h1 className="mt-5 font-heading text-[2.5rem] font-bold leading-[1.04] tracking-[-0.035em] text-text-primary text-balance sm:text-5xl lg:text-[3.5rem]">
            Everything Buddie does for your <span className="text-brand">WhatsApp leads</span>.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            One AI sales employee that replies to every enquiry, follows up automatically, filters the
            serious customers, and books them for calls, demos and visits — all on the official WhatsApp
            Business API.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="https://app.leadbuddie.com" variant="primary" size="lg" className="w-full sm:w-auto">
              Start free 30-day trial <span className="ml-1">→</span>
            </Button>
            <Button href="/demo" variant="outline" size="lg" className="w-full sm:w-auto">
              <span className="mr-1.5 text-brand">▶</span> Watch Buddie book a lead
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8 sm:gap-8">
            <Stat value="5,000+" label="Leads handled" />
            <Stat value="100+" label="Leads / day · Master" />
            <Stat value="30-day" label="Free trial · no card" />
          </div>
        </div>
      </section>

      {/* ============ COMPLIANCE STRIP ============ */}
      <MetaTechProviderBadge />

      {/* ============ CAPABILITY GRID ============ */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">What’s inside</div>
            <h2 className="mt-3 font-heading text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-4xl">
              One employee. Eight jobs, done every day.
            </h2>
            <p className="mt-3.5 text-[0.97rem] leading-relaxed text-text-secondary">
              No bots to wire up, no CRM to babysit. Buddie handles the whole WhatsApp lead journey —
              from first reply to booked customer.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map(({ icon: Icon, title, caption }) => (
              <div
                key={title}
                className="flex flex-col rounded-[20px] border border-border bg-bg-card p-5 transition-shadow hover:shadow-[0_18px_44px_-22px_rgba(20,20,40,0.22)]"
              >
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: P.chip, color: P.brandHover, border: `1px solid ${P.chipBorder}` }}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <h3 className="mt-4 text-base font-bold tracking-tight text-text-primary">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BOOKINGS SPOTLIGHT ============ */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div
            className="relative overflow-hidden rounded-[28px] border border-border-light bg-bg-card p-6 sm:p-10"
            style={{ boxShadow: `0 30px 70px -34px ${P.glow}` }}
          >
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">The part other tools don’t have</div>
                <h2 className="mt-3 font-heading text-[1.9rem] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-[2.4rem]">
                  Serious leads don’t just get replies. They get booked.
                </h2>
                <p className="mt-4 max-w-lg text-[0.97rem] leading-relaxed text-text-secondary">
                  Most WhatsApp tools stop at a reply. Buddie offers times, confirms the slot, and drops
                  the booking on your board — callbacks, demos, site visits, appointments, consultations,
                  trials, and AMC/service visits. You just see ready customers.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Callback', 'Demo', 'Site Visit', 'Appointment', 'Consultation', 'Trial', 'Service Visit'].map((t) => (
                    <span
                      key={t}
                      className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
                      style={{ background: P.chip, color: P.brandHover, border: `1px solid ${P.chipBorder}` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mock Bookings board */}
              <div className="rounded-[22px] border border-border bg-bg-secondary/50 p-5 sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-sm text-white" style={{ background: P.brandGrad }}>
                      📅
                    </span>
                    <span className="text-sm font-bold tracking-tight text-text-primary">Bookings board</span>
                  </div>
                  <Pill dot dotColor={P.success} style={{ background: P.successSoft, color: P.success, fontSize: 10.5, padding: '3px 9px' }}>
                    live
                  </Pill>
                </div>
                <div className="flex flex-col gap-3">
                  {BOARD.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-2xl border border-border bg-bg-card p-3.5 shadow-sm">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base" style={{ background: P.successSoft, color: P.success }}>
                        ✓
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-bold tracking-tight text-text-primary">{b.type}</div>
                        <div className="text-xs text-text-muted">{b.when} · {b.who}</div>
                      </div>
                      <Pill style={{ background: P.successSoft, color: P.success, fontSize: 10.5, padding: '3px 9px' }}>Booked</Pill>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRODUCT AWARENESS AGENT ============ */}
      <ProductAwareness />

      {/* ============ DEEP DIVES ============ */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-24 md:space-y-32">
          {DEEP_DIVES.map((dive, i) => (
            <DeepDiveBlock key={dive.id} dive={dive} index={i} />
          ))}
        </div>
      </section>

      {/* ============ AUTONOMY MODES (compact) ============ */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">Trust at your pace</div>
            <h2 className="mt-3 font-heading text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-4xl">
              You decide how much Buddie runs.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {MODES.map((m) => (
              <div
                key={m.name}
                className="rounded-[22px] border bg-bg-card p-6"
                style={m.featured ? { borderColor: 'var(--color-border-light)', boxShadow: `0 24px 60px -24px ${P.glow}` } : { borderColor: 'var(--color-border)' }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-xl font-extrabold"
                    style={m.featured ? { background: P.brandGrad, color: '#fff' } : { background: 'var(--color-sunk)', color: P.brand }}
                  >
                    {m.glyph}
                  </span>
                  <div>
                    <div className="text-lg font-bold tracking-tight text-text-primary">{m.name}</div>
                    {m.featured && <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-brand">Recommended</div>}
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold text-text-primary">{m.tagline}</p>
                <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-text-secondary">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WATER PURIFIER PACK ============ */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-bg-card p-7 md:p-12">
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
              <div>
                <Pill dot dotColor={P.brand} className="border text-brand" style={{ background: P.chip, borderColor: P.chipBorder }}>
                  Industry pack · Live
                </Pill>
                <h2 className="mt-4 font-heading text-[1.8rem] font-bold leading-[1.08] tracking-[-0.03em] text-text-primary md:text-[2.3rem]">
                  Built deep for water purifier dealers.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
                  On top of everything above, the Water Purifier Pack adds the workflows generic CRMs never
                  built — AMC renewals, callback discipline, service-visit booking, and a customer drawer
                  that travels with the installed product.
                </p>
                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {PACK_HIGHLIGHTS.map((label) => (
                    <li key={label} className="flex items-start gap-2.5 rounded-xl border border-border bg-bg-elevated p-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[11px] font-extrabold" style={{ background: P.successSoft, color: P.success }}>
                        ✓
                      </span>
                      <span className="text-xs font-semibold leading-relaxed text-text-secondary">{label}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/case-study" variant="primary" size="md">Read the case study</Button>
                  <Button href="/demo" variant="outline" size="md">Book dealer demo</Button>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative h-72 w-full max-w-[420px] overflow-hidden rounded-[22px] border border-border shadow-lg sm:h-80 md:h-[350px]">
                  <Image
                    src="/images/is-leadbuddie-right-for-you.png"
                    alt="Indian water purifier dealer tracking AMC renewals and service visits on LeadBuddie"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-brand/95 px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
                    Verified Indian Dealer
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold">Master Water Purifier · Coimbatore</p>
                    <p className="mt-0.5 text-[10px] text-white/80">100+ daily WhatsApp service leads & AMC campaigns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST / COMPLIANCE ============ */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">Trust & compliance</div>
            <h2 className="mt-3 font-heading text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-4xl">
              On the rails WhatsApp actually trusts.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: 'Official Meta tech provider', caption: 'WhatsApp Business API messaging — approved, audited, on official rails. No QR scraping.' },
              { icon: BadgeCheck, title: 'Your number, your history', caption: 'Works on your existing WhatsApp number. Old chats aren’t imported — every new lead is captured.' },
              { icon: Check, title: 'DPDP-ready data handling', caption: 'Workspace-isolated storage, role-based access, and data deletion on request.' },
            ].map(({ icon: Icon, title, caption }) => (
              <div key={title} className="flex flex-col gap-3 rounded-[20px] border border-border bg-bg-card p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: P.chip, color: P.brandHover, border: `1px solid ${P.chipBorder}` }}>
                  <Icon className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <h3 className="text-base font-bold tracking-tight text-text-primary">{title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <FinalCTA />
    </>
  )
}

/* ─── Sub-components ──────────────────────────────────────────────────────── */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-heading text-2xl font-extrabold tracking-[-0.02em] text-text-primary md:text-3xl">{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-text-muted">{label}</div>
    </div>
  )
}

function DeepDiveBlock({ dive, index }: { dive: DeepDive; index: number }) {
  return (
    <div id={dive.id} className="grid scroll-mt-24 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
      {/* Text column */}
      <div className={`order-2 lg:col-span-5 ${dive.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <div
          className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]"
          style={{ background: P.chip, borderColor: P.chipBorder, color: P.brandHover }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: P.brand }} />
          0{index + 1} · {dive.label}
        </div>

        <h2 className="font-heading text-2xl font-bold leading-tight tracking-[-0.02em] text-text-primary md:text-[2rem]">
          {dive.title}
        </h2>

        <p className="mt-4 text-base leading-relaxed text-text-secondary">{dive.description}</p>

        <ul className="mt-7 space-y-3">
          {dive.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md text-[11px] font-extrabold" style={{ background: P.successSoft, color: P.success }}>
                ✓
              </span>
              <span className="text-sm leading-relaxed text-text-secondary md:text-[15px]">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Screenshot column */}
      <div className={`order-1 lg:col-span-7 ${dive.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 rounded-[36px] opacity-60 blur-3xl"
            style={{ background: `radial-gradient(circle at 50% 50%, ${P.glow}, transparent 70%)` }}
          />
          <div className="relative">
            <ScreenshotFrame src={dive.screenshot} alt={dive.title} status="connected" aspect="3/2" fit="cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
