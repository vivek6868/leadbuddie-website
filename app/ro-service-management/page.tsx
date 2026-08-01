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
  'Service management software for RO and water purifier dealers. Collect visit requests from WhatsApp, track complaints, callbacks and customer history in one workspace.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'RO service management software, water purifier service software, RO service CRM, RO billing app India, water purifier service register, RO service card app, water purifier complaint management, service visit scheduling software, RO service tracking WhatsApp',
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
      'RO service management software helps water purifier dealers organise service requests, visit details, complaints, callbacks and customer history. LeadBuddie connects that workflow to WhatsApp conversations.',
  },
  {
    question: 'How does Buddie handle customer complaints?',
    answer:
      'Buddie is your AI employee. When a customer messages about a leak, noise, or malfunction, Buddie identifies the complaint and routes it directly to your human review queue. It pauses automated replies for that lead and ensures you take over.',
  },
  {
    question: 'Can I schedule service visits from WhatsApp chat?',
    answer:
      'Buddie can collect the details for a service-visit request. Your team checks availability and confirms the final visit; the record keeps the conversation context.',
  },
  {
    question: 'Does it keep a full service history per customer?',
    answer:
      'Yes. Every customer’s record shows their installed model, warranty, AMC plan, past service visits, and notes, giving your office team and on-field technicians complete context.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'LeadBuddie has a limited Free CRM plan. Paid AI plans start at ₹1,499/month, and every new signup receives a 30-day Growth trial with no card required.',
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
        intro="Turn WhatsApp service enquiries into organised visit requests with customer context attached. Buddie can collect details and hand urgent or sensitive complaints to your team."
        trustPoints={[
          'Configured reply & routing',
          'Visit requests from chat',
          'Full service history drawers',
        ]}
        problem={{
          heading: 'Service requests scattered across phones and chats are how dealers lose customers.',
          body: [
            'A customer messages about a noisy filter. It gets seen, then buried. The visit is never booked, or it’s booked but the technician shows up with no history. Small misses like these are why customers don’t renew.',
            'LeadBuddie turns every request into a scheduled visit on the customer’s record, with their full history attached — so service feels organised and customers stay.',
          ],
        }}
        featuresHeading="Service operations, all in one place"
        features={[
          { icon: MessageCircle, title: 'Configured WhatsApp replies', desc: 'Buddie can answer routine service questions from approved knowledge when the message is eligible.' },
          { icon: CalendarCheck, title: 'Visit-request capture', desc: 'Collect the preferred date, time, location and reason, then let your team confirm the visit.' },
          { icon: History, title: 'Full service history', desc: 'Installed model, install date, AMC, past visits and notes — all on one customer drawer.' },
          { icon: Wrench, title: 'Complaint routing', desc: 'Urgent complaints are flagged and sent to your review desk, stopping automated replies for human takeover.' },
          { icon: Users, title: 'Team assignment & roles', desc: 'Assign visits and chats so any technician or staff member can pick up with full context.' },
          { icon: MapPin, title: 'Dashboard suggestions', desc: 'See exactly which follow-up play or pending service task needs your attention today.' },
        ]}
        stepsHeading="From service request to satisfied, renewing customer"
        steps={[
          { title: 'Customer messages on WhatsApp', desc: 'A supported enquiry, service request or complaint appears on the connected business number.' },
          { title: 'Complaints escalated to you', desc: 'If the customer mentions a malfunction or asks for a refund, Buddie pauses and alerts you for human takeover.' },
          { title: 'Prepare the visit request', desc: 'Buddie or your team captures the useful details; a person confirms the final schedule and customer message.' },
          { title: 'Technician arrives with full history', desc: 'The technician has the model, install date, past visits, and AMC history on their screen — zero guess work.' },
        ]}
        faq={FAQ}
        related={[
          { label: 'Water purifier dealer CRM', href: '/water-purifier-crm' },
          { label: 'AMC renewal software', href: '/amc-renewal-software' },
          { label: 'Read the case study', href: '/case-study' },
        ]}
        ctaHeading="Make every service visit organised"
        ctaSub="Start with a 30-day Growth trial and test a service-request journey before enabling Auto."
      />
    </>
  )
}
