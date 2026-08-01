import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  /** Shared marketing surfaces. */
  background?: 'default' | 'elevated' | 'white' | 'gray'
}

export function Section({ children, className, id, background = 'default' }: SectionProps) {
  const bgClass =
    background === 'white' ? 'bg-white' :
    background === 'elevated' || background === 'gray' ? 'bg-[#eef4ef]' : 'bg-transparent'

  return (
    <section
      id={id}
      className={cn(
        'relative scroll-mt-24 px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28',
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
