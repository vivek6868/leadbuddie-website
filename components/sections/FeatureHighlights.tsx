import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FeatureTile } from '@/components/ui/FeatureTile'
import { MessageSquare, Sparkles, Kanban, Users, Zap, BarChart } from 'lucide-react'

const highlights = [
  {
    icon: MessageSquare,
    title: 'WhatsApp Team Inbox',
    description: 'Unified inbox for all your WhatsApp conversations with team collaboration.',
    href: '/product#inbox',
  },
  {
    icon: Kanban,
    title: 'Lead Pipeline CRM',
    description: 'Track leads from enquiry to close with statuses, tags, and follow-ups.',
    href: '/product#leads',
  },
  {
    icon: Sparkles,
    title: 'AI Insights & Replies',
    description: 'Get AI-suggested replies and instant conversation summaries.',
    href: '/product#ai',
  },
  {
    icon: Zap,
    title: 'Automations & Routing',
    description: 'Auto-assign leads by source and set up smart routing rules.',
    href: '/product#automation',
  },
  {
    icon: MessageSquare,
    title: 'Campaigns',
    description: 'Schedule messages, retry failed sends, and track campaign analytics.',
    href: '/product#campaigns',
  },
  {
    icon: BarChart,
    title: 'Analytics & Performance',
    description: 'Track team performance, response times, and conversion metrics.',
    href: '/product#analytics',
  },
]

export function FeatureHighlights() {
  return (
    <Section background="gray">
      <SectionHeader
        title="Everything You Need to Manage WhatsApp Leads"
        description="A complete WhatsApp CRM and AI automation platform built for Indian SMBs"
        centered
        className="mb-16"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((feature, index) => (
          <FeatureTile key={index} {...feature} />
        ))}
      </div>
    </Section>
  )
}

