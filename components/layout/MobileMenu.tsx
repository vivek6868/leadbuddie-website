'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface MobileMenuProps {
  darkTrigger?: boolean
  onRequestDemo?: () => void
}

export function MobileMenu({ darkTrigger = false, onRequestDemo }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [mounted, setMounted] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  // Portal needs the DOM — only render it after mount (avoids SSR mismatch).
  useEffect(() => setMounted(true), [])

  // Lock background scroll + hide the floating WhatsApp CTA while open (it lives
  // in its own stacking context and would otherwise bleed over the drawer).
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.classList.add('lb-drawer-open')
    closeRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
      if (event.key !== 'Tab' || !panelRef.current) return
      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prev
      document.documentElement.classList.remove('lb-drawer-open')
      document.removeEventListener('keydown', onKeyDown)
      triggerRef.current?.focus()
    }
  }, [isOpen])

  // The drawer is portalled to <body> so it escapes the navbar's z-50 stacking
  // context and reliably sits above the page + the floating WhatsApp button.
  const drawer = isOpen && mounted
    ? createPortal(
        <div className="fixed inset-0 z-[2147483647] md:hidden">
          {/* dark scrim so the open state is unmistakable on a light page */}
          <div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div
            ref={panelRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            className="absolute right-0 top-0 flex h-full w-[82%] max-w-xs flex-col border-l border-border bg-bg-card shadow-[0_0_60px_rgba(15,23,42,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <div className="flex items-center gap-2">
                {!logoError && (
                  <Image
                    src="/images/logo.png"
                    alt=""
                    width={36}
                    height={36}
                    className="h-8 w-8 rounded-lg object-contain"
                    onError={() => setLogoError(true)}
                  />
                )}
                <span className="font-heading text-lg font-bold text-text-primary">LeadBuddie</span>
              </div>
              <button
                ref={closeRef}
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col p-3">
              {[
                { name: 'Product', href: '/product' },
                { name: 'AI employee', href: '/ai-employee' },
                { name: 'How it works', href: '/how-it-works' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Resources', href: '/resources' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="mb-1 block rounded-lg px-3 py-3 text-base font-medium text-text-primary transition-all hover:bg-bg-elevated hover:text-brand"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto space-y-3 border-t border-border p-4">
              {onRequestDemo && (
                <button
                  type="button"
                  onClick={() => {
                    onRequestDemo()
                    setIsOpen(false)
                  }}
                  className="w-full rounded-xl border border-border-light bg-bg-card px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-brand hover:bg-brand-subtle"
                >
                  Book Demo
                </button>
              )}
              <Button variant="primary" className="w-full" href="https://app.leadbuddie.com" onClick={() => setIsOpen(false)}>
                Get Started
              </Button>
            </div>
          </div>
        </div>,
        document.body
      )
    : null

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen((v) => !v)}
        className={`rounded-lg p-2 transition-colors ${darkTrigger ? 'text-white hover:bg-white/10 hover:text-white' : 'text-slate-900 hover:bg-slate-100 hover:text-brand-hover'}`}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {drawer}
    </>
  )
}
