import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { ContactForm } from '@/components/forms/ContactForm'
import { CONTACT, BRAND } from '@/lib/constants'
import { Mail, Phone, MapPin, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact LeadBuddie — AI Sales Software for WhatsApp',
  description: 'Contact LeadBuddie for product, onboarding or pricing questions. Email hello@hutliv.com, send a message, or reach the team on WhatsApp.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#07111f] px-4 pb-20 pt-28 text-white sm:px-6 md:pt-36 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#25d366]/15 blur-[100px]" />
        <div className="relative mx-auto max-w-4xl text-center"><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8bf0aa]">Talk to the people behind LeadBuddie</p><h1 className="mt-5 font-heading text-5xl font-extrabold leading-[0.94] tracking-[-0.065em] sm:text-6xl">Bring us the workflow <span className="text-[#79eea0]">you want to make easier.</span></h1><p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">Ask about the product, pricing or how LeadBuddie could fit your team. Use the form, email or WhatsApp—whichever is easiest.</p></div>
      </section>
      <Section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className="mb-3 text-2xl font-semibold text-text-primary">Send us a message</h2>
            <p className="mb-6 text-sm leading-relaxed text-text-secondary">Include the kind of business you run and the workflow you want to improve, if you can.</p>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div aria-labelledby="contact-details-heading">
            <h2 id="contact-details-heading" className="mb-6 text-2xl font-semibold text-text-primary">Contact information</h2>
            <div className="space-y-6">
              <div className="rounded-[28px] border border-border bg-bg-card/90 p-6 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.15)]">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-subtle">
                    <Mail className="text-brand-light" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-text-primary">Email Us</h3>
                    <a
                      href={`mailto:${CONTACT.general}`}
                      aria-label={`Email LeadBuddie at ${CONTACT.general}`}
                      className="block text-brand-light transition-colors hover:text-text-primary"
                    >
                      {CONTACT.general}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-border bg-bg-card/90 p-6 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.15)]">
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
                            aria-label={`Email LeadBuddie at ${CONTACT.general}`}
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
                            aria-label={`Message LeadBuddie on WhatsApp at ${CONTACT.phone}`}
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
    </>
  )
}
