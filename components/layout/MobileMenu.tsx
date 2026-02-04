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
        className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop - clickable to close */}
          <div 
            className="absolute inset-0 bg-gray-900/80 dark:bg-black/80"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu panel - separate layer, clickable */}
          <div 
            className="absolute right-0 top-0 h-full w-72 bg-ink shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-ink">
              <div className="flex items-center space-x-2">
                {!logoError && (
                  <Image
                    src="/images/logo.png"
                    alt="LeadBuddie Logo"
                    width={140}
                    height={40}
                    className="h-8 w-auto brightness-0 invert"
                    onError={() => setLogoError(true)}
                  />
                )}
                <span className="text-lg font-bold text-white">LeadBuddie</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/90 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex flex-col bg-ink p-3">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/90 hover:text-white hover:bg-white/10 transition-all py-2.5 px-3 rounded-lg font-medium text-sm mb-1.5 block"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Footer Buttons */}
            <div className="mt-auto p-4 border-t border-white/10 bg-ink space-y-3">
              {onRequestDemo && (
                <button
                  type="button"
                  onClick={() => { onRequestDemo(); setIsOpen(false); }}
                  className="w-full py-2.5 px-4 rounded-lg border-2 border-teal-400 text-teal-300 font-medium text-sm hover:bg-teal-500/25 hover:text-white transition-colors"
                >
                  Request for demo
                </button>
              )}
              <Button
                variant="lime"
                className="w-full"
                href="https://app.leadbuddie.com"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
