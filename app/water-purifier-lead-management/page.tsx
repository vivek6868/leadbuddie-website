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
      'It captures every enquiry from your WhatsApp number as a tracked lead, gives each one a status and an owner, and makes sure none go cold. LeadBuddie does this for water purifier and RO dealers on the number customers already message.',
  },
  {
    question: 'Can my whole team work from one inbox?',
    answer:
      'Yes. Instead of leads being trapped on one person’s phone, your team works from a shared inbox — assigning chats, adding notes and seeing exactly who owns the next step.',
  },
  {
    question: 'How does it stop leads from being lost?',
    answer:
      'Every enquiry becomes a tracked lead automatically — no copy-paste, no message lost after hours. Follow-up reminders and lead stages mean nothing sits forgotten in a chat scroll.',
  },
  {
    question: 'Does it work with my existing WhatsApp number?',
    answer:
      'Yes. LeadBuddie runs on your existing WhatsApp Business number using official Meta infrastructure, so customers keep messaging the same number while your team gets a real CRM behind it.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'LeadBuddie starts free, with paid plans from ₹499/month as you add WhatsApp inbox, AI replies and campaigns. Start free and upgrade only when you need more.',
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
        intro="Capture every WhatsApp enquiry as a tracked lead, work it from one shared team inbox, and follow up before it goes cold — on the number your customers already message. No more leads lost across three phones."
        trustPoints={[
          'Every enquiry captured',
          'One shared team inbox',
          'Follow-ups never missed',
        ]}
        problem={{
          heading: 'Leads don’t die from lack of demand — they die in the inbox.',
          body: [
            'Enquiries land across two or three phones, get a quick reply, and then vanish into a scroll. By the time anyone remembers to follow up, the customer has already bought from whoever replied first.',
            'LeadBuddie turns every enquiry into a tracked lead with a status, an owner and a follow-up date — so the leads you already paid to generate actually convert.',
          ],
          stat: { value: '0', label: 'leads should fall through the cracks — every enquiry tracked, every follow-up owned' },
        }}
        featuresHeading="Everything you need to convert more enquiries"
        features={[
          { icon: MessageCircle, title: 'Automatic lead capture', desc: 'Every WhatsApp enquiry becomes a tracked lead — no copy-paste, no message lost after hours.' },
          { icon: Inbox, title: 'Shared team inbox', desc: 'Your whole team works from one inbox instead of leads being trapped on one person’s phone.' },
          { icon: Filter, title: 'Lead stages & status', desc: 'New, quoted, follow-up, won — always know where every enquiry stands at a glance.' },
          { icon: Clock, title: 'Follow-up reminders', desc: 'Know which leads are hot, overdue or due soon, so none sit forgotten in a chat scroll.' },
          { icon: Users, title: 'Assignment & ownership', desc: 'Assign chats so every lead has a clear owner and the next step is never anyone’s guess.' },
          { icon: BarChart3, title: 'See what’s working', desc: 'Track conversion across your pipeline so you know where enquiries are won or lost.' },
        ]}
        stepsHeading="From WhatsApp enquiry to closed sale"
        steps={[
          { title: 'Enquiry lands on your WhatsApp', desc: 'A new message on your business number becomes a tracked lead automatically, with source and time captured.' },
          { title: 'Assign and qualify', desc: 'Give the lead an owner, add notes and a budget, and set its stage so the team knows what’s next.' },
          { title: 'Follow up on time', desc: 'Reminders surface hot and overdue leads, so you reach out while the customer is still deciding.' },
          { title: 'Convert to a tracked customer', desc: 'When they buy, promote the lead to a customer with installed model, install date and AMC — ready for renewals.' },
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
