import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Play } from 'lucide-react'

export function FinalCTA() {
  return (
    <Section className="py-24 md:py-32">
      <div className="bg-gradient-to-br from-teal-500 via-teal-600 to-ink rounded-2xl p-12 md:p-16 lg:p-20 text-center text-white">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          From first lead to first hundred deals.<br />
          We'll get you there.
        </h2>
        <p className="text-xl md:text-2xl text-teal-50 mb-10 max-w-3xl mx-auto leading-relaxed">
          500+ Indian businesses. Thousands of leads managed. One thing in common: WhatsApp that actually makes money. Ready to join them?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Play className="inline mr-2" size={20} />
            Watch Demo
          </Button>
        </div>
      </div>
    </Section>
  )
}

