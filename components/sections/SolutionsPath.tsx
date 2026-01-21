'use client'

import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const solutions = [
  {
    id: 'smb',
    label: 'BUSINESSES',
    title: 'Businesses',
    description: 'Forget weeks of setup hell. Connect your WhatsApp Business number in minutes. Clean interface, code examples that actually work, and support that responds fast. Whether you\'re a contractor, agency, or business owner, your WhatsApp CRM journey starts here. Today.',
    features: [
      'Unified WhatsApp inbox',
      'AI reply suggestions',
      'Lead status tracking',
      'Follow-up reminders',
    ],
    cta: 'Get Started',
    href: 'https://app.leadbuddie.com',
    screenshot: '/images/product-inbox.png',
    background: '/graphics/solutions/smbs-card.svg',
  },
  {
    id: 'agencies',
    label: 'AGENCIES',
    title: 'Agencies & Teams',
    description: 'Stop guessing what works. Launch campaigns that convert from day one. Our infrastructure handles the scale while you focus on closing. Shared inbox, team collaboration, performance analytics. See real returns fast.',
    features: [
      'Team collaboration',
      'Shared inbox',
      'Performance analytics',
      'Role-based access',
    ],
    cta: 'View Team Plans',
    href: '/pricing',
    screenshot: '/images/product-team.png',
    background: '/graphics/solutions/agencies-card.svg',
  },
  {
    id: 'growing',
    label: 'GROWING',
    title: 'Growing Businesses',
    description: 'Your success shouldn\'t break your infrastructure. We\'ve handled thousands of leads and counting. When you\'re ready to scale (whether that\'s 10x or 100x), our system grows with you. No rewrites, no migrations, no downtime. Just growth.',
    features: [
      'Campaign management',
      'Advanced automations',
      'Multiple WhatsApp numbers',
      'Unlimited scaling',
    ],
    cta: 'See Enterprise Plans',
    href: '/pricing',
    screenshot: '/images/product-campaigns.png',
    background: '/graphics/solutions/growing-card.svg',
  },
]

export function SolutionsPath() {
  const [activeSolution, setActiveSolution] = useState(solutions[0].id)

  const activeSolutionData = solutions.find(s => s.id === activeSolution) || solutions[0]

  return (
    <Section background="gray">
      <SectionHeader
        title="Pick your perfect LeadBuddie path"
        description="Different businesses, different needs. One seriously reliable foundation."
        centered
        className="mb-16"
      />

      {/* Solution Tabs - Simple text-only tabs like 360dialog */}
      <div className="mb-12 flex flex-wrap justify-center gap-2 md:gap-3">
        {solutions.map((solution) => {
          const isActive = activeSolution === solution.id

          return (
            <button
              key={solution.id}
              onClick={() => setActiveSolution(solution.id)}
              className={cn(
                'px-6 py-3 text-sm md:text-base font-semibold transition-all rounded-lg',
                isActive
                  ? 'bg-ink text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              )}
            >
              {solution.title}
            </button>
          )
        })}
      </div>

      {/* Active Solution Display - full-card background image with left overlay content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[32px] shadow-[0_30px_100px_rgba(11,31,51,0.5)]">
          {/* Background illustration fills the entire card */}
          <div className="absolute inset-0">
            <Image
              src={activeSolutionData.background || activeSolutionData.screenshot}
              alt={activeSolutionData.title}
              fill
              sizes="100vw"
              className="object-cover"
              unoptimized={
                (activeSolutionData.background || activeSolutionData.screenshot).endsWith(
                  '.svg'
                )
              }
            />
          </div>

          {/* Dark gradient on left for text legibility */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-transparent" />

          {/* Left overlay content on top of image */}
          <div className="relative z-10 flex min-h-[300px] md:min-h-[340px] items-center px-8 py-8 md:px-12 md:py-12 lg:px-16 lg:py-14">
            <div className="max-w-2xl space-y-5 text-white">
              {/* Small uppercase label */}
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
                {activeSolutionData.label}
              </div>

              {/* Large title */}
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-display">
                {activeSolutionData.title}
              </h3>

              {/* Description paragraph */}
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                {activeSolutionData.description}
              </p>

              {/* Bullet points with checkmarks */}
              <ul className="space-y-3.5 text-base md:text-lg">
                {activeSolutionData.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 text-accent-lime">
                      <CheckCircle2 size={20} className="fill-accent-lime text-ink" />
                    </span>
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button with arrow */}
              <div className="pt-3">
                <Button 
                  href={activeSolutionData.href} 
                  size="lg" 
                  className="bg-accent-lime hover:bg-accent-lime-dark text-ink font-bold shadow-lg hover:shadow-xl transition-all group"
                >
                  {activeSolutionData.cta}
                  <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

