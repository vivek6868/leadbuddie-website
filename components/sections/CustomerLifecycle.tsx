'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MessageSquare, UserCheck, RefreshCw, Wrench, Gift, ArrowRight, Check } from 'lucide-react'
import { EASE_OUT } from '@/components/ui/motion'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'

interface LifecycleStep {
  id: string
  label: string
  title: string
  subtitle: string
  icon: any
  actionDescription: string
  whatsappPreview: {
    sender: string
    text: string
    badge?: string
  }[]
  stats: string
  screenshotSrc: string
  screenshotAlt: string
}

const LIFECYCLE_STEPS: LifecycleStep[] = [
  {
    id: 'lead',
    label: 'Lead Capture',
    title: '1. Fast DM Intake',
    subtitle: 'Zero delay lead response',
    icon: MessageSquare,
    actionDescription: 'Buddie captures queries from Google Search or Meta Ads, immediately answers questions about availability, shares brochures, and drafts booking options.',
    whatsappPreview: [
      { sender: 'Customer', text: 'Hi, I saw your ad. What are your installation packages?' },
      { sender: 'Buddie AI', text: 'Hi there! We offer Standard Installation (₹999) and Premium (₹1,499) which includes 1yr extra warranty. Here is the list: leadbuddie.com/install-spec', badge: 'Draft reply prepared' }
    ],
    stats: '10s response time',
    screenshotSrc: '/images/product-inbox.png',
    screenshotAlt: 'LeadBuddie WhatsApp Shared Team Inbox'
  },
  {
    id: 'customer',
    label: 'Onboarding',
    title: '2. Auto-CRM Log',
    subtitle: 'Extract data from chats',
    icon: UserCheck,
    actionDescription: 'No manual spreadsheets. Buddie automatically parses names, location pin codes, and requested models directly from the chat text, logging them to the sales pipeline.',
    whatsappPreview: [
      { sender: 'System Log', text: 'Scanned WhatsApp contact: Ramesh Kulkarni' },
      { sender: 'System Action', text: 'Created Customer Profile: Ramesh Kulkarni, PIN 560001, Product: Kent Grand' }
    ],
    stats: '100% manual logging removed',
    screenshotSrc: '/images/product-leads.png',
    screenshotAlt: 'LeadBuddie Lead CRM Kanban Board'
  },
  {
    id: 'renewal',
    label: 'Renewal Chasing',
    title: '3. AMC Auto-Renew',
    subtitle: 'Prevent contract lapse',
    icon: RefreshCw,
    actionDescription: 'The subscription engine monitors active contracts. 7 days before expiration, Buddie drafts a friendly reminder, invoice, and payment link directly to their WhatsApp.',
    whatsappPreview: [
      { sender: 'Buddie AI', text: 'Hi Priya! Your Gold Service AMC expires in 5 days. Click here to renew in 1 tap: pay.leadbuddie.com/priya', badge: 'AMC Engine' },
      { sender: 'Customer', text: 'Done! Payment sent. Thanks.' }
    ],
    stats: 'Up to 92% renewal retention',
    screenshotSrc: '/images/lead-detail-view.png',
    screenshotAlt: 'LeadBuddie Customer and AMC Detail View'
  },
  {
    id: 'visit',
    label: 'Service Visits',
    title: '4. Technician Dispatch',
    subtitle: 'Close the loop on repairs',
    icon: Wrench,
    actionDescription: 'When repairs or check-ups are booked, Buddie schedules the slot, sends the customer the technician details, and logs the appointment in the field-force queue.',
    whatsappPreview: [
      { sender: 'Customer', text: 'I need a filter change today.' },
      { sender: 'Buddie AI', text: 'Booked for 3:00 PM today. Technician Amit (ID: AM492) will arrive. You can track him here: map.leadbuddie.com/t/amit', badge: 'Auto Scheduled' }
    ],
    stats: '0 missed appointments',
    screenshotSrc: '/images/product-automation.png',
    screenshotAlt: 'LeadBuddie Service Visits Scheduling and Automation'
  },
  {
    id: 'winback',
    label: 'Win-back Campaigns',
    title: '5. Dormant Revival',
    subtitle: 'Re-engage dead accounts',
    icon: Gift,
    actionDescription: 'Buddie regularly audits your database to locate customer accounts that have not purchased in over 6 months, scheduling smart broadcasts with custom discount triggers.',
    whatsappPreview: [
      { sender: 'Buddie AI', text: 'Hey Vikram! It has been 6 months since your last filter check. Book today and get 15% off using code REVIVE15.', badge: 'Re-activation list' },
      { sender: 'Customer', text: 'Great. Please book me for tomorrow morning.' }
    ],
    stats: '15% recovery on cold databases',
    screenshotSrc: '/images/product-campaigns.png',
    screenshotAlt: 'LeadBuddie WhatsApp Campaign Broadcast Manager'
  }
]

export function CustomerLifecycle() {
  const [activeStepId, setActiveStepId] = useState('lead')
  const reduce = useReducedMotion()

  const currentStep = LIFECYCLE_STEPS.find((s) => s.id === activeStepId)!
  const ActiveIcon = currentStep.icon

  return (
    <Section className="border-t border-white/[0.04] bg-[#08080f] relative overflow-hidden" id="customer-lifecycle">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-light/5 rounded-full blur-3xl pointer-events-none" />

      <SectionHeader
        label="Full Journey CRM"
        title="More than a chat bubble"
        description="Most WhatsApp bots answer FAQs and stop there. LeadBuddie runs your entire operations lifecycle, from cold click to repeat renewals."
        centered
        className="mb-16"
      />

      {/* Horizontal / Vertical Stepper Container */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white/[0.01] border border-white/[0.06] p-4 rounded-3xl backdrop-blur-xl relative">
          
          {LIFECYCLE_STEPS.map((step, index) => {
            const StepIcon = step.icon
            const isActive = activeStepId === step.id
            return (
              <div key={step.id} className="flex-1 w-full flex items-center">
                {/* Node Button */}
                <button
                  onClick={() => setActiveStepId(step.id)}
                  className={`flex-1 flex flex-col items-center py-4 px-3 rounded-2xl transition-all duration-200 relative group cursor-pointer ${
                    isActive 
                      ? 'bg-white/[0.03] border border-white/[0.08] shadow-lg shadow-black/20' 
                      : 'border border-transparent hover:bg-white/[0.01]'
                  }`}
                >
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center border transition-colors ${
                    isActive 
                      ? 'bg-teal-500/10 border-teal-500/50 text-teal-400' 
                      : 'bg-white/[0.02] border-white/[0.06] text-[#8888a8] group-hover:text-white'
                  }`}>
                    <StepIcon className="h-5 w-5" />
                  </div>
                  <span className={`text-xs font-semibold mt-3 transition-colors ${
                    isActive ? 'text-white' : 'text-[#8888a8] group-hover:text-white'
                  }`}>
                    {step.label}
                  </span>
                  <span className="text-[10px] text-teal-400 font-mono mt-1 opacity-80">{step.stats.split(' ')[0]} {step.stats.split(' ')[1] || ''}</span>
                </button>

                {/* Arrow Connector (Desktop only, omit for last item) */}
                {index < LIFECYCLE_STEPS.length - 1 && (
                  <div className="hidden md:flex items-center justify-center px-2 text-[#444466]">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Detail Block */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#0f0f1b]/50 border border-white/[0.06] rounded-3xl p-6 md:p-8 backdrop-blur-xl relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepId}
              initial={reduce ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? {} : { opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-center"
            >
              {/* Text Description */}
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] text-teal-400 font-mono font-bold uppercase tracking-widest">{currentStep.label} Stage</span>
                  <h3 className="text-2xl font-bold text-white mt-1 leading-none">{currentStep.title}</h3>
                  <p className="text-xs text-text-secondary mt-1 font-semibold uppercase tracking-wider">{currentStep.subtitle}</p>
                </div>

                <p className="text-sm md:text-base text-[#8888a8] leading-relaxed">
                  {currentStep.actionDescription}
                </p>

                <div className="border-t border-white/[0.06] pt-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                      <Check className="h-4 w-4 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Target Metric Boost</h4>
                      <p className="text-xs text-[#8888a8] mt-0.5 font-semibold font-mono">{currentStep.stats}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Dashboard Screenshot & Playbook Chat stream */}
              <div className="space-y-6">
                {/* Widescreen Browser Mockup */}
                <ScreenshotFrame
                  src={currentStep.screenshotSrc}
                  alt={currentStep.screenshotAlt}
                  aspect="16/9"
                  fit="cover"
                  label={`${currentStep.label} View`}
                  className="w-full shadow-2xl"
                />

                {/* WhatsApp Playbook Execution Logs */}
                <div className="bg-[#0b0b13] border border-white/[0.08] rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-1">
                    <span className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                      <ActiveIcon className="h-3.5 w-3.5 text-teal-400" />
                      PLAYBOOK_EXECUTION
                    </span>
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="space-y-3">
                    {currentStep.whatsappPreview.map((msg, i) => {
                      const isSystem = msg.sender.includes('System')
                      const isBuddie = msg.sender.includes('Buddie')
                      
                      return (
                        <div
                          key={i}
                          className={`rounded-xl p-3 text-xs max-w-[85%] ${
                            isSystem
                              ? 'bg-white/[0.02] border border-white/[0.04] text-[#8888a8] font-mono text-[11px]'
                              : isBuddie
                              ? 'bg-[#091b14] border border-emerald-500/20 text-white ml-auto'
                              : 'bg-white/[0.04] border border-white/[0.08] text-white'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-[10px] font-bold ${
                              isSystem ? 'text-[#666688]' : isBuddie ? 'text-teal-400' : 'text-text-secondary'
                            }`}>
                              {msg.sender}
                            </span>
                            {msg.badge && (
                              <span className="bg-emerald-500/10 text-emerald-400 text-[8px] font-semibold px-1.5 py-0.2 rounded border border-emerald-500/20">
                                {msg.badge}
                              </span>
                            )}
                          </div>
                          <p className="leading-relaxed">{msg.text}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
