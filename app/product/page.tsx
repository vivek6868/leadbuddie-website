import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileText,
  Inbox,
  Languages,
  MessageCircleMore,
  Mic,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Product — LeadBuddie AI Sales Employee for WhatsApp',
  description:
    'See how LeadBuddie learns your business, answers WhatsApp enquiries from approved knowledge, collects the right details, and creates bookings, quote requests and human handovers.',
  keywords:
    'AI sales employee WhatsApp product, WhatsApp booking automation, WhatsApp quote request, product-aware WhatsApp AI, WhatsApp lead management software',
  alternates: { canonical: '/product' },
}

const APP_URL = 'https://app.leadbuddie.com'

const SYSTEMS: { number: string; title: string; copy: string; icon: LucideIcon }[] = [
  { number: '01', title: 'Business truth', copy: 'Products, answers, policies and limits become the facts Buddie can use in customer conversations.', icon: ShieldCheck },
  { number: '02', title: 'Adaptive conversations', copy: 'Buddie chooses chat, buttons, a list, a form or a human handover based on the customer’s real need.', icon: Workflow },
  { number: '03', title: 'Useful action', copy: 'A conversation becomes a qualified lead, quote request, booking, order request or team task—then Buddie stops.', icon: ClipboardCheck },
]

const OPERATIONS: { title: string; copy: string; icon: LucideIcon }[] = [
  { title: 'Shared WhatsApp inbox', copy: 'Every conversation, owner, note and next step in one place for the whole team.', icon: Inbox },
  { title: 'Product-aware requests', copy: 'A package can create a quote request while a service can create a booking. One business can do both.', icon: FileText },
  { title: 'Bookings that stay truthful', copy: 'A request is only confirmed after availability and business rules are checked.', icon: CalendarDays },
  { title: 'Voice notes and languages', copy: 'Buddie understands voice messages and replies in the language your customer uses.', icon: Mic },
  { title: 'Team handover with context', copy: 'When a person needs to decide, your team gets the information already collected.', icon: UsersRound },
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

function QuoteFlow() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_26px_70px_rgba(10,24,45,0.10)] sm:p-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4"><div><div className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">A customer wants Bali</div><div className="mt-1 text-lg font-bold tracking-[-0.03em] text-slate-950">The right action: quote request</div></div><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e9faee] text-[#178b45]"><FileText className="h-5 w-5" /></span></div>
      <div className="mt-5 grid items-center gap-3 md:grid-cols-[0.95fr_auto_1.05fr]">
        <div className="rounded-[20px] bg-[#f6f8f7] p-3.5"><div className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">Buddie asks in WhatsApp</div><div className="mt-3 rounded-xl bg-white p-3 text-xs leading-relaxed text-slate-700 shadow-sm">I can help with a Bali package. Please share your travel dates, departure city and number of travellers.</div><div className="mt-3 rounded-lg bg-[#25d366] px-3 py-2 text-center text-[11px] font-bold text-[#082315]">Open quote form</div></div>
        <span className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-[#e7f9ec] text-[#178b45]"><ArrowRight className="h-4 w-4" /></span>
        <div className="rounded-[20px] border border-[#cbead4] bg-[#f1fbf3] p-3.5"><div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#178b45]"><CheckCircle2 className="h-4 w-4" /> Your team receives</div><div className="mt-3 rounded-xl bg-white p-3"><div className="text-sm font-bold text-slate-950">Bali quote request</div><div className="mt-3 grid grid-cols-2 gap-1.5">{['15–22 Dec', '4 travellers', 'Chennai', 'Bali package'].map((item) => <span key={item} className="rounded-lg bg-slate-50 px-2 py-1.5 text-[10px] font-semibold text-slate-600">{item}</span>)}</div></div></div>
      </div>
    </div>
  )
}

export default function ProductPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#07111f] px-4 pb-20 pt-28 text-white sm:px-6 md:pt-36 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="pointer-events-none absolute -right-28 top-16 h-96 w-96 rounded-full bg-[#25d366]/15 blur-[100px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="max-w-xl"><Eyebrow dark>The LeadBuddie product</Eyebrow><h1 className="mt-5 font-heading text-[3rem] font-extrabold leading-[0.94] tracking-[-0.065em] sm:text-6xl">Not a chatbot.<br /><span className="text-[#79eea0]">An employee that gets work done.</span></h1><p className="mt-6 text-[1.03rem] leading-relaxed text-slate-300 sm:text-lg">LeadBuddie learns your business, understands a customer’s goal, takes the right next action, and gives your team the context to finish what matters.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><TrialButton dark /><Link href="/demo" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-5 py-3 text-sm font-bold text-white transition hover:bg-white/[0.1]">Watch the product in action <ArrowRight className="h-4 w-4" /></Link></div></div>
          <div className="relative"><div className="absolute -inset-7 rounded-full bg-[#7b55dc]/25 blur-3xl" /><Image src="/images/brand/train-buddie-workspace.png" alt="Train Buddie product workspace" width={1536} height={1024} priority className="relative rounded-[24px] border border-white/20 shadow-[0_34px_90px_rgba(0,0,0,0.42)]" /></div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-slate-400"><span>Train by talking</span><span className="text-[#25a856]">•</span><span>Product-aware actions</span><span className="text-[#25a856]">•</span><span>Human team collaboration</span></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><Eyebrow>The system behind every reply</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl">Your customer sees a simple conversation. Your business gets the right outcome.</h2></div><div className="mt-12 grid gap-3 lg:grid-cols-3">{SYSTEMS.map(({ number, title, copy, icon: Icon }, index) => <div key={title} className={`rounded-[27px] p-6 sm:p-7 ${index === 1 ? 'bg-[#e9faee]' : 'bg-[#f5f7f8]'}`}><div className="flex items-center justify-between"><span className="text-[11px] font-bold tracking-[0.14em] text-[#178b45]">{number}</span><span className="grid h-9 w-9 place-items-center rounded-xl bg-white/70 text-[#178b45]"><Icon className="h-4.5 w-4.5" /></span></div><h3 className="mt-10 text-2xl font-bold tracking-[-0.04em] text-slate-950">{title}</h3><p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">{copy}</p></div>)}</div></div></section>

      <section className="overflow-hidden bg-[#eef4ef] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center"><div><Eyebrow>Train Buddie</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">The owner speaks naturally. Buddie handles the settings.</h2><p className="mt-5 text-base leading-relaxed text-slate-600">Tell it “change warranty from three years to two,” “don’t promise final price,” or “ask Bali customers for dates and travellers.” Buddie works out what changes, shows you the proposal, and only updates production behaviour when you save.</p><div className="mt-8 space-y-3">{['Existing business knowledge is visible on open.', 'The chat stays available for changes at any time.', 'New rules are proposed in plain language before they become live.'].map((item) => <div key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-800"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#25d366] text-[#092015]"><Check className="h-3 w-3 stroke-[3]" /></span>{item}</div>)}</div></div><Image src="/images/brand/train-buddie-workspace.png" alt="Buddie proposes a policy change before it is saved" width={1536} height={1024} className="rounded-[25px] border border-white shadow-[0_28px_70px_rgba(14,41,22,0.16)]" /></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><Eyebrow>Adaptive conversations</Eyebrow><h2 className="mt-5 max-w-xl font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">The right customer action, not a rigid flow.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">The product your customer asks about tells Buddie what should happen next. A consultation can become a booking. A holiday package can become a quote request. An uncertain financial enquiry can go straight to a human.</p><div className="mt-8 grid gap-2 text-sm font-semibold text-slate-800"><div className="rounded-xl bg-slate-100 px-3.5 py-3">One simple missing detail → natural chat</div><div className="rounded-xl bg-[#eaf9ee] px-3.5 py-3">Small fixed choice → buttons or a list</div><div className="rounded-xl bg-slate-100 px-3.5 py-3">Several validated details → WhatsApp form</div></div></div><QuoteFlow /></div></section>

      <section className="bg-[#091321] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><Eyebrow dark>Everything your team needs around Buddie</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-5xl">The AI handles the repeatable work. Your people keep the judgment.</h2></div><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{OPERATIONS.map(({ title, copy, icon: Icon }) => <div key={title} className="rounded-[23px] border border-white/10 bg-white/[0.055] p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#25d366]/13 text-[#77ed9d]"><Icon className="h-5 w-5" /></span><h3 className="mt-7 text-base font-bold tracking-[-0.02em]">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-300">{copy}</p></div>)}</div></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl overflow-hidden rounded-[34px] bg-[#eef5ef] lg:grid-cols-[0.88fr_1.12fr]"><div className="relative min-h-[300px]"><Image src="/images/brand/owner-at-work.png" alt="Business owner using LeadBuddie to manage customer enquiries" fill className="object-cover object-[72%_center]" sizes="(max-width: 1024px) 100vw, 42vw" /></div><div className="p-8 sm:p-12"><Eyebrow>Made for the owner in the middle of it all</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950">Less time chasing chats. More time doing the work only you can do.</h2><p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">LeadBuddie does not replace the business owner. It makes sure no useful enquiry waits, no critical fact is lost, and no customer gets stuck without a next step.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><TrialButton /><Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-[#25d366]">See pricing</Link></div></div></div></section>
    </>
  )
}
