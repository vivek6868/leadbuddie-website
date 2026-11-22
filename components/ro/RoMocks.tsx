import type { RoVisualCopy } from '@/lib/ro/visuals'

/**
 * Fictional sample only. Not a customer, not a live screen, not a usage count.
 * Areas are Coimbatore localities so an RO owner can read the shape of a record.
 */
const PEOPLE = [
  { name: 'Lakshmi Nair', area: 'RS Puram, Coimbatore', model: 'Sample RO 8-stage', due: '12 Jan 2026', amcEnd: '11 Apr 2026', amount: '₹3,500', renewal: false },
  { name: 'Karthik Raman', area: 'Gandhipuram, Coimbatore', model: 'Sample RO 10-stage', due: '2 Feb 2026', amcEnd: '1 Nov 2025', amount: '₹4,200', renewal: true },
  { name: 'Meena Iyer', area: 'Peelamedu, Coimbatore', model: 'Sample RO under-sink', due: '20 Oct 2025', amcEnd: '19 Jan 2026', amount: '₹2,800', renewal: false },
] as const

function Figure({
  caption,
  alt,
  tone = 'light',
  children,
}: {
  caption: string
  alt: string
  tone?: 'light' | 'dark'
  children: React.ReactNode
}) {
  return (
    <figure className="min-w-0">
      <div role="img" aria-label={alt}>
        <div aria-hidden="true">{children}</div>
      </div>
      <figcaption className={`mt-3 text-xs leading-relaxed ${tone === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
        {caption}
      </figcaption>
    </figure>
  )
}

function Chrome({ title, sample, children }: { title: string; sample: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_18px_50px_-28px_rgba(15,23,42,0.35)]">
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3">
        <p className="text-sm font-extrabold text-slate-950">{title}</p>
        <span className="shrink-0 rounded-full bg-[#e9faf3] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#087c5a]">
          {sample}
        </span>
      </div>
      {children}
    </div>
  )
}

export function CustomerListMock({ copy, tone = 'light' }: { copy: RoVisualCopy; tone?: 'light' | 'dark' }) {
  const v = copy.customers
  return (
    <Figure caption={v.caption} alt={v.alt} tone={tone}>
      <Chrome title={v.title} sample={copy.sample}>
        <ul>
          {PEOPLE.map((person) => (
            <li key={person.name} className="border-t border-slate-100 px-4 py-3 first:border-t-0">
              <p className="text-sm font-extrabold text-slate-950">{person.name}</p>
              <p className="mt-0.5 text-xs text-slate-500">{person.area} · {person.model}</p>
              <p className="mt-1 text-xs font-semibold text-[#087c5a]">{v.due} · {person.due}</p>
            </li>
          ))}
        </ul>
      </Chrome>
    </Figure>
  )
}

export function ServiceDueMock({ copy }: { copy: RoVisualCopy }) {
  const v = copy.dues
  return (
    <Figure caption={v.caption} alt={v.alt}>
      <Chrome title={v.title} sample={copy.sample}>
        <ul>
          {PEOPLE.map((person) => {
            const open = person.name === 'Meena Iyer'
            return (
              <li key={person.name} className="flex items-start justify-between gap-3 border-t border-slate-100 px-4 py-3 first:border-t-0">
                <div>
                  <p className="text-sm font-extrabold text-slate-950">{person.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{person.area}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-700">{person.due}</p>
                </div>
                <span className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-extrabold ${open ? 'bg-amber-50 text-amber-800' : 'bg-[#e9faf3] text-[#087c5a]'}`}>
                  {open ? v.request : v.upcoming}
                </span>
              </li>
            )
          })}
        </ul>
      </Chrome>
    </Figure>
  )
}

export function JobCardMock({ copy, tone = 'light' }: { copy: RoVisualCopy; tone?: 'light' | 'dark' }) {
  const v = copy.job
  const person = PEOPLE[0]
  return (
    <Figure caption={v.caption} alt={v.alt} tone={tone}>
      <Chrome title={v.title} sample={copy.sample}>
        <div className="space-y-3 px-4 py-4">
          <p className="text-xs font-extrabold text-[#087c5a]">{v.assigned}</p>
          <div>
            <p className="text-base font-extrabold text-slate-950">{person.name}</p>
            <p className="mt-1 text-xs text-slate-500">{v.address}, Coimbatore</p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <p className="rounded-xl bg-slate-50 px-3 py-2 font-semibold text-slate-700">{person.model}</p>
            <p className="rounded-xl bg-slate-50 px-3 py-2 font-semibold text-slate-700">{v.visit}</p>
          </div>
        </div>
      </Chrome>
    </Figure>
  )
}

export function AmcListMock({ copy }: { copy: RoVisualCopy }) {
  const v = copy.amc
  return (
    <Figure caption={v.caption} alt={v.alt}>
      <Chrome title={v.title} sample={copy.sample}>
        <ul>
          {PEOPLE.map((person) => (
            <li key={person.name} className="flex items-start justify-between gap-3 border-t border-slate-100 px-4 py-3 first:border-t-0">
              <div>
                <p className="text-sm font-extrabold text-slate-950">{person.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{person.area}</p>
                <p className="mt-1 text-xs font-semibold text-slate-700">{v.ends} {person.amcEnd} · {person.amount}</p>
              </div>
              <span className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-extrabold ${person.renewal ? 'bg-amber-50 text-amber-800' : 'bg-[#e9faf3] text-[#087c5a]'}`}>
                {person.renewal ? v.renewal : v.active}
              </span>
            </li>
          ))}
        </ul>
      </Chrome>
    </Figure>
  )
}

export function EngineerPhoneMock({ copy, tone = 'dark' }: { copy: RoVisualCopy; tone?: 'light' | 'dark' }) {
  const v = copy.phone
  return (
    <Figure caption={v.caption} alt={v.alt} tone={tone}>
      <div className="mx-auto w-full max-w-[280px] rounded-[36px] border-[8px] border-[#0b3c31] bg-[#071d2a] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
        <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/15" />
        <p className="px-1 text-[11px] font-extrabold text-[#9af3c1]">LeadBuddie Engineer</p>
        <p className="mt-3 px-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-400">{v.jobs}</p>
        <ul className="mt-2 space-y-2">
          {PEOPLE.slice(0, 2).map((person) => (
            <li key={person.name} className="rounded-2xl bg-white/[0.06] px-3 py-2">
              <p className="text-xs font-extrabold text-white">{person.name}</p>
              <p className="mt-0.5 text-[10px] text-slate-400">{person.area}</p>
            </li>
          ))}
        </ul>
        <div className="mt-3 rounded-2xl border border-[#67f3bd]/30 bg-[#0d3029] p-3">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#9af3c1]">{v.card}</p>
          <p className="mt-1 text-xs font-extrabold text-white">{PEOPLE[0].name}</p>
          <p className="mt-0.5 text-[10px] text-slate-300">{PEOPLE[0].model}</p>
          <p className="mt-2 rounded-full bg-[#67f3bd] py-2 text-center text-[11px] font-extrabold text-[#06271f]">{v.complete}</p>
        </div>
      </div>
    </Figure>
  )
}

export function ExcelUploadMock({ copy }: { copy: RoVisualCopy }) {
  const v = copy.upload
  const steps = [v.sheet, v.upload, v.list]
  return (
    <Figure caption={v.caption} alt={v.alt} tone="dark">
      <div className="grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
        {steps.map((step, index) => (
          <div key={step} className="contents">
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] px-3 py-4 text-center">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#9af3c1]">0{index + 1}</p>
              <p className="mt-1 text-sm font-extrabold text-white">{step}</p>
            </div>
            {index < steps.length - 1 ? (
              <span className="hidden text-center text-lg font-bold text-[#67f3bd] sm:block" aria-hidden="true">→</span>
            ) : null}
          </div>
        ))}
      </div>
    </Figure>
  )
}
