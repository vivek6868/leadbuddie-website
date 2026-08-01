import Link from 'next/link'
import { ArrowRight, Check, ClipboardCheck, MessageSquare, ShieldCheck, UsersRound } from 'lucide-react'
import { FAQAccordion } from '@/components/ui/FAQAccordion'

const APP_URL = 'https://app.leadbuddie.com'

const CAPABILITIES = [
  {
    icon: MessageSquare,
    title: 'Start useful conversations',
    copy: 'Buddie can use the business knowledge you approve to answer an enquiry and collect the details needed for the next step.',
  },
  {
    icon: ClipboardCheck,
    title: 'Move work forward',
    copy: 'A conversation can become a qualified lead, quote request, booking, callback or handover instead of another chat to chase.',
  },
  {
    icon: ShieldCheck,
    title: 'Keep the owner in control',
    copy: 'Choose Watch, Approval or Auto behaviour for the workflows you are ready to automate, and pause a conversation when judgment is needed.',
  },
  {
    icon: UsersRound,
    title: 'Hand over with context',
    copy: 'Your team sees the conversation, collected details and next action in one shared workspace.',
  },
]

const FAQS = [
  {
    question: 'What is an AI sales employee?',
    answer: 'It is an AI assistant for WhatsApp-led sales work. It can use the business knowledge and rules you approve to answer enquiries, collect details and create the right next action for your team.',
  },
  {
    question: 'Can I review replies before they are sent?',
    answer: 'Yes. Approval mode lets Buddie prepare a draft for your team to review, edit or send. You can choose where that level of review is appropriate.',
  },
  {
    question: 'How does Buddie avoid making up business details?',
    answer: 'Give Buddie the approved products, policies and answers it may use. When a request needs human judgment or information outside those rules, your team can take over.',
  },
  {
    question: 'What can a conversation become?',
    answer: 'Depending on your business setup, Buddie can gather the details for a lead, quote request, callback, booking or team handover.',
  },
]

export function AiEmployeePage() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <section className="relative overflow-hidden bg-[#07111f] px-4 pb-20 pt-28 text-white sm:px-6 md:pt-36 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="pointer-events-none absolute -right-28 top-16 h-96 w-96 rounded-full bg-[#25d366]/15 blur-[100px]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#82f3a7]"><span className="h-1.5 w-1.5 rounded-full bg-[#25d366]" />AI employee for WhatsApp</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <h1 className="font-heading text-[3rem] font-extrabold leading-[0.94] tracking-[-0.065em] sm:text-6xl">Turn WhatsApp enquiries into <span className="text-[#79eea0]">useful next steps.</span></h1>
              <p className="mt-6 max-w-2xl text-[1.03rem] leading-relaxed text-slate-300 sm:text-lg">LeadBuddie helps Indian service and sales teams teach Buddie what is true for their business, respond within owner-set controls, and give people the context to finish the work.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={APP_URL} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-3 text-sm font-bold text-[#082315] shadow-[0_14px_34px_rgba(37,211,102,0.22)] transition hover:-translate-y-0.5 hover:bg-[#6dec99]">Start your 30-day trial <ArrowRight className="h-4 w-4" /></a>
                <Link href="/demo" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-5 py-3 text-sm font-bold text-white transition hover:bg-white/[0.1]">See the product in action <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
            <div className="rounded-[28px] border border-white/15 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-sm sm:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#91f5af]">A clear handover</p>
              <div className="mt-5 space-y-3 text-sm">
                <div className="rounded-2xl bg-white/[0.08] p-4 text-slate-200">Customer: “Can someone visit this week?”</div>
                <div className="rounded-2xl bg-[#dff9e7] p-4 text-[#092015]">Buddie: collects the service, location and preferred time.</div>
                <div className="flex items-start gap-3 rounded-2xl border border-[#25d366]/25 bg-[#25d366]/10 p-4 text-slate-100"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#6dec99]" />Your team receives an organised request and decides the final confirmation.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl"><p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#168a42]">How Buddie helps</p><h2 className="mt-4 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">Repeatable work for the AI. Judgment for your team.</h2></div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2">{CAPABILITIES.map(({ icon: Icon, title, copy }) => <article key={title} className="rounded-[25px] border border-slate-200 bg-white p-6 shadow-sm"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#eaf9ee] text-[#168a42]"><Icon className="h-5 w-5" /></span><h3 className="mt-8 text-xl font-bold tracking-[-0.03em] text-slate-950">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-[#eef4ef] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><div><p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#168a42]">Owner-set controls</p><h2 className="mt-4 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">Choose how Buddie works for your team.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">Use Watch, Approval or Auto where each makes sense. Auto can handle approved repeatable work, while your team takes over whenever a conversation needs judgment.</p></div><ol className="space-y-3">{[['Watch','Observe conversations and assess what Buddie would do.'],['Approval','Review or edit drafts before your team sends them.'],['Auto','Let Buddie handle approved repeatable work, with a handover when a person needs to decide.']].map(([title, copy], index) => <li key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#092015] text-xs font-bold text-white">0{index + 1}</span><div><h3 className="font-bold text-slate-950">{title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{copy}</p></div></li>)}</ol></div>
      </section>

      <section className="bg-[#091321] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-3xl"><p className="text-center text-[11px] font-bold uppercase tracking-[0.15em] text-[#82f3a7]">Questions before you start?</p><h2 className="mt-4 text-center font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl">Understand the workflow first.</h2><FAQAccordion items={FAQS} className="mt-10" /><div className="mt-10 text-center"><Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#91f5af] hover:text-white">Talk through your use case <ArrowRight className="h-4 w-4" /></Link></div></div></section>
    </div>
  )
}
