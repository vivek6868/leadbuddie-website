'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { NAVIGATION } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

interface MobileMenuProps {
  onRequestDemo?: () => void
}

export function MobileMenu({ onRequestDemo }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-text-primary transition-colors hover:text-brand-light"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          <div
            className="absolute right-0 top-0 flex h-full w-72 flex-col border-l border-border bg-bg-secondary"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <div className="flex items-center space-x-2">
                {!logoError && (
                  <Image
                    src="/images/logo.png"
                    alt="LeadBuddie Logo"
                    width={140}
                    height={40}
                    className="h-8 w-auto"
                    onError={() => setLogoError(true)}
                  />
                )}
                <span className="font-heading text-lg font-bold text-text-primary">LeadBuddie</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-bg-card hover:text-text-primary"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col p-3">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="mb-1.5 block rounded-lg px-3 py-2.5 text-sm font-medium text-text-secondary transition-all hover:bg-bg-card hover:text-text-primary"
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
                  className="w-full rounded-xl border border-border-light bg-white/5 px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-brand-light hover:bg-brand-subtle"
                >
                  Book Demo
                </button>
              )}
              <Button variant="primary" className="w-full" href="https://app.leadbuddie.com" onClick={() => setIsOpen(false)}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
