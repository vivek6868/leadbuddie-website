import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export function FinalCTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[36px] border border-border/60 bg-slate-950 px-6 py-16 text-center shadow-2xl md:px-12 md:py-24">
        {/* Background Image of the Indian service manager / team */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.25]"
          style={{ backgroundImage: "url('/images/is-leadbuddie-right-for-you.png')" }}
        />
        
        {/* Dark overlay gradient to make text stand out */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-slate-950 via-slate-900/90 to-brand-glow/40 backdrop-blur-[1px]" />

        <div className="relative z-20">
          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-white md:text-5xl tracking-tight">
            Ready to turn WhatsApp &amp; Instagram conversations into a real sales system?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
            Bring your channels, team, and follow-ups into one premium CRM built for growth.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href="https://app.leadbuddie.com" size="lg" className="w-full sm:w-auto">
              Get started
            </Button>
            <Button
              href="/demo"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/20 bg-white/5 text-white hover:bg-white/15 hover:border-white/40 hover:text-white"
            >
              Book demo
            </Button>
            <Button
              href={CONTACT.whatsappUrl}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/20 bg-white/5 text-white hover:bg-white/15 hover:border-white/40 hover:text-white"
            >
              <MessageCircle className="mr-2 h-5 w-5 text-brand" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
