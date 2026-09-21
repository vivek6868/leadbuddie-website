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
const TITLE = 'Water Purifier AMC Renewal Operations Software | LeadBuddie'
const DESCRIPTION =
  'Agentic AMC renewal operations for water purifier and RO businesses. Keep contract context, due work, callbacks, outcomes and optional customer messaging in one system.'

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
      'AMC renewal software keeps contract dates, due accounts, callbacks, follow-up status and outcomes visible. LeadBuddie can also prepare eligible customer messages when a channel is connected and configured.',
  },
  {
    question: 'Which businesses can use LeadBuddie for AMC renewals?',
    answer:
      'The current AMC renewal workflow is for eligible water purifier, RO and water-treatment businesses on Growth or Scale. Other industries should contact us before assuming the workflow is available for their account.',
  },
  {
    question: 'How does LeadBuddie automate AMC renewals?',
    answer:
      'LeadBuddie can surface due renewal work and prepare configured follow-ups. Sending depends on the selected operating mode, approved templates, customer consent and messaging eligibility.',
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
      'LeadBuddie has a limited Free plan. Water-treatment AMC tools are available on eligible paid plans. Every signup receives a 30-day Growth trial with no card required.',
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
        h1="AMC renewal work that does not disappear"
        intro="Organise expiring contracts, due work, callbacks, renewal outcomes and lapsed accounts from one operating workspace. Connect WhatsApp only when you want eligible customer messaging."
        trustPoints={[
          'Due-work renewal queue',
          'Watch, Approval or Auto controls',
          'WhatsApp messaging is optional',
        ]}
        problem={{
          heading: 'The AMC renewal is the cheapest sale you have — and the one most service businesses lose.',
          body: [
            'The customer already trusts you, already paid for the unit or service, and already knows your team. Renewing their AMC should be effortless. Instead, manual reminders get forgotten, callbacks get lost, and contracts quietly lapse.',
            'LeadBuddie keeps due dates, callbacks and outcomes visible, then can prepare configured messages when the plan, templates and messaging conditions are in place.',
          ],
        }}
        featuresHeading="A controlled renewal workflow for water-treatment teams"
        features={[
          { icon: RefreshCcw, title: 'Due-based renewal work', desc: 'Surface renewal work from real contract dates and the business rules you configure.' },
          { icon: Filter, title: 'Sorted by urgency', desc: 'Filter by due this week, next 14, next 30, callbacks, or lapsed. Always know who is due next.' },
          { icon: BellRing, title: 'Lapsed-account follow-up', desc: 'Prepare a reactivation play for eligible lapsed accounts and track the customer response.' },
          { icon: CalendarClock, title: 'Callback scheduling', desc: '“Call me after the 20th” becomes a real follow-up on the right date with notes attached.' },
          { icon: PhoneCall, title: 'Owner-set operating mode', desc: 'Use Watch, Approval or Auto based on the messages and controls appropriate for your business.' },
          { icon: DollarSign, title: 'Renewal status visibility', desc: 'Track due, callback, renewed and lapsed records so the team can see what needs action.' },
        ]}
        stepsHeading="How the renewal workflow operates"
        steps={[
          { title: 'Import or convert your customers', desc: 'Upload your rough Excel list or add customers. Each profile tracks their equipment, contract value and AMC end-date.' },
          { title: 'Surface due renewal work', desc: 'When a real contract approaches expiry, the operating queue shows what needs attention.' },
          { title: 'Review the next action', desc: 'Work manually from the workspace or prepare eligible messages under the selected mode and business controls.' },
          { title: 'Follow up on replies and lapsed accounts', desc: 'Callbacks, replies and renewal status stay visible so your team can complete the commercial action.' },
        ]}
        faq={FAQ}
        related={[
          { label: 'Water treatment operations', href: '/water-purifier-crm' },
          { label: 'RO service management', href: '/ro-service-management' },
          { label: 'Water purifier service software guide', href: '/blog/water-purifier-service-management-software-guide-2026' },
        ]}
        loopItems={['A real contract becomes due', 'Buddie prepares the renewal context', 'Your team completes and records the outcome']}
        ctaHeading="Bring your AMC follow-up into one workflow"
        ctaSub="Start with the renewal worklist. Add eligible messaging automation when your data and operating rules are ready."
      />
    </>
  )
}
