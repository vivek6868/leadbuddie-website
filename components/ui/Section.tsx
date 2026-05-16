import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  /**
   * Dark theme variants:
   * - "default": transparent — body gradient shows through
   * - "elevated": subtle dark tint that lifts the section from the body
   */
  background?: 'default' | 'elevated' | 'white' | 'gray'
}

export function Section({ children, className, id, background = 'default' }: SectionProps) {
  // "white" and "gray" are kept for backwards compatibility — both map to
  // dark-theme equivalents now that the site has a single dark surface system.
  const bgClass =
    background === 'elevated' || background === 'gray'
      ? 'bg-bg-secondary/40'
      : 'bg-transparent'

  return (
    <section
      id={id}
      className={cn(
        'relative py-20 md:py-28 px-4 sm:px-6 lg:px-8',
        bgClass,
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
