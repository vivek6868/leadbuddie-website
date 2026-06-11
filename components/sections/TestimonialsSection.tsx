import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TESTIMONIALS } from '@/lib/constants'
import { Star, Quote } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <Section>
      <SectionHeader
        label="Customer story"
        title="The dealer that put our AI Sales Employee to work first."
        description="Mastec Water Purifier handles 60–100 leads a day. Here's what changed when LeadBuddie became their AI Sales Employee."
        centered
        className="mb-12 md:mb-16"
      />

      <div
        className={`grid gap-6 ${
          (TESTIMONIALS.length as number) === 1
            ? 'max-w-3xl mx-auto'
            : 'md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <article
            key={index}
            data-reveal
            style={{ ['--reveal-delay' as any]: `${index * 0.1}s` }}
            className="relative flex h-full flex-col rounded-3xl border border-white/[0.08] bg-bg-card/80 p-8 backdrop-blur-sm shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]"
          >
            <Quote
              className="absolute right-6 top-6 h-10 w-10 text-brand/15"
              strokeWidth={1.6}
              aria-hidden="true"
            />

            {testimonial.metrics && (
              <div className="mb-6 grid grid-cols-2 gap-4 border-b border-white/[0.08] pb-6">
                <div>
                  <div className="text-3xl font-bold text-teal-300 mb-1">
                    {testimonial.metrics.primary}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.metrics.primaryLabel}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-text-primary mb-1">
                    {testimonial.metrics.secondary}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.metrics.secondaryLabel}
                  </div>
                </div>
              </div>
            )}

            <div className="mb-4 flex items-center gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-amber-400"
                  fill="currentColor"
                />
              ))}
            </div>

            <p className="relative mb-6 flex-1 text-lg leading-relaxed text-text-primary">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            <div className="border-t border-white/[0.08] pt-4">
              <p className="text-base font-semibold text-text-primary">
                {testimonial.author}
              </p>
              {testimonial.company && testimonial.company !== testimonial.author && (
                <p className="mt-1 text-sm text-text-secondary">
                  {testimonial.company}
                </p>
              )}
              <p className="mt-0.5 text-xs text-text-muted">
                {testimonial.location === 'India'
                  ? 'India'
                  : `${testimonial.location}, India`}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
