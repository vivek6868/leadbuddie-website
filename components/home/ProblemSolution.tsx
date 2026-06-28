/*
 * Problem → Solution — names the WhatsApp pain an Indian SMB owner feels every
 * day, then maps each one to a Buddie action. Plain language, no CRM jargon.
 * Server component — pure CSS, stacks on mobile.
 */
import { P } from './atoms'

const PAINS = [
  'Leads come on WhatsApp all day — even at night and on Sundays',
  'You reply late, and the customer goes to whoever answered first',
  'Follow-ups get forgotten in 200 other chats',
  'You can’t tell who’s a serious buyer and who’s just asking',
  'Your team doesn’t know who to call or visit today',
  'There’s no proper booking system — just scattered chats',
]

const SOLUTIONS = [
  'Buddie replies instantly, 24×7, in your customer’s language',
  'Every new lead gets a fast first answer — no one waits',
  'Buddie follows up automatically until they reply or book',
  'Buddie filters the serious leads and flags them for you',
  'Owner and team open one Today’s Bookings list',
  'Ready customers are booked as calls, demos, and visits',
]

export function ProblemSolution() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">The daily WhatsApp headache</div>
          <h2 className="mt-3 font-heading text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-4xl">
            Your leads are on WhatsApp. So is the chaos.
          </h2>
          <p className="mt-3.5 text-[0.97rem] leading-relaxed text-text-secondary">
            Buddie takes over the messy part — replying, following up, and filtering — so you only
            deal with ready customers.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {/* Pain */}
          <div className="rounded-[22px] border border-border bg-bg-card p-6 sm:p-7">
            <div className="mb-4 flex items-center gap-2.5">
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-base font-extrabold"
                style={{ background: P.dangerSoft, color: P.danger }}
              >
                ✕
              </span>
              <h3 className="text-base font-bold text-text-primary">Without Buddie</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {PAINS.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
                  <span
                    className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded text-[10px] font-extrabold"
                    style={{ background: P.dangerSoft, color: P.danger }}
                  >
                    ✕
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div
            className="rounded-[22px] border border-border-light bg-bg-card p-6 sm:p-7"
            style={{ boxShadow: `0 24px 60px -28px ${P.glow}` }}
          >
            <div className="mb-4 flex items-center gap-2.5">
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-base font-extrabold text-white"
                style={{ background: P.brandGrad }}
              >
                ✓
              </span>
              <h3 className="text-base font-bold text-text-primary">With Buddie on shift</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {SOLUTIONS.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-text-primary">
                  <span
                    className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded text-[10px] font-extrabold"
                    style={{ background: P.successSoft, color: P.success }}
                  >
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
