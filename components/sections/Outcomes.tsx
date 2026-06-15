'use client'

import { Star, Quote, CheckCircle2, TrendingUp, Sparkles, MessageSquare } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { motion, useReducedMotion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'

const OUTCOME_METRICS = [
  {
    metric: '92%',
    label: 'AMC Renewals Recovered',
    desc: 'The automated AMC reminders follow up before contracts expire, sending invoice copies and quick payment links.',
    icon: CheckCircle2,
    color: 'text-teal-400',
    bg: 'bg-teal-400/5 border-teal-500/20'
  },
  {
    metric: '< 10s',
    label: 'Average Response Time',
    desc: 'Buddie answers common questions, pricing requests, and bookings immediately—even at midnight or on holidays.',
    icon: Sparkles,
    color: 'text-brand-light',
    bg: 'bg-purple-500/5 border-purple-500/20'
  },
  {
    metric: '15%',
    label: 'Dormant Leads Revived',
    desc: 'Breathe life into old database lists by launching smart, context-aware re-engagement campaigns via WhatsApp.',
    icon: TrendingUp,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/5 border-emerald-500/20'
  }
]

// We will display Mastec and Nitya Tours prominently, but allow other verified testimonials
const FEATURED_TESTIMONIALS = TESTIMONIALS.filter(t => 
  t.company.includes('Mastec') || t.company.includes('Nitya') || t.company.includes('Classic')
)

export function Outcomes() {
  const reduce = useReducedMotion()

  return (
    <Section className="border-t border-white/[0.04] bg-[#050508] relative overflow-hidden" id="outcomes">
      {/* Subtle orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl pointer-events-none" />

      <SectionHeader
        label="Proven Results"
        title="Engineered for real operational impact"
        description="We don't sell chatbot vanity metrics. We focus on recovering actual revenue at risk, freeing your team, and closing bookings."
        centered
        className="mb-16"
      />

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20 relative z-10">
        {OUTCOME_METRICS.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              initial={reduce ? {} : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-2xl border p-6 backdrop-blur-sm relative overflow-hidden ${item.bg}`}
            >
              <div className="flex items-start justify-between">
                <span className={`text-4xl md:text-5xl font-extrabold font-mono tracking-tight ${item.color}`}>
                  {item.metric}
                </span>
                <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-[#8888a8]">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-base font-bold text-white mt-4">{item.label}</h3>
              <p className="text-xs leading-relaxed text-[#8888a8] mt-2">
                {item.desc}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 text-amber-400 fill-current" />
            ))}
          </div>
          <h3 className="text-xl font-bold text-white">Loved by operations-driven businesses</h3>
          <p className="text-xs text-[#8888a8] mt-1">Verified customer stories from real businesses operating on WhatsApp</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_TESTIMONIALS.map((t, idx) => (
            <motion.article
              key={t.company}
              initial={reduce ? {} : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-[#0f0f1b]/40 p-6 md:p-8 backdrop-blur-xl"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-brand/10" strokeWidth={1.5} />
              
              <div>
                {t.metrics && (
                  <div className="grid grid-cols-2 gap-4 border-b border-white/[0.06] pb-4 mb-4 font-mono">
                    <div>
                      <div className="text-2xl font-bold text-teal-400">{t.metrics.primary}</div>
                      <div className="text-[10px] text-[#8888a8] uppercase font-semibold">{t.metrics.primaryLabel}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{t.metrics.secondary}</div>
                      <div className="text-[10px] text-[#8888a8] uppercase font-semibold">{t.metrics.secondaryLabel}</div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-amber-400 fill-current" />
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-[#8888a8] mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-white/[0.06] pt-4 mt-auto">
                <p className="text-sm font-semibold text-white">{t.author}</p>
                <p className="text-xs text-[#666688] mt-0.5">{t.company} • {t.location}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}
