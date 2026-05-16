'use client'

import { useEffect, useState } from 'react'

/**
 * Thin scroll-progress bar fixed to the top of the viewport.
 * Tracks how far through the article the reader has scrolled.
 *
 * Cheap to run: a single scroll listener with rAF throttling, no observers.
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0

    const update = () => {
      raf = 0
      const scroll = window.scrollY
      const max =
        document.documentElement.scrollHeight - window.innerHeight
      if (max <= 0) {
        setProgress(0)
        return
      }
      const pct = Math.min(100, Math.max(0, (scroll / max) * 100))
      setProgress(pct)
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-50 h-[3px] bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-teal-400 via-cyan-300 to-violet-400 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
