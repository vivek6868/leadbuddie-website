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
      'RO service management software helps water purifier dealers handle service requests, schedule visits, track complaints, and keep a full service history for every customer. LeadBuddie does this from the WhatsApp number customers already message.',
  },
  {
    question: 'Can customers request service on WhatsApp?',
    answer:
      'Yes. When a customer messages about a problem or asks for a visit, you book it on their record in one tap. The visit and its history travel with the customer, so the next technician has full context.',
  },
  {
    question: 'Does it keep a service history per customer?',
    answer:
      'Yes. Every customer drawer shows the installed model, install date, AMC plan, past service visits and notes — so anyone on your team can pick up the conversation without asking the customer to repeat themselves.',
  },
  {
    question: 'Can I track complaints and follow-ups?',
    answer:
      'Yes. Complaints become tracked items with owners and follow-up dates, and any “call me back” promise resurfaces automatically on the right day so nothing is forgotten.',
  },
  {
    question: 'How much does RO service management software cost?',
    answer:
      'LeadBuddie starts free, with paid plans from ₹499/month as you add WhatsApp inbox, AI replies and campaigns. Start free and upgrade only when you need more.',
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
        intro="Turn every service request and complaint into a scheduled visit with full customer history attached — booked from the same WhatsApp chat your customers already use. No more lost requests or repeat questions."
        trustPoints={[
          'Book visits from chat',
          'Full service history',
          'Callbacks never missed',
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
          { icon: MessageCircle, title: 'Requests from WhatsApp', desc: 'A complaint or visit request in chat becomes a tracked item — nothing gets buried in the inbox.' },
          { icon: CalendarCheck, title: 'One-tap visit scheduling', desc: 'Book the visit on the customer’s record in a tap, with date, time and reason captured.' },
          { icon: History, title: 'Full service history', desc: 'Installed model, install date, AMC, past visits and notes — all on one customer drawer.' },
          { icon: Wrench, title: 'Complaint tracking', desc: 'Every complaint has an owner and a follow-up date, so issues get closed, not forgotten.' },
          { icon: Users, title: 'Team handoff', desc: 'Assign visits and chats so any technician or staff member can pick up with full context.' },
          { icon: MapPin, title: 'Visit-aware records', desc: 'Visit history travels with the customer, so the next service call starts with everything known.' },
        ]}
        stepsHeading="From service request to satisfied, renewing customer"
        steps={[
          { title: 'Customer messages on WhatsApp', desc: 'A complaint or service request lands on your normal number and becomes a tracked item instantly.' },
          { title: 'Book the visit in one tap', desc: 'Schedule the visit on the customer’s record with the reason and time — confirmed back in the same chat.' },
          { title: 'Technician arrives with context', desc: 'The full customer and service history is on the record, so no time is wasted re-asking the basics.' },
          { title: 'Follow-ups and renewals stay linked', desc: 'Service feeds into the customer lifecycle, so the relationship — and the AMC renewal — keeps going.' },
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
