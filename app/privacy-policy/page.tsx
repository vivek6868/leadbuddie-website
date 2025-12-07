import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { BRAND, CONTACT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy - LeadBuddie',
  description: 'Privacy Policy for LeadBuddie. Learn how we collect, use, and protect your data.',
}

export default function PrivacyPolicyPage() {
  return (
    <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-dark-300 mb-4">
              Welcome to {BRAND.name} ("we," "our," or "us"). {BRAND.name} is a product developed and operated by 
              {BRAND.company}, an Indian software company serving businesses worldwide. We are committed to protecting 
              your privacy and ensuring the security of your personal information.
            </p>
            <p className="text-dark-300">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
              our lead management platform and services (collectively, the "Service"). By using our Service, you agree 
              to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">2.1 Information You Provide</h3>
            <p className="text-dark-300 mb-4">
              When you register for an account or use our Service, we may collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
              <li><strong>Account Information:</strong> Name, email address, phone number, company name, and billing information</li>
              <li><strong>Contact Information:</strong> Information about your contacts and leads that you manage through our platform</li>
              <li><strong>Communication Data:</strong> WhatsApp messages, conversations, and other communications that you choose to sync with our Service</li>
              <li><strong>Profile Information:</strong> Any additional information you choose to provide in your profile or account settings</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">2.2 Information Automatically Collected</h3>
            <p className="text-dark-300 mb-4">
              When you use our Service, we automatically collect certain information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
              <li><strong>Usage Data:</strong> Information about how you use our Service, including pages visited, features used, and time spent</li>
              <li><strong>Device Information:</strong> Device type, operating system, browser type, IP address, and device identifiers</li>
              <li><strong>Log Data:</strong> Server logs, error reports, and performance data</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our Service</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">2.3 WhatsApp Data</h3>
            <p className="text-dark-300 mb-4">
              When you connect your WhatsApp Business number to our Service, we may collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
              <li>Messages and conversations from your WhatsApp Business account</li>
              <li>Contact information from your WhatsApp contacts</li>
              <li>Metadata associated with WhatsApp messages (timestamps, message status, etc.)</li>
              <li>Profile information from your WhatsApp Business account</li>
            </ul>
            <p className="text-dark-300">
              <strong>Important:</strong> We only access WhatsApp data that you explicitly authorize us to access. 
              We do not access data from personal WhatsApp accounts, only WhatsApp Business accounts that you connect to our Service.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-dark-300 mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
              <li><strong>Service Provision:</strong> To provide, maintain, and improve our lead management platform</li>
              <li><strong>Lead Management:</strong> To organize, score, and manage your leads and customer communications</li>
              <li><strong>AI Processing:</strong> To generate AI-powered summaries, insights, and lead scoring using machine learning algorithms</li>
              <li><strong>Communication:</strong> To send you service-related notifications, updates, and support communications</li>
              <li><strong>Billing:</strong> To process payments and manage your subscription</li>
              <li><strong>Analytics:</strong> To analyze usage patterns and improve our Service</li>
              <li><strong>Security:</strong> To detect, prevent, and address technical issues and security threats</li>
              <li><strong>Compliance:</strong> To comply with legal obligations and enforce our terms of service</li>
            </ul>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
            <p className="text-dark-300 mb-4">
              We use the following third-party services to operate our platform:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">4.1 Meta/WhatsApp Business API</h3>
            <p className="text-dark-300 mb-4">
              We integrate with Meta's WhatsApp Business API to help you manage leads from your WhatsApp Business number. 
              When you connect your WhatsApp Business account, Meta may process your data according to their privacy policy. 
              We comply with Meta's WhatsApp Business Policy and only use WhatsApp data for lead management purposes as authorized by you.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">4.2 Cloud Infrastructure</h3>
            <p className="text-dark-300 mb-4">
              We use Supabase for database and authentication services, and Vercel for hosting and deployment. 
              These services process your data to provide infrastructure and hosting services.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">4.3 AI Services</h3>
            <p className="text-dark-300 mb-4">
              We use OpenAI's services to provide AI-powered features such as lead summaries and insights. 
              When we process your data through AI services, we ensure that appropriate data protection measures are in place.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">4.4 Payment Processing</h3>
            <p className="text-dark-300">
              We use third-party payment processors to handle billing. Payment information is processed securely 
              and in accordance with PCI DSS standards.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">5. WhatsApp Data Handling</h2>
            <p className="text-dark-300 mb-4">
              <strong>Critical Information for Meta/WhatsApp Compliance:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
              <li>We only access WhatsApp data from WhatsApp Business accounts that you explicitly connect to our Service</li>
              <li>We do NOT send spam, bulk messages, or unsolicited messages through WhatsApp</li>
              <li>We do NOT share WhatsApp data with third parties except as necessary to provide our Service (e.g., AI processing)</li>
              <li>We comply with Meta's WhatsApp Business Policy and Terms of Service</li>
              <li>We use WhatsApp data solely for lead management, organization, and AI-powered insights</li>
              <li>You retain full control over your WhatsApp Business account and can disconnect it at any time</li>
              <li>We do not store WhatsApp messages longer than necessary for providing our Service</li>
              <li>We implement appropriate security measures to protect WhatsApp data</li>
            </ul>
            <p className="text-dark-300">
              All messages sent through your WhatsApp Business number are your responsibility and must comply with 
              WhatsApp's policies. We help you manage and organize these messages but do not control the content you send.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p className="text-dark-300 mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
              <li>Encryption of data in transit using SSL/TLS</li>
              <li>Encryption of sensitive data at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Secure backup and disaster recovery procedures</li>
            </ul>
            <p className="text-dark-300">
              However, no method of transmission over the Internet or electronic storage is 100% secure. 
              While we strive to use commercially acceptable means to protect your information, we cannot 
              guarantee absolute security.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p className="text-dark-300 mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Export:</strong> Request export of your data in a portable format</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="text-dark-300">
              To exercise these rights, please contact us at {CONTACT.general}. We will respond to your request 
              within a reasonable timeframe and in accordance with applicable laws.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
            <p className="text-dark-300 mb-4">
              We retain your personal information for as long as necessary to provide our Service and fulfill 
              the purposes outlined in this Privacy Policy, unless a longer retention period is required or 
              permitted by law.
            </p>
            <p className="text-dark-300">
              When you delete your account, we will delete or anonymize your personal information within 30 days, 
              except where we are required to retain it for legal, regulatory, or legitimate business purposes.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">9. Cookies and Tracking Technologies</h2>
            <p className="text-dark-300 mb-4">
              We use cookies and similar tracking technologies to track activity on our Service and store certain 
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            <p className="text-dark-300">
              Types of cookies we use:
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
              <li><strong>Essential Cookies:</strong> Required for the Service to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our Service</li>
              <li><strong>Preference Cookies:</strong> Remember your preferences and settings</li>
            </ul>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
            <p className="text-dark-300">
              Our Service is not intended for individuals under the age of 18. We do not knowingly collect 
              personal information from children. If you believe we have collected information from a child, 
              please contact us immediately, and we will take steps to delete such information.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">11. International Data Transfers</h2>
            <p className="text-dark-300">
              Your information may be transferred to and processed in countries other than your country of residence. 
              These countries may have data protection laws that differ from those in your country. We take appropriate 
              measures to ensure that your information receives an adequate level of protection in accordance with this 
              Privacy Policy.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-dark-300 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p className="text-dark-300">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy 
              Policy are effective when they are posted on this page.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
            <p className="text-dark-300 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="list-none space-y-2 text-dark-300">
              <li><strong>Email:</strong> <a href={`mailto:${CONTACT.general}`} className="text-primary-400 hover:text-primary-300">{CONTACT.general}</a></li>
              <li><strong>Company:</strong> {BRAND.company}</li>
              <li><strong>Location:</strong> India (Serving businesses worldwide)</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

