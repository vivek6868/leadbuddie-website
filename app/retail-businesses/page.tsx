import type { Metadata } from 'next'
import { ShoppingBag } from 'lucide-react'
import { AgentVerticalPage } from '@/components/landing/AgentVerticalPage'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, faqSchema, serviceSchema, SITE_URL, softwareApplicationSchema } from '@/lib/seo'

const PATH = '/retail-businesses'
const TITLE = 'AI Agent for Retail Businesses — Product Enquiry to Next Action | LeadBuddie'
const DESCRIPTION = 'Buddie answers product enquiries for your shop, finds the right item from your own catalogue, asks what is missing and raises an order or quote for your team. It never invents stock or prices.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'retail business software India, product enquiry management, order request software, catalogue enquiry on WhatsApp, WhatsApp automation for shops, retail lead management India',
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'website', images: ['/images/stories/retail-owner-order-request.webp'] },
}

const FAQ = [
  { question: 'Can Buddie recommend products?', answer: 'Yes — from your catalogue and your own product descriptions. If it is not sure which item the customer means, it asks a question or brings your team in.' },
  { question: 'Will it confirm stock or the final price?', answer: 'No. Live stock, discounts, bargaining and the final price stay with a person. Buddie sticks to what you have approved.' },
  { question: 'What does my team actually receive?', answer: 'The product the customer wants, the variant, the quantity, where they are and how urgent it is — as an order request, a quote request, or a call for someone to take over.' },
  { question: 'I have hundreds of products. Will it cope?', answer: 'Yes, as long as your catalogue is in reasonable shape — that is what Buddie reads from. We help you get it tidy during setup, and Buddie asks rather than guesses when two items look similar.' },
  { question: 'Do I need WhatsApp?', answer: 'WhatsApp is the usual channel and connects through your official WhatsApp Business number. Enquiries can also reach LeadBuddie from your website.' },
]

export default function RetailBusinessesPage() {
  return (
    <>
      <JsonLd data={[
        serviceSchema({ name: 'LeadBuddie for Retail Businesses', serviceType: 'Product-enquiry and order-request software for retail businesses', description: DESCRIPTION, url: `${SITE_URL}${PATH}`, audience: 'Retailers, distributors and product-led small businesses' }),
        softwareApplicationSchema({ name: 'LeadBuddie — Retail Business Agent', description: DESCRIPTION, url: `${SITE_URL}${PATH}` }),
        faqSchema(FAQ),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Retail Businesses', path: PATH }]),
      ]} />
      <AgentVerticalPage
        eyebrow="For shops, distributors & product businesses"
        h1={<>“Do you have this?” <span className="text-[#7cf4c5]">answered properly.</span></>}
        intro="Buddie works out what the customer is actually after, finds it in your own catalogue, asks for what is missing and puts an order or quote on your team’s list."
        image="/images/stories/retail-owner-order-request.webp"
        imageAlt="A shop owner reading a complete customer order request"
        icon={ShoppingBag}
        workflowTitle="From a one-line question to an order you can fill."
        workflowIntro="Buddie helps the customer say what they actually want. Stock, discounts and the final price stay with you."
        steps={[
          { title: 'Works out what they want', copy: 'The product, the size, or just the job they are trying to get done.' },
          { title: 'Asks what is missing', copy: 'Variant, quantity, budget, delivery area — whatever your shop needs.' },
          { title: 'Checks your catalogue', copy: 'Answers from your own products and descriptions, never from guesswork.' },
          { title: 'Raises the order', copy: 'An order or quote request lands on your team’s list, ready to fill.' },
        ]}
        requestTitle="Your team gets a real order, not an unread chat."
        requestFields={['What they want to buy', 'Variant or size', 'How many', 'Where they are', 'Budget and how soon', 'Who they are and how to reach them']}
        teamReceives={['An order or quote request', 'The product they meant', 'Anything still missing', 'What to do next']}
        operatingRules={['Buddie answers only from the products and policies you have given it.', 'If the match is not obvious, it asks the customer or calls you in.', 'Stock, discounts and confirming the order stay with your team.', 'You choose how much it does alone: watch only, ask you first, or handle routine replies.']}
        outcomes={[
          { title: 'No more back and forth', copy: 'The real need and the right size are sorted out in the first conversation.' },
          { title: 'No made-up answers', copy: 'Buddie sticks to your catalogue and says when it is not sure.' },
          { title: 'Cleaner orders', copy: 'Your team gets one clear request instead of scrolling a chat for details.' },
          { title: 'Every enquiry goes somewhere', copy: 'An order, a quote or a person — nothing is left sitting unread.' },
        ]}
        faq={FAQ}
      />
    </>
  )
}
