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
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            data-reveal
            style={{ ['--reveal-delay' as any]: `${index * 0.04}s` }}
            className={cn(
              'overflow-hidden rounded-2xl border bg-bg-card/80 backdrop-blur-sm transition-colors',
              isOpen
                ? 'border-white/20'
                : 'border-white/[0.08] hover:border-white/15'
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
            >
              <span className="text-base font-semibold leading-snug text-text-primary md:text-lg">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 flex-shrink-0 text-text-secondary transition-transform duration-300',
                  isOpen && 'rotate-180 text-text-primary'
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
                <p className="px-5 pb-5 text-[15px] leading-relaxed text-text-secondary md:px-6 md:pb-6">
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
