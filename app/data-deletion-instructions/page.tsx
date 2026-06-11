import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Shield, Mail, Trash2, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Delete Your LeadBuddie Account — LeadBuddie',
  description: 'Learn how to request permanent deletion of your LeadBuddie account and associated data.',
  alternates: { canonical: '/data-deletion-instructions' },
}

export default function DataDeletionInstructionsPage() {
  return (
    <Section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 md:mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white font-display tracking-tight">
            Delete Your LeadBuddie Account
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl leading-relaxed">
            Request permanent deletion of your account and associated data in a few simple steps.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-dark-800/70 border border-dark-700 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="text-primary-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Your Privacy Matters</h2>
                <p className="text-white mb-4 leading-relaxed">
                  LeadBuddie respects your privacy and gives you control over your data.
                </p>
                <p className="text-white leading-relaxed">
                  You can request permanent deletion of your account and associated data at any time.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-dark-800/70 border border-dark-700 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Trash2 className="text-red-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">How to Request Account Deletion</h2>
                <p className="text-white mb-4 leading-relaxed">
                  Follow these steps to request account deletion:
                </p>
                <ol className="list-decimal list-outside space-y-2 text-white mb-5 pl-6 leading-relaxed marker:font-semibold">
                  <li>
                    Send an email to{' '}
                    <a
                      href="mailto:hello@hutliv.com"
                      className="text-primary-300 hover:text-primary-200 font-semibold underline underline-offset-2"
                    >
                      hello@hutliv.com
                    </a>{' '}
                    from your registered email address.
                  </li>
                  <li>Mention &quot;Account Deletion Request&quot; in the subject.</li>
                  <li>Our team will process your request within 3-5 working days.</li>
                </ol>
                <div className="bg-dark-900/70 border border-dark-700 rounded-xl p-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="text-primary-300" size={20} />
                    <strong className="text-white">Email: hello@hutliv.com</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-800/70 border border-dark-700 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-blue-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">What Will Be Deleted</h2>
                <p className="text-white mb-4 leading-relaxed">
                  Once your request is completed, this data will be deleted:
                </p>
                <ul className="list-disc list-outside space-y-2 text-white mb-4 pl-6 leading-relaxed marker:text-white">
                  <li>Account profile and login information</li>
                  <li>Leads and customer data</li>
                  <li>Messages and conversations</li>
                  <li>Connected WhatsApp and Instagram data</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-dark-800/70 border border-dark-700 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-green-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Data Retention</h2>
                <p className="text-white leading-relaxed">
                  Most data is deleted when your request is completed. Minimal data may be retained
                  temporarily for legal, security, or compliance reasons, and permanently deleted after
                  a limited period.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-dark-800/70 border border-dark-700 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary-300" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Need Help?</h2>
                <p className="text-white leading-relaxed">
                  Contact us at{' '}
                  <a
                    href="mailto:hello@hutliv.com"
                    className="text-primary-300 hover:text-primary-200 font-semibold underline underline-offset-2"
                  >
                    hello@hutliv.com
                  </a>
                  {' '}for support with your deletion request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

