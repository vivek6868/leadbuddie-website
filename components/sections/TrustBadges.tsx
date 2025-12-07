import { Section } from '@/components/ui/Section'
import { TESTIMONIALS } from '@/lib/constants'
import { Star, Quote } from 'lucide-react'

export function TrustBadges() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Made in India, Trusted by Indian Businesses
        </h2>
        <p className="text-lg text-dark-300">
          See what business owners like you are saying about LeadBuddie
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-primary-400 mb-2">500+</div>
          <div className="text-dark-300">Active Users</div>
        </div>
        <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-primary-400 mb-2">10K+</div>
          <div className="text-dark-300">Leads Managed</div>
        </div>
        <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-primary-400 mb-2">40%</div>
          <div className="text-dark-300">More Deals Closed</div>
        </div>
      </div>
      
      {TESTIMONIALS.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 hover:border-primary-600/50 transition-all hover:shadow-lg hover:shadow-primary-600/10"
            >
              <div className="flex items-center mb-4">
                <Quote className="text-primary-400 mr-2" size={24} />
                <div className="flex">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={14} />
                  ))}
                </div>
              </div>
              <p className="text-dark-200 mb-4 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-dark-700 pt-4">
                <div className="font-semibold text-white">{testimonial.author}</div>
                {testimonial.company && (
                  <div className="text-sm text-primary-400">{testimonial.company}</div>
                )}
                <div className="text-xs text-dark-400 mt-1">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}

