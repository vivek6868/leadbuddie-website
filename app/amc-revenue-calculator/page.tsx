import type { Metadata } from 'next'
import Link from 'next/link'
import { AmcCalculator } from '@/components/tools/AmcCalculator'
import { JsonLd } from '@/components/seo/JsonLd'
import { faqSchema, breadcrumbSchema, SITE_URL } from '@/lib/seo'

const PATH = '/amc-revenue-calculator'
const TITLE = 'AMC & Contract Revenue Leak Calculator | LeadBuddie'
const DESCRIPTION =
  'Free calculator: model potential contract and AMC renewal revenue using your own account count, contract value and renewal-rate assumptions. No sign-up needed.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'AMC revenue calculator, contract renewal calculator, renewal revenue calculator, AMC revenue loss, service dealer revenue, contract leak calculator',
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    type: 'website',
  },
}

const FAQ = [
  {
    question: 'What does this calculator estimate?',
    answer:
      'It models potential annual renewal revenue from the account count, average contract value and renewal rate you enter. It is a planning tool, not a benchmark for your business or an outcome forecast.',
  },
  {
    question: 'How does this calculator estimate recoverable revenue?',
    answer:
      'It multiplies your recurring or AMC-eligible accounts by your average contract value, then compares your current renewal rate with a planning scenario you can adjust. The difference is illustrative, not a promise of recoverable revenue.',
  },
  {
    question: 'How can I actually recover that revenue?',
    answer:
      'Use a documented workflow: keep contract end dates current, review contracts due by urgency, record callbacks and use approved customer messaging where appropriate. LeadBuddie provides renewal tools for eligible water-treatment businesses; sends depend on plan, setup, templates and messaging eligibility.',
  },
]

export default function AmcRevenueCalculatorPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'AMC & Contract Revenue Leak Calculator',
            url: `${SITE_URL}${PATH}`,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            description: DESCRIPTION,
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
            publisher: { '@id': `${SITE_URL}/#organization` },
          },
          faqSchema(FAQ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'AMC Revenue Calculator', path: PATH },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-10 pt-28 sm:px-6 md:pt-36 lg:px-8 bg-bg-primary border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(37,211,102,0.05),transparent_45%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-hover">
            Free tool · No sign-up
          </span>
          <h1 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-text-primary sm:text-4xl md:text-5xl font-heading">
            Model your contract renewal revenue
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            Use your own account count, contract value and renewal-rate assumptions to compare today’s renewal revenue with a planning scenario.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="relative px-4 pb-16 pt-10 sm:px-6 md:pb-24 lg:px-8 bg-bg-primary">
        <div className="mx-auto max-w-5xl">
          <AmcCalculator />
        </div>
      </section>

      {/* Context + FAQ */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8 bg-bg-primary border-t border-border">
        <div className="mx-auto max-w-3xl pt-12">
          <h2 className="mb-6 text-2xl font-bold text-text-primary md:text-3xl font-heading">
            Why renewals are the most valuable sales you make
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              Existing customers already know your team and service history. Keeping renewal dates and follow-up commitments visible can help your team plan the next conversation.
            </p>
            <p>
              It is an operations and communication workflow. Review your own results over time rather than treating this calculator’s scenario as a forecast.{' '}
              <Link href="/amc-renewal-software" className="font-semibold text-brand-hover hover:underline">
                See how AMC renewal tracking works →
              </Link>
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {FAQ.map((f) => (
              <div key={f.question} className="rounded-2xl border border-border bg-bg-card p-5 shadow-sm">
                <h3 className="text-base font-semibold text-text-primary font-heading">{f.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-text-muted">Explore more:</span>
            <Link href="/amc-renewal-software" className="rounded-full border border-border bg-bg-card px-4 py-2 text-sm font-medium text-text-secondary hover:border-brand hover:text-text-primary shadow-sm transition-all">
              AMC renewal software
            </Link>
            <Link href="/water-purifier-crm" className="rounded-full border border-border bg-bg-card px-4 py-2 text-sm font-medium text-text-secondary hover:border-brand hover:text-text-primary shadow-sm transition-all">
              Water purifier CRM
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
