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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
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
          message: formData.message.trim() || undefined,
          subjectType: 'demo',
        }),
      })
      const data = await response.json()
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
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
      {/* Backdrop: dim only (no blur) so header stays clear when modal is portaled */}
      <div
        className="absolute inset-0 bg-ink/75"
        onClick={onClose}
        aria-hidden
      />
      {/* Form card: above backdrop so it’s always visible */}
      <div
        className="demo-request-modal relative z-10 w-full max-w-md rounded-2xl border border-white/20 bg-ink shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <h2 id="demo-modal-title" className="text-lg font-semibold text-white">
              Request a demo
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label htmlFor="demo-name" className="block text-sm font-medium text-white/90 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="demo-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="demo-email" className="block text-sm font-medium text-white/90 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="demo-email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="demo-message" className="block text-sm font-medium text-white/90 mb-1">
                Message (optional)
              </label>
              <textarea
                id="demo-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent resize-none"
                placeholder="Tell us a bit about your use case..."
              />
            </div>
            {status === 'success' && (
              <div className="flex items-center gap-2 rounded-lg bg-green-500/20 border border-green-400/30 p-3 text-green-300 text-sm">
                <CheckCircle2 size={18} />
                Request sent. We&apos;ll be in touch soon.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 rounded-lg bg-red-500/20 border border-red-400/30 p-3 text-red-300 text-sm">
                <AlertCircle size={18} />
                Something went wrong. Please try again or email us.
              </div>
            )}
            <Button
              type="submit"
              disabled={status === 'submitting'}
              variant="lime"
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
