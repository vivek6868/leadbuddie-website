import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Play } from 'lucide-react'

export function FinalCTA() {
  return (
    <Section className="py-20">
      <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-12 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Never Miss a Lead Again?
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Join hundreds of Indian businesses using LeadBuddie to manage WhatsApp leads and close more deals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="https://app.leadbuddie.com" size="lg">
            Start Free Trial
          </Button>
          <Button href="/demo" variant="outline" size="lg">
            <Play className="inline mr-2" size={20} />
            Watch Demo
          </Button>
        </div>
      </div>
    </Section>
  )
}

