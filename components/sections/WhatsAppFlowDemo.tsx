'use client'

import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CheckCheck, Sparkles, Target, CalendarClock, CircleCheck, FileText, type LucideIcon } from 'lucide-react'

/**
 * WhatsAppFlowDemo — animated, looping WhatsApp conversation showing the AI
 * sales agent in action. Pure CSS keyframes, no external deps.
 *
 * The right column renders a phone frame with a WhatsApp-style thread. Bubbles
 * fade in on a staggered timeline (defined via CSS animation-delay), an
 * AI-typing indicator pulses between bubbles, and small annotation pills appear
 * to label key moments (Lead qualified, Callback scheduled, AMC renewal).
 * Loop period: ~12s.
 */
export function WhatsAppFlowDemo() {
  return (
    <Section>
      <SectionHeader
        label="See it happen"
        title="Your AI sales agent — live on a real WhatsApp thread."
        description="Not a screenshot. Not a mockup. This is what your buyer sees when LeadBuddie is awake on your WhatsApp at 11 PM."
        centered
        className="mb-12 md:mb-16"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Phone first on mobile for visual impact, second on desktop */}
        <div className="order-1 flex justify-center lg:order-2 lg:col-span-7">
          <Phone />
        </div>

        {/* Explainer second on mobile, first on desktop */}
        <div className="order-2 space-y-5 lg:order-1 lg:col-span-5">
          <ExplainerStep
            number="01"
            tone="border-teal-400/30 bg-teal-400/10 text-teal-300"
            icon={Sparkles}
            title="Reads the question. Drafts the right reply."
            body="Pulls the customer's history, model installed, AMC plan, last conversation. Sends a relevant, on-tone reply — or queues it for your approval."
          />
          <ExplainerStep
            number="02"
            tone="border-violet-400/30 bg-violet-400/10 text-violet-300"
            icon={FileText}
            title="Sends the right asset — instantly."
            body="Catalog PDF, AMC plan brochure, product image, install video — your AI agent picks the right asset for what the customer asked."
          />
          <ExplainerStep
            number="03"
            tone="border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
            icon={Target}
            title="Qualifies the lead the moment it lands."
            body="Detects intent — price enquiry, ready to buy, complaint, AMC renewal. Tags it. Surfaces it on the right pipeline."
          />
          <ExplainerStep
            number="04"
            tone="border-amber-400/30 bg-amber-400/10 text-amber-300"
            icon={CalendarClock}
            title="Books your follow-up before you forget."
            body="&ldquo;Call me next week&rdquo; turns into a real callback on the right date with the customer's note attached."
          />
          <ExplainerStep
            number="05"
            tone="border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
            icon={CircleCheck}
            title="Closes the loop and sets next year's reminder."
            body="When the AMC renews, the activity is logged and the next renewal reminder is set automatically — a year out."
          />
        </div>
      </div>
    </Section>
  )
}

function ExplainerStep({
  number,
  tone,
  icon: Icon,
  title,
  body,
}: {
  number: string
  tone: string
  icon: LucideIcon
  title: string
  body: string
}) {
  return (
    <div className="flex gap-4">
      <div className={`flex-shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${tone}`}>
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-bold tracking-[0.16em] text-text-muted mb-1">{number}</div>
        <h3 className="text-base font-semibold text-text-primary leading-snug mb-1">{title}</h3>
        <p className="text-[15px] text-text-secondary leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------------- */
/*  Phone frame + animated WhatsApp thread                                   */
/* ------------------------------------------------------------------------- */

function Phone() {
  return (
    <div className="relative">
      {/* Soft glow behind phone */}
      <div
        className="pointer-events-none absolute -inset-8 rounded-[48px] bg-gradient-to-tr from-teal-300/30 via-cyan-200/20 to-transparent blur-3xl"
        aria-hidden="true"
      />

      {/* Annotation pills floating around the phone (loop with the thread) */}
      <AnnotationPills />

      {/* Phone frame */}
      <div
        className="relative w-[300px] sm:w-[340px] rounded-[44px] bg-ink p-2.5 shadow-[0_30px_80px_-20px_rgba(11,31,51,0.6)] ring-1 ring-ink/20"
        style={{ aspectRatio: '320 / 640' }}
      >
        {/* Inner screen */}
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
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22><path d=%22M30 15l-7 12h14zM15 30v0M45 30v0%22 fill=%22%23d1c7b8%22 opacity=%220.18%22/></svg>')]" aria-hidden="true" />

            <div className="relative h-full px-3 pt-4 pb-3 flex flex-col justify-end gap-2 wa-thread">
              {/* Timestamp */}
              <div className="self-center mb-2 px-2 py-0.5 rounded-md bg-white/85 text-[11px] text-slate-600 font-medium shadow-sm wa-msg" style={{ animationDelay: '0.2s' }}>
                Today, 11:04 PM
              </div>

              {/* Customer message 1 */}
              <Bubble side="left" delay="0.6s">
                Hi, my Kent RO AMC is expiring next week. What are the options?
              </Bubble>

              {/* Typing indicator → fades out before AI reply */}
              <TypingIndicator delay="1.8s" />

              {/* AI sends the catalog PDF — auto-attached based on intent */}
              <DocBubble
                delay="3.4s"
                title="AMC Plans 2026.pdf"
                meta="2 pages · 1.2 MB"
                time="11:04 PM"
              />

              {/* AI text reply right after the attachment */}
              <Bubble side="right" delay="4.2s">
                <p className="leading-snug">Hi Priya! Your <strong>Annual AMC Gold (₹2,499)</strong> includes priority service + 4 filter changes. Shall I book a quick call tomorrow to confirm?</p>
                <BubbleMeta time="11:04 PM" sentByAi />
              </Bubble>

              {/* Customer message 2 */}
              <Bubble side="left" delay="6.0s">
                Tomorrow 11am works.
              </Bubble>

              {/* AI confirmation */}
              <TypingIndicator delay="7.0s" />
              <Bubble side="right" delay="8.2s">
                <p className="leading-snug">Done — callback scheduled for tomorrow 11 AM. You will receive a reminder. <span className="inline-block">👍</span></p>
                <BubbleMeta time="11:05 PM" sentByAi />
              </Bubble>
            </div>
          </div>

          {/* WhatsApp bottom input (decorative) */}
          <div className="absolute bottom-0 inset-x-0 h-14 bg-[#F0F0F0] flex items-center gap-2 px-3 z-20">
            <div className="flex-1 h-9 rounded-full bg-white border border-slate-200" />
            <div className="h-9 w-9 rounded-full bg-[#075E54]" />
          </div>
        </div>
      </div>

      {/* Animation keyframes — scoped inline so the component is fully self-contained */}
      <style jsx>{`
        @keyframes wa-fade-in {
          0%, 5% { opacity: 0; transform: translateY(8px); }
          12%, 92% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(0); }
        }
        @keyframes wa-typing-show {
          0%, 12% { opacity: 0; transform: translateY(4px); }
          15%, 22% { opacity: 1; transform: translateY(0); }
          25%, 100% { opacity: 0; transform: translateY(-4px); }
        }
        @keyframes wa-typing-dot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-3px); opacity: 1; }
        }
        :global(.wa-thread) {
          /* Layout fallback: the thread items animate; container does nothing */
        }
        :global(.wa-msg),
        :global(.wa-bubble) {
          animation: wa-fade-in 11s ease-in-out infinite;
          opacity: 0;
        }
        :global(.wa-typing) {
          animation: wa-typing-show 11s ease-in-out infinite;
          opacity: 0;
        }
        :global(.wa-typing-dot) {
          animation: wa-typing-dot 1s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.wa-msg),
          :global(.wa-bubble),
          :global(.wa-typing) {
            animation: none;
            opacity: 1;
          }
          :global(.wa-typing) { display: none; }
        }
      `}</style>
    </div>
  )
}

function DocBubble({
  delay,
  title,
  meta,
  time,
}: {
  delay: string
  title: string
  meta: string
  time: string
}) {
  return (
    <div className="flex justify-end">
      <div
        className="wa-bubble max-w-[80%] rounded-2xl rounded-tr-md bg-[#DCF8C6] p-2 shadow-sm"
        style={{ animationDelay: delay }}
      >
        {/* Document strip */}
        <div className="flex items-center gap-2.5 rounded-xl bg-white/70 px-2.5 py-2.5">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-700">
            <FileText className="h-5 w-5" strokeWidth={1.8} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-semibold text-slate-900 leading-tight">{title}</p>
            <p className="truncate text-[11px] text-slate-600 leading-tight mt-0.5">{meta}</p>
          </div>
          <div className="flex-shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-[#075E54]/10 text-[#075E54]">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14m7-7l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <BubbleMeta time={time} sentByAi />
      </div>
    </div>
  )
}

function Bubble({
  side,
  delay,
  children,
}: {
  side: 'left' | 'right'
  delay: string
  children: React.ReactNode
}) {
  const isMe = side === 'right'
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`wa-bubble max-w-[80%] rounded-2xl px-3 py-2 text-[13.5px] leading-[1.4] shadow-sm ${
          isMe
            ? 'bg-[#DCF8C6] text-slate-900 rounded-tr-md'
            : 'bg-white text-slate-900 rounded-tl-md'
        }`}
        style={{ animationDelay: delay }}
      >
        {children}
      </div>
    </div>
  )
}

function BubbleMeta({ time, sentByAi }: { time: string; sentByAi?: boolean }) {
  return (
    <div className="mt-1 flex items-center justify-end gap-1.5">
      {sentByAi && (
        <span className="inline-flex items-center gap-1 rounded-full bg-teal-100 text-teal-700 px-1.5 py-[1px] text-[9px] font-semibold uppercase tracking-wide">
          <Sparkles className="h-2.5 w-2.5" strokeWidth={2.4} />
          AI
        </span>
      )}
      <span className="text-[10.5px] text-slate-600">{time}</span>
      <CheckCheck className="h-3 w-3 text-[#4FC3F7]" strokeWidth={2.2} />
    </div>
  )
}

function TypingIndicator({ delay }: { delay: string }) {
  return (
    <div className="wa-typing flex justify-end" style={{ animationDelay: delay }}>
      <div className="rounded-2xl bg-white px-3 py-2.5 shadow-sm flex items-center gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-full bg-teal-100 text-teal-700 px-1.5 py-[1px] text-[9px] font-semibold uppercase tracking-wide">
          <Sparkles className="h-2.5 w-2.5" strokeWidth={2.4} />
          AI typing
        </span>
        <span className="flex items-center gap-0.5">
          <span className="wa-typing-dot inline-block h-1.5 w-1.5 rounded-full bg-slate-400" style={{ animationDelay: '0s' }} />
          <span className="wa-typing-dot inline-block h-1.5 w-1.5 rounded-full bg-slate-400" style={{ animationDelay: '0.15s' }} />
          <span className="wa-typing-dot inline-block h-1.5 w-1.5 rounded-full bg-slate-400" style={{ animationDelay: '0.3s' }} />
        </span>
      </div>
    </div>
  )
}

function AnnotationPills() {
  // Four small pills that fade in around the phone to label what just happened.
  // Each pill timed to a moment in the loop. Hidden on small screens to avoid clipping.
  return (
    <>
      <FloatingPill
        text="Catalog auto-attached"
        tone="violet"
        position="hidden md:flex top-16 -left-8 md:-left-20 lg:-left-28"
        delay="3.5s"
      />
      <FloatingPill
        text="AI replied — context-aware"
        tone="emerald"
        position="hidden md:flex top-44 -right-8 md:-right-20 lg:-right-28"
        delay="4.4s"
      />
      <FloatingPill
        text="Lead auto-qualified"
        tone="cyan"
        position="hidden md:flex top-1/2 -left-8 md:-left-24 lg:-left-32 translate-y-2"
        delay="5.4s"
      />
      <FloatingPill
        text="Callback scheduled"
        tone="amber"
        position="hidden md:flex bottom-24 -right-8 md:-right-20 lg:-right-28"
        delay="8.4s"
      />
      <style jsx>{`
        @keyframes float-pill {
          0%, 18% { opacity: 0; transform: translateY(8px) scale(0.96); }
          24%, 78% { opacity: 1; transform: translateY(0) scale(1); }
          88%, 100% { opacity: 0; transform: translateY(-4px) scale(0.98); }
        }
        :global(.float-pill) {
          animation: float-pill 11s ease-in-out infinite;
          opacity: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.float-pill) { animation: none; opacity: 1; }
        }
      `}</style>
    </>
  )
}

function FloatingPill({
  text,
  tone,
  position,
  delay,
}: {
  text: string
  tone: 'emerald' | 'cyan' | 'amber' | 'violet'
  position: string
  delay: string
}) {
  const toneClasses: Record<typeof tone, { dot: string; text: string; bg: string }> = {
    emerald: { dot: 'bg-emerald-500', text: 'text-emerald-900', bg: 'bg-white' },
    cyan: { dot: 'bg-cyan-500', text: 'text-cyan-900', bg: 'bg-white' },
    amber: { dot: 'bg-amber-500', text: 'text-amber-900', bg: 'bg-white' },
    violet: { dot: 'bg-violet-500', text: 'text-violet-900', bg: 'bg-white' },
  }
  const c = toneClasses[tone]
  return (
    <div
      className={`float-pill absolute ${position} z-20 items-center gap-2 rounded-full ${c.bg} border border-slate-200 px-3 py-1.5 shadow-md`}
      style={{ animationDelay: delay }}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} aria-hidden="true" />
      <span className={`text-[11px] font-semibold ${c.text} whitespace-nowrap`}>{text}</span>
    </div>
  )
}
