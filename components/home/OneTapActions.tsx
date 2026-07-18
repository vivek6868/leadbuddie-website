/*
 * One-Tap Actions — the "tap instead of twenty questions" wow.
 * Story in one glance: instead of a long question-answer chat, Buddie sends a
 * tap-to-fill card right inside WhatsApp → the customer fills it in seconds →
 * the owner receives a complete, structured request. No form builder to set up
 * — Buddie assembles the form from the owner's own services and hours.
 * Server component — pure CSS, mobile-first (columns stack, arrow rotates).
 * Additive to BookingWow — that section shows the chat-led booking flow, this
 * one shows the tap-to-fill form flow for faster, higher-detail requests.
 */
import { Pill, P } from './atoms'

const BULLETS: [string, string][] = [
  ['Forms build themselves', 'From your services and hours — no form builder, nothing to set up.'],
  ['Chat never breaks', 'Customers can always just type instead — the form is a shortcut, not a wall.'],
  ['Checked before it’s confirmed', 'Every booking is matched against your real availability first.'],
]

function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-bg-card px-3 py-2.5">
      <div className="text-[9px] font-semibold uppercase tracking-wide text-text-muted">{label}</div>
      <div className="mt-0.5 flex items-center justify-between text-[0.8125rem] font-medium text-text-primary">
        {value}
        <span className="text-text-muted" aria-hidden>
          ▾
        </span>
      </div>
    </div>
  )
}

function FlowArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 py-1 lg:py-0">
      <span className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-brand">{label}</span>
      <span
        aria-hidden
        className="flex h-8 w-8 items-center justify-center rounded-full text-base font-extrabold text-white shadow-sm"
        style={{ background: P.brandGrad }}
      >
        <span className="lg:hidden">↓</span>
        <span className="hidden lg:inline">→</span>
      </span>
    </div>
  )
}

export function OneTapActions() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">One-Tap Bookings &amp; Quotes</div>
          <h2 className="mt-3 font-heading text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-4xl">
            Your customers tap. Buddie books.
          </h2>
          <p className="mt-3.5 text-[0.97rem] leading-relaxed text-text-secondary">
            Instead of a long question-by-question chat, Buddie sends a tap-to-fill card right inside
            WhatsApp — dates, choices, details filled in seconds. You receive a complete, structured
            request, ready to act on.
          </p>
        </div>

        {/* Flow: WhatsApp form sheet → owner receives a complete request */}
        <div className="grid items-center gap-5 lg:grid-cols-[minmax(0,0.95fr)_auto_minmax(0,1.05fr)] lg:gap-7">
          {/* 1. The WhatsApp flow sheet Buddie sends */}
          <div className="rounded-[22px] border border-border bg-bg-card p-5">
            <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted">
              Buddie sends a form — right inside WhatsApp
            </div>

            <div className="mt-3 overflow-hidden rounded-2xl border border-border bg-bg-elevated">
              <div className="border-b border-border px-3.5 py-3">
                <div className="text-sm font-bold tracking-tight text-text-primary">Book your visit</div>
              </div>
              <div className="flex flex-col gap-2 p-3.5">
                <FieldRow label="What do you need?" value="Site Visit" />
                <FieldRow label="Preferred date" value="Choose a date 📅" />
                <div className="flex gap-1.5">
                  {['Morning', 'Afternoon', 'Evening'].map((t, i) => (
                    <span
                      key={t}
                      className="flex-1 rounded-lg border px-2 py-1.5 text-center text-[10.5px] font-semibold"
                      style={
                        i === 0
                          ? { background: P.chip, borderColor: P.chipBorder, color: P.brandHover }
                          : { borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }
                      }
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-border p-3">
                <div
                  className="rounded-lg py-2 text-center text-xs font-bold text-white"
                  style={{ background: P.brandGrad }}
                >
                  Book now
                </div>
              </div>
            </div>

            <p className="mt-3 text-[0.72rem] leading-snug text-text-muted">
              20 seconds, no typing back and forth — the customer taps through instead of answering
              questions one by one.
            </p>
          </div>

          {/* 2. Arrow */}
          <FlowArrow label="Buddie structures it" />

          {/* 3. What the owner receives */}
          <div
            className="rounded-[24px] border border-border-light bg-bg-card p-5 sm:p-6"
            style={{ boxShadow: `0 26px 64px -30px ${P.glow}` }}
          >
            <div className="mb-3 flex items-center gap-2">
              <span
                className="inline-flex h-6 w-6 items-center justify-center rounded-lg text-xs font-extrabold text-white"
                style={{ background: P.brandGrad }}
              >
                ✦
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-text-muted">
                You receive · complete request
              </span>
            </div>

            <div className="rounded-2xl border border-border bg-bg-elevated p-3.5">
              <div className="flex items-center gap-2.5">
                <span
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm"
                  style={{ background: P.successSoft, color: P.success }}
                  aria-hidden
                >
                  📩
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted">New request</span>
              </div>
              <div className="mt-2.5 text-sm font-bold tracking-tight text-text-primary">
                Quote request — Bali Package
              </div>
              <div className="mt-1 text-xs text-text-muted">4 travellers · 15–22 Dec · from Ramesh</div>
            </div>

            <p className="mt-3.5 text-center text-[0.8125rem] font-medium text-text-secondary">
              Complete details, no back-and-forth.
            </p>
          </div>
        </div>

        {/* Bullets */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {BULLETS.map(([title, sub], i) => (
            <div key={i} className="rounded-2xl border border-border bg-bg-card px-4 py-3.5">
              <div className="text-sm font-semibold text-text-primary">{title}</div>
              <div className="mt-1 text-xs leading-relaxed text-text-muted">{sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Pill style={{ background: P.chip, color: P.brandHover, border: `1px solid ${P.chipBorder}`, fontSize: 11, padding: '5px 12px' }}>
            Works alongside normal WhatsApp chat — nothing forced
          </Pill>
        </div>
      </div>
    </section>
  )
}
