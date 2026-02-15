'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'
import { Button } from '@/components/ui/Button'
import { MessageSquare, Kanban, Clock, Sparkles, Zap, Send, BarChart, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

const tabs = [
  { id: 'inbox', label: 'Inbox', icon: MessageSquare },
  { id: 'leads', label: 'Lead Pipeline', icon: Kanban },
  { id: 'followups', label: 'Follow-ups', icon: Clock },
  { id: 'ai', label: 'AI', icon: Sparkles },
  { id: 'automation', label: 'Automation', icon: Zap },
  { id: 'campaigns', label: 'Campaigns', icon: Send },
  { id: 'analytics', label: 'Analytics', icon: BarChart },
  { id: 'team', label: 'Team', icon: Users },
]

const productSections = [
  {
    id: 'inbox',
    title: 'WhatsApp Team Inbox',
    description: 'Unified inbox for all your WhatsApp conversations with real-time sync and team collaboration.',
    screenshot: '/graphics/features/whatsapp-team-inbox.svg',
    benefits: [
      'See all WhatsApp conversations in one place',
      'Real-time sync and instant notifications',
      'Filter by assigned, unassigned, or my chats',
      'Desktop split view and mobile-optimized',
      'Team assignment and collaboration',
      'Message search and history',
    ],
  },
  {
    id: 'leads',
    title: 'Lead Pipeline CRM',
    description: 'Track every lead from first contact to close with custom statuses, tags, and pipelines. Visual Kanban, drag-and-drop stages, and full lead history.',
    screenshot: '/graphics/features/pipeline.png',
    benefits: [
      'Custom lead statuses and pipelines',
      'Visual Kanban pipeline and drag-and-drop stages',
      'Tags, budget, and source tracking',
      'Follow-up reminders and due dates',
      'Lead notes and activity history',
      'Quick lead assignment',
    ],
  },
  {
    id: 'followups',
    title: 'Follow-ups & Reminders',
    description: 'Never miss a follow-up. Smart scheduling, calendar and list views, and reminders so every lead gets attention on time.',
    screenshot: '/graphics/features/follow-ups.png',
    benefits: [
      'Smart scheduling and follow-up reminders',
      'Calendar and list views',
      'Due dates and team assignment with context',
      'AI-powered and automated follow-ups (Growth+)',
      'Never lose a lead to a missed callback',
    ],
  },
  {
    id: 'ai',
    title: 'AI Insights & Smart Replies',
    description: 'Get AI-suggested replies and instant conversation summaries to respond faster.',
    screenshot: '/graphics/features/ai-insights-smart-replies.svg',
    benefits: [
      'AI reply suggestions based on context',
      'Instant conversation summaries',
      'Context-aware responses',
      'Learn from your business description',
      'Edit before sending',
      'Multi-language support',
    ],
  },
  {
    id: 'automation',
    title: 'Automations & Routing',
    description: 'Auto-assign leads by source and set up smart routing rules for your team.',
    screenshot: '/graphics/features/automations-routing.svg',
    benefits: [
      'Source-based auto-assignment',
      'Custom routing rules',
      'Auto-welcome messages',
      'Smart lead distribution',
      'Time-based triggers',
      'Conditional workflows',
    ],
  },
  {
    id: 'campaigns',
    title: 'Campaigns',
    description: 'Schedule messages, retry failed sends, and track campaign performance.',
    screenshot: '/graphics/features/campaigns.svg',
    benefits: [
      'Schedule messages for later',
      'Retry failed sends automatically',
      'Campaign analytics and reports',
      'Recipient management',
      'Message templates',
      'Bulk messaging support',
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics & Performance',
    description: 'Track response times, conversion rates, and team performance metrics.',
    screenshot: '/graphics/features/analytics-team-performance.svg',
    benefits: [
      'Response time metrics',
      'Conversion tracking',
      'Team performance dashboards',
      'Lead source analytics',
      'Campaign performance reports',
      'Export data for analysis',
    ],
  },
  {
    id: 'team',
    title: 'Team Collaboration',
    description: 'Invite team members, assign roles, and collaborate on leads in real-time.',
    screenshot: '/graphics/features/team-collaboration.svg',
    benefits: [
      'Invite unlimited team members',
      'Role-based permissions',
      'Team assignment and handoffs',
      'Activity feed and notes',
      'Team performance tracking',
      'Multi-workspace support',
    ],
  },
]

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState('inbox')
  const activeSection = productSections.find((s) => s.id === activeTab) || productSections[0]

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16">
        <SectionHeader
          title="Everything You Need to Manage WhatsApp Leads"
          description="A complete WhatsApp CRM and AI automation platform for businesses"
          centered
        />
      </Section>

      {/* Sticky Tabs - Premium Design */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={cn(
                  'relative flex items-center gap-2 px-6 py-4 border-b-2 font-semibold text-sm whitespace-nowrap transition-all duration-200',
                  activeTab === tab.id
                    ? 'border-teal-600 text-teal-600 bg-teal-50/50'
                    : 'border-transparent text-gray-600 hover:text-ink hover:border-gray-300 hover:bg-gray-50/50'
                )}
              >
                <tab.icon size={18} className={cn(
                  'transition-transform duration-200',
                  activeTab === tab.id && 'scale-110'
                )} />
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-600 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Sections - Premium Design */}
      <Section>
        <div className="relative">
          {/* Background gradient glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-teal-50/50 via-transparent to-cyan-50/30 blur-3xl" />
          
          <div className="relative rounded-[32px] bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-[0_24px_80px_rgba(15,23,42,0.08)] p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                {/* Feature label pill */}
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-[0.16em] mb-2">
                  {activeSection.title}
                </div>
                
                {/* Title */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-4 leading-tight font-display">
                  {activeSection.title}
                </h2>
                
                {/* Description */}
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  {activeSection.description}
                </p>
                
                {/* Benefits list */}
                <ul className="space-y-3.5 pt-2">
                  {activeSection.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="relative flex-shrink-0 mt-0.5">
                        <div className="absolute inset-0 bg-teal-100 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center ring-2 ring-teal-50">
                          <div className="w-2 h-2 rounded-full bg-teal-600" />
                        </div>
                      </div>
                      <span className="text-gray-700 text-base leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <div className="pt-4">
                  <Button 
                    href="/demo" 
                    variant="lime"
                    size="lg"
                    className="shadow-lg hover:shadow-xl transition-all group"
                  >
                    See it in action
                    <svg className="ml-2 inline-block w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </div>
              </div>
              
              {/* Right: Premium Image with enhanced effects */}
              <div className="relative">
                {/* Glow effect behind image/video */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-cyan-400/15 to-transparent rounded-[32px] blur-2xl -z-10" />
                
                <div className="relative transform transition-all duration-500 hover:scale-[1.02]">
                  <ScreenshotFrame
                    src={activeSection.screenshot}
                    alt={activeSection.title}
                    status={activeSection.id === 'inbox' ? 'connected' : undefined}
                    aspect="3/2"
                    fit="cover"
                    className="md:animate-float-slow"
                  />
                  {/* Additional premium shadow layer */}
                  <div className="absolute inset-0 rounded-2xl shadow-[0_40px_120px_rgba(11,31,51,0.25)] pointer-events-none -z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray" className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start your 7-day free trial. No credit card required.
          </p>
          <Button href="https://app.leadbuddie.com" size="lg">
            Start Free Trial
          </Button>
        </div>
      </Section>
    </>
  )
}

