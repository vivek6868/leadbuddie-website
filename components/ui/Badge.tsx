import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'teal' | 'gray' | 'success'
  size?: 'sm' | 'md'
  className?: string
}

export function Badge({ children, variant = 'default', size = 'md', className }: BadgeProps) {
  const variants = {
    default: 'bg-brand-subtle text-brand-light border border-brand/25',
    teal: 'bg-wa-subtle text-wa border border-wa/25',
    gray: 'bg-bg-elevated text-text-secondary border border-border',
    success: 'bg-wa-subtle text-wa border border-wa/25',
  }

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  )
}

