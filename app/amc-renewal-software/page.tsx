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
  'AMC renewal software for water purifier and RO businesses. See whose contract is expiring, follow up on time, track callbacks and record every outcome — so renewals stop quietly lapsing.'

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
      'It keeps every contract date, every customer who is due, every callback and every outcome in one list. With LeadBuddie, Buddie can also write the follow-up message for you once your WhatsApp Business number is connected.',
  },
  {
    question: 'Which businesses can use LeadBuddie for AMC renewals?',
    answer:
      'Right now it is built for water purifier, RO and water-treatment businesses on the Growth or Scale plan. If you are in another service trade, talk to us first — we will tell you honestly whether it fits.',
  },
  {
    question: 'How does LeadBuddie automate AMC renewals?',
    answer:
      'It shows you who is due and writes the follow-up. Whether that message goes out on its own or waits for your approval is up to you — and your WhatsApp Business number has to be connected first.',
  },
  {
    question: 'Is it safe to automate customer reminders?',
    answer:
      'You decide. Buddie can just show you the list, draft each reminder for you to approve with one tap, or send the routine ones itself. Reminders go out from your own WhatsApp Business number using formats WhatsApp has approved.',
  },
  {
    question: 'Can I track manual callbacks?',
    answer:
      'Yes. If a customer says "call me next week," you can schedule a callback in chat. LeadBuddie surfaces callbacks under a dedicated tab on the renewals page, ensuring no client goes forgotten.',
  },
  {
    question: 'How much does LeadBuddie cost?',
    answer:
      'There is a limited free plan, and AMC tools come with the paid plans. Every signup gets a 30-day Growth trial — no card needed.',
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
        intro="See whose contract is expiring, who promised to call back and who has already lapsed — all in one list. Connect WhatsApp when you want the follow-ups going out on their own."
        trustPoints={[
          'One list of who is due',
          'You approve what goes out',
          'WhatsApp optional',
        ]}
        problem={{
          heading: 'The AMC renewal is the cheapest sale you have — and the one most service businesses lose.',
          body: [
            'The customer already trusts you, already paid for the unit or service, and already knows your team. Renewing their AMC should be effortless. Instead, manual reminders get forgotten, callbacks get lost, and contracts quietly lapse.',
            'LeadBuddie keeps every due date, callback and outcome in front of you, and can write the follow-up so your team only has to make the call.',
          ],
        }}
        featuresHeading="Everything you need to hold on to a renewal"
        features={[
          { icon: RefreshCcw, title: 'Who is due, today', desc: 'Every contract nearing its end date moves to the top of the list on its own.' },
          { icon: Filter, title: 'Sorted by urgency', desc: 'Filter by due this week, next 14, next 30, callbacks, or lapsed. Always know who is due next.' },
          { icon: BellRing, title: 'Win back the lapsed ones', desc: 'Customers who let their AMC go get their own follow-up, and you see who comes back.' },
          { icon: CalendarClock, title: 'Callback scheduling', desc: '“Call me after the 20th” becomes a real follow-up on the right date with notes attached.' },
          { icon: PhoneCall, title: 'As hands-off as you like', desc: 'Buddie can just show you the list, ask before every message, or handle the routine ones itself.' },
          { icon: DollarSign, title: 'Know where every one stands', desc: 'Due, call back later, renewed or lapsed — nothing sits in someone’s head.' },
        ]}
        stepsHeading="How a renewal gets saved"
        steps={[
          { title: 'Import or convert your customers', desc: 'Upload your rough Excel list or add customers. Each profile tracks their equipment, contract value and AMC end-date.' },
          { title: 'See who is due', desc: 'As a contract nears its end date, that customer moves to the top of your list.' },
          { title: 'Make the call', desc: 'Work the list yourself, or let Buddie draft the follow-up for you to approve with one tap.' },
          { title: 'Chase the ones who went quiet', desc: 'Callbacks, replies and lapsed customers stay on the list until somebody closes them.' },
        ]}
        faq={FAQ}
        related={[
          { label: 'Water purifier service software', href: '/water-purifier-crm' },
          { label: 'RO service management', href: '/ro-service-management' },
          { label: 'Water purifier service software guide', href: '/blog/water-purifier-service-management-software-guide-2026' },
        ]}
        loopItems={['An AMC is about to expire', 'Buddie brings up the customer and drafts the follow-up', 'Your team calls and records what they said']}
        ctaHeading="Bring your AMC follow-up into one workflow"
        ctaSub="Start with the renewals list. Turn on automatic reminders once your data is clean and you are comfortable."
      />
    </>
  )
}
