import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import {
  Snowflake,
  Flame,
  Droplet,
  BatteryCharging,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'

type Vertical = {
  icon: LucideIcon
  tone: string
  bg: string
  title: string
  description: string
  workflows: string[]
}

const VERTICALS: Vertical[] = [
  {
    icon: Snowflake,
    tone: 'text-sky-700',
    bg: 'bg-sky-50',
    title: 'Air Conditioner Service',
    description: 'AMCs, seasonal gas-top-up reminders, on-site visit tracking, complaint resolution.',
    workflows: [
      'Service contract renewals',
      'Seasonal customer outreach',
      'Visit scheduling from chat',
    ],
  },
  {
    icon: Flame,
    tone: 'text-orange-700',
    bg: 'bg-orange-50',
    title: 'Gas Geyser Service',
    description: 'Installation tracking, annual servicing reminders, repeat-customer workflows.',
    workflows: [
      'Install + warranty tracking',
      'Yearly service reminders',
      'Spare-part order flow',
    ],
  },
  {
    icon: Droplet,
    tone: 'text-indigo-700',
    bg: 'bg-indigo-50',
    title: 'RO Plant Operators',
    description: 'Multi-site service contracts, parts tracking, scheduled maintenance visits.',
    workflows: [
      'Multi-site dashboards',
      'Filter / membrane lifecycle',
      'Route-based visit planning',
    ],
  },
  {
    icon: BatteryCharging,
    tone: 'text-amber-700',
    bg: 'bg-amber-50',
    title: 'Inverter & Battery Dealers',
    description: 'Warranty management, replacement reminders, dealer-network handoffs.',
    workflows: [
      'Warranty + replacement cycle',
      'Service-call routing',
      'Repeat-purchase reminders',
    ],
  },
]

export function IndustryEarlyAccess() {
  return (
    <Section background="white">
      <SectionHeader
        label="Onboarding founding dealers"
        title="The next packs — built with the first dealers who join."
        description="We go deep on one industry at a time. Water purifier dealers shaped pack number one. These four verticals are next, and we’re building each with a small group of founding dealers."
        centered
        className="mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {VERTICALS.map(({ icon: Icon, tone, bg, title, description, workflows }) => (
          <Link
            key={title}
            href={`/contact?vertical=${encodeURIComponent(title)}`}
            className="group relative flex flex-col bg-white rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-lg p-6 transition-all duration-200 overflow-hidden"
          >
            {/* Founding-dealer tag */}
            <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-ink/5 text-ink/70 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" aria-hidden="true" />
              Onboarding founding dealers
            </span>

            <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${bg} ${tone} mb-5`}>
              <Icon className="h-7 w-7" strokeWidth={1.7} />
            </div>

            <h3 className="text-xl font-bold text-ink mb-2 leading-snug">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">{description}</p>

            <ul className="space-y-2 mb-6">
              {workflows.map((w) => (
                <li key={w} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0" aria-hidden="true" />
                  <span className="leading-snug">{w}</span>
                </li>
              ))}
            </ul>

            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 group-hover:text-teal-800 mt-auto">
              Become a founding dealer
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>

      {/* Honest framing strip */}
      <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-sm">
        <p className="text-sm text-text-secondary leading-relaxed text-center">
          <strong className="text-text-primary">Why &ldquo;founding dealer&rdquo;?</strong> These packs are not generic templates we copy-pasted from water purifiers. We build each one alongside three to five real dealers in that vertical, ship the workflows they need, and lock the pack only after it earns them revenue. If your industry should be next, talk to us.
        </p>
      </div>
    </Section>
  )
}
