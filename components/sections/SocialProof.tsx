'use client'

import { Star } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/motion'
import { SOCIAL_PROOF_STATS } from '@/lib/constants'

const CUSTOMERS = [
  'Mastec Water Purifier',
  'Classic Leathers',
  'Zyrax Fitness',
  'Nitya Tours & Travels',
  'Spectrum Painting',
]

const STATS = [
  { value: SOCIAL_PROOF_STATS.leadsManaged, label: 'leads managed' },
  { value: SOCIAL_PROOF_STATS.businessesOnboarded, label: 'businesses onboarded' },
  { value: '60–100', label: 'leads/day at Mastec' },
]

export function SocialProof() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-bg-secondary/30 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="relative mx-auto max-w-5xl">
        <Reveal className="text-center">
          <div className="mb-3 flex items-center justify-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-amber-400" fill="currentColor" />
            ))}
          </div>
          <p className="text-sm font-medium text-white/55">
            Trusted by operational businesses across India
          </p>
        </Reveal>

        {/* Customer name row */}
        <Stagger className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12" stagger={0.08}>
          {CUSTOMERS.map((name) => (
            <StaggerItem key={name}>
              <span className="text-base font-semibold tracking-tight text-white/45 transition-colors hover:text-white/80 md:text-lg">
                {name}
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Stats */}
        <Reveal delay={0.1} className="mt-12">
          <div className="grid grid-cols-3 gap-4 rounded-3xl border border-white/[0.07] bg-bg-card/50 px-4 py-6 backdrop-blur-sm md:px-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="bg-gradient-to-r from-brand-light to-teal-300 bg-clip-text text-2xl font-bold text-transparent md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-[11px] text-white/45 md:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
