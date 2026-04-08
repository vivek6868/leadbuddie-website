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
          <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold text-text-primary">Send us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold text-text-primary">Contact Information</h2>
            <div className="space-y-6">
              <div className="rounded-[28px] border border-border bg-bg-card/90 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-subtle">
                    <Mail className="text-brand-light" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-text-primary">Email Us</h3>
                    <a
                      href={`mailto:${CONTACT.general}`}
                      className="block text-brand-light transition-colors hover:text-text-primary"
                    >
                      {CONTACT.general}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-border bg-bg-card/90 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-subtle">
                    <Building2 className="text-brand-light" size={20} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="mb-3 font-semibold text-text-primary">Company Information</h3>
                    <div className="space-y-3 text-text-secondary">
                      <p className="flex items-start gap-2">
                        <span className="min-w-[4.5rem] font-medium text-text-primary">Company:</span>
                        {BRAND.company}
                      </p>
                      <p className="flex items-start gap-2">
                        <MapPin size={18} className="mt-0.5 flex-shrink-0 text-brand-light" />
                        <span>
                          <span className="font-medium text-text-primary">Address:</span>{' '}
                          {CONTACT.address}
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Mail size={18} className="mt-0.5 flex-shrink-0 text-brand-light" />
                        <span>
                          <span className="font-medium text-text-primary">Email:</span>{' '}
                          <a
                            href={`mailto:${CONTACT.general}`}
                            className="text-brand-light transition-colors hover:text-text-primary"
                          >
                            {CONTACT.general}
                          </a>
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Phone size={18} className="mt-0.5 flex-shrink-0 text-brand-light" />
                        <span>
                          <span className="font-medium text-text-primary">Phone / WhatsApp:</span>{' '}
                          <a
                            href={CONTACT.whatsappUrl}
                            className="text-brand-light transition-colors hover:text-text-primary"
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

