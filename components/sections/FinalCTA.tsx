import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export function FinalCTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(140deg,rgba(124,58,237,0.22),rgba(15,15,26,0.96)_50%,rgba(221,42,123,0.16))] px-6 py-12 text-center shadow-[0_36px_140px_-40px_rgba(124,58,237,0.55)] md:px-12 md:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative">
          <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-text-primary md:text-5xl">
            Ready to turn WhatsApp &amp; Instagram conversations into a real sales system?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            Bring your channels, team, and follow-ups into one premium CRM built for growth.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href="https://app.leadbuddie.com" size="lg" className="w-full sm:w-auto">
              Get started
            </Button>
            <Button href="/demo" variant="outline" size="lg" className="w-full sm:w-auto">
              Book demo
            </Button>
            <Button href={CONTACT.whatsappUrl} variant="outline" size="lg" className="w-full sm:w-auto">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
