import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  title?: string
  description?: string
  primaryCTA?: string
  primaryHref?: string
  secondaryCTA?: string
  secondaryHref?: string
}

export function CTASection({ title = 'Give every enquiry a capable next step.', description = 'Connect your business number, teach Buddie in plain language, test the journey, and choose when it can reply automatically.', primaryCTA = 'Start your 30-day trial', primaryHref = 'https://app.leadbuddie.com', secondaryCTA = 'Watch product demo', secondaryHref = '/demo' }: CTASectionProps) {
  return <Section><div className="relative overflow-hidden rounded-[34px] bg-[#07111f] px-6 py-16 text-center text-white shadow-[0_32px_90px_-38px_rgba(9,19,33,0.72)] sm:px-12 sm:py-20"><div className="absolute -right-20 -top-16 h-72 w-72 rounded-full bg-[#25d366]/20 blur-[90px]" /><div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#7c4fe3]/20 blur-[90px]" /><div className="relative mx-auto max-w-2xl"><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8bf0aa]">Ready when your customers are</p><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-5xl">{title}</h2><p className="mt-5 text-base leading-relaxed text-slate-300">{description}</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button href={primaryHref} size="lg" className="w-full sm:w-auto">{primaryCTA}<ArrowRight className="ml-2 h-4 w-4" /></Button>{secondaryCTA && secondaryHref && <Button href={secondaryHref} variant="outline" size="lg" className="w-full border-white/20 bg-white/[0.06] text-white hover:border-white/35 hover:bg-white/[0.12] hover:text-white sm:w-auto">{secondaryCTA}</Button>}</div></div></div></Section>
}
