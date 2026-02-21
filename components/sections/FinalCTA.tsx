import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export function FinalCTA() {
  return (
    <Section className="py-24 md:py-32">
      <div className="bg-gradient-to-br from-teal-500 via-teal-600 to-ink rounded-2xl p-12 md:p-16 lg:p-20 text-center text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Ready to manage your WhatsApp leads better?
        </h2>
        <p className="text-xl md:text-2xl text-teal-50 mb-10 max-w-3xl mx-auto leading-relaxed">
          Join 500+ Indian businesses. Start free, no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          <Button
            href="https://app.leadbuddie.com"
            size="lg"
            className="bg-white text-ink hover:bg-gray-100"
          >
            Start Free Trial
          </Button>
          <Button
            href="/demo"
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white/10"
          >
            Book Demo
          </Button>
          <Button
            href={CONTACT.whatsappUrl}
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white/10"
          >
            <MessageCircle className="inline mr-2" size={20} />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </Section>
  )
}

