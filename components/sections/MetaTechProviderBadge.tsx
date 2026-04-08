import { ShieldCheck } from 'lucide-react'

type Variant = 'strip' | 'footer'

interface MetaTechProviderBadgeProps {
  variant?: Variant
}

export function MetaTechProviderBadge({ variant = 'strip' }: MetaTechProviderBadgeProps) {
  if (variant === 'footer') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-2 py-5 text-center">
        <ShieldCheck className="h-4 w-4 flex-shrink-0 text-wa" aria-hidden />
        <p className="text-sm text-text-secondary">
          <span className="font-semibold text-text-primary">Built on official Meta messaging infrastructure.</span> Clean channel workflows for WhatsApp-first and Instagram-first teams.
        </p>
      </div>
    )
  }

  return (
    <section className="border-y border-border bg-bg-secondary/70 px-4 py-4 sm:px-6 lg:px-8" aria-label="Meta messaging infrastructure">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 text-center md:gap-4">
        <ShieldCheck className="h-5 w-5 flex-shrink-0 text-wa" aria-hidden />
        <div>
          <p className="text-sm font-semibold text-text-primary sm:text-base">Premium CRM infrastructure for WhatsApp + Instagram teams</p>
          <p className="mt-0.5 text-xs text-text-secondary sm:text-sm">Structured onboarding, secure setup, and channel-ready lead operations.</p>
        </div>
      </div>
    </section>
  )
}
