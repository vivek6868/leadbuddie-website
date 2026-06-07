'use client'

import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

/** Replace with real founder image: public/images/founder.jpg */
const FOUNDER_IMAGE = '/images/founder.png'

export function FounderSection() {
  const [imgError, setImgError] = useState(false)

  return (
    <Section className="!pt-10 md:!pt-12 !pb-20 md:!pb-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/[0.08] bg-bg-card/70 px-6 py-8 backdrop-blur-sm md:px-10 md:py-10">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:gap-7 md:text-left">
          <div className="relative shrink-0 h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-full border border-white/15 bg-brand/15">
            {!imgError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={FOUNDER_IMAGE}
                alt="Founder of LeadBuddie"
                className="absolute inset-0 h-full w-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-text-primary">
                VD
              </span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-base md:text-lg leading-relaxed text-text-primary">
              &ldquo;We personally help you set up LeadBuddie for your business — no ticket queue, no chatbot.&rdquo;
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Built by founders in India who sat with Mastec Water Purifier&apos;s team for weeks to figure out where renewals were actually leaking.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-text-muted">
              Vivek D · Founder · Hutliv Technologies LLP
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <Button href="/demo" variant="lime" size="md">
                Book free setup
              </Button>
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-semibold text-brand-light transition-colors hover:text-text-primary"
              >
                Meet the team
                <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
