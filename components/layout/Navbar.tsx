'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { MobileMenu } from './MobileMenu'
import { DemoRequestModal } from '@/components/forms/DemoRequestModal'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [logoError, setLogoError] = useState(false)
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isDarkHero = pathname === '/' && !scrolled

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
            ? 'border-b border-slate-200/90 bg-white/95 shadow-[0_12px_36px_rgba(15,23,42,0.1)] backdrop-blur-xl'
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
            <span className={`font-heading text-xl font-extrabold tracking-[-0.04em] ${isDarkHero ? 'text-white' : 'text-text-primary'}`}>
              LeadBuddie
            </span>
            <div className={`hidden items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium lg:inline-flex ${isDarkHero ? 'border-white/15 bg-white/[0.07] text-slate-300' : 'border-border bg-bg-elevated/80 text-text-secondary'}`}>
              <span className="h-2 w-2 rounded-full bg-wa" />
              <span>AI employee</span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {[
              { name: 'Product', href: '/product' },
              { name: 'How it works', href: '/how-it-works' },
              { name: 'Pricing', href: '/pricing' },
              { name: 'Resources', href: '/blog' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${isDarkHero ? 'text-slate-300 hover:text-white' : 'text-text-secondary hover:text-text-primary'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => setDemoModalOpen(true)}
              className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${isDarkHero ? 'border-white/15 bg-white/[0.06] text-white hover:border-white/30 hover:bg-white/[0.11]' : 'border-border-light bg-bg-card text-text-primary hover:border-brand hover:bg-brand-subtle'}`}
            >
              Book Demo
            </button>
            <Button href="https://app.leadbuddie.com" size="md">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <MobileMenu darkTrigger={isDarkHero} onRequestDemo={() => setDemoModalOpen(true)} />
          </div>
        </div>
      </nav>

      <DemoRequestModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </>
  )
}
