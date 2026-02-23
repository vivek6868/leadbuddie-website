import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { ContactForm } from '@/components/forms/ContactForm'
import { CONTACT, BRAND } from '@/lib/constants'
import { Mail, Phone, MapPin, Building2 } from 'lucide-react'

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

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-primary-400" size={20} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold mb-3 text-ink">Company Information</h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="flex items-start gap-2">
                        <span className="font-medium text-ink min-w-[4.5rem]">Company:</span>
                        {BRAND.company}
                      </p>
                      <p className="flex items-start gap-2">
                        <MapPin size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                        <span>
                          <span className="font-medium text-ink">Address:</span>{' '}
                          {CONTACT.address}
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Mail size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                        <span>
                          <span className="font-medium text-ink">Email:</span>{' '}
                          <a
                            href={`mailto:${CONTACT.general}`}
                            className="text-primary-400 hover:text-primary-300 transition-colors"
                          >
                            {CONTACT.general}
                          </a>
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Phone size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                        <span>
                          <span className="font-medium text-ink">Phone / WhatsApp:</span>{' '}
                          <a
                            href={CONTACT.whatsappUrl}
                            className="text-primary-400 hover:text-primary-300 transition-colors"
                          >
                            {CONTACT.phone}
                          </a>
                        </span>
                      </p>
                    </div>
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

