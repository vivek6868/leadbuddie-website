import { LucideIcon } from 'lucide-react'
import { Feature } from '@/lib/types'

interface FeatureCardProps extends Feature {
  icon: LucideIcon
}

export function FeatureCard({ title, description, icon: IconComponent }: FeatureCardProps) {
  return (
    <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 hover:border-primary-600/50 transition-all hover:shadow-lg hover:shadow-primary-600/10">
      <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center mb-4">
        <IconComponent className="text-primary-400" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-dark-300">{description}</p>
    </div>
  )
}

