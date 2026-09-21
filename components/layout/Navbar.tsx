'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { MobileMenu } from './MobileMenu'
import { DemoRequestModal } from '@/components/forms/DemoRequestModal'
import { cn } from '@/lib/utils'
import { ChevronDown, Droplets, Plane, ShoppingBag } from 'lucide-react'

const INDUSTRIES = [
  { name: 'Water treatment', note: 'Primary operating workflow', href: '/water-purifier-crm', icon: Droplets },
  { name: 'Travel agencies', note: 'Enquiry to quote request', href: '/travel-agencies', icon: Plane },
  { name: 'Retail businesses', note: 'Product intent to next action', href: '/retail-businesses', icon: ShoppingBag },
]

export function Navbar() {
  const [logoError, setLogoError] = useState(false)
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const hasDarkHero = ['/', '/product', '/ai-employee', '/features', '/how-it-works', '/pricing', '/resources', '/contact', '/demo', '/case-study', '/whatsapp-voice-ai', '/water-purifier-crm', '/travel-agencies', '/retail-businesses'].includes(pathname)
    || (pathname.startsWith('/blog/') && pathname !== '/blog/rss.xml')
  const isDarkHero = hasDarkHero && !scrolled

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
                alt=""
                width={44}
                height={44}
                className="h-10 w-10 rounded-xl object-contain"
                priority
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className={`font-heading text-xl font-bold ${isDarkHero ? 'text-white' : 'text-text-primary'}`}>LB</span>
            )}
            <span className={`font-heading text-xl font-extrabold tracking-[-0.04em] ${isDarkHero ? 'text-white' : 'text-text-primary'}`}>
              LeadBuddie
            </span>
            <div className={`hidden items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium lg:inline-flex ${isDarkHero ? 'border-white/15 bg-white/[0.07] text-slate-300' : 'border-border bg-bg-elevated/80 text-text-secondary'}`}>
              <span className="h-2 w-2 rounded-full bg-wa" />
              <span>Agentic operator</span>
            </div>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            <div className="group relative">
              <button
                type="button"
                className={`inline-flex items-center gap-1.5 py-7 text-sm font-medium transition-colors ${isDarkHero ? 'text-slate-300 hover:text-white' : 'text-text-secondary hover:text-text-primary'}`}
                aria-haspopup="true"
              >
                Industries <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>
              <div className="invisible absolute left-1/2 top-[68px] w-[330px] -translate-x-1/2 translate-y-2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-[0_24px_70px_rgba(15,23,42,0.18)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {INDUSTRIES.map(({ name, note, href, icon: Icon }) => (
                  <Link key={href} href={href} className="flex items-center gap-3 rounded-xl p-3 text-slate-900 transition hover:bg-[#edf9f5]">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#e0f8ef] text-[#087c5a]"><Icon className="h-4 w-4" /></span>
                    <span><span className="block text-sm font-bold">{name}</span><span className="mt-0.5 block text-[11px] text-slate-500">{note}</span></span>
                  </Link>
                ))}
              </div>
            </div>
            {[
              { name: 'Product', href: '/product' },
              { name: 'Buddie agent', href: '/ai-employee' },
              { name: 'How it works', href: '/how-it-works' },
              { name: 'Pricing', href: '/pricing' },
              { name: 'Resources', href: '/resources' },
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
