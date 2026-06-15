'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Eye, ShieldAlert, ThumbsUp, Zap, Check, ArrowRight } from 'lucide-react'
import { EASE_OUT } from '@/components/ui/motion'

type Mode = 'watch' | 'approve' | 'auto'

interface ModeDetails {
  id: Mode
  name: string
  tagline: string
  description: string
  agency: string
  risk: string
  bestFor: string
  color: string
  icon: any
}

const MODES: ModeDetails[] = [
  {
    id: 'watch',
    name: 'Watch Mode',
    tagline: 'Observe, log, and learn.',
    description: 'Buddie runs silently in the background of your WhatsApp Business. It monitors chats, transcribes details, updates your CRM, and tags lead warmth—all without drafting or sending a single message.',
    agency: 'Passive Logger',
    risk: '0% Autonomy (Safe Mode)',
    bestFor: 'First-week testing and training Buddie on your business tone.',
    color: 'from-blue-400 to-indigo-500',
    icon: Eye,
  },
  {
    id: 'approve',
    name: 'Approve Mode',
    tagline: 'AI drafts. You approve. One tap to send.',
    description: 'Buddie drafts context-aware replies, renewal messages, and appointment details. You receive a push notification, review the response on your phone or web app, and tap once to approve and send.',
    agency: 'AI Copilot',
    risk: 'Human-in-the-Loop Control',
    bestFor: 'High-value B2B deals, custom pricing requests, and field service companies.',
    color: 'from-teal-400 to-emerald-500',
    icon: ThumbsUp,
  },
  {
    id: 'auto',
    name: 'Auto Mode',
    tagline: 'Autopilot for common tasks and workflows.',
    description: 'Buddie operates autonomously for pre-approved scenarios. It responds to standard product queries, sends catalogs, schedules service calls, and follows up with quiet leads without you lifting a finger.',
    agency: 'Fully Autonomous',
    risk: '100% Autopilot execution',
    bestFor: 'FAQs, out-of-office hours, chasing lapsed AMCs, and fast-moving sales.',
    color: 'from-purple-400 to-pink-500',
    icon: Zap,
  },
]

export function AutonomyModes() {
  const [activeMode, setActiveMode] = useState<Mode>('approve')
  const reduce = useReducedMotion()

  const currentMode = MODES.find((m) => m.id === activeMode)!
  const IconComponent = currentMode.icon

  return (
    <Section className="border-t border-white/[0.04] bg-[#08080f] relative overflow-hidden" id="autonomy-modes">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <SectionHeader
        label="Granular Autonomy"
        title="Deploy AI at your comfort level"
        description="Choose how much agency you give Buddie. Toggle modes in one click, from zero-risk logging to fully autonomous follow-ups."
        centered
        className="mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-12 items-center relative z-10">
        
        {/* Left Column: Selector and details */}
        <div className="flex flex-col justify-between h-full">
          {/* Mode Switcher Buttons */}
          <div className="grid grid-cols-3 gap-2 bg-white/[0.02] border border-white/[0.06] p-1.5 rounded-2xl mb-8">
            {MODES.map((mode) => {
              const MIcon = mode.icon
              const isActive = activeMode === mode.id
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`relative flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-3 rounded-xl transition-all duration-200 text-xs font-semibold ${
                    isActive ? 'text-white' : 'text-[#8888a8] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-mode-bg"
                      className="absolute inset-0 bg-[#161624] border border-white/[0.08] rounded-xl shadow-lg shadow-black/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <MIcon className={`h-4 w-4 relative z-10 ${isActive ? 'text-teal-400' : 'text-[#8888a8]'}`} />
                  <span className="relative z-10 text-[11px] sm:text-xs tracking-tight">{mode.name.split(' ')[0]}</span>
                </button>
              )
            })}
          </div>

          {/* Details Card */}
          <div className="bg-[#0f0f1b]/80 border border-white/[0.06] rounded-3xl p-6 md:p-8 backdrop-blur-xl relative min-h-[340px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMode}
                initial={reduce ? {} : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? {} : { opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
                className="space-y-6"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${currentMode.color} p-px`}>
                      <div className="h-full w-full bg-[#0d0d18] rounded-[11px] flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-white animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-none">{currentMode.name}</h3>
                      <p className="text-xs text-teal-400 mt-1 font-medium">{currentMode.tagline}</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm md:text-base text-[#8888a8] leading-relaxed">
                  {currentMode.description}
                </p>

                <div className="grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-6">
                  <div>
                    <h4 className="text-[10px] text-[#8888a8] uppercase font-mono tracking-wider font-semibold">Buddie's Role</h4>
                    <p className="text-sm font-semibold text-white mt-0.5">{currentMode.agency}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] text-[#8888a8] uppercase font-mono tracking-wider font-semibold">Control Risk</h4>
                    <p className="text-sm font-semibold text-white mt-0.5">{currentMode.risk}</p>
                  </div>
                </div>

                <div className="rounded-xl bg-white/[0.02] border border-white/[0.04] p-4 text-xs text-[#8888a8] flex items-start gap-2.5">
                  <ShieldAlert className="h-4 w-4 text-teal-400/80 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Best for:</strong> {currentMode.bestFor}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Visual Simulator of Dashboard/Phone Interface */}
        <div className="bg-[#0f0f1b]/30 border border-white/[0.06] rounded-3xl p-6 md:p-8 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between aspect-[4/3] max-w-full">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="text-[11px] font-mono text-[#444466] ml-2">BUDDIE_AGENT_SIMULATOR</span>
            </div>
            <div className="rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-semibold text-[#8888a8] border border-white/[0.06]">
              {activeMode.toUpperCase()}
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-4 relative">
            <AnimatePresence mode="wait">
              {activeMode === 'watch' && (
                <motion.div
                  key="watch-sim"
                  initial={reduce ? {} : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? {} : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {/* Message Bubble In */}
                  <div className="max-w-[80%] rounded-2xl bg-white/[0.03] border border-white/[0.06] p-3.5 self-start">
                    <p className="text-xs text-[#8888a8] font-semibold uppercase tracking-wider font-mono mb-1">WhatsApp Customer</p>
                    <p className="text-xs text-white">Hi, what is your pricing for the Gold AMC service?</p>
                  </div>
                  
                  {/* System Log */}
                  <div className="border border-[#7c3aed]/20 bg-[#7c3aed]/5 rounded-2xl p-4 space-y-2.5 relative">
                    <div className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-[#7c3aed] animate-ping" />
                    <h5 className="text-[11px] font-bold text-white font-mono flex items-center gap-1.5">
                      <Eye className="h-3 w-3 text-[#7c3aed]" />
                      BUDDIE WATCH_LOG
                    </h5>
                    <ul className="text-[10px] font-mono text-[#8888a8] space-y-1.5">
                      <li className="flex items-center gap-1.5"><Check className="h-3 w-3 text-teal-400" /> Incoming text captured successfully</li>
                      <li className="flex items-center gap-1.5"><Check className="h-3 w-3 text-teal-400" /> Intent identified: <span className="text-white">pricing_query_amc</span></li>
                      <li className="flex items-center gap-1.5"><Check className="h-3 w-3 text-teal-400" /> CRM status set to: <span className="text-teal-400">Warm Lead</span></li>
                      <li className="flex items-center gap-1.5 text-yellow-400 font-medium">⚠️ 0% Autonomy: Reply not drafted (Observing only)</li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeMode === 'approve' && (
                <motion.div
                  key="approve-sim"
                  initial={reduce ? {} : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? {} : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {/* Incoming Chat */}
                  <div className="max-w-[75%] rounded-2xl bg-white/[0.03] border border-white/[0.06] p-3 text-xs self-start">
                    <p className="text-[9px] text-[#8888a8] uppercase tracking-wider font-mono mb-1">WhatsApp Customer</p>
                    <p className="text-white">Do you have a technician available for water filter servicing today?</p>
                  </div>

                  {/* Draft Notification Card */}
                  <div className="border border-teal-500/30 bg-teal-500/[0.03] rounded-2xl p-4 space-y-3 relative">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                      <h5 className="text-[11px] font-bold text-teal-300 flex items-center gap-1.5">
                        <ThumbsUp className="h-3.5 w-3.5 text-teal-400" />
                        Draft Pending Approval
                      </h5>
                      <span className="text-[9px] text-[#8888a8] font-mono">Ready in 6s</span>
                    </div>

                    <div className="bg-[#0b0b13] border border-white/[0.08] p-3 rounded-xl">
                      <p className="text-[10px] text-[#8888a8] font-mono mb-1">DRAFT REPLY</p>
                      <p className="text-xs text-white leading-relaxed">
                        Hi, yes! We can schedule a technician to visit your home between 3:00 PM and 5:00 PM today. Would you like me to book this slot?
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-teal-500 text-[#08080f] font-semibold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors">
                        <Check className="h-3 w-3 stroke-[3px]" /> Approve & Send
                      </div>
                      <div className="bg-white/5 text-white font-semibold text-xs py-2 px-3 rounded-lg transition-colors">
                        Edit
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeMode === 'auto' && (
                <motion.div
                  key="auto-sim"
                  initial={reduce ? {} : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? {} : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  {/* Customer message */}
                  <div className="max-w-[75%] rounded-xl bg-white/[0.03] border border-white/[0.06] p-2.5 text-xs">
                    <p className="text-white">I want to renew my service package. Can you send the link?</p>
                  </div>

                  {/* Autopilot Response */}
                  <div className="max-w-[80%] rounded-xl bg-[#091b14] border border-emerald-500/20 p-2.5 text-xs ml-auto relative">
                    <div className="absolute -top-1.5 -left-1.5 h-4 w-4 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-[#08080f]">
                      <Zap className="h-2 w-2 text-white fill-current" />
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[9px] mb-1 font-semibold">
                      BUDDIE AI • AUTO MODE
                    </div>
                    <p className="text-white leading-relaxed">
                      Hi Priya! We've drafted your contract. Here is the payment link for your Gold AMC renewal (₹2,499): <strong>leadbuddie.com/pay/priya-392</strong>
                    </p>
                  </div>

                  {/* Autopilot Logs */}
                  <div className="border border-white/[0.04] bg-white/[0.01] rounded-xl p-2.5">
                    <p className="text-[9px] text-[#666688] font-mono">AUTOPILOT ACTIONS</p>
                    <div className="flex justify-between items-center text-[10px] font-mono text-[#8888a8] mt-1">
                      <span>1. Scanned contract DB</span>
                      <span className="text-emerald-400">Match found</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono text-[#8888a8]">
                      <span>2. Generated Cashfree link</span>
                      <span className="text-emerald-400">API OK</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono text-[#8888a8]">
                      <span>3. Dispatched message</span>
                      <span className="text-emerald-400">Sent instantly</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </Section>
  )
}
