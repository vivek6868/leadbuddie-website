'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    website: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '', website: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="rounded-[28px] border border-border bg-bg-card/92 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-border-light bg-bg-elevated px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-border-light bg-bg-elevated px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-text-primary">
            Mobile number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            inputMode="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-border-light bg-bg-elevated px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
            placeholder="+91 98765 43210"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-primary">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full resize-none rounded-xl border border-border-light bg-bg-elevated px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
            placeholder="How can we help you?"
          />
        </div>

        {status === 'success' && (
          <div className="flex items-center space-x-2 rounded-xl border border-wa/30 bg-wa-subtle p-4">
            <CheckCircle2 className="text-wa" size={20} />
            <span className="text-wa">Message sent successfully! We'll get back to you within 24 hours.</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center space-x-2 rounded-xl border border-[#ef4444]/30 bg-[#ef4444]/10 p-4">
            <AlertCircle className="text-[#f87171]" size={20} />
            <span className="text-[#fca5a5]">Something went wrong. Please try again or email us directly.</span>
          </div>
        )}

        <Button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full group"
          size="lg"
        >
          {status === 'submitting' ? (
            'Sending...'
          ) : (
            <>
              Send Message
              <Send className="ml-2 inline-block transition-transform group-hover:translate-x-1" size={20} />
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 border-t border-border pt-6">
        <p className="text-center text-sm text-text-secondary">
          Or email us directly at{' '}
          <a href="mailto:hello@hutliv.com" className="text-brand-light hover:text-text-primary">
            hello@hutliv.com
          </a>
        </p>
      </div>
    </div>
  )
}

