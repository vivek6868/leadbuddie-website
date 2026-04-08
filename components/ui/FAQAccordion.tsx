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
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-border bg-bg-card/90"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-bg-elevated/60"
          >
            <span className="pr-8 font-semibold text-text-primary">{item.question}</span>
            <ChevronDown
              className={cn(
                'flex-shrink-0 text-text-secondary transition-transform',
                openIndex === index && 'rotate-180'
              )}
              size={20}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5 text-text-secondary">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

