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
  'Agentic service operations for RO and water purifier businesses. Connect customer history, service requests, assignments, visits and the next cycle. WhatsApp is optional.'

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
      'RO service management software helps water purifier businesses organise service requests, visit details, complaints, callbacks, customer history and the next cycle. LeadBuddie can also connect eligible messaging when configured.',
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
      'LeadBuddie has a limited Free plan. Paid agent plans are listed on the pricing page, and every new signup receives a 30-day Growth trial with no card required.',
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
        h1="RO service work with context from request to completion"
        intro="Organise requests, assignments, visits and customer history from one workspace. Buddie can prepare the next action, while WhatsApp remains an optional channel for eligible customer and technician messages."
        trustPoints={[
          'No WhatsApp required to begin',
          'Visit work with customer context',
          'History connected to the next cycle',
        ]}
        problem={{
          heading: 'Service requests scattered across phones and chats are how dealers lose customers.',
          body: [
            'A customer messages about a noisy filter. It gets seen, then buried. The visit is never booked, or it’s booked but the technician shows up with no history. Small misses like these are why customers don’t renew.',
            'LeadBuddie keeps the request, customer context, assignment and outcome together so the team can complete the visit and continue the next service cycle.',
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
          { title: 'Create or receive the service request', desc: 'Start from the workspace or a supported customer conversation and attach the request to the right customer.' },
          { title: 'Review the issue and context', desc: 'Bring the installed product, history and reported problem together before assignment.' },
          { title: 'Assign and complete the visit', desc: 'The office confirms the work, handles exceptions and records the visit outcome.' },
          { title: 'Continue the service cycle', desc: 'Use the completed visit and configured service rule to prepare the next legitimate cycle.' },
        ]}
        faq={FAQ}
        related={[
          { label: 'Water treatment operations', href: '/water-purifier-crm' },
          { label: 'RO technician job-card guide', href: '/blog/ro-technician-job-card-workflow' },
          { label: 'Service-due date guide', href: '/blog/water-purifier-service-due-date-system' },
          { label: 'AMC renewal software', href: '/amc-renewal-software' },
        ]}
        loopItems={['A service need becomes visible', 'Buddie prepares the customer and unit context', 'Your team completes the visit and next cycle']}
        ctaHeading="Make every service visit organised"
        ctaSub="Start with your customer and service records. Add messaging automation after the operating workflow is ready."
      />
    </>
  )
}
