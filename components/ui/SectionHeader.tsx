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
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4">
          {label}
        </div>
      )}
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-4 ${centered ? 'mx-auto' : ''} max-w-4xl`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg text-gray-600 ${centered ? 'mx-auto' : ''} max-w-2xl`}>
          {description}
        </p>
      )}
    </div>
  )
}

