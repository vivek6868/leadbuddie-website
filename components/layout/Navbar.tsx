'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NAVIGATION } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { MobileMenu } from './MobileMenu'
import { useState } from 'react'

export function Navbar() {
  const [logoError, setLogoError] = useState(false)

  return (
    <nav className="sticky top-0 z-40 bg-dark-900/80 backdrop-blur-md border-b border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            {!logoError && (
              <Image
                src="/images/logo.png"
                alt="LeadBuddie Logo"
                width={180}
                height={50}
                className="h-12 w-auto"
                priority
                onError={() => setLogoError(true)}
              />
            )}
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              LeadBuddie
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-dark-200 hover:text-white transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button href="https://app.leadbuddie.com">Start Free Trial</Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}

