'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MessageSquare, UserCheck, RefreshCw, Wrench, Gift, Check } from 'lucide-react'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'

interface LifecycleStep {
  id: string
  label: string
  title: string
  subtitle: string
  icon: any
  actionDescription: string
  highlights: string[]
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
    highlights: [
      'Instant AI replies to customer questions on WhatsApp',
      'Connects directly to Meta Ads & Google Search leads',
      'Automatically shares price lists, brochures & schedules'
    ],
    whatsappPreview: [
      { sender: 'Customer', text: 'Hi, I saw your ad. What are your installation packages?' },
      { sender: 'Buddie AI', text: 'Hi there! We offer Standard Installation (₹499) and Premium (₹799) which includes 1yr extra warranty. Here is the list: leadbuddie.com/install-spec', badge: 'Draft reply prepared' }
    ],
    stats: '10s response time',
    screenshotSrc: '/images/lead-capture-flow.png',
    screenshotAlt: 'LeadBuddie WhatsApp Shared Team Inbox'
  },
  {
    id: 'customer',
    label: 'Onboarding',
    title: '2. Auto-CRM Log',
    subtitle: 'Extract data from chats',
    icon: UserCheck,
    actionDescription: 'No manual spreadsheets. Buddie automatically parses names, area PIN codes, and requested models directly from the chat text, logging them to the sales pipeline.',
    highlights: [
      'Reads names, addresses, and phone numbers automatically',
      'Categorizes leads by location & interest automatically',
      'Eliminates human error & copy-pasting'
    ],
    whatsappPreview: [
      { sender: 'System Log', text: 'Scanned WhatsApp contact: Lakshmi Narayan' },
      { sender: 'System Action', text: 'Created Customer Profile: Lakshmi Narayan, Coimbatore 641001, Product: Kent Grand' }
    ],
    stats: '100% manual logging removed',
    screenshotSrc: '/images/onboarding-flow.png',
    screenshotAlt: 'LeadBuddie Lead CRM Kanban Board'
  },
  {
    id: 'renewal',
    label: 'Renewal Chasing',
    title: '3. AMC Auto-Renew',
    subtitle: 'Prevent contract lapse',
    icon: RefreshCw,
    actionDescription: 'The subscription engine monitors active contracts. 7 days before expiration, Buddie drafts a friendly reminder, invoice, and payment link directly to their WhatsApp.',
    highlights: [
      'Automatic contract tracking & renewal alerts',
      'Generates and sends WhatsApp-friendly payment links',
      'Frictionless 1-tap payment for your customers'
    ],
    whatsappPreview: [
      { sender: 'Buddie AI', text: 'Hi Lakshmi! Your Gold Service AMC expires in 5 days. Click here to renew in 1 tap: pay.leadbuddie.com/lakshmi', badge: 'AMC Engine' },
      { sender: 'Customer', text: 'Done! Payment sent. Thanks.' }
    ],
    stats: 'Up to 92% renewal retention',
    screenshotSrc: '/images/renewal-chasing-flow.png',
    screenshotAlt: 'LeadBuddie Customer and AMC Detail View'
  },
  {
    id: 'visit',
    label: 'Service Visits',
    title: '4. Technician Dispatch',
    subtitle: 'Close the loop on repairs',
    icon: Wrench,
    actionDescription: 'When repairs or check-ups are booked, Buddie schedules the slot, sends the customer the technician details, and logs the appointment in the field-force queue.',
    highlights: [
      'Live scheduling integrated with technician calendars',
      'Sends technician profile name & tracking link on WhatsApp',
      'Automatically logs visit completion and billing status'
    ],
    whatsappPreview: [
      { sender: 'Customer', text: 'I need a filter change today.' },
      { sender: 'Buddie AI', text: 'Booked for 3:00 PM today. Technician Ravi (ID: RV492) will arrive. You can track them here: map.leadbuddie.com/t/ravi', badge: 'Auto Scheduled' }
    ],
    stats: '0 missed appointments',
    screenshotSrc: '/images/service-visit-flow.png',
    screenshotAlt: 'LeadBuddie Service Visits Scheduling and Automation'
  },
  {
    id: 'winback',
    label: 'Win-back Campaigns',
    title: '5. Dormant Revival',
    subtitle: 'Re-engage dead accounts',
    icon: Gift,
    actionDescription: 'Buddie regularly audits your database to locate customer accounts that have not purchased in over 6 months, scheduling smart broadcasts with custom discount triggers.',
    highlights: [
      'Identifies inactive or old customers automatically',
      'Sends smart, personalized WhatsApp coupon broadcasts',
      'Turns dead database contacts into fresh revenue streams'
    ],
    whatsappPreview: [
      { sender: 'Buddie AI', text: 'Hey Vikram! It has been 6 months since your last system check. Book today and get 15% off using code REVIVE15.', badge: 'Re-activation list' },
      { sender: 'Customer', text: 'Great. Please book me for tomorrow morning.' }
    ],
    stats: '15% recovery on cold databases',
    screenshotSrc: '/images/winback-campaign-flow.png',
    screenshotAlt: 'LeadBuddie WhatsApp Campaign Broadcast Manager'
  }
]

export function CustomerLifecycle() {
  const reduce = useReducedMotion()

  return (
    <Section className="border-t border-border bg-bg-secondary relative overflow-hidden" id="customer-lifecycle">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <SectionHeader
        label="The full lead journey"
        title="More than a chat bubble"
        description="Most WhatsApp bots answer one question and stop. Buddie handles the whole journey — from first enquiry to booking, renewal, and repeat business."
        centered
        className="mb-16 md:mb-24"
      />

      <div className="max-w-6xl mx-auto relative px-4 md:px-8">
        {/* Vertical Pipeline line for Desktop */}
        <div className="absolute left-[34px] lg:left-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-brand/50 via-border to-brand/10 transform lg:-translate-x-1/2 hidden md:block" />

        {/* Lifecycle Steps Stack */}
        <div className="space-y-20 md:space-y-32">
          {LIFECYCLE_STEPS.map((step, index) => {
            const StepIcon = step.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={step.id}
                initial={reduce ? {} : { opacity: 0, y: 25 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Vertical Node Icon on Desktop */}
                <div className="absolute left-0 lg:left-1/2 top-0 transform -translate-x-[7px] lg:-translate-x-1/2 hidden md:flex h-10 w-10 rounded-full bg-bg-card border-2 border-brand shadow-sm items-center justify-center z-10">
                  <StepIcon className="h-4 w-4 text-brand" />
                </div>

                {/* Text Description Column */}
                <div className={`space-y-6 ${!isEven ? 'lg:order-last lg:pl-8' : 'lg:pr-8'}`}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {/* Mobile Step Icon & Label */}
                      <div className="md:hidden h-8 w-8 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20">
                        <StepIcon className="h-4 w-4 text-brand" />
                      </div>
                      <span className="text-[11px] text-brand font-mono font-bold uppercase tracking-widest bg-brand/5 px-2 py-0.5 rounded-full border border-brand/10">
                        Step 0{index + 1}: {step.label}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">
                      {step.title.split('. ')[1] || step.title}
                    </h3>
                    <p className="text-xs text-text-muted font-bold uppercase tracking-wider">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                    {step.actionDescription}
                  </p>

                  {/* Highlights bullet list */}
                  <ul className="space-y-2.5">
                    {step.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-text-secondary">
                        <div className="h-4 w-4 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 border border-emerald-500/25 shrink-0 mt-0.5">
                          <Check className="h-2.5 w-2.5" />
                        </div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Target Metric Boost Box */}
                  <div className="bg-bg-card border border-border/80 rounded-2xl p-4 shadow-sm flex items-center gap-3.5 max-w-sm">
                    <div className="h-10 w-10 rounded-xl bg-brand/10 flex items-center justify-center border border-brand/20 shrink-0">
                      <Check className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider">Target Metric Boost</h4>
                      <p className="text-sm font-extrabold text-brand font-mono mt-0.5">{step.stats}</p>
                    </div>
                  </div>

                  {/* WhatsApp Playbook Execution Logs (collapsible/compact visual) */}
                  <div className="bg-bg-elevated border border-border rounded-2xl p-4 space-y-3.5 max-w-lg shadow-inner">
                    <div className="flex items-center justify-between border-b border-border pb-2">
                      <span className="text-[10px] font-bold text-text-secondary font-mono flex items-center gap-1.5">
                        <StepIcon className="h-3 w-3 text-brand" />
                        PLAYBOOK_EXECUTION
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                        <span className="text-[9px] text-text-muted font-mono font-semibold">Active</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {step.whatsappPreview.map((msg, i) => {
                        const isSystem = msg.sender.includes('System')
                        const isBuddie = msg.sender.includes('Buddie')
                        
                        return (
                          <div
                            key={i}
                            className={`rounded-xl p-2.5 text-[11px] max-w-[85%] ${
                              isSystem
                                ? 'bg-bg-primary border border-border text-text-secondary font-mono text-[10px]'
                                : isBuddie
                                ? 'bg-brand/10 border border-brand/20 text-text-primary ml-auto shadow-sm'
                                : 'bg-bg-card border border-border text-text-primary shadow-sm'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-0.5">
                              <span className={`text-[9px] font-bold ${
                                isSystem ? 'text-text-muted' : isBuddie ? 'text-brand-hover' : 'text-text-secondary'
                              }`}>
                                {msg.sender}
                              </span>
                              {msg.badge && (
                                <span className="bg-brand/15 text-brand-hover text-[7px] font-bold px-1.5 py-0.2 rounded border border-brand/20">
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

                {/* Illustration Image Column */}
                <div className={`flex items-center justify-center ${isEven ? 'lg:pl-8' : 'lg:pr-8'}`}>
                  <div className="relative group w-full max-w-[480px]">
                    {/* Ambient Glow behind the image */}
                    <div className="absolute -inset-3 bg-gradient-to-tr from-brand-glow via-brand/10 to-wa-glow opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500 rounded-full" />
                    
                    <ScreenshotFrame
                      src={step.screenshotSrc}
                      alt={step.screenshotAlt}
                      aspect="1/1"
                      fit="contain"
                      label={`${step.label} Flow`}
                      className="w-full shadow-lg bg-white border border-border rounded-3xl overflow-hidden transform group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
