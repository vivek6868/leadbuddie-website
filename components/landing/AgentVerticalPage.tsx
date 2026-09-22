import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Bot, CircleCheckBig, ShieldCheck, Sparkles, UserRoundCheck, type LucideIcon } from 'lucide-react'
import { FAQAccordion } from '@/components/ui/FAQAccordion'

export interface AgentVerticalPageProps {
  eyebrow: string
  h1: React.ReactNode
  intro: string
  image: string
  imageAlt: string
  icon: LucideIcon
  workflowTitle: string
  workflowIntro: string
  steps: { title: string; copy: string }[]
  requestTitle: string
  requestFields: string[]
  teamReceives: string[]
  operatingRules: string[]
  outcomes: { title: string; copy: string }[]
  faq: { question: string; answer: string }[]
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <div className={`inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] ${dark ? 'text-[#9af3c1]' : 'text-[#087c5a]'}`}><span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-[#67f3bd] shadow-[0_0_14px_#67f3bd]' : 'bg-[#00a878]'}`} />{children}</div>
}

export function AgentVerticalPage({
  eyebrow,
  h1,
  intro,
  image,
  imageAlt,
  icon: Icon,
  workflowTitle,
  workflowIntro,
  steps,
  requestTitle,
  requestFields,
  teamReceives,
  operatingRules,
  outcomes,
  faq,
}: AgentVerticalPageProps) {
  return (
    <>
      <section className="relative isolate min-h-[780px] overflow-hidden bg-[#061722] px-4 pb-20 pt-28 text-white sm:px-6 md:pt-36 lg:px-8">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#061722_0%,rgba(6,23,34,0.97)_38%,rgba(6,23,34,0.48)_66%,rgba(6,23,34,0.15)_100%)]" /><div className="absolute inset-0 bg-[linear-gradient(0deg,#061722_0%,transparent_52%)]" />
        <div className="relative mx-auto grid min-h-[610px] max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]"><div className="max-w-2xl"><Eyebrow dark>{eyebrow}</Eyebrow><h1 className="mt-6 font-heading text-[3.2rem] font-extrabold leading-[0.92] tracking-[-0.07em] sm:text-7xl lg:text-[5.15rem]">{h1}</h1><p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-slate-300 sm:text-lg">{intro}</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="https://app.leadbuddie.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#67f3bd] px-5 py-3.5 text-sm font-extrabold text-[#06271f] shadow-[0_18px_46px_rgba(71,235,173,0.24)] transition hover:-translate-y-0.5 hover:bg-[#8af7cd]">Start your trial<ArrowRight className="h-4 w-4" /></a><Link href="/demo" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.07] px-5 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/[0.13]">Book a walkthrough</Link></div></div>
          <div className="relative mx-auto mt-auto w-full max-w-md self-end pb-4 lg:translate-y-8"><div className="rounded-[30px] border border-white/15 bg-[#071d2a]/90 p-5 shadow-[0_34px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl"><div className="flex items-center justify-between border-b border-white/10 pb-4"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#67f3bd] text-[#06271f]"><Icon className="h-5 w-5" /></span><div><p className="text-sm font-extrabold text-white">Buddie is on it</p><p className="mt-0.5 text-[10px] text-slate-400">A sample enquiry</p></div></div><Bot className="h-4 w-4 text-[#67f3bd]" /></div><div className="mt-4 space-y-2">{requestFields.slice(0, 4).map((field, index) => <div key={field} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5"><span className="grid h-6 w-6 place-items-center rounded-lg bg-[#67f3bd]/15 text-[9px] font-extrabold text-[#9af3c1]">0{index + 1}</span><span className="text-[11px] font-bold text-slate-200">{field}</span></div>)}</div><div className="mt-3 flex items-start gap-3 rounded-2xl border border-[#67f3bd]/20 bg-[#0d3029] p-3.5"><Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#67f3bd]" /><p className="text-[11px] leading-relaxed text-[#b9e4d5]">Your team gets a complete enquiry instead of another “price?” message.</p></div></div></div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"><div><Eyebrow>How it works</Eyebrow><h2 className="mt-5 max-w-3xl font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl">{workflowTitle}</h2></div><p className="max-w-lg text-base leading-relaxed text-slate-600 lg:pb-1">{workflowIntro}</p></div><div className="mt-12 grid gap-3 lg:grid-cols-4">{steps.map(({ title, copy }, index) => <div key={title} className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_16px_48px_rgba(15,23,42,0.05)]"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#092331] text-[10px] font-extrabold text-[#67f3bd]">0{index + 1}</span><h3 className="mt-8 text-lg font-extrabold tracking-[-0.03em] text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p></div>)}</div></div></section>

      <section className="bg-[#eaf3f0] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center"><div><Eyebrow>What reaches your team</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">{requestTitle}</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">Buddie asks only what your business actually needs, stays inside your rules and leaves the rest to a person.</p></div><div className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_28px_75px_rgba(15,60,48,0.12)] sm:p-7"><div className="flex items-center justify-between border-b border-slate-100 pb-5"><div><p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#087c5a]">Ready for your team</p><p className="mt-1 text-lg font-extrabold text-slate-950">A complete enquiry</p></div><CircleCheckBig className="h-6 w-6 text-[#087c5a]" /></div><div className="mt-5 grid gap-2 sm:grid-cols-2">{requestFields.map(field => <div key={field} className="rounded-xl bg-slate-50 px-3 py-3 text-xs font-bold text-slate-700">✓ {field}</div>)}</div><div className="mt-4 rounded-2xl border border-[#bcebd8] bg-[#e9faf3] p-4"><p className="text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#087c5a]">You get</p><div className="mt-3 flex flex-wrap gap-2">{teamReceives.map(item => <span key={item} className="rounded-full bg-white px-3 py-2 text-[10px] font-bold text-slate-700 shadow-sm">{item}</span>)}</div></div></div></div></section>

      <section className="bg-[#061722] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><Eyebrow dark>You stay in charge</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-5xl">Buddie only does what you allow.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300">It can talk to the customer and get the work ready. What it may promise, quote or send is your decision.</p></div><div className="grid gap-3 sm:grid-cols-2">{operatingRules.map((rule, index) => <div key={rule} className="rounded-[22px] border border-white/10 bg-white/[0.05] p-5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#67f3bd]/15 text-[#9af3c1]">{index % 2 === 0 ? <ShieldCheck className="h-4 w-4" /> : <UserRoundCheck className="h-4 w-4" />}</span><p className="mt-6 text-sm font-bold leading-relaxed text-slate-200">{rule}</p></div>)}</div></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><Eyebrow>What changes</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">Your team starts with the full story.</h2></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{outcomes.map(({ title, copy }, index) => <div key={title} className="rounded-[24px] border border-slate-200 bg-white p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e9faf3] text-[11px] font-extrabold text-[#087c5a]">0{index + 1}</span><h3 className="mt-7 text-base font-extrabold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p></div>)}</div></div></section>

      <section className="border-t border-slate-200 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-3xl"><h2 className="text-center font-heading text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">Questions before you begin</h2><div className="mt-10"><FAQAccordion items={faq} /></div></div></section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[38px] bg-[#092331] px-6 py-16 text-center text-white sm:px-12 sm:py-20"><div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#46eaae]/20 blur-[100px]" /><div className="relative mx-auto max-w-3xl"><Eyebrow dark>From chat to actual work</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-6xl">Let the next enquiry arrive ready to work on.</h2><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href="https://app.leadbuddie.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#67f3bd] px-5 py-3.5 text-sm font-extrabold text-[#06271f]">Start your trial<ArrowRight className="h-4 w-4" /></a><Link href="/demo" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3.5 text-sm font-bold text-white">Book a walkthrough</Link></div></div></div></section>
    </>
  )
}
