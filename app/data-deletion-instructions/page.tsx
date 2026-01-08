import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Shield, Mail, Trash2, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Deletion Instructions - LeadBuddie',
  description: 'Learn how to request deletion of your account and personal data from LeadBuddie.',
}

export default function DataDeletionInstructionsPage() {
  return (
    <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Data Deletion Instructions – LeadBuddie
          </h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="text-primary-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Your Privacy Matters</h2>
                <p className="text-dark-300 mb-4">
                  LeadBuddie respects your privacy and is committed to protecting your personal data. 
                  We understand that you may want to delete your account and remove your personal information 
                  from our systems at any time. This page explains how you can request deletion of your 
                  account and all associated personal data.
                </p>
                <p className="text-dark-300">
                  You have full control over your data and can request its deletion at any time. We will 
                  process your request promptly and securely remove all your information from our systems.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Trash2 className="text-red-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">How to Request Data Deletion</h2>
                <p className="text-dark-300 mb-4">
                  If you would like to request deletion of your account or personal data stored by LeadBuddie, 
                  please email:
                </p>
                <div className="bg-dark-900 border border-dark-700 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Mail className="text-primary-400" size={20} />
                    <strong className="text-white">hello@hutliv.com</strong>
                  </div>
                  <p className="text-dark-300 text-sm">
                    with the subject line <strong className="text-white">"Data Deletion Request"</strong>
                  </p>
                </div>
                <p className="text-dark-300 mb-4">
                  We will verify your identity and delete your data from our systems, including WhatsApp 
                  connection data, business information, leads, messages, and user account details.
                </p>
                <p className="text-dark-300">
                  You may also request deletion by contacting us through the in-app support form.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-blue-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">What Gets Deleted</h2>
                <p className="text-dark-300 mb-4">
                  When you request data deletion, we will permanently remove the following information from our systems:
                </p>
                <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
                  <li>Your user account details (name, email, password)</li>
                  <li>WhatsApp connection data and API credentials</li>
                  <li>Business information and company details</li>
                  <li>All leads and lead data associated with your account</li>
                  <li>WhatsApp messages and conversation history</li>
                  <li>Notes, tags, and custom fields</li>
                  <li>AI-generated summaries and insights</li>
                  <li>Billing and payment information (as per legal requirements)</li>
                  <li>Any other personal data stored in your account</li>
                </ul>
                <p className="text-dark-300">
                  <strong className="text-white">Note:</strong> Some data may be retained for legal or regulatory 
                  compliance purposes (such as transaction records) as required by law. However, all personal 
                  identifiers and sensitive information will be removed or anonymized.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-green-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Processing Time</h2>
                <p className="text-dark-300 mb-4">
                  After we verify your identity and confirm your deletion request:
                </p>
                <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
                  <li>We will begin processing your deletion request within 24-48 hours</li>
                  <li>Complete deletion of all data typically takes 5-7 business days</li>
                  <li>You will receive email confirmation once deletion is complete</li>
                  <li>Your account will be immediately deactivated upon request confirmation</li>
                </ul>
                <p className="text-dark-300">
                  If you have any questions about the deletion process or need assistance, please don't hesitate 
                  to contact us at <a href="mailto:hello@hutliv.com" className="text-primary-400 hover:text-primary-300">hello@hutliv.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

