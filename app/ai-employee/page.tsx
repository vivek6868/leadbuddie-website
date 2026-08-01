import type { Metadata } from 'next'
import { AiEmployeePage } from '@/components/landing/AiEmployeePage'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  softwareApplicationSchema,
  SITE_URL,
} from '@/lib/seo'

const PATH = '/ai-employee'
const TITLE = 'AI Employee for WhatsApp Sales Teams | LeadBuddie'
const DESCRIPTION =
  'LeadBuddie helps Indian WhatsApp-first teams use approved business knowledge to answer enquiries, collect details and create useful next steps with owner-set controls.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'ai employee for business, ai sales employee whatsapp, whatsapp ai employee, whatsapp lead management software, whatsapp booking automation, whatsapp crm india',
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
    question: 'What is an AI sales employee?',
    answer:
      'It is an AI assistant for WhatsApp-led sales work. It can use the business knowledge and rules you approve to answer enquiries, collect details and create the right next action for your team.',
  },
  {
    question: 'Can I review replies before they are sent?',
    answer:
      'Yes. Approval mode lets Buddie prepare a draft for your team to review, edit or send. You can choose where that level of review is appropriate.',
  },
  {
    question: 'How does Buddie avoid making up business details?',
    answer:
      'Give Buddie the approved products, policies and answers it may use. When a request needs human judgment or information outside those rules, your team can take over.',
  },
  {
    question: 'What can a conversation become?',
    answer:
      'Depending on your business setup, Buddie can gather the details for a lead, quote request, callback, booking or team handover.',
  }
]

export default function AiEmployeeLandingPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'AI Employee for WhatsApp Sales Teams',
            serviceType: 'AI virtual employee software for growing businesses',
            description: DESCRIPTION,
            url: `${SITE_URL}${PATH}`,
          }),
          softwareApplicationSchema({
            name: 'LeadBuddie — AI Employee',
            description: DESCRIPTION,
            url: `${SITE_URL}${PATH}`,
          }),
          faqSchema(FAQ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'AI Employee', path: PATH },
          ]),
        ]}
      />
      <AiEmployeePage />
    </>
  )
}
