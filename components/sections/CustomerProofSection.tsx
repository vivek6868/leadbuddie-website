import { Section } from '@/components/ui/Section'
import { SOCIAL_PROOF_STATS, TESTIMONIALS } from '@/lib/constants'
import Link from 'next/link'

const TRUSTED_BY = [
  'Mastec Water Purifier',
  'Home service providers',
  'Contractors',
  'Clinics',
  'Real estate',
]

export function CustomerProofSection() {
  return (
    <Section background="gray" className="pt-12 md:pt-16 pb-6 md:pb-7">
      <h2 className="text-center text-xl md:text-2xl font-bold text-ink mb-6">
        Trusted by Growing Service Businesses
      </h2>

      {/* Usage stats */}
      <div className="text-center text-gray-600 text-sm md:text-base mb-6">
        <span className="font-semibold text-ink">{SOCIAL_PROOF_STATS.leadsManaged} leads managed</span>
        <span className="mx-2 text-gray-400">·</span>
        <span className="font-semibold text-ink">{SOCIAL_PROOF_STATS.businessesOnboarded} businesses onboarded</span>
        <span className="mx-2 text-gray-400">·</span>
        <span>{SOCIAL_PROOF_STATS.trustLine}</span>
      </div>

      {/* Trusted by industries */}
      <p className="text-center text-gray-500 text-sm mb-8">
        Trusted by{' '}
        {TRUSTED_BY.slice(0, 4).join(', ')} and more
      </p>

      {/* Testimonial */}
      <div className="max-w-3xl mx-auto">
        <blockquote className="relative rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-4">
            &ldquo;{TESTIMONIALS[0].quote}&rdquo;
          </p>
          <footer className="text-gray-600 font-medium not-italic flex flex-wrap items-center gap-2">
            — {TESTIMONIALS[0].author}
            <Link href="/case-study" className="text-teal-600 hover:text-teal-700 font-semibold text-sm ml-2">
              Read the story →
            </Link>
          </footer>
        </blockquote>
      </div>
    </Section>
  )
}
