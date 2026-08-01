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
        <div className="inline-flex items-center gap-2 rounded-full border border-[#b9eac8] bg-[#effaf2] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#168a42] mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {label}
        </div>
      )}
      <h2
        className={`font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.98] tracking-[-0.055em] text-text-primary mb-5 ${
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
