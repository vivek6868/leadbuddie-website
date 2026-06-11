import type { Metadata } from 'next'
import Link from 'next/link'
import {
  MessageSquare,
  Kanban,
  Clock,
  Sparkles,
  Zap,
  Send,
  BarChart,
  Users,
  Instagram,
  ShieldCheck,
  Workflow,
  ArrowRight,
  Check,
  FileText,
  Target,
  CalendarClock,
  type LucideIcon,
} from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'
import { Button } from '@/components/ui/Button'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { MetaTechProviderBadge } from '@/components/sections/MetaTechProviderBadge'

export const metadata: Metadata = {
  title: 'Product — LeadBuddie AI Sales Employee for WhatsApp & Instagram',
  description:
    'Everything inside LeadBuddie — unified WhatsApp + Instagram inbox, AI replies, lead pipeline, follow-up discipline, automations, campaigns and team analytics. Built for Indian SMBs.',
  alternates: { canonical: '/product' },
}

/* ---------- 8 module bento ---------- */

type Module = {
  id: string
  icon: LucideIcon
  title: string
  caption: string
  tone: string
  span?: string
  anchor?: string
}

const MODULES: Module[] = [
  {
    id: 'inbox',
    icon: MessageSquare,
    title: 'Unified inbox',
    caption: 'WhatsApp + Instagram + website chat in one workspace.',
    tone: 'border-teal-400/30 bg-teal-400/10 text-teal-300',
    span: 'sm:col-span-2 lg:col-span-2',
    anchor: 'inbox',
  },
  {
    id: 'ai',
    icon: Sparkles,
    title: 'AI Sales Employee',
    caption: 'Reads, replies, qualifies, attaches the right asset.',
    tone: 'border-violet-400/30 bg-violet-400/10 text-violet-300',
    span: 'lg:col-span-2',
    anchor: 'ai',
  },
  {
    id: 'pipeline',
    icon: Kanban,
    title: 'Lead pipeline',
    caption: 'Stages, tags, source, budget. Visual + list view.',
    tone: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300',
    anchor: 'pipeline',
  },
  {
    id: 'followups',
    icon: Clock,
    title: 'Follow-ups',
    caption: 'Never miss a callback — calendar + list discipline.',
    tone: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
    anchor: 'pipeline',
  },
  {
    id: 'automation',
    icon: Workflow,
    title: 'Routing',
    caption: 'Auto-assign by source. Smart handoffs.',
    tone: 'border-indigo-400/30 bg-indigo-400/10 text-indigo-300',
    anchor: 'ops',
  },
  {
    id: 'campaigns',
    icon: Send,
    title: 'Campaigns',
    caption: 'Scheduled sends, templates, retry-on-fail.',
    tone: 'border-rose-400/30 bg-rose-400/10 text-rose-300',
    anchor: 'ops',
  },
  {
    id: 'analytics',
    icon: BarChart,
    title: 'Analytics',
    caption: 'Response time, conversion, team performance.',
    tone: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
    anchor: 'ops',
  },
  {
    id: 'team',
    icon: Users,
    title: 'Team',
    caption: 'Roles, assignments, shared inbox.',
    tone: 'border-sky-400/30 bg-sky-400/10 text-sky-300',
    anchor: 'ops',
  },
]

/* ---------- Deep dives ---------- */

type DeepDive = {
  id: string
  label: string
  title: string
  description: string
  screenshot: string
  bullets: string[]
  reverse?: boolean
  status?: 'connected'
  accent: string
}

const DEEP_DIVES: DeepDive[] = [
  {
    id: 'inbox',
    label: 'Unified Inbox',
    title: 'One inbox for WhatsApp, Instagram and your website.',
    description:
      'Bring every conversation into one workspace — the AI Sales Employee and your team work from the same place. Filter by assigned, unassigned, or my chats. Search the entire history in a tap.',
    screenshot: '/graphics/features/whatsapp-team-inbox.svg',
    status: 'connected',
    accent: 'teal',
    bullets: [
      'Official Meta WhatsApp Business API + Instagram DMs',
      'Desktop split-view + mobile-optimised',
      'Real-time sync with instant notifications',
      'Assigned / Unassigned / My-chats filters',
      'Conversation search + message history',
      'Quick replies + template messages in-chat',
    ],
  },
  {
    id: 'ai',
    label: 'AI Co-pilot',
    title: 'The AI that drafts, sends, or steps back — your call.',
    description:
      'Reads the conversation, pulls the customer\'s history, drafts a reply in your tone, attaches the right brochure, and qualifies the lead the moment it lands. You set the autonomy level per capability.',
    screenshot: '/graphics/features/ai-insights-smart-replies.svg',
    reverse: true,
    accent: 'violet',
    bullets: [
      'Approve every reply, or auto-send routine ones',
      'Context from full conversation + customer history',
      'Auto-attaches the right asset (PDF, brochure, video)',
      'Detects intent: enquiry, ready-to-buy, complaint, AMC renewal',
      'Tone learned from your business description',
      'Every action logged — fully transparent',
    ],
  },
  {
    id: 'pipeline',
    label: 'Pipeline + Follow-ups',
    title: 'A pipeline that matches how leads actually move.',
    description:
      'Custom stages, tags, budget, source, and a callback discipline page that surfaces every promised follow-up on the right day. The owner sees the whole pipeline at a glance — and so does the team.',
    screenshot: '/graphics/features/pipeline.png',
    accent: 'cyan',
    bullets: [
      'Visual Kanban + list view, drag-and-drop stages',
      'Custom stages, priorities, and tags per workspace',
      'Tags, budget and source captured straight from the chat',
      'Smart follow-up scheduling with calendar + list views',
      'AI-powered + automated follow-ups (Growth+)',
      'Activity timeline visible to the whole team',
    ],
  },
  {
    id: 'ops',
    label: 'Operations',
    title: 'Routing, campaigns and analytics — all in one place.',
    description:
      'Source-based auto-assignment, scheduled WhatsApp campaigns with retry-on-fail, conversion-rate and response-time dashboards. The operational layer most CRMs leave to spreadsheets.',
    screenshot: '/graphics/features/analytics-team-performance.svg',
    reverse: true,
    accent: 'emerald',
    bullets: [
      'Auto-assign leads by source (web, Instagram, Facebook)',
      'Scheduled campaigns + auto-retry on failed sends',
      'Recipient management with segmentation',
      'Response-time + conversion-rate dashboards',
      'Lead-source analytics + team performance reports',
      'Role-based team access — owner / admin / agent',
    ],
  },
]

/* ---------- 5-bullet "AMC pack" callout ---------- */

const PACK_HIGHLIGHTS = [
  { icon: Sparkles, label: 'AI sales agent for AMC renewals & callbacks' },
  { icon: FileText, label: 'Customer drawer with installed product + AMC history' },
  { icon: CalendarClock, label: 'Renewals page sorted by urgency (this week / next 14 / lapsed)' },
  { icon: Target, label: 'Service-visit booking straight from WhatsApp' },
]

export default function ProductPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-ink pt-28 pb-16 px-4 sm:px-6 lg:px-8 md:pt-36 md:pb-24">
        {/* Backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-800 to-ink-900" />
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-teal-400/15 blur-3xl animate-pulse-slow delay-500" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur-sm animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent-lime opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-lime" />
            </span>
            Product
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl animate-fade-in-up delay-300">
            Everything LeadBuddie does, <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">under one roof.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg animate-fade-in-up delay-500">
            A unified inbox for WhatsApp, Instagram and your website. An AI Sales Employee that replies, qualifies and follows up.
            A pipeline that surfaces every callback on the right day. Built for Indian SMBs.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 animate-fade-in-up delay-700">
            <Button href="https://app.leadbuddie.com" variant="lime" size="lg" className="w-full sm:w-auto">
              Start free trial
            </Button>
            <Button href="/demo" variant="outline" size="lg" className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto">
              Book a 20-min demo
            </Button>
          </div>

          {/* Quick stats strip */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 sm:gap-8" data-reveal>
            <Stat value="5,000+" label="Leads managed" />
            <Stat value="60–100" label="Leads / day at Mastec" />
            <Stat value="30-day" label="Free trial · no card" />
          </div>
        </div>
      </section>

      {/* ============ COMPLIANCE STRIP ============ */}
      <MetaTechProviderBadge />

      {/* ============ AT-A-GLANCE BENTO ============ */}
      <Section>
        <SectionHeader
          label="At a glance"
          title="Eight modules. One workspace."
          description="Every capability inside LeadBuddie. Skim the bento, then dive into the four pillars below."
          centered
          className="mb-12 md:mb-14"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map(({ id, icon: Icon, title, caption, tone, span, anchor }, i) => (
            <Link
              key={id}
              href={anchor ? `#${anchor}` : '#'}
              data-reveal
              style={{ ['--reveal-delay' as any]: `${i * 0.05}s` }}
              className={`group relative flex h-full flex-col rounded-3xl border border-white/[0.08] bg-bg-card/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-bg-card ${span ?? ''}`}
            >
              <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${tone}`}>
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="text-base font-semibold text-text-primary">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">{caption}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-text-muted transition-colors group-hover:text-text-primary">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ============ DEEP DIVES ============ */}
      <Section background="elevated">
        <div className="space-y-24 md:space-y-32">
          {DEEP_DIVES.map((dive, i) => (
            <DeepDiveBlock key={dive.id} dive={dive} index={i} />
          ))}
        </div>
      </Section>

      {/* ============ WATER PURIFIER PACK CALLOUT ============ */}
      <Section>
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl border border-teal-400/20 bg-[linear-gradient(140deg,rgba(20,184,166,0.14),rgba(15,15,26,0.96)_55%,rgba(124,58,237,0.12))] p-8 md:p-12"
        >
          <div className="relative grid items-center gap-8 md:grid-cols-[1.2fr,1fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-300">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
                Industry pack · Live
              </div>
              <h2 className="text-2xl font-bold leading-tight text-text-primary md:text-4xl">
                Built deep for water purifier dealers — on top of everything above.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
                On top of the eight core modules, the Water Purifier Pack adds the workflows generic CRMs never built — AMC renewals, callback discipline, service-visit booking, and a customer drawer that travels with the installed product.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/case-study" variant="lime" size="md">
                  Read the Mastec story
                </Button>
                <Button href="/demo" variant="outline" size="md">
                  Book dealer demo
                </Button>
              </div>
            </div>

            <ul className="grid gap-3">
              {PACK_HIGHLIGHTS.map(({ icon: Icon, label }, i) => (
                <li
                  key={label}
                  data-reveal
                  style={{ ['--reveal-delay' as any]: `${0.1 + i * 0.08}s` }}
                  className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-bg-card/70 px-4 py-3 backdrop-blur-sm"
                >
                  <div className="mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-teal-400/30 bg-teal-400/10 text-teal-300">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <span className="text-sm leading-relaxed text-text-secondary">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ============ TRUST / COMPLIANCE ============ */}
      <Section background="elevated">
        <SectionHeader
          label="Trust & compliance"
          title="Built on the rails that messaging apps actually trust."
          description="Official Meta tech provider with DPDP-ready data handling and team-level access controls."
          centered
          className="mb-12 md:mb-14"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: 'Official Meta tech provider',
              caption: 'WhatsApp Business API messaging. Approved, audited, on official rails.',
            },
            {
              icon: Instagram,
              title: 'Instagram messaging',
              caption: 'DM lead capture + reply via the official Instagram API.',
            },
            {
              icon: Zap,
              title: 'DPDP-ready data handling',
              caption: 'Workspace-isolated storage, role-based access, data deletion on request.',
            },
          ].map(({ icon: Icon, title, caption }, i) => (
            <div
              key={title}
              data-reveal
              style={{ ['--reveal-delay' as any]: `${i * 0.08}s` }}
              className="flex flex-col gap-3 rounded-2xl border border-white/[0.08] bg-bg-card/70 p-6 backdrop-blur-sm"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="text-base font-semibold text-text-primary">{title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{caption}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ FINAL CTA ============ */}
      <FinalCTA />
    </>
  )
}

/* ---------- Sub-components ---------- */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-white md:text-3xl">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.14em] text-white/60 md:text-[11px]">{label}</div>
    </div>
  )
}

function DeepDiveBlock({ dive, index }: { dive: DeepDive; index: number }) {
  const accentClasses: Record<string, { dot: string; pill: string; bullet: string }> = {
    teal: {
      dot: 'bg-teal-400',
      pill: 'border-teal-400/30 bg-teal-400/10 text-teal-300',
      bullet: 'text-teal-300',
    },
    violet: {
      dot: 'bg-violet-400',
      pill: 'border-violet-400/30 bg-violet-400/10 text-violet-300',
      bullet: 'text-violet-300',
    },
    cyan: {
      dot: 'bg-cyan-400',
      pill: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300',
      bullet: 'text-cyan-300',
    },
    emerald: {
      dot: 'bg-emerald-400',
      pill: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
      bullet: 'text-emerald-300',
    },
  }
  const acc = accentClasses[dive.accent] ?? accentClasses.teal

  return (
    <div
      id={dive.id}
      data-reveal
      className={`grid scroll-mt-24 gap-10 lg:grid-cols-12 lg:gap-16 lg:items-center`}
    >
      {/* Text column */}
      <div className={`order-2 lg:col-span-5 ${dive.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${acc.pill}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${acc.dot}`} />
          0{index + 1} · {dive.label}
        </div>

        <h2 className="text-2xl font-bold leading-tight text-text-primary md:text-4xl">
          {dive.title}
        </h2>

        <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
          {dive.description}
        </p>

        <ul className="mt-7 space-y-3">
          {dive.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <Check className={`mt-1 h-4 w-4 flex-shrink-0 ${acc.bullet}`} strokeWidth={2.5} />
              <span className="text-sm leading-relaxed text-text-secondary md:text-[15px]">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Screenshot column */}
      <div className={`order-1 lg:col-span-7 ${dive.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative">
          <div className={`pointer-events-none absolute -inset-8 rounded-[36px] bg-gradient-to-br opacity-50 blur-3xl ${
            dive.accent === 'teal' ? 'from-teal-400/30 to-transparent' :
            dive.accent === 'violet' ? 'from-violet-400/30 to-transparent' :
            dive.accent === 'cyan' ? 'from-cyan-400/30 to-transparent' :
            'from-emerald-400/30 to-transparent'
          }`} />
          <div className="relative">
            <ScreenshotFrame
              src={dive.screenshot}
              alt={dive.title}
              status={dive.status}
              aspect="3/2"
              fit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
