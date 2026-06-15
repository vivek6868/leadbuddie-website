import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  Quote,
  X,
  CheckCircle2,
  Link2,
  Users,
  Clock,
  Droplets,
  ArrowRight,
} from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { TESTIMONIALS } from '@/lib/constants'
import { FinalCTA } from '@/components/sections/FinalCTA'

const waterPurifier = TESTIMONIALS[0]

const BEFORE_ITEMS = [
  'Searching through phones to find which chat went where',
  'Missed follow-ups ➔ callbacks promised, never made',
  'Team confusion over who already replied to whom',
  'Customers slipping through the cracks at peak hours',
]

const AFTER_ITEMS = [
  'Every lead lands in one shared inbox',
  'Follow-ups scheduled on the right day, every time',
  'Clear ownership ➔ the team always knows who is next',
  'Replies are faster, conversions are calmer',
]

const ROLLOUT_STEPS = [
  {
    icon: Link2,
    title: 'Connected WhatsApp',
    body: 'Master Water Purifier connected their existing WhatsApp Business number to LeadBuddie in minutes — no new SIM, no number change for customers.',
  },
  {
    icon: Users,
    title: 'Team switched to a shared inbox',
    body: 'Everyone — owner, sales, technicians — works from one workspace. Chats are assigned, notes are visible, nothing lives in one founder\'s phone.',
  },
  {
    icon: Clock,
    title: 'Follow-ups stopped slipping',
    body: 'Callback discipline + AMC renewal reminders mean no promised conversation gets forgotten. The team runs 5 minutes a day on the renewals page instead of two-hour fire drills.',
  },
]

export const metadata: Metadata = {
  title: 'Case Study: Master Water Purifier | LeadBuddie',
  description:
    'How Master Water Purifier handles more than 100 WhatsApp leads per day with LeadBuddie — easier responses, faster follow-ups, one shared inbox.',
  alternates: { canonical: '/case-study' },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Case Study: Master Water Purifier',
  description:
    'How Master Water Purifier handles more than 100 WhatsApp leads per day with LeadBuddie — easier responses, faster follow-ups, one shared inbox.',
  url: 'https://leadbuddie.com/case-study',
  datePublished: '2026-02-28',
  dateModified: '2026-05-16',
  author: { '@type': 'Organization', name: 'LeadBuddie', url: 'https://leadbuddie.com' },
  publisher: {
    '@type': 'Organization',
    name: 'LeadBuddie',
    url: 'https://leadbuddie.com',
    logo: { '@type': 'ImageObject', url: 'https://leadbuddie.com/images/logo.png' },
  },
}

export default function CaseStudyPage() {
  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: 'Case Study', href: '/blog?category=Case%20Study' },
    { label: 'Master Water Purifier' },
  ]

  return (
    <>
      <JsonLd data={ARTICLE_SCHEMA} />
      {/* ============ HERO ============ */}
      <header className="relative overflow-hidden bg-bg-primary px-4 pt-28 pb-12 sm:px-6 lg:px-8 md:pt-36 md:pb-16 border-b border-border">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-brand/5 blur-3xl delay-500" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          <Breadcrumb items={breadcrumbItems} />

          <Link
            href="/"
            className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to home
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/35 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-hover">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              Case study · Water solutions
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-text-secondary">
              <Droplets className="h-3.5 w-3.5 text-brand" />
              London, UK
            </span>
          </div>

          <h1 className="mt-5 font-heading text-3xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-5xl">
            Master Water Purifier: managing <span className="bg-gradient-to-r from-brand-hover to-brand bg-clip-text text-transparent">more than 100 leads a day</span> without dropping renewals.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
            How a service business stopped drowning in WhatsApp enquiries and built a calmer sales workflow on top of their existing number.
          </p>

          {/* Metric strip */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <MetricCard
              value={waterPurifier.metrics.primary}
              label={waterPurifier.metrics.primaryLabel}
              tone="teal"
            />
            <MetricCard
              value={waterPurifier.metrics.secondary}
              label={waterPurifier.metrics.secondaryLabel}
              tone="violet"
            />
            <MetricCard value="1" label="shared inbox for the team" tone="cyan" />
          </div>
        </div>
      </header>

      {/* ============ BEFORE / AFTER ============ */}
      <Section className="bg-bg-primary">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center" data-reveal>
            <span className="inline-flex items-center rounded-full border border-border bg-bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-secondary">
              The shift
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold leading-tight text-text-primary md:text-4xl">
              Before and after LeadBuddie.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-secondary md:text-lg">
              Same WhatsApp number. Same team. Different week.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Before */}
            <div
              data-reveal
              style={{ ['--reveal-delay' as any]: '0.05s' }}
              className="rounded-3xl border border-red-200 bg-red-50/50 p-6 md:p-8"
            >
              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-text-primary">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-red-200 bg-red-100/50 text-red-600">
                  <X className="h-4 w-4" strokeWidth={2.4} />
                </span>
                Before LeadBuddie
              </h3>
              <ul className="space-y-3.5">
                {BEFORE_ITEMS.map((item, i) => (
                  <li
                    key={item}
                    data-reveal
                    style={{ ['--reveal-delay' as any]: `${0.1 + i * 0.06}s` }}
                    className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary md:text-[15px]"
                  >
                    <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" strokeWidth={2.4} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div
              data-reveal
              style={{ ['--reveal-delay' as any]: '0.1s' }}
              className="rounded-3xl border border-brand/30 bg-brand/5 p-6 md:p-8"
            >
              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-text-primary">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-brand/35 bg-brand/10 text-brand">
                  <CheckCircle2 className="h-4 w-4" strokeWidth={2.2} />
                </span>
                After LeadBuddie
              </h3>
              <ul className="space-y-3.5">
                {AFTER_ITEMS.map((item, i) => (
                  <li
                    key={item}
                    data-reveal
                    style={{ ['--reveal-delay' as any]: `${0.15 + i * 0.06}s` }}
                    className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary md:text-[15px]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" strokeWidth={2.2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ============ HOW IT WORKED ============ */}
      <Section className="bg-bg-primary border-t border-border">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center" data-reveal>
            <span className="inline-flex items-center rounded-full border border-border bg-bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-secondary">
              Rollout
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold leading-tight text-text-primary md:text-4xl font-heading">
              How it worked for them.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-secondary md:text-lg">
              Three weeks. No new tools to learn. The team kept working from WhatsApp — we just gave them the rails underneath.
            </p>
          </div>

          <ol className="relative space-y-4">
            {ROLLOUT_STEPS.map(({ icon: Icon, title, body }, i) => {
              const isLast = i === ROLLOUT_STEPS.length - 1
              return (
                <li
                  key={title}
                  data-reveal
                  style={{ ['--reveal-delay' as any]: `${i * 0.1}s` }}
                  className="relative pl-16"
                >
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[26px] top-14 bottom-[-1rem] w-px bg-gradient-to-b from-border via-border/50 to-transparent"
                    />
                  )}
                  <div className="absolute left-0 top-1 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/35 bg-brand/10 text-brand ring-4 ring-bg-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div className="rounded-2xl border border-border bg-bg-card p-5 transition-colors hover:border-brand/40 md:p-6 shadow-sm">
                    <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-text-muted">
                      Step {i + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary font-heading">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary md:text-[15px]">
                      {body}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </Section>

      {/* ============ PRODUCT SHOT ============ */}
      <Section className="bg-bg-secondary border-t border-border">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            data-reveal
            className="font-heading text-2xl font-bold leading-tight text-text-primary md:text-4xl"
          >
            One inbox. One team. One source of truth.
          </h2>
          <p
            data-reveal
            style={{ ['--reveal-delay' as any]: '0.1s' }}
            className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
          >
            The shared WhatsApp inbox and lead pipeline Master Water Purifier opens every morning.
          </p>

          <div
            data-reveal
            style={{ ['--reveal-delay' as any]: '0.15s' }}
            className="relative mt-12"
          >
            <div className="pointer-events-none absolute -inset-8 rounded-[36px] bg-gradient-to-br from-brand/10 via-brand/5 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-card shadow-sm">
              <div className="relative aspect-[16/10] w-full bg-bg-elevated">
                <Image
                  src="/images/product-inbox.png"
                  alt="LeadBuddie dashboard — shared WhatsApp inbox + lead pipeline"
                  fill
                  className="object-contain p-4"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ============ PULL QUOTE ============ */}
      <Section className="bg-bg-primary">
        <div className="mx-auto max-w-3xl">
          <div
            data-reveal
            className="relative overflow-hidden rounded-[32px] border border-brand/20 bg-brand/5 p-8 md:p-12 shadow-sm"
          >
            <Quote
              className="absolute right-8 top-8 h-14 w-14 text-brand/10"
              strokeWidth={1.4}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="mb-5 flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className="text-amber-400"
                    aria-hidden="true"
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="font-heading text-xl font-medium leading-snug text-text-primary md:text-3xl italic">
                &ldquo;{waterPurifier.quote}&rdquo;
              </p>
              <footer className="mt-7 flex items-center gap-3 text-sm">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/35 bg-brand/10 text-sm font-bold text-brand">
                  M
                </div>
                <div>
                  <p className="font-semibold text-text-primary">{waterPurifier.author}</p>
                  <p className="text-text-muted">Water Solutions Provider · London, UK</p>
                </div>
              </footer>
            </div>
          </div>

          {/* Mid CTA */}
          <div className="mt-12 text-center" data-reveal>
            <p className="text-base text-text-secondary md:text-lg">
              Want the same workflow for your business?
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Button href="/demo" variant="primary" size="md">
                Book a 20-min demo
                <ArrowRight className="ml-1.5 inline h-4 w-4" />
              </Button>
              <Button href="https://app.leadbuddie.com" variant="outline" size="md">
                Start free trial
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ============ FINAL CTA ============ */}
      <FinalCTA />
    </>
  )
}

/* ---------- Sub-components ---------- */

function MetricCard({
  value,
  label,
  tone,
}: {
  value: string
  label: string
  tone: 'teal' | 'violet' | 'cyan'
}) {
  const toneClasses: Record<typeof tone, string> = {
    teal: 'border-brand/35 text-brand',
    violet: 'border-brand/35 text-brand-hover',
    cyan: 'border-brand/35 text-brand-hover',
  }
  return (
    <div
      data-reveal
      className="flex flex-col gap-1 rounded-2xl border border-border bg-bg-card p-5 shadow-sm transition-colors hover:border-brand/40"
    >
      <p className={`text-2xl font-bold md:text-3xl ${toneClasses[tone]}`}>{value}</p>
      <p className="text-sm text-text-secondary">{label}</p>
    </div>
  )
}
