'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { NAVIGATION } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-dark-200 hover:text-white transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-64 bg-dark-800 border-l border-dark-700 shadow-xl">
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-2">
                  {!logoError && (
                    <Image
                      src="/images/logo.png"
                      alt="LeadBuddie Logo"
                      width={140}
                      height={40}
                      className="h-10 w-auto"
                      onError={() => setLogoError(true)}
                    />
                  )}
                  <span className="text-xl font-bold text-primary-400">LeadBuddie</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-dark-200 hover:text-white"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="flex flex-col space-y-4 flex-1">
                {NAVIGATION.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-dark-200 hover:text-white transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="pt-6 border-t border-dark-700">
                <Button 
                  className="w-full" 
                  href="/pricing"
                  onClick={() => setIsOpen(false)}
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

