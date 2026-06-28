/*
 * Homepage hero — WhatsApp Premium redesign.
 * Left: outcome-first copy + CTAs + Meta-partner trust line.
 * Right: Buddie status card with a floating phone + "ready to pay" notification.
 * Server component — all motion is CSS (globals.css).
 */
import { Button } from '@/components/ui/Button'
import { BuddieFace, Pill, Phone, TypingDots, WhatsAppGlyph, P } from './atoms'

const ACTIVITY = [
  { who: 'Priya S.', what: 'qualified · serious buyer', tone: P.success, icon: '✓' },
  { who: 'Rohan M.', what: 'booked a site visit', tone: P.brand, icon: '📅' },
  { who: 'Aisha K.', what: 'flagged for your call', tone: P.danger, icon: '!' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* backdrop glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 78% 28%, rgba(37,211,102,0.14), transparent 55%), radial-gradient(circle at 18% 72%, rgba(14,165,233,0.06), transparent 60%)',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-16 pt-28 sm:px-6 md:pt-32 lg:grid-cols-[1.18fr_1fr] lg:gap-12 lg:px-8 lg:pb-24">
        {/* Left: copy */}
        <div>
          <Pill
            dot
            dotColor={P.brand}
            className="border text-brand"
            style={{ background: P.chip, borderColor: P.chipBorder }}
          >
            Built for WhatsApp · Made for Indian businesses
          </Pill>

          <h1 className="mt-5 font-heading text-[2.5rem] font-bold leading-[1.04] tracking-[-0.035em] text-text-primary text-balance sm:text-5xl lg:text-[3.5rem]">
            Meet Buddie.<br />
            Your AI <span className="text-brand">Sales Employee</span> for WhatsApp.
          </h1>

          <p className="mt-5 max-w-xl text-lg font-semibold leading-snug text-text-secondary sm:text-xl lg:text-[1.6rem]">
            Replies in seconds, follows up for days, filters serious leads, and books customers automatically.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:text-[1.0625rem]">
            Built for Indian businesses that get leads on WhatsApp. Buddie talks to every enquiry,
            finds the serious customers, and books them for calls, demos, and visits — on the
            <strong className="text-text-primary"> official WhatsApp Business API, not QR scraping.</strong>
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="https://app.leadbuddie.com" variant="primary" size="lg" className="w-full sm:w-auto">
              Start free 30-day trial <span className="ml-1">→</span>
            </Button>
            <Button href="/demo" variant="outline" size="lg" className="w-full sm:w-auto">
              <span className="mr-1.5 text-brand">▶</span> Watch Buddie book a lead
            </Button>
          </div>

          <div className="mt-6">
            <span
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold"
              style={{ background: P.chip, border: `1px solid ${P.chipBorder}`, color: P.success }}
            >
              <WhatsAppGlyph size={13} />
              WhatsApp Business API · Meta Official Partner
            </span>
          </div>

          <div className="mt-4 text-xs text-text-muted sm:text-[0.8125rem]">
            ✓ Works with your existing WhatsApp number &nbsp;·&nbsp; ✓ Set up in minutes &nbsp;·&nbsp; ✓ No credit card
          </div>
        </div>

        {/* Right: Buddie card + floating phone + notification */}
        <HeroVisual />
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-[480px] justify-center pb-10 lg:pb-0">
      {/* Buddie status card */}
      <div
        className="relative w-full rounded-[28px] border border-border p-6 backdrop-blur-xl"
        style={{
          background: 'rgba(255,255,255,0.7)',
          boxShadow: '0 24px 60px -20px rgba(20,20,40,0.12)',
        }}
      >
        {/* Buddie row */}
        <div className="flex items-center gap-4">
          <BuddieFace size={84} halo mood="thinking" floating />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-text-primary">Buddie</span>
              <Pill dot style={{ background: P.successSoft, color: P.success, fontSize: 10.5, padding: '3px 8px' }}>
                on shift
              </Pill>
            </div>
            <div className="mt-1 text-[0.78rem] text-text-secondary">
              Sales employee · WhatsApp
            </div>
            <div className="mt-2 flex gap-3.5 text-[0.7rem] text-text-muted">
              <span><strong className="text-[0.8rem] font-bold text-text-primary">23</strong> handled</span>
              <span><strong className="text-[0.8rem] font-bold text-text-primary">14</strong> qualified</span>
              <span><strong className="text-[0.8rem] font-bold text-text-primary">6</strong> booked</span>
            </div>
          </div>
        </div>

        {/* Right now */}
        <div className="mt-4 rounded-2xl border border-border bg-bg-elevated p-3.5">
          <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted">Right now</div>
          <div className="mt-1.5 text-[0.8125rem] leading-relaxed text-text-primary">
            Booking a demo for <strong>Karan G.</strong> — confirming tomorrow 6 PM and adding it to your Bookings board.
          </div>
          <div className="mt-2 flex items-center gap-2">
            <TypingDots color={P.brand} size={5} />
            <span className="text-[11px] text-text-muted">confirming slot…</span>
          </div>
        </div>

        {/* Mini activity log */}
        <div className="mt-3.5 flex flex-col gap-1.5">
          {ACTIVITY.map((it, i) => (
            <div key={i} className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[0.72rem] text-text-primary">
              <span
                className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] text-[10px] font-extrabold"
                style={{ background: 'rgba(0,0,0,0.04)', color: it.tone }}
              >
                {it.icon}
              </span>
              <strong className="font-semibold">{it.who}</strong>
              <span className="text-text-secondary">{it.what}</span>
              <span className="ml-auto text-[10px] text-text-muted">now</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating phone, peek bottom-left */}
      <div className="absolute -left-4 -bottom-6 z-20 hidden -rotate-6 sm:block lg:-bottom-14 lg:-left-14">
        <Phone
          width={138}
          name="Ramesh K."
          hint="Buddie · typing"
          messages={[
            { side: 'in', text: 'I want a demo tomorrow evening', time: '11:00' },
            { side: 'out', ai: true, text: 'Done! Demo booked for tomorrow 6 PM ✅ You’ll get a reminder.', time: '11:00' },
          ]}
        />
      </div>

      {/* Floating Bookings-board card, top-right */}
      <div
        className="lb-float-fast absolute -top-1.5 -right-3 z-30 max-w-[244px] rounded-2xl border px-3.5 py-3 backdrop-blur-md"
        style={{
          background: 'rgba(255,255,255,0.95)',
          borderColor: 'var(--color-border-light)',
          boxShadow: '0 16px 36px -12px rgba(20,20,40,0.18)',
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-lg text-sm font-extrabold text-white"
            style={{ background: P.brandGrad }}
          >
            📅
          </span>
          <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-text-muted">
            Bookings board · Just now
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2 rounded-xl border border-border bg-bg-elevated px-2.5 py-2">
          <span
            className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded text-[10px] font-extrabold"
            style={{ background: P.successSoft, color: P.success }}
          >
            ✓
          </span>
          <div className="min-w-0">
            <div className="text-xs font-bold text-text-primary">Demo · Tomorrow 6 PM</div>
            <div className="text-[10px] font-semibold" style={{ color: P.success }}>Booked · Ramesh K.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
