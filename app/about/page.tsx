import { Metadata } from 'next'
import { Building2, MapPin, Target, Users } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { Section } from '@/components/ui/Section'
import { BRAND, CONTACT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About LeadBuddie — Built for Indian WhatsApp-First Teams',
  description: 'LeadBuddie is a product of Hutliv Technologies LLP, founded in India in 2025 to help WhatsApp-first service and sales teams organise customer conversations.',
  alternates: { canonical: '/about' },
}

const VALUES = [
  { icon: Target, title: 'Useful outcomes', copy: 'We focus on helping a customer conversation reach a clear next step, not on adding another dashboard for a busy team.' },
  { icon: Users, title: 'Owner control', copy: 'Businesses should decide which information is approved, when automation runs and when a person takes over.' },
]

export default function AboutPage() {
  return (
    <>
      <Section className="bg-bg-primary pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-4xl">
          <header className="text-center"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-hover">Built in India</p><h1 className="mt-4 font-heading text-4xl font-bold text-text-primary md:text-5xl">About LeadBuddie</h1><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">Software for Indian teams that run sales, service and customer follow-ups on WhatsApp.</p></header>
          <div className="mt-12 space-y-6">
            <article className="rounded-2xl border border-border bg-bg-card p-6 shadow-sm md:p-8"><div className="flex gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand"><Building2 className="h-6 w-6" /></span><div><h2 className="text-2xl font-semibold text-text-primary">Our story</h2><p className="mt-4 text-text-secondary">{BRAND.name} is a product of {BRAND.company}, founded in {BRAND.founded}. We started with a practical problem: customer enquiries, service questions and follow-ups often live across individual phones and memory.</p><p className="mt-4 text-text-secondary">LeadBuddie helps teams organise those conversations, teach Buddie the facts their business approves, and move customers to a useful next step with a human handover when needed.</p></div></div></article>
            <article className="rounded-2xl border border-border bg-bg-card p-6 shadow-sm md:p-8"><div className="flex gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand"><MapPin className="h-6 w-6" /></span><div><h2 className="text-2xl font-semibold text-text-primary">India-first</h2><p className="mt-4 text-text-secondary">We are based in India and focus first on WhatsApp-first service and sales teams here. The product is designed around the day-to-day work of handling enquiries, callbacks, bookings and renewals.</p><p className="mt-4 text-text-secondary"><strong className="text-text-primary">Location:</strong> {CONTACT.address}</p></div></div></article>
            <section className="grid gap-6 md:grid-cols-2">{VALUES.map(({ icon: Icon, title, copy }) => <article key={title} className="rounded-2xl border border-border bg-bg-card p-6 shadow-sm"><Icon className="h-6 w-6 text-brand" /><h2 className="mt-5 text-xl font-semibold text-text-primary">{title}</h2><p className="mt-3 text-text-secondary">{copy}</p></article>)}</section>
          </div>
        </div>
      </Section>
      <CTASection title="See how LeadBuddie fits your workflow." description="Talk through the conversations your team wants to organise and the controls you need." />
    </>
  )
}
