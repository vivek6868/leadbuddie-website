'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { BuddieFace, Pill, P } from './atoms'
import { X, Send, CheckCircle2, RotateCcw } from 'lucide-react'

const INITIAL_TASKS = [
  {
    id: 0,
    who: 'Ramesh K.',
    initials: 'RK',
    tone: 'brand' as const,
    title: 'Reply ready · Kent Grand pricing',
    preview: '"Hi Ramesh! ₹18,500 with free install + 1-yr warranty. Want the brochure?"',
    tag: 'approval',
  },
  {
    id: 1,
    who: 'Priya D.',
    initials: 'PD',
    tone: 'success' as const,
    title: 'AMC renewal · 5 days left',
    preview: 'Gold AMC ₹2,499 · payment link drafted',
    tag: 'auto',
  },
  {
    id: 2,
    who: 'Aisha K.',
    initials: 'AK',
    tone: 'danger' as const,
    title: 'Needs your call — refund mentioned',
    preview: '"This is the third time the filter is leaking…"',
    tag: 'handoff',
  },
]

const TONE = {
  brand: { bg: 'rgba(37,211,102,0.12)', fg: P.brand },
  success: { bg: P.successSoft, fg: P.success },
  danger: { bg: P.dangerSoft, fg: P.danger },
}

export function ApprovalDeskDemo() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const [sendingId, setSendingId] = useState<number | null>(null)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)

  const handleSend = (id: number, who: string) => {
    setSendingId(id)
    setTimeout(() => {
      setSendingId(null)
      setTasks((prev) => prev.filter((t) => t.id !== id))
      setSuccessMsg(`Approved and sent to ${who}! ✓`)
      setTimeout(() => setSuccessMsg(null), 2500)
    }, 800)
  }

  const handleDismiss = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  const handleReset = () => {
    setTasks(INITIAL_TASKS)
    setSuccessMsg(null)
  }

  return (
    <div
      className="relative rounded-3xl border border-border bg-bg-card p-2 w-full transition-all duration-300"
      style={{ boxShadow: '0 24px 60px -24px rgba(20,20,40,0.12)' }}
    >
      <div className="flex items-center justify-between px-4 pb-3 pt-4 border-b border-border/40 mb-2">
        <div className="flex items-center gap-2.5">
          <BuddieFace size={28} mood={tasks.length > 0 ? 'thinking' : 'happy'} />
          <div>
            <div className="text-sm font-bold text-text-primary">
              {tasks.length > 0 ? `${tasks.length} things for you` : 'All caught up!'}
            </div>
            <div className="text-[11px] text-text-muted">
              {tasks.length > 0 ? 'Buddie left these this morning' : 'Buddie is monitoring your chats'}
            </div>
          </div>
        </div>
        {tasks.length > 0 ? (
          <Pill dot style={{ background: P.successSoft, color: P.success, fontSize: 10.5 }}>active</Pill>
        ) : (
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-card px-2.5 py-1 text-[11px] font-semibold text-text-secondary hover:bg-bg-elevated hover:text-text-primary transition-colors"
          >
            <RotateCcw size={10} /> Reset demo
          </button>
        )}
      </div>

      <div className="flex flex-col gap-2.5 px-2 pb-2 min-h-[340px] justify-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          {tasks.map((t, idx) => {
            const av = TONE[t.tone]
            const isSending = sendingId === t.id
            return (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 200, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 500, damping: 32 }}
                className="relative rounded-2xl border border-border bg-bg-elevated p-3.5 shadow-sm"
              >
                <span
                  aria-hidden
                  className="absolute bottom-3.5 left-0 top-3.5 w-[3px] rounded-full"
                  style={{ background: av.fg }}
                />
                <div className="flex items-center gap-2.5">
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold shrink-0"
                    style={{ background: av.bg, color: av.fg }}
                  >
                    {t.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[0.8125rem] font-bold text-text-primary">{t.who}</span>
                      <Pill style={{ background: av.bg, color: av.fg, fontSize: 9.5, padding: '2px 7px' }}>
                        {t.tag}
                      </Pill>
                    </div>
                    <div className="mt-0.5 text-xs font-medium text-text-primary">{t.title}</div>
                  </div>
                </div>
                <div className="mt-2.5 rounded-lg border border-border bg-bg-card px-3 py-2 text-xs leading-relaxed text-text-primary">
                  {t.preview}
                </div>
                
                {idx === 0 && (
                  <div className="mt-3 flex gap-1.5">
                    <Button
                      onClick={() => handleSend(t.id, t.who)}
                      disabled={sendingId !== null}
                      variant="primary"
                      size="sm"
                      className="flex-1 text-xs py-1.5 h-8"
                    >
                      {isSending ? 'Sending...' : 'Send it'}
                      {!isSending && <Send className="ml-1.5" size={12} />}
                    </Button>
                    <Button
                      onClick={() => handleSend(t.id, t.who)}
                      disabled={sendingId !== null}
                      variant="outline"
                      size="sm"
                      className="text-xs py-1.5 h-8"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDismiss(t.id)}
                      disabled={sendingId !== null}
                      variant="ghost"
                      size="sm"
                      className="text-text-muted hover:text-text-primary hover:bg-bg-secondary p-1 h-8 w-8 rounded-lg flex items-center justify-center shrink-0"
                    >
                      <X size={14} />
                    </Button>
                  </div>
                )}
              </motion.div>
            )
          })}
        </AnimatePresence>

        {tasks.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center justify-center py-10 text-center"
          >
            <div className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
              <span className="absolute inset-0 rounded-full bg-brand/20 animate-ping opacity-75" />
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-sm font-bold text-text-primary">All caught up!</h3>
            <p className="mt-1.5 max-w-[220px] text-xs text-text-muted leading-relaxed">
              Zero leaks. Your AI Sales Employee is watching the desk.
            </p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {successMsg && (
          <motion.div
            initial={{ opacity: 0, y: 30, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="absolute bottom-6 left-1/2 z-50 transform -translate-x-1/2 flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 px-4 py-2.5 text-xs font-semibold text-white shadow-xl"
          >
            <CheckCircle2 size={14} className="text-brand" />
            <span>{successMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
