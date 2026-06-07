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
  'The CRM built for water purifier and RO dealers in India. Capture WhatsApp leads, convert them to customers, and track every AMC renewal, service visit and callback from one workspace. Free to start.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'water purifier dealer CRM, RO dealer CRM, water purifier CRM software, RO dealer lead management, water purifier business software India, Kent Aquaguard dealer software, WhatsApp CRM for water purifier',
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
      'LeadBuddie is a CRM built specifically for water purifier and RO dealers. Unlike generic CRMs, it runs your full dealer lifecycle — WhatsApp lead capture, customer records with installed model and install date, automated AMC renewal reminders, service visit scheduling and callbacks — on the WhatsApp number your customers already message.',
  },
  {
    question: 'How does Buddie automate AMC renewals?',
    answer:
      'Buddie is your AI sales employee. He automatically sends friendly, Meta-compliant WhatsApp messages to customers 60, 30, 15, and 7 days before their AMC expires. He can also reactivate lapsed customers in one tap.',
  },
  {
    question: 'Is it safe to let an AI reply to my customers?',
    answer:
      'Yes, you are in complete control. Buddie has three trust modes: Watch Mode (drafts replies but sends nothing until you say so — free on all plans), Approval Mode (you review and tap approve in one click), and Auto Mode (fully automated). Plus, pricing guardrails prevent him from inventing numbers, and manual replies trigger a human takeover automatically.',
  },
  {
    question: 'Can customers request service visits on WhatsApp?',
    answer:
      'Yes. When a customer messages about a filter issue or service request, you or Buddie can log it, and you can schedule a service visit in one tap. The history is saved to the customer drawer so your technicians always have context.',
  },
  {
    question: 'How much does LeadBuddie cost?',
    answer:
      'LeadBuddie starts with a Free plan. Paid plans featuring Buddie AI, automated AMC engines, campaigns, and team seats start at ₹999/month. You can start a free trial of any plan without a credit card.',
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
        intro="Capture every WhatsApp enquiry, convert it to a tracked customer, and automate AMC renewals — all on the number your customers already message. Purpose-built for RO and water purifier dealerships in India."
        trustPoints={[
          'Instant 10s WhatsApp reply',
          'Automated AMC reminders',
          'Watch/Approval modes for safety',
        ]}
        problem={{
          heading: 'Generic CRMs weren’t built for how a water purifier dealership actually runs.',
          body: [
            'You don’t just sell units — you install them, service them, and renew their AMC year after year. A normal CRM tracks a “deal” and forgets the customer. Your business lives in the years after the sale.',
            'LeadBuddie tracks the whole lifecycle: the WhatsApp enquiry, the installed model and date, the AMC plan, every service visit, and every renewal due — so repeat revenue stops leaking.',
          ],
          stat: { value: '25–40%', label: 'of AMC contracts walk out the door every year when nobody follows up' },
        }}
        featuresHeading="Everything a water purifier dealership needs in one workspace"
        features={[
          { icon: MessageCircle, title: 'Instant WhatsApp replies', desc: 'Buddie replies in under 10 seconds, 24/7. Never miss an enquiry from a hot lead, even at 2 AM or on Sundays.' },
          { icon: Users, title: 'Customer 360 records', desc: 'Installed model, install date, warranty, and AMC plan — the full history stored on one interactive drawer.' },
          { icon: RefreshCcw, title: 'Automated AMC reminders', desc: 'Buddie messages every customer 60, 30, 15, and 7 days before their AMC expires. Recurring revenue stays recurring.' },
          { icon: Wrench, title: 'Service visits & handoff', desc: 'Book visits from chat in one tap. Complaints and hot leads are routed to your review queue automatically.' },
          { icon: PhoneCall, title: 'Callbacks & lapsed win-backs', desc: '“Call me next week” schedules a callback. Reactivate lapsed AMCs with a one-tap reactivation message.' },
          { icon: IndianRupee, title: 'Dashboard suggestions', desc: 'See exactly which play or job to turn on for leads waiting today. Activate plays with a single tap.' },
        ]}
        stepsHeading="From WhatsApp message to renewing customer"
        steps={[
          { title: 'A customer messages your WhatsApp', desc: 'An enquiry, complaint, or AMC question lands on your normal number. Buddie replies instantly (under 10 seconds).' },
          { title: 'Convert the lead to a customer', desc: 'Promote the lead to a customer with the installed model and AMC plan. Buddie reviews chats and flags untracked users.' },
          { title: 'Buddie handles reminders and follow-ups', desc: 'Watch/Approval modes let you review drafts before they send. Buddie nudges quiet leads and runs AMC reminder sequences.' },
          { title: 'Repeat revenue is recovered', desc: 'Lapsed contracts are reactivated and renewals are automated, so your recurring service revenue grows on autopilot.' },
        ]}
        faq={FAQ}
        related={[
          { label: 'AMC renewal software', href: '/amc-renewal-software' },
          { label: 'RO service management', href: '/ro-service-management' },
          { label: 'AMC renewals guide', href: '/blog/water-purifier-dealer-amc-renewals-2026-guide' },
        ]}
        ctaHeading="Run your water purifier dealership on one workspace"
        ctaSub="Start free on your existing WhatsApp number. No credit card required."
      />
    </>
  )
}
