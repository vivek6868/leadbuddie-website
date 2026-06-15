'use client'

import { Star, Quote, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react'
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
    color: 'text-brand',
    bg: 'bg-brand/5 border-brand/20'
  },
  {
    metric: '< 10s',
    label: 'Average Response Time',
    desc: 'Buddie answers common questions, pricing requests, and bookings immediately—even at midnight or on holidays.',
    icon: Sparkles,
    color: 'text-brand-hover',
    bg: 'bg-brand/5 border-brand/20'
  },
  {
    metric: '15%',
    label: 'Dormant Leads Revived',
    desc: 'Breathe life into old database lists by launching smart, context-aware re-engagement campaigns via WhatsApp.',
    icon: TrendingUp,
    color: 'text-brand-hover',
    bg: 'bg-brand/5 border-brand/20'
  }
]

// We will display Mastec, Nitya Tours, and Classic Leathers prominently
const FEATURED_TESTIMONIALS = TESTIMONIALS.filter(t => 
  t.company.includes('Mastec') || t.company.includes('Nitya') || t.company.includes('Classic')
)

export function Outcomes() {
  const reduce = useReducedMotion()

  return (
    <Section className="border-t border-border bg-bg-primary relative overflow-hidden" id="outcomes">
      {/* Subtle green glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <SectionHeader
        label="Proven Results"
        title="Engineered for real operational impact"
        description="We focus on recovering actual revenue at risk, freeing your team, and closing bookings. No bot vanity metrics."
        centered
        className="mb-12"
      />

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 relative z-10">
        {OUTCOME_METRICS.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              initial={reduce ? {} : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-2xl border p-6 bg-bg-card border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden`}
            >
              <div className="flex items-start justify-between">
                <span className={`text-4xl md:text-5xl font-extrabold font-mono tracking-tight text-brand`}>
                  {item.metric}
                </span>
                <div className="h-8 w-8 rounded-lg bg-brand/10 flex items-center justify-center border border-brand/20 text-brand">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-base font-bold text-text-primary mt-4">{item.label}</h3>
              <p className="text-xs leading-relaxed text-text-secondary mt-2">
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
          <h3 className="text-xl font-bold text-text-primary font-heading">Loved by operations-driven businesses</h3>
          <p className="text-xs text-text-secondary mt-1">Verified customer stories from real businesses operating on WhatsApp</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_TESTIMONIALS.map((t, idx) => (
            <motion.article
              key={t.company}
              initial={reduce ? {} : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative flex flex-col justify-between rounded-2xl border border-border bg-bg-card p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-brand/15" strokeWidth={1.5} />
              
              <div>
                {t.metrics && (
                  <div className="grid grid-cols-2 gap-4 border-b border-border pb-4 mb-4 font-mono">
                    <div>
                      <div className="text-2xl font-bold text-brand">{t.metrics.primary}</div>
                      <div className="text-[10px] text-text-secondary uppercase font-semibold">{t.metrics.primaryLabel}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-text-primary">{t.metrics.secondary}</div>
                      <div className="text-[10px] text-text-secondary uppercase font-semibold">{t.metrics.secondaryLabel}</div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-amber-400 fill-current" />
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-text-secondary mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-border pt-4 mt-auto">
                <p className="text-sm font-semibold text-text-primary">{t.author}</p>
                <p className="text-xs text-text-muted mt-0.5">{t.company} • {t.location}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}
