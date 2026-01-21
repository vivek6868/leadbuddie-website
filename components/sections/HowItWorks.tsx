import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MessageCircle, Inbox, Sparkles, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const steps = [
  {
    step: 'STEP 01',
    title: 'Connect Your WhatsApp',
    punchline: 'Securely connect your WhatsApp Business number in minutes.',
    bullets: ['Connect your number securely', 'Ready to use in minutes'],
    icon: MessageCircle,
    image: '/graphics/steps/step-01-connect-whatsapp.svg',
  },
  {
    step: 'STEP 02',
    title: 'Leads Flow Into Inbox',
    punchline: 'All WhatsApp conversations sync automatically into one shared inbox.',
    bullets: ['Auto‑capture every new lead', 'Assign chats to your team'],
    icon: Inbox,
    image: '/graphics/steps/step-02-leads-inbox.svg',
  },
  {
    step: 'STEP 03',
    title: 'AI Helps You Reply',
    punchline: 'Get AI summaries and smart replies to respond instantly.',
    bullets: ['Suggested replies for every chat', 'Instant conversation summaries'],
    icon: Sparkles,
    image: '/graphics/steps/step-03-ai-reply.svg',
  },
]

export function HowItWorks() {
  return (
    <Section>
      <SectionHeader
        label="How It Works"
        title="Get started in 3 simple steps"
        description="Set up your WhatsApp CRM and start closing leads faster."
        centered
        className="mb-16"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Dotted connector line between cards (desktop) */}
        <div className="pointer-events-none absolute inset-x-6 top-40 hidden md:block">
          <div className="h-px border-t border-dashed border-teal-200/80" />
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <div
                key={step.step}
                className={cn(
                  'group relative flex h-full flex-col overflow-hidden rounded-[24px] border backdrop-blur-xl',
                  'bg-white/90 border-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.12)]',
                  'transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_100px_rgba(15,23,42,0.22)]'
                )}
              >
                {/* Gradient border / glow on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-br from-cyan-400/0 via-teal-400/0 to-cyan-400/0 opacity-0 transition-all duration-300 group-hover:from-cyan-400/40 group-hover:via-teal-400/16 group-hover:to-cyan-400/40 group-hover:opacity-40" />

                <div className="relative flex h-full flex-col p-5 md:p-6">
                  {/* Screenshot / illustration frame */}
                  <div className="relative mb-5">
                    <div className="absolute inset-0 rounded-[22px] bg-gradient-to-tr from-teal-500/12 via-cyan-400/10 to-transparent blur-2xl" />
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] border border-teal-100 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.25)]">
                      {step.image ? (
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 340px"
                          unoptimized={step.image.endsWith('.svg')}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs font-medium text-gray-400">
                          Add step illustration
                        </div>
                      )}
                      {/* Light top shine */}
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/70 via-white/0 to-transparent" />
                    </div>

                    {/* Step pill on top-left of frame */}
                    <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-slate-900/40">
                      {step.step}
                    </div>
                  </div>

                  {/* Icon + title + text */}
                  <div className="mb-3 flex items-center justify-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-700 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-ink md:text-xl">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mb-3 text-sm text-gray-600 md:text-base text-center">
                    {step.punchline}
                  </p>

                  <ul className="mb-4 space-y-2 text-sm text-gray-600 text-left mx-auto max-w-xs">
                    {step.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[2px] text-teal-600">
                          <CheckCircle2 className="h-4 w-4" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

