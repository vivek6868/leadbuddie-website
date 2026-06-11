'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageSquare,
  Kanban,
  RefreshCcw,
  Send,
  Sparkles,
  BarChart,
  Check,
  type LucideIcon,
} from 'lucide-react'

interface TabFeature {
  id: string
  label: string
  icon: LucideIcon
  title: string
  description: string
  screenshot: string
  benefits: string[]
}

const TOUR_TABS: TabFeature[] = [
  {
    id: 'inbox',
    label: 'Shared Inbox',
    icon: MessageSquare,
    title: 'Unified WhatsApp & Instagram Team Inbox',
    description: 'Your AI Sales Employee and human team work from the same desk. Buddie qualifies leads and drafts responses automatically. Skim your chats, approve recommendations, or take over anytime.',
    screenshot: '/images/product-inbox.png',
    benefits: [
      'One official number for your entire sales and support team',
      'Inline AI replies drafted in seconds, ready for review or auto-send',
      'Filters to separate active chats, callbacks, and quiet prospects',
      'Mobile-responsive layout to run your shop on the go',
    ],
  },
  {
    id: 'crm',
    label: 'Lead CRM',
    icon: Kanban,
    title: 'Pipeline Built for WhatsApp Conversations',
    description: 'Stop letting leads slip through Excel sheets. LeadBuddie captures every WhatsApp contact, extracts details automatically from chats, and organizes them in a clear visual pipeline.',
    screenshot: '/images/product-leads.png',
    benefits: [
      'Automatic contact capture with zero copy-pasting',
      'Categorize leads (New, Contacted, Won, Lost) in one tap',
      'Add internal notes, tags, and custom fields right next to the chat',
      'Clear ownership tracking so team members know who handles what',
    ],
  },
  {
    id: 'amc',
    label: 'AMC Engine',
    icon: RefreshCcw,
    title: 'Automate Renewal Reminders on Auto',
    description: 'Keep your recurring revenue recurring. Buddie tracks warranty and AMC dates, sends reminders on WhatsApp (60/30/15/7 days before expiry), and alerts you for follow-up calls.',
    screenshot: '/images/lead-detail-view.png',
    benefits: [
      'Automatic renewal tracking sorted by urgency',
      'WhatsApp templates designed to get double-digit renewal rates',
      'Callback management with dates and wife/husband approval notes',
      'Customer-installed equipment and service visit history at a glance',
    ],
  },
  {
    id: 'campaigns',
    label: 'WhatsApp Campaigns',
    icon: Send,
    title: 'Personalized Campaigns with Zero Ban Risk',
    description: 'Send brochures, new product launches, festival greetings, and bulk renewal notices. Built as an official Meta Cloud API provider to respect safety boundaries.',
    screenshot: '/images/product-campaigns.png',
    benefits: [
      'Officially compliant Meta WhatsApp Business integration',
      'Send custom PDFs, videos, and catalogs to specific customer lists',
      'Schedule campaigns for festivals or high-conversion hours',
      'Real-time stats: see exactly who opened, read, and replied',
    ],
  },
  {
    id: 'ai',
    label: 'AI Autopilot',
    icon: Sparkles,
    title: 'Set Autonomy Levels You Trust',
    description: 'You are in control. Run Buddie on three different modes (Watch, Approval, or Auto) per channel. He never invents prices and yields to humans immediately.',
    screenshot: '/images/product-ai.png',
    benefits: [
      'Watch mode: drafts suggestions internally for training',
      'Approval mode: queues drafts for one-tap human send',
      'Auto mode: replies on autopilot to standard enquiries',
      'Automatic pause when a human agent sends a manual message',
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart,
    title: 'Monitor Sales Speeds & Revenue Growth',
    description: 'Ditch the guesswork. View clear dashboards showing total revenue generated, AMC recovery rates, team response times, and campaign efficiency.',
    screenshot: '/images/product-analytics.png',
    benefits: [
      'Track response times and conversion rates per agent',
      'See exact revenue recovered from AMC reminders',
      'Compare performance of different WhatsApp campaigns',
      'Know which lead sources generate the highest ROI',
    ],
  },
]

export function ProductTour() {
  const [activeTab, setActiveTab] = useState<string>('inbox')
  const activeFeature = TOUR_TABS.find((t) => t.id === activeTab) || TOUR_TABS[0]

  return (
    <Section background="elevated" id="product-tour" className="relative overflow-hidden border-t border-b border-white/[0.04]">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-glow/30 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 w-80 h-80 bg-wa-glow/20 rounded-full blur-3xl" />

      <SectionHeader
        label="Inside the Product"
        title="See the real LeadBuddie dashboard"
        description="No abstractions. Take a look at the actual dashboards and interfaces our dealers use to run their daily customer operations."
        centered
        className="mb-14 relative z-10"
      />

      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start relative z-10">
        {/* Left Side: Navigation Tabs & Benefits */}
        <div className="space-y-8">
          {/* Tabs Container */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2 p-1.5 rounded-2xl bg-bg-secondary/60 border border-white/[0.06] backdrop-blur-md">
            {TOUR_TABS.map((tab) => {
              const Icon = tab.icon
              const isActive = tab.id === activeTab

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.02]'
                  }`}
                >
                  {/* Sliding active background indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand/20 via-brand-light/10 to-transparent border border-brand/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  <Icon
                    className={`h-4.5 w-4.5 shrink-0 transition-colors ${
                      isActive ? 'text-brand-light' : 'text-text-muted group-hover:text-text-secondary'
                    }`}
                  />
                  <span className="text-sm font-semibold tracking-wide whitespace-nowrap lg:whitespace-normal">
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Benefits Detail Card */}
          <div className="rounded-2xl border border-white/[0.08] bg-bg-card/45 p-6 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-bold text-white mb-3">
              {activeFeature.title}
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary mb-6">
              {activeFeature.description}
            </p>

            <ul className="space-y-3">
              {activeFeature.benefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-subtle text-brand-light mt-0.5 border border-brand/20">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-text-primary leading-snug">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Product Screenshot Display */}
        <div className="relative w-full">
          {/* Subtle browser shadow/container frame */}
          <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-gradient-to-tr from-brand-glow via-transparent to-wa-glow blur-3xl opacity-50" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full"
            >
              <div className="relative rounded-2xl border border-white/[0.08] bg-bg-card/50 shadow-2xl p-2.5 backdrop-blur-md">
                {/* Browser top-bar mock */}
                <div className="flex items-center justify-between pb-3 px-2.5 border-b border-white/[0.06] mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="h-5 w-1/2 rounded bg-white/[0.04] border border-white/[0.04] flex items-center justify-center text-[10px] text-text-muted font-mono tracking-wide">
                    app.leadbuddie.com/{activeTab}
                  </div>
                  <div className="w-10 h-2 bg-transparent" />
                </div>

                <ScreenshotFrame
                  src={activeFeature.screenshot}
                  alt={activeFeature.title}
                  aspect="3/2"
                  fit="contain"
                  disableHover={true}
                  className="rounded-xl overflow-hidden border border-white/[0.04] bg-bg-primary/50"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
