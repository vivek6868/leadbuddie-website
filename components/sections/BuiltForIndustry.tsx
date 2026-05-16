import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import {
  Droplets,
  Snowflake,
  Flame,
  Sun,
  BatteryCharging,
  ArrowRight,
  Check,
  type LucideIcon,
} from 'lucide-react'

type Pack = {
  icon: LucideIcon
  title: string
  description: string
  status: 'live' | 'coming-soon'
  href?: string
  workflows?: string[]
  outcome?: string
}

const PACKS: Pack[] = [
  {
    icon: Droplets,
    title: 'Water Purifier Dealers',
    description:
      'AMC renewals, service visit tracking, callback scheduling, and customer lifetime value — purpose-built with Mastec Water Purifier.',
    status: 'live',
    href: '/case-study',
    workflows: [
      'AMC renewals surfaced before they lapse',
      'Service visits scheduled from chat',
      'Callbacks tracked — none forgotten',
      'Customer + product history at a glance',
    ],
    outcome:
      'Most water purifier dealers leak revenue at one place: the AMC renewal nobody followed up on. LeadBuddie closes that leak.',
  },
  {
    icon: Snowflake,
    title: 'Air Conditioner Service',
    description: 'Service contracts, seasonal maintenance, complaint resolution.',
    status: 'coming-soon',
  },
  {
    icon: Flame,
    title: 'Gas Geyser Service',
    description: 'Installation tracking, AMC management, repeat service workflows.',
    status: 'coming-soon',
  },
  {
    icon: Sun,
    title: 'RO Plant Operators',
    description: 'Multi-site service contracts, parts tracking, scheduled visits.',
    status: 'coming-soon',
  },
  {
    icon: BatteryCharging,
    title: 'Inverter & Battery Dealers',
    description: 'Warranty management, replacement reminders, dealer networks.',
    status: 'coming-soon',
  },
]

export function BuiltForIndustry() {
  return (
    <Section background="gray">
      <SectionHeader
        label="Built for your industry"
        title="Generic AI tools treat every business the same. We don’t."
        description="We’re going deep on the industries we serve, one at a time. First live: water purifier dealers."
        centered
        className="mb-16"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PACKS.map((pack) => {
          const Icon = pack.icon
          const isLive = pack.status === 'live'

          if (isLive) {
            return (
              <Link
                key={pack.title}
                href={pack.href ?? '#'}
                className="group relative col-span-1 sm:col-span-2 lg:row-span-2 lg:col-span-1 flex flex-col bg-white rounded-2xl border border-teal-200 shadow-sm hover:shadow-lg hover:border-teal-300 transition-all duration-200 p-7 overflow-hidden"
              >
                <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-teal-50 text-teal-700 text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" aria-hidden="true" />
                  Live now
                </span>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 mb-5">
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <h3 className="text-2xl font-bold text-ink mb-3 leading-snug">{pack.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed mb-5">{pack.description}</p>

                {pack.workflows && pack.workflows.length > 0 && (
                  <ul className="space-y-2.5 mb-5">
                    {pack.workflows.map((w) => (
                      <li key={w} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-teal-100 text-teal-700 flex-shrink-0">
                          <Check className="h-3 w-3" strokeWidth={2.5} />
                        </span>
                        <span className="leading-snug">{w}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {pack.outcome && (
                  <div className="rounded-xl bg-teal-50/70 border border-teal-100 px-4 py-3 mb-5">
                    <p className="text-xs leading-relaxed text-teal-900">
                      <strong className="font-semibold">Where the money is:</strong> {pack.outcome}
                    </p>
                  </div>
                )}

                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 group-hover:text-teal-800 mt-auto">
                  Read the Mastec story
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )
          }

          return (
            <div
              key={pack.title}
              aria-disabled="true"
              className="relative flex flex-col bg-white rounded-2xl border border-gray-200 p-7 opacity-60"
            >
              <span className="absolute top-5 right-5 inline-flex items-center rounded-full bg-gray-100 text-gray-600 text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1">
                Coming soon
              </span>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-500 mb-4">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-snug">{pack.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{pack.description}</p>
            </div>
          )
        })}
      </div>

      <p className="mt-10 text-center text-sm text-gray-500">
        Have a vertical that should be next? <Link href="/contact" className="font-semibold text-teal-700 hover:text-teal-800">Tell us</Link>.
      </p>
    </Section>
  )
}
