import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { PricingGrid } from '@/components/pricing/PricingGrid'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, SITE_URL } from '@/lib/seo'
import { PRICING_PLANS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Pricing — LeadBuddie AI Sales Employee for WhatsApp',
  description:
    'LeadBuddie pricing for Indian businesses — paid plans from ₹1,499/month. Start a 30-day free Growth trial with no credit card. Features such as follow-ups, booking requests, campaigns and multi-number WhatsApp vary by plan.',
  keywords:
    'LeadBuddie pricing, WhatsApp CRM pricing India, WhatsApp automation price, AI sales employee cost, WhatsApp Business API pricing India',
  alternates: { canonical: '/pricing' },
}

// Product + per-plan Offer schema → eligible for Google price-rich results and
// gives AI answer engines accurate, citable pricing for LeadBuddie.
const pricingProductSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'LeadBuddie — AI Sales Employee for WhatsApp',
  description:
    'AI sales software for WhatsApp that helps businesses reply to enquiries, collect details for booking or quote requests, and hand conversations to their team. Features and automation vary by plan and setup.',
  brand: { '@type': 'Brand', name: 'LeadBuddie' },
  url: `${SITE_URL}/pricing`,
  offers: PRICING_PLANS.map((p) => ({
    '@type': 'Offer',
    name: `${p.name} plan`,
    price: String(p.price),
    priceCurrency: 'INR',
    url: `${SITE_URL}/pricing`,
    availability: 'https://schema.org/InStock',
    description: p.description,
  })),
}

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          pricingProductSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Pricing', path: '/pricing' },
          ]),
        ]}
      />
      <section className="relative isolate overflow-hidden bg-[#07111f] px-4 pb-20 pt-28 text-white sm:px-6 md:pt-36 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#25d366]/15 blur-[100px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8bf0aa]">Pricing built around the work Buddie can do</p>
          <h1 className="mt-5 font-heading text-5xl font-extrabold leading-[0.94] tracking-[-0.065em] sm:text-6xl">Start with the whole system. <span className="text-[#79eea0]">Pay when it proves useful.</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">Every signup gets Growth for 30 days with no card. Then choose Free, Starter, Growth or Scale based on the actions and team capacity you need.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-2 text-xs font-semibold text-slate-300">
            {['No card to start', 'Exact limits shown below', 'Cancel future renewals from Billing'].map((item) => <span key={item} className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-2">{item}</span>)}
          </div>
        </div>
      </section>

      <PricingGrid />

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-[#07111f] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="absolute -right-20 -top-16 h-72 w-72 rounded-full bg-[#25d366]/20 blur-[90px]" />
          <div className="relative mx-auto max-w-2xl"><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8bf0aa]">30 days of Growth included</p><h2 className="mt-5 font-heading text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">Build and test your real customer journey first.</h2><p className="mx-auto mt-5 max-w-xl text-slate-300">Connect WhatsApp, train Buddie, add what you sell and test the quote, booking or handover path before choosing a paid plan.</p><Button href="https://app.leadbuddie.com" size="lg" className="mt-8">Start your 30-day trial</Button></div>
        </div>
      </section>
    </>
  )
}
