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
    question: 'I sell many products — will Buddie send the wrong one?',
    answer:
      'No. Buddie’s Product Awareness Agent matches each enquiry to your product catalog using the keywords you set — even when the customer clicks a WhatsApp ad — and only sends a product it’s confident about. It never guesses. All details (price, description, brochure, link) come straight from your catalog, so replies are always accurate. Available on Growth and above.',
  },
  {
    question: 'Can Buddie send images, videos and payment links — not just text?',
    answer:
      'Yes. For each product you can add an image or video, a brochure PDF, and a payment or website link. When Buddie matches the product, it sends them automatically and then offers the matching booking — all inside WhatsApp.',
  },
  {
    question: 'My customers send voice notes — can Buddie understand them?',
    answer:
      'Yes. When a customer sends a WhatsApp voice note, Buddie transcribes it in seconds and replies just like it would to a typed message — in any language. A late-night Tamil voice note asking for a service visit gets understood, answered and booked while you sleep.',
  },
  {
    question: 'Which languages does Buddie speak? Can I read chats in my language?',
    answer:
      'Buddie replies in the language your customer used — Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Bengali, English and Hinglish. And in your inbox you pick your language once: every chat is translated for you automatically, so a Tamil conversation can read in English (or any language you choose). No copy-pasting into Google Translate.',
  },
  {
    question: 'How do I train Buddie?',
    answer:
      'Just talk to it — by text or voice, in any language. Tell it what to answer, what to ask before booking, or what it should never promise. Buddie shows you exactly what it learned as a plain-language proposal, and nothing goes live until you approve it.',
  },
  {
    question: 'Do my customers need to install anything?',
    answer:
      'No. Everything happens inside the normal WhatsApp app your customers already have — chats, tap-to-fill booking forms, voice notes, all of it. No app to download, no account to create.',
  },
  {
    question: 'What happens when Buddie doesn’t know an answer?',
    answer:
      'It says so honestly, brings your team in, and asks you to teach it for next time. Buddie never invents a price or makes a promise it can’t back — if it isn’t sure, it defers to you instead of guessing.',
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
