import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { UserPlus, Link2, MessageSquare } from 'lucide-react'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'

const steps = [
  {
    icon: UserPlus,
    title: 'Connect Your WhatsApp',
    description: 'Securely connect your WhatsApp Business number in minutes.',
    screenshot: '/images/placeholder-step1.png',
  },
  {
    icon: MessageSquare,
    title: 'Leads Flow Into Inbox',
    description: 'All WhatsApp conversations sync automatically to your unified inbox.',
    screenshot: '/images/placeholder-step2.png',
  },
  {
    icon: Link2,
    title: 'AI Helps You Reply',
    description: 'Get AI-suggested replies and summaries to respond faster.',
    screenshot: '/images/placeholder-step3.png',
  },
]

export function HowItWorks() {
  return (
    <Section>
      <SectionHeader
        label="How It Works"
        title="Get Started in 3 Simple Steps"
        description="Set up your WhatsApp CRM and start managing leads like a pro"
        centered
        className="mb-16"
      />
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="mb-4">
              <ScreenshotFrame
                src={step.screenshot}
                alt={step.title}
                className="w-full max-w-[420px] lg:max-w-[480px] mx-auto"
                aspect="1/1"
                fit="cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-3">
              <step.icon className="text-teal-600" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

