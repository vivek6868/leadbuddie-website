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
const TITLE = 'AMC Renewal Software — Automate Renewals on WhatsApp | LeadBuddie'
const DESCRIPTION =
  'AMC renewal tracking and reminder software for service businesses — water purifiers, AC & HVAC, appliances, pest control, CCTV and more. Surface every contract before it lapses, send WhatsApp reminders, and stop losing renewal revenue. Free to start.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'AMC renewal software, AMC management software India, annual maintenance contract software, AMC renewal reminder WhatsApp, AC AMC management software, appliance service AMC tracking, pest control AMC software, water purifier AMC reminder software, RO AMC tracking',
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
      'AMC renewal software tracks every customer’s annual maintenance contract, surfaces the ones due for renewal, and helps you follow up before they lapse. LeadBuddie does this automatically on WhatsApp using your official business number.',
  },
  {
    question: 'Which businesses can use LeadBuddie for AMC renewals?',
    answer:
      'Any business that earns recurring revenue from annual maintenance contracts — water purifier and RO dealers, AC sales & service, appliance repair, pest control, CCTV & security, solar, lifts and more. The renewal engine is the same everywhere: contracts with end dates, automated WhatsApp reminders, callbacks and win-backs. Pick the business type closest to yours at signup, and our team will help you set it up for your industry.',
  },
  {
    question: 'How does LeadBuddie automate AMC renewals?',
    answer:
      'Buddie is your AI employee. He automatically sends friendly, Meta-compliant WhatsApp reminders to your customers at key intervals: 60, 30, 15, and 7 days before their AMC expires. He can also reactivate lapsed contracts with a single tap.',
  },
  {
    question: 'Is it safe to automate customer reminders?',
    answer:
      'Yes. LeadBuddie has three trust modes: Watch Mode (drafts but sends nothing until you say so), Approval Mode (you review drafts and tap to approve), and Auto Mode (fully automated). Pricing guardrails prevent him from inventing numbers.',
  },
  {
    question: 'Can I track manual callbacks?',
    answer:
      'Yes. If a customer says "call me next week," you can schedule a callback in chat. LeadBuddie surfaces callbacks under a dedicated tab on the renewals page, ensuring no client goes forgotten.',
  },
  {
    question: 'How much does LeadBuddie cost?',
    answer:
      'LeadBuddie starts with a Free plan. Paid plans featuring the automated AMC renewal engine, campaigns, and AI agents start at ₹999/month. Every new signup includes a 30-day free trial of the Growth plan.',
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
        eyebrow="Stop losing renewal revenue"
        h1="AMC renewal software that never lets a contract lapse"
        intro="Automate AMC renewals on WhatsApp — for water purifier dealers, AC & appliance service, pest control, CCTV and every business that runs annual maintenance contracts. Surface expiring contracts, run auto-reminder sequences, and win back lapsed customers."
        trustPoints={[
          'Automated WhatsApp reminders',
          'Watch/Approval safety modes',
          'One-tap lapsed AMC win-backs',
        ]}
        problem={{
          heading: 'The AMC renewal is the cheapest sale you have — and the one most service businesses lose.',
          body: [
            'The customer already trusts you, already paid for the unit or service, and already knows your team. Renewing their AMC should be effortless. Instead, manual reminders get forgotten, callbacks get lost, and contracts quietly lapse.',
            'LeadBuddie automates the entire sequence on WhatsApp, sending reminders 60, 30, 15, and 7 days before expiry. It drafts the perfect message and lets you approve or send on autopilot.',
          ],
          stat: { value: '₹2–3 L', label: 'a month in renewals leaks out of a typical service business when follow-up is manual' },
        }}
        featuresHeading="A renewals workflow that runs on autopilot"
        features={[
          { icon: RefreshCcw, title: '60/30/15/7-day sequences', desc: 'Buddie automatically sends friendly WhatsApp messages to customers at custom intervals before expiry.' },
          { icon: Filter, title: 'Sorted by urgency', desc: 'Filter by due this week, next 14, next 30, callbacks, or lapsed. Always know who is due next.' },
          { icon: BellRing, title: 'One-tap lapsed win-backs', desc: 'Run a reactive campaign to win back customers whose AMCs lapsed in the last 12 months in a single click.' },
          { icon: CalendarClock, title: 'Callback scheduling', desc: '“Call me after the 20th” becomes a real follow-up on the right date with notes attached.' },
          { icon: PhoneCall, title: 'Watch/Approval safety modes', desc: 'Review Buddie’s drafts in your desk before sending. Shift to Auto mode when you feel confident.' },
          { icon: IndianRupee, title: 'Revenue recovered', desc: 'Track renewed contracts and recovered AMC revenue month over month on your dashboard.' },
        ]}
        stepsHeading="How LeadBuddie closes more renewals"
        steps={[
          { title: 'Import or convert your customers', desc: 'Upload your rough Excel list or add customers. Each profile tracks their equipment, contract value and AMC end-date.' },
          { title: 'Buddie drafts reminder messages', desc: 'When a renewal date gets close, Buddie automatically drafts the WhatsApp message and templates.' },
          { title: 'Review or auto-send on WhatsApp', desc: 'Confirm the draft in your Approval Desk, or let Auto Mode handle the sending. All replies are logged.' },
          { title: 'Reactivate lapsed AMC accounts', desc: 'One tap triggers win-back plays for customers who slipped away, instantly recovering lost revenue.' },
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
