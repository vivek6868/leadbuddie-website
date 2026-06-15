import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
    'Everything inside LeadBuddie — unified WhatsApp + Instagram inbox, AI replies, lead pipeline, follow-up discipline, automations, campaigns and team analytics. Built for growing businesses.',
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
    tone: 'border-brand/30 bg-brand/10 text-brand-hover',
    span: 'sm:col-span-2 lg:col-span-2',
    anchor: 'inbox',
  },
  {
    id: 'ai',
    icon: Sparkles,
    title: 'AI Sales Employee',
    caption: 'Reads, replies, qualifies, attaches the right asset.',
    tone: 'border-brand/35 bg-brand/10 text-brand-hover',
    span: 'lg:col-span-2',
    anchor: 'ai',
  },
  {
    id: 'pipeline',
    icon: Kanban,
    title: 'Lead pipeline',
    caption: 'Stages, tags, source, budget. Visual + list view.',
    tone: 'border-brand/30 bg-brand/10 text-brand-hover',
    anchor: 'pipeline',
  },
  {
    id: 'followups',
    icon: Clock,
    title: 'Follow-ups',
    caption: 'Never miss a callback — calendar + list discipline.',
    tone: 'border-brand/30 bg-brand/10 text-brand-hover',
    anchor: 'pipeline',
  },
  {
    id: 'automation',
    icon: Workflow,
    title: 'Routing',
    caption: 'Auto-assign by source. Smart handoffs.',
    tone: 'border-brand/30 bg-brand/10 text-brand-hover',
    anchor: 'ops',
  },
  {
    id: 'campaigns',
    icon: Send,
    title: 'Campaigns',
    caption: 'Scheduled sends, templates, retry-on-fail.',
    tone: 'border-brand/30 bg-brand/10 text-brand-hover',
    anchor: 'ops',
  },
  {
    id: 'analytics',
    icon: BarChart,
    title: 'Analytics',
    caption: 'Response time, conversion, team performance.',
    tone: 'border-brand/30 bg-brand/10 text-brand-hover',
    anchor: 'ops',
  },
  {
    id: 'team',
    icon: Users,
    title: 'Team',
    caption: 'Roles, assignments, shared inbox.',
    tone: 'border-brand/30 bg-brand/10 text-brand-hover',
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
    screenshot: '/images/product-inbox.png',
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
    screenshot: '/images/product-automation.png',
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
    screenshot: '/images/product-leads.png',
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
    screenshot: '/images/product-campaigns.png',
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
      <section className="relative overflow-hidden bg-bg-primary pt-28 pb-16 px-4 sm:px-6 lg:px-8 md:pt-36 md:pb-24 border-b border-border">
        {/* Backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-brand/5 blur-3xl delay-500" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Product
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-6xl font-heading">
            Everything LeadBuddie does, <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-brand-hover to-brand bg-clip-text text-transparent">under one roof.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            A unified inbox for WhatsApp, Instagram and your website. An AI Sales Employee that replies, qualifies and follows up.
            A pipeline that surfaces every callback on the right day. Built for growing businesses.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href="https://app.leadbuddie.com" variant="primary" size="lg" className="w-full sm:w-auto">
              Start free trial
            </Button>
            <Button href="/demo" variant="outline" size="lg" className="w-full sm:w-auto">
              Book a 20-min demo
            </Button>
          </div>

          {/* Quick stats strip */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8 sm:gap-8">
            <Stat value="5,000+" label="Leads managed" />
            <Stat value="100+" label="Leads / day (Master)" />
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
          className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-brand/5 via-bg-card to-teal-500/5 p-8 md:p-12 shadow-xl shadow-black/5"
        >
          {/* Subtle backdrop image effect on the left for water texture */}
          <div className="absolute left-0 top-0 bottom-0 w-full md:w-1/2 opacity-[0.03] pointer-events-none bg-cover bg-center hidden md:block" style={{ backgroundImage: "url('/images/is-leadbuddie-right-for-you.png')" }} />
          
          <div className="relative grid items-center gap-8 lg:gap-12 md:grid-cols-[1.3fr,1fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-hover">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                Industry pack · Live
              </div>
              
              <h2 className="text-2xl font-extrabold leading-tight text-text-primary md:text-4xl tracking-tight">
                Built deep for water purifier dealers — on top of everything above.
              </h2>
              
              <p className="text-sm md:text-base leading-relaxed text-text-secondary">
                On top of the eight core modules, the Water Purifier Pack adds the workflows generic CRMs never built — AMC renewals, callback discipline, service-visit booking, and a customer drawer that travels with the installed product.
              </p>

              {/* Highlights 2-column checklist inside the left column */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {PACK_HIGHLIGHTS.map(({ icon: Icon, label }, i) => (
                  <li
                    key={label}
                    data-reveal
                    style={{ ['--reveal-delay' as any]: `${0.1 + i * 0.08}s` }}
                    className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-bg-card/75 p-3 shadow-sm"
                  >
                    <div className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-brand/20 bg-brand/10 text-brand-hover">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-semibold leading-relaxed text-text-secondary">{label}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/case-study" variant="primary" size="md">
                  Read the case study
                </Button>
                <Button href="/demo" variant="outline" size="md">
                  Book dealer demo
                </Button>
              </div>
            </div>

            {/* Premium Indian Water Business Manager Backdrop Image Frame */}
            <div className="flex items-center justify-center">
              <div className="relative h-72 sm:h-80 md:h-[350px] w-full max-w-[420px] rounded-3xl overflow-hidden border border-border/70 shadow-lg bg-white group">
                <Image
                  src="/images/is-leadbuddie-right-for-you.png"
                  alt="Indian water purification business manager tracking AMC renewals on LeadBuddie"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                {/* Dark gradient overlay for readable text at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Live dealer tag */}
                <div className="absolute top-4 left-4 bg-brand/95 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20 shadow-md">
                  Verified Indian Dealer
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-bold">Master Water Purifier</p>
                  <p className="text-[10px] text-white/80 mt-0.5">Managing 100+ daily WhatsApp service leads & AMC campaigns</p>
                </div>
              </div>
            </div>
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
              className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-bg-card/85 p-6 shadow-sm"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
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
      <div className="text-2xl font-bold text-text-primary md:text-3xl">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.14em] text-text-muted md:text-[11px]">{label}</div>
    </div>
  )
}

function DeepDiveBlock({ dive, index }: { dive: DeepDive; index: number }) {
  const accentClasses: Record<string, { dot: string; pill: string; bullet: string }> = {
    teal: {
      dot: 'bg-brand',
      pill: 'border-brand/30 bg-brand/10 text-brand-hover',
      bullet: 'text-brand',
    },
    violet: {
      dot: 'bg-brand-hover',
      pill: 'border-brand/30 bg-brand/10 text-brand-hover',
      bullet: 'text-brand',
    },
    cyan: {
      dot: 'bg-brand',
      pill: 'border-brand/30 bg-brand/10 text-brand-hover',
      bullet: 'text-brand',
    },
    emerald: {
      dot: 'bg-brand-hover',
      pill: 'border-brand/30 bg-brand/10 text-brand-hover',
      bullet: 'text-brand',
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
