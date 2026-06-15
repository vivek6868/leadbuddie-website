'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { 
  XCircle, 
  CheckCircle2, 
  MessageSquareOff, 
  Clock, 
  AlertTriangle,
  TrendingDown,
  Sparkles,
  ArrowRight,
  UserCheck
} from 'lucide-react'
import { EASE_OUT } from '@/components/ui/motion'

const LEAKS = [
  {
    icon: MessageSquareOff,
    title: 'Silent Lead Leaks',
    desc: 'Prospects text you on WhatsApp. You are in the field. Hours pass without a reply, and they buy from a faster competitor.',
    metric: '60% of DM leads slip away'
  },
  {
    icon: Clock,
    title: 'Forgotten AMC Renewals',
    desc: 'Service contracts expire quietly in local notebooks or spreadsheets. Because nobody sends a reminder, you leak recurring revenue.',
    metric: '35% contract lapse rate'
  },
  {
    icon: AlertTriangle,
    title: 'Technician Scheduling Chaos',
    desc: 'Customer books a repair, but the visit details are lost in chat screenshots. Service boys miss the appointment, damaging trust.',
    metric: 'High coordination churn'
  }
]

const SAVES = [
  {
    icon: Sparkles,
    title: 'Instant 10s Engagement',
    desc: 'Buddie drafts qualified, context-aware answers instantly, sending catalogues and closing bookings even when you are busy.',
    metric: '100% response rate'
  },
  {
    icon: UserCheck,
    title: 'Automated Renewal Alerts',
    desc: 'The AMC engine scans dates and prepares reminders. Customers receive payment links on WhatsApp and renew in one click.',
    metric: 'Up to 92% renewal retention'
  },
  {
    icon: CheckCircle2,
    title: 'Closed-Loop Scheduling',
    desc: 'Visits are automatically logged, technicians assigned on the dashboard, and automated alerts keep clients and service boys aligned.',
    metric: 'Zero missed appointments'
  }
]

export function ProblemStatement() {
  const reduce = useReducedMotion()

  return (
    <Section className="border-t border-white/[0.04] bg-[#05050a] relative">
      {/* Subtle glowing separators */}
      <div className="absolute top-0 left-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-red-500/10 to-transparent" />

      <SectionHeader
        label="The Contrast"
        title="Are you running operations, or managing leaks?"
        description="Every day without a system of record is a day of lost contracts, slow response penalties, and missed service calls."
        centered
        className="mb-16 md:mb-20"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
        
        {/* Column 1: The Leaking Business */}
        <div className="rounded-3xl border border-red-500/10 bg-red-500/[0.01] p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/[0.02] filter blur-xl rounded-full" />
          
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-8 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
              <XCircle className="h-4 w-4 text-red-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-none">The Leaking Business</h3>
              <p className="text-[10px] text-red-400 font-mono mt-1 font-semibold uppercase tracking-wider">Unorganized Operations</p>
            </div>
          </div>

          <div className="space-y-6">
            {LEAKS.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={reduce ? {} : { opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: EASE_OUT }}
                  className="flex gap-4 items-start p-4 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:bg-white/[0.02] transition-colors group"
                >
                  <div className="h-9 w-9 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/15 group-hover:scale-105 transition-transform">
                    <Icon className="h-4.5 w-4.5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white/90">{item.title}</h4>
                    <p className="text-xs text-[#8888a8] mt-1.5 leading-relaxed">{item.desc}</p>
                    <span className="inline-block mt-2 text-[10px] font-bold font-mono text-red-400/80 bg-red-500/5 px-2 py-0.5 rounded border border-red-500/10">
                      {item.metric}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Column 2: The Closed-Loop Success */}
        <div className="rounded-3xl border border-teal-500/15 bg-teal-500/[0.01] p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/[0.02] filter blur-xl rounded-full" />
          
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-8 rounded-full bg-teal-500/15 flex items-center justify-center border border-teal-500/30">
              <CheckCircle2 className="h-4 w-4 text-teal-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-none">The LeadBuddie Standard</h3>
              <p className="text-[10px] text-teal-400 font-mono mt-1 font-semibold uppercase tracking-wider">AI Operations Workspace</p>
            </div>
          </div>

          <div className="space-y-6">
            {SAVES.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={reduce ? {} : { opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: EASE_OUT }}
                  className="flex gap-4 items-start p-4 rounded-2xl bg-teal-500/[0.02] border border-teal-500/10 hover:border-teal-500/30 hover:bg-teal-500/[0.03] transition-colors group"
                >
                  <div className="h-9 w-9 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0 border border-teal-500/20 group-hover:scale-105 transition-transform">
                    <Icon className="h-4.5 w-4.5 text-teal-400 animate-pulse-slow" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-[#8888a8] mt-1.5 leading-relaxed">{item.desc}</p>
                    <span className="inline-block mt-2 text-[10px] font-bold font-mono text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                      {item.metric}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </Section>
  )
}


