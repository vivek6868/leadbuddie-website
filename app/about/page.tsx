import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { BRAND, CONTACT } from '@/lib/constants'
import { Building2, Target, Users, MapPin } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'About LeadBuddie — AI Sales Employee for WhatsApp & Instagram',
  description: 'LeadBuddie is built by Hutliv Technologies LLP — a software team building AI Sales Employees for growing businesses that sell over WhatsApp and Instagram.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <Section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary font-heading">
              About LeadBuddie
            </h1>
            <p className="text-lg text-text-secondary">
              Building the future of conversational commerce for growing businesses worldwide
            </p>
          </div>

          <div className="space-y-8">
            {/* Company Story */}
            <div className="bg-bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center flex-shrink-0 text-brand">
                  <Building2 size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-text-primary">Our Story</h2>
                  <p className="text-text-secondary mb-4">
                    {BRAND.name} is built by {BRAND.company}, serving businesses worldwide. We understand 
                    the unique challenges that operations-driven businesses face when managing volume leads.
                  </p>
                  <p className="text-text-secondary mb-4">
                    Founded in {BRAND.founded}, we set out with a simple mission: help businesses never lose 
                    a customer lead again. We saw too many businesses losing potential customers because 
                    of disorganized lead management, missed follow-ups, and slow replies in chat interfaces.
                  </p>
                  <p className="text-text-secondary">
                    Today, {BRAND.name} acts as an AI Sales Employee for WhatsApp and Instagram conversations. 
                    It replies on your behalf, qualifies leads automatically, and follows up so you never lose 
                    a customer to a missed message. First built and validated with HVAC and water solution providers, 
                    we are expanding to support growing local service, retail, and sales teams globally.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center flex-shrink-0 text-brand">
                  <Target size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-text-primary">Our Mission</h2>
                  <p className="text-text-secondary mb-4">
                    Our mission is simple: <strong className="text-text-primary">Help businesses never lose a customer lead.</strong>
                  </p>
                  <p className="text-text-secondary">
                    We believe that every lead matters, and no business should lose a potential customer 
                    because of poor organization or missed follow-ups. With AI-powered tools and smart 
                    automation, we make lead management effortless so you can focus on what you do best - 
                    serving your customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="bg-bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-text-primary">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-brand-hover">Trust & Compliance</h3>
                  <p className="text-text-secondary text-sm">
                    We take data privacy and compliance seriously. We comply with all relevant regulations 
                    and Meta's WhatsApp Business Policy.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-brand-hover">Customer Success</h3>
                  <p className="text-text-secondary text-sm">
                    Your success is our success. We're committed to helping you close more deals and 
                    grow your business.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-brand-hover">Simplicity</h3>
                  <p className="text-text-secondary text-sm">
                    We believe in making complex things simple. Our tools are designed to be intuitive 
                    and easy to use.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-brand-hover">Innovation</h3>
                  <p className="text-text-secondary text-sm">
                    We continuously improve our platform with AI-powered features and the latest 
                    technology to serve you better.
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center flex-shrink-0 text-brand">
                  <MapPin size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-text-primary">Location</h2>
                  <p className="text-text-secondary mb-2">
                    {BRAND.company} is building software serving businesses worldwide. LeadBuddie is 
                    available to growing businesses in all countries.
                  </p>
                  <p className="text-text-secondary">
                    <strong>Address:</strong> {CONTACT.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="bg-bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center flex-shrink-0 text-brand">
                  <Users size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-text-primary">Our Team</h2>
                  <p className="text-text-secondary">
                    We're a dedicated team of developers, designers, and customer success 
                    specialists passionate about helping businesses succeed worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <CTASection
        title="Put an AI Sales Employee in your WhatsApp inbox."
        description="Join growing businesses using LeadBuddie to reply, qualify, and follow up — even when they cannot."
      />
    </>
  )
}
