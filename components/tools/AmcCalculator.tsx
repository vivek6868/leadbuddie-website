'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion'
import { TrendingDown, TrendingUp, RefreshCcw, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { EASE_OUT } from '@/components/ui/motion'

interface SliderProps {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  format: (v: number) => string
}

function Slider({ label, value, min, max, step, onChange, format }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-sm font-medium text-text-secondary">{label}</label>
        <span className="rounded-lg bg-bg-elevated border border-border px-2.5 py-1 text-sm font-bold text-text-primary tabular-nums">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-bg-elevated border border-border/60 outline-none accent-brand"
        style={{
          background: `linear-gradient(to right, var(--color-brand) ${pct}%, var(--color-bg-elevated) ${pct}%)`,
        }}
      />
    </div>
  )
}

export function AmcCalculator() {
  const reduce = useReducedMotion()
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD')
  const [customers, setCustomers] = useState(500)
  const [amcPrice, setAmcPrice] = useState(150) // Default $150
  const [currentRate, setCurrentRate] = useState(45)

  // With a tracked renewal workflow, dealers typically reach ~85%.
  const TARGET_RATE = 85

  const isUsd = currency === 'USD'
  const amcMin = isUsd ? 10 : 1000
  const amcMax = isUsd ? 500 : 5000
  const amcStep = isUsd ? 10 : 100

  const handleCurrencyChange = (cur: 'USD' | 'INR') => {
    setCurrency(cur)
    if (cur === 'USD') {
      setAmcPrice(150)
    } else {
      setAmcPrice(2499)
    }
  }

  const formatMoney = (val: number) => {
    return new Intl.NumberFormat(isUsd ? 'en-US' : 'en-IN', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).format(val)
  }

  const { lost, recoverable, currentRevenue, potentialRevenue } = useMemo(() => {
    const potential = customers * amcPrice
    const current = potential * (currentRate / 100)
    const effectiveTarget = Math.max(currentRate, TARGET_RATE)
    const recovered = potential * ((effectiveTarget - currentRate) / 100)
    const lostNow = potential * ((100 - currentRate) / 100)
    return {
      lost: lostNow,
      recoverable: recovered,
      currentRevenue: current,
      potentialRevenue: potential,
    }
  }, [customers, amcPrice, currentRate])

  const currentPct = (currentRevenue / potentialRevenue) * 100
  const targetPct = Math.max(currentRate, TARGET_RATE)

  // Animated counter implementation
  const mvLost = useMotionValue(lost)
  const mvRec = useMotionValue(recoverable)
  const [displayLost, setDisplayLost] = useState(formatMoney(lost))
  const [displayRec, setDisplayRec] = useState(formatMoney(recoverable))

  useEffect(() => {
    if (reduce) {
      setDisplayLost(formatMoney(lost))
      setDisplayRec(formatMoney(recoverable))
      return
    }
    const controlsLost = animate(mvLost, lost, {
      duration: 0.5,
      ease: EASE_OUT,
      onUpdate: (v) => setDisplayLost(formatMoney(v)),
    })
    const controlsRec = animate(mvRec, recoverable, {
      duration: 0.5,
      ease: EASE_OUT,
      onUpdate: (v) => setDisplayRec(formatMoney(v)),
    })
    return () => {
      controlsLost.stop()
      controlsRec.stop()
    }
  }, [lost, recoverable, currency, reduce])

  return (
    <div className="space-y-6">
      {/* Currency Switcher */}
      <div className="flex justify-end">
        <div className="bg-bg-elevated p-1 rounded-xl border border-border flex gap-1 shadow-sm">
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

      <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-8 items-stretch">
        {/* Inputs */}
        <div className="rounded-3xl border border-border bg-bg-card p-6 md:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="mb-1 text-lg font-bold text-text-primary">Your Customer Metrics</h2>
            <p className="mb-7 text-sm text-text-secondary">Drag the sliders to match your business.</p>
            <div className="space-y-7">
              <Slider
                label="Eligible recurring accounts"
                value={customers}
                min={50}
                max={5000}
                step={50}
                onChange={setCustomers}
                format={(v) => v.toLocaleString()}
              />
              <Slider
                label="Average contract value"
                value={amcPrice}
                min={amcMin}
                max={amcMax}
                step={amcStep}
                onChange={setAmcPrice}
                format={formatMoney}
              />
              <Slider
                label="Renewals you close today"
                value={currentRate}
                min={10}
                max={90}
                step={5}
                onChange={setCurrentRate}
                format={(v) => `${v}%`}
              />
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-bg-elevated p-4">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <RefreshCcw className="h-4 w-4 flex-shrink-0 text-brand" strokeWidth={2} />
              <span>
                Teams running a tracked renewal workflow typically reach{' '}
                <span className="font-semibold text-text-primary">~{TARGET_RATE}%</span> renewals.
              </span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated p-6 md:p-8 shadow-sm flex flex-col justify-between">
          <div className="relative">
            {/* Lost today */}
            <div className="mb-6">
              <div className="mb-1 flex items-center gap-2 text-sm font-medium text-red-600">
                <TrendingDown className="h-4 w-4" strokeWidth={2.2} />
                Annual leakage at risk
              </div>
              <p className="text-3xl font-bold text-red-600 md:text-4xl font-mono">
                {displayLost}
              </p>
              <p className="mt-1 text-xs text-text-secondary">
                From the {100 - currentRate}% of agreements that do not get renewed.
              </p>
            </div>

            {/* Recoverable — the headline number */}
            <div className="rounded-2xl border border-brand/30 bg-brand/5 p-5 shadow-sm">
              <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-brand-hover">
                <TrendingUp className="h-4 w-4" strokeWidth={2.2} />
                LeadBuddie could help you recover
              </div>
              <p className="text-4xl font-bold text-brand-hover md:text-5xl font-mono">
                {displayRec}
                <span className="text-lg font-semibold text-text-secondary">/year</span>
              </p>
              <p className="mt-1 text-xs text-text-secondary">
                By lifting renewals from {currentRate}% toward ~{targetPct}%.
              </p>
            </div>

            {/* Bars */}
            <div className="mt-6 space-y-3">
              <div>
                <div className="mb-1 flex justify-between text-[11px] text-text-secondary">
                  <span>Renewal revenue today</span>
                  <span className="font-semibold">{formatMoney(currentRevenue)}</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-border">
                  <motion.div
                    className="h-full rounded-full bg-text-muted"
                    initial={false}
                    animate={{ width: `${currentPct}%` }}
                    transition={{ duration: reduce ? 0 : 0.6, ease: EASE_OUT }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-[11px] text-text-secondary">
                  <span>Potential with ~{targetPct}% renewals</span>
                  <span className="font-semibold">{formatMoney(potentialRevenue * (targetPct / 100))}</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-border">
                  <motion.div
                    className="h-full rounded-full bg-brand"
                    initial={false}
                    animate={{ width: `${targetPct}%` }}
                    transition={{ duration: reduce ? 0 : 0.6, ease: EASE_OUT }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href="https://app.leadbuddie.com" variant="primary" className="w-full">
                Start Trial & Recover Cash
              </Button>
              <Button href="/demo" variant="outline" className="w-full">
                Book a Demo
              </Button>
            </div>
            <p className="mt-3 text-center text-[10px] text-text-muted">
              Estimate for guidance only — actual results depend on customer re-engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
