'use client'

import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (items.length === 0) return

    const headingElements = items.map((item) => document.getElementById(item.id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        // Find entries that are intersecting the upper half of the screen
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (visibleEntries.length > 0) {
          // Sort by bounding client rect top to get the uppermost visible heading
          const sorted = visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          setActiveId(sorted[0].target.id)
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px', // check headings in the top portion of viewport
        threshold: 0.1,
      }
    )

    headingElements.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      headingElements.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [items])

  if (items.length === 0) return null

  return (
    <nav className="space-y-2.5">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-text-muted">
        Table of Contents
      </p>
      <ul className="space-y-2 text-xs">
        {items.map((item) => {
          const isActive = item.id === activeId
          return (
            <li
              key={item.id}
              style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
              className="transition-all"
            >
              <a
                href={`#${item.id}`}
                className={`block py-1 leading-snug transition-colors duration-300 ${
                  isActive
                    ? 'font-semibold text-brand-light'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
