import { Section } from '@/components/ui/Section'
import { SOCIAL_PROOF_STATS, TESTIMONIALS } from '@/lib/constants'
import Link from 'next/link'

const TRUSTED_BY = ['Real estate teams', 'Clinics', 'Service brands', 'Agencies', 'Growing local businesses']

export function CustomerProofSection() {
  return (
    <Section background="gray" className="pt-10 pb-8 md:pt-14">
      <div className="rounded-[28px] border border-border bg-bg-card/85 p-8 text-center shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
        <p className="text-sm uppercase tracking-[0.24em] text-text-muted">Trusted momentum</p>
        <h2 className="mt-4 text-2xl font-bold text-text-primary md:text-3xl">Built for fast-moving teams that sell in chats</h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-text-secondary md:text-base">
          <span className="font-semibold text-text-primary">{SOCIAL_PROOF_STATS.leadsManaged} leads managed</span>
          <span className="text-text-muted">•</span>
          <span className="font-semibold text-text-primary">{SOCIAL_PROOF_STATS.businessesOnboarded} businesses onboarded</span>
          <span className="text-text-muted">•</span>
          <span>{SOCIAL_PROOF_STATS.trustLine}</span>
        </div>
        <p className="mt-4 text-sm text-text-secondary">{TRUSTED_BY.join(' • ')}</p>
        <blockquote className="mx-auto mt-8 max-w-3xl rounded-3xl border border-border-light bg-bg-elevated/80 p-6 text-left">
          <p className="text-lg italic leading-relaxed text-text-primary md:text-xl">“{TESTIMONIALS[0].quote}”</p>
          <footer className="mt-4 flex flex-wrap items-center gap-3 text-sm text-text-secondary">
            <span>{TESTIMONIALS[0].author}</span>
            <Link href="/case-study" className="text-brand-light transition-colors hover:text-text-primary">
              Read the story →
            </Link>
          </footer>
        </blockquote>
      </div>
    </Section>
  )
}
