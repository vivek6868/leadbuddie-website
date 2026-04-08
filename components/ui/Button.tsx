import { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'lime'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  href?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-xl text-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand/60 focus:ring-offset-2 focus:ring-offset-bg-primary'
  
  const variants = {
    primary: 'bg-brand text-white shadow-[0_12px_40px_rgba(124,58,237,0.35)] hover:bg-brand-hover',
    secondary: 'bg-wa text-bg-primary shadow-[0_12px_40px_rgba(37,211,102,0.22)] hover:bg-wa-dark hover:text-white',
    lime: 'bg-brand text-white shadow-[0_12px_40px_rgba(124,58,237,0.35)] hover:bg-brand-hover',
    outline: 'border border-border-light bg-white/5 text-text-primary hover:border-brand-light hover:bg-brand-subtle',
    ghost: 'text-brand-light hover:bg-brand-subtle',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  )
  
  if (href) {
    // Use regular <a> tag for external links (http/https)
    if (href.startsWith('http://') || href.startsWith('https://')) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    // Use Next.js Link for internal links
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }
  
  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}

