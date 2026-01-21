'use client'

import { Section } from '@/components/ui/Section'
import Image from 'next/image'
import { MessageCircle, Inbox, Sparkles, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = [
  {
    step: 'STEP 01',
    title: 'Connect WhatsApp',
    punchline: 'Securely connect your WhatsApp Business number in minutes.',
    bullets: ['Connect your number securely', 'Ready to use in minutes'],
    icon: MessageCircle,
    image: '/graphics/steps/step-01-connect-whatsapp.svg',
  },
  {
    step: 'STEP 02',
    title: 'Leads flow into inbox',
    punchline: 'All conversations sync automatically into one shared inbox.',
    bullets: ['Auto-capture every new lead', 'Assign chats to your team'],
    icon: Inbox,
    image: '/graphics/steps/step-02-leads-inbox.svg',
  },
  {
    step: 'STEP 03',
    title: 'AI helps you reply',
    punchline: 'Get AI summaries and smart replies to respond instantly.',
    bullets: ['Suggested replies for every chat', 'Instant conversation summaries'],
    icon: Sparkles,
    image: '/graphics/steps/step-03-ai-reply.svg',
  },
]

export function Screenshots() {
  return (
    <Section>
      <div className="mb-12 max-w-3xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-teal-600">
          Onboard in days, not months
        </p>
        <h2 className="font-display text-3xl font-bold text-ink md:text-4xl lg:text-5xl mb-3">
          Get started in 3 simple steps
        </h2>
        <p className="text-base text-gray-600 md:text-lg">
          Set up your WhatsApp CRM and start closing leads faster.
        </p>
      </div>

      <div className="relative">
        {/* Dotted connector line between cards (desktop only) */}
        <div className="pointer-events-none absolute inset-x-6 top-16 hidden md:block">
          <div className="h-px border-t border-dashed border-teal-300/60" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <div
                key={step.step}
                className={cn(
                  'group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border backdrop-blur-xl',
                  'bg-white/80 border-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.06)]',
                  'transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-300/80 hover:shadow-[0_24px_80px_rgba(15,23,42,0.18)]'
                )}
              >
                {/* Glow gradient on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500/10 via-cyan-400/8 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col p-6 md:p-7">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex items-center rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-800">
                        {step.step}
                      </span>
                      <h3 className="mt-3 text-xl font-bold leading-snug text-ink md:text-2xl">
                        {step.title}
                      </h3>
                    </div>

                    {/* Icon in glow orb */}
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-teal-500/35 via-cyan-400/25 to-transparent blur-xl opacity-70" />
                      <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-400 text-white shadow-lg shadow-teal-500/40 ring-1 ring-white/60">
                        <Icon className="h-5 w-5 stroke-[1.8]" />
                      </div>
                    </div>
                  </div>

                  <p className="mb-4 text-sm text-gray-600 md:text-base">
                    {step.punchline}
                  </p>

                  <ul className="mb-5 space-y-2 text-sm text-gray-600">
                    {step.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[2px] text-teal-600">
                          <CheckCircle2 className="h-4 w-4" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Illustration slot / mini 3D product space */}
                  <div className="mt-auto flex items-end justify-between gap-3 pt-2">
                    <div className="hidden text-xs font-medium text-gray-500 md:inline">
                      Guided onboarding from first lead to first deal.
                    </div>

                    <div className="relative h-16 w-20 flex-shrink-0 md:h-20 md:w-24">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-teal-500/15 via-cyan-400/10 to-transparent blur-xl opacity-80 transition-opacity group-hover:opacity-100" />
                      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-teal-100 bg-white/90 shadow-[0_16px_45px_rgba(15,23,42,0.25)] transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
                        {step.image ? (
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-contain"
                            sizes="96px"
                            unoptimized={step.image.endsWith('.svg')}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-[10px] font-medium text-gray-400">
                            Add step illustration
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

