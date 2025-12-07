'use client'

import { Section } from '@/components/ui/Section'
import { Smartphone, Monitor } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const screenshots = [
  {
    title: 'Unified Chat Inbox',
    description: 'Real-time WhatsApp chat workspace with AI replies and lead details side by side. See all conversations in one place.',
    image: '/images/dashboard-overview.png',
    alt: 'LeadBuddie unified WhatsApp chat inbox with real-time conversations',
  },
  {
    title: 'Chat Workspace with AI',
    description: 'Desktop split view showing WhatsApp chat, AI reply suggestions, and lead CRM details all in one screen.',
    image: '/images/lead-detail-view.png',
    alt: 'LeadBuddie chat workspace with AI reply copilot and lead information',
  },
  {
    title: 'AI Conversation Summaries',
    description: 'Instant AI summaries help your team understand lead context without reading entire conversations',
    image: '/images/ai-summary.png',
    alt: 'LeadBuddie AI Summary showing conversation insights',
  },
]

export function Screenshots() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          See LeadBuddie in Action
        </h2>
        <p className="text-lg text-dark-300 max-w-2xl mx-auto">
          Manage all your WhatsApp leads from one powerful dashboard
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            className="bg-dark-800/50 border border-dark-700 rounded-lg overflow-hidden hover:border-primary-600/50 transition-colors"
          >
            <div className="aspect-video bg-dark-900 relative overflow-hidden">
              {!imageErrors[index] ? (
                <Image
                  src={screenshot.image}
                  alt={screenshot.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={() => setImageErrors(prev => ({ ...prev, [index]: true }))}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-700 to-dark-800">
                  <div className="text-center">
                    <Monitor className="text-dark-500 mx-auto mb-2" size={48} />
                    <span className="text-dark-500 text-sm font-medium block">
                      {screenshot.title}
                    </span>
                    <span className="text-dark-600 text-xs mt-1 block">
                      Image coming soon
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{screenshot.title}</h3>
              <p className="text-dark-300 text-sm">{screenshot.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-dark-400 text-sm">
          <Smartphone className="inline-block mr-2" size={16} />
          Fully responsive - works perfectly on mobile, tablet, and desktop
        </p>
      </div>
    </Section>
  )
}
