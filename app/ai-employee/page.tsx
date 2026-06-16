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
const TITLE = 'AI Employee & AI Sales Agent for WhatsApp — Built for Service Businesses | LeadBuddie'
const DESCRIPTION =
  'Hire Aditya (AI Sales), Neha (AI AMC Renewals), or Raj (AI Support): your virtual AI employees. Scan WhatsApp chats, qualify leads, automate AMC renewals, and surface top revenue opportunities. Free to start.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'ai employee for business, ai sales employee whatsapp, ai sales agent, ai receptionist for business, whatsapp ai employee, RO service software India, RO CRM software, water purifier dealer software, water treatment CRM, AMC renewal software India, RO billing software, AMC reminder app, water purifier lead management, annual maintenance contract CRM, service center software India',
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
    question: 'Is an AI Employee different from a basic chatbot?',
    answer:
      'Yes, completely. Traditional chatbots rely on rigid menu buttons and strict rule triggers. If a user misspells something or switches topic, the bot fails. LeadBuddie\'s AI Employees use context-rich large language models. They understand Hinglish, extract natural lead data, and carry out actual jobs like scheduling and AMC renewals.'
  },
  {
    question: 'Will the AI Employee hallucinate or make up prices?',
    answer:
      'No. LeadBuddie is built with strict pricing guardrails. The AI employee only draws pricing, plans, and answers from the business knowledge database you upload. If a customer asks a question outside your uploaded data or documents, the AI employee politely defers the question and flags the chat for human takeover.'
  },
  {
    question: 'How do the autonomy trust levels work?',
    answer:
      'You have complete oversight with 3 safety levels. Watch Mode allows the AI to observe and build summaries without drafting replies. Approval Mode generates replies and holds them in your approval queue—you tap once to edit or send. Auto Mode runs on autopilot, responding instantly to FAQs and sending pre-configured sequences.'
  },
  {
    question: 'Can the AI employee speak Hinglish or regional Indian languages?',
    answer:
      'Yes. Buddie is built specifically for Indian businesses and natively understands "Hinglish" (Hindi typed in English script), slang, spelling errors, and multi-lingual customer messages, replying in the client\'s preferred style.'
  },
  {
    question: 'Does it comply with Meta\'s WhatsApp policies?',
    answer:
      'Absolutely. LeadBuddie operates over official Meta Cloud API protocols. It only responds to incoming client enquiries and does not spam, bulk blast, or violate community standards, protecting your phone number from getting banned.'
  }
]

export default function AiEmployeeLandingPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'AI Employee & AI Sales Agent for WhatsApp',
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
