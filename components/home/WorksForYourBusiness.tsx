/*
 * "Works for your business" — vertical grid.
 * Every card shows what Buddie books for that trade + one short WhatsApp
 * example, so each SMB owner thinks "this is for my business also."
 * Server component — pure CSS, responsive 1 → 2 → 3 columns.
 */
import { P } from './atoms'

type Vertical = {
  icon: string
  name: string
  books: string[]
  ask: string
  reply: string
}

const VERTICALS: Vertical[] = [
  {
    icon: '💧',
    name: 'Water treatment',
    books: ['Site Visit', 'AMC Visit', 'Service Visit'],
    ask: 'My RO is leaking, can someone come?',
    reply: 'Service visit booked for tomorrow 11 AM.',
  },
  {
    icon: '💇‍♀️',
    name: 'Salon & spa',
    books: ['Appointment', 'Bridal Consultation'],
    ask: 'Do you have a slot this Saturday?',
    reply: 'Appointment booked — Saturday 4 PM.',
  },
  {
    icon: '🏋️',
    name: 'Gym & fitness',
    books: ['Trial', 'Fitness Assessment'],
    ask: 'Can I try before joining?',
    reply: 'Free trial booked for tomorrow 7 AM.',
  },
  {
    icon: '🩺',
    name: 'Clinic',
    books: ['Consultation', 'Follow-up'],
    ask: 'I need to see the doctor today',
    reply: 'Consultation booked — today 6:30 PM.',
  },
  {
    icon: '✈️',
    name: 'Travel agency',
    books: ['Callback', 'Quote Discussion'],
    ask: 'Can you call me tomorrow?',
    reply: 'Sure — callback booked for 11 AM.',
  },
  {
    icon: '🔧',
    name: 'Home services',
    books: ['Site Visit', 'Inspection'],
    ask: 'Need a quote for deep cleaning',
    reply: 'Site visit booked — Wed 10 AM.',
  },
  {
    icon: '💻',
    name: 'SaaS & service',
    books: ['Demo', 'Callback'],
    ask: 'Can I see how it works?',
    reply: 'Demo booked for tomorrow 5 PM.',
  },
  {
    icon: '📚',
    name: 'Coaching institute',
    books: ['Consultation', 'Demo'],
    ask: 'Details about the NEET batch?',
    reply: 'Counselling session booked — Sat 12 PM.',
  },
  {
    icon: '🛍️',
    name: 'Beauty products',
    books: ['Callback', 'Product Demo'],
    ask: 'Which kit suits oily skin?',
    reply: 'Product demo call booked — today 7 PM.',
  },
]

function VerticalCard({ v }: { v: Vertical }) {
  return (
    <div className="flex flex-col rounded-[20px] border border-border bg-bg-card p-5 transition-shadow hover:shadow-[0_18px_44px_-22px_rgba(20,20,40,0.22)]">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-elevated text-xl">
          {v.icon}
        </span>
        <div className="text-base font-bold tracking-tight text-text-primary">{v.name}</div>
      </div>

      {/* Booking types */}
      <div className="mt-3.5 flex flex-wrap gap-1.5">
        {v.books.map((b, i) => (
          <span
            key={i}
            className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
            style={{ background: P.chip, color: P.brandHover, border: `1px solid ${P.chipBorder}` }}
          >
            {b}
          </span>
        ))}
      </div>

      {/* Mini chat example */}
      <div className="mt-4 flex flex-col gap-1.5 rounded-2xl border border-border bg-bg-elevated p-3">
        <div className="self-start max-w-[88%] rounded-2xl rounded-tl-md bg-bg-card px-3 py-1.5 text-[11px] leading-snug text-text-primary shadow-sm">
          {v.ask}
        </div>
        <div
          className="self-end max-w-[90%] rounded-2xl rounded-tr-md px-3 py-1.5 text-[11px] font-medium leading-snug text-white shadow-sm"
          style={{ background: P.brandGrad }}
        >
          {v.reply} ✅
        </div>
      </div>
    </div>
  )
}

export function WorksForYourBusiness() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">Works for your business</div>
          <h2 className="mt-3 font-heading text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-4xl">
            Made for your business, not a generic bot.
          </h2>
          <p className="mt-3.5 text-[0.97rem] leading-relaxed text-text-secondary">
            Buddie speaks your trade and books the right thing — a site visit, an appointment, a
            trial, a consultation, or a callback. If your leads come on WhatsApp, this is for you.
          </p>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {VERTICALS.map((v, i) => (
            <VerticalCard key={i} v={v} />
          ))}
        </div>

        <p className="mt-7 text-center text-sm text-text-muted">
          Don’t see your business? Buddie supports custom booking types too.
        </p>
      </div>
    </section>
  )
}
