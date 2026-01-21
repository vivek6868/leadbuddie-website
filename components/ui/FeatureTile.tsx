import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { Card } from './Card'
import { ArrowRight } from 'lucide-react'

interface FeatureTileProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  onClick?: () => void
}

export function FeatureTile({ icon: Icon, title, description, href, onClick }: FeatureTileProps) {
  const content = (
    <Card hover className="h-full flex flex-col group">
      <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
        <Icon className="text-teal-600" size={24} />
      </div>
      <h3 className="text-xl font-semibold text-ink mb-2">{title}</h3>
      <p className="text-gray-600 text-sm flex-1 mb-4">{description}</p>
      {(href || onClick) && (
        <div className="flex items-center text-teal-600 font-medium text-sm group-hover:text-teal-700">
          Learn more
          <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
        </div>
      )}
    </Card>
  )

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    )
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="block h-full w-full text-left">
        {content}
      </button>
    )
  }

  return content
}

