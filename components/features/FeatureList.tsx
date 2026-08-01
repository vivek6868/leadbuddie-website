import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FEATURES } from '@/lib/constants'
import * as Icons from 'lucide-react'
import { FeatureCard } from './FeatureCard'

const FEATURE_ICONS = {
  Sparkles: Icons.Sparkles, GraduationCap: Icons.GraduationCap, ListChecks: Icons.ListChecks,
  Mic: Icons.Mic, Languages: Icons.Languages, Hand: Icons.Hand, RefreshCcw: Icons.RefreshCcw,
  Clock: Icons.Clock, Zap: Icons.Zap, CheckCircle2: Icons.CheckCircle2, ShieldCheck: Icons.ShieldCheck,
  MessageSquare: Icons.MessageSquare, Kanban: Icons.Kanban, PackagePlus: Icons.PackagePlus,
} as const

export function FeatureList() {
  return (
    <>
      <Section className="overflow-hidden bg-[#07111f] pb-20 pt-28 text-white md:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#25d366]/15 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8bf0aa]"><span className="h-1.5 w-1.5 rounded-full bg-brand" />The LeadBuddie system</p>
          <h1 className="mt-5 font-heading text-5xl font-extrabold leading-[0.94] tracking-[-0.065em] sm:text-6xl">Everything around a <span className="text-[#79eea0]">useful customer conversation.</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">Buddie handles the repeatable work. Your team gets the context, controls and next action to move customers forward.</p>
        </div>
      </Section>
      <Section background="white">
        <SectionHeader label="Capabilities" title="Built for what happens after the first message." description="From the first reply to a qualified request, LeadBuddie keeps every conversation accurate, accountable and easy for your team to act on." centered />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = FEATURE_ICONS[feature.icon as keyof typeof FEATURE_ICONS] ?? Icons.Sparkles
            return <FeatureCard key={feature.id} {...feature} icon={Icon} index={index} />
          })}
        </div>
      </Section>
    </>
  )
}
