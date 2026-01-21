import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { TESTIMONIALS } from '@/lib/constants'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <Section>
      <SectionHeader
        label="Success Stories"
        title="Making WhatsApp work for 500+ Indian businesses (and growing daily!)"
        description="Real results from real businesses using LeadBuddie"
        centered
        className="mb-16"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <Card key={index} hover className="flex flex-col h-full p-8">
            {/* Metrics Display */}
            {testimonial.metrics && (
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-1">
                    {testimonial.metrics.primary}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.metrics.primaryLabel}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-ink mb-1">
                    {testimonial.metrics.secondary}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.metrics.secondaryLabel}
                  </div>
                </div>
              </div>
            )}
            
            {/* Quote */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
              ))}
            </div>
            <p className="text-gray-700 mb-6 flex-1 italic leading-relaxed text-lg">
              "{testimonial.quote}"
            </p>
            
            {/* Author Info */}
            <div className="border-t border-gray-200 pt-4 mt-auto">
              <p className="font-semibold text-ink text-base">{testimonial.author}</p>
              <p className="text-sm text-gray-600 mt-1">{testimonial.company}</p>
              <p className="text-xs text-gray-500 mt-1">{testimonial.location}, India</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

