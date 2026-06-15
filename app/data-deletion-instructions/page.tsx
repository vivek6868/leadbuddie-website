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
    <Section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-bg-secondary">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight mb-4">
            Delete Your LeadBuddie Account
          </h1>
          <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto">
            Request permanent deletion of your account and associated data in a few simple steps.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-brand/20">
                <Shield className="text-brand" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-3">Your Privacy Matters</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  LeadBuddie respects your privacy and gives you control over your data.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  You can request permanent deletion of your account and associated data at any time.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-red-500/20">
                <Trash2 className="text-red-600" size={24} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-text-primary mb-3">How to Request Account Deletion</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Follow these steps to request account deletion:
                </p>
                <ol className="list-decimal list-outside space-y-3 text-text-secondary mb-6 pl-5 leading-relaxed font-medium">
                  <li>
                    Send an email to{' '}
                    <a
                      href="mailto:hello@hutliv.com"
                      className="text-brand-hover hover:text-brand font-semibold underline underline-offset-2"
                    >
                      hello@hutliv.com
                    </a>{' '}
                    from your registered email address.
                  </li>
                  <li>Mention &quot;Account Deletion Request&quot; in the subject line.</li>
                  <li>Our team will process your request and delete your data within 3-5 working days.</li>
                </ol>
                <div className="bg-bg-elevated border border-border rounded-2xl p-4 inline-flex items-center gap-3">
                  <Mail className="text-brand" size={20} />
                  <span className="text-sm font-bold text-text-primary">Email: hello@hutliv.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                <CheckCircle2 className="text-blue-600" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-3">What Will Be Deleted</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Once your request is completed, the following data will be permanently deleted:
                </p>
                <ul className="list-disc list-outside space-y-2 text-text-secondary pl-5 leading-relaxed font-medium">
                  <li>Account profile and login credentials</li>
                  <li>All leads and customer pipeline data</li>
                  <li>Chat history, messages, and conversation transcripts</li>
                  <li>Connected WhatsApp integrations and access keys</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                <CheckCircle2 className="text-emerald-600" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-3">Data Retention</h2>
                <p className="text-text-secondary leading-relaxed">
                  Most data is deleted when your request is completed. Minimal transactional data (like invoice logs) may be retained
                  temporarily for legal, regulatory, or compliance reasons, and permanently purged after the required period.
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
                <h2 className="text-xl font-bold text-text-primary mb-3">Need Help?</h2>
                <p className="text-text-secondary leading-relaxed">
                  Contact us at{' '}
                  <a
                    href="mailto:hello@hutliv.com"
                    className="text-brand-hover hover:text-brand font-semibold underline underline-offset-2"
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
