import type { Metadata } from 'next'
import Link from 'next/link'
import { AmcCalculator } from '@/components/tools/AmcCalculator'
import { JsonLd } from '@/components/seo/JsonLd'
import { faqSchema, breadcrumbSchema, SITE_URL } from '@/lib/seo'

const PATH = '/amc-revenue-calculator'
const TITLE = 'AMC Revenue Leak Calculator for Water Purifier Dealers | LeadBuddie'
const DESCRIPTION =
  'Free calculator: see how much AMC renewal revenue your water purifier dealership loses every year — and how much you could recover with a tracked renewal workflow. No sign-up needed.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'AMC revenue calculator, water purifier AMC calculator, renewal revenue calculator, AMC revenue loss, water purifier dealer revenue, RO AMC revenue',
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
    question: 'How much AMC revenue do water purifier dealers lose?',
    answer:
      'Most water purifier dealers in India renew only 40–60% of their AMC contracts because follow-up is manual. At ₹1,999–₹3,500 per contract across a few hundred customers, that is typically ₹2–3 lakhs a month walking out the door.',
  },
  {
    question: 'How does this calculator estimate recoverable revenue?',
    answer:
      'It multiplies your AMC-eligible customers by your average AMC value to find your potential renewal revenue, compares it to what you close today, and shows the gap you could recover by lifting your renewal rate toward ~85% — the level dealers typically reach with a tracked renewal workflow.',
  },
  {
    question: 'How can I actually recover that revenue?',
    answer:
      'By making sure no renewal is missed: track every AMC end-date, surface contracts due by urgency, follow up on WhatsApp, and schedule callbacks so promised follow-ups never get forgotten. LeadBuddie runs this workflow on your existing WhatsApp number.',
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
            name: 'AMC Revenue Leak Calculator',
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
      <section className="relative overflow-hidden px-4 pb-10 pt-28 sm:px-6 md:pt-36 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(124,58,237,0.2),transparent_45%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-300">
            Free tool · No sign-up
          </span>
          <h1 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
            How much AMC revenue is your dealership losing?
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            Most water purifier dealers leak ₹2–3 lakhs a month in missed AMC renewals. Move the
            sliders to see your number — and how much you could recover.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="relative px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <AmcCalculator />
        </div>
      </section>

      {/* Context + FAQ */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
            Why the renewal is the cheapest sale you have
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-white/60">
            <p>
              The customer already trusts the brand, already paid for the unit, and already knows
              your team. Renewing their AMC should be the easiest revenue in your business — yet for
              most dealers, a quarter to nearly half of contracts lapse every year, purely because
              nobody followed up in time.
            </p>
            <p>
              It isn&apos;t a sales problem; it&apos;s an operations problem — and it&apos;s the most
              fixable one. When every contract is tracked, surfaced by urgency, and followed up on
              WhatsApp, renewal rates climb fast.{' '}
              <Link href="/amc-renewal-software" className="font-semibold text-teal-300 hover:text-white">
                See how AMC renewal tracking works →
              </Link>
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {FAQ.map((f) => (
              <div key={f.question} className="rounded-2xl border border-white/[0.07] bg-bg-card/50 p-5 backdrop-blur-sm">
                <h3 className="text-base font-semibold text-white">{f.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-white/40">Explore more:</span>
            <Link href="/amc-renewal-software" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 hover:border-brand-light hover:text-white">
              AMC renewal software
            </Link>
            <Link href="/water-purifier-crm" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 hover:border-brand-light hover:text-white">
              Water purifier CRM
            </Link>
            <Link href="/blog/water-purifier-dealer-amc-renewals-2026-guide" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 hover:border-brand-light hover:text-white">
              AMC renewals guide
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
