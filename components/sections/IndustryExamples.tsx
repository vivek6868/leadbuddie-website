import { Section } from '@/components/ui/Section'
import { Home, Building2, Stethoscope, Sparkles, ShoppingBag, GraduationCap, type LucideIcon } from 'lucide-react'

const industries: { name: string; icon: LucideIcon }[] = [
  { name: 'Real estate teams', icon: Building2 },
  { name: 'Home services', icon: Home },
  { name: 'Clinics & wellness brands', icon: Stethoscope },
  { name: 'Beauty & personal care', icon: Sparkles },
  { name: 'D2C and local commerce', icon: ShoppingBag },
  { name: 'Coaching & education', icon: GraduationCap },
]

export function IndustryExamples() {
  return (
    <Section background="gray">
      <h2 className="mb-8 text-center text-3xl font-bold text-text-primary md:text-4xl">Built for businesses that convert in chat</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map(({ name, icon: Icon }) => (
          <div key={name} className="flex items-center gap-4 rounded-2xl border border-border bg-bg-card/90 px-5 py-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-elevated text-brand-light">
              <Icon className="h-6 w-6" />
            </div>
            <span className="font-medium text-text-secondary">{name}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
