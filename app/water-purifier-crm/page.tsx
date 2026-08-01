import type { Metadata } from 'next'
import { NicheLanding } from '@/components/landing/NicheLanding'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  softwareApplicationSchema,
  SITE_URL,
} from '@/lib/seo'
import {
  MessageCircle,
  Users,
  RefreshCcw,
  PhoneCall,
  Wrench,
  IndianRupee,
} from 'lucide-react'

const PATH = '/water-purifier-crm'
const TITLE = 'Water Purifier Dealer CRM — Run Leads, Customers & AMC on WhatsApp | LeadBuddie'
const DESCRIPTION =
  'CRM for water purifier and RO dealers in India. Organise WhatsApp enquiries, customer records, service requests, callbacks and eligible AMC renewal workflows in one workspace.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'AI sales employee for RO dealers, WhatsApp AI employee water purifier, water purifier dealer CRM, RO dealer CRM, RO service CRM India, water purifier CRM software, RO dealer lead management, RO billing software, Kent Aquaguard dealer software, RO complaint software, WhatsApp CRM for water purifier, water purifier business software India',
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    type: 'website',
  },
}

const FAQ = [
  {
    question: 'What is the best CRM for water purifier dealers in India?',
    answer:
      'LeadBuddie brings WhatsApp enquiries, customer records, installed-product context, service requests, callbacks and eligible AMC workflows into one workspace for water purifier and RO dealers.',
  },
  {
    question: 'How does Buddie automate AMC renewals?',
    answer:
      'For eligible water-treatment businesses on Growth or Scale, LeadBuddie can prepare reminders 60, 30, 15 and 7 days before expiry. Sending depends on approved templates, the selected mode and WhatsApp eligibility.',
  },
  {
    question: 'Is it safe to let an AI reply to my customers?',
    answer:
      'Choose Watch, Approval or Auto for eligible Buddie actions. The business knowledge you approve, pricing guardrails and human takeover controls define where Buddie should respond and where your team should decide.',
  },
  {
    question: 'Can customers request service visits on WhatsApp?',
    answer:
      'Buddie can collect the details for a service-visit request. Your team reviews availability, confirms the visit and keeps the customer context on the record.',
  },
  {
    question: 'How much does LeadBuddie cost?',
    answer:
      'LeadBuddie has a limited Free CRM plan. Paid AI plans start at ₹1,499/month; water-treatment AMC tools are on Growth and Scale. Every signup starts with a 30-day Growth trial with no card required.',
  },
]

export default function WaterPurifierCrmPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Water Purifier Dealer CRM',
            serviceType: 'CRM software for water purifier and RO dealers',
            description: DESCRIPTION,
            url: `${SITE_URL}${PATH}`,
          }),
          softwareApplicationSchema({
            name: 'LeadBuddie — Water Purifier Dealer CRM',
            description: DESCRIPTION,
            url: `${SITE_URL}${PATH}`,
          }),
          faqSchema(FAQ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Water Purifier Dealer CRM', path: PATH },
          ]),
        ]}
      />
      <NicheLanding
        eyebrow="Built for water purifier & RO dealers"
        h1="The CRM built for water purifier dealers"
        intro="Organise WhatsApp enquiries, customer records, service requests and eligible AMC renewal workflows on the number your customers already use. Purpose-built for RO and water purifier dealerships in India."
        trustPoints={[
          'Owner-set WhatsApp replies',
          'AMC workflows on eligible plans',
          'Watch, Approval or Auto controls',
        ]}
        problem={{
          heading: 'Generic CRMs weren’t built for how a water purifier dealership actually runs.',
          body: [
            'You don’t just sell units — you install them, service them, and renew their AMC year after year. A normal CRM tracks a “deal” and forgets the customer. Your business lives in the years after the sale.',
            'LeadBuddie keeps the enquiry, installed-product details, service context and renewal dates visible so your team can work from the same record.',
          ],
        }}
        featuresHeading="Everything a water purifier dealership needs in one workspace"
        features={[
          { icon: MessageCircle, title: 'Configured WhatsApp replies', desc: 'When enabled and eligible, Buddie can answer from the business information and operating rules you approved.' },
          { icon: Users, title: 'Customer 360 records', desc: 'Installed model, install date, warranty, and AMC plan — the full history stored on one interactive drawer.' },
          { icon: RefreshCcw, title: 'Eligible AMC reminders', desc: 'Growth and Scale can prepare 60, 30, 15 and 7-day reminders when the water-treatment workflow and templates are configured.' },
          { icon: Wrench, title: 'Service requests & handoff', desc: 'Collect visit details from chat, then let your team confirm availability and handle complaints that need judgment.' },
          { icon: PhoneCall, title: 'Callbacks & lapsed win-backs', desc: '“Call me next week” schedules a callback. Reactivate lapsed AMCs with a one-tap reactivation message.' },
          { icon: IndianRupee, title: 'Dashboard suggestions', desc: 'See exactly which play or job to turn on for leads waiting today. Activate plays with a single tap.' },
        ]}
        stepsHeading="From WhatsApp message to renewing customer"
        steps={[
          { title: 'A customer messages your WhatsApp', desc: 'A supported enquiry, complaint or AMC question appears on the connected business number.' },
          { title: 'Convert the lead to a customer', desc: 'Promote the lead to a customer with the installed model and AMC plan. Buddie reviews chats and flags untracked users.' },
          { title: 'Choose how reminders and follow-ups run', desc: 'Use Approval for review or Auto for eligible configured messages. Templates, consent and WhatsApp rules still apply.' },
          { title: 'Your team completes the renewal', desc: 'Replies, callbacks and renewal status remain visible so a person can confirm the final commercial action.' },
        ]}
        faq={FAQ}
        related={[
          { label: 'AMC renewal software', href: '/amc-renewal-software' },
          { label: 'RO service management', href: '/ro-service-management' },
          { label: 'AMC renewals guide', href: '/blog/water-purifier-dealer-amc-renewals-2026-guide' },
        ]}
        ctaHeading="Run your water purifier dealership on one workspace"
        ctaSub="Start with a 30-day Growth trial. Connect WhatsApp during setup; no credit card required."
      />
    </>
  )
}
