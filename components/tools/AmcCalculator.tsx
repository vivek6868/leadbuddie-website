'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion'
import { TrendingDown, TrendingUp, RefreshCcw } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { EASE_OUT } from '@/components/ui/motion'

function inr(n: number) {
  return `₹${Math.round(n).toLocaleString('en-IN')}`
}

/** Animated rupee counter that retargets whenever `to` changes. */
function MoneyCounter({ to }: { to: number }) {
  const reduce = useReducedMotion()
  const mv = useMotionValue(to)
  const [display, setDisplay] = useState(inr(to))

  useEffect(() => {
    if (reduce) {
      setDisplay(inr(to))
      return
    }
    const controls = animate(mv, to, {
      duration: 0.7,
      ease: EASE_OUT,
      onUpdate: (v) => setDisplay(inr(v)),
    })
    return () => controls.stop()
  }, [to, mv, reduce])

  return <span>{display}</span>
}

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
        <label className="text-sm font-medium text-white/70">{label}</label>
        <span className="rounded-lg bg-white/5 px-2.5 py-1 text-sm font-bold text-white tabular-nums">
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
        className="h-2 w-full cursor-pointer appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(0,0,0,0.4)] [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white"
        style={{
          background: `linear-gradient(to right, #7c3aed ${pct}%, rgba(255,255,255,0.1) ${pct}%)`,
        }}
      />
    </div>
  )
}

export function AmcCalculator() {
  const reduce = useReducedMotion()
  const [customers, setCustomers] = useState(500)
  const [amcPrice, setAmcPrice] = useState(2499)
  const [currentRate, setCurrentRate] = useState(45)

  // With a tracked renewal workflow, dealers typically reach ~85%.
  const TARGET_RATE = 85

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

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
      {/* Inputs */}
      <div className="rounded-3xl border border-white/[0.08] bg-bg-card/60 p-6 backdrop-blur-sm md:p-8">
        <h2 className="mb-1 text-lg font-bold text-white">Your dealership</h2>
        <p className="mb-7 text-sm text-white/50">Drag the sliders to match your business.</p>
        <div className="space-y-7">
          <Slider
            label="AMC-eligible customers"
            value={customers}
            min={50}
            max={5000}
            step={50}
            onChange={setCustomers}
            format={(v) => v.toLocaleString('en-IN')}
          />
          <Slider
            label="Average AMC value"
            value={amcPrice}
            min={1000}
            max={5000}
            step={100}
            onChange={setAmcPrice}
            format={inr}
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

        <div className="mt-7 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <RefreshCcw className="h-4 w-4 flex-shrink-0 text-teal-300" strokeWidth={2} />
            <span>
              Dealers running a tracked renewal workflow typically reach{' '}
              <span className="font-semibold text-white">~{TARGET_RATE}%</span> renewals.
            </span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="relative overflow-hidden rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/15 via-bg-card/80 to-bg-card/80 p-6 backdrop-blur-sm md:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/20 blur-3xl" />

        <div className="relative">
          {/* Lost today */}
          <div className="mb-6">
            <div className="mb-1 flex items-center gap-2 text-sm font-medium text-rose-300">
              <TrendingDown className="h-4 w-4" strokeWidth={2.2} />
              You&apos;re losing every year
            </div>
            <p className="text-3xl font-bold text-white md:text-4xl">
              <MoneyCounter to={lost} />
            </p>
            <p className="mt-1 text-xs text-white/45">
              From the {100 - currentRate}% of AMCs that don&apos;t get renewed.
            </p>
          </div>

          {/* Recoverable — the headline number */}
          <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.08] p-5">
            <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-emerald-300">
              <TrendingUp className="h-4 w-4" strokeWidth={2.2} />
              LeadBuddie could help you recover
            </div>
            <p className="text-4xl font-bold text-white md:text-5xl">
              <MoneyCounter to={recoverable} />
              <span className="text-lg font-semibold text-white/50">/year</span>
            </p>
            <p className="mt-1 text-xs text-white/50">
              By lifting renewals from {currentRate}% toward ~{targetPct}%.
            </p>
          </div>

          {/* Bars */}
          <div className="mt-6 space-y-3">
            <div>
              <div className="mb-1 flex justify-between text-[11px] text-white/45">
                <span>Renewal revenue today</span>
                <span>{inr(currentRevenue)}</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-white/30"
                  initial={false}
                  animate={{ width: `${currentPct}%` }}
                  transition={{ duration: reduce ? 0 : 0.6, ease: EASE_OUT }}
                />
              </div>
            </div>
            <div>
              <div className="mb-1 flex justify-between text-[11px] text-white/45">
                <span>Potential with ~{targetPct}% renewals</span>
                <span>{inr(potentialRevenue * (targetPct / 100))}</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"
                  initial={false}
                  animate={{ width: `${targetPct}%` }}
                  transition={{ duration: reduce ? 0 : 0.6, ease: EASE_OUT }}
                />
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="https://app.leadbuddie.com" variant="primary" className="w-full">
              Start recovering it free
            </Button>
            <Button href="/demo" variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
              Book a demo
            </Button>
          </div>
          <p className="mt-3 text-center text-[11px] text-white/35">
            Estimate for guidance only — actual results depend on your follow-up.
          </p>
        </div>
      </div>
    </div>
  )
}
