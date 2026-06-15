import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { CONTACT } from '@/lib/constants'
import { Package, Zap, CheckCircle2, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy — LeadBuddie',
  description: 'Shipping and delivery policy for LeadBuddie digital SaaS product.',
  alternates: { canonical: '/shipping-policy' },
}

export default function ShippingPolicyPage() {
  return (
    <Section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight mb-4">Shipping & Delivery Policy</h1>
        </div>

        <div className="space-y-8">
          <div className="bg-bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4">Shipping Policy</h2>
            <p className="text-text-secondary mb-4 leading-relaxed">
              As a digital service, no physical shipping applies. LeadBuddie is a Software-as-a-Service (SaaS) platform delivered exclusively through our web application. We do not ship, deliver, or provide any physical goods, products, hardware, or materials. All services are accessed digitally through your internet-connected device.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Since there are no physical items to ship, <strong className="text-text-primary font-semibold">no shipping charges, delivery fees, or handling costs apply</strong>. Your subscription payment covers only the digital service access, which is provided instantly upon account activation.
            </p>
          </div>
          
          <div className="bg-bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-brand/20">
                <Package className="text-brand" size={24} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4">Digital Service Only</h2>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  LeadBuddie is a digital Software-as-a-Service (SaaS) product delivered exclusively through our web application. We do not manufacture, store, or ship any physical goods, products, or materials. All services are provided digitally and accessed through your web browser or mobile device.
                </p>

                <p className="text-text-secondary mb-4 leading-relaxed">
                  Our services are delivered entirely through our online platform at <strong className="text-text-primary font-semibold">app.leadbuddie.com</strong>. Upon successful payment and account activation, you gain immediate access to our WhatsApp + Instagram CRM, chat inbox, AI-powered features, and all other subscription benefits through your web browser. There are no physical components, hardware, or tangible items associated with our service.
                </p>

                <p className="text-text-secondary mb-4 leading-relaxed">
                  Because LeadBuddie is a purely digital service with no physical shipment involved, <strong className="text-text-primary font-semibold">there are no shipping charges, delivery fees, or handling costs</strong>. The subscription price you pay covers only the digital service access and does not include any shipping or delivery expenses, as none are required.
                </p>

                <p className="text-text-secondary mb-4 leading-relaxed">
                  Our service is primarily designed for businesses in India, with deep understanding of the Indian market and support for Indian payment methods (UPI, cards, bank transfers). However, our web-based platform is accessible worldwide, and businesses from any country can subscribe and use LeadBuddie online, subject to local regulations and payment method availability.
                </p>

                <p className="text-text-secondary mb-6 leading-relaxed">
                  All features, updates, and service improvements are delivered automatically through our web application. You do not need to download, install, or receive any physical software, hardware, or documentation. Everything is accessible instantly through your internet-connected device.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-bg-secondary border border-border rounded-2xl p-4 text-center shadow-sm">
                    <CheckCircle2 className="text-brand mx-auto mb-2" size={24} />
                    <p className="text-sm font-semibold text-text-primary">No physical shipping</p>
                  </div>
                  <div className="bg-bg-secondary border border-border rounded-2xl p-4 text-center shadow-sm">
                    <CheckCircle2 className="text-brand mx-auto mb-2" size={24} />
                    <p className="text-sm font-semibold text-text-primary">No delivery charges</p>
                  </div>
                  <div className="bg-bg-secondary border border-border rounded-2xl p-4 text-center shadow-sm">
                    <CheckCircle2 className="text-brand mx-auto mb-2" size={24} />
                    <p className="text-sm font-semibold text-text-primary">Instant activation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                <Zap className="text-emerald-600" size={24} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4">Service Activation & Access</h2>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  After successful payment through our payment gateway, your LeadBuddie account is activated automatically:
                </p>
                <ul className="list-disc list-inside space-y-2.5 text-text-secondary mb-4 ml-4 leading-relaxed font-medium">
                  <li>Your workspace becomes active instantly upon payment confirmation.</li>
                  <li>You receive an email confirmation with your account login credentials.</li>
                  <li>You get immediate access to all features included in your subscription plan.</li>
                  <li>You can start using the WhatsApp chat inbox, AI features, and lead management tools right away.</li>
                </ul>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  Access is provided through our web application at <strong className="text-text-primary font-semibold">app.leadbuddie.com</strong>. Simply log in with your registered email address and password to begin using the service immediately.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                <CheckCircle2 className="text-blue-600" size={24} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4">Delivery Timelines</h2>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  <strong className="text-text-primary font-semibold">Standard Activation:</strong> Access to your LeadBuddie workspace is usually activated instantly after successful payment confirmation. In most cases, you can log in and start using the service within 1-2 minutes of payment completion.
                </p>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  <strong className="text-text-primary font-semibold">Rare Technical Issues:</strong> In the unlikely event of a technical issue preventing instant activation, your account will be activated within 2-4 business hours. You will receive email notifications at each step of the activation process. If your account is not activated within 4 business hours, please contact our support team immediately at{' '}
                  <a href={`mailto:${CONTACT.support}`} className="text-brand-hover hover:text-brand font-semibold underline underline-offset-2">
                    {CONTACT.support}
                  </a>{' '}
                  for assistance.
                </p>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  <strong className="text-text-primary font-semibold">Payment Processing:</strong> Activation depends on successful payment processing. If payment is pending or fails, activation will be delayed until payment is confirmed. You will receive email updates regarding your payment status.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-text-primary font-semibold">Support Response:</strong> Our support team responds to activation-related queries within 24 hours during business days (Monday–Saturday, 10am to 6pm IST). For urgent activation issues, please mention &quot;URGENT: Activation Issue&quot; in your email subject line.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                <Package className="text-purple-600" size={24} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4">Geographic Availability</h2>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  LeadBuddie is primarily designed for and optimized for businesses in India. We support Indian payment methods including UPI, credit/debit cards, net banking, and bank transfers. Our pricing is in Indian Rupees (₹), and our support team operates during Indian Standard Time (IST).
                </p>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  However, as a web-based SaaS platform, LeadBuddie is accessible from anywhere in the world where internet access is available. Businesses outside India can also subscribe and use our service, subject to:
                </p>
                <ul className="list-disc list-inside space-y-2.5 text-text-secondary mb-4 ml-4 leading-relaxed font-medium">
                  <li>Availability of supported payment methods in their country</li>
                  <li>Compliance with local regulations and data protection laws</li>
                  <li>WhatsApp Business API availability in their region</li>
                  <li>Internet connectivity and browser compatibility</li>
                </ul>
                <p className="text-text-secondary leading-relaxed">
                  We do not restrict access based on geographic location, but service availability and features may vary depending on regional WhatsApp Business API policies and local regulations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-brand/20">
                <Mail className="text-brand" size={24} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4">Support & Assistance</h2>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  If you face any issues with account activation, payment processing, or accessing your workspace, please contact our support team:
                </p>
                <ul className="list-none space-y-2.5 text-text-secondary mb-4 font-medium leading-relaxed">
                  <li>
                    <strong>Support Email:</strong>{' '}
                    <a href={`mailto:${CONTACT.support}`} className="text-brand-hover hover:text-brand font-semibold underline underline-offset-2">
                      {CONTACT.support}
                    </a>
                  </li>
                  <li>
                    <strong>General Inquiries:</strong>{' '}
                    <a href="mailto:hello@hutliv.com" className="text-brand-hover hover:text-brand font-semibold underline underline-offset-2">
                      hello@hutliv.com
                    </a>
                  </li>
                  <li>
                    <strong>Support Hours:</strong> Monday–Saturday, 10am to 6pm IST
                  </li>
                  <li>
                    <strong>Response Time:</strong> We typically respond within 24 hours during business days
                  </li>
                </ul>
                <p className="text-text-secondary leading-relaxed">
                  For urgent activation issues, please include &quot;URGENT: Activation Issue&quot; in your email subject line, and we will prioritize your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
