export const BRAND = {
  name: 'LeadBuddie',
  tagline: 'Your AI Sales Employee for WhatsApp — built for growing businesses',
  company: 'Hutliv Technologies LLP',
  founded: 2025,
} as const

export const CONTACT = {
  general: 'hello@hutliv.com',
  support: 'hello@hutliv.com',
  // Official LeadBuddie WhatsApp + call number. If customers WhatsApp this number, they reach
  // the LeadBuddie team. Keep display + URL in sync — Google's tel: handler uses the display
  // string; wa.me uses the digits-only country-code-prefixed form.
  phone: '+91 88707 33673',
  address: 'India',
  /** WhatsApp link for "Chat on WhatsApp" CTA */
  whatsappUrl: 'https://wa.me/918870733673',
} as const

/**
 * Android Play Store presence.
 *
 * TODO when the direct app URL is available: replace `url` with
 * `https://play.google.com/store/apps/details?id=<actual.package.id>`. The search URL below
 * works (lands users on Play Store search results) but a direct URL gives rich previews,
 * "Install" deep-link behaviour from Chrome, and better attribution. The current search URL
 * also includes `hl=en_SG` (Singapore locale) — fine for Indian SMBs reading English, but
 * dropping the hl param entirely would defer to the user's device locale, which is friendlier.
 */
export const PLAY_STORE = {
  url: 'https://play.google.com/store/search?q=leadbuddie&c=apps&hl=en',
  appName: 'LeadBuddie',
  developer: 'Hutliv Technologies LLP',
} as const

export const NAVIGATION = [
  { name: 'Product', href: '/product' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Demo', href: '/demo' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const

export const LEGAL_LINKS = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Refund Policy', href: '/refund-policy' },
  { name: 'Shipping Policy', href: '/shipping-policy' },
  { name: 'Data Deletion Instructions', href: '/data-deletion-instructions' },
] as const

// Features shown on /features. Reordered to lead with Buddie (the AI Sales Employee) since
// that's the headline value-prop after V1 ship — replies, sends brochures, follows up,
// escalates. The old "AI Reply Copilot" entry is retired (it described V0's manual
// click-to-suggest; the product now auto-acts within owner-chosen autonomy bounds). Mirror
// the live product in leadmate-hutliv so the marketing page never overpromises.
export const FEATURES = [
  {
    id: 'buddie-ai-sales-employee',
    title: 'Buddie — your AI sales employee',
    description: 'Instant WhatsApp reply in under 10 seconds, even at 2 AM or on Sundays. Buddie acts like an employee that replies to leads, sends brochures, and follows up quiet buyers on autopilot.',
    icon: 'Sparkles',
  },
  {
    id: 'train-buddie',
    title: 'Train Buddie by chat or voice',
    description: 'Teach Buddie in plain language — text or voice, any language — what to answer, what to ask, and what it should never promise. It shows you exactly what it learned before anything goes live.',
    icon: 'GraduationCap',
  },
  {
    id: 'one-tap-bookings-quotes',
    title: 'One-tap bookings & quotes',
    description: 'Instead of a long back-and-forth, Buddie sends a tap-to-fill card right inside WhatsApp — dates, choices, details filled in seconds — and you receive a complete, structured request.',
    icon: 'ListChecks',
  },
  {
    id: 'voice-notes-transcription',
    title: 'Understands voice notes',
    description: 'Customers send WhatsApp voice notes; Buddie transcribes them in seconds and replies like it would to text — in any language. A late-night Tamil voice note becomes a booked visit by morning.',
    icon: 'Mic',
  },
  {
    id: 'multilingual-translation',
    title: 'Every language + inbox translation',
    description: 'Buddie replies in the customer\'s language — Hindi, Tamil, Telugu, Kannada & 10+ more. You pick your inbox language once and every chat is translated for you automatically.',
    icon: 'Languages',
  },
  {
    id: 'autonomy-modes',
    title: 'Automatic replies with business controls',
    description: 'Buddie can reply automatically within the business rules you have approved. Pause a sensitive lead, stop a follow-up, or bring your team in whenever human judgment is needed.',
    icon: 'Hand',
  },
  {
    id: 'amc-renewal-reminders',
    title: 'Automated AMC Reminders',
    description: 'Buddie messages every customer 60, 30, 15, and 7 days before their AMC expires. Keep your recurring revenue recurring without chasing manual spreadsheets.',
    icon: 'RefreshCcw',
  },
  {
    id: 'winback-lapsed-amc',
    title: 'Win back lapsed AMCs',
    description: 'One-tap reactivation play to reach out to customers who let their AMC drop. Recover lost service and AMC revenue with zero effort.',
    icon: 'RefreshCcw',
  },
  {
    id: 'revive-dormant-leads',
    title: 'Revive dormant leads',
    description: 'Buddie reaches out automatically to leads that went cold 30+ days ago. Bring quiet prospects back into the sales conversation.',
    icon: 'Clock',
  },
  {
    id: 'followup-automation',
    title: 'Day 1/3/7 & Quiet-lead Follow-ups',
    description: 'Three honest follow-ups across a week when leads go quiet, plus a gentle nudge when a hot lead stops replying before they slip to a competitor.',
    icon: 'Zap',
  },
  {
    id: 'approval-desk',
    title: 'Approval Desk & Full History',
    description: 'Every reply Buddie drafts sits in one desk. Approve in seconds, edit if you want, and view the full history of what your AI employee did today.',
    icon: 'CheckCircle2',
  },
  {
    id: 'no-invent-guardrail',
    title: 'Pricing guardrails & Human takeover',
    description: 'Buddie never invents a price. If pricing isn\'t set, he politely defers. Reply manually to a lead and Buddie steps back automatically with per-lead pause.',
    icon: 'ShieldCheck',
  },
  {
    id: 'chat-inbox',
    title: 'Unified Inbox (WhatsApp + Instagram)',
    description: 'WhatsApp, Instagram, and missed calls in one view. Clears a 99+ unread backlog in 5 seconds with one tap to mark all as read.',
    icon: 'MessageSquare',
  },
  {
    id: 'lead-crm',
    title: 'Lead CRM with dashboard suggestions',
    description: 'Status, tags, and AMC info alongside the chat, with dashboard suggestions showing exactly which play or job to turn on for leads waiting today.',
    icon: 'Kanban',
  },
  {
    id: 'safe-whatsapp',
    title: 'Meta-Compliant WhatsApp Usage',
    description: 'Official Meta tech provider. We only help you reply to leads that contacted you. No spam, no bulk blasting. Built to respect WhatsApp policies.',
    icon: 'ShieldCheck',
  },
] as const

// Plan feature lists shown on /pricing. Mirrors the live product tiers in
// leadmate-hutliv/config/plans.ts. The Buddie modes are the headline differentiator per tier:
// Starter ₹999 unlocks Approval mode; Growth ₹2,499 adds Auto + brochure sending + AMC engine;
// Scale ₹4,999 adds multi-seat + voice minutes. Free is intentionally light — drive upgrades.
export const PLAN_VISIBLE_FEATURES: Record<string, string[]> = {
  basic: [
    'WhatsApp lead CRM — view & organise up to 10 leads',
    '1 pipeline · 3 stages',
    'Manual replies only — Buddie not included',
    'No product catalog, bookings, campaigns or AI',
  ],
  starter: [
    'Buddie drafts replies — you approve & send (Approval mode)',
    'Automatic AI first replies + welcome messages',
    'AI suggested replies (click → edit → send)',
    '1 WhatsApp number · 2 team members',
    'Lead statuses, notes & reminders',
    'No product catalog, Booking Agent, follow-ups or campaigns',
  ],
  growth: [
    'Everything in Starter, plus:',
    'Buddie Auto mode — auto replies + automatic follow-ups',
    'Product Awareness Agent — auto-sends product details, image, brochure & buy link, and offers a booking',
    'Booking Agent — books demos, callbacks & site visits in chat',
    'Products & Services catalog (up to 20 products)',
    '2 WhatsApp numbers · 5 team members',
    'WhatsApp campaigns · 3/month (up to 3,000 recipients) + asset library',
    'AMC renewal engine + dormant-lead revival',
  ],
  scale: [
    'Everything in Growth, plus:',
    '5 WhatsApp numbers · 10 team members',
    'Unlimited products & ad → product mappings',
    'Campaigns · 20/month · 50,000 recipients · scheduling, auto-retry & analytics',
    'Team assignment, analytics & shared inbox',
    'AI voice minutes (coming soon) + priority support',
  ],
} as const

// Public 2026 pricing ladder. Mirrors leadmate-hutliv/config/plans.ts (the `_v2` plans marked
// `visible: true` in the live product). Old Basic/Starter ₹499 / Growth ₹999 / Team ₹1,999 /
// Enterprise ₹4,999 are grandfathered-only in the product and have been removed from this
// public-facing list. Growth is highlighted as recommended (the trust bridge tier — Buddie
// auto-replies, brochures, AMC renewals — covers the value prop for 80% of dealers).
export const PRICING_PLANS = [
  {
    id: 'basic',
    name: 'Free',
    price: 0,
    currency: '₹',
    period: 'month',
    description: 'See your WhatsApp leads in one inbox. Manual replies — Buddie not included.',
    features: PLAN_VISIBLE_FEATURES.basic,
    cta: 'Start Free',
    highlighted: false,
  },
  {
    id: 'starter',
    name: 'Starter',
    price: 999,
    currency: '₹',
    period: 'month',
    description: 'Buddie drafts instant replies on WhatsApp. Approval mode — you tap to send.',
    features: PLAN_VISIBLE_FEATURES.starter,
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 2499,
    currency: '₹',
    period: 'month',
    description: 'Buddie on autopilot — auto replies, follow-ups, bookings, lead management & campaigns.',
    features: PLAN_VISIBLE_FEATURES.growth,
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    id: 'scale',
    name: 'Scale',
    price: 4999,
    currency: '₹',
    period: 'month',
    description: 'Teams, advanced campaigns, multi-number WhatsApp, voice (coming soon).',
    features: PLAN_VISIBLE_FEATURES.scale,
    cta: 'Start Free Trial',
    highlighted: false,
  },
] as const

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Sign Up for Free Trial',
    description: 'Create your account in under 2 minutes. Every signup gets the Growth plan free for 30 days — no credit card required.',
    icon: 'UserPlus',
  },
  {
    step: 2,
    title: 'Connect WhatsApp Business Number',
    description: 'Securely connect your WhatsApp Business number through our guided setup.',
    icon: 'Link',
  },
  {
    step: 3,
    title: 'Leads Start Flowing In',
    description: 'All your WhatsApp conversations are automatically synced to LeadBuddie.',
    icon: 'MessageSquare',
  },
  {
    step: 4,
    title: 'Buddie Replies and Follows Up',
    description: 'Buddie drafts instant replies in your customer’s own language, follows up quiet leads, and chases AMC renewals — approve each reply or let it run on auto.',
    icon: 'Brain',
  },
  {
    step: 5,
    title: 'Never Miss a Follow-up',
    description: 'Get smart reminders and never lose a potential customer again.',
    icon: 'CheckCircle',
  },
] as const

export const COMPLIANCE_STATEMENTS = [
  'We help you manage and organize WhatsApp leads',
  'We receive leads from your WhatsApp Business number',
  'We organize conversations in a CRM',
  'We generate AI insights from conversations',
  'We do NOT send spam or unsolicited messages',
  'We do NOT share data with third parties',
  'We comply with Meta\'s WhatsApp Business Policy',
] as const

// TESTIMONIALS — only verified, paying customers should appear here.
// Others are commented out pending founder verification. Do not re-enable
// without confirming the customer is real, active, and quoted with consent.
export const TESTIMONIALS = [
  {
    quote: 'Handling more than 100 leads per day was very time-consuming. After LeadBuddie, responses and follow-ups became much easier.',
    author: 'Master Water Purifier',
    company: 'Master Water Purifier',
    location: 'London, UK',
    rating: 5,
    metrics: {
      primary: '100+',
      primaryLabel: 'leads per day',
      secondary: 'Easier',
      secondaryLabel: 'follow-ups',
    },
  },
  // TODO: founder verification — quotes are drafts based on each customer's
  // business type. Replace with the actual customer wording before press use.
  {
    quote: 'Bulk WhatsApp enquiries from retailers used to pile up in three different phones. With LeadBuddie our team works from one inbox and every B2B order is tracked from first message to dispatch.',
    author: 'Classic Leathers',
    company: 'Classic Leathers',
    location: 'Sydney, Australia',
    rating: 5,
    metrics: {
      primary: '1 inbox',
      primaryLabel: 'for the whole team',
      secondary: '0',
      secondaryLabel: 'orders lost in DMs',
    },
  },
  {
    quote: 'Trial bookings, membership renewals, class enquiries — it was all sitting in one founder\'s WhatsApp. LeadBuddie made it a shared workflow and our trainers stopped chasing screenshots.',
    author: 'Zyrax Fitness',
    company: 'Zyrax Fitness',
    location: 'Austin, USA',
    rating: 5,
    metrics: {
      primary: 'Shared',
      primaryLabel: 'inbox for trainers',
      secondary: 'Faster',
      secondaryLabel: 'trial conversions',
    },
  },
  {
    quote: 'Every trip enquiry needs a custom itinerary and three follow-ups. LeadBuddie keeps the whole conversation, quote, and callback in one place — we stopped losing high-ticket bookings to slow replies.',
    author: 'Nitya Tours and Travels',
    company: 'Nitya Tours & Travels',
    location: 'Dubai, UAE',
    rating: 5,
    metrics: {
      primary: 'Higher',
      primaryLabel: 'package conversion',
      secondary: 'Zero',
      secondaryLabel: 'missed follow-ups',
    },
  },
  {
    quote: 'Site-visit requests and quote enquiries used to slip through cracks. Now each lead has a stage, an owner, and a follow-up date — our painters and the office work off the same screen.',
    author: 'Spectrum Painting Solution',
    company: 'Spectrum Painting Solutions',
    location: 'Berlin, Germany',
    rating: 5,
    metrics: {
      primary: 'On-time',
      primaryLabel: 'quote follow-ups',
      secondary: 'Clear',
      secondaryLabel: 'ownership per lead',
    },
  },
  // TODO: founder verification — re-enable only after confirming customer consent and active usage.
  // {
  //   quote: 'Before LeadBuddie, I was juggling 3 phones and losing leads daily. Now all my WhatsApp chats are in one place, and the AI helps me reply faster.',
  //   author: 'Rajesh Kumar',
  //   company: 'Thuli Paintings',
  //   location: 'Chennai',
  //   rating: 5,
  //   metrics: { primary: '40%', primaryLabel: 'more deals closed', secondary: '2 months', secondaryLabel: 'to see results' },
  // },
  // {
  //   quote: 'The AI reply suggestions are a game-changer. I can respond to customers in seconds instead of minutes. My team loves the shared inbox.',
  //   author: 'Priya Sharma',
  //   company: 'Home Decor Solutions',
  //   location: 'Bangalore',
  //   rating: 5,
  //   metrics: { primary: '30%', primaryLabel: 'faster response time', secondary: '3x', secondaryLabel: 'conversion rate' },
  // },
  // {
  //   quote: 'As a contractor, I get 20-30 WhatsApp enquiries daily. LeadBuddie helps me prioritize which leads are hot and which can wait.',
  //   author: 'Amit Patel',
  //   company: 'Patel Construction',
  //   location: 'Ahmedabad',
  //   rating: 5,
  //   metrics: { primary: '100%', primaryLabel: 'follow-up rate', secondary: '0', secondaryLabel: 'missed leads' },
  // },
  // {
  //   quote: 'The chat inbox feels just like WhatsApp but better. I can see all conversations, add notes, and my team knows exactly what\'s happening with each lead.',
  //   author: 'Sunita Reddy',
  //   company: 'Reddy Interiors',
  //   location: 'Hyderabad',
  //   rating: 5,
  //   metrics: { primary: '50%', primaryLabel: 'time saved', secondary: '2x', secondaryLabel: 'team efficiency' },
  // },
  // {
  //   quote: 'Started with the free trial and was hooked. The AI summaries save me so much time - I can understand a lead\'s full context in 30 seconds.',
  //   author: 'Vikram Singh',
  //   company: 'Singh Electricals',
  //   location: 'Delhi',
  //   rating: 5,
  //   metrics: { primary: '90%', primaryLabel: 'faster lead review', secondary: '5 min', secondaryLabel: 'avg response time' },
  // },
  // {
  //   quote: 'Best investment for my business. The unified inbox means I can manage everything from my laptop instead of being stuck on my phone.',
  //   author: 'Meera Nair',
  //   company: 'Nair Plumbing Services',
  //   location: 'Kochi',
  //   rating: 5,
  //   metrics: { primary: '60%', primaryLabel: 'productivity boost', secondary: '24/7', secondaryLabel: 'lead management' },
  // },
] as const

export const SEO = {
  title: 'LeadBuddie — AI Sales Employee for WhatsApp that Books Leads',
  description:
    'LeadBuddie is an AI sales employee for WhatsApp. It replies to leads instantly, follows up automatically, qualifies serious customers, and books calls, demos, site visits & appointments — on the official WhatsApp Business API. Built for Indian businesses. Free 30-day trial.',
  keywords:
    // Head terms (highest intent)
    'AI sales employee for WhatsApp, WhatsApp CRM, WhatsApp CRM India, WhatsApp automation for business, WhatsApp Business API India, AI chatbot for WhatsApp, AI WhatsApp assistant, WhatsApp auto reply software, ' +
    // Lead + booking intent
    'WhatsApp lead management software, lead management software India, WhatsApp follow up automation, WhatsApp appointment booking, book appointments on WhatsApp, WhatsApp booking system, AI sales agent, AI receptionist for business, WhatsApp bot for small business, WhatsApp chatbot for business India, WhatsApp marketing software India, automated WhatsApp replies, ' +
    // Vertical / industry
    'salon appointment booking software, gym lead management software, clinic appointment booking WhatsApp, travel agency CRM India, coaching institute CRM, home service booking software, ' +
    // Water-treatment cluster (existing ranking terms — retained)
    'water purifier CRM, water purifier dealer software, water treatment CRM, RO service software India, AMC renewal software India, RO CRM software, water purifier lead management, AMC reminder app, annual maintenance contract CRM, AC service software India, service center software India',
} as const

/** Social proof stats for homepage (CustomerProofSection)
 * NOTE: leadsManaged + businessesOnboarded are aggregate numbers across the
 * platform. Founder: update these to match actual production figures. */
export const SOCIAL_PROOF_STATS = {
  leadsManaged: '5000+',
  businessesOnboarded: '20+',
  trustLine: 'Built for service and repair teams — more growing businesses onboarding',
} as const
