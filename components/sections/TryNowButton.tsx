'use client'

import { Button } from '@/components/ui/Button'

/**
 * Opens the LeadBuddie chat widget when possible.
 * The widget (app.leadbuddie.com/widget.js) may expose a global or add a launcher in the DOM.
 */
function openChat() {
  // Try global API if the widget exposes one
  const g = typeof window !== 'undefined' ? window : undefined
  const open =
    (g as unknown as { openLeadBuddieChat?: () => void }).openLeadBuddieChat ??
    (g as unknown as { LeadBuddie?: { open: () => void } }).LeadBuddie?.open ??
    (g as unknown as { LB?: { open: () => void } }).LB?.open

  if (typeof open === 'function') {
    open()
    return
  }

  // Try to click the widget's launcher (common data attrs / classes)
  const selectors = [
    '[data-lb-trigger]',
    '[data-lb-open]',
    '[data-lb-widget-trigger]',
    '.lb-launcher',
    '.leadbuddie-launcher',
    '#leadbuddie-launcher',
    '[id*="leadbuddie"][id*="launcher"]',
    '[class*="leadbuddie"][class*="launcher"]',
  ]

  for (const sel of selectors) {
    const el = document.querySelector(sel)
    if (el && typeof (el as HTMLElement).click === 'function') {
      ;(el as HTMLElement).click()
      return
    }
  }

  // Fallback: scroll to bottom where the chat bubble usually sits so the user sees it
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}

export function TryNowButton() {
  return (
    <Button type="button" variant="lime" size="lg" onClick={openChat}>
      Try now
    </Button>
  )
}
