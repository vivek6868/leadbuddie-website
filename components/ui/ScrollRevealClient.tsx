'use client'

import { useEffect } from 'react'

/**
 * Mount once in the root layout. Observes every [data-reveal] element on
 * the page and flips its attribute to "visible" when it scrolls into view,
 * which triggers the fade-in-up animation defined in globals.css.
 *
 * Lets server components opt in to scroll reveal with just a `data-reveal`
 * attribute — no per-section client boundary required.
 */
export function ScrollRevealClient() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Gate the hidden state in CSS — only applied once JS has booted.
    // Without this, slow networks would render an invisible page.
    document.documentElement.classList.add('js-reveal')

    const reveal = (el: Element) => el.setAttribute('data-reveal', 'visible')

    const seen = new WeakSet<Element>()

    const scan = () => {
      const candidates = document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-reveal="visible"])')
      if (prefersReduced) {
        candidates.forEach(reveal)
        return
      }
      candidates.forEach((el) => {
        if (seen.has(el)) return
        seen.add(el)
        observer.observe(el)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    scan()

    // Re-scan when the DOM changes (route transitions, lazy mounts)
    const mo = new MutationObserver(() => scan())
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}
