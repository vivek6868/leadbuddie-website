'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ArrowRight, Calculator, Check, Sparkles, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function RevenueCalculator() {
  const [leads, setLeads] = useState(100)
  const [value, setValue] = useState(3000)
  const [leakRate, setLeakRate] = useState(25)
  const reduce = useReducedMotion()

  // Calculations
  // Total enquiries per year = leads * 12
  // Total potential revenue lost per year = leads * 12 * value * (leakRate / 100)
  const annualLost = leads * 12 * value * (leakRate / 100)
  
  // Buddie recovers 80% of leaked leads
  const annualRecovered = Math.round(annualLost * 0.80)

  // Formatter for currency
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val)
  }

  return (
    <Section className="border-t border-white/[0.04] bg-[#050508] relative overflow-hidden" id="roi-calculator">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-light/5 rounded-full blur-3xl pointer-events-none" />

      <SectionHeader
        label="ROI Calculator"
        title="Stop leaking revenue on WhatsApp"
        description="Slow response times and missed messages are costing your business every single day. Calculate exactly how much cash is slipping away."
        centered
        className="mb-16"
      />

      <div className="max-w-5xl mx-auto bg-[#0f0f1b]/55 border border-white/[0.08] rounded-3xl p-6 md:p-10 backdrop-blur-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          
          {/* Left Column: Sliders */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 pb-4 border-b border-white/[0.06]">
              <Calculator className="h-5 w-5 text-teal-400" />
              <h3 className="text-lg font-bold text-white">Adjust Your Business Metrics</h3>
            </div>

            {/* Slider 1: Monthly Enquiries */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="text-[#8888a8] font-medium">Monthly WhatsApp Enquiries</label>
                <span className="text-white font-semibold font-mono text-base bg-white/[0.04] border border-white/[0.08] px-2.5 py-0.5 rounded-lg">
                  {leads} leads
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={leads}
                onChange={(e) => setLeads(Number(e.target.value))}
                className="w-full h-1.5 bg-white/[0.06] rounded-lg appearance-none cursor-pointer accent-teal-400 focus:outline-none"
                style={{
                  background: `linear-gradient(to right, #2dd4bf 0%, #2dd4bf ${(leads - 10) / 4.9}%, rgba(255,255,255,0.06) ${(leads - 10) / 4.9}%, rgba(255,255,255,0.06) 100%)`
                }}
              />
              <div className="flex justify-between text-[10px] text-[#444466] font-mono">
                <span>10</span>
                <span>250</span>
                <span>500</span>
              </div>
            </div>

            {/* Slider 2: Average Sale Value */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="text-[#8888a8] font-medium">Avg. Deal / AMC Value</label>
                <span className="text-white font-semibold font-mono text-base bg-white/[0.04] border border-white/[0.08] px-2.5 py-0.5 rounded-lg">
                  {formatCurrency(value)}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="10000"
                step="250"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full h-1.5 bg-white/[0.06] rounded-lg appearance-none cursor-pointer accent-teal-400 focus:outline-none"
                style={{
                  background: `linear-gradient(to right, #2dd4bf 0%, #2dd4bf ${(value - 1000) / 90}%, rgba(255,255,255,0.06) ${(value - 1000) / 90}%, rgba(255,255,255,0.06) 100%)`
                }}
              />
              <div className="flex justify-between text-[10px] text-[#444466] font-mono">
                <span>₹1,000</span>
                <span>₹5,500</span>
                <span>₹10,000</span>
              </div>
            </div>

            {/* Slider 3: Leak Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="text-[#8888a8] font-medium">Estimated Lead Leak Rate</label>
                <span className="text-red-400 font-semibold font-mono text-base bg-red-500/5 border border-red-500/10 px-2.5 py-0.5 rounded-lg">
                  {leakRate}% missed
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="5"
                value={leakRate}
                onChange={(e) => setLeakRate(Number(e.target.value))}
                className="w-full h-1.5 bg-white/[0.06] rounded-lg appearance-none cursor-pointer accent-teal-400 focus:outline-none"
                style={{
                  background: `linear-gradient(to right, #2dd4bf 0%, #2dd4bf ${(leakRate - 5) / 0.45}%, rgba(255,255,255,0.06) ${(leakRate - 5) / 0.45}%, rgba(255,255,255,0.06) 100%)`
                }}
              />
              <div className="flex justify-between text-[10px] text-[#444466] font-mono">
                <span>5% (Best class)</span>
                <span>25% (Average)</span>
                <span>50% (High leak)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Outcomes & Metrics */}
          <div className="h-full flex flex-col justify-between rounded-2xl bg-white/[0.01] border border-white/[0.04] p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/[0.01] filter blur-2xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/[0.01] filter blur-2xl rounded-full" />

            <div className="space-y-6">
              {/* Lost Revenue card */}
              <div className="rounded-xl border border-red-500/20 bg-red-500/[0.02] p-5">
                <span className="text-[10px] text-red-400 uppercase tracking-widest font-mono font-bold">Annual Leakage At Risk</span>
                <motion.div
                  key={annualLost}
                  initial={reduce ? {} : { scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="text-2xl md:text-3xl font-extrabold text-red-400 font-mono mt-1"
                >
                  {formatCurrency(annualLost)}
                </motion.div>
                <p className="text-[11px] text-[#666688] mt-1.5 leading-relaxed">
                  Lost to missed inquiries, un-renewed service contracts, and late follow-ups.
                </p>
              </div>

              {/* Recovered Revenue card */}
              <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.02] p-5 relative overflow-hidden">
                <div className="absolute top-3 right-3 h-5 w-5 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20">
                  <Sparkles className="h-2.5 w-2.5 text-emerald-400 animate-spin" />
                </div>
                <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-mono font-bold">Recoverable by Buddie</span>
                <motion.div
                  key={annualRecovered}
                  initial={reduce ? {} : { scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="text-3xl md:text-4xl font-extrabold text-emerald-400 font-mono mt-1"
                >
                  {formatCurrency(annualRecovered)}
                </motion.div>
                <p className="text-[11px] text-[#666688] mt-1.5 leading-relaxed">
                  Assuming 80% recovery of leaks via instant AI responses and automated renewal reminders.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <Button
                variant="primary"
                className="w-full py-6 font-semibold flex items-center justify-center gap-2 group text-sm"
                href="https://app.leadbuddie.com"
              >
                Start Free Trial & Recover Cash
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <div className="flex items-center justify-center gap-2 text-[10px] text-[#444466]">
                <Check className="h-3 w-3 text-teal-400" /> No credit card required • <Check className="h-3 w-3 text-teal-400" /> Setup in 10 mins
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}
