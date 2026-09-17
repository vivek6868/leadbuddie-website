import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { BuddieVoice } from '@/components/home/BuddieVoice'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { JsonLd } from '@/components/seo/JsonLd'
import { VOICE_FAQ } from '@/lib/faq'
import { breadcrumbSchema, faqSchema, serviceSchema, softwareApplicationSchema, SITE_URL } from '@/lib/seo'

const PATH = '/whatsapp-voice-ai'
const TITLE = 'WhatsApp Voice AI — Understand Voice Notes & Reply in Voice | LeadBuddie'
const DESCRIPTION =
  'Buddie understands customer WhatsApp voice notes, replies with a natural voice note in English, Hindi, Tamil or Malayalam, and turns what was said into a complete lead or request for your team.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'whatsapp voice ai, whatsapp voice note ai, ai reply to whatsapp voice notes, voice note transcription whatsapp business, ai voice reply whatsapp, whatsapp voice bot india, tamil voice ai whatsapp, hindi voice ai whatsapp, malayalam voice ai, voice to lead, whatsapp ai employee',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'WhatsApp Voice AI for Business | LeadBuddie',
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Voice AI for Business | LeadBuddie',
    description: 'Customers send voice notes. Buddie understands, replies in voice, and files the request.',
  },
}

const STEPS = [
  {
    title: 'A customer sends a voice note',
    copy: 'In the language they are comfortable with — no need to type out dates, addresses or what they need.',
  },
  {
    title: 'Buddie listens and understands',
    copy: 'The voice note is transcribed, the language is checked, and Buddie answers from the business knowledge you approved.',
  },
  {
    title: 'Buddie replies—in voice when it helps',
    copy: 'A short, natural voice note alongside the written answer. Menus, links and hand-overs always stay in text.',
  },
  {
    title: 'Your team gets a complete request',
    copy: 'Details spoken in the conversation become structured fields on a lead, quote or booking request, ready to act on.',
  },
]

const FOR_WHO = [
  'Home services and repairs where customers describe the problem out loud',
  'Travel businesses taking trip enquiries from families',
  'Clinics, wellness and fitness studios booking trials and visits',
  'Retail and showrooms answering product and price questions',
  'Any business whose customers prefer speaking to typing',
]

export default function WhatsAppVoiceAiPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Buddie Voice — WhatsApp Voice AI',
            serviceType: 'AI voice-note understanding and voice replies for WhatsApp Business',
            description: DESCRIPTION,
            url: `${SITE_URL}${PATH}`,
            audience: 'Indian small and medium businesses whose customers send WhatsApp voice notes',
          }),
          softwareApplicationSchema({ name: 'LeadBuddie — Buddie Voice', description: DESCRIPTION, url: `${SITE_URL}${PATH}` }),
          faqSchema(VOICE_FAQ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'WhatsApp Voice AI', path: PATH },
          ]),
        ]}
      />

      <BuddieVoice headingLevel="h1" className="pb-20 pt-28 md:pt-36 lg:pb-28" />

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#168a42]">How it works</p>
          <h2 className="mt-4 max-w-2xl font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">
            From voice note to a request your team can act on.
          </h2>
          <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <li key={step.title} className="rounded-[24px] border border-slate-200 bg-white p-5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#25d366] text-sm font-extrabold text-[#082315]">{i + 1}</span>
                <h3 className="mt-6 text-base font-bold tracking-[-0.025em] text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#eef4ef] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#168a42]">Who it’s for</p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">
              Built for customers who would rather talk than type.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">
              A voice note left unheard until evening is a lead gone cold. Buddie answers it while you’re busy, in a voice that sounds like a helpful person—not a phone menu.
            </p>
          </div>
          <ul className="space-y-3">
            {FOR_WHO.map((line) => (
              <li key={line} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3.5 text-sm font-semibold text-slate-800 shadow-sm">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#25d366] text-[#092015]"><Check className="h-3 w-3 stroke-[3]" /></span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-4xl font-extrabold tracking-[-0.05em] text-slate-950">Buddie Voice questions</h2>
          <div className="mt-10"><FAQAccordion items={VOICE_FAQ} /></div>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="https://app.leadbuddie.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-3 text-sm font-bold text-[#082315] shadow-[0_14px_34px_rgba(37,211,102,0.24)] transition hover:-translate-y-0.5 hover:bg-[#65ed94]">
              Start your 30-day trial <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-100">
              Compare plans
            </Link>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            Related: <Link href="/ai-employee" className="font-semibold text-[#168a42] hover:underline">AI employee for WhatsApp</Link> ·{' '}
            <Link href="/features" className="font-semibold text-[#168a42] hover:underline">All features</Link>
          </p>
        </div>
      </section>
    </>
  )
}
