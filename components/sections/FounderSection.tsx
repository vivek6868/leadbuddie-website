'use client'

import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

/** Replace with real founder image: public/images/founder.jpg */
const FOUNDER_IMAGE = '/images/founder.jpg'

export function FounderSection() {
  const [imgError, setImgError] = useState(false)

  return (
    <Section background="gray">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        <div className="relative shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-teal-100 border-4 border-white shadow-lg flex items-center justify-center">
          {!imgError ? (
            <img
              src={FOUNDER_IMAGE}
              alt="Founder"
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-2xl font-bold text-teal-600">LB</span>
          )}
        </div>
        <div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-2">
            We personally help you set up LeadBuddie for your business.
          </p>
          <p className="text-gray-600 mb-6">
            Built by founders who understand how hard it is to manage customer enquiries manually.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/demo" variant="lime" size="md">
              Book Free Setup
            </Button>
            <Link
              href="/about"
              className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              Meet the team
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
