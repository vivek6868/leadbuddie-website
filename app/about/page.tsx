import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { BRAND, CONTACT } from '@/lib/constants'
import { Building2, Target, Users, MapPin } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'About Us - LeadBuddie',
  description: 'LeadBuddie is built by Hutliv Technologies, an Indian software company serving businesses worldwide.',
}

export default function AboutPage() {
  return (
    <>
      <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About LeadBuddie
            </h1>
            <p className="text-lg text-dark-300">
              Made in India, built for SMBs worldwide by a team that understands your challenges
            </p>
          </div>

          <div className="space-y-12">
            {/* Company Story */}
            <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="text-primary-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                  <p className="text-dark-300 mb-4">
                    {BRAND.name} is built by {BRAND.company}, an Indian software company serving 
                    businesses worldwide. We understand the unique challenges that small and medium 
                    businesses face when it comes to managing customer leads, with a special focus 
                    on the Indian market.
                  </p>
                  <p className="text-dark-300 mb-4">
                    Founded in {BRAND.founded}, we set out with a simple mission: help SMBs never lose 
                    a customer lead again. We saw too many businesses losing potential customers because 
                    of disorganized lead management, missed follow-ups, and lack of prioritization.
                  </p>
                  <p className="text-dark-300">
                    Today, {BRAND.name} helps businesses worldwide, with a strong focus on Indian contractors, 
                    service providers, and small businesses. Our platform helps them manage their WhatsApp 
                    leads more effectively, close more deals, and grow their businesses.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-secondary-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                  <p className="text-dark-300 mb-4">
                    Our mission is simple: <strong className="text-white">Help SMBs never lose a customer lead.</strong>
                  </p>
                  <p className="text-dark-300">
                    We believe that every lead matters, and no business should lose a potential customer 
                    because of poor organization or missed follow-ups. With AI-powered tools and smart 
                    automation, we make lead management effortless so you can focus on what you do best - 
                    serving your customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary-400">Trust & Compliance</h3>
                  <p className="text-dark-300 text-sm">
                    We take data privacy and compliance seriously. We comply with all relevant regulations 
                    and Meta's WhatsApp Business Policy.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary-400">Customer Success</h3>
                  <p className="text-dark-300 text-sm">
                    Your success is our success. We're committed to helping you close more deals and 
                    grow your business.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary-400">Simplicity</h3>
                  <p className="text-dark-300 text-sm">
                    We believe in making complex things simple. Our tools are designed to be intuitive 
                    and easy to use.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary-400">Innovation</h3>
                  <p className="text-dark-300 text-sm">
                    We continuously improve our platform with AI-powered features and the latest 
                    technology to serve you better.
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Location</h2>
                  <p className="text-dark-300 mb-2">
                    {BRAND.company} is an Indian company serving businesses worldwide. While we're 
                    built in India with deep understanding of the Indian market, LeadBuddie is 
                    available to businesses in all countries.
                  </p>
                  {CONTACT.address !== '[Your India Address]' && (
                    <p className="text-dark-300">
                      <strong>Address:</strong> {CONTACT.address}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Team Section - Placeholder */}
            <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-primary-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                  <p className="text-dark-300">
                    We're a small but dedicated team of developers, designers, and customer success 
                    specialists passionate about helping Indian businesses succeed. 
                    {/* TODO: Add founder/team member information here */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <CTASection 
        title="Ready to Transform Your Lead Management?"
        description="Join businesses worldwide using LeadBuddie to never lose a lead again."
      />
    </>
  )
}

