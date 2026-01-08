'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { NAVIGATION } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop - clickable to close */}
          <div 
            className="absolute inset-0 bg-gray-900/80"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu panel - separate layer, clickable */}
          <div 
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
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
                <span className="text-lg font-bold text-gray-900">LeadBuddie</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex flex-col bg-white p-3">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-900 hover:text-teal-600 hover:bg-teal-50 transition-all py-2.5 px-3 rounded-lg font-medium text-sm bg-gray-50 mb-1.5 block"
                >
                  {item.name}
                </Link>
              ))}
              {/* Additional Links */}
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-gray-900 hover:text-teal-600 hover:bg-teal-50 transition-all py-2.5 px-3 rounded-lg font-medium text-sm bg-gray-50 mb-1.5 block"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-900 hover:text-teal-600 hover:bg-teal-50 transition-all py-2.5 px-3 rounded-lg font-medium text-sm bg-gray-50 mb-1.5 block"
              >
                Contact
              </Link>
            </nav>

            {/* Footer Button */}
            <div className="mt-auto p-4 border-t border-gray-200 bg-white">
              <Button 
                className="w-full" 
                href="https://app.leadbuddie.com"
                onClick={() => setIsOpen(false)}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
