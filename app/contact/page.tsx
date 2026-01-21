import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { ContactForm } from '@/components/forms/ContactForm'
import { CONTACT } from '@/lib/constants'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - LeadBuddie',
  description: 'Contact LeadBuddie support. Email hello@hutliv.com.',
}

export default function ContactPage() {
  return (
    <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ink font-display">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Send us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-ink">Contact Information</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-ink">Email Us</h3>
                    <a
                      href={`mailto:${CONTACT.general}`}
                      className="text-primary-400 hover:text-primary-300 transition-colors block"
                    >
                      {CONTACT.general}
                    </a>
                  </div>
                </div>
              </div>

              {CONTACT.phone !== '[Your India Phone]' && (
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-accent-400" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-ink">Phone</h3>
                      <a
                        href={`tel:${CONTACT.phone}`}
                        className="text-accent-400 hover:text-accent-300 transition-colors"
                      >
                        {CONTACT.phone}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {CONTACT.address !== '[Your India Address]' && (
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary-400" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-ink">Address</h3>
                      <p className="text-gray-700">{CONTACT.address}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-green-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-ink">Business Information</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Business Name:</strong> Hutliv
                    </p>
                    <p className="text-gray-700">
                      <strong>Location:</strong> India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

