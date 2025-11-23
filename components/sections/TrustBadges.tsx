import { Section } from '@/components/ui/Section'
import { TESTIMONIALS } from '@/lib/constants'
import { Star, Quote } from 'lucide-react'

export function TrustBadges() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Made in India, Trusted Worldwide
        </h2>
        <p className="text-lg text-dark-300">
          See what businesses like yours are saying
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
        <div className="max-w-2xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8"
            >
              <Quote className="text-primary-400 mb-4" size={32} />
              <p className="text-lg text-dark-200 mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
                <div className="ml-2">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-dark-400">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}

