'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import { DemoRequestModal } from '@/components/forms/DemoRequestModal'

interface DemoModalContextValue {
  isOpen: boolean
  open: () => void
  close: () => void
}

const DemoModalContext = createContext<DemoModalContextValue | null>(null)

/**
 * Hook for consumers that want to imperatively open the demo modal.
 * Optional — most CTAs work automatically via the global click interceptor below.
 */
export function useDemoModal() {
  const ctx = useContext(DemoModalContext)
  if (!ctx) throw new Error('useDemoModal must be used within DemoModalProvider')
  return ctx
}

/**
 * Mounts the DemoRequestModal once at the layout level and globally intercepts
 * clicks on any anchor whose href points at /demo, converting the navigation
 * into a modal open instead. Direct URL visits to /demo still work (only clicks
 * are intercepted), and middle-click / cmd-click / new-tab gestures are
 * respected so users who want to open the demo page in a new tab still can.
 */
export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Respect new-tab and modifier-key gestures — let the browser navigate
      if (e.defaultPrevented) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      if (e.button !== 0) return // only intercept primary-button clicks

      const target = e.target as HTMLElement | null
      if (!target) return

      const anchor = target.closest('a')
      if (!anchor) return
      if (anchor.target === '_blank') return

      const href = anchor.getAttribute('href') || ''
      // Match /demo or /demo/ — anywhere (relative or absolute as long as the path ends with /demo)
      const isDemoLink = /(^|\/)demo\/?(\?.*)?$/.test(href)
      if (!isDemoLink) return

      e.preventDefault()
      setIsOpen(true)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen])

  return (
    <DemoModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      <DemoRequestModal isOpen={isOpen} onClose={close} />
    </DemoModalContext.Provider>
  )
}
