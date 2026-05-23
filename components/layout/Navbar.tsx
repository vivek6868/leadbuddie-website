'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { NAVIGATION } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { MobileMenu } from './MobileMenu'
import { DemoRequestModal } from '@/components/forms/DemoRequestModal'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [logoError, setLogoError] = useState(false)
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-border bg-bg-primary/78 backdrop-blur-xl'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            {!logoError ? (
              <Image
                src="/images/logo.png"
                alt="LeadBuddie Logo"
                width={176}
                height={44}
                className="h-11 w-auto"
                priority
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="font-heading text-xl font-bold text-text-primary">LeadBuddie</span>
            )}
            <div className="hidden items-center gap-1 rounded-full border border-border bg-bg-elevated/80 px-2.5 py-1 text-[11px] font-medium text-text-secondary lg:inline-flex">
              <span className="h-2 w-2 rounded-full bg-wa" />
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: 'linear-gradient(45deg, #F58529, #DD2A7B, #515BD4)' }}
              />
              <span>WA + IG</span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => setDemoModalOpen(true)}
              className="rounded-xl border border-border-light bg-white/5 px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-brand-light hover:bg-brand-subtle"
            >
              Book Demo
            </button>
            <Button href="https://app.leadbuddie.com" size="md">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <MobileMenu onRequestDemo={() => setDemoModalOpen(true)} />
          </div>
        </div>
      </nav>

      <DemoRequestModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </>
  )
}
