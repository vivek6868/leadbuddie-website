import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { TESTIMONIALS } from '@/lib/constants'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <Section>
      <SectionHeader
        label="Testimonials"
        title="What Indian Businesses Say"
        description="Trusted by Indian SMBs, contractors, and service businesses"
        centered
        className="mb-12"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <Card key={index} hover className="flex flex-col h-full">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
              ))}
            </div>
            <p className="text-gray-700 mb-6 flex-1 italic leading-relaxed">"{testimonial.quote}"</p>
            <div className="border-t border-gray-200 pt-4 mt-auto">
              <p className="font-semibold text-gray-900 text-base">{testimonial.author}</p>
              <p className="text-sm text-gray-600 mt-1">{testimonial.company}</p>
              <p className="text-xs text-gray-500 mt-1">{testimonial.location}, India</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

