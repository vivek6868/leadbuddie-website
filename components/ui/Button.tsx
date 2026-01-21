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
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 inline-block text-center'
  
  const variants = {
    primary: 'bg-ink hover:bg-ink-800 text-white focus:ring-teal-500 shadow-sm hover:shadow-md',
    secondary: 'bg-teal-500 hover:bg-teal-600 text-white focus:ring-teal-500 shadow-sm hover:shadow-md',
    lime: 'bg-accent-lime hover:bg-accent-lime-dark text-ink font-bold shadow-lg hover:shadow-xl transition-all',
    outline: 'border-2 border-white/20 text-white hover:bg-white/10 focus:ring-white/50',
    ghost: 'text-teal-600 hover:bg-teal-50 focus:ring-teal-500',
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

