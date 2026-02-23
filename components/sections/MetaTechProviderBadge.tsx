import { ShieldCheck } from 'lucide-react'

type Variant = 'strip' | 'footer'

interface MetaTechProviderBadgeProps {
  variant?: Variant
}

export function MetaTechProviderBadge({ variant = 'strip' }: MetaTechProviderBadgeProps) {
  if (variant === 'footer') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-2 py-4 text-center">
        <ShieldCheck className="h-4 w-4 text-teal-400 flex-shrink-0" aria-hidden />
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-900">Verified WhatsApp Tech Provider — Meta.</span>{' '}
          Built on the WhatsApp Business Platform.
        </p>
      </div>
    )
  }

  return (
    <section
      className="bg-ink border-t border-white/10 py-4 px-4 sm:px-6 lg:px-8"
      aria-label="Verified WhatsApp Tech Provider"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3 md:gap-4 text-center md:text-left">
        <ShieldCheck className="h-5 w-5 text-teal-400 flex-shrink-0" aria-hidden />
        <div>
          <p className="font-semibold text-white text-sm sm:text-base">
            Verified WhatsApp Tech Provider — Meta
          </p>
          <p className="text-white/80 text-xs sm:text-sm mt-0.5">
            Secure onboarding via official WhatsApp Business APIs
          </p>
        </div>
      </div>
    </section>
  )
}
