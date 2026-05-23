'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { EASE_OUT } from '@/components/ui/motion'
import { CONTACT } from '@/lib/constants'

export function FinalCTACinematic() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden px-4 py-28 sm:px-6 md:py-36 lg:px-8">
      {/* Immersive backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.35),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        {!reduce && (
          <>
            <motion.div
              className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[120px]"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute left-[30%] top-[40%] h-[260px] w-[260px] rounded-full bg-teal-400/12 blur-[100px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
          </>
        )}
        {/* faint grid */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.span
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mb-6 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur-sm"
        >
          Calm operational intelligence
        </motion.span>

        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
          className="text-balance text-4xl font-bold leading-[1.05] text-white md:text-6xl"
        >
          Never let operational work slip through the cracks again.
        </motion.h2>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg"
        >
          Bring your leads, customers, renewals and follow-ups into one
          intelligent workspace — running quietly on the WhatsApp number your
          customers already use.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Button href="https://app.leadbuddie.com" variant="primary" size="lg" className="w-full sm:w-auto">
            Start using LeadBuddie
          </Button>
          <Button href="/demo" variant="outline" size="lg" className="w-full border-white/20 text-white hover:bg-white/10 sm:w-auto">
            Watch Demo
          </Button>
          <Button href={CONTACT.whatsappUrl} variant="outline" size="lg" className="w-full border-white/20 text-white hover:bg-white/10 sm:w-auto">
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat on WhatsApp
          </Button>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-7 text-xs text-white/40"
        >
          Free to start · No credit card · Runs on your existing WhatsApp number
        </motion.p>
      </div>
    </section>
  )
}
