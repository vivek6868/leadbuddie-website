import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Languages,
  MessageCircleMore,
  Mic,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'
import { FAQSection } from '@/components/sections/FAQSection'
import { ActionScene, TrainBuddieScene } from '@/components/home/AIEmployeeVisuals'

const APP_URL = 'https://app.leadbuddie.com'

const ESSENTIALS: { title: string; copy: string; icon: LucideIcon }[] = [
  { title: 'One shared lead inbox', copy: 'Your team sees the full context, ownership and next action—not an unread-message pile.', icon: MessageCircleMore },
  { title: 'Bookings and requests', copy: 'Turn conversations into structured work your team can confirm and complete.', icon: CalendarDays },
  { title: 'Voice and every language', copy: 'Buddie understands voice notes and speaks naturally in the customer’s language.', icon: Languages },
  { title: 'A safe human handover', copy: 'When judgment is needed, Buddie brings in your team with the context already collected.', icon: UsersRound },
]

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] ${dark ? 'text-[#8bf0aa]' : 'text-[#168a42]'}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-[#25d366] shadow-[0_0_12px_#25d366]' : 'bg-[#25d366]'}`} />
      {children}
    </div>
  )
}

function TrialButton({ className = '' }: { className?: string }) {
  return (
    <a href={APP_URL} className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-3 text-sm font-bold text-[#082315] shadow-[0_14px_34px_rgba(37,211,102,0.24)] transition hover:-translate-y-0.5 hover:bg-[#65ed94] ${className}`}>
      Start your 30-day trial <ArrowRight className="h-4 w-4" />
    </a>
  )
}

function ConversationCard() {
  return (
    <div className="rounded-[26px] border border-white/15 bg-[#111b2c]/90 p-4 shadow-[0_26px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-5">
      <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#25d366] text-[#092015]"><Sparkles className="h-4 w-4" /></span>
          <div><div className="text-xs font-bold text-white">Buddie is working</div><div className="mt-0.5 text-[10px] text-slate-400">New WhatsApp enquiry</div></div>
        </div>
        <span className="rounded-full bg-[#25d366]/10 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-[#8ff6af]">Live</span>
      </div>
      <div className="mt-4 space-y-2.5 text-[12px] leading-relaxed">
        <div className="max-w-[86%] rounded-2xl rounded-bl-md bg-white/[0.09] px-3 py-2.5 text-slate-200">I need a Bali trip for four people in December.</div>
        <div className="ml-auto max-w-[90%] rounded-2xl rounded-br-md bg-[#dff9e8] px-3 py-2.5 text-[#15351f]">I can help with a Bali package. I’ll collect the trip details so our team can prepare the right options.</div>
        <div className="ml-auto grid max-w-[90%] grid-cols-2 gap-1.5">
          <span className="rounded-lg bg-[#25d366] px-2 py-1.5 text-center text-[10px] font-bold text-[#092015]">Get a quote</span>
          <span className="rounded-lg border border-white/20 px-2 py-1.5 text-center text-[10px] font-semibold text-slate-200">Ask a question</span>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-xl border border-[#58d980]/25 bg-[#173024] px-3 py-2.5 text-[11px] text-[#b9f7ca]">
        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#63e98e]" />
        Next action: quote request, not a false booking confirmation.
      </div>
    </div>
  )
}

function RequestCard() {
  return (
    <div className="rounded-[22px] border border-[#ccead5] bg-white p-4 shadow-[0_20px_46px_rgba(12,40,24,0.11)]">
      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#178b45]"><CheckCircle2 className="h-4 w-4" /> Ready for your team</div>
      <div className="mt-3 text-base font-bold tracking-[-0.025em] text-slate-950">Bali quote request</div>
      <div className="mt-1 text-xs text-slate-500">A complete lead, not just “interested”.</div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {['15–22 Dec', '4 travellers', 'Chennai', 'Bali package'].map((item) => <span key={item} className="rounded-lg bg-[#f4faf6] px-2.5 py-2 text-[11px] font-semibold text-slate-700">{item}</span>)}
      </div>
    </div>
  )
}

function CustomerOutcomeStory() {
  return (
    <div className="relative isolate mt-12 min-h-[740px] overflow-hidden rounded-[34px] bg-[#07111f] shadow-[0_36px_100px_rgba(10,28,19,0.2)] sm:min-h-[700px] lg:min-h-[640px]">
      <Image
        src="/images/stories/travel-owner-ready-lead.webp"
        alt="A travel business owner receiving a qualified customer request from Buddie"
        fill
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="object-cover object-[64%_center] sm:object-[60%_center] lg:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,14,24,0.98)_0%,rgba(5,14,24,0.72)_52%,rgba(5,14,24,0.04)_80%)] lg:bg-[linear-gradient(90deg,rgba(5,14,24,0.98)_0%,rgba(5,14,24,0.86)_36%,rgba(5,14,24,0.12)_69%,rgba(5,14,24,0.2)_100%)]" />

      <div className="absolute left-5 top-5 z-10 rounded-full border border-white/20 bg-[#07111f]/65 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-md sm:left-7 sm:top-7">
        A real day with Buddie
      </div>

      <div className="relative z-10 flex min-h-[740px] items-end p-5 sm:min-h-[700px] sm:p-7 lg:min-h-[640px] lg:items-center lg:p-10 xl:p-14">
        <div className="grid w-full gap-5 lg:grid-cols-[minmax(0,420px)_1fr] lg:items-end lg:gap-10">
          <div className="rounded-[26px] border border-white/15 bg-[#0b1725]/88 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#8ff6af]">9:47 AM · New enquiry</p>
                <p className="mt-1 text-xs font-semibold text-slate-300">You’re already helping another customer</p>
              </div>
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#25d366] text-[#082315]"><MessageCircleMore className="h-4 w-4" /></span>
            </div>
            <div className="mt-4 space-y-2.5 text-[12px] leading-relaxed">
              <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-white px-3.5 py-3 font-semibold text-slate-800">I need a Bali trip for four people in December.</div>
              <div className="ml-auto max-w-[92%] rounded-2xl rounded-br-md bg-[#dcf8e4] px-3.5 py-3 font-semibold text-[#173822]">Absolutely. I’ll collect the trip details so our team can prepare the right options.</div>
              <div className="ml-auto flex max-w-[92%] flex-wrap gap-1.5">
                {['Travel dates', 'Departure city', 'Travellers'].map((item) => <span key={item} className="rounded-full border border-[#70df96]/25 bg-[#153527] px-2.5 py-1.5 text-[10px] font-bold text-[#a7f4bd]">✓ {item}</span>)}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-slate-300"><Sparkles className="h-4 w-4 text-[#9b7cf1]" /> Buddie knows this needs a quote—not a fake booking.</div>
          </div>

          <div className="lg:justify-self-end">
            <div className="mb-3 max-w-sm rounded-2xl border border-white/20 bg-white/90 px-4 py-3 text-sm font-bold text-slate-800 shadow-lg backdrop-blur">
              You open LeadBuddie to work you can act on—not another unread chat.
            </div>
            <div className="max-w-sm"><RequestCard /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PremiumHome() {
  return (
    <>
      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#07111f] px-4 pb-20 pt-28 text-white sm:px-6 md:pt-36 lg:px-8">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
          <Image src="/images/brand/owner-at-work.png" alt="A business owner working on customer enquiries" fill priority className="object-cover object-[74%_center]" sizes="(max-width: 1024px) 100vw, 62vw" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#07111f_0%,rgba(7,17,31,0.93)_31%,rgba(7,17,31,0.18)_68%,rgba(7,17,31,0.06)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,#07111f_0%,transparent_42%)]" />
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:linear-gradient(to_bottom,black,transparent_76%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <Eyebrow dark>AI employee for WhatsApp businesses</Eyebrow>
            <h1 className="mt-5 font-heading text-[3rem] font-extrabold leading-[0.94] tracking-[-0.065em] sm:text-6xl lg:text-[4.8rem]">Stop managing chats.<br /><span className="text-[#77ec9e]">Start moving customers.</span></h1>
            <p className="mt-6 max-w-lg text-[1.03rem] leading-relaxed text-slate-300 sm:text-lg">LeadBuddie turns every WhatsApp enquiry into the right next step: an accurate answer, qualified lead, quote request, booking or a clean handover to your team.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><TrialButton /><Link href="/demo" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-3 text-sm font-bold text-white transition hover:bg-white/[0.12]"><span className="grid h-5 w-5 place-items-center rounded-full border border-white/40 text-[8px]">▶</span> See it in a real chat</Link></div>
            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400"><span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#70ec99]" /> Official WhatsApp Business messaging</span><span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#70ec99]" /> No card to start</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-md self-end lg:translate-y-9"><ConversationCard /></div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left"><p className="text-sm font-semibold text-slate-800">Built for owners whose business already happens on WhatsApp.</p><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Travel · Services · Wellness · Retail · Education</p></div></section>

      <section id="customer-outcome" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-3xl">
              <Eyebrow>Not another chatbot or inbox</Eyebrow>
              <h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl">Your customer feels helped. <span className="text-slate-400">You receive a lead you can act on.</span></h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-slate-600 lg:pb-1">While you run the business, Buddie understands the enquiry, collects only the useful details and prepares the next step for your team.</p>
          </div>
          <CustomerOutcomeStory />
        </div>
      </section>

      <section id="train-buddie" className="scroll-mt-24 overflow-hidden bg-[#eef4ef] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.87fr_1.13fr] lg:items-center"><div><Eyebrow>Train Buddie</Eyebrow><h2 className="mt-5 max-w-xl font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">Teach it exactly like you would teach a new employee.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">No settings maze. Tell Buddie what you sell, what it should ask, what it must never promise and when a team member should take over. It proposes the change before it goes live.</p><div className="mt-8 space-y-3.5">{['Talk by text or voice in your own language.', 'Buddie uses existing products, FAQs and rules as its starting knowledge.', 'Every change is explained in plain language before you save it.'].map((line) => <div key={line} className="flex items-start gap-3 text-sm font-semibold text-slate-800"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#25d366] text-[#092015]"><Check className="h-3 w-3 stroke-[3]" /></span>{line}</div>)}</div><Link href="/product" className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-[#168a42] transition hover:gap-2.5">Explore Train Buddie <ChevronRight className="h-4 w-4" /></Link></div><TrainBuddieScene /></div></section>

      <section id="action-engine" className="scroll-mt-24 bg-[#091321] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"><div><Eyebrow dark>The action engine</Eyebrow><h2 className="mt-5 max-w-xl font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-5xl">Buddie knows when chat is enough—and when an action is better.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300">One easy detail? It asks in chat. A small choice? It sends buttons. Several booking or quote details? It sends a WhatsApp form. When the job is done, Buddie stops.</p><div className="mt-8 flex flex-wrap gap-2">{['Chat for simple details', 'Buttons for quick choices', 'Forms for structured requests', 'Human handover when needed'].map((item) => <span key={item} className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-slate-200">{item}</span>)}</div></div><ActionScene /></div></section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div className="max-w-2xl"><Eyebrow>Everything around the conversation</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">Your team gets clarity, not more work.</h2></div><Link href="/features" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#168a42]">See all capabilities <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{ESSENTIALS.map(({ title, copy, icon: Icon }) => <div key={title} className="rounded-[24px] border border-slate-200 bg-white p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#eff9f1] text-[#168a42]"><Icon className="h-5 w-5" /></span><h3 className="mt-7 text-base font-bold tracking-[-0.025em] text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p></div>)}</div></div></section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[35px] bg-[#07111f] px-6 py-14 text-center text-white sm:px-12 sm:py-20"><div className="absolute -right-20 -top-16 h-72 w-72 rounded-full bg-[#25d366]/20 blur-[90px]" /><div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#7c4fe3]/25 blur-[90px]" /><div className="relative mx-auto max-w-2xl"><Eyebrow dark>Ready when your customers are</Eyebrow><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-5xl">Give every WhatsApp enquiry a capable first response.</h2><p className="mt-5 text-base leading-relaxed text-slate-300">Connect your business number, teach Buddie in plain language, and start moving conversations forward.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><TrialButton /><Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/[0.08]">See pricing</Link></div></div></div></section>
      <FAQSection />
    </>
  )
}
