'use client'

import { useEffect, useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Reveal, motion, useReducedMotion, EASE_OUT } from '@/components/ui/motion'
import {
  Droplets,
  RefreshCcw,
  Wrench,
  PhoneCall,
  History,
  Check,
  Phone,
  MessageCircle,
  Calendar,
  CalendarClock,
  CircleCheck,
  FileText,
  Package,
  Sparkles,
  CheckCheck,
  Target,
  UserPlus,
  IndianRupee,
  type LucideIcon,
} from 'lucide-react'

/* ------------------------------------------------------------------------- */
/*  Mini-mockup 1 — Renewals dashboard                                       */
/* ------------------------------------------------------------------------- */

function RenewalsDashboardMockup() {
  return (
    <div className="wt-mock relative w-full rounded-2xl bg-white border border-slate-200 shadow-sm p-3 overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <RefreshCcw className="h-3.5 w-3.5 text-teal-600" strokeWidth={2} />
          <span className="text-[11px] font-semibold text-ink">AMC Renewals</span>
        </div>
        <span className="text-[10px] font-medium text-slate-500">23</span>
      </div>

      {/* Filter pills */}
      <div className="flex gap-1 mb-2.5 overflow-hidden">
        <span className="wt-pill wt-pill-active rounded-full px-2 py-0.5 text-[9px] font-semibold whitespace-nowrap">This week</span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-medium text-slate-600 whitespace-nowrap">Next 14</span>
        <span className="wt-pill wt-pill-2 rounded-full px-2 py-0.5 text-[9px] font-medium whitespace-nowrap">Callbacks</span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-medium text-slate-600 whitespace-nowrap">Lapsed</span>
      </div>

      {/* Rows */}
      <div className="space-y-1.5">
        <Row tone="bad" name="Priya Desai" sub="Kent Grand · in 1d · ₹2,499" />
        <Row tone="warn" name="Ramesh Kulkarni" sub="Kent Excell+ · in 2d · ₹3,200" />
        <Row tone="ok" name="Suresh Menon" sub="Kent Supreme · in 5d · ₹2,499" />
        <Row tone="ok" name="Anita Shah" sub="Kent Maxx · in 6d · ₹1,999" />
      </div>

      {/* Loop animation: filter pills cycle highlight */}
      <style jsx>{`
        @keyframes pill-cycle {
          0%, 30% { background: #14b8a6; color: white; }
          35%, 55% { background: #f3f4f6; color: #4b5563; }
          60%, 95% { background: #f3f4f6; color: #4b5563; }
          100% { background: #14b8a6; color: white; }
        }
        @keyframes pill-cycle-2 {
          0%, 30% { background: #f3f4f6; color: #4b5563; }
          35%, 55% { background: #14b8a6; color: white; }
          60%, 100% { background: #f3f4f6; color: #4b5563; }
        }
        :global(.wt-pill-active) { animation: pill-cycle 7s ease-in-out infinite; }
        :global(.wt-pill-2) { animation: pill-cycle-2 7s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          :global(.wt-pill-active),
          :global(.wt-pill-2) {
            animation: none;
          }
          :global(.wt-pill-active) { background: #14b8a6; color: white; }
        }
      `}</style>
    </div>
  )
}

function Row({ tone, name, sub }: { tone: 'bad' | 'warn' | 'ok'; name: string; sub: string }) {
  const dotClass = tone === 'bad' ? 'bg-rose-500' : tone === 'warn' ? 'bg-amber-500' : 'bg-teal-500'
  const initials = name.split(' ').map((p) => p[0]).join('').slice(0, 2)
  return (
    <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-2 py-1.5">
      <div className={`flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold text-white ${dotClass}`}>
        {initials}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[10px] font-semibold text-ink leading-tight">{name}</p>
        <p className="truncate text-[9px] text-slate-500 leading-tight mt-0.5">{sub}</p>
      </div>
      <div className="flex items-center gap-0.5">
        <div className="h-4 w-4 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
          <Phone className="h-2 w-2" strokeWidth={2.4} />
        </div>
        <div className="h-4 w-4 rounded-full bg-green-50 flex items-center justify-center text-green-600">
          <MessageCircle className="h-2 w-2" strokeWidth={2.4} />
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------------- */
/*  Mini-mockup 2 — Chat → schedule visit                                    */
/* ------------------------------------------------------------------------- */

function ChatToVisitMockup() {
  return (
    <div className="relative w-full rounded-2xl bg-[#ECE5DD] border border-slate-200 shadow-sm overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
      {/* WhatsApp header */}
      <div className="bg-[#075E54] px-3 py-2 flex items-center gap-2">
        <div className="h-5 w-5 rounded-full bg-white/15 flex items-center justify-center text-white font-semibold text-[9px]">RK</div>
        <span className="text-white text-[10px] font-semibold">Ramesh Kulkarni</span>
      </div>

      {/* Chat */}
      <div className="px-2 py-2 space-y-1.5">
        <div className="flex justify-start">
          <div className="visit-msg-1 max-w-[80%] rounded-xl rounded-tl-md bg-white px-2 py-1 shadow-sm">
            <p className="text-[10px] leading-snug text-slate-800">Filter is making noise. Can someone check?</p>
          </div>
        </div>

        {/* Schedule visit action card */}
        <div className="flex justify-end">
          <div className="visit-action max-w-[88%] rounded-xl rounded-tr-md bg-white border border-teal-200 px-2 py-1.5 shadow-sm">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-teal-700 mb-1 flex items-center gap-1">
              <Calendar className="h-2.5 w-2.5" strokeWidth={2.4} />
              Schedule a visit
            </p>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-[10px] font-semibold text-ink">Tomorrow</span>
              <span className="text-[9px] text-slate-500">·</span>
              <span className="text-[10px] text-slate-700">11:00 AM</span>
            </div>
            <button className="w-full rounded-md bg-teal-600 text-white text-[9px] font-semibold py-1">Book visit</button>
          </div>
        </div>

        {/* Confirmation */}
        <div className="flex justify-end">
          <div className="visit-confirm max-w-[80%] rounded-xl rounded-tr-md bg-[#DCF8C6] px-2 py-1 shadow-sm flex items-center gap-1">
            <CircleCheck className="h-3 w-3 text-emerald-600" strokeWidth={2.2} />
            <p className="text-[10px] leading-snug text-slate-800">Visit booked for tomorrow 11 AM</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes msg-appear {
          0%, 5% { opacity: 0; transform: translateY(6px); }
          10%, 95% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(0); }
        }
        :global(.visit-msg-1) { animation: msg-appear 8s ease-in-out infinite; animation-delay: 0.4s; opacity: 0; }
        :global(.visit-action) { animation: msg-appear 8s ease-in-out infinite; animation-delay: 2.2s; opacity: 0; }
        :global(.visit-confirm) { animation: msg-appear 8s ease-in-out infinite; animation-delay: 5.0s; opacity: 0; }
        @media (prefers-reduced-motion: reduce) {
          :global(.visit-msg-1),
          :global(.visit-action),
          :global(.visit-confirm) { animation: none; opacity: 1; }
        }
      `}</style>
    </div>
  )
}

/* ------------------------------------------------------------------------- */
/*  Mini-mockup 3 — Callback landing on renewals page                        */
/* ------------------------------------------------------------------------- */

function CallbackLandingMockup() {
  return (
    <div className="relative w-full rounded-2xl bg-white border border-slate-200 shadow-sm p-3 overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
      {/* Stage label */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Callback flow</span>
        <span className="cb-stage inline-flex items-center gap-1 rounded-full bg-amber-50 text-amber-700 px-2 py-0.5 text-[9px] font-semibold">
          <CalendarClock className="h-2.5 w-2.5" strokeWidth={2.4} />
          <span className="cb-stage-text">Scheduling</span>
        </span>
      </div>

      {/* Stage 1: Customer says "call me next week" */}
      <div className="cb-s1 absolute inset-x-3 top-9 bottom-3 rounded-xl bg-[#ECE5DD] p-2 flex items-end">
        <div className="max-w-[85%] rounded-xl rounded-tl-md bg-white px-2 py-1.5 shadow-sm">
          <p className="text-[10px] leading-snug text-slate-800">Salary 20th. Call me next week, will renew Gold.</p>
        </div>
      </div>

      {/* Stage 2: Callback form */}
      <div className="cb-s2 absolute inset-x-3 top-9 bottom-3 rounded-xl bg-slate-50 p-2.5 border border-slate-200">
        <p className="text-[10px] font-semibold text-ink mb-1.5">When to call back?</p>
        <div className="flex gap-1 mb-2">
          <span className="rounded-md bg-white border border-slate-200 px-1.5 py-0.5 text-[9px] text-slate-700">3 days</span>
          <span className="rounded-md bg-amber-500 text-white px-1.5 py-0.5 text-[9px] font-semibold">1 week</span>
          <span className="rounded-md bg-white border border-slate-200 px-1.5 py-0.5 text-[9px] text-slate-700">2 wks</span>
        </div>
        <div className="rounded-md bg-white border border-slate-200 px-2 py-1 text-[9px] text-slate-700">
          <span className="text-slate-400">Note: </span>Wife to approve
        </div>
        <button className="mt-2 w-full rounded-md bg-amber-500 text-white text-[9px] font-semibold py-1">Schedule callback</button>
      </div>

      {/* Stage 3: Renewals list — callback row visible */}
      <div className="cb-s3 absolute inset-x-3 top-9 bottom-3 rounded-xl bg-white border border-gray-100 p-2 space-y-1.5">
        <div className="flex items-center gap-1.5 px-1">
          <span className="rounded-full bg-amber-500 text-white px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider">Callbacks</span>
          <span className="text-[9px] text-slate-500">4 due</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-amber-50/50 border border-amber-100 px-2 py-1.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold text-white bg-amber-500">PD</div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-semibold text-ink leading-tight">Priya Desai</p>
            <p className="truncate text-[9px] text-amber-700 leading-tight mt-0.5 font-medium">Callback in 7d · Wife to approve</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-2 py-1.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold text-white bg-teal-500">VT</div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-semibold text-ink leading-tight">Vinod Tambe</p>
            <p className="truncate text-[9px] text-slate-500 leading-tight mt-0.5">Callback in 3d · Decide plan</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes stage-show {
          0%, 5% { opacity: 0; }
          10%, 33% { opacity: 1; }
          38%, 100% { opacity: 0; }
        }
        @keyframes stage-show-2 {
          0%, 36% { opacity: 0; }
          41%, 64% { opacity: 1; }
          69%, 100% { opacity: 0; }
        }
        @keyframes stage-show-3 {
          0%, 67% { opacity: 0; }
          72%, 95% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes stage-text {
          0%, 33% { content: 'WhatsApp'; }
          41%, 64% { content: 'Scheduling'; }
          72%, 100% { content: 'Surfaced'; }
        }
        :global(.cb-s1) { animation: stage-show 9s ease-in-out infinite; opacity: 0; }
        :global(.cb-s2) { animation: stage-show-2 9s ease-in-out infinite; opacity: 0; }
        :global(.cb-s3) { animation: stage-show-3 9s ease-in-out infinite; opacity: 0; }
        @media (prefers-reduced-motion: reduce) {
          :global(.cb-s1) { opacity: 0; }
          :global(.cb-s2) { opacity: 0; }
          :global(.cb-s3) { opacity: 1; animation: none; }
        }
      `}</style>
    </div>
  )
}

/* ------------------------------------------------------------------------- */
/*  Mini-mockup 4 — Customer drawer reveal                                   */
/* ------------------------------------------------------------------------- */

function CustomerDrawerMockup() {
  return (
    <div className="relative w-full rounded-2xl bg-white border border-slate-200 shadow-sm p-3 overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
      <div className="space-y-2">
        {/* Customer header */}
        <div className="drawer-row flex items-center gap-2 pb-2 border-b border-gray-100" style={{ animationDelay: '0.2s' }}>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-white text-[10px] font-bold">PD</div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] font-bold text-ink leading-tight">Priya Desai</p>
            <p className="truncate text-[9px] text-slate-500 leading-tight mt-0.5">+91 98765 43210 · Pune</p>
          </div>
        </div>

        {/* Installed product */}
        <div className="drawer-row flex items-start gap-2" style={{ animationDelay: '1.4s' }}>
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
            <Package className="h-3.5 w-3.5" strokeWidth={1.8} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400 leading-tight">Installed</p>
            <p className="text-[10px] font-semibold text-ink leading-tight mt-0.5">Kent RO Grand</p>
            <p className="text-[9px] text-slate-500 leading-tight mt-0.5">Jan 15, 2024 · 2y warranty</p>
          </div>
        </div>

        {/* AMC */}
        <div className="drawer-row flex items-start gap-2" style={{ animationDelay: '2.6s' }}>
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-teal-50 text-teal-700">
            <RefreshCcw className="h-3.5 w-3.5" strokeWidth={1.8} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400 leading-tight">Current AMC</p>
            <p className="text-[10px] font-semibold text-ink leading-tight mt-0.5">Annual Gold · ₹2,499</p>
            <p className="text-[9px] text-slate-500 leading-tight mt-0.5">Renewed 2× since 2024</p>
          </div>
        </div>

        {/* Service visits */}
        <div className="drawer-row flex items-start gap-2" style={{ animationDelay: '3.8s' }}>
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-50 text-amber-700">
            <Wrench className="h-3.5 w-3.5" strokeWidth={1.8} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400 leading-tight">Last visit</p>
            <p className="text-[10px] font-semibold text-ink leading-tight mt-0.5">Filter change · 15d ago</p>
            <p className="text-[9px] text-slate-500 leading-tight mt-0.5">3 visits this year</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes drawer-row-in {
          0%, 1% { opacity: 0; transform: translateX(8px); }
          6%, 95% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(0); }
        }
        :global(.drawer-row) { animation: drawer-row-in 7s ease-in-out infinite; opacity: 0; }
        @media (prefers-reduced-motion: reduce) {
          :global(.drawer-row) { animation: none; opacity: 1; }
        }
      `}</style>
    </div>
  )
}

/* ------------------------------------------------------------------------- */
/*  Workflow rows                                                            */
/* ------------------------------------------------------------------------- */

type Workflow = {
  icon: LucideIcon
  title: string
  description: string
  Mockup: () => JSX.Element
}

const WORKFLOWS: Workflow[] = [
  {
    icon: RefreshCcw,
    title: 'Automated AMC renewals by Buddie',
    description:
      'Buddie automatically follows up with customers on WhatsApp 60, 30, 15, and 7 days before their AMC expires. One-tap reactivation for lapsed AMCs prevents recurring revenue from walking out the door.',
    Mockup: RenewalsDashboardMockup,
  },
  {
    icon: Wrench,
    title: 'Service visits scheduled from chat',
    description:
      'When a customer complains or asks for a visit on WhatsApp, you book it on their record in one tap. Visit history travels with the customer.',
    Mockup: ChatToVisitMockup,
  },
  {
    icon: PhoneCall,
    title: 'Callbacks tracked — none forgotten',
    description:
      '"Call me next week" becomes a real follow-up on the right date with the customer’s note attached. Surfaces under the Callbacks pill on the renewals page.',
    Mockup: CallbackLandingMockup,
  },
  {
    icon: History,
    title: 'Customer + product history at a glance',
    description:
      'Installed model, install date, AMC history, prior service visits, prior notes — all on one drawer when you tap the customer.',
    Mockup: CustomerDrawerMockup,
  },
]

/* ------------------------------------------------------------------------- */
/*  Operational lifecycle — the flow the pack runs end to end                */
/* ------------------------------------------------------------------------- */

type FlowStep = {
  number: string
  icon: LucideIcon
  tone: string
  title: string
  caption: string
}

const FLOW_STEPS: FlowStep[] = [
  {
    number: '01',
    icon: MessageCircle,
    tone: 'border-teal-400/30 bg-teal-400/10 text-teal-300',
    title: 'Customer messages on WhatsApp',
    caption: 'A buyer or existing customer pings your normal WhatsApp number — an enquiry, a complaint, an AMC question.',
  },
  {
    number: '02',
    icon: Target,
    tone: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300',
    title: 'Lead captured automatically',
    caption: 'The conversation lands on your pipeline as a lead — no copy-paste, no missed message after hours.',
  },
  {
    number: '03',
    icon: UserPlus,
    tone: 'border-violet-400/30 bg-violet-400/10 text-violet-300',
    title: 'Convert to customer in one tap',
    caption: 'When they buy, promote the lead to a customer with the installed model, install date and AMC plan attached.',
  },
  {
    number: '04',
    icon: RefreshCcw,
    tone: 'border-teal-400/30 bg-teal-400/10 text-teal-300',
    title: 'Automated AMC reminders by Buddie',
    caption: 'Buddie runs the 60/30/15/7-day reminder plays on WhatsApp to secure renewals. Watch or Approval mode lets you review before sending.',
  },
  {
    number: '05',
    icon: PhoneCall,
    tone: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
    title: 'Callbacks & dormant leads revived',
    caption: '“Call me next week” schedules a callback. Buddie also reaches out automatically to cold leads (30+ days quiet).',
  },
  {
    number: '06',
    icon: IndianRupee,
    tone: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
    title: 'Revenue tracked per renewal',
    caption: 'Renewed contracts and service revenue roll up on the dashboard, so you see what the pack recovered.',
  },
  {
    number: '07',
    icon: Sparkles,
    tone: 'border-violet-400/30 bg-violet-400/10 text-violet-300',
    title: 'Buddie flags untracked customers',
    caption: 'Buddie reviews your chat history and flags customers who look like installed users but haven’t been added to your database yet.',
  },
]

/* ------------------------------------------------------------------------- */
/*  Cinematic — animated WhatsApp thread (Buddie working a renewal at 11 PM) */
/* ------------------------------------------------------------------------- */

function PhoneThread() {
  return (
    <div className="relative mx-auto">
      {/* Soft glow behind phone */}
      <div
        className="pointer-events-none absolute -inset-8 rounded-[48px] bg-gradient-to-tr from-teal-300/20 via-cyan-200/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      {/* Phone frame */}
      <div
        className="relative w-[270px] sm:w-[300px] rounded-[44px] bg-ink p-2.5 shadow-[0_30px_80px_-20px_rgba(11,31,51,0.6)] ring-1 ring-ink/20"
        style={{ aspectRatio: '320 / 640' }}
      >
        <div className="relative h-full w-full rounded-[36px] overflow-hidden bg-[#ECE5DD]">
          {/* Notch */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-5 w-28 rounded-full bg-ink z-30" aria-hidden="true" />

          {/* WhatsApp top bar */}
          <div className="absolute top-0 left-0 right-0 h-14 bg-[#075E54] flex items-center px-4 z-20 pt-3">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-white/15 flex items-center justify-center text-white font-semibold text-xs">
                PD
              </div>
              <div className="text-white">
                <p className="text-[13px] font-semibold leading-tight">Priya Desai</p>
                <p className="text-[10px] opacity-80 leading-tight">online · last seen now</p>
              </div>
            </div>
          </div>

          {/* Chat area */}
          <div className="absolute inset-x-0 top-14 bottom-14 overflow-hidden">
            <div className="relative h-full px-3 pt-4 pb-3 flex flex-col justify-end gap-2 wt-thread">
              <div className="self-center mb-2 px-2 py-0.5 rounded-md bg-white/85 text-[11px] text-slate-600 font-medium shadow-sm wt-msg" style={{ animationDelay: '0.2s' }}>
                Today, 11:04 PM
              </div>

              <ChatBubble side="left" delay="0.6s">
                Hi, my Kent RO AMC is expiring next week. What are the options?
              </ChatBubble>

              <ChatTyping delay="1.8s" />

              <ChatDoc delay="3.4s" title="AMC Plans 2026.pdf" meta="2 pages · 1.2 MB" time="11:04 PM" />

              <ChatBubble side="right" delay="4.2s">
                <p className="leading-snug">Hi Priya! Your <strong>Annual AMC Gold (₹2,499)</strong> includes priority service + 4 filter changes. Shall I book a quick call tomorrow to confirm?</p>
                <ChatMeta time="11:04 PM" sentByAi />
              </ChatBubble>

              <ChatBubble side="left" delay="6.0s">
                Tomorrow 11am works.
              </ChatBubble>

              <ChatTyping delay="7.0s" />
              <ChatBubble side="right" delay="8.2s">
                <p className="leading-snug">Done — callback scheduled for tomorrow 11 AM. You’ll get a reminder.</p>
                <ChatMeta time="11:05 PM" sentByAi />
              </ChatBubble>
            </div>
          </div>

          {/* WhatsApp bottom input (decorative) */}
          <div className="absolute bottom-0 inset-x-0 h-14 bg-[#F0F0F0] flex items-center gap-2 px-3 z-20">
            <div className="flex-1 h-9 rounded-full bg-white border border-slate-200" />
            <div className="h-9 w-9 rounded-full bg-[#075E54]" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wt-fade-in {
          0%, 5% { opacity: 0; transform: translateY(8px); }
          12%, 92% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(0); }
        }
        @keyframes wt-typing-show {
          0%, 12% { opacity: 0; transform: translateY(4px); }
          15%, 22% { opacity: 1; transform: translateY(0); }
          25%, 100% { opacity: 0; transform: translateY(-4px); }
        }
        @keyframes wt-typing-dot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-3px); opacity: 1; }
        }
        :global(.wt-msg),
        :global(.wt-bubble) {
          animation: wt-fade-in 11s ease-in-out infinite;
          opacity: 0;
        }
        :global(.wt-typing) {
          animation: wt-typing-show 11s ease-in-out infinite;
          opacity: 0;
        }
        :global(.wt-typing-dot) {
          animation: wt-typing-dot 1s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.wt-msg),
          :global(.wt-bubble),
          :global(.wt-typing) {
            animation: none;
            opacity: 1;
          }
          :global(.wt-typing) { display: none; }
        }
      `}</style>
    </div>
  )
}

function ChatDoc({ delay, title, meta, time }: { delay: string; title: string; meta: string; time: string }) {
  return (
    <div className="flex justify-end">
      <div className="wt-bubble max-w-[80%] rounded-2xl rounded-tr-md bg-[#DCF8C6] p-2 shadow-sm" style={{ animationDelay: delay }}>
        <div className="flex items-center gap-2.5 rounded-xl bg-white/70 px-2.5 py-2.5">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-700">
            <FileText className="h-5 w-5" strokeWidth={1.8} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-semibold text-slate-900 leading-tight">{title}</p>
            <p className="truncate text-[11px] text-slate-600 leading-tight mt-0.5">{meta}</p>
          </div>
        </div>
        <ChatMeta time={time} sentByAi />
      </div>
    </div>
  )
}

function ChatBubble({ side, delay, children }: { side: 'left' | 'right'; delay: string; children: React.ReactNode }) {
  const isMe = side === 'right'
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`wt-bubble max-w-[80%] rounded-2xl px-3 py-2 text-[13.5px] leading-[1.4] shadow-sm ${
          isMe ? 'bg-[#DCF8C6] text-slate-900 rounded-tr-md' : 'bg-white text-slate-900 rounded-tl-md'
        }`}
        style={{ animationDelay: delay }}
      >
        {children}
      </div>
    </div>
  )
}

function ChatMeta({ time, sentByAi }: { time: string; sentByAi?: boolean }) {
  return (
    <div className="mt-1 flex items-center justify-end gap-1.5">
      {sentByAi && (
        <span className="inline-flex items-center gap-1 rounded-full bg-teal-100 text-teal-700 px-1.5 py-[1px] text-[9px] font-semibold uppercase tracking-wide">
          <Sparkles className="h-2.5 w-2.5" strokeWidth={2.4} />
          Buddie
        </span>
      )}
      <span className="text-[10.5px] text-slate-600">{time}</span>
      <CheckCheck className="h-3 w-3 text-[#4FC3F7]" strokeWidth={2.2} />
    </div>
  )
}

function ChatTyping({ delay }: { delay: string }) {
  return (
    <div className="wt-typing flex justify-end" style={{ animationDelay: delay }}>
      <div className="rounded-2xl bg-white px-3 py-2.5 shadow-sm flex items-center gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-full bg-teal-100 text-teal-700 px-1.5 py-[1px] text-[9px] font-semibold uppercase tracking-wide">
          <Sparkles className="h-2.5 w-2.5" strokeWidth={2.4} />
          Buddie typing
        </span>
        <span className="flex items-center gap-0.5">
          <span className="wt-typing-dot inline-block h-1.5 w-1.5 rounded-full bg-slate-400" style={{ animationDelay: '0s' }} />
          <span className="wt-typing-dot inline-block h-1.5 w-1.5 rounded-full bg-slate-400" style={{ animationDelay: '0.15s' }} />
          <span className="wt-typing-dot inline-block h-1.5 w-1.5 rounded-full bg-slate-400" style={{ animationDelay: '0.3s' }} />
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------------- */
/*  Auto-playing lifecycle flow — steps light up one by one                  */
/* ------------------------------------------------------------------------- */

function AutoFlow() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reduce) {
      setActive(FLOW_STEPS.length - 1)
      return
    }
    const id = setInterval(() => {
      setActive((a) => (a + 1) % FLOW_STEPS.length)
    }, 2400)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <ol className="relative">
      {FLOW_STEPS.map(({ number, icon: Icon, tone, title, caption }, i) => {
        const isActive = i === active
        const isDone = i < active
        const isLast = i === FLOW_STEPS.length - 1
        return (
          <li key={number} className="flex gap-4">
            {/* Rail: node + connector */}
            <div className="flex flex-col items-center">
              <motion.div
                className={`relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border ${tone}`}
                animate={{
                  scale: isActive ? 1.12 : 1,
                  opacity: isActive || isDone ? 1 : 0.5,
                }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
              >
                <Icon className="h-5 w-5" strokeWidth={1.8} />
                {isActive && !reduce && (
                  <motion.span
                    className="absolute inset-0 rounded-xl ring-2 ring-current"
                    animate={{ opacity: [0.7, 0, 0.7], scale: [1, 1.45, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
              </motion.div>

              {!isLast && (
                <div className="relative my-1 w-[2px] flex-1 overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    className="absolute inset-x-0 top-0 h-full origin-top rounded-full bg-gradient-to-b from-teal-400 via-cyan-400 to-violet-400"
                    initial={false}
                    animate={{ scaleY: isDone ? 1 : isActive ? 0.5 : 0 }}
                    transition={{ duration: 0.5, ease: EASE_OUT }}
                  />
                </div>
              )}
            </div>

            {/* Content */}
            <motion.div
              className="min-w-0 flex-1 pb-7"
              animate={{ opacity: isActive ? 1 : isDone ? 0.75 : 0.4 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-1 flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-[0.16em] text-text-muted">{number}</span>
                <motion.span
                  className="inline-flex items-center gap-1 rounded-full bg-teal-400/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-teal-300"
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="h-1 w-1 rounded-full bg-teal-300" />
                  Now
                </motion.span>
              </div>
              <h4 className="mb-1 text-base font-semibold leading-snug text-text-primary">{title}</h4>
              <p className="text-[15px] leading-relaxed text-text-secondary">{caption}</p>
            </motion.div>
          </li>
        )
      })}
    </ol>
  )
}

/* ------------------------------------------------------------------------- */
/*  Workflow showcase — modern alternating immersive rows                    */
/* ------------------------------------------------------------------------- */

function WorkflowRow({
  index,
  flip,
  icon: Icon,
  title,
  description,
  Mockup,
}: {
  index: number
  flip: boolean
  icon: LucideIcon
  title: string
  description: string
  Mockup: () => JSX.Element
}) {
  const reduce = useReducedMotion()
  const fromText = flip ? 40 : -40
  const fromMock = flip ? -40 : 40

  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
      {/* Copy */}
      <motion.div
        className={flip ? 'md:order-2' : ''}
        initial={reduce ? false : { opacity: 0, x: fromText }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        <div className="mb-5 flex items-center gap-3">
          <span className="text-6xl font-bold leading-none text-white/[0.07]">{`0${index + 1}`}</span>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-400/30 bg-teal-400/10 text-teal-300">
            <Icon className="h-6 w-6" strokeWidth={1.7} />
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
            <Check className="h-3 w-3" strokeWidth={3} />
            Shipped
          </span>
        </div>
        <h4 className="text-2xl font-bold leading-snug text-text-primary md:text-3xl">{title}</h4>
        <p className="mt-3 max-w-md text-base leading-relaxed text-text-secondary">{description}</p>
      </motion.div>

      {/* Mockup */}
      <motion.div
        className={flip ? 'md:order-1' : ''}
        initial={reduce ? false : { opacity: 0, x: fromMock, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE_OUT }}
      >
        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-gradient-to-br from-teal-400/15 via-cyan-400/8 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-md rounded-3xl border border-white/10 bg-bg-card/40 p-3 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] backdrop-blur-sm">
            <Mockup />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function WorkflowShowcase() {
  return (
    <div className="space-y-14 md:space-y-24">
      {WORKFLOWS.map((w, i) => (
        <WorkflowRow
          key={w.title}
          index={i}
          flip={i % 2 === 1}
          icon={w.icon}
          title={w.title}
          description={w.description}
          Mockup={w.Mockup}
        />
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------------- */
/*  Section                                                                  */
/* ------------------------------------------------------------------------- */

export function WaterPurifierPack() {
  return (
    <Section background="elevated">
      {/* Outcome header — the line a dealer decides on */}
      <Reveal className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-300 text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
          Live now · Flagship operational pack
        </div>

        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-400/30 bg-teal-400/10 text-teal-300 mb-6">
          <Droplets className="h-7 w-7" strokeWidth={1.6} />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-text-primary leading-[1.08] mb-5">
          Built for water treatment businesses.
        </h2>

        <p className="text-base md:text-lg text-text-secondary leading-relaxed">
          Track every installation, AMC renewal, callback and customer follow-up from one operational workflow. ₹1,999–₹3,500 per customer per year leaks out of every dealership through the renewal nobody chased. The Water Treatment Pack runs the whole lifecycle — capture, convert, renew, service — on the WhatsApp number your customers already message, so nothing slips.
        </p>
      </Reveal>

      {/* Cinematic — see the lifecycle happen on a real thread */}
      <div className="mt-14 md:mt-20 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Phone thread */}
        <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-24">
          <PhoneThread />
        </div>

        {/* Operational flow steps */}
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-300 mb-3">The flow, end to end</p>
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 leading-snug">
            One message in. A tracked customer out.
          </h3>

          <AutoFlow />
        </div>
      </div>

      {/* What you get — shipped workflows as immersive alternating rows */}
      <div className="mt-20 md:mt-32">
        <Reveal className="mb-12 max-w-2xl md:mb-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">What you get</p>
          <h3 className="text-2xl font-bold leading-snug text-text-primary md:text-4xl">
            Four dealer workflows — all shipped, all running today.
          </h3>
        </Reveal>

        <WorkflowShowcase />
      </div>

      {/* Proof + CTA */}
      <div className="mt-16 md:mt-20 grid lg:grid-cols-12 gap-8 items-center rounded-3xl border border-white/10 bg-bg-card/70 p-6 md:p-8 backdrop-blur-sm">
        <div className="lg:col-span-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-2">In production with</p>
          <p className="text-xl font-bold text-text-primary">Mastec Water Purifier</p>
          <p className="text-sm md:text-base text-text-secondary mt-2 leading-relaxed">
            Runs the Water Purifier Pack every day for 60–100 leads — real renewals, service visits and callbacks, not a demo dataset.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
          <Button href="/case-study" variant="lime" size="lg" className="w-full">
            Read the Mastec story
          </Button>
          <Button href="/demo" variant="outline" size="lg" className="w-full">
            Book a dealer demo
          </Button>
        </div>
      </div>
    </Section>
  )
}
