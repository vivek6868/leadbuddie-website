import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { BRAND, CONTACT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Service - LeadBuddie',
  description: 'Terms of Service for LeadBuddie. Read our terms and conditions for using our lead management platform.',
}

export default function TermsPage() {
  const lastUpdated = 'December 7, 2024'

  return (
    <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-dark-400">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-dark-300 mb-4">
              By accessing or using {BRAND.name} ("the Service"), a product of {BRAND.company} ("we," "us," or "our"), 
              you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, 
              then you may not access the Service.
            </p>
            <p className="text-dark-300">
              These Terms apply to all visitors, users, and others who access or use the Service. By using our Service, 
              you represent that you are at least 18 years old and have the legal capacity to enter into these Terms.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-dark-300 mb-4">
              {BRAND.name} is a lead management platform that helps businesses organize, track, and manage leads from 
              WhatsApp Business accounts. Our Service includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
              <li>Lead organization and management tools</li>
              <li>AI-powered lead scoring and summaries</li>
              <li>WhatsApp Business API integration</li>
              <li>Follow-up reminders and automation</li>
              <li>Communication timeline and notes</li>
              <li>Analytics and reporting features</li>
            </ul>
            <p className="text-dark-300">
              We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or 
              without notice. We shall not be liable to you or any third party for any modification, suspension, 
              or discontinuance of the Service.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
            <p className="text-dark-300 mb-4">
              To use our Service, you must register for an account. When you register, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="text-dark-300">
              You are responsible for maintaining the confidentiality of your account credentials. We are not liable 
              for any loss or damage arising from your failure to protect your account information.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use Policy</h2>
            <p className="text-dark-300 mb-4">
              You agree not to use the Service:
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
              <li>For any illegal purpose or in violation of any laws</li>
              <li>To transmit any harmful, offensive, or inappropriate content</li>
              <li>To interfere with or disrupt the Service or servers</li>
              <li>To attempt to gain unauthorized access to any part of the Service</li>
              <li>To use automated systems to access the Service without permission</li>
              <li>To impersonate any person or entity</li>
              <li>To collect or harvest information about other users</li>
              <li>To violate any intellectual property rights</li>
            </ul>
            <p className="text-dark-300">
              We reserve the right to suspend or terminate your account if you violate this Acceptable Use Policy.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">5. WhatsApp Usage Policy</h2>
            <p className="text-dark-300 mb-4">
              <strong>Critical: Compliance with Meta/WhatsApp Policies</strong>
            </p>
            <p className="text-dark-300 mb-4">
              When using our Service with WhatsApp Business API, you must comply with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
              <li>Meta's WhatsApp Business Policy</li>
              <li>Meta's Terms of Service</li>
              <li>WhatsApp's Commerce Policy</li>
              <li>All applicable local and international laws and regulations</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">5.1 Prohibited Activities</h3>
            <p className="text-dark-300 mb-4">
              You agree NOT to use our Service to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
              <li>Send spam, bulk unsolicited messages, or promotional messages without consent</li>
              <li>Send messages to users who have not opted in to receive communications</li>
              <li>Send messages that violate WhatsApp's content policies</li>
              <li>Use WhatsApp for illegal activities or fraud</li>
              <li>Share or sell contact lists obtained through WhatsApp</li>
              <li>Circumvent WhatsApp's rate limits or restrictions</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">5.2 Your Responsibility</h3>
            <p className="text-dark-300 mb-4">
              You are solely responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
              <li>All messages sent through your WhatsApp Business number</li>
              <li>Obtaining proper consent before sending messages to contacts</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Maintaining the security of your WhatsApp Business account</li>
              <li>Any violations of Meta's policies or terms of service</li>
            </ul>
            <p className="text-dark-300">
              We help you manage and organize leads, but we do not control the content of messages you send. 
              Any violations of WhatsApp policies may result in suspension or termination of your account and 
              may affect your WhatsApp Business API access.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
            <p className="text-dark-300 mb-4">
              <strong>6.1 Subscription Plans</strong>
            </p>
            <p className="text-dark-300 mb-4">
              Our Service is offered on a subscription basis. By subscribing, you agree to pay the fees associated 
              with your chosen plan. Subscription fees are billed monthly in advance.
            </p>

            <p className="text-dark-300 mb-4">
              <strong>6.2 Free Trial</strong>
            </p>
            <p className="text-dark-300 mb-4">
              We offer a 7-day free trial period. During the trial, you have full access to the Service. 
              No payment information is required to start the trial. At the end of the trial period, you may 
              choose to subscribe to a paid plan or your account will be suspended.
            </p>

            <p className="text-dark-300 mb-4">
              <strong>6.3 Payment Processing</strong>
            </p>
            <p className="text-dark-300 mb-4">
              Payments are processed through secure third-party payment processors. You agree to provide accurate 
              payment information and authorize us to charge your payment method for all fees.
            </p>

            <p className="text-dark-300 mb-4">
              <strong>6.4 Price Changes</strong>
            </p>
            <p className="text-dark-300">
              We reserve the right to modify our pricing at any time. Price changes will be communicated to you 
              at least 30 days in advance. Price changes will apply to your next billing cycle.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">7. Refund Policy</h2>
            <p className="text-dark-300 mb-4">
              <strong>7.1 7-Day Money-Back Guarantee</strong>
            </p>
            <p className="text-dark-300 mb-4">
              We offer a 7-day money-back guarantee from the date of your first paid subscription. If you are 
              not satisfied with our Service within 7 days of your first payment, contact us at {CONTACT.support} 
              to request a full refund.
            </p>

            <p className="text-dark-300 mb-4">
              <strong>7.2 Refund Processing</strong>
            </p>
            <p className="text-dark-300 mb-4">
              Refunds will be processed to the original payment method within 5-10 business days. Once processed, 
              your account will be suspended and you will lose access to the Service.
            </p>

            <p className="text-dark-300 mb-4">
              <strong>7.3 No Refunds After 7 Days</strong>
            </p>
            <p className="text-dark-300">
              After the 7-day guarantee period, subscription fees are non-refundable. However, you may cancel 
              your subscription at any time, and you will continue to have access until the end of your current 
              billing period.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">8. Account Termination</h2>
            <p className="text-dark-300 mb-4">
              <strong>8.1 Termination by You</strong>
            </p>
            <p className="text-dark-300 mb-4">
              You may cancel your account at any time through your account settings or by contacting us. 
              Upon cancellation, your account will remain active until the end of your current billing period.
            </p>

            <p className="text-dark-300 mb-4">
              <strong>8.2 Termination by Us</strong>
            </p>
            <p className="text-dark-300 mb-4">
              We may suspend or terminate your account immediately if:
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
              <li>You violate these Terms of Service</li>
              <li>You violate Meta's WhatsApp Business Policy</li>
              <li>You engage in illegal activities</li>
              <li>You fail to pay subscription fees</li>
              <li>We are required to do so by law</li>
            </ul>

            <p className="text-dark-300 mb-4">
              <strong>8.3 Effect of Termination</strong>
            </p>
            <p className="text-dark-300">
              Upon termination, your right to use the Service will immediately cease. We may delete your account 
              and data in accordance with our Privacy Policy. We are not liable for any loss of data resulting 
              from termination.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
            <p className="text-dark-300 mb-4">
              The Service and its original content, features, and functionality are owned by {BRAND.company} and 
              are protected by international copyright, trademark, patent, trade secret, and other intellectual 
              property laws.
            </p>
            <p className="text-dark-300">
              You may not copy, modify, distribute, sell, or lease any part of our Service or included software, 
              nor may you reverse engineer or attempt to extract the source code of that software, unless laws 
              prohibit those restrictions or you have our written permission.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p className="text-dark-300 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, {BRAND.company} SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, 
              WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE 
              LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-4">
              <li>Your use or inability to use the Service</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from the Service</li>
              <li>Any bugs, viruses, trojan horses, or the like, which may be transmitted to or through the Service</li>
              <li>Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content</li>
            </ul>
            <p className="text-dark-300">
              Our total liability to you for all claims arising from or related to the Service shall not exceed 
              the amount you paid to us in the 12 months preceding the claim.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">11. Dispute Resolution</h2>
            <p className="text-dark-300 mb-4">
              <strong>11.1 Governing Law</strong>
            </p>
            <p className="text-dark-300 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India, without 
              regard to its conflict of law provisions.
            </p>

            <p className="text-dark-300 mb-4">
              <strong>11.2 Dispute Resolution Process</strong>
            </p>
            <p className="text-dark-300">
              Any disputes arising out of or relating to these Terms or the Service shall first be addressed 
              through good faith negotiations. If a resolution cannot be reached, disputes shall be resolved 
              through binding arbitration in India in accordance with the Arbitration and Conciliation Act, 2015.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
            <p className="text-dark-300 mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, 
              we will provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            <p className="text-dark-300">
              What constitutes a material change will be determined at our sole discretion. By continuing to 
              access or use our Service after those revisions become effective, you agree to be bound by the 
              revised terms.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
            <p className="text-dark-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-none space-y-2 text-dark-300">
              <li><strong>Email:</strong> <a href={`mailto:${CONTACT.general}`} className="text-primary-400 hover:text-primary-300">{CONTACT.general}</a></li>
              <li><strong>Support:</strong> <a href={`mailto:${CONTACT.support}`} className="text-primary-400 hover:text-primary-300">{CONTACT.support}</a></li>
              <li><strong>Company:</strong> {BRAND.company}</li>
              <li><strong>Location:</strong> India (Serving businesses worldwide)</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

