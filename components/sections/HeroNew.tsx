import { Button } from '@/components/ui/Button'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'

const TRUST_STRIPS = [
  'Replies within seconds, even after hours',
  'Official Meta tech provider · DPDP-ready',
  'Built with Mastec Water Purifier',
]

const HERO_ANNOTATIONS: { text: string; tone: 'emerald' | 'amber' | 'cyan'; placement: string }[] = [
  { text: 'AI reply suggested', tone: 'emerald', placement: 'top-4 right-4 md:top-6 md:right-6' },
  { text: 'Lead auto-qualified', tone: 'cyan', placement: 'bottom-4 left-4 md:bottom-6 md:left-6' },
  { text: 'Follow-up triggered', tone: 'amber', placement: 'top-1/2 -translate-y-1/2 right-2 md:right-4' },
]

const TONE_CLASSES: Record<'emerald' | 'amber' | 'cyan', string> = {
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-500',
  cyan: 'bg-cyan-500',
}

export function HeroNew() {
  return (
    <section className="relative bg-ink pt-32 pb-24 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Professional Gradient Backdrop */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-800 to-ink-900"></div>

        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-teal-400/10 rounded-full blur-2xl"></div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#22d3ee_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
              AI co-pilot for WhatsApp + Instagram
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1] tracking-tight font-sans">
              Reply to every lead — even when you can&apos;t.
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
              LeadBuddie replies, qualifies the lead, and schedules the follow-up while you&apos;re with another customer. Built for Indian SMBs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="https://app.leadbuddie.com" variant="lime" size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
              <Button href="/demo" variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
                Book Demo
              </Button>
            </div>

            {/* Trust strips */}
            <ul className="mt-8 flex flex-col gap-2.5 text-sm text-white/75">
              {TRUST_STRIPS.map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-lime"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l2.47 2.47 6.47-6.47a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative z-20">
            {/* Screenshot with annotation overlays */}
            <div className="relative">
              <ScreenshotFrame
                src="/graphics/hero/hero-dashboard.svg"
                alt="LeadBuddie AI co-pilot dashboard"
                aspect="3/2"
              />
              {HERO_ANNOTATIONS.map((a) => (
                <div
                  key={a.text}
                  className={`hidden sm:flex absolute ${a.placement} z-30 items-center gap-1.5 rounded-full bg-white border border-slate-200 px-2.5 py-1 shadow-sm`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${TONE_CLASSES[a.tone]}`} aria-hidden="true" />
                  <span className="text-[11px] font-medium text-slate-700 whitespace-nowrap">{a.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
