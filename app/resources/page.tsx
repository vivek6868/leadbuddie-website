import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calculator, BookOpen, MessageCircle, ShieldCheck } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, collectionPageSchema, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Resources — Guides & Tools for Service Businesses | LeadBuddie',
  description:
    'Free guides and tools for Indian service businesses: water purifier service management, trustworthy service-due dates, technician job cards, AMC renewal recovery and a revenue calculator.',
  keywords:
    'water purifier service guides, RO service management guide, AMC renewal guide India, service due date tracking, technician job card template, AMC revenue calculator',
  alternates: { canonical: '/resources' },
  openGraph: {
    title: 'Resources — Guides & Tools for Service Businesses | LeadBuddie',
    description:
      'Free guides and tools for Indian service businesses: service management, service-due dates, job cards, AMC renewals and a revenue calculator.',
    url: `${SITE_URL}/resources`,
    type: 'website',
  },
}

const resources = [
  {
    icon: BookOpen,
    title: 'Water-treatment operations guides',
    description: 'Build reliable service cycles, trustworthy due dates and technician workflows for RO and water-treatment teams.',
    href: '/blog?category=Operations',
    cta: 'Browse operations guides',
  },
  {
    icon: Calculator,
    title: 'AMC revenue calculator',
    description: 'Estimate the renewal revenue at risk in your service business and identify the follow-up gap to fix.',
    href: '/amc-revenue-calculator',
    cta: 'Calculate renewal revenue',
  },
  {
    icon: MessageCircle,
    title: 'Software for water purifier businesses',
    description: 'See how your customers, installed units, service visits and AMC renewals all come together.',
    href: '/water-purifier-crm',
    cta: 'See it for water purifier businesses',
  },
  {
    icon: BookOpen,
    title: 'Water purifier service software guide',
    description: 'What to look for in software that has to run installs, services, renewals and technicians.',
    href: '/blog/water-purifier-service-management-software-guide-2026',
    cta: 'Read the 2026 guide',
  },
  {
    icon: Calculator,
    title: 'Service dates you can trust',
    description: 'How to work out when a purifier is really due — and what to do with old dates nobody can explain.',
    href: '/blog/water-purifier-service-due-date-system',
    cta: 'Read the guide',
  },
  {
    icon: MessageCircle,
    title: 'Technician job cards',
    description: 'From the customer’s call to a closed visit, money collected and the next service date.',
    href: '/blog/ro-technician-job-card-workflow',
    cta: 'Read the guide',
  },
  {
    icon: ShieldCheck,
    title: 'AI control and safety',
    description: 'Understand how approval workflows and business knowledge can keep automated WhatsApp conversations on track.',
    href: '/blog/autonomy-ladder-whatsapp-ai-watch-mode',
    cta: 'Read the safety guide',
  },
]

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={[
          collectionPageSchema({
            name: 'LeadBuddie resources for Indian service businesses',
            description:
              'Guides and tools for water purifier service management, service-due dates, technician job cards, AMC renewal recovery and planning renewal revenue.',
            path: '/resources',
            items: resources.map((r) => ({ name: r.title, path: r.href })),
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Resources', path: '/resources' },
          ]),
        ]}
      />
      <section className="relative isolate overflow-hidden bg-[#07111f] px-4 pb-20 pt-28 text-white sm:px-6 md:pt-36 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#25d366]/15 blur-[100px]" />
        <div className="relative mx-auto max-w-4xl text-center"><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8bf0aa]">Practical guides for business owners</p><h1 className="mt-5 font-heading text-5xl font-extrabold leading-[0.94] tracking-[-0.065em] sm:text-6xl">Learn the playbook. <span className="text-[#79eea0]">Run a tighter business.</span></h1><p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">Straightforward guides and tools for service visits, AMC renewals, customer enquiries and using AI without losing control.</p></div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          {resources.map((resource, index) => (
            <Link key={index} href={resource.href} className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_22px_65px_-38px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-1 hover:border-[#bce8c8] hover:shadow-[0_30px_75px_-36px_rgba(15,23,42,0.35)] sm:p-8">
              <div className="flex items-start justify-between gap-5"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eaf9ee] text-[#168a42]"><resource.icon size={22} /></span><span className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-500 transition group-hover:border-[#25d366] group-hover:text-[#168a42]"><ArrowRight className="h-4 w-4" /></span></div>
              <h2 className="mt-10 font-heading text-2xl font-extrabold tracking-[-0.04em] text-slate-950">{resource.title}</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-600">{resource.description}</p>
              <p className="mt-7 text-sm font-bold text-[#168a42]">{resource.cta}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[30px] bg-[#eef5ef] p-7 sm:flex-row sm:items-center sm:p-10"><div><p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#168a42]">Need a walkthrough?</p><h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.045em] text-slate-950">Map LeadBuddie to your real business flow.</h2><p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">Tell us how your team manages enquiries, service visits, bookings or quotations today.</p></div><Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#25d366] px-5 py-3 text-sm font-extrabold text-[#082315] shadow-[0_12px_30px_rgba(37,211,102,0.22)]">Talk to the team <ArrowRight className="h-4 w-4" /></Link></div></section>
    </>
  )
}
