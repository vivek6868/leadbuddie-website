import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { roMetadata } from '@/lib/ro/metadata'
import { APP_URL, RO_PATH, RO_PRICING_PATH, SUPPORT_EMAIL } from '@/lib/ro/paths'
import { leadbuddieRoSoftwareSchema, roBreadcrumbSchema, roFaqSchema, roPriceOffers } from '@/lib/ro/schema'
import { SITE_URL } from '@/lib/seo'

const TITLE = 'LeadBuddie RO Pricing | Rs 1,999 per month after a free month'
const DESCRIPTION =
  'LeadBuddie RO pricing: Growth is free for the first month, then Rs 1,999 per month, including the Engineer app. Scale is Rs 3,999 per month. Pay yearly for a further discount — talk to our team.'

const FAQ = [
  {
    question: 'How much is LeadBuddie RO Growth?',
    answer:
      'Growth is free for the first month after signup, then Rs 1,999 per month. Growth includes the LeadBuddie Engineer app: assigned jobs, digital job cards and job completion on the engineer’s phone.',
  },
  {
    question: 'How much is LeadBuddie RO Scale?',
    answer:
      'Scale is Rs 3,999 per month. Water-treatment Autopilot chases renewals, books a service from a customer reply, assigns the engineer and follows up on payment.',
  },
  {
    question: 'Is there a yearly price?',
    answer:
      'Pay yearly for a further discount — talk to our team. A yearly figure is not published on this page.',
  },
  {
    question: 'Does Growth include the Engineer app?',
    answer:
      'Yes. The LeadBuddie Engineer app is included with Growth. Field engineers get assigned jobs, digital job cards and job completion on their phone.',
  },
  {
    question: 'Do I need WhatsApp?',
    answer:
      'No. Without WhatsApp the whole flow works manually: customers, service due, booking, engineer assignment, job cards, payments and AMC renewals. Connecting WhatsApp automates reminders, follow-ups and more. WhatsApp conversation charges may apply separately via your Meta account.',
  },
]

export const metadata: Metadata = roMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: RO_PRICING_PATH,
  keywords:
    'LeadBuddie RO pricing, RO service management software price India, AMC management software for RO dealers price, LeadBuddie RO Growth Rs 1999, LeadBuddie Engineer app',
})

export default function LeadbuddieRoPricingPage() {
  const pageUrl = `${SITE_URL}${RO_PRICING_PATH}`
  return (
    <>
      <JsonLd
        data={[
          leadbuddieRoSoftwareSchema({
            path: RO_PRICING_PATH,
            name: 'LeadBuddie RO',
            description: DESCRIPTION,
            inLanguage: 'en-IN',
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'LeadBuddie RO',
            description: DESCRIPTION,
            brand: { '@type': 'Brand', name: 'LeadBuddie RO' },
            url: pageUrl,
            offers: roPriceOffers(pageUrl),
          },
          roFaqSchema(FAQ),
          roBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'LeadBuddie RO', path: RO_PATH },
            { name: 'Pricing', path: RO_PRICING_PATH },
          ]),
        ]}
      />

      <section className="bg-[#061722] px-4 pb-14 pt-28 text-white sm:px-6 md:pt-36 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-extrabold text-[#9af3c1]">LeadBuddie RO</p>
          <h1 className="mt-4 font-heading text-[2.15rem] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
            LeadBuddie RO pricing
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">{DESCRIPTION}</p>
          <a
            href={APP_URL}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#67f3bd] px-5 py-3.5 text-sm font-extrabold text-[#06271f] sm:w-auto"
          >
            Sign up and upload your Excel
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'LeadBuddie RO', href: RO_PATH },
              { label: 'Pricing' },
            ]}
          />

          <table className="mt-6 w-full text-left text-sm">
            <caption className="pb-3 text-left text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">
              Listed LeadBuddie RO prices
            </caption>
            <thead>
              <tr className="border-b border-slate-200 text-slate-950">
                <th scope="col" className="py-3 pr-4 font-extrabold">Plan</th>
                <th scope="col" className="py-3 font-extrabold">Price</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100">
                <th scope="row" className="py-4 pr-4 align-top font-extrabold text-slate-950">Growth</th>
                <td className="py-4">Free for the first month after signup, then Rs 1,999 per month. Includes the LeadBuddie Engineer app.</td>
              </tr>
              <tr className="border-b border-slate-100">
                <th scope="row" className="py-4 pr-4 align-top font-extrabold text-slate-950">Scale</th>
                <td className="py-4">Rs 3,999 per month.</td>
              </tr>
              <tr>
                <th scope="row" className="py-4 pr-4 align-top font-extrabold text-slate-950">Yearly</th>
                <td className="py-4">
                  Pay yearly for a further discount —{' '}
                  <Link href="/contact" className="font-extrabold text-[#087c5a] underline-offset-2 hover:underline">
                    talk to our team
                  </Link>
                  .
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-8 grid gap-4">
            <article className="rounded-[28px] border border-[#087c5a] bg-[#06271f] p-6 text-white sm:p-8">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#9af3c1]">Recommended</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.04em]">Growth</h2>
              <p className="mt-3 font-heading text-4xl font-extrabold tracking-[-0.04em]">
                ₹1,999 <span className="text-base font-semibold text-slate-300">per month</span>
              </p>
              <p className="mt-2 text-sm text-[#9af3c1]">Free for the first month after signup, then Rs 1,999 per month.</p>
              <ul className="mt-5 space-y-2 text-sm">
                {[
                  'Customer database and Excel import',
                  'RO purifier and installation records',
                  'Service schedules, booking and upcoming dues',
                  'Engineer assignment and digital job cards',
                  'LeadBuddie Engineer app on the engineer’s phone',
                  'Job completion, service history and payment tracking',
                  'AMC tracking and renewals',
                  'Works manually without WhatsApp',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#67f3bd]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={APP_URL}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#67f3bd] px-5 py-3.5 text-sm font-extrabold text-[#06271f] sm:w-auto"
              >
                Sign up and upload your Excel
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="font-heading text-3xl font-extrabold tracking-[-0.04em] text-slate-950">Scale</h2>
              <p className="mt-3 font-heading text-4xl font-extrabold tracking-[-0.04em] text-slate-950">
                ₹3,999 <span className="text-base font-semibold text-slate-500">per month</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Water-treatment Autopilot: chase renewals, book a service from a customer reply, assign the engineer, and follow up on payment.
              </p>
              <a
                href={APP_URL}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3.5 text-sm font-extrabold text-slate-900 sm:w-auto"
              >
                Sign up for Scale
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-slate-600">
            Need a smaller start? Starter is Rs 1,499 per month. Growth is the plan for an RO service centre.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Pay yearly for a further discount —{' '}
            <Link href="/contact" className="font-extrabold text-[#087c5a] underline-offset-2 hover:underline">
              talk to our team
            </Link>
            .
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            WhatsApp conversation charges may apply separately via your Meta account. You can use LeadBuddie RO fully without connecting WhatsApp.
          </p>
          <p className="mt-6 text-sm text-slate-600">
            Support: <a className="font-bold text-[#087c5a]" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>

          <h2 className="mt-14 font-heading text-2xl font-extrabold tracking-[-0.04em] text-slate-950">Questions</h2>
          <div className="mt-5">
            <FAQAccordion items={FAQ} />
          </div>

          <p className="mt-10 text-sm text-slate-600">
            <Link href={RO_PATH} className="font-extrabold text-[#087c5a] underline-offset-2 hover:underline">
              Back to LeadBuddie RO
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
