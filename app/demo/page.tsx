import type { Metadata } from 'next'
import { CheckCircle2, PlayCircle, Quote } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { TESTIMONIALS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'LeadBuddie Product Demo — From WhatsApp Enquiry to Request',
  description: 'Watch how to connect WhatsApp, set up LeadBuddie and move a customer conversation toward a qualified quote, booking or handover request.',
  alternates: { canonical: '/demo' },
}

const videos = [
  { title: 'Connect your WhatsApp Business number', copy: 'See the guided connection journey for an existing business number.', src: 'https://www.youtube.com/embed/cG3R_e462nM' },
  { title: 'LeadBuddie product walkthrough', copy: 'Tour the inbox, customer context and day-to-day workflow.', src: 'https://www.youtube.com/embed/fqg46eP9tmQ?si=UoXmi7uisM6IY7z-' },
  { title: 'Getting started', copy: 'See the setup steps before your team begins using Buddie with customers.', src: 'https://www.youtube.com/embed/SGtTIi2ajCI?si=8ctY818SUljN3ZF_' },
] as const

const checks = [
  'Does Buddie answer from the business information you approved?',
  'Does each product lead to the correct quote, booking or handover request?',
  'Are the required customer details collected in a natural order?',
  'Does Buddie stop and bring in your team when a final decision is needed?',
] as const

export default function DemoPage() {
  const testimonial = TESTIMONIALS[0]
  return (
    <>
      <section className="relative overflow-hidden bg-[#07111f] px-4 pb-20 pt-28 text-white sm:px-6 md:pt-36 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="relative mx-auto max-w-4xl text-center"><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8bf0aa]">Product demo</p><h1 className="mt-5 font-heading text-5xl font-extrabold leading-[0.94] tracking-[-0.06em] sm:text-6xl">See the whole journey, <span className="text-[#79eea0]">not just an AI reply.</span></h1><p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">Connect WhatsApp, teach Buddie, test a customer flow and see how an enquiry becomes a request your team can finish.</p></div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-6xl"><div className="grid gap-6 lg:grid-cols-3">{videos.map((video, index) => <article key={video.src} className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)]"><div className="relative aspect-video bg-[#0b1725]"><iframe src={video.src} title={video.title} loading={index === 0 ? 'eager' : 'lazy'} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="absolute inset-0 h-full w-full border-0" /></div><div className="p-5"><p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#168a42]"><PlayCircle className="h-4 w-4" /> Video {index + 1}</p><h2 className="mt-4 font-heading text-xl font-extrabold tracking-[-0.03em] text-slate-950">{video.title}</h2><p className="mt-2 text-sm leading-relaxed text-slate-600">{video.copy}</p></div></article>)}</div></div></section>

      <section className="bg-[#eef4ef] px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><div><p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#168a42]">Test before Auto</p><h2 className="mt-4 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] text-slate-950">A good test proves the conversion path.</h2><p className="mt-5 text-base leading-relaxed text-slate-600">Do not judge the setup only by whether Buddie can greet a lead. Test the exact journey that makes money for your business.</p></div><ul className="space-y-3">{checks.map((check) => <li key={check} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold leading-relaxed text-slate-800"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#168a42]" />{check}</li>)}</ul></div></section>

      {testimonial && <section className="px-4 py-20 sm:px-6 lg:px-8"><figure className="mx-auto max-w-3xl rounded-[30px] border border-[#ccebd5] bg-white p-7 shadow-sm sm:p-10"><Quote className="h-9 w-9 text-[#168a42]" /><blockquote className="mt-6 font-heading text-2xl font-bold leading-snug tracking-[-0.035em] text-slate-950">“{testimonial.quote}”</blockquote><figcaption className="mt-6 text-sm font-semibold text-slate-600">{testimonial.author}</figcaption></figure></section>}

      <section className="px-4 pb-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl rounded-[34px] bg-[#07111f] px-6 py-14 text-center text-white sm:py-18"><h2 className="font-heading text-4xl font-extrabold tracking-[-0.05em]">Try the journey with your own business.</h2><p className="mx-auto mt-4 max-w-xl text-slate-300">Every signup receives the Growth plan for 30 days. No card required.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button href="https://app.leadbuddie.com" size="lg">Start your 30-day trial</Button><Button href="/contact" variant="outline" size="lg" className="border-white/20 bg-white/[0.06] text-white hover:bg-white/[0.12] hover:text-white">Talk to the team</Button></div></div></section>
    </>
  )
}
