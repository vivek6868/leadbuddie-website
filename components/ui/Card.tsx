import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export function Card({ children, className, hover = false, padding = 'md' }: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={cn(
        'rounded-[28px] border border-border bg-bg-card/90 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.15)] backdrop-blur-sm',
        paddingClasses[padding],
        hover && 'hover:-translate-y-1 hover:border-border-light hover:shadow-[0_32px_120px_rgba(0,0,0,0.36)] transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}

