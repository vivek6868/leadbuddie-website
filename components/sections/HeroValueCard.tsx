import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const bullets = [
  'Keep using WhatsApp Business on mobile for normal chatting',
  'LeadBuddie auto-captures leads + suggests AI replies instantly',
  'Run campaigns + follow-ups without losing conversations',
]

export function HeroValueCard() {
  return (
    <section
      className="relative bg-ink border-t border-white/10 py-12 md:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="hero-value-heading"
    >
      <div className="max-w-7xl mx-auto flex justify-center">
        <div
          className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col md:flex-row"
        >
          {/* Image merged into card: rounded edge + subtle float animation */}
          <div className="relative shrink-0 w-full md:w-[220px] lg:w-[260px] h-48 md:h-auto md:min-h-[280px] rounded-t-3xl md:rounded-t-none md:rounded-l-3xl overflow-hidden bg-white/5 flex items-center justify-center">
            <Image
              src="/graphics/hero/hero-value-card.svg"
              alt=""
              width={260}
              height={260}
              className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 object-contain animate-float-slow"
              aria-hidden
            />
          </div>
          <div className="p-8 md:p-10 lg:p-12 flex-1 min-w-0 flex flex-col justify-center">
            <h2
              id="hero-value-heading"
              className="font-display font-bold text-3xl sm:text-4xl md:text-[2.5rem] leading-tight text-center mb-8 md:mb-10 text-gradient-shimmer"
            >
              <span className="inline-block">Same number.</span>{' '}
              <span className="inline-block">Two places.</span>{' '}
              <span className="inline-block">Zero hassle.</span>
            </h2>
            <ul className="space-y-4 md:space-y-5">
              {bullets.map((text, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-white/90 text-base md:text-lg animate-fade-in-up"
                  style={{
                    animationDelay: `${0.1 * (idx + 1)}s`,
                    animationFillMode: 'both',
                  }}
                >
                  <span className="mt-0.5 shrink-0 text-teal-400" aria-hidden>
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
