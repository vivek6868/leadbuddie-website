import { Metadata } from 'next'
import { HOW_IT_WORKS_STEPS } from '@/lib/constants'
import * as Icons from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { Section } from '@/components/ui/Section'

const STEP_ICONS = {
  UserPlus: Icons.UserPlus,
  Link: Icons.Link,
  BookOpen: Icons.BookOpen,
  ListChecks: Icons.ListChecks,
  MessagesSquare: Icons.MessagesSquare,
  ShieldCheck: Icons.ShieldCheck,
  CheckCircle: Icons.CheckCircle,
} as const

export const metadata: Metadata = {
  title: 'How LeadBuddie works — AI Sales Employee for WhatsApp',
  description: 'Connect your WhatsApp Business number, teach Buddie your business rules, and give every customer enquiry the right next step.',
  alternates: { canonical: '/how-it-works' },
}

export default function HowItWorksPage() {
  return (
    <>
      <Section className="overflow-hidden bg-[#07111f] pb-20 pt-28 text-white md:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#25d366]/15 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8bf0aa]"><span className="h-1.5 w-1.5 rounded-full bg-brand" />A clear path from chat to action</p>
          <h1 className="mt-5 font-heading text-5xl font-extrabold leading-[0.94] tracking-[-0.065em] sm:text-6xl">Teach Buddie your business. <span className="text-[#79eea0]">It handles the next step.</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">No rigid chatbot flow and no settings maze. You set the truth and the limits; Buddie helps each customer move forward with the right information.</p>
        </div>
      </Section>

      <Section background="white">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl"><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#168a42]">The setup</p><h2 className="mt-4 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">Simple for the owner. Useful for the whole team.</h2></div>
          <ol className="mt-12 space-y-3">
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const Icon = STEP_ICONS[step.icon as keyof typeof STEP_ICONS] ?? Icons.CheckCircle
              return <li key={step.step} data-reveal style={{ ['--reveal-delay' as string]: `${index * 0.06}s` } as React.CSSProperties} className="grid gap-5 rounded-[25px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.18)] sm:grid-cols-[3.5rem_1fr_auto] sm:items-center sm:p-7"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#effaf2] text-[#168a42]"><Icon className="h-5 w-5" strokeWidth={1.8} /></span><div><div className="flex flex-wrap items-center gap-3"><span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#168a42]">Step {step.step}</span><h3 className="font-heading text-xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-2xl">{step.title}</h3></div><p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{step.description}</p></div><span className="hidden text-sm font-bold text-[#168a42] lg:block">Clear next action</span></li>
            })}
          </ol>
        </div>
      </Section>
      <ComplianceSection />
      <CTASection />
    </>
  )
}
