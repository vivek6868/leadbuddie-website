import type { Metadata } from 'next'
import { Plane } from 'lucide-react'
import { AgentVerticalPage } from '@/components/landing/AgentVerticalPage'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, faqSchema, serviceSchema, SITE_URL, softwareApplicationSchema } from '@/lib/seo'

const PATH = '/travel-agencies'
const TITLE = 'AI Agent for Travel Agencies — Enquiry to Quote Request | LeadBuddie'
const DESCRIPTION = 'Buddie answers travel enquiries for your agency, asks the questions you need — destination, dates, travellers, budget — and hands your team a quote-ready request instead of another half-finished chat.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'travel agency software India, travel enquiry management, travel quote request software, tour operator enquiry management, WhatsApp automation for travel agents, travel agency lead management',
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'website', images: ['/images/stories/travel-owner-ready-lead.webp'] },
}

const FAQ = [
  { question: 'Does Buddie confirm a booking?', answer: 'No. Buddie collects the trip details and raises the request. Your team checks availability, the itinerary, supplier terms and the final price before anything is confirmed.' },
  { question: 'Can I choose what it asks?', answer: 'Yes. You decide which details matter for your packages and when the enquiry should come to a person. It is not a fixed script.' },
  { question: 'What about vague enquiries like “any packages?”', answer: 'Buddie asks a few short questions — where, when, how many, departing from where — until the enquiry is worth your team’s time. If it goes nowhere useful, it hands over.' },
  { question: 'Do I need WhatsApp?', answer: 'WhatsApp is the usual channel and connects through your official WhatsApp Business number. Enquiries can also reach LeadBuddie from your website.' },
  { question: 'Could it make up a price?', answer: 'No. Buddie only uses what you have given it. Final prices, availability and any commitment to a customer stay with your team.' },
]

export default function TravelAgenciesPage() {
  return (
    <>
      <JsonLd data={[
        serviceSchema({ name: 'LeadBuddie for Travel Agencies', serviceType: 'Enquiry and quote-request software for travel agencies', description: DESCRIPTION, url: `${SITE_URL}${PATH}`, audience: 'Travel agencies, tour operators and visa-service businesses' }),
        softwareApplicationSchema({ name: 'LeadBuddie — Travel Agency Agent', description: DESCRIPTION, url: `${SITE_URL}${PATH}` }),
        faqSchema(FAQ),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Travel Agencies', path: PATH }]),
      ]} />
      <AgentVerticalPage
        eyebrow="For travel agencies & tour operators"
        h1={<>Every enquiry arrives <span className="text-[#7cf4c5]">quote-ready.</span></>}
        intro="Buddie asks the traveller what you need to know — where, when, how many, what budget — and hands your team a clear request instead of another half-finished chat."
        image="/images/stories/travel-owner-ready-lead.webp"
        imageAlt="A travel agency owner reading a complete trip enquiry"
        icon={Plane}
        workflowTitle="From “thinking about Bali” to something you can price."
        workflowIntro="Buddie asks only what your agency needs. It never quotes a price or confirms a seat — it brings you in the moment that matters."
        steps={[
          { title: 'Listens properly', copy: 'Picks up where they want to go and what kind of trip it is.' },
          { title: 'Asks your questions', copy: 'Dates, travellers, departure city — whatever your agency needs to quote.' },
          { title: 'Writes it up', copy: 'The chat becomes a clean quote request on your desk.' },
          { title: 'Passes it to you', copy: 'Your team opens it and starts building the itinerary.' },
        ]}
        requestTitle="Your desk gets the whole enquiry."
        requestFields={['Where they want to go', 'Travel dates', 'Departure city', 'How many travelling', 'Budget and preferences', 'Who they are and how to reach them']}
        teamReceives={['A quote request', 'Everything they told Buddie', 'The full chat', 'What to do next']}
        operatingRules={['Buddie only uses the packages and policies you have given it.', 'Prices, seats, itineraries and confirmations stay with your team.', 'If it is not sure, it asks the customer or calls you in. It never guesses.', 'You choose how much it does alone: watch only, ask you first, or handle routine replies.']}
        outcomes={[
          { title: 'Fewer half-enquiries', copy: 'No more chasing a customer for their dates three days later.' },
          { title: 'Faster quotes', copy: 'Your team opens one clear request and starts pricing straight away.' },
          { title: 'No wrong promises', copy: 'An enquiry stays an enquiry. Only your team confirms a booking or a price.' },
          { title: 'Nothing forgotten', copy: 'The enquiry and what came of it stay on the customer’s record for next season.' },
        ]}
        faq={FAQ}
      />
    </>
  )
}
