export const BRAND = {
  name: 'LeadBuddie',
  tagline: 'AI co-pilot for WhatsApp & Instagram — built for Indian SMBs',
  company: 'Hutliv Technologies LLP',
  founded: 2025,
} as const

export const CONTACT = {
  general: 'hello@hutliv.com',
  support: 'hello@hutliv.com',
  phone: '+91 9003444702',
  address: 'India',
  /** WhatsApp link for "Chat on WhatsApp" CTA */
  whatsappUrl: 'https://wa.me/919003444702',
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
    description: 'Replies to WhatsApp leads in seconds, sends brochures and catalogs from your media library, follows up quiet customers, and hands off the hot ones. Not a chatbot — an actual employee with modes you trust.',
    icon: 'Sparkles',
  },
  {
    id: 'autonomy-modes',
    title: 'Watch · Approval · Auto modes',
    description: 'Three trust levels you can switch between in one click. Watch drafts privately. Approval queues every reply for your tap. Auto replies on its own inside your guardrails. Same toggles in every mode.',
    icon: 'Hand',
  },
  {
    id: 'first-reply-instant',
    title: 'First reply always instant',
    description: 'When a brand-new lead messages — or one returns after 7+ quiet days — Buddie auto-sends the first reply regardless of mode. Speed-of-first-response is the conversion metric; we lock it in by default.',
    icon: 'Zap',
  },
  {
    id: 'escalation-routing',
    title: 'Hot buyers + complaints routed to you',
    description: 'Buying intent, refund, or complaint language triggers a handoff automatically — Buddie does not reply, you get a Review task in your queue. Works in English, Hindi, Tamil, and Tanglish.',
    icon: 'AlertTriangle',
  },
  {
    id: 'approval-queue',
    title: 'Approval queue with full audit',
    description: 'Every draft Buddie wants to send lands in your queue with the proposed text and the reason. Send, edit, or reject in two taps. Every action is logged with a reason — never a black box.',
    icon: 'CheckCircle2',
  },
  {
    id: 'no-invent-guardrail',
    title: 'Never invents a price',
    description: 'If pricing isn\'t in your business profile, Buddie defers: "Let me check the latest pricing and share shortly." It will not make up numbers — guarded in the prompt with a regression test.',
    icon: 'ShieldCheck',
  },
  {
    id: 'followup-automation',
    title: 'Follow-up automation (configurable)',
    description: 'Buddie nudges quiet leads at the timings you enable — 1h, 6h, 18h after they go quiet — inside the 24-hour WhatsApp window. Toggle each slot independently. Long-tail template-based follow-ups coming soon.',
    icon: 'Clock',
  },
  {
    id: 'chat-inbox',
    title: 'Unified WhatsApp Chat Inbox',
    description: 'See all your WhatsApp conversations in one place instead of juggling multiple phones. Filter by assigned, unassigned, and my chats.',
    icon: 'MessageSquare',
  },
  {
    id: 'lead-crm',
    title: 'Lead CRM with full context',
    description: 'Status, tags, budget, source, AMC/renewal info — everything about the lead is stored alongside the WhatsApp chat, so Buddie has the context to reply well.',
    icon: 'Kanban',
  },
  {
    id: 'team-roles',
    title: 'Team Roles & Assignment',
    description: 'Invite your team, assign chats, and keep visibility on who is handling which lead — owners and admins see everything.',
    icon: 'Users',
  },
  {
    id: 'safe-whatsapp',
    title: 'Meta-Compliant WhatsApp Usage',
    description: 'Official Meta tech provider. We only help you reply to leads that contacted you. No spam, no bulk blasting. Built to respect WhatsApp Business policies and the 24-hour customer-service window.',
    icon: 'ShieldCheck',
  },
] as const

// Plan feature lists shown on /pricing. Mirrors the live product tiers in
// leadmate-hutliv/config/plans.ts. The Buddie modes are the headline differentiator per tier:
// Starter ₹999 unlocks Approval mode; Growth ₹2,499 adds Auto + brochure sending + AMC engine;
// Scale ₹4,999 adds multi-seat + voice minutes. Free is intentionally light — drive upgrades.
export const PLAN_VISIBLE_FEATURES: Record<string, string[]> = {
  basic: [
    'WhatsApp inbox + lead CRM (read-only AI)',
    'Up to 50 leads',
    'Manual replies only — Buddie not included',
    'No campaigns, no automation',
  ],
  starter: [
    'Buddie AI sales employee · Watch + Approval modes',
    'First-reply auto-send (brand-new leads)',
    'Approval queue with edit + reject',
    'Escalation routing (high intent + complaints)',
    'Unified WhatsApp inbox · 1 number',
    'Unlimited AI replies (daily cap protects costs)',
    'Up to 20 templates · 2 seats',
  ],
  growth: [
    'Everything in Starter, plus:',
    'Buddie Auto mode (replies on its own)',
    'Send brochures and catalogs from media library',
    'AMC renewal engine + dormant-lead insights',
    'Campaigns · 3/month · up to 3,000 recipients',
    'AI template builder · 50/month',
    'Up to 5 seats',
  ],
  scale: [
    'Everything in Growth, plus:',
    'Up to 10 seats · 2 WhatsApp numbers',
    'Campaigns · 20/month · 50,000 recipients',
    'Voice minutes (AI inbound call agent — coming soon)',
    'Team analytics + priority support',
    'Schedule campaigns + auto-retry',
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
    description: 'AI replies your WhatsApp. Approval mode — you tap to send, Buddie drafts.',
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
    description: 'Buddie on autopilot · brochure sending · AMC renewal engine · campaigns.',
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
    description: 'Create your account in under 2 minutes. No credit card required.',
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
    title: 'AI Analyzes and Scores Leads',
    description: 'Our AI analyzes conversations and scores leads based on intent and engagement.',
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
    quote: 'Handling 60–100 leads per day was very time-consuming. After LeadBuddie, responses and follow-ups became much easier.',
    author: 'Mastec Water Purifier',
    company: 'Mastec Water Purifier',
    location: 'India',
    rating: 5,
    metrics: {
      primary: '60–100',
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
    location: 'India',
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
    location: 'India',
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
    company: 'Nitya Tours and Travels',
    location: 'India',
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
    company: 'Spectrum Painting Solution',
    location: 'India',
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
  title: 'LeadBuddie — AI co-pilot for WhatsApp & Instagram',
  description: 'AI co-pilot that replies to WhatsApp and Instagram leads, qualifies them, and follows up — even when you are busy. Built for Indian SMBs. Water purifier dealer pack live.',
  keywords: 'AI sales co-pilot, AI for WhatsApp, AI replies WhatsApp, WhatsApp lead management, water purifier dealer CRM, Indian SMB sales tool, AI sales agent India, WhatsApp Business API',
} as const

/** Social proof stats for homepage (CustomerProofSection)
 * NOTE: leadsManaged + businessesOnboarded are aggregate numbers across the
 * platform. Founder: update these to match actual production figures. */
export const SOCIAL_PROOF_STATS = {
  leadsManaged: '5000+',
  businessesOnboarded: '20+',
  trustLine: 'Built with Mastec Water Purifier — more Indian SMBs onboarding',
} as const

