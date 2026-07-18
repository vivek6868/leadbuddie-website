import Link from 'next/link'
import {
  ArrowRight,
  Bot,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  Headphones,
  Languages,
  MessageCircleMore,
  Mic,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { FAQSection } from '@/components/sections/FAQSection'

const APP_URL = 'https://app.leadbuddie.com'

type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

const OPERATIONS: Feature[] = [
  {
    title: 'Reply with your business truth',
    description: 'Buddie uses the products, answers, restrictions and rules you have approved—not generic AI guesses.',
    icon: ShieldCheck,
  },
  {
    title: 'Collect only what matters',
    description: 'It asks for the details required to move a lead forward, then stops instead of creating a long chat.',
    icon: Workflow,
  },
  {
    title: 'Take the right next action',
    description: 'A service can become a booking. A package can become a quote. A product can become an order request.',
    icon: MousePointerClick,
  },
  {
    title: 'Bring in your team at the right moment',
    description: 'When a human needs to decide, Buddie creates a clear handover and gives the team the context they need.',
    icon: UsersRound,
  },
]

const SUPPORTING_FEATURES: Feature[] = [
  {
    title: 'Shared lead inbox',
    description: 'See every WhatsApp enquiry, owner, status and next step in one calm workspace.',
    icon: MessageCircleMore,
  },
  {
    title: 'Voice notes and languages',
    description: 'Understand voice notes and reply naturally in the language your customer uses.',
    icon: Mic,
  },
  {
    title: 'Follow-ups with controls',
    description: 'Follow up when it helps, with quiet hours, pauses and owner controls built in.',
    icon: Clock3,
  },
  {
    title: 'Bookings, requests and reports',
    description: 'Turn conversations into structured work your team can see, act on and measure.',
    icon: CalendarDays,
  },
]

const VERTICALS = [
  {
    label: 'Travel & holidays',
    question: '“I need a Bali package for four people.”',
    action: 'Collect dates, departure city and travellers → create a quote request',
    tone: 'from-[#f4e7d6] via-[#fff7ee] to-white',
  },
  {
    label: 'Wellness & appointments',
    question: '“Can I book a deep-tissue massage?”',
    action: 'Offer a suitable slot → create a booking request',
    tone: 'from-[#dff4eb] via-[#f4fff9] to-white',
  },
  {
    label: 'Local services',
    question: '“I need an RO purifier for my home.”',
    action: 'Collect location and need → create an inspection or quote request',
    tone: 'from-[#e7edff] via-[#f7f8ff] to-white',
  },
  {
    label: 'Retail & product sales',
    question: '“Do you have this shoe in size 9?”',
    action: 'Answer from your catalogue → collect order details or hand over',
    tone: 'from-[#f9e7f0] via-[#fff7fb] to-white',
  },
]

function PrimaryLink({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={APP_URL}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25d366] px-5 py-3 text-sm font-bold text-[#092015] shadow-[0_14px_32px_rgba(37,211,102,0.22)] transition hover:-translate-y-0.5 hover:bg-[#1fba57] focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:ring-offset-2 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  )
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#d5efdd] bg-[#f2fcf5] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.13em] text-[#168a42]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#25d366]" />
      {children}
    </div>
  )
}

function ChatBubble({ children, owner = false }: { children: React.ReactNode; owner?: boolean }) {
  return (
    <div
      className={`max-w-[88%] rounded-[18px] px-3.5 py-2.5 text-[13px] leading-relaxed shadow-sm ${
        owner
          ? 'ml-auto rounded-br-md bg-[#d9f9e4] text-[#102a1b]'
          : 'rounded-bl-md border border-white/10 bg-white/[0.075] text-white/90'
      }`}
    >
      {children}
    </div>
  )
}

function HeroConsole() {
  return (
    <div className="relative mx-auto w-full max-w-[535px]">
      <div className="absolute -right-7 -top-8 h-44 w-44 rounded-full bg-[#25d366]/20 blur-3xl" />
      <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-[#9b7bff]/15 blur-3xl" />

      <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#101a2b]/90 p-4 shadow-[0_32px_90px_rgba(4,10,25,0.46)] backdrop-blur-xl sm:p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-[13px] bg-gradient-to-br from-[#68e993] to-[#1cb958] shadow-[0_8px_22px_rgba(37,211,102,0.23)]">
              <Sparkles className="h-5 w-5 text-[#092015]" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Buddie</div>
              <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25d366]" />
                Handling a new enquiry
              </div>
            </div>
          </div>
          <div className="rounded-full border border-[#25d366]/25 bg-[#25d366]/10 px-2.5 py-1 text-[10px] font-bold text-[#7cf5a7]">
            LIVE
          </div>
        </div>

        <div className="grid gap-3 pt-4 sm:grid-cols-[1.06fr_0.94fr]">
          <div className="rounded-[21px] border border-white/10 bg-[#0b1322] p-3">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.11em] text-slate-500">
              <MessageCircleMore className="h-3.5 w-3.5 text-[#75e89d]" />
              WhatsApp enquiry
            </div>
            <div className="flex flex-col gap-2">
              <ChatBubble>Need a Bali trip for 4 people in December.</ChatBubble>
              <ChatBubble owner>
                I can help with a Bali package. I’ll collect the trip details so our team can prepare the right options.
              </ChatBubble>
              <div className="ml-auto flex w-[88%] flex-wrap gap-1.5">
                {['Get a quote', 'Ask a question'].map((choice, index) => (
                  <span
                    key={choice}
                    className={`rounded-lg px-2 py-1 text-[10px] font-semibold ${
                      index === 0 ? 'bg-[#25d366] text-[#092015]' : 'border border-[#7d8ba4]/35 text-slate-300'
                    }`}
                  >
                    {choice}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[21px] border border-white/10 bg-white/[0.045] p-3">
            <div className="mb-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.11em] text-slate-500">
              <span>Next action</span>
              <FileText className="h-3.5 w-3.5 text-[#a890ff]" />
            </div>
            <div className="rounded-2xl border border-[#25d366]/20 bg-[#173124] p-3">
              <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#84f2aa]">Quote request</div>
              <div className="mt-1 text-sm font-bold text-white">Bali package</div>
              <div className="mt-3 space-y-1.5">
                {['Travel dates', 'Departure city', 'No. of travellers'].map((field) => (
                  <div key={field} className="rounded-lg border border-white/10 bg-white/[0.06] px-2 py-1.5 text-[10px] text-slate-300">
                    {field}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[11px] leading-snug text-slate-400">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#75e89d]" />
              No final price promised. Team receives the complete request.
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-5 rounded-2xl border border-slate-200 bg-white px-3.5 py-3 shadow-[0_18px_40px_rgba(6,16,35,0.17)] sm:-left-12">
        <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">Owner view</div>
        <div className="mt-1 flex items-center gap-2 text-xs font-bold text-slate-900">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-[#e7faed] text-[#198d45]">✓</span>
          Qualified request, ready for your team
        </div>
      </div>
    </div>
  )
}

function TrainDemo() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_26px_70px_rgba(10,24,45,0.10)] sm:p-6">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#e9fbef] blur-3xl" />
      <div className="relative flex items-center gap-3 border-b border-slate-100 pb-4">
        <div className="grid h-10 w-10 place-items-center rounded-[13px] bg-gradient-to-br from-[#8b5cf6] to-[#6332d7] text-white">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-bold text-slate-950">Train Buddie</div>
          <div className="text-[11px] text-slate-500">Teach your AI employee how your business works</div>
        </div>
      </div>

      <div className="relative mt-5 space-y-3">
        <div className="ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-[#e6fbec] px-3.5 py-3 text-[13px] leading-relaxed text-[#123620]">
          For Bali packages, ask for dates, departure city and number of travellers. Never promise the final price.
        </div>
        <div className="max-w-[92%] rounded-2xl rounded-bl-md bg-slate-50 p-3.5 text-[13px] leading-relaxed text-slate-700">
          I’ll update <strong className="font-bold text-slate-950">Bali Package</strong>:
          <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3">
            {[
              'Next step: Quote Request',
              'I’ll collect: dates, departure city, travellers',
              'I won’t promise: final price',
            ].map((line) => (
              <div key={line} className="flex items-start gap-2 py-1 text-[11px] leading-snug text-slate-600">
                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#e8faee] text-[#1a9349]">
                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                </span>
                {line}
              </div>
            ))}
            <div className="mt-3 inline-flex rounded-lg bg-[#202c40] px-3 py-1.5 text-[11px] font-bold text-white">Save changes</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ActionDemo() {
  const formRows = [
    ['What do you need?', 'Site visit'],
    ['Preferred date', 'Choose a date'],
    ['Preferred time', 'Morning'],
  ]

  return (
    <div className="rounded-[30px] border border-slate-200 bg-[#fcfdfc] p-4 shadow-[0_26px_70px_rgba(10,24,45,0.10)] sm:p-6">
      <div className="grid items-center gap-5 md:grid-cols-[0.92fr_auto_1.08fr]">
        <div className="rounded-[22px] border border-slate-200 bg-white p-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Sent in WhatsApp</div>
          <div className="mt-2 text-base font-bold text-slate-950">Book a site visit</div>
          <div className="mt-4 space-y-2">
            {formRows.map(([label, value]) => (
              <div key={label} className="rounded-xl border border-slate-200 px-3 py-2.5">
                <div className="text-[9px] font-bold uppercase tracking-[0.08em] text-slate-400">{label}</div>
                <div className="mt-1 flex items-center justify-between text-xs font-semibold text-slate-700">
                  {value}<span className="text-slate-400">⌄</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl bg-[#25d366] py-2.5 text-center text-xs font-bold text-[#092015]">Continue</div>
        </div>
        <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#e8faee] text-[#178f45]">
          <ArrowRight className="hidden h-4 w-4 md:block" />
          <span className="md:hidden">↓</span>
        </div>
        <div className="rounded-[22px] border border-[#bce7c9] bg-[#effbf2] p-4">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#198947]">
            <CheckCircle2 className="h-4 w-4" />
            Your inbox
          </div>
          <div className="mt-4 rounded-2xl border border-[#cdeed5] bg-white p-4">
            <div className="text-sm font-bold text-slate-950">New site-visit request</div>
            <div className="mt-1 text-xs text-slate-500">Customer details are complete and readable.</div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {['Site visit', '20 July', 'Morning', 'Tiruppur'].map((item) => (
                <div key={item} className="rounded-lg bg-slate-50 px-2.5 py-2 text-[11px] font-semibold text-slate-700">{item}</div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-[#357043]">Buddie validates the request, informs your team and does not pretend it is confirmed before it is.</p>
        </div>
      </div>
    </div>
  )
}

export function PremiumHome() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#09111f] px-4 pb-20 pt-28 text-white sm:px-6 sm:pb-28 md:pt-36 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div className="pointer-events-none absolute -left-40 top-24 h-[32rem] w-[32rem] rounded-full bg-[#5234a6]/25 blur-[100px]" />
        <div className="pointer-events-none absolute right-[-10rem] top-[-8rem] h-[34rem] w-[34rem] rounded-full bg-[#25d366]/20 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.065] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.13em] text-[#a7f7c1]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#25d366] shadow-[0_0_14px_#25d366]" />
              WhatsApp-first AI employee
            </div>
            <h1 className="mt-6 max-w-2xl font-heading text-[2.7rem] font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[4.35rem]">
              Every WhatsApp lead deserves a <span className="text-[#67eb93]">next step.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.04rem] leading-relaxed text-slate-300 sm:text-lg">
              LeadBuddie is the AI sales employee that learns your business, answers enquiries, collects the right details and moves each customer to a booking, quote, order request or your team.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryLink className="bg-[#25d366]">Start your 30-day trial</PrimaryLink>
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.055] px-5 py-3 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/[0.09]">
                <span className="grid h-5 w-5 place-items-center rounded-full border border-white/30 text-[9px]">▶</span>
                Watch a real conversation
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#6be996]" /> Works with your WhatsApp Business number</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#6be996]" /> No card to start</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#6be996]" /> Built on the official WhatsApp Business API</span>
            </div>
          </div>
          <HeroConsole />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-semibold text-slate-700">For businesses where WhatsApp is already the front door.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.09em] text-slate-400">
            <span>Travel</span><span>Wellness</span><span>Local services</span><span>Retail</span><span>Education</span>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <SectionEyebrow>Not another WhatsApp inbox</SectionEyebrow>
            <h2 className="mt-5 max-w-xl font-heading text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Replying is not the job. <span className="text-slate-400">Moving the lead is.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">
              Old WhatsApp tools give you a shared inbox, a chatbot builder and more settings. The owner is still doing the thinking. LeadBuddie is designed to do the useful work after the message arrives.
            </p>
            <Link href="/product" className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-[#168a42] transition hover:gap-2.5">
              Explore the product <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {OPERATIONS.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className={`rounded-[23px] border p-5 ${index === 0 ? 'border-[#bae9c9] bg-[#f2fcf5]' : 'border-slate-200 bg-white'}`}>
                  <div className={`grid h-10 w-10 place-items-center rounded-xl ${index === 0 ? 'bg-[#25d366] text-[#092015]' : 'bg-slate-100 text-slate-700'}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-7 text-base font-bold tracking-[-0.02em] text-slate-950">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="train" className="border-y border-slate-200 bg-[#f7faf8] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.93fr] lg:gap-20">
          <div>
            <SectionEyebrow>Train Buddie</SectionEyebrow>
            <h2 className="mt-5 max-w-xl font-heading text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Teach it like an employee. <span className="text-[#168a42]">Not like software.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              Tell Buddie what to say, what never to promise, which details to collect and when your team should step in. Text or voice works. Buddie turns your words into a clear proposal before changing anything.
            </p>
            <div className="mt-8 space-y-4">
              {[
                ['Talk in your own language', 'Owners can type or send a voice note exactly as they would explain it to a new employee.'],
                ['See the change before it goes live', 'A policy, answer or product action is proposed in plain language for your approval.'],
                ['Keep teaching anytime', '“Remember this” becomes business knowledge without hunting through a settings page.'],
              ].map(([title, description], index) => (
                <div key={title} className="flex gap-3.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#e0f8e7] text-xs font-extrabold text-[#168a42]">0{index + 1}</span>
                  <div><div className="text-sm font-bold text-slate-950">{title}</div><div className="mt-1 text-sm leading-relaxed text-slate-600">{description}</div></div>
                </div>
              ))}
            </div>
          </div>
          <TrainDemo />
        </div>
      </section>

      <section id="actions" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>The action engine</SectionEyebrow>
            <h2 className="mt-5 font-heading text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-5xl">
              The shortest path from enquiry to action.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Buddie does not force every customer into the same script. It chooses the quickest useful interaction from your business rules and the customer’s intent.
            </p>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-4">
            {[
              ['1', 'Customer goal', '“I want a Bali package.”'],
              ['2', 'Business context', 'Bali Package → Quote Request'],
              ['3', 'Best interaction', 'Chat, button, list or a WhatsApp form'],
              ['4', 'Truthful completion', 'Create request, notify team, stop'],
            ].map(([number, label, value], index) => (
              <div key={number} className="relative rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_8px_26px_rgba(20,35,55,0.04)]">
                {index < 3 && <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-slate-400 md:grid"><ChevronRight className="h-3.5 w-3.5" /></div>}
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#168a42]">{number} · {label}</div>
                <div className="mt-3 text-sm font-bold leading-snug text-slate-900">{value}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ActionDemo />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-slate-500">The form is a shortcut, not a wall. If a customer prefers to type, the conversation continues naturally with the same context.</p>
        </div>
      </section>

      <section className="bg-[#101a2b] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.13em] text-[#a7f7c1]">Product-aware conversations</div>
              <h2 className="mt-5 font-heading text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl">One business can have many ways to sell.</h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">The same business might quote a travel package, book a wellness consultation and take a product order. Buddie understands the product first—then selects the right action.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {VERTICALS.map((item) => (
                <div key={item.label} className={`rounded-[22px] bg-gradient-to-br ${item.tone} p-5 text-slate-950`}>
                  <div className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500">{item.label}</div>
                  <div className="mt-5 text-sm font-bold leading-snug">{item.question}</div>
                  <div className="mt-5 border-t border-slate-900/10 pt-3 text-xs leading-relaxed text-slate-600">{item.action}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-[30px] border border-[#c9ead3] bg-[#f0fbf3] p-6 sm:p-8">
              <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-[14px] bg-[#25d366] text-[#092015]"><ShieldCheck className="h-5 w-5" /></span><span className="text-sm font-bold text-slate-950">Built for responsible automatic replies</span></div>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  ['Answers stay in bounds', 'Business knowledge is background truth—not a script for inventing information.'],
                  ['Requests are not false confirmations', 'Availability and business rules are checked before Buddie tells a customer something is confirmed.'],
                  ['Handover is simple', '“A team member will continue shortly” is enough. Customers never need to understand your internal inbox.'],
                  ['Stop means stop', 'Paused contacts, ignored leads and disabled follow-ups are respected at send time.'],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-2xl border border-[#d5efdc] bg-white p-4"><div className="text-sm font-bold text-slate-950">{title}</div><p className="mt-1.5 text-xs leading-relaxed text-slate-600">{body}</p></div>
                ))}
              </div>
            </div>
            <div>
              <SectionEyebrow>Human + AI, not AI vs human</SectionEyebrow>
              <h2 className="mt-5 font-heading text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-5xl">Your team gets context, not chaos.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">LeadBuddie handles the repeatable part. Your people handle judgment, negotiation and closing. Every handover carries the customer’s need and the information already collected.</p>
              <Link href="/how-it-works" className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-[#168a42] transition hover:gap-2.5">See how LeadBuddie works <ChevronRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f8faf9] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center"><SectionEyebrow>Everything around the conversation</SectionEyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-5xl">The operations layer your WhatsApp sales team needs.</h2></div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SUPPORTING_FEATURES.map((feature) => {
              const Icon = feature.icon
              return <div key={feature.title} className="rounded-[22px] border border-slate-200 bg-white p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-700"><Icon className="h-5 w-5" /></span><h3 className="mt-6 text-sm font-bold text-slate-950">{feature.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p></div>
            })}
          </div>
          <div className="mt-9 text-center"><Link href="/features" className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-[#25d366] hover:bg-[#f2fcf5]">See all capabilities <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-[#0a1526] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#6d45d8]/30 blur-[90px]" />
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[#25d366]/20 blur-[90px]" />
          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-[16px] bg-gradient-to-br from-[#75ec9c] to-[#1ab858] text-[#092015]"><Bot className="h-6 w-6" /></div>
            <h2 className="mt-6 font-heading text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl">Give every WhatsApp lead a capable first response.</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300">Connect your number, teach Buddie in plain language, and let it start moving enquiries forward.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><PrimaryLink>Start your 30-day trial</PrimaryLink><Link href="/pricing" className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/[0.08]">See pricing</Link></div>
            <div className="mt-5 text-xs text-slate-400">No credit card required to start · Built for official WhatsApp Business messaging</div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  )
}
