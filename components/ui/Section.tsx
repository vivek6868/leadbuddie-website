import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray'
}

export function Section({ children, className, id, background = 'white' }: SectionProps) {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white'
  
  return (
    <section 
      id={id}
      className={cn(
        'py-24 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8',
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

