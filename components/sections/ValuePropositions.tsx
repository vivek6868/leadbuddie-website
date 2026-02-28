import { Section } from '@/components/ui/Section'
import { Zap, Inbox, Smartphone } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const valueProps = [
  {
    icon: Zap,
    title: 'Faster Responses',
    punchline: 'Reply faster with team coordination and AI suggestions when you need them.',
    featured: false,
  },
  {
    icon: Inbox,
    title: 'Organized Leads',
    punchline: 'Never lose customer conversations or follow-ups.',
    featured: false,
  },
  {
    icon: Smartphone,
    title: 'Same WhatsApp Number',
    punchline: 'No new number. Use the WhatsApp you already have.',
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
                  <h3 className="text-2xl md:text-3xl font-bold text-ink leading-snug">
                    {prop.title}
                  </h3>
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-teal-500/35 via-cyan-400/25 to-transparent blur-xl opacity-70" />
                    <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-400 text-white shadow-lg shadow-teal-500/40 ring-1 ring-white/40">
                      <Icon className="h-6 w-6 stroke-[1.8]" />
                    </div>
                  </div>
                </div>

                <p className="text-base text-gray-600 flex-1">
                  {prop.punchline}
                </p>

                <div className="mt-auto pt-4">
                  <Link
                    href="https://app.leadbuddie.com"
                    className="inline-flex items-center text-sm font-semibold text-teal-700 group-hover:text-ink transition-colors"
                  >
                    <span className="mr-1">See how it works</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

