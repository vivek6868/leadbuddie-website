'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
  /**
   * Which background this sits on. Colours are written out explicitly rather than taken from the
   * theme tokens: `bg-bg-card` resolves to a raw hex inside a CSS var, so Tailwind cannot build an
   * opacity modifier from it and silently drops `bg-bg-card/80` altogether. That left the card with
   * no background at all, which is invisible on a light section and unreadable dark-on-dark on a
   * dark one (/ai-employee).
   */
  tone?: 'light' | 'dark'
}

const TONE = {
  light: {
    card: 'bg-white',
    border: { open: 'border-slate-300', closed: 'border-slate-200 hover:border-slate-300' },
    question: 'text-slate-900',
    answer: 'text-slate-600',
    chevron: 'text-slate-500',
    chevronOpen: 'text-slate-900',
  },
  dark: {
    card: 'bg-white/[0.06] backdrop-blur-sm',
    border: { open: 'border-white/25', closed: 'border-white/10 hover:border-white/20' },
    question: 'text-white',
    answer: 'text-slate-300',
    chevron: 'text-slate-400',
    chevronOpen: 'text-white',
  },
} as const

export function FAQAccordion({ items, className, tone = 'light' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const t = TONE[tone]

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            data-reveal
            style={{ ['--reveal-delay' as string]: `${index * 0.04}s` } as React.CSSProperties}
            className={cn(
              'overflow-hidden rounded-2xl border transition-colors',
              t.card,
              isOpen ? t.border.open : t.border.closed
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
            >
              <span className={cn('text-base font-semibold leading-snug md:text-lg', t.question)}>
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 flex-shrink-0 transition-transform duration-300',
                  isOpen ? cn('rotate-180', t.chevronOpen) : t.chevron
                )}
                aria-hidden="true"
              />
            </button>
            <div
              className={cn(
                'grid transition-[grid-template-rows] duration-300 ease-in-out',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <p className={cn('px-5 pb-5 text-[15px] leading-relaxed md:px-6 md:pb-6', t.answer)}>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
