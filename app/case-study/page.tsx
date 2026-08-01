import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Quote } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import { CTASection } from '@/components/sections/CTASection'
import { TESTIMONIALS } from '@/lib/constants'

const customer = TESTIMONIALS[0]

export const metadata: Metadata = {
  title: 'Customer Story: Master Water Purifier | LeadBuddie',
  description: 'Master Water Purifier explains how LeadBuddie made handling more than 100 daily leads, replies and follow-ups easier.',
  alternates: { canonical: '/case-study' },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Customer Story: Master Water Purifier',
  description: 'Master Water Purifier explains how LeadBuddie made handling more than 100 daily leads, replies and follow-ups easier.',
  url: 'https://leadbuddie.com/case-study', datePublished: '2026-02-28', dateModified: '2026-08-01',
  author: { '@type': 'Organization', name: 'LeadBuddie', url: 'https://leadbuddie.com' },
  publisher: { '@type': 'Organization', name: 'LeadBuddie', url: 'https://leadbuddie.com', logo: { '@type': 'ImageObject', url: 'https://leadbuddie.com/images/logo.png' } },
}

const workflow = [
  'Bring connected WhatsApp conversations into one shared inbox.',
  'Keep lead ownership, notes and follow-up context visible to the team.',
  'Use Buddie within the business knowledge and operating mode the owner has approved.',
] as const

export default function CaseStudyPage() {
  return (
    <>
      <JsonLd data={ARTICLE_SCHEMA} />
      <header className="relative overflow-hidden bg-[#07111f] px-4 pb-20 pt-28 text-white sm:px-6 md:pt-36 lg:px-8"><div className="pointer-events-none absolute -right-20 top-10 h-96 w-96 rounded-full bg-[#25d366]/15 blur-[100px]" /><div className="relative mx-auto max-w-5xl"><p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#8bf0aa]">Verified customer story</p><h1 className="mt-5 max-w-4xl font-heading text-5xl font-extrabold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Making a high-volume WhatsApp day <span className="text-[#79eea0]">easier to handle.</span></h1><p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">Master Water Purifier told us that handling more than 100 leads a day was time-consuming. This is the result they were willing to put their name to.</p></div></header>

      <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><figure className="rounded-[30px] border border-[#ccebd5] bg-[#eef9f1] p-7 sm:p-10"><Quote className="h-10 w-10 text-[#168a42]" /><blockquote className="mt-7 font-heading text-2xl font-bold leading-snug tracking-[-0.035em] text-slate-950">“{customer.quote}”</blockquote><figcaption className="mt-7 text-sm font-bold text-slate-700">{customer.author}</figcaption></figure><div><p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#168a42]">What changed</p><h2 className="mt-4 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] text-slate-950">Responses and follow-ups became easier.</h2><p className="mt-5 text-base leading-relaxed text-slate-600">That is the verified outcome. We do not turn it into a conversion percentage or revenue claim that the customer did not provide.</p><ul className="mt-7 space-y-3">{workflow.map((item) => <li key={item} className="flex gap-3 text-sm font-semibold leading-relaxed text-slate-800"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#168a42]" />{item}</li>)}</ul></div></div></section>

      <section className="bg-[#eef4ef] px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-5xl"><div className="max-w-2xl"><p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#168a42]">The product underneath</p><h2 className="mt-4 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] text-slate-950">One place to see the conversation and the next action.</h2></div><div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"><Image src="/images/product-inbox.png" alt="Illustrative LeadBuddie shared inbox" fill className="object-contain p-4" sizes="(max-width: 1024px) 100vw, 960px" /></div><p className="mt-4 text-center text-xs text-slate-500">Product interface shown for context. Customer results vary by setup, team process and message volume.</p></div></section>

      <CTASection title="Make a busy WhatsApp day easier to operate." description="Connect your number, teach Buddie your business, and test the exact follow-up or request journey your team needs." />
    </>
  )
}
