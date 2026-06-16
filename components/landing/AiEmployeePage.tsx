'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { BuddieFace, Pill, TypingDots, P } from '@/components/home/atoms'
import {
  Sparkles,
  Check,
  ArrowRight,
  Upload,
  Clock,
  Coins,
  MessageSquare,
  Calendar,
  AlertTriangle,
  UserCheck,
  RefreshCw,
  FileText,
  Lock,
  ChevronRight,
  Send,
  Zap,
  CheckCircle2,
  FileSpreadsheet,
  Globe,
  Phone,
  ListFilter,
  Activity,
  HeartPulse,
  TrendingUp,
  Mail
} from 'lucide-react'

// Color code constants
const COLORS = {
  opportunity: { text: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200/80', dot: 'bg-orange-500', glow: 'rgba(249,115,22,0.15)', hex: '#F97316' },
  revenue: { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200/80', dot: 'bg-emerald-500', glow: 'rgba(16,185,129,0.15)', hex: '#10B981' },
  attention: { text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200/80', dot: 'bg-amber-500', glow: 'rgba(245,158,11,0.15)', hex: '#F59E0B' },
  dormant: { text: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200/80', dot: 'bg-red-500', glow: 'rgba(239,68,68,0.15)', hex: '#EF4444' },
  intelligence: { text: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200/80', dot: 'bg-teal-500', glow: 'rgba(20,184,166,0.15)', hex: '#14B8A6' }
}

const CANDIDATES = [
  {
    id: 'aditya',
    name: 'Aditya',
    role: 'AI Sales Executive',
    avatar: '👨‍💼',
    desc: 'Specializes in incoming lead capture, qualifying buyers, sharing product catalogs/brochures, and booking site visits.',
    stats: {
      speed: '8 seconds',
      accuracy: '99.8%',
      languages: 'Hinglish, Hindi, English, Marathi',
      focus: 'New Lead Conversion'
    },
    skills: [
      'Lead qualification',
      'Pricing & catalog queries',
      'FAQ handling',
      'Technician booking triggers'
    ],
    statusColor: COLORS.opportunity.hex,
    prompts: [
      {
        q: 'Kent Grand pricing details kya hai and delivery timing?',
        a: 'Hi! The Kent Grand is ₹18,500 with free installation and a 1-year warranty. 🚚 Delivery takes 24-48 hours. Shall I book an installation slot for you tomorrow?'
      },
      {
        q: 'Can you send me the product brochure for water purifier systems?',
        a: 'Sure! 📄 I have sent the Water Purifier product catalog to your WhatsApp. Let me know if you want to see our AMC plans too.'
      }
    ]
  },
  {
    id: 'neha',
    name: 'Neha',
    role: 'AI AMC & Renewal Coordinator',
    avatar: '👩‍💼',
    desc: 'Tracks AMC expiration dates, triggers automated 60/30/15/7-day renewal sequences, and recovers lapsed customer accounts.',
    stats: {
      speed: '10 seconds',
      accuracy: '100%',
      languages: 'Hinglish, Hindi, English, Tamil',
      focus: 'Recurring Revenue & Retention'
    },
    skills: [
      'Pre-expiry alerts (60-7d)',
      'Lapsed account win-backs',
      'Payment link dispatch',
      'Follow-up sequence safety'
    ],
    statusColor: COLORS.revenue.hex,
    prompts: [
      {
        q: 'Mera AMC expire hone wala hai. Kitna cost hoga renew karne ka?',
        a: 'Hi Priya! Your Gold AMC for Kent Grand expires on Jun 22 (5 days left). 💳 The renewal cost is ₹2,499. You can pay instantly using this link: pay.leadbuddie.com/l/1049.'
      },
      {
        q: 'Next week call karna, abhi busy hoon.',
        a: 'No problem at all! I have scheduled a callback reminder for next week. Have a great day! 👍'
      }
    ]
  },
  {
    id: 'raj',
    name: 'Raj',
    role: 'AI Dispatcher & Support Rep',
    avatar: '👨‍🔧',
    desc: 'Logs customer complaints, schedules repair visits, assigns service technicians based on pincode, and handles escalations.',
    stats: {
      speed: '12 seconds',
      accuracy: '99.5%',
      languages: 'Hinglish, Hindi, English, Gujarati',
      focus: 'Service Operations'
    },
    skills: [
      'Complaint triage',
      'Technician assignment',
      'Service scheduling',
      'Owner escalation handoffs'
    ],
    statusColor: COLORS.attention.hex,
    prompts: [
      {
        q: 'Filter leaks water service representative ko bhejo.',
        a: 'Sorry to hear that! 🛠 I am scheduling a repair visit for you. Our technician Rajesh handles your area (pincode 600001). Does tomorrow between 10 AM - 1 PM work?'
      },
      {
        q: 'Technician nahi aaya, refund chahiye abhi!',
        a: 'I sincerely apologize for the delay. ⚠️ I have paused automated replies for your chat and escalated this directly to the manager. Someone will call you in 10 minutes.'
      }
    ]
  }
]

export function AiEmployeePage() {
  const [selectedCandidate, setSelectedCandidate] = useState(CANDIDATES[0])
  const [activePromptIdx, setActivePromptIdx] = useState(0)
  
  // Interactive Chat State
  const [chatHistory, setChatHistory] = useState<{ sender: 'user' | 'buddie'; text: string; time: string }[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [autonomyLevel, setAutonomyLevel] = useState<'watch' | 'approve' | 'auto'>('approve')
  const [draftMessage, setDraftMessage] = useState<string | null>(null)
  
  // Interactive Training Simulator State
  const [trainingStep, setTrainingStep] = useState(0) // 0: Idle, 1: Uploading, 2: Parsing, 3: Completed
  const [trainingProgress, setTrainingProgress] = useState(0)
  const [selectedDocType, setSelectedDocType] = useState<'pdf' | 'faq' | 'sheet'>('pdf')

  // Sync prompt changes with selected candidate
  useEffect(() => {
    setChatHistory([])
    setDraftMessage(null)
    setActivePromptIdx(0)
  }, [selectedCandidate])

  // Trigger simulated reply
  const handleSimulateChat = (promptIdx: number) => {
    setActivePromptIdx(promptIdx)
    setChatHistory([{ sender: 'user', text: selectedCandidate.prompts[promptIdx].q, time: '10:05 AM' }])
    setDraftMessage(null)
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      const replyText = selectedCandidate.prompts[promptIdx].a
      
      if (autonomyLevel === 'auto') {
        setChatHistory(prev => [...prev, { sender: 'buddie', text: replyText, time: '10:05 AM' }])
      } else {
        setDraftMessage(replyText)
      }
    }, 1200)
  }

  // Confirm and Send Draft (Approve Mode)
  const handleApproveDraft = () => {
    if (draftMessage) {
      setChatHistory(prev => [...prev, { sender: 'buddie', text: draftMessage, time: '10:06 AM' }])
      setDraftMessage(null)
    }
  }

  // Handle Training Simulation
  const handleStartTraining = () => {
    setTrainingStep(1)
    setTrainingProgress(0)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (trainingStep === 1) {
      interval = setInterval(() => {
        setTrainingProgress(prev => {
          if (prev >= 100) {
            setTrainingStep(2)
            return 0
          }
          return prev + 10
        })
      }, 150)
    } else if (trainingStep === 2) {
      interval = setInterval(() => {
        setTrainingProgress(prev => {
          if (prev >= 100) {
            setTrainingStep(3)
            return 100
          }
          return prev + 8
        })
      }, 120)
    }
    return () => clearInterval(interval)
  }, [trainingStep])

  const resetTraining = () => {
    setTrainingStep(0)
    setTrainingProgress(0)
  }

  const FAQS = [
    {
      question: 'Is an AI Employee different from a basic chatbot?',
      answer: 'Yes, completely. Traditional chatbots rely on rigid menu buttons and strict rule triggers. If a user misspells something or switches topic, the bot fails. LeadBuddie\'s AI Employees use context-rich large language models. They understand Hinglish, extract natural lead data, and carry out actual jobs like scheduling and AMC reminders.'
    },
    {
      question: 'Will the AI Employee hallucinate or make up prices?',
      answer: 'No. LeadBuddie is built with strict pricing guardrails. The AI employee only draws pricing, plans, and answers from the business knowledge database you upload. If a customer asks a question outside your uploaded data or documents, the AI employee politely defers the question and flags the chat for human takeover.'
    },
    {
      question: 'How do the autonomy trust levels work?',
      answer: 'You have complete oversight with 3 safety levels. Watch Mode allows the AI to observe and build summaries without drafting replies. Approval Mode generates replies and holds them in your approval queue—you tap once to edit or send. Auto Mode runs on autopilot, responding instantly to FAQs and sending pre-configured sequences.'
    },
    {
      question: 'Can the AI employee speak Hinglish or regional Indian languages?',
      answer: 'Yes. Buddie is built specifically for Indian businesses and natively understands "Hinglish" (Hindi typed in English script), slang, spelling errors, and multi-lingual customer messages, replying in the client\'s preferred style.'
    },
    {
      question: 'Does it comply with Meta\'s WhatsApp policies?',
      answer: 'Absolutely. LeadBuddie operates over official Meta Cloud API protocols. It only responds to incoming client enquiries and does not spam, bulk blast, or violate community standards, protecting your phone number from getting banned.'
    }
  ]

  return (
    <div className="bg-bg-primary min-h-screen text-text-primary">
      
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-36 lg:px-8 bg-bg-primary border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,211,102,0.06),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="max-w-2xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-hover">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                AI Business Intelligence & Revenue Recovery
              </span>
              <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-6xl font-heading">
                Hire your first <br />
                <span className="bg-gradient-to-r from-brand to-brand-hover bg-clip-text text-transparent">AI Sales Employee</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                LeadBuddie tells business owners **where the money is, what happened, and what they should do next.** Stop chasing spreadsheets and digging through messages—let your smartest virtual staff handle renewals and hot leads automatically.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                <Button href="https://app.leadbuddie.com" variant="primary" size="lg" className="w-full sm:w-auto">
                  Hire Aditya & Neha Free
                </Button>
                <Button href="/demo" variant="outline" size="lg" className="w-full sm:w-auto">
                  Book Live Demo
                </Button>
              </div>

              <ul className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8">
                <li className="flex items-start gap-2 text-sm text-text-secondary">
                  <Check className="h-4 w-4 mt-0.5 text-brand shrink-0" strokeWidth={3} />
                  <span>Works 24/7/365</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-text-secondary">
                  <Check className="h-4 w-4 mt-0.5 text-brand shrink-0" strokeWidth={3} />
                  <span>10s WhatsApp reply</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-text-secondary">
                  <Check className="h-4 w-4 mt-0.5 text-brand shrink-0" strokeWidth={3} />
                  <span>Hinglish & Local Dialects</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-text-secondary">
                  <Check className="h-4 w-4 mt-0.5 text-brand shrink-0" strokeWidth={3} />
                  <span>Under ₹33 per day</span>
                </li>
              </ul>
            </div>

            {/* Premium Light-Themed Buddie Dashboard Mockup */}
            <div className="relative w-full flex justify-center">
              <div className="absolute inset-0 bg-brand/5 blur-3xl rounded-full" />
              <div className="relative w-full rounded-2xl border border-border bg-bg-card p-5 shadow-xl">
                
                {/* Dashboard Header */}
                <div className="flex items-center gap-2.5 border-b border-border/60 pb-3 mb-4">
                  <BuddieFace size={36} mood="happy" halo />
                  <div>
                    <h3 className="text-xs font-bold text-text-primary">Buddie Intelligence Desk</h3>
                    <p className="text-[10px] text-text-muted">Live Business Ops Feed</p>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
                    AI Active
                  </span>
                </div>

                {/* Section 1: Morning Summary */}
                <div className={`rounded-xl border ${COLORS.intelligence.border} ${COLORS.intelligence.bg} p-3.5 mb-4`}>
                  <p className="text-xs font-bold text-text-primary flex items-center gap-1.5">
                    🤖 Good Morning Vivek,
                  </p>
                  <p className="text-[11px] text-text-secondary mt-1">
                    I reviewed **247 conversations**. Here is where your revenue is hiding today:
                  </p>
                  <div className="mt-3 grid grid-cols-4 gap-2 text-[10px] text-center font-bold">
                    <div className={`rounded-lg p-2 border ${COLORS.opportunity.border} ${COLORS.opportunity.bg}`}>
                      <span className={`${COLORS.opportunity.text} block text-xs`}>6</span>
                      <span className="text-[8px] text-text-secondary">Opportunities</span>
                    </div>
                    <div className={`rounded-lg p-2 border ${COLORS.revenue.border} ${COLORS.revenue.bg}`}>
                      <span className={`${COLORS.revenue.text} block text-xs`}>₹18k</span>
                      <span className="text-[8px] text-text-secondary">At Risk</span>
                    </div>
                    <div className={`rounded-lg p-2 border ${COLORS.attention.border} ${COLORS.attention.bg}`}>
                      <span className={`${COLORS.attention.text} block text-xs`}>3</span>
                      <span className="text-[8px] text-text-secondary">Waiting</span>
                    </div>
                    <div className={`rounded-lg p-2 border ${COLORS.dormant.border} ${COLORS.dormant.bg}`}>
                      <span className={`${COLORS.dormant.text} block text-xs`}>12</span>
                      <span className="text-[8px] text-text-secondary">Dormant</span>
                    </div>
                  </div>
                </div>

                {/* Section 2: Top Opportunities */}
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted block mb-2">🔥 Top Opportunities</span>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-xl border border-border bg-bg-primary p-2.5 text-xs shadow-sm hover:border-orange-300 transition-colors">
                      <div>
                        <span className="font-bold text-text-primary">Ravi K.</span>
                        <span className="ml-1.5 rounded bg-orange-100 px-1 py-0.5 text-[9px] font-bold text-orange-600">Score 92</span>
                        <p className="text-[10px] text-text-muted mt-0.5">Asked pricing for Kent Grand yesterday</p>
                      </div>
                      <div className="flex gap-1">
                        <span className="rounded bg-orange-50 px-2 py-1 text-[9px] font-bold text-orange-600 border border-orange-200">Call</span>
                        <span className="rounded bg-[#25D366]/10 px-2 py-1 text-[9px] font-bold text-brand border border-[#25D366]/30">Chat</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between rounded-xl border border-border bg-bg-primary p-2.5 text-xs shadow-sm hover:border-orange-300 transition-colors">
                      <div>
                        <span className="font-bold text-text-primary">Priya S.</span>
                        <span className="ml-1.5 rounded bg-orange-100 px-1 py-0.5 text-[9px] font-bold text-orange-600">Score 89</span>
                        <p className="text-[10px] text-text-muted mt-0.5">Requested service callback</p>
                      </div>
                      <div className="flex gap-1">
                        <span className="rounded bg-orange-50 px-2 py-1 text-[9px] font-bold text-orange-600 border border-orange-200">Call</span>
                        <span className="rounded bg-[#25D366]/10 px-2 py-1 text-[9px] font-bold text-brand border border-[#25D366]/30">Chat</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3: What Buddie Learned */}
                <div className={`rounded-xl border border-dashed ${COLORS.intelligence.border} ${COLORS.intelligence.bg} p-3 text-[11px]`}>
                  <span className={`font-bold ${COLORS.intelligence.text} flex items-center gap-1`}>
                    <Sparkles className="h-3.5 w-3.5" /> What I learned this week:
                  </span>
                  <p className="text-text-secondary mt-1 text-[10px]">
                    "You sent pricing details **143 times** this month. Should I automate pricing replies? AMC enquiries also increased **34%**."
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WhatsApp Morning Digest (Phone Mockup) ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-bg-elevated/20 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            {/* Phone Mockup on Left */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative rounded-[32px] border-[5px] border-slate-800 bg-slate-900 p-2.5 w-full max-w-[310px] shadow-2xl h-[480px] flex flex-col">
                <div className="w-full h-full bg-[#0b141a] rounded-[22px] overflow-hidden flex flex-col text-white relative">
                  
                  {/* WhatsApp Profile Header */}
                  <div className="bg-[#0b141a] px-3.5 py-3 flex items-center gap-2 pt-5 border-b border-white/5">
                    <BuddieFace size={28} mood="happy" />
                    <div>
                      <h4 className="text-[11px] font-bold leading-tight">Buddie Reporting</h4>
                      <p className="text-[8px] text-brand">Online</p>
                    </div>
                  </div>

                  {/* WhatsApp Message Body */}
                  <div className="flex-grow p-4 flex flex-col justify-end overflow-y-auto text-[10px] bg-[#0b141a] pb-6">
                    <div className="bg-[#202c33] rounded-lg p-3 max-w-[85%] self-start rounded-tl-none border border-white/5 shadow-sm leading-relaxed">
                      <span className="text-[9px] font-bold text-brand block mb-1">🤖 Good Morning Vivek</span>
                      I analyzed your customer messages overnight. Here is your daily digest:
                      <br /><br />
                      🔥 **3 Hot Opportunities**
                      <br />• Ravi asked pricing yesterday
                      <br />• Priya requested demo
                      <br />• Anand opened brochure twice
                      <br /><br />
                      💰 **₹6,500 renewal revenue at risk**
                      <br />⏳ **4 follow-ups due today**
                      <br /><br />
                      <span className="text-brand font-bold block mt-1 hover:underline">👉 Open Desk: app.leadbuddie.com/desk</span>
                      <span className="text-[7px] text-white/40 block text-right mt-1">8:30 AM</span>
                    </div>
                  </div>

                  {/* Input area */}
                  <div className="bg-[#0b141a] p-2 border-t border-white/5 pb-3">
                    <div className="bg-white/5 rounded-full px-3 py-1.5 text-[9px] text-white/30">
                      Reply to digest...
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Explanation on Right */}
            <div className="max-w-2xl order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand">WhatsApp Morning Digest</span>
              <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl">
                The AI employee that reports directly to you
              </h2>
              <p className="mt-4 text-text-secondary text-base leading-relaxed">
                You don't need to boot up a computer or log into a CRM to see where your business stands. Every morning at 8:30 AM, Buddie drops a clean, actionable report straight to your personal WhatsApp number. Find out exactly where revenue is hiding while drinking your morning coffee.
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <span className="text-xs">🔥</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-primary">Hot leads prioritised</h4>
                    <p className="text-[11px] text-text-muted mt-0.5">Buddie flags who asked for catalog, pricing, or brochure details so you follow up with the right contacts first.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <span className="text-xs">💰</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-primary">Renewal revenue safeguarded</h4>
                    <p className="text-[11px] text-text-muted mt-0.5">See exactly which AMC contracts are about to lapse, along with the total monetary value at stake.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Candidates Section (Meet the Candidates) ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border bg-bg-elevated/40">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Choose your staff</span>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl">
              Meet your digital employees
            </h2>
            <p className="mt-4 text-text-secondary text-base max-w-2xl mx-auto">
              Different roles require different skills. Choose the virtual employee that matches your business bottleneck.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {CANDIDATES.map((c) => {
              const isSelected = selectedCandidate.id === c.id
              return (
                <div
                  key={c.id}
                  onClick={() => setSelectedCandidate(c)}
                  className={`cursor-pointer transition-all duration-300 rounded-2xl border p-6 flex flex-col bg-bg-card relative ${
                    isSelected
                      ? 'border-brand shadow-lg ring-1 ring-brand scale-[1.02]'
                      : 'border-border hover:border-text-muted shadow-sm hover:scale-[1.01]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{c.avatar}</span>
                    <div>
                      <h3 className="font-bold text-lg text-text-primary">{c.name}</h3>
                      <p className="text-xs text-text-muted font-medium">{c.role}</p>
                    </div>
                    {isSelected && (
                      <span className="ml-auto h-2 w-2 rounded-full bg-brand animate-pulse" />
                    )}
                  </div>

                  <p className="mt-4 text-sm text-text-secondary flex-grow leading-relaxed">
                    {c.desc}
                  </p>

                  <div className="mt-6 space-y-2.5 border-t border-border pt-4 text-xs">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Response Speed</span>
                      <span className="font-semibold text-text-primary">{c.stats.speed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Knowledge Accuracy</span>
                      <span className="font-semibold text-text-primary">{c.stats.accuracy}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Languages Spoken</span>
                      <span className="font-semibold text-text-primary">{c.stats.languages}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Core Focus</span>
                      <span className="font-semibold text-brand">{c.stats.focus}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/40">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted block mb-2">Skills Include</span>
                    <div className="flex flex-wrap gap-1.5">
                      {c.skills.map((s) => (
                        <span key={s} className="bg-bg-elevated text-text-secondary text-[10px] px-2 py-0.5 rounded-md border border-border/50">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Chat Sandbox (Interactive Playground) ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            {/* Control Panel */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Interactive Playground</span>
              <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl">
                Test drive {selectedCandidate.name}
              </h2>
              <p className="mt-4 text-text-secondary text-sm md:text-base">
                Click a customer message below to see how {selectedCandidate.name} thinks. Switch autonomy settings to experience the safety controls.
              </p>

              {/* Autonomy Selector */}
              <div className="mt-6 rounded-2xl bg-bg-elevated p-4 border border-border/60">
                <span className="text-xs font-bold text-text-primary block mb-2.5">Set Autonomy level:</span>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    onClick={() => {
                      setAutonomyLevel('watch')
                      setDraftMessage(null)
                    }}
                    className={`rounded-xl py-2.5 font-bold transition-all border ${
                      autonomyLevel === 'watch'
                        ? 'bg-bg-card border-border shadow-sm text-text-primary'
                        : 'border-transparent text-text-muted hover:text-text-primary'
                    }`}
                  >
                    ◐ Watch Mode
                  </button>
                  <button
                    onClick={() => {
                      setAutonomyLevel('approve')
                      setDraftMessage(null)
                    }}
                    className={`rounded-xl py-2.5 font-bold transition-all border ${
                      autonomyLevel === 'approve'
                        ? 'bg-brand/10 border-brand text-brand'
                        : 'border-transparent text-text-muted hover:text-text-primary'
                    }`}
                  >
                    ✓ Approve Mode
                  </button>
                  <button
                    onClick={() => {
                      setAutonomyLevel('auto')
                      setDraftMessage(null)
                    }}
                    className={`rounded-xl py-2.5 font-bold transition-all border ${
                      autonomyLevel === 'auto'
                        ? 'bg-bg-card border-border shadow-sm text-text-primary'
                        : 'border-transparent text-text-muted hover:text-text-primary'
                    }`}
                  >
                    ✦ Auto Mode
                  </button>
                </div>
                <p className="text-[11px] text-text-muted mt-2">
                  {autonomyLevel === 'watch' && 'Watch: Buddie reads the message, alerts you of details, but sends nothing.'}
                  {autonomyLevel === 'approve' && 'Approve (Recommended): Buddie drafts the reply. You review and tap Send.'}
                  {autonomyLevel === 'auto' && 'Auto: Buddie replies automatically in under 10 seconds.'}
                </p>
              </div>

              {/* Prompts list */}
              <div className="mt-6 space-y-3">
                <span className="text-xs font-bold text-text-muted block">Simulate Customer Queries:</span>
                {selectedCandidate.prompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSimulateChat(idx)}
                    className={`w-full text-left rounded-xl border p-4 text-xs font-medium transition-all flex items-center justify-between group ${
                      activePromptIdx === idx && chatHistory.length > 0
                        ? 'border-brand bg-brand/5 text-brand-hover'
                        : 'border-border hover:border-text-muted text-text-primary hover:bg-bg-elevated'
                    }`}
                  >
                    <span>"{p.q}"</span>
                    <span className="inline-flex items-center gap-1 font-bold text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                      Send <ArrowRight className="h-3 w-3" />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated WhatsApp Phone */}
            <div className="flex justify-center">
              <div className="relative rounded-[36px] border-[6px] border-slate-900 bg-slate-950 p-3 w-full max-w-[340px] shadow-2xl h-[520px] flex flex-col">
                
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-28 bg-slate-900 rounded-b-xl z-20" />
                
                {/* Screen content */}
                <div className="w-full h-full bg-slate-900 rounded-[24px] overflow-hidden flex flex-col text-white relative">
                  
                  {/* WhatsApp Header */}
                  <div className="bg-slate-950 px-4 py-3 flex items-center gap-2.5 pt-6 border-b border-white/5">
                    <div className="h-8 w-8 rounded-full bg-brand flex items-center justify-center font-bold text-sm">
                      {selectedCandidate.name[0]}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold leading-tight">{selectedCandidate.name}</h4>
                      <p className="text-[9px] text-brand flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand animate-ping" />
                        Online
                      </p>
                    </div>
                  </div>

                  {/* Chat area */}
                  <div className="flex-grow p-4 flex flex-col gap-3 justify-end overflow-y-auto text-[11px] bg-[#0b141a]">
                    
                    {chatHistory.length === 0 && (
                      <div className="my-auto text-center text-white/40 text-xs px-4">
                        <MessageSquare className="h-8 w-8 mx-auto mb-2 text-white/25" />
                        Click a customer message on the left to start conversation.
                      </div>
                    )}

                    {chatHistory.map((msg, i) => (
                      <div
                        key={i}
                        className={`max-w-[80%] rounded-xl p-3 leading-relaxed relative ${
                          msg.sender === 'user'
                            ? 'bg-[#005c4b] self-end rounded-tr-none'
                            : 'bg-[#202c33] self-start rounded-tl-none'
                        }`}
                      >
                        {msg.sender === 'buddie' && (
                          <span className="text-[9px] font-bold text-brand block mb-1">✦ AI Employee</span>
                        )}
                        {msg.text}
                        <span className="text-[8px] text-white/45 block text-right mt-1.5">{msg.time}</span>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="bg-[#202c33] self-start rounded-xl rounded-tl-none p-3 max-w-[80%]">
                        <span className="text-[9px] font-bold text-brand block mb-1">✦ AI Employee</span>
                        <TypingDots color={P.brand} size={4} />
                      </div>
                    )}
                  </div>

                  {/* Approve queue area */}
                  <AnimatePresence>
                    {draftMessage && (
                      <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        className="bg-slate-950 p-3 border-t border-white/10 flex flex-col gap-2 z-10"
                      >
                        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-brand">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                          Approval Desk Queue
                        </div>
                        <div className="bg-[#202c33] rounded-lg p-2.5 text-[10px] text-white/90">
                          {draftMessage}
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setDraftMessage(null)}
                            className="flex-1 py-1.5 text-[10px] font-bold rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                          >
                            Reject
                          </button>
                          <button
                            onClick={handleApproveDraft}
                            className="flex-1 py-1.5 text-[10px] font-bold rounded-md bg-brand text-white hover:bg-brand-hover transition-colors flex items-center justify-center gap-1"
                          >
                            <Send className="h-3 w-3" /> Send
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Input area */}
                  <div className="bg-slate-950 p-2.5 border-t border-white/5 pb-4">
                    <div className="bg-white/5 rounded-full px-4 py-2 text-[10px] text-white/40">
                      Type a message...
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Customer Lifecycle (Moat Section) ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-bg-elevated/20 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand">The Customer Moat</span>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl">
              The complete repeat revenue loop
            </h2>
            <p className="mt-4 text-text-secondary text-base max-w-2xl mx-auto">
              LeadBuddie manages the entire lifecycle of your customer database, turning one-off buyers into long-term contract renewal streams.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5 text-center text-xs">
            <div className="rounded-2xl border border-border bg-bg-card p-5 shadow-sm">
              <span className="text-2xl block mb-3">📥</span>
              <h4 className="font-bold text-text-primary text-sm">1. Lead</h4>
              <p className="text-text-muted mt-2 text-[11px] leading-relaxed">Buddie qualifies, replies in 10s, and logs context to the lead profile.</p>
            </div>
            <div className="rounded-2xl border border-border bg-bg-card p-5 shadow-sm">
              <span className="text-2xl block mb-3">🤝</span>
              <h4 className="font-bold text-text-primary text-sm">2. Customer</h4>
              <p className="text-text-muted mt-2 text-[11px] leading-relaxed">Enquiry converted to customer with installed product model and dates.</p>
            </div>
            <div className="rounded-2xl border border-border bg-bg-card p-5 shadow-sm relative">
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white bg-brand shadow">moat</span>
              <span className="text-2xl block mb-3">🔄</span>
              <h4 className="font-bold text-text-primary text-sm">3. Renewal</h4>
              <p className="text-text-muted mt-2 text-[11px] leading-relaxed">Reminders automatically message customers 60/30/15/7 days before AMC expiry.</p>
            </div>
            <div className="rounded-2xl border border-border bg-bg-card p-5 shadow-sm">
              <span className="text-2xl block mb-3">🛠</span>
              <h4 className="font-bold text-text-primary text-sm">4. Visit</h4>
              <p className="text-text-muted mt-2 text-[11px] leading-relaxed">Service visits are scheduled, assigned to technicians, and completed.</p>
            </div>
            <div className="rounded-2xl border border-border bg-bg-card p-5 shadow-sm">
              <span className="text-2xl block mb-3">🎯</span>
              <h4 className="font-bold text-text-primary text-sm">5. Win-Back</h4>
              <p className="text-text-muted mt-2 text-[11px] leading-relaxed">Lapsed AMC accounts are targeted with reactivation scripts to restart the cycle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Training Simulator Section ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border bg-bg-elevated/40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            {/* Left: Text & Doc Picker */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Quick Setup</span>
              <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl">
                Train your AI Employee <br />in 5 minutes
              </h2>
              <p className="mt-4 text-text-secondary text-sm md:text-base leading-relaxed">
                No coding, no developers. Simply select your document type, upload your FAQ or pricing documents, and watch your AI employee learn your business rules instantly.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    setSelectedDocType('pdf')
                    resetTraining()
                  }}
                  className={`rounded-xl border p-4 text-center transition-all ${
                    selectedDocType === 'pdf'
                      ? 'border-brand bg-brand/5 text-brand-hover'
                      : 'border-border bg-bg-card hover:border-text-muted text-text-primary'
                  }`}
                >
                  <FileText className="h-5 w-5 mx-auto mb-2 text-red-500" />
                  <span className="text-xs font-bold block">Pricing PDF</span>
                </button>
                
                <button
                  onClick={() => {
                    setSelectedDocType('faq')
                    resetTraining()
                  }}
                  className={`rounded-xl border p-4 text-center transition-all ${
                    selectedDocType === 'faq'
                      ? 'border-brand bg-brand/5 text-brand-hover'
                      : 'border-border bg-bg-card hover:border-text-muted text-text-primary'
                  }`}
                >
                  <Globe className="h-5 w-5 mx-auto mb-2 text-blue-500" />
                  <span className="text-xs font-bold block">Website FAQ</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedDocType('sheet')
                    resetTraining()
                  }}
                  className={`rounded-xl border p-4 text-center transition-all ${
                    selectedDocType === 'sheet'
                      ? 'border-brand bg-brand/5 text-brand-hover'
                      : 'border-border bg-bg-card hover:border-text-muted text-text-primary'
                  }`}
                >
                  <FileSpreadsheet className="h-5 w-5 mx-auto mb-2 text-green-600" />
                  <span className="text-xs font-bold block">Google Sheet</span>
                </button>
              </div>
            </div>

            {/* Right: Ingestion Simulator */}
            <div className="flex justify-center">
              <div className="w-full max-w-md rounded-2xl border border-border bg-bg-card p-6 shadow-xl text-xs">
                
                {trainingStep === 0 && (
                  <div className="text-center py-8">
                    <Upload className="h-10 w-10 mx-auto text-text-muted mb-4 animate-bounce" />
                    <h3 className="font-bold text-sm text-text-primary">Upload Document</h3>
                    <p className="text-text-muted mt-1 max-w-xs mx-auto">
                      {selectedDocType === 'pdf' && 'Upload Kent_Grand_Pricing_Rules_2026.pdf'}
                      {selectedDocType === 'faq' && 'Link your service website FAQ url (e.g. mastecservice.com/faq)'}
                      {selectedDocType === 'sheet' && 'Sync customer AMC database spreadsheet'}
                    </p>
                    <button
                      onClick={handleStartTraining}
                      className="mt-6 inline-flex items-center gap-1.5 rounded-xl bg-brand text-white px-5 py-2.5 font-bold hover:bg-brand-hover transition-colors shadow-lg shadow-brand/20"
                    >
                      Start Ingesting
                    </button>
                  </div>
                )}

                {trainingStep === 1 && (
                  <div className="py-6">
                    <div className="flex justify-between font-bold text-text-primary mb-2">
                      <span>Uploading document...</span>
                      <span>{trainingProgress}%</span>
                    </div>
                    <div className="h-2 w-full bg-bg-elevated rounded-full overflow-hidden">
                      <div className="h-full bg-brand transition-all duration-150" style={{ width: `${trainingProgress}%` }} />
                    </div>
                    <p className="text-text-muted mt-3 italic">
                      Uploading to LeadBuddie Knowledge Engine...
                    </p>
                  </div>
                )}

                {trainingStep === 2 && (
                  <div className="py-6">
                    <div className="flex justify-between font-bold text-text-primary mb-2">
                      <span>AI Model Training...</span>
                      <span>{trainingProgress}%</span>
                    </div>
                    <div className="h-2 w-full bg-bg-elevated rounded-full overflow-hidden">
                      <div className="h-full bg-brand transition-all duration-150" style={{ width: `${trainingProgress}%` }} />
                    </div>
                    <div className="mt-3 space-y-1 text-text-secondary text-[11px]">
                      <p className="flex items-center gap-1 text-brand">✓ Pricing rules successfully read</p>
                      {trainingProgress > 40 && <p className="flex items-center gap-1 text-brand">✓ Hinglish terminology matched</p>}
                      {trainingProgress > 80 && <p className="flex items-center gap-1 text-brand">✓ AMC parameters registered</p>}
                    </div>
                  </div>
                )}

                {trainingStep === 3 && (
                  <div className="text-center py-6">
                    <CheckCircle2 className="h-10 w-10 mx-auto text-green-600 mb-4" />
                    <h3 className="font-bold text-sm text-green-600">Training Completed!</h3>
                    <p className="text-text-secondary mt-2 max-w-xs mx-auto">
                      Aditya is now fully trained on your database. He can reply to Kent Grand pricing, warranty queries, and schedule installs.
                    </p>
                    <div className="mt-6 flex justify-center gap-3">
                      <button
                        onClick={resetTraining}
                        className="border border-border rounded-xl px-4 py-2 font-semibold text-text-secondary hover:bg-bg-elevated transition-colors"
                      >
                        Reset Upload
                      </button>
                      <button
                        onClick={() => setSelectedCandidate(CANDIDATES[0])}
                        className="bg-brand text-white rounded-xl px-4 py-2 font-semibold hover:bg-brand-hover transition-colors flex items-center gap-1"
                      >
                        Test chat <ChevronRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Autonomy Modes Section ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Safety & Trust</span>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl">
              Three levels of trust
            </h2>
            <p className="mt-4 text-text-secondary text-base max-w-2xl mx-auto">
              You are always in control. Gradually delegate tasks to your AI employee as you gain trust in their drafts.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-bg-card p-6 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-lg font-bold text-text-muted mb-4">
                ◐
              </div>
              <h3 className="font-bold text-text-primary text-base">Watch Mode</h3>
              <p className="mt-2 text-xs text-text-muted font-bold uppercase tracking-wide">Zero Risk Learning</p>
              <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                The AI employee observes customer chats silently. It drafts nothing on WhatsApp but logs intents, tags leads, and notifies you of key requests. Perfect for week 1.
              </p>
            </div>
            
            <div className="rounded-2xl border border-brand bg-brand/5 p-6 shadow-sm relative">
              <span className="absolute -top-2.5 right-6 rounded-full bg-brand px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                Recommended
              </span>
              <div className="h-10 w-10 rounded-xl bg-brand text-white flex items-center justify-center text-lg font-bold mb-4">
                ✓
              </div>
              <h3 className="font-bold text-text-primary text-base">Approval Mode</h3>
              <p className="mt-2 text-xs text-brand font-bold uppercase tracking-wide">Shared Control</p>
              <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                Buddie drafts the response. You see it on your dashboard or phone, tap once to edit or send. Ideal for pricing enquiries, quotes, and custom questions.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-bg-card p-6 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-brand-subtle text-brand flex items-center justify-center text-lg font-bold mb-4">
                ✦
              </div>
              <h3 className="font-bold text-text-primary text-base">Auto Mode</h3>
              <p className="mt-2 text-xs text-text-muted font-bold uppercase tracking-wide">Full Autopilot</p>
              <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                Buddie responds directly to FAQs, triggers AMC expiration reminder cadences, and reactivates lapsed customers without requiring manual action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQs Section ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border bg-bg-elevated/40">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Faq</span>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-text-primary">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-brand/10 to-transparent p-12 text-center shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl">
              Hire your virtual sales employee today
            </h2>
            <p className="mt-4 text-text-secondary text-sm md:text-base leading-relaxed">
              Takes less than 5 minutes to connect your number. Start your 30-day free trial on the Growth plan. No credit card required. Cancel anytime.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="https://app.leadbuddie.com" variant="primary" size="lg" className="w-full sm:w-auto">
                Start Free Trial
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto">
                Talk to a Human Co-founder
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
