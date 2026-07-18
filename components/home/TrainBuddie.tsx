/*
 * Train Buddie — the flagship "teach it like a new employee" wow.
 * Story in one glance: the owner types (or voice-notes) a rule in plain
 * language → Buddie proposes exactly what it learned as a reviewable card →
 * the owner approves before anything goes live. No settings screens.
 * Server component — pure CSS, mobile-first (copy first, mockup second).
 */
import { Pill, P } from './atoms'

/* ── Small inline icons (lucide-style paths, no external import) ─────────── */
function IconMessage({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}
function IconEye({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
function IconRefresh({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12a9 9 0 1 1-2.64-6.36L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  )
}
function IconCheck({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

const BENEFITS: [React.ReactNode, string, string][] = [
  [<IconMessage key="m" />, 'No settings, no forms', 'Your words become its training — text or voice, any language.'],
  [<IconEye key="e" />, 'Shows you exactly what it learned', 'A plain-language proposal, not a config screen. You approve first.'],
  [<IconRefresh key="r" />, 'Keep teaching anytime', 'Correct or add to Buddie’s knowledge whenever you spot a gap.'],
]

const PROPOSAL_LINES = [
  'Next step: Quote Request',
  'I’ll ask: travel dates, number of travellers',
  'I won’t promise: final price',
]

/* Compact voice-note hint — smaller variant of the VoiceAndLanguage waveform. */
function VoiceHint() {
  const bars = [5, 9, 6, 11, 8, 12, 6, 9, 7, 10]
  return (
    <div className="mt-1.5 flex items-center gap-2 self-end">
      <span className="text-[10.5px] font-medium text-text-muted">or say it —</span>
      <span className="flex items-center gap-1.5 rounded-full border border-border bg-bg-elevated px-2 py-1">
        <span
          className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] text-white"
          style={{ background: P.brandGrad }}
          aria-hidden
        >
          ▶
        </span>
        <span className="flex h-3.5 items-end gap-[2px]" aria-hidden>
          {bars.map((h, i) => (
            <span key={i} className="w-[2px] rounded-full" style={{ height: h, background: i < 5 ? P.brand : 'var(--color-border)' }} />
          ))}
        </span>
      </span>
    </div>
  )
}

export function TrainBuddie() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Visual — trainer chat mockup */}
          <div className="order-2 flex justify-center lg:order-1">
            <div
              className="w-full max-w-md rounded-[24px] border border-border-light bg-bg-card p-5 sm:p-6"
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
                  Training Buddie · in your dashboard
                </span>
              </div>

              <div className="flex flex-col">
                {/* Owner teaches — outgoing bubble */}
                <div className="flex flex-col items-end">
                  <div
                    className="max-w-[92%] self-end rounded-2xl rounded-tr-md px-3.5 py-2.5 text-[0.8125rem] leading-snug text-white shadow-sm"
                    style={{ background: P.brandGrad }}
                  >
                    For Bali packages, ask travel dates and number of travellers. Don&rsquo;t promise the
                    final price.
                  </div>
                  <VoiceHint />
                </div>

                {/* Buddie reply with proposal card */}
                <div className="mt-4 max-w-[94%] self-start rounded-2xl rounded-tl-md bg-bg-elevated p-3.5 shadow-sm">
                  <p className="text-[0.8125rem] leading-snug text-text-primary">
                    I’ll update <strong className="font-bold">Bali Package</strong>:
                  </p>

                  <div className="mt-2.5 rounded-xl border border-border bg-bg-card p-3">
                    <div className="flex flex-col gap-1.5">
                      {PROPOSAL_LINES.map((line, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span
                            className="mt-0.5 inline-flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full"
                            style={{ background: P.successSoft, color: P.success }}
                          >
                            <IconCheck size={9} />
                          </span>
                          <span className="text-[0.75rem] leading-snug text-text-secondary">{line}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-bold text-white"
                        style={{ background: P.brandGrad }}
                      >
                        <IconCheck size={10} /> Looks good
                      </span>
                      <span className="inline-flex items-center rounded-lg border border-border px-3 py-1.5 text-[11px] font-semibold text-text-secondary">
                        Edit
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-center text-[0.72rem] leading-snug text-text-muted">
                  Nothing goes live until you approve.
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">Train Buddie</div>
            <h2 className="mt-3 font-heading text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-4xl">
              Train it like a new employee. Just talk.
            </h2>
            <p className="mt-3.5 max-w-lg text-[0.97rem] leading-relaxed text-text-secondary">
              No settings pages, no dropdown forms. Teach Buddie in plain language — by text or voice,
              in any language you speak — and it sets up the right things itself: what to answer, when
              to ask for a booking, what to collect, and what it should never promise.
            </p>

            <ul className="mt-7 flex flex-col gap-4">
              {BENEFITS.map(([icon, title, sub], i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span
                    className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: 'var(--color-sunk)', color: P.brand }}
                  >
                    {icon}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">{title}</div>
                    <div className="mt-0.5 text-xs leading-relaxed text-text-muted">{sub}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <Pill style={{ background: P.chip, color: P.brandHover, border: `1px solid ${P.chipBorder}`, fontSize: 11, padding: '5px 12px' }}>
                Approve first · nothing goes live on its own
              </Pill>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
