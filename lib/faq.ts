/**
 * Homepage FAQ — single source of truth shared by the visible FAQSection and
 * the FAQPage JSON-LD on the homepage. Keeping them in sync is a Google
 * requirement (schema must reflect on-page content).
 */
export const HOMEPAGE_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What does Buddie actually do?',
    answer:
      'Buddie keeps an eye on your customers all day. It notices who is due for service, whose AMC is running out and who is still waiting for a reply, pulls up everything about that customer, and puts a ready-to-do job in front of your team. Your team still makes every decision that matters.',
  },
  {
    question: 'Do I need WhatsApp to use LeadBuddie?',
    answer:
      'No. You can start with your customers, the products you installed, service visits and AMC renewals straight away. Connect your WhatsApp Business number later if you want reminders and updates going out on it.',
  },
  {
    question: 'Is this just another CRM?',
    answer:
      'A CRM is built around selling. LeadBuddie is built around the work — the service that is due, the visit that needs a technician, the renewal that is about to lapse. It keeps the customer history you need and then tells you what to do with it.',
  },
  {
    question: 'What does it cover for a water purifier business?',
    answer:
      'Customers and the units you installed, service due dates, complaints and requests, technician visits, service history, AMC renewals and the next service. Automatic WhatsApp messages depend on your plan and on your number being connected.',
  },
  {
    question: 'How does it help a travel agency?',
    answer:
      'Buddie asks the traveller where, when, how many and what budget, then puts a quote-ready enquiry on your desk. Your team checks availability, builds the itinerary and sets the price.',
  },
  {
    question: 'How does it help a retail business?',
    answer:
      'Buddie works out which product the customer means from your own catalogue, asks for the variant, quantity and delivery details, and raises an order or quote request. Stock, discounts and the final price stay with your team.',
  },
  {
    question: 'Can Buddie reply to customers on its own?',
    answer:
      'That is your choice. Buddie can simply watch and suggest, ask you to approve every message before it goes, or handle the routine ones by itself. You can change your mind any time.',
  },
  {
    question: 'Which WhatsApp number does it use?',
    answer:
      'Your own. LeadBuddie connects through the official WhatsApp Business Platform — no QR scanning, no second SIM, no risk to your number.',
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
