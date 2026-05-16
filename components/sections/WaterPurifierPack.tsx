'use client'

import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
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
  ChevronRight,
  type LucideIcon,
} from 'lucide-react'

/* ------------------------------------------------------------------------- */
/*  Mini-mockup 1 — Renewals dashboard                                       */
/* ------------------------------------------------------------------------- */

function RenewalsDashboardMockup() {
  return (
    <div className="wt-mock relative w-full rounded-2xl bg-white border border-gray-200 shadow-sm p-3 overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <RefreshCcw className="h-3.5 w-3.5 text-teal-600" strokeWidth={2} />
          <span className="text-[11px] font-semibold text-ink">AMC Renewals</span>
        </div>
        <span className="text-[10px] font-medium text-gray-500">23</span>
      </div>

      {/* Filter pills */}
      <div className="flex gap-1 mb-2.5 overflow-hidden">
        <span className="wt-pill wt-pill-active rounded-full px-2 py-0.5 text-[9px] font-semibold whitespace-nowrap">This week</span>
        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[9px] font-medium text-gray-600 whitespace-nowrap">Next 14</span>
        <span className="wt-pill wt-pill-2 rounded-full px-2 py-0.5 text-[9px] font-medium whitespace-nowrap">Callbacks</span>
        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[9px] font-medium text-gray-600 whitespace-nowrap">Lapsed</span>
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
    <div className="flex items-center gap-2 rounded-lg bg-gray-50/60 px-2 py-1.5">
      <div className={`flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold text-white ${dotClass}`}>
        {initials}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[10px] font-semibold text-ink leading-tight">{name}</p>
        <p className="truncate text-[9px] text-gray-500 leading-tight mt-0.5">{sub}</p>
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
    <div className="relative w-full rounded-2xl bg-[#ECE5DD] border border-gray-200 shadow-sm overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
      {/* WhatsApp header */}
      <div className="bg-[#075E54] px-3 py-2 flex items-center gap-2">
        <div className="h-5 w-5 rounded-full bg-white/15 flex items-center justify-center text-white font-semibold text-[9px]">RK</div>
        <span className="text-white text-[10px] font-semibold">Ramesh Kulkarni</span>
      </div>

      {/* Chat */}
      <div className="px-2 py-2 space-y-1.5">
        <div className="flex justify-start">
          <div className="visit-msg-1 max-w-[80%] rounded-xl rounded-tl-md bg-white px-2 py-1 shadow-sm">
            <p className="text-[10px] leading-snug text-gray-800">Filter is making noise. Can someone check?</p>
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
              <span className="text-[9px] text-gray-500">·</span>
              <span className="text-[10px] text-gray-700">11:00 AM</span>
            </div>
            <button className="w-full rounded-md bg-teal-600 text-white text-[9px] font-semibold py-1">Book visit</button>
          </div>
        </div>

        {/* Confirmation */}
        <div className="flex justify-end">
          <div className="visit-confirm max-w-[80%] rounded-xl rounded-tr-md bg-[#DCF8C6] px-2 py-1 shadow-sm flex items-center gap-1">
            <CircleCheck className="h-3 w-3 text-emerald-600" strokeWidth={2.2} />
            <p className="text-[10px] leading-snug text-gray-800">Visit booked for tomorrow 11 AM</p>
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
    <div className="relative w-full rounded-2xl bg-white border border-gray-200 shadow-sm p-3 overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
      {/* Stage label */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">Callback flow</span>
        <span className="cb-stage inline-flex items-center gap-1 rounded-full bg-amber-50 text-amber-700 px-2 py-0.5 text-[9px] font-semibold">
          <CalendarClock className="h-2.5 w-2.5" strokeWidth={2.4} />
          <span className="cb-stage-text">Scheduling</span>
        </span>
      </div>

      {/* Stage 1: Customer says "call me next week" */}
      <div className="cb-s1 absolute inset-x-3 top-9 bottom-3 rounded-xl bg-[#ECE5DD] p-2 flex items-end">
        <div className="max-w-[85%] rounded-xl rounded-tl-md bg-white px-2 py-1.5 shadow-sm">
          <p className="text-[10px] leading-snug text-gray-800">Salary 20th. Call me next week, will renew Gold.</p>
        </div>
      </div>

      {/* Stage 2: Callback form */}
      <div className="cb-s2 absolute inset-x-3 top-9 bottom-3 rounded-xl bg-gray-50 p-2.5 border border-gray-200">
        <p className="text-[10px] font-semibold text-ink mb-1.5">When to call back?</p>
        <div className="flex gap-1 mb-2">
          <span className="rounded-md bg-white border border-gray-200 px-1.5 py-0.5 text-[9px] text-gray-700">3 days</span>
          <span className="rounded-md bg-amber-500 text-white px-1.5 py-0.5 text-[9px] font-semibold">1 week</span>
          <span className="rounded-md bg-white border border-gray-200 px-1.5 py-0.5 text-[9px] text-gray-700">2 wks</span>
        </div>
        <div className="rounded-md bg-white border border-gray-200 px-2 py-1 text-[9px] text-gray-700">
          <span className="text-gray-400">Note: </span>Wife to approve
        </div>
        <button className="mt-2 w-full rounded-md bg-amber-500 text-white text-[9px] font-semibold py-1">Schedule callback</button>
      </div>

      {/* Stage 3: Renewals list — callback row visible */}
      <div className="cb-s3 absolute inset-x-3 top-9 bottom-3 rounded-xl bg-white border border-gray-100 p-2 space-y-1.5">
        <div className="flex items-center gap-1.5 px-1">
          <span className="rounded-full bg-amber-500 text-white px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider">Callbacks</span>
          <span className="text-[9px] text-gray-500">4 due</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-amber-50/50 border border-amber-100 px-2 py-1.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold text-white bg-amber-500">PD</div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-semibold text-ink leading-tight">Priya Desai</p>
            <p className="truncate text-[9px] text-amber-700 leading-tight mt-0.5 font-medium">Callback in 7d · Wife to approve</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-gray-50/60 px-2 py-1.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold text-white bg-teal-500">VT</div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-semibold text-ink leading-tight">Vinod Tambe</p>
            <p className="truncate text-[9px] text-gray-500 leading-tight mt-0.5">Callback in 3d · Decide plan</p>
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
    <div className="relative w-full rounded-2xl bg-white border border-gray-200 shadow-sm p-3 overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
      <div className="space-y-2">
        {/* Customer header */}
        <div className="drawer-row flex items-center gap-2 pb-2 border-b border-gray-100" style={{ animationDelay: '0.2s' }}>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-white text-[10px] font-bold">PD</div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] font-bold text-ink leading-tight">Priya Desai</p>
            <p className="truncate text-[9px] text-gray-500 leading-tight mt-0.5">+91 98765 43210 · Pune</p>
          </div>
        </div>

        {/* Installed product */}
        <div className="drawer-row flex items-start gap-2" style={{ animationDelay: '1.4s' }}>
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
            <Package className="h-3.5 w-3.5" strokeWidth={1.8} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-400 leading-tight">Installed</p>
            <p className="text-[10px] font-semibold text-ink leading-tight mt-0.5">Kent RO Grand</p>
            <p className="text-[9px] text-gray-500 leading-tight mt-0.5">Jan 15, 2024 · 2y warranty</p>
          </div>
        </div>

        {/* AMC */}
        <div className="drawer-row flex items-start gap-2" style={{ animationDelay: '2.6s' }}>
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-teal-50 text-teal-700">
            <RefreshCcw className="h-3.5 w-3.5" strokeWidth={1.8} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-400 leading-tight">Current AMC</p>
            <p className="text-[10px] font-semibold text-ink leading-tight mt-0.5">Annual Gold · ₹2,499</p>
            <p className="text-[9px] text-gray-500 leading-tight mt-0.5">Renewed 2× since 2024</p>
          </div>
        </div>

        {/* Service visits */}
        <div className="drawer-row flex items-start gap-2" style={{ animationDelay: '3.8s' }}>
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-50 text-amber-700">
            <Wrench className="h-3.5 w-3.5" strokeWidth={1.8} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-400 leading-tight">Last visit</p>
            <p className="text-[10px] font-semibold text-ink leading-tight mt-0.5">Filter change · 15d ago</p>
            <p className="text-[9px] text-gray-500 leading-tight mt-0.5">3 visits this year</p>
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
    title: 'AMC renewals surfaced before they lapse',
    description:
      'Every customer’s annual maintenance contract sits on the renewals page sorted by urgency. Filter by this-week / next-14 / next-30 / callbacks-scheduled / lapsed.',
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
/*  Section                                                                  */
/* ------------------------------------------------------------------------- */

export function WaterPurifierPack() {
  return (
    <Section background="gray">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: pack identity + outcome framing */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 text-teal-700 text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" aria-hidden="true" />
            Live now · Water purifier pack
          </div>

          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 mb-6">
            <Droplets className="h-8 w-8" strokeWidth={1.6} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight mb-4">
            The pack built with water purifier dealers — for water purifier dealers.
          </h2>

          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Generic CRMs do not understand AMC renewals, service visits, or callback discipline. We do. The water purifier pack adds the workflows a dealer actually runs, on top of the AI co-pilot, on top of your existing WhatsApp number.
          </p>

          <div className="rounded-2xl border border-teal-200 bg-white px-5 py-4 mb-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700 mb-2">Where the money is</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Most water purifier dealers leak revenue at one place: the AMC renewal nobody followed up on. ₹1,999–₹3,500 per customer per year, walking out the door because the callback got lost. LeadBuddie closes that leak.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white px-5 py-4 mb-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">In production with</p>
            <p className="text-base font-semibold text-ink">Mastec Water Purifier</p>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              Handles 60–100 leads a day. The water purifier pack is built and tested with their workflow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/case-study" variant="lime" size="lg">
              Read the Mastec story
            </Button>
            <Button href="/demo" variant="outline" size="lg">
              Book a dealer demo
            </Button>
          </div>
        </div>

        {/* Right: animated workflow rows */}
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700 mb-4">What you get</p>
          <h3 className="text-2xl md:text-3xl font-bold text-ink mb-8 leading-snug">
            Four workflows on top of the AI co-pilot
          </h3>

          <ol className="space-y-6">
            {WORKFLOWS.map(({ icon: Icon, title, description, Mockup }, i) => (
              <li
                key={title}
                className="group relative bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-200"
              >
                <div className="grid sm:grid-cols-[1fr,220px] gap-5 items-start">
                  {/* Text side */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </div>
                      <span className="text-[11px] font-bold tracking-[0.16em] text-gray-400">{`0${i + 1}`}</span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        Shipped
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-ink leading-snug mb-2">{title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                  </div>

                  {/* Animated mockup */}
                  <div className="w-full">
                    <Mockup />
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-2xl border-2 border-dashed border-teal-200 bg-teal-50/40 p-5 text-center">
            <p className="text-sm text-teal-900 leading-relaxed">
              Run a water purifier business and want to see how the pack maps to your workflow?{' '}
              <Link href="/demo" className="font-semibold text-teal-700 hover:text-teal-800 underline-offset-2 hover:underline">
                Book a 20-minute dealer demo →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
