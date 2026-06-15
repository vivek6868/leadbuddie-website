'use client'

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from 'framer-motion'
import {
  MessageCircle,
  Sparkles,
  RefreshCcw,
  PhoneCall,
  CheckCheck,
  TrendingUp,
  User,
  ArrowRight,
  Zap,
  ShieldCheck,
  Clock,
  ArrowUpRight,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { EASE_OUT, Float } from '@/components/ui/motion'
import Image from 'next/image'

/* ------------------------------------------------------------------------- */
/*  Types & Config for the Step Animation                                     */
/* ------------------------------------------------------------------------- */

type AnimationStep = {
  id: number
  label: string
  whatsappMessages: { side: 'in' | 'out'; text: string; ai?: boolean; time: string }[]
  dashboardStatus: string
  dashboardRevenue: number
  dashboardLogs: string[]
  notification?: string
}

const ANIMATION_STEPS: AnimationStep[] = [
  {
    id: 0,
    label: 'Lead Arrives',
    whatsappMessages: [
      { side: 'in', text: 'Hi, do you have the Kent Grand purifier in stock?', time: '11:00 AM' }
    ],
    dashboardStatus: 'New Lead',
    dashboardRevenue: 184500,
    dashboardLogs: ['Incoming message from +91 98765... via WhatsApp', 'Resolving contact... Created lead #349'],
    notification: 'New WhatsApp Lead: Ramesh Kulkarni'
  },
  {
    id: 1,
    label: 'Buddie Replies',
    whatsappMessages: [
      { side: 'in', text: 'Hi, do you have the Kent Grand purifier in stock?', time: '11:00 AM' },
      { side: 'out', text: 'Hi Ramesh! Yes, it is in stock for ₹18,500. It includes free installation and a 1-year warranty. Would you like the product brochure?', ai: true, time: '11:00 AM' }
    ],
    dashboardStatus: 'AI Replied',
    dashboardRevenue: 184500,
    dashboardLogs: [
      'Inbound matches intent: product_inquiry',
      'Buddie drafted response (Approve mode)',
      'Reply approved by owner ➔ Sent in 10s'
    ]
  },
  {
    id: 2,
    label: 'Autopilot Follow-Up',
    whatsappMessages: [
      { side: 'in', text: 'Hi, do you have the Kent Grand purifier in stock?', time: '11:00 AM' },
      { side: 'out', text: 'Hi Ramesh! Yes, it is in stock for ₹18,500. It includes free installation and a 1-year warranty. Would you like the product brochure?', ai: true, time: '11:00 AM' },
      { side: 'out', text: 'Hey Ramesh, just checking in if you had any questions on the Kent Grand specs or pricing?', ai: true, time: '3:00 PM' }
    ],
    dashboardStatus: 'Following Up',
    dashboardRevenue: 184500,
    dashboardLogs: [
      'Customer idle for 4 hours',
      'Quiet-lead follow-up rule triggered',
      'Buddie sent follow-up'
    ]
  },
  {
    id: 3,
    label: 'Opportunity Surfaced',
    whatsappMessages: [
      { side: 'in', text: 'Hi, do you have the Kent Grand purifier in stock?', time: '11:00 AM' },
      { side: 'out', text: 'Hi Ramesh! Yes, it is in stock for ₹18,500. It includes free installation and a 1-year warranty. Would you like the product brochure?', ai: true, time: '11:00 AM' },
      { side: 'out', text: 'Hey Ramesh, just checking in if you had any questions on the Kent Grand specs or pricing?', ai: true, time: '3:00 PM' },
      { side: 'in', text: 'Yes, brochure looks good. Send me the link to book.', time: '3:02 PM' }
    ],
    dashboardStatus: 'Hot Opportunity',
    dashboardRevenue: 184500,
    dashboardLogs: [
      'Inbound matches intent: request_payment_link',
      'Buddie classified: ready_to_buy (95% confidence)',
      'Surfaced to work queue: Action required'
    ],
    notification: 'Opportunity Surfaced: Ramesh Kulkarni is ready to pay'
  },
  {
    id: 4,
    label: 'Revenue Recovered',
    whatsappMessages: [
      { side: 'in', text: 'Hi, do you have the Kent Grand purifier in stock?', time: '11:00 AM' },
      { side: 'out', text: 'Hi Ramesh! Yes, it is in stock for ₹18,500. It includes free installation and a 1-year warranty. Would you like the product brochure?', ai: true, time: '11:00 AM' },
      { side: 'out', text: 'Hey Ramesh, just checking in if you had any questions on the Kent Grand specs or pricing?', ai: true, time: '3:00 PM' },
      { side: 'in', text: 'Yes, brochure looks good. Send me the link to book.', time: '3:02 PM' },
      { side: 'out', text: 'Great choice Ramesh! Here is the secure link to complete your booking: pay.leadbuddie.com/l/349. We will schedule the technician right after.', ai: true, time: '3:02 PM' }
    ],
    dashboardStatus: 'Converted',
    dashboardRevenue: 203000,
    dashboardLogs: [
      'Cashfree Payment webhook received (Success)',
      'Account activated: Gold AMC scheduled',
      'Lifetime Revenue increased by +₹18,500'
    ]
  }
]

/* ------------------------------------------------------------------------- */
/*  Double Product Showcase Component                                        */
/* ------------------------------------------------------------------------- */

function DoubleProductShowcase({ currentStep }: { currentStep: number }) {
  const reduce = useReducedMotion()
  const step = ANIMATION_STEPS[currentStep]

  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none aspect-[1.2/1] lg:aspect-square flex items-center justify-center">
      {/* Background ambient glow behind screenshots */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.15),transparent_60%)] filter blur-3xl pointer-events-none" />

      {/* 1. Main browser window (desktop CRM/Opportunities dashboard) */}
      <div className="absolute right-0 top-4 w-[90%] z-10 transition-all duration-500">
        <div className="relative rounded-2xl border border-white/[0.08] bg-[#0b0b14]/90 p-2 sm:p-3 shadow-[0_30px_90px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
          {/* Browser header */}
          <div className="flex items-center justify-between pb-2 px-2 border-b border-white/[0.06] mb-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-500/50" />
              <span className="h-2 w-2 rounded-full bg-amber-500/50" />
              <span className="h-2 w-2 rounded-full bg-emerald-500/50" />
            </div>
            <div className="h-4.5 px-3 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-center text-[8px] text-white/45 font-mono">
              buddie.leadbuddie.com/opportunities
            </div>
            <div className="w-10 h-2 bg-transparent" />
          </div>

          {/* Simulated CRM dashboard UI */}
          <div className="w-full aspect-[1.5/1] bg-[#07070b] rounded-lg overflow-hidden border border-white/[0.04] p-3 flex flex-col justify-between">
            {/* Dashboard Subheader */}
            <div className="flex justify-between items-center pb-2 border-b border-white/[0.05]">
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-teal-400" />
                <span className="text-[10px] font-bold text-white/90">AI Sales Desk</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[8px] bg-teal-500/10 text-teal-300 border border-teal-500/20 px-2 py-0.5 rounded font-mono">
                  Autopilot: ON
                </span>
              </div>
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-[1fr_1.1fr] gap-3 my-2 flex-1 min-h-0">
              {/* Lead Details Card */}
              <div className="rounded-md bg-white/[0.02] border border-white/[0.04] p-2 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-[7px] text-white/45 font-semibold uppercase tracking-wider">Active Opportunity</span>
                    <span className={`text-[7px] px-1.5 py-0.5 rounded font-bold uppercase transition-all duration-300 ${
                      currentStep === 4 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                        : currentStep === 3
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 animate-pulse'
                        : 'bg-teal-500/10 text-teal-300 border border-teal-500/20'
                    }`}>
                      {step.dashboardStatus}
                    </span>
                  </div>
                  <h4 className="text-[10px] font-bold text-white mt-1">Ramesh Kulkarni</h4>
                  <p className="text-[7px] text-white/60 font-mono mt-0.5">+91 98765 43210</p>
                  
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between text-[7px] text-white/45">
                      <span>Inquiry for:</span>
                      <span className="text-white font-medium">Kent Grand Purifier</span>
                    </div>
                    <div className="flex justify-between text-[7px] text-white/45">
                      <span>Value:</span>
                      <span className="text-teal-400 font-bold">₹18,500</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.04] text-[7px] text-white/60">
                  <span className="text-white/35">Lifecycle:</span> Prospect ➔ Customer
                </div>
              </div>

              {/* Console log tracker */}
              <div className="rounded-md bg-black border border-white/[0.04] p-2 font-mono text-[6.5px] leading-relaxed text-white/70 overflow-hidden relative">
                <div className="text-[6px] text-white/30 uppercase tracking-widest border-b border-white/[0.05] pb-1 mb-1 flex items-center justify-between">
                  <span>Buddie AI logs</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-ping" />
                </div>
                <div className="space-y-1">
                  {step.dashboardLogs.map((log, index) => (
                    <motion.p 
                      key={log}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className={index === step.dashboardLogs.length - 1 ? 'text-teal-300 font-bold' : ''}
                    >
                      &gt; {log}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>

            {/* Dashboard Footer (Metrics bar) */}
            <div className="flex justify-between items-center pt-2 border-t border-white/[0.05] text-[8px]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-white/45">
                  <span>Opportunities:</span>
                  <span className="text-white font-bold">14</span>
                </div>
                <div className="flex items-center gap-1 text-white/45">
                  <span>Conversion rate:</span>
                  <span className="text-teal-400 font-bold">42%</span>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded px-1.5 py-0.5 text-white/80 font-bold">
                <TrendingUp className="h-2.5 w-2.5 text-teal-400" />
                <span>₹{(step.dashboardRevenue).toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Overlapping smartphone (WhatsApp experience) */}
      <div className="absolute left-0 bottom-4 z-20 w-[42%] max-w-[210px] sm:max-w-[230px]">
        <div className="relative rounded-[32px] bg-slate-950 p-2.5 shadow-[0_30px_70px_rgba(0,0,0,0.9)] border border-white/15">
          <div className="relative rounded-[22px] overflow-hidden bg-[#0d0d14] aspect-[9/19] flex flex-col justify-between">
            {/* Phone notch */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 h-3.5 w-16 rounded-full bg-slate-950 z-30" />

            {/* WhatsApp Header */}
            <div className="bg-[#07070b] px-3 pb-2 pt-5 flex items-center justify-between z-20 relative border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 font-semibold text-[8px]">
                  RK
                </div>
                <div>
                  <p className="text-white text-[9px] font-bold leading-none">Ramesh Kulkarni</p>
                  <p className="text-teal-400 text-[6px] leading-none mt-1 font-medium flex items-center gap-1">
                    <span className="h-1 w-1 bg-teal-400 rounded-full animate-ping" />
                    typing...
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-teal-400/10 px-1 py-px text-[5px] font-semibold uppercase text-teal-300 border border-teal-400/20">
                Buddie Active
              </span>
            </div>

            {/* WhatsApp Chat Messages container */}
            <div className="p-2 space-y-2 flex-1 flex flex-col justify-end overflow-hidden bg-[#050508]/50">
              <AnimatePresence mode="popLayout">
                {step.whatsappMessages.map((msg, idx) => (
                  <motion.div
                    key={msg.text}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                    className={`flex ${msg.side === 'out' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-xl px-2.5 py-1.5 text-[8.5px] leading-snug shadow-md ${
                        msg.side === 'out'
                          ? 'rounded-tr-none bg-teal-500 text-white font-medium'
                          : 'rounded-tl-none bg-white/5 border border-white/[0.06] text-white/90'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <div className="mt-1 flex items-center justify-end gap-1 text-[6.5px] text-white/45">
                        {msg.ai && (
                          <span className="inline-flex items-center gap-0.5 rounded-full bg-teal-400/10 border border-teal-400/20 px-1 py-px text-[6px] font-bold uppercase text-teal-300">
                            <Sparkles className="h-1.5 w-1.5" />
                            AI
                          </span>
                        )}
                        <span>{msg.time}</span>
                        {msg.side === 'out' && (
                          <CheckCheck className="h-2.5 w-2.5 text-teal-300" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Floating live notification banner */}
      <AnimatePresence>
        {step.notification && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="absolute left-1/2 -translate-x-1/2 top-10 z-30 w-[75%] max-w-[280px] bg-slate-900/90 border border-teal-500/30 rounded-xl px-3 py-2 flex items-center gap-2.5 shadow-2xl backdrop-blur-md"
          >
            <div className="h-5 w-5 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0 border border-teal-500/25">
              <Sparkles className="h-3 w-3 text-teal-400 animate-pulse" />
            </div>
            <div className="min-w-0">
              <p className="text-[8px] font-bold text-teal-400 uppercase tracking-wide">Autopilot alert</p>
              <p className="text-[9.5px] font-semibold text-white truncate">{step.notification}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ------------------------------------------------------------------------- */
/*  Main Section export                                                      */
/* ------------------------------------------------------------------------- */

const TRUST_METRICS = [
  { icon: ShieldCheck, text: 'Supervised AI (sends only with your approval)' },
  { icon: MessageCircle, text: 'Runs on your existing WhatsApp Business number' },
  { icon: Zap, text: 'Meta official provider · DPDP compliant data isolation' }
]

export function HeroCinematic() {
  const reduce = useReducedMotion()
  const [activeStep, setActiveStep] = useState(0)

  // Cycle the showcase step machine
  useEffect(() => {
    if (reduce) return
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= ANIMATION_STEPS.length - 1 ? 0 : prev + 1))
    }, 4500)
    return () => clearInterval(interval)
  }, [reduce])

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 md:pb-28 md:pt-36 lg:px-8 bg-[#040408]">
      {/* Background radial overlays */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(124,58,237,0.12),transparent_50%),radial-gradient(circle_at_80%_40%,rgba(20,184,166,0.1),transparent_45%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#040408]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        
        {/* Copy Column */}
        <div className="text-left">
          {/* Tagline pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-2 text-xs font-semibold text-teal-300 backdrop-blur-sm tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
            </span>
            2026 AI Agent Release
          </div>

          {/* Premium Headline */}
          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl font-heading">
            The AI Employee for{' '}
            <span className="bg-gradient-to-r from-teal-300 via-white to-brand-light bg-clip-text text-transparent">
              WhatsApp Businesses
            </span>
          </h1>

          {/* Value Prop Subheadline */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#8888a8] sm:text-lg">
            Find opportunities. Follow up automatically. Recover renewal revenue. 
            Buddie works inside your local WhatsApp number, organizing leads, scheduling 
            technicians, and drafting replies for your instant approval.
          </p>

          {/* Premium CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button href="https://app.leadbuddie.com" variant="primary" size="lg" className="w-full sm:w-auto shadow-lg shadow-teal-500/20">
              Start Free Trial
            </Button>
            <Button
              href="/demo"
              variant="outline"
              size="lg"
              className="w-full border-white/10 text-white bg-white/[0.02] hover:bg-white/10 sm:w-auto backdrop-blur-sm"
            >
              Watch Demo
            </Button>
          </div>

          {/* Step indicator bar */}
          <div className="mt-10 pt-6 border-t border-white/[0.05]">
            <p className="text-[10px] font-bold text-white/35 uppercase tracking-widest mb-3">Live Workstream Preview</p>
            <div className="flex flex-wrap gap-1.5">
              {ANIMATION_STEPS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveStep(s.id)}
                  className={`text-[9.5px] px-2.5 py-1 rounded transition-all font-semibold ${
                    activeStep === s.id
                      ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30'
                      : 'bg-white/[0.02] text-white/45 border border-white/[0.04] hover:text-white/80'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Trust badges */}
          <ul className="mt-8 space-y-3.5">
            {TRUST_METRICS.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.text} className="flex items-center gap-3 text-xs text-white/60">
                  <Icon className="h-4.5 w-4.5 text-teal-400 shrink-0" strokeWidth={2.4} />
                  <span>{item.text}</span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Coordinated Interactive Double Showcase Column */}
        <div className="relative">
          <DoubleProductShowcase currentStep={activeStep} />
        </div>

      </div>
    </section>
  )
}

