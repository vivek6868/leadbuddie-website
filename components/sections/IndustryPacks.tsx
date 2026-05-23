'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Droplets,
  Building2,
  Wrench,
  Plus,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import Link from 'next/link'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/motion'

type Pack = {
  icon: LucideIcon
  name: string
  tagline: string
  tone: string
  status: 'live' | 'soon'
  href?: string
}

const PACKS: Pack[] = [
  {
    icon: Droplets,
    name: 'Water Treatment Pack',
    tagline: 'Installations, AMC renewals, service visits and callbacks — the full dealer lifecycle.',
    tone: 'from-teal-400/20 text-teal-300 border-teal-400/25',
    status: 'live',
    href: '/water-purifier-crm',
  },
  {
    icon: Building2,
    name: 'Real Estate Pack',
    tagline: 'Site-visit enquiries, follow-ups, and buyer pipelines run from one workspace.',
    tone: 'from-violet-400/20 text-violet-300 border-violet-400/25',
    status: 'soon',
  },
  {
    icon: Wrench,
    name: 'Service Business Pack',
    tagline: 'Job requests, scheduled visits, repeat maintenance and customer history.',
    tone: 'from-amber-400/20 text-amber-300 border-amber-400/25',
    status: 'soon',
  },
  {
    icon: Plus,
    name: 'More packs coming',
    tagline: 'Each pack ships the workflows a specific operational business actually runs.',
    tone: 'from-white/10 text-white/70 border-white/15',
    status: 'soon',
  },
]

export function IndustryPacks() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-28 lg:px-8">
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-light">
            Built to scale
          </span>
          <h2 className="text-balance text-3xl font-bold leading-[1.1] text-white md:text-5xl">
            One platform. A pack for every operational business.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Start with the workflows your industry actually runs. More packs are
            on the way as we go deeper with each kind of business.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {PACKS.map((pack) => {
            const Icon = pack.icon
            const inner = (
              <motion.div
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-bg-card/70 p-6 backdrop-blur-sm transition-colors hover:border-white/20"
              >
                {/* hover glow wash */}
                <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${pack.tone.split(' ')[0]} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />

                <div className="relative">
                  <div className="mb-5 flex items-center justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl border bg-gradient-to-br to-transparent ${pack.tone}`}>
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    {pack.status === 'live' ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-emerald-300">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Live
                      </span>
                    ) : (
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white/45">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{pack.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{pack.tagline}</p>

                  {pack.status === 'live' && pack.href && (
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-300">
                      See it in action
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  )}
                </div>
              </motion.div>
            )

            return (
              <StaggerItem key={pack.name} className="h-full">
                {pack.href ? (
                  <Link href={pack.href} className="block h-full">
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
