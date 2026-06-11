import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { PRICING_PLANS } from '@/lib/constants'
import { Check } from 'lucide-react'

export function PricingPreviewNew() {
  return (
    <Section background="elevated">
      <SectionHeader
        label="Pricing"
        title="Choose the plan that fits your social sales flow"
        description="Every plan is built for WhatsApp + Instagram CRM workflows, with a 30-day free Growth trial to get started."
        centered
        className="mb-14 md:mb-16"
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {PRICING_PLANS.slice(0, 4).map((plan, i) => (
          <article
            key={plan.id}
            data-reveal
            style={{ ['--reveal-delay' as any]: `${i * 0.08}s` }}
            className={`relative flex h-full flex-col rounded-3xl border bg-bg-card/80 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
              plan.highlighted
                ? 'border-brand/40 shadow-[0_30px_90px_-30px_rgba(124,58,237,0.6)]'
                : 'border-white/[0.08] hover:border-white/20'
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                Most popular
              </span>
            )}

            <h3 className="text-xl font-semibold text-text-primary">{plan.name}</h3>
            <div className="mt-4 flex items-end gap-1.5">
              <span className="text-4xl font-bold text-text-primary">
                {plan.price === 0 ? 'Free' : `₹${plan.price}`}
              </span>
              {plan.price > 0 && (
                <span className="pb-1 text-sm text-text-secondary">/month</span>
              )}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {plan.description}
            </p>

            <ul className="mt-6 space-y-3">
              {plan.features.slice(0, 4).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-text-secondary"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-wa" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-2">
              <Button
                // After the 2026 pricing refresh, all visible tiers route to self-serve signup.
                href="https://app.leadbuddie.com"
                variant={plan.highlighted ? 'primary' : 'outline'}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-text-muted">
        Meta conversation charges may apply separately based on usage.
      </p>
    </Section>
  )
}
