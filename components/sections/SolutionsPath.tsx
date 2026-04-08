'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const solutions = [
  {
    id: 'sales',
    title: 'Sales Teams',
    description: 'For teams that need clean ownership, faster replies, and a single CRM across WhatsApp and Instagram.',
    features: ['Shared inbox', 'Lead stages', 'AI summaries', 'Follow-up reminders'],
  },
  {
    id: 'marketing',
    title: 'Marketing Ops',
    description: 'For businesses running ads or content and needing clear source tracking from first conversation to close.',
    features: ['Channel visibility', 'Lead source tracking', 'Automation triggers', 'Reporting clarity'],
  },
  {
    id: 'founders',
    title: 'Founder-led Growth',
    description: 'For lean teams that want one premium place to manage incoming enquiries without operational chaos.',
    features: ['Simple setup', 'Conversation history', 'Team notes', 'Faster handoffs'],
  },
]

export function SolutionsPath() {
  const [activeSolution, setActiveSolution] = useState(solutions[0].id)
  const active = solutions.find((item) => item.id === activeSolution) ?? solutions[0]

  return (
    <Section>
      <SectionHeader
        title="Choose the motion that matches your team"
        description="Same CRM foundation, different ways to scale social conversations into pipeline."
        centered
        className="mb-12"
      />

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {solutions.map((solution) => (
          <button
            key={solution.id}
            onClick={() => setActiveSolution(solution.id)}
            className={cn(
              'rounded-full border px-5 py-3 text-sm font-semibold transition-all',
              activeSolution === solution.id
                ? 'border-brand bg-brand text-white'
                : 'border-border bg-bg-card text-text-secondary hover:border-border-light hover:text-text-primary'
            )}
          >
            {solution.title}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-5xl rounded-[32px] border border-border bg-bg-card/90 p-8 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-brand-light">{active.title}</p>
            <h3 className="mt-4 text-3xl font-bold text-text-primary md:text-4xl">{active.title} that close with confidence</h3>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">{active.description}</p>
            <div className="mt-8">
              <Button href="/demo" size="lg">
                Book Demo
              </Button>
            </div>
          </div>

          <ul className="space-y-4">
            {active.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 rounded-2xl border border-border bg-bg-elevated/80 px-4 py-4 text-text-secondary">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-wa" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
