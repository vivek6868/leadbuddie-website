import { Section } from '@/components/ui/Section'
import { Globe, MessageCircle, ArrowRight } from 'lucide-react'

const pillars = [
  {
    icon: Globe,
    title: 'Website + social funnels',
    description: 'Bring website enquiries and social conversations into the same CRM instead of splitting your team across tools.',
  },
  {
    icon: MessageCircle,
    title: 'Chat capture with context',
    description: 'Every new conversation arrives with channel context, source visibility, and space for notes and ownership.',
  },
  {
    icon: ArrowRight,
    title: 'From reply to revenue',
    description: 'LeadBuddie turns inbound conversations into a real follow-up workflow your sales team can actually manage.',
  },
]

export function ChatbotWebsiteSection() {
  return (
    <Section background="gray">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-border bg-[linear-gradient(145deg,rgba(124,58,237,0.12),rgba(15,15,26,0.96)_45%,rgba(221,42,123,0.12))] p-8 md:p-12">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.22em] text-brand-light">Lead capture</p>
          <h2 className="mt-4 text-3xl font-bold text-text-primary md:text-5xl">Website. WhatsApp. Instagram. One CRM motion.</h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            LeadBuddie is built for businesses that don&apos;t want channel silos. Whether a buyer starts on WhatsApp,
            Instagram, or your website, your team works from one premium command center.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-[28px] border border-border bg-bg-card/75 p-6 backdrop-blur-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-bg-elevated text-brand-light">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">{title}</h3>
              <p className="mt-4 leading-relaxed text-text-secondary">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
