'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ArrowRight, Calculator, Check, Sparkles, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function RevenueCalculator() {
  const [leads, setLeads] = useState(100)
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD')
  const [value, setValue] = useState(150) // Default $150
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
    return new Intl.NumberFormat(currency === 'USD' ? 'en-US' : 'en-IN', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).format(val)
  }

  const handleCurrencyChange = (cur: 'USD' | 'INR') => {
    setCurrency(cur)
    if (cur === 'USD') {
      setValue(150)
    } else {
      setValue(3000)
    }
  }

  const isUsd = currency === 'USD'
  const valueMin = isUsd ? 10 : 1000
  const valueMax = isUsd ? 1000 : 20000
  const valueStep = isUsd ? 10 : 500

  // Calculate percentage for slider backgrounds
  const leadsPct = ((leads - 10) / 490) * 100
  const valuePct = ((value - valueMin) / (valueMax - valueMin)) * 100
  const leakPct = ((leakRate - 5) / 45) * 100

  return (
    <Section className="border-t border-border bg-bg-primary relative overflow-hidden" id="roi-calculator">
      {/* Subtle WhatsApp Green glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <SectionHeader
        label="ROI Calculator"
        title="Stop leaking revenue on WhatsApp"
        description="Slow response times and missed messages cost your business every single day. Calculate exactly how much revenue is slipping away."
        centered
        className="mb-12"
      />

      <div className="max-w-5xl mx-auto bg-bg-card border border-border rounded-3xl p-6 md:p-10 shadow-xl shadow-black/5 relative z-10">
        
        {/* Currency Switcher */}
        <div className="flex justify-end mb-8">
          <div className="bg-bg-elevated p-1 rounded-xl border border-border flex gap-1">
            <button
              onClick={() => handleCurrencyChange('USD')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isUsd 
                  ? 'bg-bg-card text-text-primary shadow-sm border border-border' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => handleCurrencyChange('INR')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                !isUsd 
                  ? 'bg-bg-card text-text-primary shadow-sm border border-border' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              INR (₹)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-stretch">
          
          {/* Left Column: Sliders */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex items-center gap-2 pb-4 border-b border-border">
                <Calculator className="h-5 w-5 text-brand" />
                <h3 className="text-lg font-bold text-text-primary">Adjust Your Business Metrics</h3>
              </div>

              {/* Slider 1: Monthly Enquiries */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <label className="text-text-secondary font-medium">Monthly WhatsApp Enquiries</label>
                  <span className="text-text-primary font-semibold font-mono text-base bg-bg-elevated border border-border px-2.5 py-0.5 rounded-lg">
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
                  className="w-full h-1.5 bg-bg-elevated border border-border/60 rounded-lg appearance-none cursor-pointer accent-brand focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, var(--color-brand) 0%, var(--color-brand) ${leadsPct}%, var(--color-bg-elevated) ${leadsPct}%, var(--color-bg-elevated) 100%)`
                  }}
                />
                <div className="flex justify-between text-[10px] text-text-muted font-mono">
                  <span>10</span>
                  <span>250</span>
                  <span>500</span>
                </div>
              </div>

              {/* Slider 2: Average Sale Value */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <label className="text-text-secondary font-medium">Avg. Deal / AMC Value</label>
                  <span className="text-text-primary font-semibold font-mono text-base bg-bg-elevated border border-border px-2.5 py-0.5 rounded-lg">
                    {formatCurrency(value)}
                  </span>
                </div>
                <input
                  type="range"
                  min={valueMin}
                  max={valueMax}
                  step={valueStep}
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-bg-elevated border border-border/60 rounded-lg appearance-none cursor-pointer accent-brand focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, var(--color-brand) 0%, var(--color-brand) ${valuePct}%, var(--color-bg-elevated) ${valuePct}%, var(--color-bg-elevated) 100%)`
                  }}
                />
                <div className="flex justify-between text-[10px] text-text-muted font-mono">
                  <span>{formatCurrency(valueMin)}</span>
                  <span>{formatCurrency((valueMax + valueMin) / 2)}</span>
                  <span>{formatCurrency(valueMax)}</span>
                </div>
              </div>

              {/* Slider 3: Leak Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <label className="text-text-secondary font-medium">Estimated Lead Leak Rate</label>
                  <span className="text-red-500 font-semibold font-mono text-base bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-lg">
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
                  className="w-full h-1.5 bg-bg-elevated border border-border/60 rounded-lg appearance-none cursor-pointer accent-brand focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, var(--color-brand) 0%, var(--color-brand) ${leakPct}%, var(--color-bg-elevated) ${leakPct}%, var(--color-bg-elevated) 100%)`
                  }}
                />
                <div className="flex justify-between text-[10px] text-text-muted font-mono">
                  <span>5% (Best class)</span>
                  <span>25% (Average)</span>
                  <span>50% (High leak)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Outcomes & Metrics */}
          <div className="flex flex-col justify-between rounded-2xl bg-bg-elevated border border-border p-6 md:p-8 relative overflow-hidden shadow-inner">
            <div className="space-y-6">
              {/* Lost Revenue card */}
              <div className="rounded-xl border border-red-200 bg-red-50/50 p-5 shadow-sm">
                <span className="text-[10px] text-red-600 uppercase tracking-widest font-mono font-bold">Annual Leakage At Risk</span>
                <motion.div
                  key={annualLost + currency}
                  initial={reduce ? {} : { scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="text-2xl md:text-3xl font-extrabold text-red-600 font-mono mt-1"
                >
                  {formatCurrency(annualLost)}
                </motion.div>
                <p className="text-[11px] text-text-secondary mt-1.5 leading-relaxed">
                  Lost to missed inquiries, un-renewed service contracts, and delayed follow-ups.
                </p>
              </div>

              {/* Recovered Revenue card */}
              <div className="rounded-xl border border-brand/30 bg-brand/5 p-5 relative overflow-hidden shadow-sm">
                <div className="absolute top-3 right-3 h-5 w-5 bg-brand/10 rounded-full flex items-center justify-center border border-brand/20">
                  <Sparkles className="h-2.5 w-2.5 text-brand animate-spin" style={{ animationDuration: '4s' }} />
                </div>
                <span className="text-[10px] text-brand-hover uppercase tracking-widest font-mono font-bold">Recoverable by Buddie</span>
                <motion.div
                  key={annualRecovered + currency}
                  initial={reduce ? {} : { scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="text-3xl md:text-4xl font-extrabold text-brand-hover font-mono mt-1"
                >
                  {formatCurrency(annualRecovered)}
                </motion.div>
                <p className="text-[11px] text-text-secondary mt-1.5 leading-relaxed">
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
              <div className="flex items-center justify-center gap-2 text-[10px] text-text-muted">
                <Check className="h-3 w-3 text-brand" /> No credit card required • <Check className="h-3 w-3 text-brand" /> Setup in 10 mins
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}
