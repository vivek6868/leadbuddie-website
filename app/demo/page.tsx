import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { TESTIMONIALS } from '@/lib/constants'
import { Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Demo — See LeadBuddie in Action on WhatsApp',
  description:
    'Watch LeadBuddie reply to WhatsApp leads, follow up automatically, and chase AMC renewals. Product demo videos plus real customer stories from growing businesses worldwide.',
  alternates: { canonical: '/demo' },
}

export default function DemoPage() {
  return (
    <>
      <Section className="pt-32 pb-16 bg-bg-primary">
        <SectionHeader
          title="See LeadBuddie in Action"
          description="Watch product demos and learn how to get the most out of LeadBuddie"
          centered
        />
      </Section>

      {/* Featured Videos */}
      <Section className="bg-bg-primary">
        <div className="mb-16 max-w-4xl mx-auto space-y-8">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-sm border border-border bg-bg-card">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/cG3R_e462nM"
              title="How to connect your existing WhatsApp number to LeadBuddie"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
          <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-sm border border-border bg-bg-card">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/fqg46eP9tmQ?si=UoXmi7uisM6IY7z-"
              title="LeadBuddie Product Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
          <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-sm border border-border bg-bg-card">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/SGtTIi2ajCI?si=8ctY818SUljN3ZF_"
              title="LeadBuddie Getting Started"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-2 text-center font-heading">What Business Owners Say</h2>
          <p className="text-center text-text-secondary mb-8">Trusted by businesses, contractors, and service providers globally</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <Card key={index} hover className="flex flex-col h-full bg-bg-card border border-border shadow-sm">
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-amber-400 fill-amber-400" size={16} />
                  ))}
                </div>
                <p className="text-text-secondary mb-6 flex-1 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4 mt-auto">
                  <p className="font-semibold text-text-primary text-base">{testimonial.author}</p>
                  <p className="text-sm text-text-secondary mt-1">{testimonial.company}</p>
                  <p className="text-xs text-text-muted mt-1">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16 bg-bg-secondary border-t border-border">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4 font-heading">
            Ready to try it yourself?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Start your 30-day free trial — full Growth plan access. No credit card required.
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
