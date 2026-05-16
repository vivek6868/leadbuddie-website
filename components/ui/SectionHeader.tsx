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
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {label && (
        <div className="inline-flex items-center rounded-full border border-brand/30 bg-brand-subtle px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-light mb-4">
          {label}
        </div>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-text-primary mb-4 ${
          centered ? 'mx-auto' : ''
        } max-w-3xl`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed text-text-secondary ${
            centered ? 'mx-auto' : ''
          } max-w-2xl`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
