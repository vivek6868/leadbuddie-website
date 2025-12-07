import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { BRAND, CONTACT } from '@/lib/constants'
import { FileText, XCircle, CreditCard, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy - LeadBuddie',
  description: 'Cancellation and refund policy for LeadBuddie subscription service.',
}

export default function RefundPolicyPage() {
  const lastUpdated = 'December 7, 2024'

  return (
    <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cancellation & Refund Policy</h1>
          <p className="text-dark-400">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="text-primary-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-dark-300 mb-4">
                  {BRAND.name} is a subscription-based SaaS product providing WhatsApp CRM and automation 
                  tools for businesses. Since our service is delivered instantly upon activation, we follow 
                  the policy below.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CreditCard className="text-red-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
                <ul className="list-disc list-inside space-y-3 text-dark-300 mb-4 ml-4">
                  <li>We do not offer refunds for subscription payments after successful activation.</li>
                  <li>Refunds are only applicable in case of duplicate payments or billing errors.</li>
                  <li>All refund requests must be emailed to{' '}
                    <a href={`mailto:${CONTACT.support}`} className="text-primary-400 hover:text-primary-300">
                      {CONTACT.support}
                    </a>{' '}
                    within 7 days.
                  </li>
                  <li>Refunds will be processed back to the original payment method within 5–7 business days.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <XCircle className="text-yellow-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Cancellations</h2>
                <ul className="list-disc list-inside space-y-3 text-dark-300 mb-4 ml-4">
                  <li>You can cancel your subscription at any time from the Billing page.</li>
                  <li>After cancellation, the service will remain active until the end of the paid billing cycle.</li>
                  <li>No cancellation fees apply.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="text-green-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Trial Period</h2>
                <p className="text-dark-300">
                  If you cancel during the free trial, your card will not be charged.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">Contact for Refunds</h2>
            <p className="text-dark-300 mb-4">
              For refund requests or questions about this policy, please contact us:
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
    </Section>
  )
}

