import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { Check, ArrowRight, type LucideIcon } from 'lucide-react'

export interface NicheLandingProps {
  eyebrow: string
  h1: string
  intro: string
  trustPoints: string[]
  problem: {
    heading: string
    body: string[]
    stat: { value: string; label: string }
  }
  featuresHeading: string
  features: { icon: LucideIcon; title: string; desc: string }[]
  stepsHeading: string
  steps: { title: string; desc: string }[]
  faq: { question: string; answer: string }[]
  related: { label: string; href: string }[]
  ctaHeading: string
  ctaSub: string
}

export function NicheLanding({
  eyebrow,
  h1,
  intro,
  trustPoints,
  problem,
  featuresHeading,
  features,
  stepsHeading,
  steps,
  faq,
  related,
  ctaHeading,
  ctaSub,
}: NicheLandingProps) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-36 lg:px-8 bg-bg-primary">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(37,211,102,0.05),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg-primary" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-hover">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            {eyebrow}
          </span>
          <h1 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-text-primary sm:text-4xl md:text-5xl font-heading">
            {h1}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            {intro}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href="https://app.leadbuddie.com" variant="primary" size="lg" className="w-full sm:w-auto">
              Start Free Trial
            </Button>
            <Button href="/demo" variant="outline" size="lg" className="w-full sm:w-auto">
              Book a Demo
            </Button>
          </div>

          <ul className="mx-auto mt-9 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {trustPoints.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-text-secondary">
                <Check className="h-4 w-4 flex-shrink-0 text-brand" strokeWidth={2.4} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Problem ---------- */}
      <section className="relative px-4 py-16 sm:px-6 md:py-24 lg:px-8 bg-bg-primary border-t border-border">
        <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-3xl border border-border bg-bg-card p-8 shadow-sm md:grid-cols-[1.4fr_1fr] md:p-12">
          <div data-reveal>
            <h2 className="text-2xl font-bold leading-snug text-text-primary md:text-3xl font-heading">{problem.heading}</h2>
            {problem.body.map((p, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-text-secondary">
                {p}
              </p>
            ))}
          </div>
          <div data-reveal className="flex flex-col items-center justify-center rounded-2xl border border-red-200 bg-red-50/50 p-8 text-center shadow-inner">
            <p className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl font-mono">
              {problem.stat.value}
            </p>
            <p className="mt-2 text-sm text-red-600 font-medium">{problem.stat.label}</p>
          </div>
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section className="relative px-4 py-16 sm:px-6 md:py-24 lg:px-8 bg-bg-secondary border-t border-border">
        <div className="mx-auto max-w-6xl">
          <h2 data-reveal className="mx-auto mb-12 max-w-2xl text-center text-2xl font-bold leading-snug text-text-primary md:text-4xl font-heading">
            {featuresHeading}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                data-reveal
                style={{ ['--reveal-delay' as string]: `${i * 0.07}s` } as React.CSSProperties}
                className="group rounded-3xl border border-border bg-bg-card p-6 shadow-sm hover:border-brand/40 hover:shadow-md transition-all"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/35 bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <h3 className="text-lg font-semibold text-text-primary font-heading">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="relative px-4 py-16 sm:px-6 md:py-24 lg:px-8 bg-bg-primary border-t border-border">
        <div className="mx-auto max-w-4xl">
          <h2 data-reveal className="mb-12 text-center text-2xl font-bold leading-snug text-text-primary md:text-4xl font-heading">
            {stepsHeading}
          </h2>
          <ol className="space-y-4">
            {steps.map((s, i) => (
              <li
                key={s.title}
                data-reveal
                style={{ ['--reveal-delay' as string]: `${i * 0.06}s` } as React.CSSProperties}
                className="flex gap-5 rounded-2xl border border-border bg-bg-card p-5 shadow-sm md:p-6"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 text-base font-bold text-brand">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-text-primary md:text-lg font-heading">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Proof ---------- */}
      <section className="relative px-4 py-10 sm:px-6 lg:px-8 bg-bg-primary border-t border-border">
        <div className="mx-auto max-w-3xl rounded-3xl border border-brand/30 bg-brand/5 p-6 text-center md:p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-hover font-mono">In production with</p>
          <p className="mt-2 text-xl font-bold text-text-primary font-heading">Master Water Purifier</p>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-text-secondary">
            Runs LeadBuddie every day for more than 100 leads — real renewals, service visits, and callbacks, not a demo dataset.{' '}
            <Link href="/case-study" className="font-semibold text-brand hover:underline">
              Read the story →
            </Link>
          </p>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="relative px-4 py-16 sm:px-6 md:py-24 lg:px-8 bg-bg-primary border-t border-border">
        <div className="mx-auto max-w-3xl">
          <h2 data-reveal className="mb-10 text-center text-2xl font-bold leading-snug text-text-primary md:text-4xl font-heading">
            Frequently asked questions
          </h2>
          <FAQAccordion items={faq} />
        </div>
      </section>

      {/* ---------- Related ---------- */}
      {related.length > 0 && (
        <section className="relative px-4 pb-8 sm:px-6 lg:px-8 bg-bg-primary">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-text-secondary font-medium">Explore more:</span>
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-bg-card px-4 py-2 text-sm font-medium text-text-secondary hover:border-brand hover:text-text-primary shadow-sm transition-all"
              >
                {r.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ---------- Final CTA ---------- */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8 bg-bg-secondary border-t border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(37,211,102,0.05),transparent_60%)]" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-[1.1] text-text-primary md:text-5xl font-heading">{ctaHeading}</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">{ctaSub}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href="https://app.leadbuddie.com" variant="primary" size="lg" className="w-full sm:w-auto">
              Start Free Trial
            </Button>
            <Button href="/demo" variant="outline" size="lg" className="w-full sm:w-auto">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
