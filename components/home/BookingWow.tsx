/*
 * Booking Wow — the main "aha" of the homepage.
 * Left: a real WhatsApp chat. Middle: Buddie qualifies + books. Right: the
 * booking lands on the owner's Bookings board, with a "Today's Bookings" view
 * so an SMB owner instantly gets: "I just open Bookings and see ready customers."
 * Server component — pure CSS, mobile-first (stacks vertically, arrow rotates).
 */
import { Phone, Pill, P } from './atoms'

/* ── A single booking-board card ─────────────────────────────────────────── */
function BookingCard({
  type,
  when,
  who,
  status = 'Booked',
}: {
  type: string
  when: string
  who: string
  status?: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-bg-card p-3.5 shadow-sm">
      <span
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base"
        style={{ background: P.successSoft, color: P.success }}
      >
        ✓
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-bold tracking-tight text-text-primary">{type}</div>
        <div className="text-xs text-text-muted">
          {when} · {who}
        </div>
      </div>
      <Pill
        className="shrink-0"
        style={{ background: P.successSoft, color: P.success, fontSize: 10.5, padding: '3px 9px' }}
      >
        {status}
      </Pill>
    </div>
  )
}

/* ── The flow arrow (horizontal on desktop, vertical on mobile) ──────────── */
function FlowArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-1 lg:py-0">
      <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand">{label}</span>
      <span
        aria-hidden
        className="flex h-9 w-9 items-center justify-center rounded-full text-lg font-extrabold text-white shadow-sm"
        style={{ background: P.brandGrad }}
      >
        <span className="lg:hidden">↓</span>
        <span className="hidden lg:inline">→</span>
      </span>
    </div>
  )
}

export function BookingWow() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">The Buddie wow moment</div>
          <h2 className="mt-3 font-heading text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-4xl">
            From WhatsApp chat to booked customer — automatically.
          </h2>
          <p className="mt-3.5 text-[0.97rem] leading-relaxed text-text-secondary">
            A customer says they’re ready. Buddie offers times, confirms the slot, and drops it on
            your Bookings board. You don’t read the chat — you just see a ready customer.
          </p>
        </div>

        {/* Flow: chat → qualify+book → board */}
        <div className="grid items-center gap-5 lg:grid-cols-[minmax(0,260px)_auto_minmax(0,1fr)] lg:gap-7">
          {/* 1. WhatsApp chat */}
          <div className="flex justify-center">
            <Phone
              width={210}
              name="Anjali R."
              hint="Buddie · booking"
              messages={[
                { side: 'in', text: 'I want a demo tomorrow evening', time: '7:42' },
                { side: 'out', ai: true, text: 'Sure! Which works — 5 PM, 6 PM or 7 PM?', time: '7:42' },
                { side: 'in', text: '6 PM is perfect', time: '7:43' },
                { side: 'out', ai: true, text: 'Booked for tomorrow evening ✅ You’ll get a reminder before the call.', time: '7:43' },
              ]}
            />
          </div>

          {/* 2. Arrow */}
          <FlowArrow label="Buddie qualifies & books" />

          {/* 3. Bookings board */}
          <div className="rounded-[24px] border border-border-light bg-bg-secondary/50 p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-sm text-white"
                  style={{ background: P.brandGrad }}
                >
                  📅
                </span>
                <span className="text-sm font-bold tracking-tight text-text-primary">Bookings board</span>
              </div>
              <Pill dot dotColor={P.success} style={{ background: P.successSoft, color: P.success, fontSize: 10.5, padding: '3px 9px' }}>
                live
              </Pill>
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -left-1 -top-1 z-10 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white"
                  style={{ background: P.brandGrad }}
                >
                  Just added
                </span>
                <BookingCard type="Demo" when="Tomorrow · 6:00 PM" who="Anjali R." />
              </div>
              <BookingCard type="Site Visit" when="Wed · 11:00 AM" who="Rohan M." />
              <BookingCard type="Callback" when="Today · 5:30 PM" who="Priya S." />
            </div>
            <p className="mt-4 text-center text-xs text-text-muted">
              No chat-reading. Every serious lead lands here, ready for your team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Today's Bookings — owner's morning view ─────────────────────────────── */
const TODAY = [
  { time: '10:00 AM', type: 'Demo', who: 'Meera S. · Chennai salon enquiry', icon: '🎥' },
  { time: '12:30 PM', type: 'Callback', who: 'Arjun K. · pricing question', icon: '📞' },
  { time: '4:00 PM', type: 'Site Visit', who: 'Suresh P. · RO installation', icon: '🛠️' },
]

export function TodaysBookings() {
  return (
    // overflow-hidden: an inner mockup exceeds 375px viewports by ~10px and, unclipped, gives the
    // whole page a horizontal scroll on phones (found in the Jul 18 mobile design pass).
    <section className="overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Copy */}
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">Your morning, sorted</div>
          <h2 className="mt-3 font-heading text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-4xl">
            Stop reading every chat.<br />Just open Today’s Bookings.
          </h2>
          <p className="mt-4 max-w-md text-[0.97rem] leading-relaxed text-text-secondary">
            While you sleep and serve customers, Buddie handles the chatter and books the serious
            ones. You start your day knowing exactly who to call, demo, and visit — and your team
            knows too.
          </p>
          <ul className="mt-6 flex flex-col gap-2.5">
            {[
              'Only ready customers — no scrolling 200 chats',
              'Your whole team sees the same Today’s list',
              'Reminders go out automatically — fewer no-shows',
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                <span
                  className="mt-0.5 inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md text-[11px] font-extrabold"
                  style={{ background: P.successSoft, color: P.success }}
                >
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Today's Bookings card */}
        <div className="mx-auto w-full max-w-md rounded-[26px] border border-border bg-bg-card p-6 shadow-[0_24px_60px_-24px_rgba(20,20,40,0.18)]">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.1em] text-text-muted">Today’s Bookings</div>
              <div className="mt-0.5 font-heading text-lg font-bold text-text-primary">3 ready customers</div>
            </div>
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-lg text-white"
              style={{ background: P.brandGrad }}
            >
              📅
            </span>
          </div>

          <div className="mt-5 flex flex-col">
            {TODAY.map((b, i) => (
              <div
                key={i}
                className={`flex items-center gap-3.5 py-3.5 ${i < TODAY.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="w-[68px] shrink-0 text-right">
                  <div className="text-sm font-bold tabular-nums text-text-primary">{b.time.split(' ')[0]}</div>
                  <div className="text-[10px] font-semibold uppercase text-text-muted">{b.time.split(' ')[1]}</div>
                </div>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-bg-elevated text-base">
                  {b.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-bold tracking-tight text-text-primary">{b.type}</div>
                  <div className="truncate text-xs text-text-muted">{b.who}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-border bg-bg-elevated px-3.5 py-2.5 text-center text-xs font-medium text-text-secondary">
            Booked by Buddie overnight · 0 missed leads
          </div>
        </div>
      </div>
    </section>
  )
}
