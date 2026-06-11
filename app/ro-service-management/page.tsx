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
  Wrench,
  CalendarCheck,
  MessageCircle,
  History,
  MapPin,
  Users,
} from 'lucide-react'

const PATH = '/ro-service-management'
const TITLE = 'RO Service Management Software for Water Purifier Dealers | LeadBuddie'
const DESCRIPTION =
  'Service management software for RO and water purifier dealers. Schedule service visits from WhatsApp, track complaints, keep full customer and visit history, and never miss a callback. Free to start.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'RO service management software, water purifier service software, RO service CRM, water purifier complaint management, service visit scheduling software India, RO service tracking WhatsApp',
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
    question: 'What is RO service management software?',
    answer:
      'RO service management software helps water purifier dealers handle service requests, schedule visits, track complaints, and keep a full service history for every customer. LeadBuddie does this automatically on WhatsApp, responding in under 10 seconds.',
  },
  {
    question: 'How does Buddie handle customer complaints?',
    answer:
      'Buddie is your AI employee. When a customer messages about a leak, noise, or malfunction, Buddie identifies the complaint and routes it directly to your human review queue. It pauses automated replies for that lead and ensures you take over.',
  },
  {
    question: 'Can I schedule service visits from WhatsApp chat?',
    answer:
      'Yes. When a customer requests a visit, you or your team can book it on their record in one tap from their chat. The confirmation is automatically sent back in the same thread.',
  },
  {
    question: 'Does it keep a full service history per customer?',
    answer:
      'Yes. Every customer’s record shows their installed model, warranty, AMC plan, past service visits, and notes, giving your office team and on-field technicians complete context.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'LeadBuddie starts with a Free plan. Paid plans featuring Buddie AI, routing, and campaigns start at ₹999/month. Every new signup includes a 30-day free trial of the Growth plan.',
  },
]

export default function RoServiceManagementPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'RO Service Management Software',
            serviceType: 'Service management software for RO and water purifier dealers',
            description: DESCRIPTION,
            url: `${SITE_URL}${PATH}`,
          }),
          softwareApplicationSchema({
            name: 'LeadBuddie — RO Service Management',
            description: DESCRIPTION,
            url: `${SITE_URL}${PATH}`,
          }),
          faqSchema(FAQ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'RO Service Management', path: PATH },
          ]),
        ]}
      />
      <NicheLanding
        eyebrow="Service & complaints, organised"
        h1="RO service management that runs from WhatsApp"
        intro="Turn every service request and complaint into a scheduled visit with full customer history attached. Buddie replies under 10 seconds, routes urgent complaints to you, and updates records in a tap."
        trustPoints={[
          'Instant 10s reply & routing',
          'Book visits from chat',
          'Full service history drawers',
        ]}
        problem={{
          heading: 'Service requests scattered across phones and chats are how dealers lose customers.',
          body: [
            'A customer messages about a noisy filter. It gets seen, then buried. The visit is never booked, or it’s booked but the technician shows up with no history. Small misses like these are why customers don’t renew.',
            'LeadBuddie turns every request into a scheduled visit on the customer’s record, with their full history attached — so service feels organised and customers stay.',
          ],
          stat: { value: '1 tap', label: 'from a WhatsApp complaint to a booked service visit on the customer record' },
        }}
        featuresHeading="Service operations, all in one place"
        features={[
          { icon: MessageCircle, title: 'Instant WhatsApp replies', desc: 'Buddie replies in under 10 seconds, 24/7. Friendly template-based answers keep prospects warm.' },
          { icon: CalendarCheck, title: 'One-tap visit scheduling', desc: 'Book the visit on the customer’s record in a tap, with date, time and reason captured.' },
          { icon: History, title: 'Full service history', desc: 'Installed model, install date, AMC, past visits and notes — all on one customer drawer.' },
          { icon: Wrench, title: 'Complaint routing', desc: 'Urgent complaints are flagged and sent to your review desk, stopping automated replies for human takeover.' },
          { icon: Users, title: 'Team assignment & roles', desc: 'Assign visits and chats so any technician or staff member can pick up with full context.' },
          { icon: MapPin, title: 'Dashboard suggestions', desc: 'See exactly which follow-up play or pending service task needs your attention today.' },
        ]}
        stepsHeading="From service request to satisfied, renewing customer"
        steps={[
          { title: 'Customer messages on WhatsApp', desc: 'An enquiry, service request, or complaint lands on your number. Buddie replies instantly (under 10 seconds).' },
          { title: 'Complaints escalated to you', desc: 'If the customer mentions a malfunction or asks for a refund, Buddie pauses and alerts you for human takeover.' },
          { title: 'Book the visit in one tap', desc: 'Schedule the service visit directly from the chat. The confirmation is sent back to the customer automatically.' },
          { title: 'Technician arrives with full history', desc: 'The technician has the model, install date, past visits, and AMC history on their screen — zero guess work.' },
        ]}
        faq={FAQ}
        related={[
          { label: 'Water purifier dealer CRM', href: '/water-purifier-crm' },
          { label: 'AMC renewal software', href: '/amc-renewal-software' },
          { label: 'Read the Mastec story', href: '/case-study' },
        ]}
        ctaHeading="Make every service visit organised"
        ctaSub="Start free on your existing WhatsApp number. Book your first visit from chat today."
      />
    </>
  )
}
