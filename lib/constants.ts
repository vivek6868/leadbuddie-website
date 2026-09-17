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
    description: 'When enabled for your plan and business rules, Buddie can reply to WhatsApp enquiries, share approved product information, and help your team follow up on quiet leads.',
    icon: 'Sparkles',
  },
  {
    id: 'train-buddie',
    title: 'Train Buddie by chat or voice',
    description: 'Teach Buddie in plain language by text or voice: what to answer, what to ask, and what it should not promise. Review the proposed changes before they go live.',
    icon: 'GraduationCap',
  },
  {
    id: 'ai-product-builder',
    title: 'Create products with AI',
    description: 'On Growth and Scale, describe what you sell in one sentence. Buddie prepares a product or service draft for you to review before anything is saved.',
    icon: 'PackagePlus',
  },
  {
    id: 'one-tap-bookings-quotes',
    title: 'One-tap bookings & quotes',
    description: 'Instead of a long back-and-forth, Buddie can send a tap-to-fill card in WhatsApp so your team receives a complete, structured booking or quote request.',
    icon: 'ListChecks',
  },
  {
    id: 'voice-notes-transcription',
    title: 'Understands and replies in voice',
    description: 'Buddie understands customer voice notes, captures the details on a request, and on Growth and Scale can reply with a natural voice note in English, Hindi, Tamil or Malayalam.',
    icon: 'Mic',
  },
  {
    id: 'multilingual-translation',
    title: 'Language-aware replies and inbox translation',
    description: 'Buddie can match the customer\'s language and script, including commonly used Indian languages. Inbox translation is available where supported.',
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
    description: 'For eligible water-treatment businesses, Buddie can prepare 60, 30, 15 and 7-day AMC reminders. Sending depends on your mode, approved templates and WhatsApp eligibility.',
    icon: 'RefreshCcw',
  },
  {
    id: 'winback-lapsed-amc',
    title: 'Win back lapsed AMCs',
    description: 'For eligible water-treatment businesses, prepare a reactivation message for customers with lapsed AMCs and review or send it under your chosen controls.',
    icon: 'RefreshCcw',
  },
  {
    id: 'revive-dormant-leads',
    title: 'Revive dormant leads',
    description: 'Set up a controlled re-engagement play for eligible quiet leads, subject to your plan, autonomy mode and WhatsApp messaging rules.',
    icon: 'Clock',
  },
  {
    id: 'followup-automation',
    title: 'Day 1/3/7 & Quiet-lead Follow-ups',
    description: 'Growth and Scale businesses can configure follow-up nudges for quiet leads, with pause, mute and human-handover controls.',
    icon: 'Zap',
  },
  {
    id: 'approval-desk',
    title: 'Approval Desk & Full History',
    description: 'Review, edit and send Buddie drafts in one place, with a visible history of recent activity.',
    icon: 'CheckCircle2',
  },
  {
    id: 'no-invent-guardrail',
    title: 'Pricing guardrails & Human takeover',
    description: 'Buddie uses the business information you approve. When a price or fact is not configured, it can defer to your team; manual takeover can pause automated replies for that lead.',
    icon: 'ShieldCheck',
  },
  {
    id: 'chat-inbox',
    title: 'Unified Inbox (WhatsApp + Instagram)',
    description: 'Bring connected WhatsApp and Instagram conversations into one inbox, with lead context, ownership and next actions.',
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
    title: 'WhatsApp policy controls',
    description: 'LeadBuddie connects to WhatsApp Business services and provides controls for templates, campaigns and customer messaging. You remain responsible for consent and compliance with WhatsApp policies.',
    icon: 'ShieldCheck',
  },
] as const

// Plan feature lists shown on /pricing. Mirrors the live product tiers in
// leadmate-hutliv/config/plans.ts. The Buddie modes are the headline differentiator per tier:
// Public plan copy mirrors leadmate-hutliv/config/plans.ts. Keep customer-facing limits and
// conditions explicit: plan access does not bypass WhatsApp template, consent or policy rules.
export const PLAN_VISIBLE_FEATURES: Record<string, string[]> = {
  basic: [
    'Manually add and organise up to 10 leads',
    '1 pipeline · 3 stages',
    'No connected WhatsApp number or Buddie AI',
    'No product catalog, bookings or campaigns',
  ],
  starter: [
    'Buddie auto-replies to WhatsApp enquiries — up to 100 AI replies a day',
    'Understands customer voice notes',
    '1 WhatsApp number · 2 team members',
    'Lead statuses, notes and manual follow-up reminders',
    'No product catalog, Booking Agent, follow-ups or campaigns',
  ],
  growth: [
    'Everything in Starter, plus:',
    'Buddie Auto mode and configurable follow-up nudges',
    'Buddie Voice — replies with a natural voice note · 60 min/month',
    'AI product builder — describe an item and review the draft before saving',
    'Product Awareness Agent — shares approved product details and assets, and can offer a booking request',
    'Booking Agent — captures booking requests for demos, callbacks and site visits in chat',
    'Products & Services catalog (up to 20 products)',
    '2 WhatsApp numbers · 5 team members',
    'WhatsApp campaigns · 3/month (up to 3,000 recipients) + asset library',
    'AMC renewal tools for eligible water-treatment businesses + dormant-lead revival',
  ],
  scale: [
    'Everything in Growth, plus:',
    '5 WhatsApp numbers · 10 team members',
    'Unlimited products & ad → product mappings',
    'Campaigns · 20/month · 50,000 recipients · scheduling, auto-retry & analytics',
    'Team assignment, analytics & shared inbox',
    'Buddie Voice · 200 min/month · choose from 4 voices',
    'Priority support',
  ],
} as const

// Public 2026 pricing ladder. Mirrors leadmate-hutliv/config/plans.ts (the visible `starter_v3`,
// `growth_v2` and `scale` plans). Old Basic/Starter ₹499 / Growth ₹999 / Team ₹1,999 /
// Enterprise ₹4,999 are grandfathered-only in the product and have been removed from this
// public-facing list. Growth is highlighted as recommended (the trust bridge tier — Buddie
// auto-replies, brochures and eligible AMC renewals).
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
    id: 'starter_v3',
    name: 'Starter',
    price: 1499,
    currency: '₹',
    period: 'month',
    description: 'Buddie auto-replies to WhatsApp enquiries — up to 100 AI replies a day.',
    features: PLAN_VISIBLE_FEATURES.starter,
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    id: 'growth_v2',
    name: 'Growth',
    price: 2499,
    currency: '₹',
    period: 'month',
    description: 'Automation for product-aware replies, booking requests, follow-ups and campaigns.',
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
    description: 'Teams, advanced campaigns, multi-number WhatsApp and 200 Buddie Voice minutes/month.',
    features: PLAN_VISIBLE_FEATURES.scale,
    cta: 'Start Free Trial',
    highlighted: false,
  },
] as const

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Create your workspace',
    description: 'Start with the Growth plan free for 30 days. No credit card is required, and the trial falls back to the Free plan unless you choose a paid plan.',
    icon: 'UserPlus',
  },
  {
    step: 2,
    title: 'Connect your WhatsApp Business number',
    description: 'Follow the guided Meta connection flow. New supported conversations can appear in LeadBuddie after the number is connected.',
    icon: 'Link',
  },
  {
    step: 3,
    title: 'Give Buddie the business basics',
    description: 'Paste the important information or import it from your website, then review what Buddie found: business scope, services, prices, rules and restrictions.',
    icon: 'BookOpen',
  },
  {
    step: 4,
    title: 'Define what happens after interest',
    description: 'Add at least one product or service and choose the useful outcome: answer only, quote request, booking request, order request or team handover. Set the details Buddie should collect.',
    icon: 'ListChecks',
  },
  {
    step: 5,
    title: 'Test each customer journey',
    description: 'Use the practice chat to try real enquiries, confirm the questions and handover, and correct the business knowledge before customers see it.',
    icon: 'MessagesSquare',
  },
  {
    step: 6,
    title: 'Choose the operating mode',
    description: 'Start in Watch or Approval if you want review, or enable Auto for eligible actions when you are satisfied with the test. Plan limits and WhatsApp rules still apply.',
    icon: 'ShieldCheck',
  },
  {
    step: 7,
    title: 'Receive a request your team can finish',
    description: 'Buddie collects the configured details and creates a clear quote, booking, order or handover request. Your team confirms the final business action.',
    icon: 'CheckCircle',
  },
] as const

export const COMPLIANCE_STATEMENTS = [
  'We help you manage and organize WhatsApp leads',
  'We receive leads from your WhatsApp Business number',
  'We organize conversations in a CRM',
  'We generate AI insights from conversations',
  'Businesses must use approved templates, consent and policy-compliant messaging',
  'Service providers process data only as described in our Privacy Policy',
  'Owners remain responsible for consent and WhatsApp Business Policy compliance',
] as const

// Only the verified, consented customer quote below may be displayed. Add no further
// testimonial without a source record and explicit permission.
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
] as const

export const SEO = {
  title: 'LeadBuddie — AI Sales Software for WhatsApp',
  description:
    'LeadBuddie helps WhatsApp-led businesses respond to enquiries, collect details for booking or quote requests, and hand conversations to their team. Automation varies by plan, setup and customer-messaging eligibility. Includes a 30-day Growth trial.',
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
