import { ReactNode } from 'react'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ 
  label, 
  title, 
  description, 
  centered = false,
  className = '' 
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {label && (
        <div className="inline-flex items-center rounded-full border border-brand/30 bg-brand-subtle px-3 py-1 text-sm font-medium text-brand-light mb-4">
          {label}
        </div>
      )}
      <h2 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 ${centered ? 'mx-auto' : ''} max-w-4xl`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg text-text-secondary ${centered ? 'mx-auto' : ''} max-w-2xl`}>
          {description}
        </p>
      )}
    </div>
  )
}

