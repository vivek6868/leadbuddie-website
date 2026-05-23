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
  IndianRupee,
  Filter,
} from 'lucide-react'

const PATH = '/amc-renewal-software'
const TITLE = 'AMC Renewal Software for Water Purifier Dealers | LeadBuddie'
const DESCRIPTION =
  'AMC renewal tracking and reminder software for water purifier and RO dealers. Surface every contract before it lapses, send WhatsApp reminders, schedule callbacks, and stop losing renewal revenue. Free to start.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'AMC renewal software, water purifier AMC reminder software, AMC management software India, RO AMC tracking, water purifier annual maintenance contract software, AMC renewal reminder WhatsApp',
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
      'AMC renewal software tracks every customer’s annual maintenance contract, surfaces the ones due for renewal, and helps you follow up — by reminder, call or WhatsApp — before they lapse. LeadBuddie does this on the WhatsApp number your customers already use.',
  },
  {
    question: 'How does LeadBuddie remind me about AMC renewals?',
    answer:
      'Every AMC sits on a renewals page sorted by urgency — due this week, next 14 days, next 30, callbacks scheduled, or lapsed. You see exactly who to follow up with and when, with each customer’s notes attached.',
  },
  {
    question: 'Can it send renewal reminders on WhatsApp?',
    answer:
      'Yes. Because LeadBuddie runs on your WhatsApp Business number, renewal follow-ups happen in the same thread the customer already knows, using approved templates and AI-assisted replies you stay in control of.',
  },
  {
    question: 'How much AMC revenue do dealers lose to missed renewals?',
    answer:
      'Most water purifier dealers we talk to lose 25–40% of AMC contracts every year simply because nobody followed up in time. At ₹1,999–₹3,500 per contract, that is the most fixable revenue leak in the business.',
  },
  {
    question: 'How much does AMC renewal software cost?',
    answer:
      'LeadBuddie starts free, with paid plans from ₹499/month. You can begin tracking renewals at no cost and upgrade as you add WhatsApp inbox, AI replies and campaigns.',
  },
]

export default function AmcRenewalSoftwarePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'AMC Renewal Software',
            serviceType: 'AMC renewal tracking and reminder software for water purifier dealers',
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
        eyebrow="Stop losing renewal revenue"
        h1="AMC renewal software that never lets a contract lapse"
        intro="Surface every water purifier AMC before it expires, follow up on WhatsApp, and schedule callbacks so renewals actually close. The cheapest sale in your business shouldn’t walk out the door."
        trustPoints={[
          'WhatsApp renewal reminders',
          'Sorted by urgency',
          'Callbacks never forgotten',
        ]}
        problem={{
          heading: 'The AMC renewal is the cheapest sale you have — and the one most dealers lose.',
          body: [
            'The customer already trusts the brand, already paid for the unit, already knows your team. Renewing their AMC should be effortless. Instead it slips: a reminder nobody sent, a callback nobody made, a contract that quietly lapsed.',
            'LeadBuddie puts every contract on a renewals page sorted by urgency, with WhatsApp follow-up built in — so the renewal window never passes unnoticed.',
          ],
          stat: { value: '₹2–3 L', label: 'a month in renewals leaks out of a typical dealership when follow-up is manual' },
        }}
        featuresHeading="A renewals workflow that runs itself"
        features={[
          { icon: RefreshCcw, title: 'Every AMC tracked', desc: 'Each customer’s contract end-date lives on one page — nothing depends on memory or a spreadsheet.' },
          { icon: Filter, title: 'Sorted by urgency', desc: 'Filter by due this week, next 14, next 30, callbacks scheduled or lapsed. Always know who to chase first.' },
          { icon: BellRing, title: 'WhatsApp reminders', desc: 'Follow up in the thread the customer already knows, with approved templates and AI-assisted replies.' },
          { icon: CalendarClock, title: 'Callback scheduling', desc: '“Call me after the 20th” becomes a real follow-up on the right date with the customer’s note attached.' },
          { icon: PhoneCall, title: 'Nothing forgotten', desc: 'Promised callbacks resurface automatically — no renewal goes cold because a follow-up got lost.' },
          { icon: IndianRupee, title: 'Revenue recovered', desc: 'See renewed contracts and recovered revenue roll up on the dashboard, month over month.' },
        ]}
        stepsHeading="How LeadBuddie closes more renewals"
        steps={[
          { title: 'Import or convert your customers', desc: 'Each customer carries their installed model, install date and AMC plan, so the renewal date is known.' },
          { title: 'Renewals surface before they lapse', desc: 'The renewals page sorts every contract by urgency — you act before the window closes, not after.' },
          { title: 'Follow up on WhatsApp', desc: 'Send the reminder, answer questions, and confirm the plan — all in the customer’s existing chat thread.' },
          { title: 'Schedule the callback, capture the renewal', desc: 'If they need time, schedule a callback with a note; when it’s due, it resurfaces so you close it.' },
        ]}
        faq={FAQ}
        related={[
          { label: 'Water purifier dealer CRM', href: '/water-purifier-crm' },
          { label: 'RO service management', href: '/ro-service-management' },
          { label: 'AMC renewals 2026 guide', href: '/blog/water-purifier-dealer-amc-renewals-2026-guide' },
        ]}
        ctaHeading="Never lose another AMC renewal"
        ctaSub="Start free on your existing WhatsApp number. Track your first renewals today."
      />
    </>
  )
}
