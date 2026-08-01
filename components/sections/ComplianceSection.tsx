import { Section } from '@/components/ui/Section'
import { COMPLIANCE_STATEMENTS } from '@/lib/constants'
import { Check, ShieldCheck } from 'lucide-react'

export function ComplianceSection() {
  return (
    <Section background="elevated">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[30px] bg-[#091321] p-7 text-white shadow-[0_32px_90px_-40px_rgba(9,19,33,0.7)] md:grid-cols-[0.82fr_1.18fr] md:p-12">
        <div>
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#25d366]/15 text-[#86f2a8]"><ShieldCheck className="h-6 w-6" /></span>
          <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.15em] text-[#8bf0aa]">Business messaging, carefully controlled</p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.05em]">Useful automation should still feel safe.</h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-300">LeadBuddie supports incoming conversations and owner-configured follow-ups, campaigns and service reminders. Consent, approved templates and WhatsApp policy still govern what may be sent.</p>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-white/[0.055] p-5 sm:p-7">
          <ul className="space-y-4">
            {COMPLIANCE_STATEMENTS.map((statement) => <li key={statement} className="flex gap-3 text-sm leading-relaxed text-slate-200"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#25d366] text-[#092015]"><Check className="h-3 w-3 stroke-[3]" /></span>{statement}</li>)}
          </ul>
          <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-relaxed text-slate-400">Your team remains in control of business knowledge, customer follow-ups and the moments that need human judgment.</p>
        </div>
      </div>
    </Section>
  )
}
