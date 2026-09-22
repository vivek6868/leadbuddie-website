import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  CircleCheckBig,
  ClipboardCheck,
  Droplets,
  FileText,
  Plane,
  RefreshCw,
  Route,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  UserRoundCheck,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { FAQSection } from '@/components/sections/FAQSection'

const APP_URL = 'https://app.leadbuddie.com'

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] ${dark ? 'text-[#9af3c1]' : 'text-[#087c5a]'}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-[#56f2ba] shadow-[0_0_14px_#56f2ba]' : 'bg-[#00a878]'}`} />
      {children}
    </div>
  )
}

function PrimaryButton({ href = APP_URL, children }: { href?: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#67f3bd] px-5 py-3.5 text-sm font-extrabold text-[#06271f] shadow-[0_18px_46px_rgba(71,235,173,0.24)] transition hover:-translate-y-0.5 hover:bg-[#8af7cd]">
      {children} <ArrowRight className="h-4 w-4" />
    </Link>
  )
}

function AgentCommandCenter() {
  const work = [
    { label: 'Service due', detail: 'These customers are due this week', tone: 'bg-[#dafbef] text-[#087c5a]', icon: Wrench },
    { label: 'Visit done', detail: 'Your technician’s report is ready to check', tone: 'bg-[#e8edff] text-[#4858bd]', icon: ClipboardCheck },
    { label: 'AMC renewal', detail: 'This contract runs out in 10 days', tone: 'bg-[#fff2d6] text-[#a55a00]', icon: RefreshCw },
  ]

  return (
    <div className="relative rounded-[30px] border border-white/15 bg-[#081b29]/90 p-4 shadow-[0_36px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-5">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#67f3bd] text-[#06271f]"><Bot className="h-5 w-5" /></span>
          <div><p className="text-sm font-extrabold text-white">Buddie’s list for today</p><p className="mt-0.5 text-[11px] text-slate-400">A water purifier business</p></div>
        </div>
        <span className="rounded-full border border-[#67f3bd]/25 bg-[#67f3bd]/10 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#9af3c1]">Sample view</span>
      </div>
      <div className="mt-4 grid gap-2.5">
        {work.map(({ label, detail, tone, icon: Icon }, index) => (
          <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3">
            <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${tone}`}><Icon className="h-4 w-4" /></span>
            <div className="min-w-0 flex-1"><p className="text-xs font-bold text-white">{label}</p><p className="mt-0.5 truncate text-[10px] text-slate-400">{detail}</p></div>
            <span className="text-[10px] font-bold text-slate-500">0{index + 1}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-2xl border border-[#67f3bd]/20 bg-[#0d3029] p-3.5">
        <div className="flex items-start gap-3">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#67f3bd]" />
          <div><p className="text-xs font-bold text-[#d9ffef]">Ready before you call</p><p className="mt-1 text-[11px] leading-relaxed text-[#a8d9c8]">The customer, the purifier you installed and their last service — already on the screen.</p></div>
        </div>
      </div>
    </div>
  )
}

const OPERATING_STEPS = [
  ['Nothing is forgotten', 'Service dates, renewals and open complaints stay in front of you.'],
  ['The full story, one screen', 'Who the customer is, what you installed, what you did last time.'],
  ['The job comes ready', 'Your team opens it and gets on with the work — no hunting around.'],
  ['You make the calls', 'Who goes out, what it costs, what the customer is told.'],
  ['The next one is set', 'Close today’s visit and the next service is already on the list.'],
]

function OperatingRail() {
  return (
    <div className="mt-12 grid gap-3 lg:grid-cols-5">
      {OPERATING_STEPS.map(([title, copy], index) => (
        <div key={title} className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_16px_48px_rgba(15,23,42,0.05)]">
          <div className="absolute right-3 top-1 font-heading text-6xl font-extrabold text-slate-100 transition group-hover:text-emerald-50">{index + 1}</div>
          <div className="relative">
            <span className="mb-8 grid h-9 w-9 place-items-center rounded-xl bg-[#0a2530] text-[11px] font-extrabold text-[#67f3bd]">0{index + 1}</span>
            <h3 className="text-lg font-extrabold tracking-[-0.03em] text-slate-950">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function WaterWorkboard() {
  return (
    <div className="rounded-[30px] border border-slate-200 bg-[#f8fbfa] p-3 shadow-[0_30px_80px_rgba(15,59,49,0.13)] sm:p-5">
      <div className="rounded-[24px] bg-[#092331] p-4 text-white sm:p-5">
        <div className="flex items-center justify-between">
          <div><p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#8af7cd]">Today</p><p className="mt-1 text-base font-extrabold">What needs doing</p></div>
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.07]"><Droplets className="h-5 w-5 text-[#67f3bd]" /></span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[['Service due', 'Who to call'], ['Visits', 'Who is going'], ['Renewals', 'Who to keep']].map(([label, action]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3"><p className="text-[10px] text-slate-400">{label}</p><p className="mt-2 text-xs font-bold text-white">{action}</p></div>
          ))}
        </div>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[22px] border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between"><p className="text-xs font-extrabold text-slate-950">One customer file</p><span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-700">All together</span></div>
          <div className="mt-4 space-y-3">
            {[
              ['The unit you installed', 'Model, date, where it sits', CircleCheckBig],
              ['What you did last time', 'Every past visit, part and charge', Wrench],
              ['When it is due next', 'Counted from a real service, never guessed', RefreshCw],
            ].map(([title, copy, Icon]) => {
              const IconComponent = Icon as LucideIcon
              return <div key={String(title)} className="flex gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-700"><IconComponent className="h-4 w-4" /></span><div><p className="text-xs font-bold text-slate-900">{String(title)}</p><p className="mt-0.5 text-[10px] text-slate-500">{String(copy)}</p></div></div>
            })}
          </div>
        </div>
        <div className="rounded-[22px] border border-[#bcebd8] bg-[#ebfbf5] p-4">
          <Sparkles className="h-5 w-5 text-[#07805c]" />
          <p className="mt-4 text-sm font-extrabold text-[#0b3c31]">Buddie gets it ready.</p>
          <p className="mt-2 text-xs leading-relaxed text-[#386b5e]">You decide who goes, what it costs and what the customer is told.</p>
          <div className="mt-5 rounded-xl bg-white/80 px-3 py-2.5 text-[10px] font-bold text-[#087c5a]">Waiting for your nod →</div>
        </div>
      </div>
    </div>
  )
}

const VERTICALS: { name: string; label: string; href: string; image: string; icon: LucideIcon; promise: string; steps: string[]; primary?: boolean }[] = [
  {
    name: 'Water treatment', label: 'Primary vertical', href: '/water-purifier-crm', image: '/images/brand/water-operations-hero-v1.png', icon: Droplets,
    promise: 'Customers, the units you installed, service visits and AMC renewals — all in one place.', steps: ['Customers & units', 'Service visits', 'AMC renewals'], primary: true,
  },
  {
    name: 'Travel agencies', label: 'Agent workflow', href: '/travel-agencies', image: '/images/stories/travel-owner-ready-lead.webp', icon: Plane,
    promise: 'Turn “planning Bali in December” into an enquiry your team can actually price.', steps: ['Asks the right questions', 'Gets the details', 'Hands it to you'],
  },
  {
    name: 'Retail businesses', label: 'Agent workflow', href: '/retail-businesses', image: '/images/stories/retail-owner-order-request.webp', icon: ShoppingBag,
    promise: 'Answer “do you have this?” properly, and turn it into an order your team can fill.', steps: ['Finds the right product', 'Asks what is missing', 'Raises the order'],
  },
]

export function PremiumHome() {
  return (
    <>
      <section className="relative isolate min-h-[820px] overflow-hidden bg-[#061722] px-4 pb-20 pt-28 text-white sm:px-6 md:pt-36 lg:px-8">
        <Image src="/images/brand/water-operations-hero-v1.png" alt="A water purifier business owner reviewing service work with a technician" fill priority sizes="100vw" className="object-cover object-[66%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#061722_0%,rgba(6,23,34,0.97)_34%,rgba(6,23,34,0.56)_61%,rgba(6,23,34,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#061722_0%,transparent_48%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-2xl">
            <Eyebrow dark>Built for service businesses in India</Eyebrow>
            <h1 className="mt-6 font-heading text-[3.25rem] font-extrabold leading-[0.92] tracking-[-0.07em] sm:text-7xl lg:text-[5.35rem]">Every customer looked after. <span className="text-[#7cf4c5]">Every single time.</span></h1>
            <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-slate-300 sm:text-lg">Buddie is the teammate who never forgets. Who is due for service, whose AMC is running out, who is still waiting for an answer — it keeps track and hands your team a job that is ready to do.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><PrimaryButton href="/water-purifier-crm">Explore water treatment</PrimaryButton><Link href="/demo" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-5 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/[0.13]">See Buddie in action <ChevronRight className="h-4 w-4" /></Link></div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-400"><span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#67f3bd]" /> Works on your laptop and your phone</span><span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#67f3bd]" /> WhatsApp optional — add it whenever you like</span></div>
          </div>
          <div className="relative mx-auto mt-auto w-full max-w-md self-end pb-3 lg:translate-y-10"><AgentCommandCenter /></div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left"><p className="text-sm font-extrabold text-slate-900">Everything in one place. Your team, your customers, your follow-ups.</p><div className="flex flex-wrap justify-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.13em] text-slate-500"><span className="rounded-full bg-slate-100 px-3 py-1.5">Web &amp; mobile</span><span className="rounded-full bg-slate-100 px-3 py-1.5">Your whole team</span><span className="rounded-full bg-slate-100 px-3 py-1.5">WhatsApp optional</span></div></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"><div className="max-w-3xl"><Eyebrow>What changes in your week</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl">A chatbot answers. Buddie gets the work done.</h2></div><p className="max-w-lg text-base leading-relaxed text-slate-600 lg:pb-1">Most software sits there until somebody opens it. Buddie keeps an eye on your customers all day and tells your team what needs doing — before the customer has to chase you.</p></div><OperatingRail /></div></section>

      <section className="overflow-hidden bg-[#eaf3f0] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center"><div><Eyebrow>Water treatment first</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl">Run the years after the sale.</h2><p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600">The relationship continues through installation, service, parts, payments, AMC and the next cycle. LeadBuddie remembers every bit of it, so nobody has to dig through a register, a diary or an old WhatsApp group.</p><div className="mt-7 space-y-3">{['Start with your customers and the units you installed.', 'See what is due, send a technician, close the visit.', 'Add WhatsApp later if you want reminders going out on their own.'].map(line => <div key={line} className="flex items-start gap-3 text-sm font-bold text-slate-800"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#67f3bd] text-[#06372a]"><Check className="h-3 w-3 stroke-[3]" /></span>{line}</div>)}</div><Link href="/water-purifier-crm" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-[#087c5a]">See how it works for water businesses <ArrowRight className="h-4 w-4" /></Link></div><WaterWorkboard /></div></section>

      <section className="bg-[#061722] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><Eyebrow dark>Three industries we know well</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-6xl">One Buddie. Trained for your trade.</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">Every trade asks different questions and finishes work differently. Buddie learns yours. Water treatment is where we go deepest.</p></div><div className="mt-12 grid gap-5 lg:grid-cols-3">
        {VERTICALS.map(({ name, label, href, image, icon: Icon, promise, steps, primary }) => (
          <Link key={name} href={href} className={`group overflow-hidden rounded-[30px] border bg-[#0b2130] transition hover:-translate-y-1 ${primary ? 'border-[#67f3bd]/45' : 'border-white/10 hover:border-white/25'}`}>
            <div className="relative h-52 overflow-hidden"><Image src={image} alt={`${name} workflow`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-[linear-gradient(0deg,#0b2130_0%,transparent_70%)]" /><span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#061722]/70 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur">{label}</span></div>
            <div className="p-5 sm:p-6"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#67f3bd] text-[#06271f]"><Icon className="h-5 w-5" /></span><h3 className="mt-6 text-2xl font-extrabold tracking-[-0.04em]">{name}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{promise}</p><div className="mt-5 flex flex-wrap gap-2">{steps.map(step => <span key={step} className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1.5 text-[10px] font-bold text-slate-300">{step}</span>)}</div><div className="mt-6 flex items-center gap-2 text-xs font-extrabold text-[#8af7cd]">See how it works <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></div></div>
          </Link>
        ))}
      </div></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center"><div><Eyebrow>You are still the boss</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">Buddie does the running around. You make the calls.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">Buddie can get a job ready and write the message. What it is allowed to say, quote, promise or send is entirely up to you.</p></div><div className="grid gap-3 sm:grid-cols-2">{[
        [ShieldCheck, 'It only says what you approved', 'Your prices, your policies, your answers. Buddie does not make things up to fill a gap.'],
        [UserRoundCheck, 'Nothing goes out without your say-so', 'Let Buddie just watch, ask you before every message, or handle the routine ones on its own.'],
        [FileText, 'The history comes with the job', 'Who the customer is, what you installed and what happened last time — attached to every task.'],
        [Route, 'One job sets up the next', 'Close a visit today and the next service is already waiting on the list.'],
      ].map(([Icon, title, copy]) => { const I = Icon as LucideIcon; return <div key={String(title)} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_14px_42px_rgba(15,23,42,0.05)]"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#e8fbf4] text-[#087c5a]"><I className="h-5 w-5" /></span><h3 className="mt-6 text-base font-extrabold text-slate-950">{String(title)}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{String(copy)}</p></div> })}</div></div></section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[38px] bg-[#092331] px-6 py-16 text-center text-white sm:px-12 sm:py-20"><div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#46eaae]/20 blur-[100px]" /><div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#367c9f]/25 blur-[100px]" /><div className="relative mx-auto max-w-3xl"><Eyebrow dark>See it with your own customers</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-6xl">See what Buddie would do in your business.</h2><p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300">Start with one thing — service due, or renewals. Add the rest once your team is comfortable.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><PrimaryButton>Start your trial</PrimaryButton><Link href="/demo" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/[0.08]">Book a walkthrough</Link></div></div></div></section>
      <FAQSection />
    </>
  )
}
