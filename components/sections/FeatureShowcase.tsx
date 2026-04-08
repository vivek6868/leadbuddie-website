import { Section } from '@/components/ui/Section'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'
import { MessageSquare, Kanban, Sparkles, Zap, BarChart, Users, type LucideIcon } from 'lucide-react'

const features: { title: string; description: string; bullets: string[]; icon: LucideIcon; screenshot: string }[] = [
  {
    title: 'Shared WhatsApp & Instagram inbox',
    description: 'Work every conversation from one interface with assignments, notes, and channel visibility baked in.',
    bullets: ['Unified team inbox', 'Ownership and assignments', 'Conversation history', 'Fast internal collaboration'],
    icon: MessageSquare,
    screenshot: '/graphics/features/whatsapp-team-inbox.svg',
  },
  {
    title: 'Lead pipeline that matches the conversation',
    description: 'Your team sees what stage each lead is in without leaving the chat they are working on.',
    bullets: ['Custom stages', 'Follow-up dates', 'Tags and priorities', 'Deal visibility'],
    icon: Kanban,
    screenshot: '/graphics/features/lead-pipeline-crm.svg',
  },
  {
    title: 'AI that helps without taking over',
    description: 'Summaries and suggestions give your team speed while keeping every response in your control.',
    bullets: ['Smart summaries', 'Suggested replies', 'Context retention', 'Faster onboarding for teammates'],
    icon: Sparkles,
    screenshot: '/graphics/features/ai-insights-smart-replies.svg',
  },
  {
    title: 'Automation for modern lead ops',
    description: 'Route conversations, assign owners, and trigger next steps without creating process debt.',
    bullets: ['Auto-assignment', 'Routing rules', 'Lead source logic', 'Operational consistency'],
    icon: Zap,
    screenshot: '/graphics/features/automations-routing.svg',
  },
  {
    title: 'Performance you can actually act on',
    description: 'Measure team responsiveness and pipeline health instead of guessing what is working.',
    bullets: ['Response visibility', 'Team insights', 'Lead source trends', 'Conversion reporting'],
    icon: BarChart,
    screenshot: '/graphics/features/analytics-team-performance.svg',
  },
  {
    title: 'Built for teams, not solo inboxes',
    description: 'LeadBuddie gives your whole team the context to move quickly without stepping on each other.',
    bullets: ['Team roles', 'Shared visibility', 'Notes and context', 'Cleaner handoffs'],
    icon: Users,
    screenshot: '/graphics/features/team-collaboration.svg',
  },
]

export function FeatureShowcase() {
  return (
    <Section>
      <h2 className="mb-14 text-center text-3xl font-bold text-text-primary md:text-5xl">Everything your team needs to sell inside conversations</h2>
      <div className="space-y-14">
        {features.map((feature, index) => {
          const Icon = feature.icon

          return (
            <div key={feature.title} className="grid items-center gap-8 rounded-[32px] border border-border bg-bg-card/90 p-8 lg:grid-cols-2 lg:p-10">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-subtle text-brand-light">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-bold text-text-primary">{feature.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-text-secondary">{feature.description}</p>
                <ul className="mt-6 space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-text-secondary">
                      <span className="h-2 w-2 rounded-full bg-brand-light" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <ScreenshotFrame src={feature.screenshot} alt={feature.title} aspect="3/2" disableHover />
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
