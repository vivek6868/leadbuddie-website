import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Bot,
  CalendarClock,
  Check,
  CircleCheckBig,
  ClipboardCheck,
  Droplets,
  FileSpreadsheet,
  IndianRupee,
  MessageCircleMore,
  PackageCheck,
  RefreshCw,
  Route,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  UsersRound,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { FAQAccordion } from '@/components/ui/FAQAccordion'

const APP_URL = 'https://app.leadbuddie.com'

export const WATER_TREATMENT_FAQ = [
  {
    question: 'Do I need WhatsApp to use LeadBuddie for my water-treatment business?',
    answer: 'No. You can begin with customer records, installed units, service due, visit work and AMC cycles inside the LeadBuddie workspace. Connect WhatsApp only when you want eligible messaging and automation.',
  },
  {
    question: 'Can I bring my existing customer data from Excel?',
    answer: 'LeadBuddie supports structured customer and installed-unit onboarding. The exact import path depends on the quality and columns in your source data, so the records should be reviewed before service dates or renewal actions are activated.',
  },
  {
    question: 'How is this different from customer-record software?',
    answer: 'The water-treatment system is organised around recurring work: the installed unit, service cycle, request, visit, history, AMC or renewal and the next service. Buddie helps prepare the next action from that operating context.',
  },
  {
    question: 'Can Buddie automatically send service and renewal messages?',
    answer: 'Eligible workflows can use Watch, Approval or Auto after the business rules, templates, consent and messaging setup are ready. The workspace and manual operating workflows do not require WhatsApp.',
  },
  {
    question: 'Does a technician need a separate LeadBuddie login?',
    answer: 'The operating workflow can keep assignment and visit status with the office team. Technician messaging can be added when configured; the exact field experience depends on the workflow selected for the business.',
  },
  {
    question: 'Will LeadBuddie invent the next service date?',
    answer: 'No. A next cycle should come from a real service or installation anchor and the business service rule. Missing or uncertain data should be reviewed rather than converted into a fabricated due date.',
  },
]

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <div className={`inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] ${dark ? 'text-[#9af3c1]' : 'text-[#087c5a]'}`}><span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-[#67f3bd] shadow-[0_0_14px_#67f3bd]' : 'bg-[#00a878]'}`} />{children}</div>
}

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return <a href={APP_URL} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#67f3bd] px-5 py-3.5 text-sm font-extrabold text-[#06271f] shadow-[0_18px_46px_rgba(71,235,173,0.24)] transition hover:-translate-y-0.5 hover:bg-[#8af7cd]">{children}<ArrowRight className="h-4 w-4" /></a>
}

function HeroOperationsCard() {
  return (
    <div className="rounded-[30px] border border-white/15 bg-[#071d2a]/90 p-4 shadow-[0_34px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-5">
      <div className="flex items-center justify-between border-b border-white/10 pb-4"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#67f3bd] text-[#06271f]"><Droplets className="h-5 w-5" /></span><div><p className="text-sm font-extrabold text-white">Water operations</p><p className="mt-0.5 text-[10px] text-slate-400">Illustrative operating view</p></div></div><span className="rounded-full bg-[#67f3bd]/10 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#9af3c1]">Live cycle</span></div>
      <div className="mt-4 grid grid-cols-3 gap-2">{[['Due', CalendarClock], ['Visits', Wrench], ['Renewals', RefreshCw]].map(([label, Icon]) => { const I = Icon as LucideIcon; return <div key={String(label)} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3"><I className="h-4 w-4 text-[#67f3bd]" /><p className="mt-5 text-xs font-bold text-white">{String(label)}</p><p className="mt-1 text-[9px] text-slate-500">Ready to review</p></div> })}</div>
      <div className="mt-3 rounded-2xl border border-[#67f3bd]/20 bg-[#0d3029] p-4"><div className="flex gap-3"><Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#67f3bd]" /><div><p className="text-xs font-bold text-[#dbfff0]">Buddie prepared the context</p><p className="mt-1 text-[10px] leading-relaxed text-[#9fcfbe]">Customer, installed unit, previous service and next action are together for review.</p></div></div></div>
    </div>
  )
}

const LIFECYCLE: { title: string; icon: LucideIcon }[] = [
  { title: 'Customer', icon: UsersRound },
  { title: 'Installed unit', icon: PackageCheck },
  { title: 'Service cycle', icon: RefreshCw },
  { title: 'Service due', icon: CalendarClock },
  { title: 'Request', icon: ClipboardCheck },
  { title: 'Visit', icon: Wrench },
  { title: 'History', icon: CircleCheckBig },
  { title: 'AMC / renewal', icon: IndianRupee },
  { title: 'Next cycle', icon: Route },
]

function LifecycleRail() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9">
      {LIFECYCLE.map(({ title, icon: Icon }, index) => (
        <div key={title} className="relative rounded-[22px] border border-slate-200 bg-white p-4 shadow-[0_12px_36px_rgba(15,23,42,0.05)] lg:min-h-36">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e5faf2] text-[#087c5a]"><Icon className="h-4 w-4" /></span>
          <p className="mt-6 text-xs font-extrabold leading-tight text-slate-900">{title}</p>
          <span className="absolute right-3 top-3 text-[9px] font-bold text-slate-300">0{index + 1}</span>
        </div>
      ))}
    </div>
  )
}

function CustomerMemoryScene() {
  return (
    <div className="rounded-[30px] border border-slate-200 bg-[#f7faf9] p-3 shadow-[0_28px_70px_rgba(15,60,48,0.1)] sm:p-5">
      <div className="rounded-[24px] bg-white p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4"><div><p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#087c5a]">Customer memory</p><p className="mt-1 text-base font-extrabold text-slate-950">One relationship, every cycle</p></div><span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 text-slate-700"><UsersRound className="h-5 w-5" /></span></div>
        <div className="mt-4 grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl bg-[#092331] p-4 text-white"><p className="text-[10px] font-bold text-slate-400">Installed product</p><p className="mt-2 text-sm font-extrabold">RO purifier · Home</p><div className="mt-5 space-y-2 text-[10px] text-slate-300"><p className="flex justify-between"><span>Installation</span><span className="font-bold text-white">Recorded</span></p><p className="flex justify-between"><span>Service interval</span><span className="font-bold text-white">Configured</span></p><p className="flex justify-between"><span>AMC status</span><span className="font-bold text-[#8af7cd]">Visible</span></p></div></div>
          <div className="space-y-2">{[['Installation completed', 'The unit begins its recorded history.'], ['Service visit recorded', 'Work, charges and outcome remain attached.'], ['Next service prepared', 'A real completion event can continue the cycle.']].map(([title, copy], index) => <div key={title} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-[10px] font-extrabold text-[#087c5a] shadow-sm">{index + 1}</span><div><p className="text-xs font-bold text-slate-900">{title}</p><p className="mt-0.5 text-[10px] leading-relaxed text-slate-500">{copy}</p></div></div>)}</div>
        </div>
      </div>
    </div>
  )
}

function ServiceMissionScene() {
  return (
    <div className="rounded-[30px] border border-slate-200 bg-[#f7faf9] p-3 shadow-[0_28px_70px_rgba(15,60,48,0.1)] sm:p-5">
      <div className="rounded-[24px] bg-[#092331] p-4 text-white sm:p-5"><div className="flex items-center justify-between"><div><p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#8af7cd]">Service mission</p><p className="mt-1 text-base font-extrabold">From request to completed visit</p></div><Wrench className="h-5 w-5 text-[#67f3bd]" /></div><div className="mt-5 grid grid-cols-4 gap-2">{['Requested', 'Assigned', 'Visited', 'Recorded'].map((step, index) => <div key={step} className={`rounded-xl border p-2.5 ${index < 3 ? 'border-[#67f3bd]/25 bg-[#67f3bd]/10' : 'border-white/10 bg-white/[0.05]'}`}><p className="text-[9px] font-bold text-slate-300">{step}</p><div className={`mt-3 h-1.5 rounded-full ${index < 3 ? 'bg-[#67f3bd]' : 'bg-white/15'}`} /></div>)}</div></div>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1.2fr_0.8fr]"><div className="rounded-[22px] border border-slate-200 bg-white p-4"><p className="text-xs font-extrabold text-slate-900">Context travels with the job</p><div className="mt-4 grid grid-cols-2 gap-2">{['Customer & address', 'Installed product', 'Reported issue', 'Previous service'].map(item => <span key={item} className="rounded-xl bg-slate-50 px-3 py-2.5 text-[10px] font-bold text-slate-600">✓ {item}</span>)}</div></div><div className="rounded-[22px] border border-[#bcebd8] bg-[#e9faf3] p-4"><UserRoundCheck className="h-5 w-5 text-[#087c5a]" /><p className="mt-4 text-xs font-extrabold text-[#0b3c31]">People confirm the work</p><p className="mt-2 text-[10px] leading-relaxed text-[#477468]">Assignment, exceptions and completion remain visible to the team.</p></div></div>
    </div>
  )
}

function RenewalScene() {
  return (
    <div className="rounded-[30px] border border-slate-200 bg-[#f7faf9] p-3 shadow-[0_28px_70px_rgba(15,60,48,0.1)] sm:p-5">
      <div className="grid gap-3 sm:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[24px] bg-[#092331] p-5 text-white"><RefreshCw className="h-5 w-5 text-[#67f3bd]" /><p className="mt-8 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#8af7cd]">Renewal cycle</p><p className="mt-2 text-xl font-extrabold tracking-[-0.04em]">Know what is due before revenue goes quiet.</p><p className="mt-3 text-xs leading-relaxed text-slate-400">Prepare the customer context, review the next step, record the outcome.</p></div>
        <div className="rounded-[24px] border border-slate-200 bg-white p-4"><div className="flex items-center justify-between"><p className="text-xs font-extrabold text-slate-950">Renewal worklist</p><span className="rounded-full bg-amber-50 px-2 py-1 text-[9px] font-bold text-amber-700">Needs review</span></div><div className="mt-4 space-y-2">{[['Contract context', 'Plan and expiry are visible'], ['Next action', 'Follow-up is prepared'], ['Outcome', 'Renewed, pending or needs attention']].map(([title, copy], index) => <div key={title} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"><span className="grid h-7 w-7 place-items-center rounded-lg bg-white text-[10px] font-extrabold text-[#087c5a]">0{index + 1}</span><div><p className="text-[11px] font-bold text-slate-900">{title}</p><p className="mt-0.5 text-[9px] text-slate-500">{copy}</p></div></div>)}</div></div>
      </div>
    </div>
  )
}

const OUTCOMES = [
  { icon: CalendarClock, title: 'See due work', copy: 'Give the office a focused list of service and renewal work that needs attention.' },
  { icon: ShieldCheck, title: 'Use real operating context', copy: 'Prepare actions from the customer, installed product, history and configured rules.' },
  { icon: UserRoundCheck, title: 'Keep people in control', copy: 'Let the team decide assignments, payments, exceptions and final commitments.' },
  { icon: Route, title: 'Continue the cycle', copy: 'Use a completed outcome as the foundation for the next legitimate service event.' },
]

const OPERATIONS_GUIDES = [
  {
    label: 'Complete guide',
    title: 'Water purifier service management software in 2026',
    copy: 'The complete operating loop from installed-unit memory to service visits, AMC renewals and the next cycle.',
    href: '/blog/water-purifier-service-management-software-guide-2026',
  },
  {
    label: 'Service due',
    title: 'Track service-due dates without guessing',
    copy: 'Use valid service anchors, configured intervals and a review queue for incomplete records.',
    href: '/blog/water-purifier-service-due-date-system',
  },
  {
    label: 'Field work',
    title: 'Build a reliable RO technician job-card workflow',
    copy: 'Carry each request through assignment, completion, payment status and the correct next action.',
    href: '/blog/ro-technician-job-card-workflow',
  },
]

export function WaterTreatmentAgentPage() {
  return (
    <>
      <section className="relative isolate min-h-[820px] overflow-hidden bg-[#061722] px-4 pb-20 pt-28 text-white sm:px-6 md:pt-36 lg:px-8">
        <Image src="/images/brand/water-operations-hero-v1.png" alt="A water purifier business owner and technician reviewing service work" fill priority sizes="100vw" className="object-cover object-[67%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#061722_0%,rgba(6,23,34,0.97)_36%,rgba(6,23,34,0.56)_62%,rgba(6,23,34,0.08)_100%)]" /><div className="absolute inset-0 bg-[linear-gradient(0deg,#061722_0%,transparent_50%)]" />
        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]"><div className="max-w-2xl"><Eyebrow dark>Agentic operations for water treatment</Eyebrow><h1 className="mt-6 font-heading text-[3.2rem] font-extrabold leading-[0.92] tracking-[-0.07em] sm:text-7xl lg:text-[5.15rem]">Run every service cycle. <span className="text-[#7cf4c5]">Recover every next step.</span></h1><p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-slate-300 sm:text-lg">LeadBuddie connects customers, installed units, service work, visits and AMC renewals—then helps your team understand what is due and prepare what happens next.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><PrimaryButton>Start with your operations</PrimaryButton><Link href="/demo" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.07] px-5 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/[0.13]">Book a walkthrough</Link></div><div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-400"><span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#67f3bd]" /> No WhatsApp required to begin</span><span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#67f3bd]" /> Built for recurring service work</span></div></div><div className="relative mx-auto mt-auto w-full max-w-md self-end pb-3 lg:translate-y-10"><HeroOperationsCard /></div></div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left"><p className="text-sm font-extrabold text-slate-900">Start with customer and service operations.</p><p className="text-xs font-bold text-slate-500">Connect WhatsApp later for eligible messages, reminders and job updates.</p></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"><div className="max-w-3xl"><Eyebrow>The complete operating loop</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl">The sale is only the beginning.</h2></div><p className="max-w-lg text-base leading-relaxed text-slate-600 lg:pb-1">A purifier business earns the relationship again through every service, visit and renewal. LeadBuddie keeps that chain visible.</p></div><LifecycleRail /></div></section>

      <section className="bg-[#eaf3f0] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center"><div><Eyebrow>Customer and installed-unit memory</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">Know what was installed before deciding what comes next.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">The customer record connects the product, installation, service history, AMC context and the next legitimate cycle. Buddie works from that memory instead of guessing from a loose contact record.</p></div><CustomerMemoryScene /></div></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[1.14fr_0.86fr] lg:items-center"><ServiceMissionScene /><div><Eyebrow>Service execution</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">Give each visit a mission, context and completion.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">The office can review the request, assign work and keep the outcome attached to the customer. When messaging is configured, the same structured context can support technician and customer updates.</p></div></div></div></section>

      <section className="bg-[#061722] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"><div><Eyebrow dark>AMC and renewal work</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-5xl">Turn an expiry date into visible work.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300">Buddie can help prepare renewal work from a real contract and customer record. Your team reviews the commercial action, records the outcome and continues the relationship.</p></div><RenewalScene /></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><Eyebrow>Channel choice</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl">LeadBuddie runs the work. WhatsApp can carry the message.</h2></div><div className="mt-12 grid gap-5 lg:grid-cols-2"><div className="rounded-[30px] border border-[#bcebd8] bg-[#e9faf3] p-6 sm:p-8"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#092331] text-[#67f3bd]"><Bot className="h-5 w-5" /></span><p className="mt-8 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#087c5a]">Core operating system</p><h3 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-slate-950">Works from the LeadBuddie workspace</h3><ul className="mt-6 space-y-3 text-sm font-bold text-slate-700">{['Customer and installed-unit records', 'Service due and visit work', 'AMC and renewal context', 'Team review and completion'].map(item => <li key={item} className="flex items-center gap-3"><Check className="h-4 w-4 text-[#087c5a]" />{item}</li>)}</ul></div><div className="rounded-[30px] border border-slate-200 bg-white p-6 sm:p-8"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 text-slate-700"><MessageCircleMore className="h-5 w-5" /></span><p className="mt-8 text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-500">Optional execution channel</p><h3 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-slate-950">Connect WhatsApp when you are ready</h3><p className="mt-5 text-sm leading-relaxed text-slate-600">Use it for eligible customer replies, reminders, confirmations or technician messages after the business rules, consent and provider setup are ready.</p></div></div></div></section>

      <section className="bg-[#eff4f2] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end"><div><Eyebrow>What the system changes</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">Less searching. More completed work.</h2></div><p className="max-w-lg text-base leading-relaxed text-slate-600 lg:justify-self-end">The value is in the operating continuity: the right context appears when a service, visit or renewal needs a decision.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{OUTCOMES.map(({ icon: Icon, title, copy }) => <div key={title} className="rounded-[24px] border border-slate-200 bg-white p-5"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#e9faf3] text-[#087c5a]"><Icon className="h-5 w-5" /></span><h3 className="mt-7 text-base font-extrabold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p></div>)}</div></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center"><div><Eyebrow>Start from the business you have</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">Bring the data in carefully. Activate the cycle with confidence.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">Existing customer and service data needs identity checks, clean installed-unit links and trustworthy dates. The goal is a useful operating foundation, not a blind spreadsheet upload.</p></div><div className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_24px_65px_rgba(15,23,42,0.08)] sm:p-7">{[[FileSpreadsheet, 'Map existing data', 'Review customer, product and service columns before import.'], [ShieldCheck, 'Resolve uncertain records', 'Keep ambiguous matches and missing dates visible for review.'], [Sparkles, 'Activate one workflow', 'Begin with a focused service or renewal cycle, then expand.']].map(([Icon, title, copy], index) => { const I = Icon as LucideIcon; return <div key={String(title)} className={`flex gap-4 py-5 ${index ? 'border-t border-slate-100' : ''}`}><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#092331] text-[#67f3bd]"><I className="h-5 w-5" /></span><div><p className="text-sm font-extrabold text-slate-950">{String(title)}</p><p className="mt-1 text-xs leading-relaxed text-slate-600">{String(copy)}</p></div></div> })}</div></div></section>

      <section className="bg-[#061722] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end"><div><Eyebrow dark>Water operations library</Eyebrow><h2 className="mt-5 max-w-3xl font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-5xl">Practical guides for the work behind every service cycle.</h2></div><p className="max-w-lg text-sm leading-relaxed text-slate-300 lg:justify-self-end">Use these playbooks to design the workflow before deciding where automation and messaging should help.</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{OPERATIONS_GUIDES.map((guide, index) => <Link key={guide.href} href={guide.href} className="group flex min-h-72 flex-col rounded-[28px] border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:border-[#67f3bd]/45 hover:bg-white/[0.09]"><div className="flex items-center justify-between"><span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#8af7cd]">{guide.label}</span><span className="text-xs font-bold text-slate-500">0{index + 1}</span></div><h3 className="mt-9 text-2xl font-extrabold leading-tight tracking-[-0.035em] text-white">{guide.title}</h3><p className="mt-4 text-sm leading-relaxed text-slate-400">{guide.copy}</p><span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-extrabold text-[#8af7cd]">Read the guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div></div></section>

      <section className="border-t border-slate-200 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-3xl"><h2 className="text-center font-heading text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">Questions from water-treatment businesses</h2><div className="mt-10"><FAQAccordion items={WATER_TREATMENT_FAQ} /></div></div></section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[38px] bg-[#092331] px-6 py-16 text-center text-white sm:px-12 sm:py-20"><div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#46eaae]/20 blur-[100px]" /><div className="relative mx-auto max-w-3xl"><Eyebrow dark>One customer. Every future cycle.</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-6xl">Build the operating memory your service business deserves.</h2><p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300">Start with the workspace. Add Buddie actions and communication channels as the business is ready.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><PrimaryButton>Start your trial</PrimaryButton><Link href="/demo" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/[0.08]">Book a walkthrough</Link></div></div></div></section>
    </>
  )
}
