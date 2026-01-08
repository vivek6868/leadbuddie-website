import { Section } from '@/components/ui/Section'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'
import { MessageSquare, Kanban, Sparkles, Zap, Send, BarChart } from 'lucide-react'

const features = [
  {
    id: 'inbox',
    icon: MessageSquare,
    title: 'WhatsApp Team Inbox',
    description: 'See all your WhatsApp conversations in one unified inbox. Filter by assigned, unassigned, or my chats. Real-time updates as new messages arrive.',
    benefits: [
      'Unified inbox for all WhatsApp conversations',
      'Real-time sync and notifications',
      'Team assignment and collaboration',
      'Mobile and desktop views',
    ],
    screenshot: '/images/product-inbox.png',
    reverse: false,
  },
  {
    id: 'leads',
    icon: Kanban,
    title: 'Lead Pipeline CRM',
    description: 'Track every lead from first contact to close. Add statuses, tags, budget, source, and follow-up dates. Everything about the lead lives alongside the chat.',
    benefits: [
      'Custom lead statuses and pipelines',
      'Tags and categorization',
      'Budget and source tracking',
      'Follow-up reminders',
    ],
    screenshot: '/images/product-leads.png',
    reverse: true,
  },
  {
    id: 'ai',
    icon: Sparkles,
    title: 'AI Insights & Smart Replies',
    description: 'Get AI-suggested replies based on conversation context. Instant summaries help your team understand any lead in seconds.',
    benefits: [
      'AI reply suggestions',
      'Conversation summaries',
      'Context-aware responses',
      'Learn from your business',
    ],
    screenshot: '/images/product-ai.png',
    reverse: false,
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Automations & Routing',
    description: 'Auto-assign leads by source (website, Instagram, Facebook). Set up routing rules so the right team member handles each enquiry.',
    benefits: [
      'Source-based auto-assignment',
      'Custom routing rules',
      'Auto-welcome messages',
      'Smart lead distribution',
    ],
    screenshot: '/images/product-automation.png',
    reverse: true,
  },
  {
    id: 'campaigns',
    icon: Send,
    title: 'Campaigns',
    description: 'Schedule messages, retry failed sends, and track campaign performance. Send to multiple recipients with analytics.',
    benefits: [
      'Schedule messages for later',
      'Retry failed sends',
      'Campaign analytics',
      'Recipient management',
    ],
    screenshot: '/images/product-campaigns.png',
    reverse: false,
  },
  {
    id: 'analytics',
    icon: BarChart,
    title: 'Analytics & Team Performance',
    description: 'Track response times, conversion rates, and team performance. See which team members are closing the most deals.',
    benefits: [
      'Response time metrics',
      'Conversion tracking',
      'Team performance dashboards',
      'Lead source analytics',
    ],
    screenshot: '/images/product-analytics.png',
    reverse: true,
  },
]

export function FeatureShowcase() {
  return (
    <Section>
      <div className="space-y-32">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              feature.reverse ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={feature.reverse ? 'lg:order-2' : ''}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4">
                {feature.title}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={feature.reverse ? 'lg:order-1' : ''}>
              <ScreenshotFrame
                src={feature.screenshot}
                alt={feature.title}
                status={feature.id === 'inbox' ? 'connected' : undefined}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

