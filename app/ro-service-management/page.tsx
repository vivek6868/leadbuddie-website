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
  'Service software for RO and water purifier dealers. Every complaint, visit, technician and customer history in one place — so nothing is missed and your technician never turns up blind. WhatsApp optional.'

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
      'It is software that keeps every service call, visit, complaint and callback in one place, along with the customer’s full history. With LeadBuddie you can also send updates on WhatsApp once your business number is connected.',
  },
  {
    question: 'How does Buddie handle customer complaints?',
    answer:
      'When a customer messages about a leak, a noise or a unit that has stopped working, Buddie recognises it as a complaint, stops replying automatically and puts it in front of your team straight away. Complaints are never left to a bot.',
  },
  {
    question: 'Can I schedule service visits from WhatsApp chat?',
    answer:
      'Buddie collects the details — what is wrong, when suits them, the address. Your team checks who is free and confirms the visit. The whole conversation stays attached to the customer.',
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
        h1="Every service call finished, not forgotten"
        intro="Keep every service call, technician assignment, visit and customer history in one place. Buddie gets the job ready for your team, and WhatsApp updates are there when you want them."
        trustPoints={[
          'No WhatsApp needed to start',
          'Your technician gets the full history',
          'The next service is set automatically',
        ]}
        problem={{
          heading: 'Service requests scattered across phones and chats are how dealers lose customers.',
          body: [
            'A customer messages about a noisy filter. It gets seen, then buried. The visit is never booked, or it’s booked but the technician shows up with no history. Small misses like these are why customers don’t renew.',
            'LeadBuddie keeps the complaint, the customer’s history, who is going and what happened, all in one place — so the visit gets done and the next service is already set.',
          ],
        }}
        featuresHeading="Service operations, all in one place"
        features={[
          { icon: MessageCircle, title: 'Routine questions answered', desc: 'Buddie handles “when is my service due” and “what does a filter change cost” from the answers you gave it.' },
          { icon: CalendarCheck, title: 'Visit requests, complete', desc: 'Preferred date, time, address and what is wrong — collected before it reaches your team.' },
          { icon: History, title: 'Full service history', desc: 'Installed model, install date, AMC, past visits and notes — all on one customer drawer.' },
          { icon: Wrench, title: 'Complaints reach a person', desc: 'An upset customer is flagged for your team and automatic replies stop. No bot argues with them.' },
          { icon: Users, title: 'Team assignment & roles', desc: 'Assign visits and chats so any technician or staff member can pick up with full context.' },
          { icon: MapPin, title: 'What to do today', desc: 'Open the dashboard and see exactly which follow-up or pending visit needs you today.' },
        ]}
        stepsHeading="From service request to satisfied, renewing customer"
        steps={[
          { title: 'The call comes in', desc: 'From a WhatsApp message or your own team, attached to the right customer straight away.' },
          { title: 'You see the full picture', desc: 'The unit you installed, the last visit and what they are complaining about — on one screen.' },
          { title: 'Send someone and close it', desc: 'Your office picks the technician, sorts out anything odd and records what was done.' },
          { title: 'The next service is set', desc: 'Counted from the visit you actually did, so the date is one your team can trust.' },
        ]}
        faq={FAQ}
        related={[
          { label: 'Water purifier service software', href: '/water-purifier-crm' },
          { label: 'Technician job-card guide', href: '/blog/ro-technician-job-card-workflow' },
          { label: 'Service-due date guide', href: '/blog/water-purifier-service-due-date-system' },
          { label: 'AMC renewal software', href: '/amc-renewal-software' },
        ]}
        loopItems={['A customer reports a problem', 'Buddie pulls up their purifier and history', 'Your team sends someone and closes the visit']}
        ctaHeading="Make every service visit organised"
        ctaSub="Start with your customers and service records. Turn on WhatsApp reminders whenever you are ready."
      />
    </>
  )
}
