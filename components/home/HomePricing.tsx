/*
 * Homepage pricing — mirrors the in-app billing page: monthly / annual toggle
 * (annual = 10× monthly, i.e. 2 months free), same plan data as /pricing.
 * Client component (toggle state); keeps the WhatsApp-Premium card design.
 */
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { PRICING_PLANS } from '@/lib/constants'
import { Pill, P } from './atoms'

export function HomePricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">Pricing</div>
          <h2 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-text-primary">
            One employee. Less than your daily coffee budget.
          </h2>
          <p className="mt-3.5 text-[0.97rem] leading-relaxed text-text-secondary">
            30 days free on Growth. Cancel anytime. No card needed to start.
          </p>
        </div>

        {/* Monthly / Annual toggle */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex items-center rounded-full border border-border bg-bg-card p-1 text-xs font-semibold shadow-sm">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-2 transition-all ${!annual ? 'text-white' : 'text-text-secondary'}`}
              style={!annual ? { background: P.brand, boxShadow: '0 8px 24px rgba(37,211,102,0.35)' } : undefined}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 transition-all ${annual ? 'text-white' : 'text-text-secondary'}`}
              style={annual ? { background: P.brand, boxShadow: '0 8px 24px rgba(37,211,102,0.35)' } : undefined}
            >
              Annual
              <span
                className="rounded px-1.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wide"
                style={annual ? { background: 'rgba(255,255,255,0.22)' } : { background: P.successSoft, color: P.success }}
              >
                2 months free
              </span>
            </button>
          </div>
        </div>

        <div className="grid gap-3.5 md:grid-cols-2 xl:grid-cols-4">
          {PRICING_PLANS.map((p) => {
            const monthly = p.price
            const annualTotal = monthly === 0 ? 0 : monthly * 10 // 12 − 2 = 10
            const showTotal = annual ? annualTotal : monthly

            return (
              <div
                key={p.id}
                className={`relative flex flex-col rounded-[22px] border bg-bg-card p-6 ${p.highlighted ? 'border-border-light' : 'border-border'}`}
                style={p.highlighted ? { boxShadow: `0 24px 60px -24px ${P.glow}` } : undefined}
              >
                {p.highlighted && (
                  <span
                    className="absolute -top-2.5 left-6 rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-white"
                    style={{ background: P.brandGrad, boxShadow: `0 6px 14px -4px ${P.glow}` }}
                  >
                    Most popular
                  </span>
                )}
                <div className="text-base font-bold tracking-tight text-text-primary">{p.name}</div>

                {/* Price */}
                {monthly === 0 ? (
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-heading text-[2.75rem] font-extrabold leading-none tracking-[-0.035em] text-text-primary">Free</span>
                  </div>
                ) : (
                  <>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-base font-semibold text-text-secondary">₹</span>
                      <span className="font-heading text-[2.75rem] font-extrabold leading-none tracking-[-0.035em] tabular-nums text-text-primary">
                        {showTotal.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[13px] font-medium text-text-muted">/{annual ? 'yr' : 'mo'}</span>
                    </div>
                    <div className="mt-1.5 min-h-[18px] text-[11px] font-semibold" style={{ color: annual ? P.success : 'var(--color-text-muted)' }}>
                      {annual ? `₹${monthly.toLocaleString('en-IN')}/mo billed annually · save 2 months` : 'Billed monthly'}
                    </div>
                  </>
                )}

                <p className="mt-2.5 min-h-[44px] text-xs leading-relaxed text-text-secondary">{p.description}</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {p.features.slice(0, 5).map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-text-primary">
                      <span
                        className="mt-0.5 inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded text-[9px] font-extrabold"
                        style={{ background: P.successSoft, color: P.success }}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex-1" />
                <div className="mt-5">
                  <Button href="https://app.leadbuddie.com" variant={p.highlighted ? 'primary' : 'outline'} className="w-full">
                    {p.cta}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-6 text-center text-xs text-text-muted">
          Prices exclude WhatsApp conversation charges by Meta, billed separately based on usage.
          <span className="mx-1.5 hidden sm:inline">·</span>
          <br className="sm:hidden" />
          <a href="/pricing" className="font-semibold text-brand hover:underline">See full plan comparison →</a>
        </p>
      </div>
    </section>
  )
}
