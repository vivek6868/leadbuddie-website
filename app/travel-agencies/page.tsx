import type { Metadata } from 'next'
import { Plane } from 'lucide-react'
import { AgentVerticalPage } from '@/components/landing/AgentVerticalPage'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, faqSchema, serviceSchema, SITE_URL, softwareApplicationSchema } from '@/lib/seo'

const PATH = '/travel-agencies'
const TITLE = 'AI Agent for Travel Agencies — Enquiry to Quote Request | LeadBuddie'
const DESCRIPTION = 'An agentic enquiry and request workflow for travel agencies. Buddie understands trip intent, collects the required details and prepares a structured quote or booking handover for your team.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'AI agent for travel agencies, travel enquiry automation India, travel quote request software, tour operator enquiry management, AI travel sales agent, travel agency lead qualification',
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'website', images: ['/images/stories/travel-owner-ready-lead.webp'] },
}

const FAQ = [
  { question: 'Does Buddie confirm a trip booking?', answer: 'Buddie can collect the configured trip details and prepare a request. Your team reviews availability, itinerary, supplier terms and final price before confirming a booking.' },
  { question: 'Can every agency choose different questions?', answer: 'Yes. The required details and handover rules should follow the agency’s own products and operating process rather than a fixed generic travel script.' },
  { question: 'Can Buddie handle open-ended enquiries?', answer: 'Buddie can ask focused questions to understand destination, timing, traveller count, departure city and other configured needs. When the request is uncertain, it can bring in the team.' },
  { question: 'Is WhatsApp required?', answer: 'The agent workflow is designed for customer conversations and structured requests. WhatsApp is a supported channel when connected through the official platform; LeadBuddie can also receive requests through supported web experiences.' },
  { question: 'Will Buddie invent package prices or availability?', answer: 'It should use only approved business knowledge and rules. Final prices, availability and commercial commitments can remain with the travel team.' },
]

export default function TravelAgenciesPage() {
  return (
    <>
      <JsonLd data={[
        serviceSchema({ name: 'LeadBuddie for Travel Agencies', serviceType: 'Agentic enquiry and quote-request operations for travel agencies', description: DESCRIPTION, url: `${SITE_URL}${PATH}`, audience: 'Travel agencies, tour operators and visa-service businesses' }),
        softwareApplicationSchema({ name: 'LeadBuddie — Travel Agency Agent', description: DESCRIPTION, url: `${SITE_URL}${PATH}` }),
        faqSchema(FAQ),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Travel Agencies', path: PATH }]),
      ]} />
      <AgentVerticalPage
        eyebrow="Agentic enquiry operations for travel"
        h1={<>Turn trip intent into a <span className="text-[#7cf4c5]">quote-ready request.</span></>}
        intro="Buddie understands the traveller’s need, collects the agency’s required details and prepares a clear request—so your team starts with context instead of another incomplete enquiry."
        image="/images/stories/travel-owner-ready-lead.webp"
        imageAlt="A travel agency owner receiving a structured trip request"
        icon={Plane}
        workflowTitle="From a vague travel idea to work the agency can price."
        workflowIntro="The agent asks only what the business needs, keeps the request honest and stops before making a booking or price promise that requires a person."
        steps={[
          { title: 'Understand the trip', copy: 'Recognise the destination, travel purpose and the next useful direction.' },
          { title: 'Collect essentials', copy: 'Ask for configured details such as dates, travellers and departure city.' },
          { title: 'Prepare the request', copy: 'Turn the conversation into a structured quote or booking request.' },
          { title: 'Hand over with context', copy: 'Give the travel team a clear starting point for itinerary and pricing.' },
        ]}
        requestTitle="A complete request reaches the travel desk."
        requestFields={['Destination or trip type', 'Travel dates', 'Departure city', 'Traveller count', 'Budget or preferences', 'Customer contact context']}
        teamReceives={['Quote request', 'Collected details', 'Conversation context', 'Clear next action']}
        operatingRules={['Only approved packages, policies and business knowledge guide the reply.', 'Final price, itinerary, availability and booking confirmation stay with the team.', 'When the intent is unclear, Buddie asks or hands over instead of guessing.', 'Watch, Approval and eligible Auto modes define how the agent participates.']}
        outcomes={[
          { title: 'Fewer incomplete enquiries', copy: 'Collect the minimum useful trip details before the team begins work.' },
          { title: 'Cleaner quotation handover', copy: 'Give the agent or owner one structured request to review.' },
          { title: 'Safer customer expectations', copy: 'Separate a request from a confirmed booking or final price.' },
          { title: 'Reusable travel context', copy: 'Keep the request and its outcome available for the next conversation.' },
        ]}
        faq={FAQ}
      />
    </>
  )
}
