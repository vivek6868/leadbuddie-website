/*
 * How it works — 3-step band: Connect WhatsApp → Turn on Buddie → Get bookings.
 * Server component — pure CSS, responsive 1 → 3 columns with a connecting line.
 */
import { P } from './atoms'

const STEPS = [
  {
    n: '1',
    icon: '🔗',
    title: 'Connect WhatsApp Business',
    desc: 'Link your official WhatsApp Business number in minutes. Works on your existing number — no QR scraping, no new SIM.',
  },
  {
    n: '2',
    icon: '⚙️',
    title: 'Turn on Buddie',
    desc: 'Pick how much to hand over — Watch, Approval, or Auto mode. Set your hours, booking types, and limits.',
  },
  {
    n: '3',
    icon: '📅',
    title: 'Get qualified leads & bookings',
    desc: 'Buddie replies, follows up, filters serious customers, and books calls, demos, and visits to your board.',
  },
]

export function HowItWorksBand() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">How it works</div>
          <h2 className="mt-3 font-heading text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-4xl">
            Live in minutes. Booking by tonight.
          </h2>
        </div>

        <div className="relative grid gap-4 md:grid-cols-3 md:gap-6">
          {/* connecting line on desktop */}
          <div
            aria-hidden
            className="absolute left-[16%] right-[16%] top-[44px] hidden border-t-2 border-dashed border-border md:block"
          />
          {STEPS.map((s) => (
            <div key={s.n} className="relative flex flex-col items-center rounded-[22px] border border-border bg-bg-card p-7 text-center">
              <span
                className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-2xl text-2xl text-white shadow-sm"
                style={{ background: P.brandGrad }}
              >
                {s.icon}
              </span>
              <div className="mt-4 flex items-center gap-2">
                <span
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-extrabold"
                  style={{ background: P.successSoft, color: P.success }}
                >
                  {s.n}
                </span>
                <h3 className="text-base font-bold tracking-tight text-text-primary">{s.title}</h3>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
