import { Button } from '@/components/ui/Button'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'
import { Section } from '@/components/ui/Section'
import { Play } from 'lucide-react'

export function HeroNew() {
  return (
    <Section className="pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
            WhatsApp CRM + AI Automation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Never Miss a WhatsApp Lead Again
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            See every WhatsApp enquiry, chat reply, note and AI insight in one place. LeadBuddie gives your team a real-time WhatsApp-style inbox, AI reply drafts, and simple follow-up tools built for Indian SMBs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="https://app.leadbuddie.com" size="lg" className="w-full sm:w-auto">
              Start Free Trial
            </Button>
            <Button href="/demo" variant="outline" size="lg" className="w-full sm:w-auto">
              <Play className="inline mr-2" size={20} />
              Watch Demo
            </Button>
          </div>
        </div>
        <div className="relative">
          <ScreenshotFrame
            src="/images/dashboard-overview.png"
            alt="LeadBuddie Dashboard"
            status="connected"
            aspect="1/1"
          />
        </div>
      </div>
    </Section>
  )
}

