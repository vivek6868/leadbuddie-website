'use client'

import { useState, FormEvent, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '@/components/ui/Button'
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react'

interface DemoRequestModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DemoRequestModal({ isOpen, onClose }: DemoRequestModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message.trim() || undefined,
          subjectType: 'demo',
        }),
      })
      const data = await response.json()
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => {
          onClose()
          setStatus('idle')
        }, 2000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (err) {
      console.error('Demo request submit error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!isOpen || !mounted) return null

  const modal = (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      {/* Backdrop: semi-transparent slate dimming layer with a subtle premium blur */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden
      />
      {/* Form card: clean light-themed card container matching Vercel/Stripe style */}
      <div
        className="relative z-10 w-full max-w-md rounded-2xl border border-border bg-bg-card shadow-2xl text-text-primary"
        onClick={(e) => e.stopPropagation()}
      >
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <h2 id="demo-modal-title" className="text-lg font-semibold text-text-primary">
              Request a demo
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-bg-secondary transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label htmlFor="demo-name" className="block text-sm font-medium text-text-secondary mb-1">
                Name *
              </label>
              <input
                type="text"
                id="demo-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-bg-elevated border border-border text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="demo-email" className="block text-sm font-medium text-text-secondary mb-1">
                Email *
              </label>
              <input
                type="email"
                id="demo-email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-bg-elevated border border-border text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="demo-phone" className="mb-1 block text-sm font-medium text-text-secondary">
                Mobile number *
              </label>
              <input
                type="tel"
                id="demo-phone"
                name="phone"
                required
                autoComplete="tel"
                inputMode="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-bg-elevated border border-border text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label htmlFor="demo-message" className="block text-sm font-medium text-text-secondary mb-1">
                Message (optional)
              </label>
              <textarea
                id="demo-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-bg-elevated border border-border text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-none transition-all"
                placeholder="Tell us a bit about your use case..."
              />
            </div>
            {status === 'success' && (
              <div className="flex items-center gap-2 rounded-lg bg-green-50 border border-green-200 p-3 text-green-700 text-sm">
                <CheckCircle2 size={18} className="text-green-600" />
                Request sent. We&apos;ll be in touch soon.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-red-700 text-sm">
                <AlertCircle size={18} className="text-red-600" />
                Something went wrong. Please try again or email us.
              </div>
            )}
            <Button
              type="submit"
              disabled={status === 'submitting'}
              variant="primary"
              size="lg"
              className="w-full"
            >
              {status === 'submitting' ? 'Sending...' : 'Send request'}
              {status !== 'submitting' && <Send className="ml-2 inline-block" size={18} />}
            </Button>
          </form>
        </div>
  </div>
  )

  return createPortal(modal, document.body)
}
