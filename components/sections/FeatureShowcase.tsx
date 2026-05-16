import { Section } from '@/components/ui/Section'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'
import { MessageSquare, Kanban, Sparkles, Zap, Send, BarChart, Clock, LayoutGrid } from 'lucide-react'

const features = [
  {
    id: 'inbox',
    icon: MessageSquare,
    title: 'Shared WhatsApp & Instagram inbox',
    description: 'Your AI co-pilot and your team work from the same inbox. The co-pilot handles routine messages; humans close the deals.',
    benefits: [
      'Unified inbox across WhatsApp and Instagram',
      'Real-time sync and notifications',
      'Team assignment and collaboration',
      'Mobile and desktop views',
    ],
    screenshot: '/graphics/features/whatsapp-team-inbox.svg',
    reverse: false,
  },
  {
    id: 'leads',
    icon: Kanban,
    title: 'Pipeline that matches the conversation',
    description: 'Your co-pilot qualifies and stages leads automatically. You see what is hot, what is cold, and what needs a nudge.',
    benefits: [
      'Auto-qualification by detected intent',
      'Tags, budget, and source captured from the chat',
      'Stage moves you can approve or accept',
      'Follow-up reminders never forgotten',
    ],
    screenshot: '/graphics/features/lead-pipeline-crm.svg',
    reverse: true,
  },
  {
    id: 'followups',
    icon: Clock,
    title: 'Never miss a follow-up. Close more deals on time.',
    description: 'LeadBuddie helps you stay on top of every lead with smart, flexible follow-ups built for WhatsApp-first businesses.',
    stripBullets: 'Smart scheduling & reminders • Calendar & list views • Team assignment with full context • AI-powered & automated follow-ups (Growth+)',
    benefits: [
      'Smart scheduling & reminders',
      'Calendar & list views',
      'Team assignment with full context',
      'AI-powered & automated follow-ups (Growth+)',
    ],
    screenshot: '/graphics/features/follow-ups.png',
    reverse: false,
  },
  {
    id: 'pipeline',
    icon: LayoutGrid,
    title: 'Visualize your sales. Move leads faster.',
    description: 'Track every lead from first message to closed deal with a powerful, mobile-friendly pipeline.',
    stripBullets: 'Visual Kanban pipeline • Drag-and-drop stages • Custom stages, priorities & teams • List + pipeline views (mobile-ready)',
    benefits: [
      'Visual Kanban pipeline',
      'Drag-and-drop stages',
      'Custom stages, priorities & teams',
      'List + pipeline views (mobile-ready)',
    ],
    screenshot: '/graphics/features/pipeline.png',
    reverse: true,
  },
  {
    id: 'ai',
    icon: Sparkles,
    title: 'AI that drafts, sends, or steps back — your call',
    description: 'Most CRMs offer “AI suggestions” you still have to send. LeadBuddie’s co-pilot can reply, qualify, and follow up on its own — with the autonomy level you set per capability.',
    benefits: [
      'Approve every reply, or auto-send routine ones',
      'Context from full conversation + lead history',
      'Tone learned from your business',
      'Transparent — every action is logged',
    ],
    screenshot: '/graphics/features/ai-insights-smart-replies.svg',
    reverse: false,
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Routing handled by your co-pilot',
    description: 'Auto-assign leads by source (website, Instagram, Facebook). No rule engines to maintain — the co-pilot handles routing, follow-up timing, and team handoff.',
    benefits: [
      'Source-based auto-assignment',
      'Smart follow-up timing',
      'Auto-welcome messages',
      'Hand-off to the right team member',
    ],
    screenshot: '/graphics/features/automations-routing.svg',
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
    screenshot: '/graphics/features/campaigns.svg',
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
    screenshot: '/graphics/features/analytics-team-performance.svg',
    reverse: true,
  },
]

export function FeatureShowcase() {
  return (
    <Section>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-4">
        From first message to closed deal — your co-pilot has it.
      </h2>
      <p className="text-center text-text-secondary max-w-2xl mx-auto mb-16">
        Every capability below works alongside the human on your team. The co-pilot handles the routine; you stay in control of every decision that matters.
      </p>
      <div className="space-y-32">
        {features.map((feature) => (
          <div
            key={feature.id}
            data-reveal
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              feature.reverse ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={feature.reverse ? 'lg:order-2' : ''}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500/15 text-teal-300 text-sm font-medium mb-4 border border-teal-400/20">
                {feature.title}
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-lg text-text-secondary mb-6">{feature.description}</p>
              {'stripBullets' in feature && feature.stripBullets && (
                <p className="text-sm text-text-muted mb-6">{feature.stripBullets}</p>
              )}
              <ul className="space-y-3">
                {feature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                    </div>
                    <span className="text-text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={feature.reverse ? 'lg:order-1' : ''}>
              <ScreenshotFrame
                src={feature.screenshot}
                alt={feature.title}
                status={feature.id === 'inbox' ? 'connected' : undefined}
                aspect="3/2"
                fit="cover"
                className="md:animate-float-slow"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

