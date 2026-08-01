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
  RefreshCcw,
  BellRing,
  CalendarClock,
  PhoneCall,
  DollarSign,
  Filter,
} from 'lucide-react'

const PATH = '/amc-renewal-software'
const TITLE = 'Water Purifier AMC Renewal Software for WhatsApp | LeadBuddie'
const DESCRIPTION =
  'AMC renewal tracking and WhatsApp reminder software for eligible water purifier and RO businesses. Organise expiry dates, callbacks, approved reminder sequences and lapsed-account follow-up.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'AMC renewal software India, annual maintenance contract tracking software, AMC contract management software, AMC card management, AMC reminder app India, AMC renewal reminder WhatsApp, AC AMC management software, water purifier AMC reminder software, RO AMC tracking, pest control AMC software',
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
    question: 'What is AMC renewal software?',
    answer:
      'AMC renewal software keeps contract dates, due accounts, callbacks and follow-up status visible. For eligible water-treatment businesses, LeadBuddie can prepare WhatsApp reminder sequences on the connected business number.',
  },
  {
    question: 'Which businesses can use LeadBuddie for AMC renewals?',
    answer:
      'The current AMC renewal workflow is for eligible water purifier, RO and water-treatment businesses on Growth or Scale. Other industries should contact us before assuming the workflow is available for their account.',
  },
  {
    question: 'How does LeadBuddie automate AMC renewals?',
    answer:
      'LeadBuddie can prepare reminders 60, 30, 15 and 7 days before expiry. Sending depends on the selected operating mode, approved templates, customer consent and WhatsApp eligibility.',
  },
  {
    question: 'Is it safe to automate customer reminders?',
    answer:
      'Choose Watch, Approval or Auto for eligible actions. Reminder sends still depend on approved templates, customer consent, account health and WhatsApp policy.',
  },
  {
    question: 'Can I track manual callbacks?',
    answer:
      'Yes. If a customer says "call me next week," you can schedule a callback in chat. LeadBuddie surfaces callbacks under a dedicated tab on the renewals page, ensuring no client goes forgotten.',
  },
  {
    question: 'How much does LeadBuddie cost?',
    answer:
      'LeadBuddie has a limited Free CRM plan. Water-treatment AMC tools are on Growth and Scale, starting at ₹2,499/month. Every signup receives a 30-day Growth trial with no card required.',
  },
]

export default function AmcRenewalSoftwarePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'AMC Renewal Software',
            serviceType: 'AMC renewal tracking and reminder software for service businesses',
            description: DESCRIPTION,
            url: `${SITE_URL}${PATH}`,
          }),
          softwareApplicationSchema({
            name: 'LeadBuddie — AMC Renewal Software',
            description: DESCRIPTION,
            url: `${SITE_URL}${PATH}`,
          }),
          faqSchema(FAQ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'AMC Renewal Software', path: PATH },
          ]),
        ]}
      />
      <NicheLanding
        eyebrow="Keep renewal work visible"
        h1="Water purifier AMC renewal workflows on WhatsApp"
        intro="For eligible water purifier and RO businesses: organise expiring contracts, prepare approved reminder sequences, record callbacks and follow up on lapsed accounts from one workspace."
        trustPoints={[
          '60/30/15/7-day reminder workflow',
          'Watch, Approval or Auto controls',
          'Lapsed-account follow-up',
        ]}
        problem={{
          heading: 'The AMC renewal is the cheapest sale you have — and the one most service businesses lose.',
          body: [
            'The customer already trusts you, already paid for the unit or service, and already knows your team. Renewing their AMC should be effortless. Instead, manual reminders get forgotten, callbacks get lost, and contracts quietly lapse.',
            'LeadBuddie keeps due dates and callbacks visible and can prepare reminders 60, 30, 15 and 7 days before expiry when the plan, templates and messaging conditions are in place.',
          ],
        }}
        featuresHeading="A controlled renewal workflow for water-treatment teams"
        features={[
          { icon: RefreshCcw, title: '60/30/15/7-day sequences', desc: 'Prepare approved WhatsApp reminders at the configured intervals before expiry.' },
          { icon: Filter, title: 'Sorted by urgency', desc: 'Filter by due this week, next 14, next 30, callbacks, or lapsed. Always know who is due next.' },
          { icon: BellRing, title: 'Lapsed-account follow-up', desc: 'Prepare a reactivation play for eligible lapsed accounts and track the customer response.' },
          { icon: CalendarClock, title: 'Callback scheduling', desc: '“Call me after the 20th” becomes a real follow-up on the right date with notes attached.' },
          { icon: PhoneCall, title: 'Owner-set operating mode', desc: 'Use Watch, Approval or Auto based on the messages and controls appropriate for your business.' },
          { icon: DollarSign, title: 'Renewal status visibility', desc: 'Track due, callback, renewed and lapsed records so the team can see what needs action.' },
        ]}
        stepsHeading="How the renewal workflow operates"
        steps={[
          { title: 'Import or convert your customers', desc: 'Upload your rough Excel list or add customers. Each profile tracks their equipment, contract value and AMC end-date.' },
          { title: 'Prepare approved reminder messages', desc: 'When a renewal date gets close, the configured sequence prepares the applicable WhatsApp template.' },
          { title: 'Review or send when eligible', desc: 'Use Approval for review or Auto where the plan, templates, consent and account conditions allow.' },
          { title: 'Follow up on replies and lapsed accounts', desc: 'Callbacks, replies and renewal status stay visible so your team can complete the commercial action.' },
        ]}
        faq={FAQ}
        related={[
          { label: 'Water purifier dealer CRM', href: '/water-purifier-crm' },
          { label: 'RO service management', href: '/ro-service-management' },
        ]}
        ctaHeading="Bring your AMC follow-up into one workflow"
        ctaSub="Start with a 30-day Growth trial. AMC automation is for eligible water-treatment businesses and requires setup."
      />
    </>
  )
}
