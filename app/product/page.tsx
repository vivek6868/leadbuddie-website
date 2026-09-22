import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  Check,
  ClipboardCheck,
  FileText,
  Inbox,
  MessageCircleMore,
  Mic,
  ShieldCheck,
  UsersRound,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { ActionScene, TrainBuddieScene } from '@/components/home/AIEmployeeVisuals'

export const metadata: Metadata = {
  title: 'Product — How LeadBuddie Works | LeadBuddie',
  description:
    'See how Buddie learns your business, answers customers from what you approved, collects the details your team needs and hands the work over with everything attached.',
  keywords:
    'AI employee for business, WhatsApp automation India, customer enquiry software, quote request software, booking requests on WhatsApp, WhatsApp CRM India',
  alternates: { canonical: '/product' },
}

const APP_URL = 'https://app.leadbuddie.com'

const SYSTEMS: { number: string; title: string; copy: string; icon: LucideIcon }[] = [
  { number: '01', title: 'It learns your business', copy: 'Your products, prices, policies and limits — the only things Buddie is ever allowed to tell a customer.', icon: ShieldCheck },
  { number: '02', title: 'It talks like a person', copy: 'A quick question gets a quick answer. A long one gets a short form. Anything tricky comes straight to you.', icon: Workflow },
  { number: '03', title: 'It finishes the job', copy: 'The chat becomes a real lead, quote, booking or order on your team’s list — and then Buddie stops.', icon: ClipboardCheck },
]

const OPERATIONS: { title: string; copy: string; icon: LucideIcon }[] = [
  { title: 'Shared WhatsApp inbox', copy: 'Every conversation, owner, note and next step in one place for the whole team.', icon: Inbox },
  { title: 'The right request every time', copy: 'A package becomes a quote request. A service becomes a booking. One business can do both.', icon: FileText },
  { title: 'Bookings that stay truthful', copy: 'A request is only confirmed after availability and business rules are checked.', icon: CalendarDays },
  { title: 'Voice notes and languages', copy: 'Buddie can use supported voice messages and match the customer’s language when available.', icon: Mic },
  { title: 'Handovers that make sense', copy: 'When a person has to decide, everything the customer already said is right there.', icon: UsersRound },
  { title: 'Clear customer history', copy: 'Every action and follow-up is visible, so no lead feels like a mystery to the next teammate.', icon: MessageCircleMore },
]

function TrialButton({ dark = false }: { dark?: boolean }) {
  return (
    <a href={APP_URL} className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-[0_14px_34px_rgba(37,211,102,0.22)] transition hover:-translate-y-0.5 ${dark ? 'bg-[#25d366] text-[#082315] hover:bg-[#6dec99]' : 'bg-[#092015] text-white hover:bg-[#183126]'}`}>
      Start your 30-day trial <ArrowRight className="h-4 w-4" />
    </a>
  )
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <div className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] ${dark ? 'text-[#82f3a7]' : 'text-[#168a42]'}`}><span className="h-1.5 w-1.5 rounded-full bg-[#25d366]" />{children}</div>
}

export default function ProductPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#07111f] px-4 pb-20 pt-28 text-white sm:px-6 md:pt-36 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="pointer-events-none absolute -right-28 top-16 h-96 w-96 rounded-full bg-[#25d366]/15 blur-[100px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="max-w-xl"><Eyebrow dark>The LeadBuddie product</Eyebrow><h1 className="mt-5 font-heading text-[3rem] font-extrabold leading-[0.94] tracking-[-0.065em] sm:text-6xl">Not a chatbot.<br /><span className="text-[#79eea0]">An operating agent that gets work done.</span></h1><p className="mt-6 text-[1.03rem] leading-relaxed text-slate-300 sm:text-lg">LeadBuddie learns your business, understands what needs attention, prepares the right next action and gives your team the context to finish what matters.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><TrialButton dark /><Link href="/demo" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-5 py-3 text-sm font-bold text-white transition hover:bg-white/[0.1]">Watch the product in action <ArrowRight className="h-4 w-4" /></Link></div></div>
          <TrainBuddieScene dark />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-slate-400"><span>Train by text or voice</span><span className="text-[#25a856]">•</span><span>Product-aware actions</span><span className="text-[#25a856]">•</span><span>Human team collaboration</span></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><Eyebrow>Three things Buddie does well</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl">Your customer sees a simple conversation. Your business gets the right outcome.</h2></div><div className="mt-12 grid gap-3 lg:grid-cols-3">{SYSTEMS.map(({ number, title, copy, icon: Icon }, index) => <div key={title} className={`rounded-[27px] p-6 sm:p-7 ${index === 1 ? 'bg-[#e9faee]' : 'bg-[#f5f7f8]'}`}><div className="flex items-center justify-between"><span className="text-[11px] font-bold tracking-[0.14em] text-[#178b45]">{number}</span><span className="grid h-9 w-9 place-items-center rounded-xl bg-white/70 text-[#178b45]"><Icon className="h-4.5 w-4.5" /></span></div><h3 className="mt-10 text-2xl font-bold tracking-[-0.04em] text-slate-950">{title}</h3><p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">{copy}</p></div>)}</div></div></section>

      <section className="overflow-hidden bg-[#eef4ef] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center"><div><Eyebrow>Train Buddie</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">The owner speaks naturally. Buddie handles the settings.</h2><p className="mt-5 text-base leading-relaxed text-slate-600">Tell it “change warranty from three years to two,” “don’t promise final price,” or “ask Bali customers for dates and travellers.” Buddie works out what changes, shows you the proposal, and only updates production behaviour when you save.</p><div className="mt-8 space-y-3">{['Existing business knowledge is visible on open.', 'On Growth and Scale, one sentence can become a product or service draft for review.', 'The chat stays available for changes at any time.', 'New rules are proposed in plain language before they become live.'].map((item) => <div key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-800"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#25d366] text-[#092015]"><Check className="h-3 w-3 stroke-[3]" /></span>{item}</div>)}</div></div><TrainBuddieScene /></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><Eyebrow>Adaptive conversations</Eyebrow><h2 className="mt-5 max-w-xl font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">The right customer action, not a rigid flow.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">The product your customer asks about tells Buddie what should happen next. A consultation can become a booking. A holiday package can become a quote request. An uncertain financial enquiry can go straight to a human.</p><div className="mt-8 grid gap-2 text-sm font-semibold text-slate-800"><div className="rounded-xl bg-slate-100 px-3.5 py-3">One simple missing detail → natural chat</div><div className="rounded-xl bg-[#eaf9ee] px-3.5 py-3">Small fixed choice → buttons or a list</div><div className="rounded-xl bg-slate-100 px-3.5 py-3">Several validated details → WhatsApp form</div></div></div><ActionScene /></div></section>

      <section className="bg-[#091321] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><Eyebrow dark>Everything your team needs</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-5xl">The AI handles the repeatable work. Your people keep the judgment.</h2></div><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{OPERATIONS.map(({ title, copy, icon: Icon }) => <div key={title} className="rounded-[23px] border border-white/10 bg-white/[0.055] p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#25d366]/13 text-[#77ed9d]"><Icon className="h-5 w-5" /></span><h3 className="mt-7 text-base font-bold tracking-[-0.02em]">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-300">{copy}</p></div>)}</div></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl overflow-hidden rounded-[34px] bg-[#eef5ef] lg:grid-cols-[0.88fr_1.12fr]"><div className="relative min-h-[300px]"><Image src="/images/brand/owner-at-work.png" alt="Business owner reviewing organised customer enquiries" fill className="object-cover object-[72%_center]" sizes="(max-width: 1024px) 100vw, 42vw" /></div><div className="p-8 sm:p-12"><Eyebrow>Made for the owner in the middle of it all</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950">Less time chasing chats. More time doing the work only you can do.</h2><p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">Buddie handles the messages you have answered a hundred times, inside the rules you set, and leaves your team the ones that actually need a human.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><TrialButton /><Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-[#25d366]">See pricing</Link></div></div></div></section>
    </>
  )
}
