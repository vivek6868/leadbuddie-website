import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { CONTACT } from '@/lib/constants'
import { Package, Zap, CheckCircle2, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy - LeadBuddie',
  description: 'Shipping and delivery policy for LeadBuddie digital SaaS product.',
}

export default function ShippingPolicyPage() {
  const lastUpdated = 'January 1, 2025'

  return (
    <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shipping & Delivery Policy</h1>
          <p className="text-dark-400">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Package className="text-primary-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Digital Service Only</h2>
                <p className="text-dark-300 mb-4">
                  LeadBuddie is a digital SaaS product. We do not ship any physical goods.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-dark-900 border border-dark-700 rounded-lg p-4 text-center">
                    <CheckCircle2 className="text-green-400 mx-auto mb-2" size={24} />
                    <p className="text-sm text-dark-300">No physical shipping</p>
                  </div>
                  <div className="bg-dark-900 border border-dark-700 rounded-lg p-4 text-center">
                    <CheckCircle2 className="text-green-400 mx-auto mb-2" size={24} />
                    <p className="text-sm text-dark-300">No delivery charges</p>
                  </div>
                  <div className="bg-dark-900 border border-dark-700 rounded-lg p-4 text-center">
                    <CheckCircle2 className="text-green-400 mx-auto mb-2" size={24} />
                    <p className="text-sm text-dark-300">Instant activation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="text-green-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Instant Activation</h2>
                <p className="text-dark-300 mb-4">
                  After successful payment:
                </p>
                <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
                  <li>Your workspace becomes active instantly.</li>
                  <li>You get immediate access to all features included in your subscription plan.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-secondary-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
                <p className="text-dark-300 mb-4">
                  If you face any activation issues, contact us at:
                </p>
                <ul className="list-none space-y-2 text-dark-300">
                  <li>
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${CONTACT.support}`} className="text-primary-400 hover:text-primary-300">
                      {CONTACT.support}
                    </a>
                  </li>
                  <li>
                    <strong>Support Hours:</strong> Monday–Saturday, 10am to 6pm IST
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

