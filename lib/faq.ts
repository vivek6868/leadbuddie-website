/**
 * Homepage FAQ — single source of truth shared by the visible FAQSection and
 * the FAQPage JSON-LD on the homepage. Keeping them in sync is a Google
 * requirement (schema must reflect on-page content).
 */
export const HOMEPAGE_FAQ: { question: string; answer: string }[] = [
  {
    question: 'Is this official WhatsApp Business API, or QR scanning?',
    answer:
      'Official WhatsApp Business API via Meta. LeadBuddie is not risky personal-WhatsApp QR scraping. Your number stays safe and compliant, and Buddie works on top of it.',
  },
  {
    question: 'Can Buddie reply and book customers automatically?',
    answer:
      'Yes — and you decide how much. Choose Watch (Buddie only observes), Approval (Buddie drafts, you tap to send), or Auto (Buddie replies, follows up, and books on its own within your rules).',
  },
  {
    question: 'What can Buddie book?',
    answer:
      'Callbacks, demos, site visits, appointments, consultations, trials, service visits, and AMC visits — plus custom booking types for your business. Every booking lands on your Bookings board with a reminder.',
  },
  {
    question: 'Do you sell leads?',
    answer:
      'No. LeadBuddie does not sell random leads. It converts your own incoming WhatsApp enquiries into qualified leads and bookings — so you only work the customers who already contacted you.',
  },
  {
    question: 'Will my old WhatsApp chats be imported?',
    answer:
      'No. Old chat history is not imported. After you connect your WhatsApp Business number, Buddie captures and works every new chat and lead from that point on.',
  },
  {
    question: 'Can my team work the same leads together?',
    answer:
      'Yes. Your team shares one inbox and one Today’s Bookings list — assign chats, add notes, track stages, and everyone knows who to call or visit next.',
  },
  {
    question: 'Is AI voice calling available?',
    answer:
      'AI voice calling is coming soon. WhatsApp replies, automatic follow-ups, lead qualification, and bookings are all available today.',
  },
  {
    question: 'What happens during the free trial, and can I cancel?',
    answer:
      'You get 30 days free on the Growth plan with no card needed, so you can see real replies, follow-ups, and bookings first. Cancel anytime — access continues to the end of your billing period.',
  },
]
