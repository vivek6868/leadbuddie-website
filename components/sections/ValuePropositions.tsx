import { Section } from '@/components/ui/Section'
import { Zap, TrendingUp, Users, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const valueProps = [
  {
    icon: Zap,
    tag: 'Setup',
    title: 'First Lead: Managed in Minutes',
    punchline: 'Connect WhatsApp and start tracking instantly.',
    bullets: [
      'Connect your WhatsApp number in under 2 minutes',
      'Auto-capture and assign every new lead',
      'No complex setup or onboarding needed',
    ],
    metric: '2 min setup',
    featured: false,
  },
  {
    icon: TrendingUp,
    tag: 'AI',
    title: 'First Deal: Closed in Week One',
    punchline: 'Let AI handle context so your team can close.',
    bullets: [
      'AI reply suggestions that sound like your team',
      'Follow-up reminders so no lead goes cold',
      'Conversation summaries in one glance',
    ],
    metric: '+30% faster replies',
    featured: false,
  },
  {
    icon: Users,
    tag: 'Scale',
    title: 'First 100 Leads: Scale Without Breaking',
    punchline: 'Handle your first 100+ leads without chaos.',
    bullets: [
      'Shared team inbox for every WhatsApp lead',
      'Simple pipeline to track deals to closure',
      'Built to handle thousands of conversations',
    ],
    metric: '10,000+ messages',
    featured: true,
  },
]

export function ValuePropositions() {
  return (
    <Section>
      <div className="grid md:grid-cols-3 gap-8">
        {valueProps.map((prop, index) => {
          const Icon = prop.icon
          const isFeatured = prop.featured

          return (
            <div
              key={index}
              className={cn(
                'group relative h-full rounded-3xl border backdrop-blur-xl overflow-hidden transition-all duration-300',
                'bg-white/70 border-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.06)] hover:shadow-[0_22px_70px_rgba(15,23,42,0.18)]',
                'hover:-translate-y-1.5',
                isFeatured &&
                  'bg-teal-50/90 border-teal-200/80 shadow-[0_20px_70px_rgba(20,184,166,0.35)] ring-1 ring-teal-300/60'
              )}
            >
              {/* Glow layer on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-teal-500/8 via-cyan-400/8 to-transparent" />

              <div className="relative flex flex-col h-full p-7">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-flex items-center rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-teal-800">
                      {prop.tag}
                    </span>
                    <h3 className="mt-3 text-2xl md:text-3xl font-bold text-ink leading-snug">
                      {prop.title}
                    </h3>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-teal-500/35 via-cyan-400/25 to-transparent blur-xl opacity-70" />
                    <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-400 text-white shadow-lg shadow-teal-500/40 ring-1 ring-white/40">
                      <Icon className="h-6 w-6 stroke-[1.8]" />
                    </div>
                  </div>
                </div>

                <p className="text-sm md:text-base text-gray-600 mb-4">
                  {prop.punchline}
                </p>

                <ul className="space-y-2 mb-5 text-sm text-gray-600">
                  {prop.bullets.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-[2px] text-teal-600">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-2 flex items-center justify-between gap-3">
                  <Link
                    href="https://app.leadbuddie.com"
                    className="inline-flex items-center text-sm font-semibold text-teal-700 group-hover:text-ink transition-colors"
                  >
                    <span className="mr-1">See how it works</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </Link>

                  <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-gray-700 shadow-sm">
                    {prop.metric}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

