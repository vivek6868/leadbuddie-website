'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { 
  Sparkles, 
  Clock, 
  PhoneCall, 
  RefreshCcw, 
  HelpCircle,
  Play,
  Check,
  User,
  ArrowRight,
  TrendingUp,
  MessageSquare
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { EASE_OUT } from '@/components/ui/motion'

type WorkItem = {
  id: string
  intent: string
  contact: string
  details: string
  status: 'drafted' | 'pending_approval' | 'urgent'
  action: string
  icon: any
  time: string
}

const WORK_ITEMS: WorkItem[] = [
  {
    id: '1',
    intent: 'Asked about pricing',
    contact: 'Ramesh Kulkarni (Kent Grand)',
    details: 'Customer asked for catalog and discount options. Drafted pricing block with installation details.',
    status: 'drafted',
    action: 'Approve pricing send',
    icon: MessageSquare,
    time: '2m ago'
  },
  {
    id: '2',
    intent: 'Requested a demo',
    contact: 'Classic Leathers (Bulk)',
    details: 'Inbound retailer requested a product walkthrough. Prepared Calendly booking flow.',
    status: 'pending_approval',
    action: 'Confirm booking invite',
    icon: Play,
    time: '5m ago'
  },
  {
    id: '3',
    intent: 'Renewal due',
    contact: 'Priya Desai (Gold AMC)',
    details: 'Contract expires in 5 days. Drafted standard renewal invoice (₹2,499) + payment link.',
    status: 'drafted',
    action: 'Send Gold AMC reminder',
    icon: RefreshCcw,
    time: '12m ago'
  },
  {
    id: '4',
    intent: 'Follow-up overdue',
    contact: 'Spectrum Painting',
    details: 'Sent quote yesterday. Customer read but went quiet. Drafted day-1 quote check-in.',
    status: 'urgent',
    action: 'Trigger check-in alert',
    icon: Clock,
    time: '22m ago'
  }
]

export function BuddieAgent() {
  const reduce = useReducedMotion()

  return (
    <Section className="bg-[#050508] border-t border-white/[0.04] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(124,58,237,0.08),transparent_50%)]" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center relative z-10">
        
        {/* Copy Column */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-3.5 py-1.5 text-xs font-semibold text-teal-300 mb-6 tracking-wide uppercase">
            <Sparkles className="h-3.5 w-3.5 text-teal-400" />
            Supervised Employee
          </div>

          <h2 className="text-balance text-3xl font-bold leading-[1.05] text-white md:text-5xl font-heading">
            Buddie is not software. <br />
            <span className="bg-gradient-to-r from-teal-300 via-white to-brand-light bg-clip-text text-transparent">
              Buddie is your employee.
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#8888a8] md:text-lg">
            Traditional CRMs expect you to type, log, click, and manage spreadsheets. 
            Buddie actively watches your incoming chats, parses customer intent, 
            drafts responses, and builds a chronological queue of work tasks. 
            You don&apos;t run a dashboard—you supervise an assistant.
          </p>

          {/* Value bullet points */}
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-5 w-5 bg-teal-500/10 border border-teal-500/25 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3 w-3 text-teal-300" strokeWidth={2.6} />
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                <strong>No price invention:</strong> If a customer asks a question you haven&apos;t configured, Buddie pauses and hands off the chat.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-5 w-5 bg-teal-500/10 border border-teal-500/25 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3 w-3 text-teal-300" strokeWidth={2.6} />
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                <strong>Instant human takeover:</strong> Sending a manual reply instantly pauses the AI agent for that conversation.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Button href="https://app.leadbuddie.com" variant="primary" className="shadow-lg shadow-teal-500/15">
              Put Buddie to Work
            </Button>
          </div>
        </div>

        {/* Work Queue Visual Column */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-glow via-transparent to-teal-500/5 blur-3xl" />
          
          <div className="relative rounded-3xl border border-white/[0.08] bg-[#0b0b14]/85 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.8)] backdrop-blur-xl">
            {/* Queue Header */}
            <div className="flex justify-between items-center pb-4 border-b border-white/[0.06] mb-4">
              <div>
                <p className="text-[10px] font-bold text-white/35 uppercase tracking-widest leading-none">AI Assistant Queue</p>
                <h4 className="text-sm font-bold text-white mt-1.5">Active Worklist</h4>
              </div>
              <span className="text-[9.5px] font-mono bg-teal-500/10 text-teal-300 border border-teal-500/20 px-2 py-0.5 rounded-full">
                4 tasks due
              </span>
            </div>

            {/* List stack */}
            <div className="space-y-3">
              {WORK_ITEMS.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.id}
                    initial={reduce ? {} : { opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08, ease: EASE_OUT }}
                    className="group rounded-2xl border border-white/[0.05] bg-[#07070b] p-3.5 hover:border-white/10 hover:bg-white/[0.01] transition-all relative overflow-hidden"
                  >
                    {/* Glowing indicator left border */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all ${
                      item.status === 'urgent' 
                        ? 'bg-rose-500' 
                        : item.status === 'pending_approval'
                        ? 'bg-amber-500 animate-pulse'
                        : 'bg-teal-400'
                    }`} />

                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 border ${
                          item.status === 'urgent'
                            ? 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                            : item.status === 'pending_approval'
                            ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                            : 'bg-teal-500/10 border-teal-500/20 text-teal-300'
                        }`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold text-white">{item.intent}</span>
                            <span className="text-[7.5px] font-mono text-white/35">{item.time}</span>
                          </div>
                          <p className="text-[9.5px] font-semibold text-white/60 mt-0.5 leading-none">{item.contact}</p>
                          <p className="text-[10px] text-[#8888a8] mt-2 leading-relaxed">{item.details}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action trigger footer */}
                    <div className="mt-3.5 pt-3 border-t border-white/[0.04] flex justify-between items-center">
                      <span className="text-[9px] font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1 group-hover:text-teal-300 transition-colors">
                        {item.action}
                        <ArrowRight className="h-2.5 w-2.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                      <span className="h-5 rounded bg-white/[0.04] border border-white/[0.06] px-2 flex items-center text-[8.5px] font-semibold text-white/45">
                        Approve
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </Section>
  )
}

