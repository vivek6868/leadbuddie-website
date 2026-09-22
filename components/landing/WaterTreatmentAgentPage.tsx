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
    question: 'Do I need WhatsApp to start?',
    answer: 'No. You can start with your customers, the purifiers you installed, service due dates, visits and AMC renewals straight away. Connect your WhatsApp Business number later, only if you want reminders and updates going out on it.',
  },
  {
    question: 'Can I bring my customer list across from Excel?',
    answer: 'Yes. We go through your sheet with you — names, phone numbers, models and dates — and clean up duplicates and gaps before anything goes live. Anything we are not sure about waits for you to confirm instead of becoming a wrong service date.',
  },
  {
    question: 'How is this different from a normal CRM?',
    answer: 'A CRM is built around selling. This is built around what happens after the sale — the purifier you installed, when it needs servicing, who is going, what was charged, and when the AMC runs out. That is where a water business actually makes its money.',
  },
  {
    question: 'Can Buddie send service and renewal messages on its own?',
    answer: 'Yes, once your WhatsApp Business number is connected and your message formats are approved by WhatsApp. Until you are comfortable, keep Buddie on “ask me first” and approve each message with one tap.',
  },
  {
    question: 'Do my technicians need their own login?',
    answer: 'Not necessarily. Your office team can run assignments and visits on its own. If you want, technicians can get their job details and send updates over WhatsApp without installing anything new.',
  },
  {
    question: 'Will it make up a service date?',
    answer: 'Never. A due date only comes from a real service or a verified installation. If the date in your old records is unclear, that customer is flagged for you to check — your team should be able to trust every date on the list.',
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
      <div className="flex items-center justify-between border-b border-white/10 pb-4"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#67f3bd] text-[#06271f]"><Droplets className="h-5 w-5" /></span><div><p className="text-sm font-extrabold text-white">Your water business</p><p className="mt-0.5 text-[10px] text-slate-400">A sample day</p></div></div><span className="rounded-full bg-[#67f3bd]/10 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#9af3c1]">Sample view</span></div>
      <div className="mt-4 grid grid-cols-3 gap-2">{[['Due', CalendarClock], ['Visits', Wrench], ['Renewals', RefreshCw]].map(([label, Icon]) => { const I = Icon as LucideIcon; return <div key={String(label)} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3"><I className="h-4 w-4 text-[#67f3bd]" /><p className="mt-5 text-xs font-bold text-white">{String(label)}</p><p className="mt-1 text-[9px] text-slate-500">Needs a look</p></div> })}</div>
      <div className="mt-3 rounded-2xl border border-[#67f3bd]/20 bg-[#0d3029] p-4"><div className="flex gap-3"><Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#67f3bd]" /><div><p className="text-xs font-bold text-[#dbfff0]">Buddie has it ready</p><p className="mt-1 text-[10px] leading-relaxed text-[#9fcfbe]">The customer, their purifier and their last service — all together before you pick up the phone.</p></div></div></div>
    </div>
  )
}

const LIFECYCLE: { title: string; icon: LucideIcon }[] = [
  { title: 'Customer', icon: UsersRound },
  { title: 'The unit you installed', icon: PackageCheck },
  { title: 'Service plan', icon: RefreshCw },
  { title: 'Due for service', icon: CalendarClock },
  { title: 'Customer calls', icon: ClipboardCheck },
  { title: 'Technician visit', icon: Wrench },
  { title: 'Service history', icon: CircleCheckBig },
  { title: 'AMC renewal', icon: IndianRupee },
  { title: 'Next service', icon: Route },
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
        <div className="flex items-center justify-between border-b border-slate-100 pb-4"><div><p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#087c5a]">One customer file</p><p className="mt-1 text-base font-extrabold text-slate-950">Everything in one place</p></div><span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 text-slate-700"><UsersRound className="h-5 w-5" /></span></div>
        <div className="mt-4 grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl bg-[#092331] p-4 text-white"><p className="text-[10px] font-bold text-slate-400">What you installed</p><p className="mt-2 text-sm font-extrabold">RO purifier · Home</p><div className="mt-5 space-y-2 text-[10px] text-slate-300"><p className="flex justify-between"><span>Installed on</span><span className="font-bold text-white">Saved</span></p><p className="flex justify-between"><span>Service every</span><span className="font-bold text-white">As you set it</span></p><p className="flex justify-between"><span>AMC</span><span className="font-bold text-[#8af7cd]">Active</span></p></div></div>
          <div className="space-y-2">{[['Installed', 'The unit starts its own history from day one.'], ['Serviced', 'What was done and what was charged, saved against that unit.'], ['Next one set', 'Counted from the service you actually did.']].map(([title, copy], index) => <div key={title} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-[10px] font-extrabold text-[#087c5a] shadow-sm">{index + 1}</span><div><p className="text-xs font-bold text-slate-900">{title}</p><p className="mt-0.5 text-[10px] leading-relaxed text-slate-500">{copy}</p></div></div>)}</div>
        </div>
      </div>
    </div>
  )
}

function ServiceMissionScene() {
  return (
    <div className="rounded-[30px] border border-slate-200 bg-[#f7faf9] p-3 shadow-[0_28px_70px_rgba(15,60,48,0.1)] sm:p-5">
      <div className="rounded-[24px] bg-[#092331] p-4 text-white sm:p-5"><div className="flex items-center justify-between"><div><p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#8af7cd]">Service job</p><p className="mt-1 text-base font-extrabold">From the call to a closed visit</p></div><Wrench className="h-5 w-5 text-[#67f3bd]" /></div><div className="mt-5 grid grid-cols-4 gap-2">{['Customer called', 'Technician sent', 'Visit done', 'Written up'].map((step, index) => <div key={step} className={`rounded-xl border p-2.5 ${index < 3 ? 'border-[#67f3bd]/25 bg-[#67f3bd]/10' : 'border-white/10 bg-white/[0.05]'}`}><p className="text-[9px] font-bold text-slate-300">{step}</p><div className={`mt-3 h-1.5 rounded-full ${index < 3 ? 'bg-[#67f3bd]' : 'bg-white/15'}`} /></div>)}</div></div>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1.2fr_0.8fr]"><div className="rounded-[22px] border border-slate-200 bg-white p-4"><p className="text-xs font-extrabold text-slate-900">Your technician gets the full picture</p><div className="mt-4 grid grid-cols-2 gap-2">{['Customer & address', 'The unit installed', 'What went wrong', 'Last service done'].map(item => <span key={item} className="rounded-xl bg-slate-50 px-3 py-2.5 text-[10px] font-bold text-slate-600">✓ {item}</span>)}</div></div><div className="rounded-[22px] border border-[#bcebd8] bg-[#e9faf3] p-4"><UserRoundCheck className="h-5 w-5 text-[#087c5a]" /><p className="mt-4 text-xs font-extrabold text-[#0b3c31]">You confirm the work</p><p className="mt-2 text-[10px] leading-relaxed text-[#477468]">Who goes, what it costs and when it is done stays your call.</p></div></div>
    </div>
  )
}

function RenewalScene() {
  return (
    <div className="rounded-[30px] border border-slate-200 bg-[#f7faf9] p-3 shadow-[0_28px_70px_rgba(15,60,48,0.1)] sm:p-5">
      <div className="grid gap-3 sm:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[24px] bg-[#092331] p-5 text-white"><RefreshCw className="h-5 w-5 text-[#67f3bd]" /><p className="mt-8 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#8af7cd]">Renewals</p><p className="mt-2 text-xl font-extrabold tracking-[-0.04em]">Know who is expiring before they go quiet.</p><p className="mt-3 text-xs leading-relaxed text-slate-400">See the customer, make the call, note the answer.</p></div>
        <div className="rounded-[24px] border border-slate-200 bg-white p-4"><div className="flex items-center justify-between"><p className="text-xs font-extrabold text-slate-950">Renewals list</p><span className="rounded-full bg-amber-50 px-2 py-1 text-[9px] font-bold text-amber-700">Needs a call</span></div><div className="mt-4 space-y-2">{[['Whose AMC it is', 'Plan, value and expiry date'], ['What to do next', 'The follow-up is written for you'], ['What they said', 'Renewed, call back later, or not now']].map(([title, copy], index) => <div key={title} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"><span className="grid h-7 w-7 place-items-center rounded-lg bg-white text-[10px] font-extrabold text-[#087c5a]">0{index + 1}</span><div><p className="text-[11px] font-bold text-slate-900">{title}</p><p className="mt-0.5 text-[9px] text-slate-500">{copy}</p></div></div>)}</div></div>
      </div>
    </div>
  )
}

const OUTCOMES = [
  { icon: CalendarClock, title: 'A clear list every morning', copy: 'Your office opens one screen and knows exactly who to call today.' },
  { icon: ShieldCheck, title: 'No more hunting for details', copy: 'The customer, their purifier and their last visit are already on the screen.' },
  { icon: UserRoundCheck, title: 'You approve what matters', copy: 'Who goes out, what it costs and what a customer is told stays your decision.' },
  { icon: Route, title: 'The next service books itself', copy: 'Close a visit and the next due date is set from the work you actually did.' },
]

const OPERATIONS_GUIDES = [
  {
    label: 'Complete guide',
    title: 'Water purifier service management software in 2026',
    copy: 'What to look for in software that has to run installs, services, renewals and technicians.',
    href: '/blog/water-purifier-service-management-software-guide-2026',
  },
  {
    label: 'Service due',
    title: 'Get service dates your team can trust',
    copy: 'How to get service dates your team can trust — and what to do with the old ones nobody can explain.',
    href: '/blog/water-purifier-service-due-date-system',
  },
  {
    label: 'Field work',
    title: 'Run technician job cards that actually get filled in',
    copy: 'From the customer’s call to a closed visit, money collected and the next service date.',
    href: '/blog/ro-technician-job-card-workflow',
  },
]

export function WaterTreatmentAgentPage() {
  return (
    <>
      <section className="relative isolate min-h-[820px] overflow-hidden bg-[#061722] px-4 pb-20 pt-28 text-white sm:px-6 md:pt-36 lg:px-8">
        <Image src="/images/brand/water-operations-hero-v1.png" alt="A water purifier business owner and technician reviewing service work" fill priority sizes="100vw" className="object-cover object-[67%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#061722_0%,rgba(6,23,34,0.97)_36%,rgba(6,23,34,0.56)_62%,rgba(6,23,34,0.08)_100%)]" /><div className="absolute inset-0 bg-[linear-gradient(0deg,#061722_0%,transparent_50%)]" />
        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]"><div className="max-w-2xl"><Eyebrow dark>For water purifier &amp; RO businesses</Eyebrow><h1 className="mt-6 font-heading text-[3.2rem] font-extrabold leading-[0.92] tracking-[-0.07em] sm:text-7xl lg:text-[5.15rem]">Every service on time. <span className="text-[#7cf4c5]">Every renewal followed up.</span></h1><p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-slate-300 sm:text-lg">Your customers, the purifiers you installed, your service visits and your AMC renewals — in one place. Buddie tells your team who needs attention today and gets the job ready before they start.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><PrimaryButton>Start free</PrimaryButton><Link href="/demo" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.07] px-5 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/[0.13]">Book a walkthrough</Link></div><div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-400"><span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#67f3bd]" /> No WhatsApp required to begin</span><span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#67f3bd]" /> Made for repeat service work, not one-off sales</span></div></div><div className="relative mx-auto mt-auto w-full max-w-md self-end pb-3 lg:translate-y-10"><HeroOperationsCard /></div></div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left"><p className="text-sm font-extrabold text-slate-900">Start with your customers and your service work.</p><p className="text-xs font-bold text-slate-500">Add WhatsApp later for reminders, visit confirmations and technician updates.</p></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"><div className="max-w-3xl"><Eyebrow>What happens after the sale</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl">The sale is only the beginning.</h2></div><p className="max-w-lg text-base leading-relaxed text-slate-600 lg:pb-1">You earn that customer again at every filter change, every complaint and every renewal. LeadBuddie makes sure none of it slips.</p></div><LifecycleRail /></div></section>

      <section className="bg-[#eaf3f0] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center"><div><Eyebrow>One file per customer</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">Nobody has to ask “which model was it?” again.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">Model, install date, warranty, every past visit, AMC status — on one screen. Your office answers in seconds and your technician turns up already knowing the history.</p></div><CustomerMemoryScene /></div></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[1.14fr_0.86fr] lg:items-center"><ServiceMissionScene /><div><Eyebrow>Service visits</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">Send the right person, with the right information.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">Your office sees the complaint, picks a technician and closes the visit with what was done and what was collected. Connect WhatsApp and the customer and the technician can be kept in the loop too.</p></div></div></div></section>

      <section className="bg-[#061722] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"><div><Eyebrow dark>AMC renewals</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-5xl">Stop losing renewals to a forgotten date.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300">Buddie tells you whose AMC is running out, brings up their history and writes the follow-up. Your team makes the call and notes down what the customer said.</p></div><RenewalScene /></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><Eyebrow>WhatsApp, on your terms</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl">Start without WhatsApp. Add it when it helps.</h2></div><div className="mt-12 grid gap-5 lg:grid-cols-2"><div className="rounded-[30px] border border-[#bcebd8] bg-[#e9faf3] p-6 sm:p-8"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#092331] text-[#67f3bd]"><Bot className="h-5 w-5" /></span><p className="mt-8 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#087c5a]">From day one</p><h3 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-slate-950">Everything works on web and mobile</h3><ul className="mt-6 space-y-3 text-sm font-bold text-slate-700">{['Customers and the units you installed', 'Service due dates and visits', 'AMC contracts and renewals', 'Your team, with roles and handovers'].map(item => <li key={item} className="flex items-center gap-3"><Check className="h-4 w-4 text-[#087c5a]" />{item}</li>)}</ul></div><div className="rounded-[30px] border border-slate-200 bg-white p-6 sm:p-8"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 text-slate-700"><MessageCircleMore className="h-5 w-5" /></span><p className="mt-8 text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-500">Whenever you are ready</p><h3 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-slate-950">Connect your WhatsApp Business number</h3><p className="mt-5 text-sm leading-relaxed text-slate-600">Service reminders, visit confirmations, renewal follow-ups and technician updates — sent from your own number, once it is connected and your message formats are approved by WhatsApp.</p></div></div></div></section>

      <section className="bg-[#eff4f2] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end"><div><Eyebrow>What actually changes</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">Less searching. More completed work.</h2></div><p className="max-w-lg text-base leading-relaxed text-slate-600 lg:justify-self-end">Your team stops searching and starts finishing. The right details show up at the moment somebody has to decide something.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{OUTCOMES.map(({ icon: Icon, title, copy }) => <div key={title} className="rounded-[24px] border border-slate-200 bg-white p-5"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#e9faf3] text-[#087c5a]"><Icon className="h-5 w-5" /></span><h3 className="mt-7 text-base font-extrabold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p></div>)}</div></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center"><div><Eyebrow>Start from the business you have</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">Bring your Excel in. We will not guess.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">Old customer lists have duplicate names, missing phone numbers and dates nobody can explain. We sort that out first, so the list your team works from is one they can trust.</p></div><div className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_24px_65px_rgba(15,23,42,0.08)] sm:p-7">{[[FileSpreadsheet, 'We go through your sheet', 'Names, phones, models and dates — checked before anything goes live.'], [ShieldCheck, 'Anything unclear is flagged', 'A record we are unsure about waits for you. It never becomes a wrong due date.'], [Sparkles, 'Go live with one thing', 'Start with service due or renewals, then add the rest.']].map(([Icon, title, copy], index) => { const I = Icon as LucideIcon; return <div key={String(title)} className={`flex gap-4 py-5 ${index ? 'border-t border-slate-100' : ''}`}><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#092331] text-[#67f3bd]"><I className="h-5 w-5" /></span><div><p className="text-sm font-extrabold text-slate-950">{String(title)}</p><p className="mt-1 text-xs leading-relaxed text-slate-600">{String(copy)}</p></div></div> })}</div></div></section>

      <section className="bg-[#061722] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end"><div><Eyebrow dark>Guides</Eyebrow><h2 className="mt-5 max-w-3xl font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-5xl">Practical guides for running a purifier business.</h2></div><p className="max-w-lg text-sm leading-relaxed text-slate-300 lg:justify-self-end">Written for owners and office teams — keeping service dates honest, running job cards, and holding on to renewals.</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{OPERATIONS_GUIDES.map((guide, index) => <Link key={guide.href} href={guide.href} className="group flex min-h-72 flex-col rounded-[28px] border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:border-[#67f3bd]/45 hover:bg-white/[0.09]"><div className="flex items-center justify-between"><span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#8af7cd]">{guide.label}</span><span className="text-xs font-bold text-slate-500">0{index + 1}</span></div><h3 className="mt-9 text-2xl font-extrabold leading-tight tracking-[-0.035em] text-white">{guide.title}</h3><p className="mt-4 text-sm leading-relaxed text-slate-400">{guide.copy}</p><span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-extrabold text-[#8af7cd]">Read the guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div></div></section>

      <section className="border-t border-slate-200 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-3xl"><h2 className="text-center font-heading text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">Questions from water-treatment businesses</h2><div className="mt-10"><FAQAccordion items={WATER_TREATMENT_FAQ} /></div></div></section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[38px] bg-[#092331] px-6 py-16 text-center text-white sm:px-12 sm:py-20"><div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#46eaae]/20 blur-[100px]" /><div className="relative mx-auto max-w-3xl"><Eyebrow dark>Built for the long relationship</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-6xl">Give your service business a memory.</h2><p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300">Start with your customers and their units. Add Buddie’s follow-ups and WhatsApp whenever it suits you.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><PrimaryButton>Start your trial</PrimaryButton><Link href="/demo" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/[0.08]">Book a walkthrough</Link></div></div></div></section>
    </>
  )
}
