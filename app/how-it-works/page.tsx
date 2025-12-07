import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { HOW_IT_WORKS_STEPS } from '@/lib/constants'
import * as Icons from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How It Works - LeadBuddie',
  description: 'Get started with LeadBuddie in 5 simple steps. Connect your WhatsApp Business number and start managing leads effectively.',
}

export default function HowItWorksPage() {
  return (
    <>
      <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How LeadBuddie Works
            </h1>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              Get started in minutes. Manage all your WhatsApp leads from one powerful dashboard.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const IconComponent = (Icons as any)[step.icon] || Icons.CheckCircle
              return (
                <div
                  key={step.step}
                  className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8 hover:border-primary-600/50 transition-colors"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary-600/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="text-primary-400" size={32} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-sm font-semibold text-primary-400 bg-primary-600/10 px-3 py-1 rounded-full">
                          Step {step.step}
                        </span>
                        <h2 className="text-2xl font-semibold">{step.title}</h2>
                      </div>
                      <p className="text-dark-300 text-lg">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Compliance Note */}
          <div className="bg-gradient-to-r from-primary-600/10 to-secondary-600/10 border border-primary-600/20 rounded-lg p-6 md:p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center">
                  <Shield className="text-primary-400" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Important Compliance Note</h3>
                <p className="text-dark-300 mb-4">
                  <strong className="text-white">LeadBuddie helps you MANAGE leads.</strong> We do NOT send spam or 
                  bulk unsolicited messages. We comply with WhatsApp Business Policy and Meta's terms of service.
                </p>
                <p className="text-dark-300">
                  We help you organize conversations that come to your WhatsApp Business number, generate AI insights, 
                  and set up follow-up reminders. All messages sent through your WhatsApp Business number are your 
                  responsibility and must comply with WhatsApp's policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <ComplianceSection />
      <CTASection 
        title="Ready to Get Started?"
        description="Start your 7-day free trial and see how easy it is to manage your WhatsApp leads."
      />
    </>
  )
}

