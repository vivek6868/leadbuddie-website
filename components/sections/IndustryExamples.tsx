import { Section } from '@/components/ui/Section'
import {
  Droplets,
  Home,
  Paintbrush,
  Stethoscope,
  Building2,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react'

const industries: { name: string; icon: LucideIcon }[] = [
  { name: 'Water purifier companies', icon: Droplets },
  { name: 'Home service providers', icon: Home },
  { name: 'Painting contractors', icon: Paintbrush },
  { name: 'Clinics', icon: Stethoscope },
  { name: 'Real estate agents', icon: Building2 },
  { name: 'Education institutes', icon: GraduationCap },
]

export function IndustryExamples() {
  return (
    <Section background="gray">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-ink mb-8">
        Businesses Growing with LeadBuddie
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {industries.map(({ name, icon: Icon }, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-xl bg-white border border-gray-200 px-5 py-4 shadow-sm hover:shadow-md hover:border-teal-200/80 transition-all duration-200"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
              <Icon className="h-6 w-6" strokeWidth={1.8} />
            </div>
            <span className="text-gray-700 font-medium">{name}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
