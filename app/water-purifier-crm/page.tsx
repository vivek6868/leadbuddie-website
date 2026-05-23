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
      'LeadBuddie is a CRM built specifically for water purifier and RO dealers. Unlike generic CRMs, it runs your full dealer lifecycle — WhatsApp lead capture, customer records with installed model and install date, AMC renewal tracking, service visit scheduling and callbacks — on the WhatsApp number your customers already message.',
  },
  {
    question: 'Does it work with my existing WhatsApp number?',
    answer:
      'Yes. LeadBuddie runs on your existing WhatsApp Business number using official Meta infrastructure. Customers keep messaging the same number; your team manages everything from one shared inbox and CRM.',
  },
  {
    question: 'Can it track AMC renewals and service visits?',
    answer:
      'Yes. Every customer’s AMC sits on a renewals page sorted by urgency, and service visits booked from chat are logged on the customer record. Nothing slips through the cracks.',
  },
  {
    question: 'How much does a water purifier dealer CRM cost?',
    answer:
      'LeadBuddie starts free, with paid plans from ₹499/month as you add WhatsApp inbox, AI replies and campaigns. You can start free and upgrade only when you need more.',
  },
  {
    question: 'Is my customer data secure?',
    answer:
      'Yes. LeadBuddie is built on official Meta messaging infrastructure with secure, workspace-level access and is DPDP-ready for Indian businesses.',
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
        intro="Capture every WhatsApp enquiry, convert it to a tracked customer, and never lose an AMC renewal — all on the number your customers already message. Purpose-built for RO and water purifier dealerships in India."
        trustPoints={[
          'Runs on your WhatsApp number',
          'Official Meta tech provider',
          'In production with Mastec',
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
          { icon: MessageCircle, title: 'WhatsApp lead capture', desc: 'Every enquiry on your WhatsApp number becomes a tracked lead — no copy-paste, no missed message after hours.' },
          { icon: Users, title: 'Customer records', desc: 'Installed model, install date, warranty and AMC plan — the full history on one customer drawer.' },
          { icon: RefreshCcw, title: 'AMC renewal tracking', desc: 'Every contract on a renewals page sorted by urgency, so the renewal window never quietly passes.' },
          { icon: Wrench, title: 'Service visit scheduling', desc: 'Book a visit from the chat in one tap. Visit history travels with the customer record.' },
          { icon: PhoneCall, title: 'Callbacks that don’t get forgotten', desc: '“Call me next week” becomes a real follow-up on the right date, with the customer’s note attached.' },
          { icon: IndianRupee, title: 'Revenue tracking', desc: 'Renewed contracts and service revenue roll up on the dashboard, so you see what was recovered.' },
        ]}
        stepsHeading="From WhatsApp message to renewing customer"
        steps={[
          { title: 'A customer messages your WhatsApp', desc: 'An enquiry, a complaint or an AMC question lands on your normal number and becomes a lead automatically.' },
          { title: 'Convert the lead to a customer', desc: 'When they buy, promote the lead to a customer with the installed model, install date and AMC plan attached.' },
          { title: 'AMC and service track themselves', desc: 'Renewals surface before they lapse; service visits and callbacks are logged on the customer record.' },
          { title: 'Repeat revenue stops leaking', desc: 'Every renewal due is surfaced and followed up, so the cheapest sale in your business — the renewal — actually closes.' },
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
