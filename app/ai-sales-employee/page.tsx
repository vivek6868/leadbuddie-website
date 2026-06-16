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

const PATH = '/ai-sales-employee'
const TITLE = 'AI Sales Employee & WhatsApp AI Agent — Capture & Qualify Leads | LeadBuddie'
const DESCRIPTION =
  'Hire Aditya: your virtual AI Sales Employee. Scan incoming WhatsApp chats, qualify leads, send PDF brochures, book service calls, and integrate directly with your CRM. Free to start.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'ai sales employee, ai sales agent, whatsapp ai employee, AI crm whatsapp, lead management automation, automated lead qualification, digital sales rep, whatsapp lead generation, leadbuddie, whatsapp inbox assistant',
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
    question: 'What is an AI Sales Employee?',
    answer:
      'An AI Sales Employee is a virtual sales rep who connects directly to your WhatsApp Business number. Instead of sending generic chatbot menus, they conversate naturally with customers in Hinglish or English, answer pricing questions, share product brochures, and qualify buyers before passing them to the human team.'
  },
  {
    question: 'How do you train the AI sales employee?',
    answer:
      'You can train the AI in under 5 minutes. Simply upload your product catalogs, pricing rules, FAQ links, or previous WhatsApp chat logs. Buddie parses the documents and instantly starts answering client queries according to those parameters.'
  },
  {
    question: 'Is it safe to let an AI reply to high-value leads?',
    answer:
      'Yes. You can use Approval Mode, where Buddie drafts the response and places it in your review queue. You review the draft, edit if needed, and tap Send in one click. Once you trust the responses, you can turn on Auto Mode for FAQs or after-hours autopilot.'
  },
  {
    question: 'Can it auto-capture contact information into a CRM?',
    answer:
      'Yes. LeadBuddie automatically scans chats for name, pincode, address, and product interest, writing them directly to the lead card without overwrite hazards, keeping your database clean.'
  }
]

export default function AiSalesEmployeeLandingPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'AI Sales Employee & WhatsApp AI Agent',
            serviceType: 'AI virtual sales assistant for WhatsApp CRM',
            description: DESCRIPTION,
            url: `${SITE_URL}${PATH}`,
          }),
          softwareApplicationSchema({
            name: 'LeadBuddie — AI Sales Employee',
            description: DESCRIPTION,
            url: `${SITE_URL}${PATH}`,
          }),
          faqSchema(FAQ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'AI Sales Employee', path: PATH },
          ]),
        ]}
      />
      <AiEmployeePage />
    </>
  )
}
