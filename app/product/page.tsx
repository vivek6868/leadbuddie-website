'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'
import { Button } from '@/components/ui/Button'
import { MessageSquare, Kanban, Sparkles, Zap, Send, BarChart, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

const tabs = [
  { id: 'inbox', label: 'Inbox', icon: MessageSquare },
  { id: 'leads', label: 'Leads', icon: Kanban },
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
    screenshot: '/images/product-inbox.png',
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
    description: 'Track every lead from first contact to close with custom statuses, tags, and follow-ups.',
    screenshot: '/images/product-leads.png',
    benefits: [
      'Custom lead statuses and pipelines',
      'Tags and categorization',
      'Budget and source tracking',
      'Follow-up reminders and due dates',
      'Lead notes and activity history',
      'Quick lead assignment',
    ],
  },
  {
    id: 'ai',
    title: 'AI Insights & Smart Replies',
    description: 'Get AI-suggested replies and instant conversation summaries to respond faster.',
    screenshot: '/images/product-ai.png',
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
    screenshot: '/images/product-automation.png',
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
    screenshot: '/images/product-campaigns.png',
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
    screenshot: '/images/product-analytics.png',
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
    screenshot: '/images/product-team.png',
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
          description="A complete WhatsApp CRM and AI automation platform built for Indian SMBs"
          centered
        />
      </Section>

      {/* Sticky Tabs */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
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
                  'flex items-center gap-2 px-6 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors',
                  activeTab === tab.id
                    ? 'border-teal-600 text-teal-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                )}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Sections */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4">
              {activeSection.title}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {activeSection.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">{activeSection.description}</p>
            <ul className="space-y-3 mb-8">
              {activeSection.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button href="/demo" variant="outline">
              See it in action
            </Button>
          </div>
          <div>
            <ScreenshotFrame
              src={activeSection.screenshot}
              alt={activeSection.title}
              status={activeSection.id === 'inbox' ? 'connected' : undefined}
              aspect="3/2"
            />
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

