/**
 * Homepage FAQ — single source of truth shared by the visible FAQSection and
 * the FAQPage JSON-LD on the homepage. Keeping them in sync is a Google
 * requirement (schema must reflect on-page content).
 */
export const HOMEPAGE_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What does an agentic business operator do?',
    answer:
      'LeadBuddie watches for work that needs attention, brings together the relevant customer and business context, prepares a safe next action and keeps the outcome available for the next cycle. Your team keeps control of decisions, exceptions and final commitments.',
  },
  {
    question: 'Does a water-treatment business need WhatsApp to use LeadBuddie?',
    answer:
      'No. A water-treatment business can begin with customer records, installed units, service work, visits and AMC cycles in the LeadBuddie workspace. WhatsApp can be connected later when the business wants eligible customer or technician messaging.',
  },
  {
    question: 'Is LeadBuddie just a customer database?',
    answer:
      'LeadBuddie is designed around active work and completed customer cycles. It keeps the customer memory needed for operations, while Buddie helps notice, prepare and continue the next action instead of leaving teams to manage static records and dashboards alone.',
  },
  {
    question: 'Which water-treatment workflows are covered?',
    answer:
      'The water-treatment workflow connects customers, installed units, service due, service requests, visits, service history, AMC or renewal work and the next service cycle. Availability of individual automations depends on the configured plan, business controls and messaging setup.',
  },
  {
    question: 'How does LeadBuddie work for travel agencies?',
    answer:
      'Buddie can understand a trip enquiry, collect the details required by that agency and prepare a structured quote or booking request for the team. The agency reviews availability, itinerary and final price.',
  },
  {
    question: 'How does LeadBuddie work for retail businesses?',
    answer:
      'Buddie uses the product information and rules the business approves to understand an enquiry, collect missing details and prepare an order, quotation or team handover. Uncertain matches and final commercial decisions can stay with a person.',
  },
  {
    question: 'Can Buddie act automatically?',
    answer:
      'Where a workflow is eligible, the business can choose Watch, Approval or Auto. Approved knowledge, confidence checks, plan limits, consent and provider rules still govern what can be prepared or sent.',
  },
  {
    question: 'Can I still connect WhatsApp?',
    answer:
      'Yes. LeadBuddie supports the official WhatsApp Business Platform for eligible conversational and outbound workflows. WhatsApp is a channel Buddie can use; it is not a requirement for the core water-treatment operating workspace.',
  },
]

/** /whatsapp-voice-ai FAQ — shared by the visible accordion and FAQPage JSON-LD. */
export const VOICE_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is Buddie Voice?',
    answer:
      'Buddie Voice lets LeadBuddie’s AI employee understand WhatsApp voice notes from your customers, reply with a natural voice note when it helps, and turn what was said into a structured lead or request for your team.',
  },
  {
    question: 'Which languages can Buddie reply in by voice?',
    answer:
      'Voice replies are available in English, Hindi, Tamil and Malayalam. Buddie can understand voice notes in more Indian languages; when a spoken reply is not available for a language, it answers in text.',
  },
  {
    question: 'Will Buddie send a voice note for every message?',
    answer:
      'No. In Smart mode Buddie speaks only after the customer sends a voice note or asks for voice. In Customer asks mode it speaks only when the customer taps Explain by voice or asks. You can also turn voice replies off. Menus, links and hand-overs are always sent as text.',
  },
  {
    question: 'Can Buddie say something different in voice than in text?',
    answer:
      'No. The voice note reads out the same checked answer Buddie wrote. It does not add prices, promises or offers that are not in the written reply.',
  },
  {
    question: 'Do customers need a special app?',
    answer:
      'No. Voice notes are sent and played inside the normal WhatsApp app your customers already use.',
  },
  {
    question: 'Which plans include voice?',
    answer:
      'Starter understands customer voice notes. Growth adds 60 minutes of voice replies a month with Buddie’s default voice. Scale includes 200 minutes a month and a choice of four voices: Asha, Arun, Maya and Kiran.',
  },
  {
    question: 'Does Buddie confirm bookings or prices by voice?',
    answer:
      'Buddie works within the business knowledge and rules you approve. For bookings and quotes it collects the details and creates the request; your team confirms availability and final prices where required.',
  },
]
