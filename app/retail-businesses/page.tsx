import type { Metadata } from 'next'
import { ShoppingBag } from 'lucide-react'
import { AgentVerticalPage } from '@/components/landing/AgentVerticalPage'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, faqSchema, serviceSchema, SITE_URL, softwareApplicationSchema } from '@/lib/seo'

const PATH = '/retail-businesses'
const TITLE = 'AI Agent for Retail Businesses — Product Enquiry to Next Action | LeadBuddie'
const DESCRIPTION = 'An agentic product-enquiry workflow for retail businesses. Buddie understands buying intent, uses approved product knowledge, collects missing details and prepares an order, quotation or team handover.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'AI agent for retail business, retail product enquiry automation India, AI product sales agent, retail order request software, catalogue enquiry agent, AI sales operations retail',
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'website', images: ['/images/stories/retail-owner-order-request.webp'] },
}

const FAQ = [
  { question: 'Can Buddie recommend products?', answer: 'Buddie can use the catalogue, approved descriptions, keywords and business rules you configure. When a product match is uncertain, it can ask a clarifying question or bring in the team.' },
  { question: 'Does Buddie confirm stock or the final selling price?', answer: 'Only information that the business has approved should be used. Live availability, discounts, negotiation and final commercial commitments can remain with a person.' },
  { question: 'What can the agent prepare for the team?', answer: 'Depending on the configured workflow, Buddie can collect product intent, variant, quantity, location and other required details, then prepare an order request, quotation request or handover.' },
  { question: 'Can this work for businesses with many products?', answer: 'The product-awareness workflow is designed to use configured catalogue context and clarify ambiguity. Catalogue quality, mappings and business rules determine how reliably a large range can be handled.' },
  { question: 'Is WhatsApp required?', answer: 'WhatsApp is a supported conversational channel when connected through the official platform. The value of the agent is the structured intent, safe product context and next action it prepares.' },
]

export default function RetailBusinessesPage() {
  return (
    <>
      <JsonLd data={[
        serviceSchema({ name: 'LeadBuddie for Retail Businesses', serviceType: 'Agentic product-enquiry and request operations for retail businesses', description: DESCRIPTION, url: `${SITE_URL}${PATH}`, audience: 'Retailers, distributors and product-led small businesses' }),
        softwareApplicationSchema({ name: 'LeadBuddie — Retail Business Agent', description: DESCRIPTION, url: `${SITE_URL}${PATH}` }),
        faqSchema(FAQ),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Retail Businesses', path: PATH }]),
      ]} />
      <AgentVerticalPage
        eyebrow="Agentic product operations for retail"
        h1={<>Turn product intent into a <span className="text-[#7cf4c5]">clear next action.</span></>}
        intro="Buddie understands what the customer is trying to buy, uses approved product knowledge, collects what is missing and prepares the right request for your team."
        image="/images/stories/retail-owner-order-request.webp"
        imageAlt="A retail business owner reviewing a structured customer order request"
        icon={ShoppingBag}
        workflowTitle="From “Do you have this?” to an actionable product request."
        workflowIntro="The agent helps the customer express the real need while keeping stock, discount and final commercial decisions inside the business rules."
        steps={[
          { title: 'Understand intent', copy: 'Identify the product, use case or category behind the customer’s question.' },
          { title: 'Clarify the match', copy: 'Ask for configured details such as variant, quantity, budget or location.' },
          { title: 'Apply product context', copy: 'Use approved catalogue knowledge and avoid unsupported claims.' },
          { title: 'Prepare the next action', copy: 'Create an order request, quotation request or handover for the team.' },
        ]}
        requestTitle="The team receives buying intent, not an unread chat."
        requestFields={['Product or use case', 'Variant or specification', 'Quantity', 'Customer location', 'Budget or urgency', 'Customer contact context']}
        teamReceives={['Order or quote request', 'Matched product context', 'Missing-detail status', 'Clear next action']}
        operatingRules={['Only configured products, descriptions and policies guide the response.', 'Uncertain matches trigger a question or human handover.', 'Stock, negotiated price and final order confirmation can stay with the team.', 'Watch, Approval and eligible Auto modes define the agent’s autonomy.']}
        outcomes={[
          { title: 'Faster product understanding', copy: 'Bring the real need and useful specification together early.' },
          { title: 'Safer recommendations', copy: 'Use approved catalogue context and expose uncertainty.' },
          { title: 'Cleaner sales handover', copy: 'Give the team a structured request instead of a fragmented conversation.' },
          { title: 'Consistent next actions', copy: 'Route an enquiry toward an order, quotation or person based on the rules.' },
        ]}
        faq={FAQ}
      />
    </>
  )
}
