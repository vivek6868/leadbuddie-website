import { Button } from '@/components/ui/Button'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'

export function HeroNew() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 md:pt-40 md:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#120812_0%,#1d1022_18%,#391229_38%,#140b1a_58%,#0f0f1a_76%,#08080f_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(221,42,123,0.34),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(245,133,41,0.18),transparent_18%),radial-gradient(circle_at_72%_72%,rgba(124,58,237,0.24),transparent_26%)]" />
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-ig-glow blur-3xl opacity-80" />
        <div className="absolute right-0 top-16 h-[340px] w-[340px] rounded-full bg-brand-glow blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-1/3 h-[240px] w-[240px] rounded-full bg-wa-glow blur-3xl opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(136,136,168,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(136,136,168,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-15" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,15,0.08)_0%,rgba(8,8,15,0.28)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="py-2 sm:py-4">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/18 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-wa shadow-[0_0_18px_rgba(37,211,102,0.45)]" />
              WhatsApp
            </span>
            <span className="text-text-muted">+</span>
            <span className="inline-flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full shadow-[0_0_18px_rgba(221,42,123,0.42)]"
                style={{ background: 'linear-gradient(45deg, #F58529, #DD2A7B, #515BD4)' }}
              />
              Instagram CRM
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.02] text-white md:text-6xl lg:text-7xl">
            Convert WhatsApp &amp; Instagram conversations into paying customers
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d6d6e7] md:text-xl">
            LeadBuddie gives your team one premium inbox for WhatsApp and Instagram leads, with CRM context, follow-ups,
            automation, and AI-assisted replies built to close faster.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="https://app.leadbuddie.com" size="lg">
              Get Started
            </Button>
            <Button href="/demo" variant="outline" size="lg">
              Book Demo
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-white/15 bg-black/16 px-3 py-1.5 text-[#ececf8] backdrop-blur-md">Shared team inbox</span>
            <span className="rounded-full border border-white/15 bg-black/16 px-3 py-1.5 text-[#ececf8] backdrop-blur-md">Instagram + WhatsApp lead capture</span>
            <span className="rounded-full border border-white/15 bg-black/16 px-3 py-1.5 text-[#ececf8] backdrop-blur-md">Follow-ups that actually happen</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-brand-glow via-ig-glow to-wa-glow blur-3xl opacity-80" />
          <div className="relative rounded-[32px] border border-white/12 bg-[linear-gradient(180deg,rgba(18,8,18,0.58),rgba(10,10,18,0.68))] p-3 shadow-[0_36px_120px_rgba(0,0,0,0.42)] backdrop-blur-md">
            <div className="mb-3 flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-[#d6d6e7] backdrop-blur-sm">
              <span className="font-medium text-text-primary">LeadBuddie Social CRM</span>
              <span className="rounded-full bg-brand-subtle px-3 py-1 text-brand-light">Live</span>
            </div>
            <ScreenshotFrame
              src="/graphics/hero/hero-dashboard.svg"
              alt="LeadBuddie dashboard for WhatsApp and Instagram CRM"
              status="connected"
              aspect="3/2"
              disableHover
            />
          </div>
        </div>
      </div>
    </section>
  )
}
