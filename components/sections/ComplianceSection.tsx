import { Section } from '@/components/ui/Section'
import { COMPLIANCE_STATEMENTS } from '@/lib/constants'
import { Shield, CheckCircle2 } from 'lucide-react'

export function ComplianceSection() {
  return (
    <Section className="bg-dark-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600/10 rounded-full mb-4">
            <Shield className="text-primary-400" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We Use WhatsApp
          </h2>
          <p className="text-lg text-dark-300">
            We help you manage leads responsibly and in full compliance with Meta's policies
          </p>
        </div>
        
        <div className="bg-dark-900 border border-dark-700 rounded-lg p-6 md:p-8">
          <ul className="space-y-4">
            {COMPLIANCE_STATEMENTS.map((statement, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-dark-200">{statement}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 pt-6 border-t border-dark-700">
            <p className="text-sm text-dark-400 italic">
              <strong>Important:</strong> LeadBuddie helps you MANAGE leads. We do NOT send spam or bulk unsolicited messages. 
              We comply with WhatsApp Business Policy and Meta's terms of service.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

