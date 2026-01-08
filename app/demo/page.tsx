import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { TESTIMONIALS } from '@/lib/constants'
import { Star } from 'lucide-react'

export default function DemoPage() {
  return (
    <>
      <Section className="pt-32 pb-16">
        <SectionHeader
          title="See LeadBuddie in Action"
          description="Watch product demos and learn how to get the most out of LeadBuddie"
          centered
        />
      </Section>

      {/* Featured Videos */}
      <Section>
        <div className="mb-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Full Product Demos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* First Video */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Overview</h3>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/fqg46eP9tmQ?si=UoXmi7uisM6IY7z-"
                  title="LeadBuddie Product Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
            
            {/* Second Video */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Getting Started</h3>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/SGtTIi2ajCI?si=8ctY818SUljN3ZF_"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">What Indian Businesses Say</h2>
          <p className="text-center text-gray-600 mb-8">Trusted by Indian SMBs, contractors, and service businesses</p>
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
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray" className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to try it yourself?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start your 7-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://app.leadbuddie.com" size="lg">
              Start Free Trial
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}

