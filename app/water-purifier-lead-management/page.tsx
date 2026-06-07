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
  Inbox,
  Filter,
  Clock,
  Users,
  BarChart3,
} from 'lucide-react'

const PATH = '/water-purifier-lead-management'
const TITLE = 'Water Purifier Lead Management Software (WhatsApp) | LeadBuddie'
const DESCRIPTION =
  'Capture, track and follow up on every water purifier and RO enquiry from WhatsApp in one shared inbox. Stop losing leads across phones — assign, prioritise and convert. Free to start.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'water purifier lead management, RO dealer lead management, water purifier enquiry tracking, WhatsApp lead management software, RO lead tracking, water purifier sales follow-up software India',
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
    question: 'What is water purifier lead management software?',
    answer:
      'It captures every enquiry from your WhatsApp number as a tracked lead, assigns statuses and owners, and uses AI to reply instantly so no customer goes cold. LeadBuddie does this on the WhatsApp number your customers already message.',
  },
  {
    question: 'How fast does Buddie reply to new leads?',
    answer:
      'Buddie replies to new WhatsApp enquiries in under 10 seconds, 24/7, even at 2 AM or on Sundays. This ensures you are always the first to respond when a customer is looking to buy.',
  },
  {
    question: 'Do I lose control over what the AI says?',
    answer:
      'No. LeadBuddie has three trust modes: Watch Mode (drafts but sends nothing without approval), Approval Mode (you review drafts and tap to send), and Auto Mode (autopilot). Pricing guardrails prevent him from inventing numbers.',
  },
  {
    question: 'Can my team work from one shared inbox?',
    answer:
      'Yes. Your team can view all chats, assign leads, and collaborate on responses. If a human agent sends a manual message, Buddie steps back automatically.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'LeadBuddie starts with a Free plan. Paid plans featuring Buddie AI, campaign tools, and team seats start at ₹999/month. A 7-day free trial is available.',
  },
]

export default function WaterPurifierLeadManagementPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Water Purifier Lead Management',
            serviceType: 'Lead management software for water purifier and RO dealers',
            description: DESCRIPTION,
            url: `${SITE_URL}${PATH}`,
          }),
          softwareApplicationSchema({
            name: 'LeadBuddie — Water Purifier Lead Management',
            description: DESCRIPTION,
            url: `${SITE_URL}${PATH}`,
          }),
          faqSchema(FAQ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Water Purifier Lead Management', path: PATH },
          ]),
        ]}
      />
      <NicheLanding
        eyebrow="Stop losing enquiries"
        h1="Lead management for water purifier dealers"
        intro="Capture WhatsApp enquiries automatically and reply in under 10 seconds. Assign leads to your team, run automated follow-ups, and convert more sales — on the number your customers already use."
        trustPoints={[
          'Instant 10s reply, 24/7',
          'Shared team inbox',
          'Watch/Approval safety modes',
        ]}
        problem={{
          heading: 'Leads don’t die from lack of demand — they die in the inbox.',
          body: [
            'Enquiries land across two or three phones, get a quick reply, and then vanish into a scroll. By the time anyone remembers to follow up, the customer has already bought from whoever replied first.',
            'LeadBuddie replies instantly and tracks every lead with a status, an owner and a follow-up date — so the leads you already paid to generate actually convert.',
          ],
          stat: { value: '0', label: 'leads should fall through the cracks — every enquiry tracked, every follow-up owned' },
        }}
        featuresHeading="Everything you need to convert more enquiries"
        features={[
          { icon: MessageCircle, title: 'Instant WhatsApp replies', desc: 'Buddie replies to new enquiries in under 10 seconds, 24/7, even at 2 AM or on Sundays.' },
          { icon: Inbox, title: 'Shared team inbox', desc: 'Your whole team works from one inbox instead of leads being trapped on one person’s phone.' },
          { icon: Filter, title: 'Watch/Approval safety', desc: 'Review Buddie’s draft replies in your Approval Desk before they go out, or set him to Auto Mode.' },
          { icon: Clock, title: 'Day 1/3/7 follow-ups', desc: 'Three honest, non-spam follow-ups when a lead goes quiet, plus nudges before they go to a competitor.' },
          { icon: Users, title: 'Assignment & ownership', desc: 'Assign chats so every lead has a clear owner and the next step is never anyone’s guess.' },
          { icon: BarChart3, title: 'Revive dormant leads', desc: 'Buddie automatically reaches out to cold leads (30+ days quiet) to spark new sales conversations.' },
        ]}
        stepsHeading="From WhatsApp enquiry to closed sale"
        steps={[
          { title: 'Enquiry lands on WhatsApp', desc: 'A new message on your number becomes a lead automatically. Buddie sends a first reply in under 10 seconds.' },
          { title: 'Assign and qualify', desc: 'Give the lead an owner, set its stage, and review drafts drafted by Buddie in your Approval Desk.' },
          { title: 'Buddie follow-up sequences', desc: 'If a hot lead goes quiet, Buddie sends gentle follow-ups at Day 1, 3, and 7 to keep them engaged.' },
          { title: 'Convert to a tracked customer', desc: 'Promote won leads to customers with model, install date, and AMC plan to automate future renewals.' },
        ]}
        faq={FAQ}
        related={[
          { label: 'Water purifier dealer CRM', href: '/water-purifier-crm' },
          { label: 'AMC renewal software', href: '/amc-renewal-software' },
          { label: 'WhatsApp playbook', href: '/blog/whatsapp-for-water-purifier-business-2026' },
        ]}
        ctaHeading="Stop losing leads across phones"
        ctaSub="Start free on your existing WhatsApp number. Capture every enquiry from today."
      />
    </>
  )
}
