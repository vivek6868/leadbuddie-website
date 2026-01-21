import { Button } from '@/components/ui/Button'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'
import { Play } from 'lucide-react'

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
              WhatsApp CRM + AI Automation
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1] tracking-tight font-sans">
              First lead captured.<br />
              First deal closed.<br />
              <span className="text-white/80">Without missed follow-ups.</span>
            </h1>
            <p className="text-base text-white/80 mb-6 leading-relaxed max-w-xl">
              Turn WhatsApp chats into leads and deals with a shared inbox, AI summaries, and automated follow-ups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="https://app.leadbuddie.com" variant="lime" size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
              <Button href="/demo" variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
                <Play className="inline mr-2" size={20} />
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative z-20">
            <ScreenshotFrame
              src="/graphics/hero/hero-dashboard.svg"
              alt="LeadBuddie Dashboard"
              status="connected"
              aspect="3/2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

