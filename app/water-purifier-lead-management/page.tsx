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
  'Organise water purifier and RO enquiries from WhatsApp in one shared inbox. Assign ownership, keep context visible and configure eligible follow-ups.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'water purifier lead management, RO dealer lead management, water purifier lead crm, RO software free download, RO dealership CRM, water purifier enquiry tracking, WhatsApp lead management software, RO lead tracking, water purifier sales follow-up software India',
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
      'It brings supported enquiries from your connected WhatsApp Business number into a shared workspace with lead stages, ownership, notes and eligible AI assistance.',
  },
  {
    question: 'When can Buddie reply automatically?',
    answer:
      'Buddie can reply in Auto mode when the business is trained, the plan includes the action and the message passes the applicable safety and WhatsApp eligibility checks.',
  },
  {
    question: 'Do I lose control over what the AI says?',
    answer:
      'You decide how much Buddie does on its own — just watch, ask you before every message, or handle the routine ones itself. It only answers from what you have told it, and anything to do with price or a complaint comes to you.',
  },
  {
    question: 'Can my team work from one shared inbox?',
    answer:
      'Yes. Your team can view all chats, assign leads, and collaborate on responses. If a human agent sends a manual message, Buddie steps back automatically.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'LeadBuddie has a limited Free plan. Paid agent plans are listed on the pricing page, and every new signup receives a 30-day Growth trial with no card required.',
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
        intro="Bring WhatsApp enquiries into a shared workspace, assign ownership, keep the next step visible and configure eligible replies and follow-ups on the number customers already use."
        trustPoints={[
          'Owner-set AI replies',
          'Shared team inbox',
          'Watch/Approval safety modes',
        ]}
        problem={{
          heading: 'Leads don’t die from lack of demand — they die in the inbox.',
          body: [
            'Enquiries land across two or three phones, get a quick reply, and then vanish into a scroll. By the time anyone remembers to follow up, the customer has already bought from whoever replied first.',
            'LeadBuddie replies instantly and tracks every lead with a status, an owner and a follow-up date — so the leads you already paid to generate actually convert.',
          ],
        }}
        featuresHeading="Everything you need to convert more enquiries"
        features={[
          { icon: MessageCircle, title: 'Configured WhatsApp replies', desc: 'Buddie can respond from approved business knowledge when Auto is enabled and the message is eligible.' },
          { icon: Inbox, title: 'Shared team inbox', desc: 'Your whole team works from one inbox instead of leads being trapped on one person’s phone.' },
          { icon: Filter, title: 'Watch/Approval safety', desc: 'Review Buddie’s draft replies in your Approval Desk before they go out, or set him to Auto Mode.' },
          { icon: Clock, title: 'Configurable follow-ups', desc: 'Growth and Scale can prepare follow-up nudges for eligible quiet leads, with pause, mute and handover controls.' },
          { icon: Users, title: 'Assignment & ownership', desc: 'Assign chats so every lead has a clear owner and the next step is never anyone’s guess.' },
          { icon: BarChart3, title: 'Dormant-lead plays', desc: 'Run controlled re-engagement for eligible quiet leads under your plan, consent and WhatsApp messaging rules.' },
        ]}
        stepsHeading="From WhatsApp enquiry to closed sale"
        steps={[
          { title: 'Enquiry lands on WhatsApp', desc: 'A supported new conversation on the connected number appears as a lead with its chat context.' },
          { title: 'Assign and qualify', desc: 'Give the lead an owner, set its stage, and review drafts drafted by Buddie in your Approval Desk.' },
          { title: 'Eligible follow-up sequence', desc: 'If a lead goes quiet, configured follow-ups can run under the selected operating mode and messaging rules.' },
          { title: 'Convert to a tracked customer', desc: 'Promote won leads to customers with model, install date, and AMC plan to automate future renewals.' },
        ]}
        faq={FAQ}
        related={[
          { label: 'Water purifier service software', href: '/water-purifier-crm' },
          { label: 'AMC renewal software', href: '/amc-renewal-software' },
          { label: 'WhatsApp playbook', href: '/blog/whatsapp-for-water-purifier-business-2026' },
        ]}
        ctaHeading="Stop losing leads across phones"
        ctaSub="Start with a 30-day Growth trial and connect your WhatsApp Business number during setup."
      />
    </>
  )
}
