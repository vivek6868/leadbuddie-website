'use client'

import Image from 'next/image'

export function HeroGraphics() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* WhatsApp Chat Bubble Icon - Top Left */}
      <div className="absolute top-[10%] left-[5%] animate-float-slow">
        <Image
          src="/graphics/icons/whatsapp-bubble.svg"
          alt="WhatsApp"
          width={48}
          height={48}
          className="opacity-60"
        />
      </div>

      {/* Chat Bubbles with Checkmarks - Left Side */}
      <div className="absolute top-[25%] left-[8%] animate-slide-in-left">
        <div className="space-y-3">
          <div className="relative">
            <Image
              src="/graphics/icons/chat-bubble-1.svg"
              alt="Chat message"
              width={128}
              height={40}
              className="opacity-40"
            />
          </div>
          <div className="relative ml-4">
            <Image
              src="/graphics/icons/chat-bubble-2.svg"
              alt="Chat message"
              width={112}
              height={32}
              className="opacity-40"
            />
          </div>
        </div>
      </div>

      {/* Code Icon - Below Chat Bubbles */}
      <div className="absolute top-[45%] left-[12%] animate-pulse-slow">
        <Image
          src="/graphics/icons/code-icon.svg"
          alt="Code"
          width={32}
          height={32}
          className="opacity-60"
        />
      </div>

      {/* Rocket Icon - Top Right */}
      <div className="absolute top-[15%] right-[15%] animate-bounce-slow">
        <Image
          src="/graphics/icons/rocket.svg"
          alt="Rocket"
          width={40}
          height={40}
          className="opacity-60 rotate-45"
        />
      </div>

      {/* ROAS Metric Badge - Top Right */}
      <div className="absolute top-[30%] right-[20%] animate-fade-in-up delay-300">
        <Image
          src="/graphics/metrics/roas-badge.svg"
          alt="ROAS"
          width={80}
          height={36}
        />
      </div>

      {/* Revenue Metric Badge - Right Side */}
      <div className="absolute top-[45%] right-[18%] animate-fade-in-up delay-500">
        <Image
          src="/graphics/metrics/revenue-badge.svg"
          alt="Revenue"
          width={100}
          height={36}
        />
      </div>

      {/* Wavy Line Graph - Connecting Elements */}
      <div className="absolute top-[20%] right-[10%] w-64 h-48 opacity-30 animate-draw-line">
        <Image
          src="/graphics/hero/wavy-line-graph.svg"
          alt="Growth graph"
          width={256}
          height={192}
          className="animate-dash"
        />
      </div>

      {/* Partner Logos - Bottom Right */}
      <div className="absolute bottom-[10%] right-[5%] animate-fade-in delay-700">
        <Image
          src="/graphics/partners/partner-badges.svg"
          alt="Optimized for WhatsApp Business"
          width={280}
          height={80}
        />
      </div>
    </div>
  )
}
