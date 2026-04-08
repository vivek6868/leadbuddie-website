import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export function FinalCTA() {
  return (
    <Section className="py-24 md:py-28">
      <div className="rounded-[36px] border border-border-light bg-[linear-gradient(140deg,rgba(124,58,237,0.24),rgba(15,15,26,0.96)_45%,rgba(221,42,123,0.18))] p-10 text-center shadow-[0_36px_140px_rgba(0,0,0,0.42)] md:p-16">
        <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-text-primary md:text-6xl">
          Ready to turn WhatsApp and Instagram conversations into a real sales system?
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary md:text-xl">
          Bring your channels, team, and follow-ups into one premium CRM built for growth.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="https://app.leadbuddie.com" size="lg">
            Get Started
          </Button>
          <Button href="/demo" variant="outline" size="lg">
            Book Demo
          </Button>
          <Button href={CONTACT.whatsappUrl} variant="outline" size="lg">
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </Section>
  )
}
