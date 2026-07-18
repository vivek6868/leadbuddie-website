/*
 * Truth & Safety — compact trust band for owners burned by chatbots before.
 * Story in one glance: Buddie never guesses. Four short, confident proof
 * points, each backed by a real product behaviour (not a marketing promise).
 * Server component — pure CSS, mobile-first (2-col → 4-col grid).
 */
import { P } from './atoms'

function IconShieldAlert({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 13c0 5-3.5 7.5-7.5 9-4-1.5-7.5-4-7.5-9V5l7.5-3 7.5 3z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  )
}
function IconPauseCircle({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <line x1="10" x2="10" y1="15" y2="9" />
      <line x1="14" x2="14" y1="15" y2="9" />
    </svg>
  )
}
function IconUserCheck({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  )
}
function IconShieldCheck({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 13c0 5-3.5 7.5-7.5 9-4-1.5-7.5-4-7.5-9V5l7.5-3 7.5 3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

const PROOFS: [React.ReactNode, string, string][] = [
  [<IconShieldAlert key="a" />, 'Never invents prices', 'If it doesn’t know, it says the team will confirm — never a made-up number.'],
  [<IconPauseCircle key="b" />, 'Stops when you say stop', 'Paused customers, disabled follow-ups and mutes are enforced on every single message.'],
  [<IconUserCheck key="c" />, 'Hands over like a professional', 'Ask for a human and your team is brought in — Buddie steps back.'],
  [<IconShieldCheck key="d" />, 'You approve what it learns', 'Nothing changes without your yes.'],
]

export function TruthSafety() {
  return (
    <section className="border-y border-border bg-black/[0.015] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">No guesswork</div>
          <h2 className="mt-3 font-heading text-[1.75rem] font-bold leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-[2rem]">
            Buddie never guesses.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
          {PROOFS.map(([icon, title, sub], i) => (
            <div key={i} className="rounded-[18px] border border-border bg-bg-card p-5">
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: P.successSoft, color: P.success }}
              >
                {icon}
              </span>
              <div className="mt-3.5 text-sm font-bold tracking-tight text-text-primary">{title}</div>
              <p className="mt-1.5 text-xs leading-relaxed text-text-muted">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
