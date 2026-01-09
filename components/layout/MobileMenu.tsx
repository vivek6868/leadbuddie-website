'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { NAVIGATION } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { useTheme } from 'next-themes'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
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
            className="absolute right-0 top-0 h-full w-72 bg-white dark:bg-gray-900 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
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
                <span className="text-lg font-bold text-gray-900 dark:text-white">LeadBuddie</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex flex-col bg-white dark:bg-gray-900 p-3">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all py-2.5 px-3 rounded-lg font-medium text-sm bg-gray-50 dark:bg-gray-800 mb-1.5 block"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle */}
            <div className="px-3 py-2 border-t border-gray-200 dark:border-gray-800">
              <button
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                }}
                className="w-full flex items-center justify-between text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all py-2.5 px-3 rounded-lg font-medium text-sm bg-gray-50 dark:bg-gray-800"
                aria-label="Toggle theme"
              >
                <span>Theme</span>
                {mounted ? (
                  theme === 'dark' ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Footer Button */}
            <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
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
