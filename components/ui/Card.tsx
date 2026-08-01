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
        'rounded-[26px] border border-border bg-bg-card shadow-[0_18px_50px_-20px_rgba(15,23,42,0.16)]',
        paddingClasses[padding],
        hover && 'transition duration-300 hover:-translate-y-1 hover:border-[#b9eac8] hover:shadow-[0_28px_70px_-28px_rgba(15,23,42,0.24)]',
        className
      )}
    >
      {children}
    </div>
  )
}
