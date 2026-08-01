/**
 * Homepage FAQ — single source of truth shared by the visible FAQSection and
 * the FAQPage JSON-LD on the homepage. Keeping them in sync is a Google
 * requirement (schema must reflect on-page content).
 */
export const HOMEPAGE_FAQ: { question: string; answer: string }[] = [
  {
    question: 'Is this official WhatsApp Business API, or QR scanning?',
    answer:
      'LeadBuddie connects through Meta’s WhatsApp Business Platform. It does not depend on personal-WhatsApp QR scraping. Your business is still responsible for consent, templates and WhatsApp policy compliance.',
  },
  {
    question: 'Can Buddie reply and move leads forward automatically?',
    answer:
      'Yes, when Auto mode is enabled and the message is eligible. Buddie works within the business knowledge and rules you approve, can collect the required details, and can hand the conversation to your team. Plan limits and WhatsApp messaging rules still apply.',
  },
  {
    question: 'What booking actions can Buddie handle?',
    answer:
      'You can configure requests for callbacks, demos, site visits, appointments, consultations, trials and service visits. Buddie collects the details and creates the request; your team confirms availability and the final appointment when required.',
  },
  {
    question: 'I sell many products — will Buddie send the wrong one?',
    answer:
      'On Growth and Scale, the Product Awareness Agent uses your configured catalogue, keywords and ad mappings. When a match is uncertain, it can ask a clarifying question or bring in your team instead of selecting a product blindly.',
  },
  {
    question: 'Can Buddie send images, videos and payment links — not just text?',
    answer:
      'Eligible plans let you attach approved images, videos, documents and links to catalogue items. Buddie can share the relevant configured asset when the product is matched and the message can be sent under your settings and WhatsApp rules.',
  },
  {
    question: 'My customers send voice notes — can Buddie understand them?',
    answer:
      'Buddie can transcribe supported WhatsApp voice notes and use the transcript in the conversation. Transcription quality and language support can vary with the recording.',
  },
  {
    question: 'Which languages does Buddie speak? Can I read chats in my language?',
    answer:
      'Buddie can match commonly used Indian languages and scripts, and inbox translation is available where supported. Language detection and translation quality can vary, so important business commitments should still be reviewed.',
  },
  {
    question: 'How do I train Buddie?',
    answer:
      'Teach it by text or voice: explain your business, what you sell, prices and restrictions, what details a quote or booking request needs, and when your team should take over. Buddie shows proposed changes for review before you save them.',
  },
  {
    question: 'Do my customers need to install anything?',
    answer:
      'No. Everything happens inside the normal WhatsApp app your customers already have — chats, tap-to-fill booking forms, voice notes, all of it. No app to download, no account to create.',
  },
  {
    question: 'What happens when Buddie doesn’t know an answer?',
    answer:
      'It can say that the information needs to be checked, collect any useful context, and bring in your team. Approved knowledge and pricing guardrails are designed to reduce unsupported answers, and you can review the conversation history.',
  },
  {
    question: 'Do you sell leads?',
    answer:
      'No. LeadBuddie helps you manage enquiries that come through your connected channels. It is not a lead marketplace.',
  },
  {
    question: 'Will my old WhatsApp chats be imported?',
    answer:
      'No. Old chat history is not imported. Supported new conversations appear after your WhatsApp Business number is connected.',
  },
  {
    question: 'Can my team work the same leads together?',
    answer:
      'Yes, within your plan’s seat limit. Teammates can share the inbox, assign conversations, add notes and track the next step.',
  },
  {
    question: 'Is AI voice calling available?',
    answer:
      'Scale includes 200 AI voice minutes per month. Availability and setup are shown in your account; WhatsApp voice-note transcription is a separate capability.',
  },
  {
    question: 'What happens during the free trial, and can I cancel?',
    answer:
      'Every new signup receives the Growth plan for 30 days with no card required. When the trial ends, you can choose a paid plan or continue on the Free plan. The Free plan does not include a WhatsApp connection or Buddie.',
  },
]
