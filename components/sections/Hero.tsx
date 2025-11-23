import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { BRAND } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Never Lose a{' '}
          <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            WhatsApp Lead
          </span>{' '}
          Again
        </h1>
        <p className="text-xl md:text-2xl text-dark-300 mb-4 text-balance">
          {BRAND.tagline}
        </p>
        <p className="text-lg text-dark-400 mb-8 max-w-2xl mx-auto text-balance">
          Track, score, and follow up with every WhatsApp lead automatically. 
          Made in India, available worldwide for contractors and small businesses everywhere.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" href="/pricing" className="group">
            Start Free Trial
            <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button size="lg" variant="outline" href="/how-it-works">
            See How It Works
          </Button>
        </div>
        <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-dark-400">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Made in India | Trusted Worldwide
          </span>
          <span>•</span>
          <span>14-day free trial</span>
          <span>•</span>
          <span>No credit card required</span>
        </div>
      </div>
    </Section>
  )
}

