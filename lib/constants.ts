export const BRAND = {
  name: 'LeadBuddie',
  tagline: 'WhatsApp-first chat inbox and AI copilot for businesses',
  company: 'Hutliv Technologies',
  founded: 2025,
} as const

export const CONTACT = {
  general: 'hello@hutliv.com',
  support: 'hello@hutliv.com',
  phone: '[Your India Phone]', // TODO: Fill in actual phone
  address: '[Your India Address]', // TODO: Fill in actual address
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

export const FEATURES = [
  {
    id: 'chat-inbox',
    title: 'Unified WhatsApp Chat Inbox',
    description: 'See all your WhatsApp conversations in one place instead of juggling multiple phones. Filter by assigned, unassigned, and my chats.',
    icon: 'MessageSquare',
  },
  {
    id: 'realtime-chat',
    title: 'Real-Time Chat Workspace',
    description: 'Desktop split view and mobile-first chat screens that feel like WhatsApp, with instant updates as new messages arrive.',
    icon: 'Zap',
  },
  {
    id: 'ai-replies',
    title: 'AI Reply Copilot',
    description: 'Get AI-suggested replies based on the full conversation context and your business description. Edit and send in seconds.',
    icon: 'Sparkles',
  },
  {
    id: 'ai-summaries',
    title: 'AI Lead Summaries',
    description: 'Instant AI summaries of the conversation and notes so anyone on your team can understand the lead in a few seconds.',
    icon: 'FileText',
  },
  {
    id: 'lead-crm',
    title: 'Simple Lead CRM',
    description: 'Status, tags, budget, source and follow-up info – everything about the lead is stored alongside the WhatsApp chat.',
    icon: 'Kanban',
  },
  {
    id: 'followups',
    title: 'Follow-Up Reminders',
    description: 'Know which leads are hot, overdue or need follow-up soon. Keep your team on top of every opportunity.',
    icon: 'Clock',
  },
  {
    id: 'team-roles',
    title: 'Team Roles & Assignment',
    description: 'Invite your team, assign chats, and keep visibility on who is handling which lead – owners and admins see everything.',
    icon: 'Users',
  },
  {
    id: 'safe-whatsapp',
    title: 'Meta-Compliant WhatsApp Usage',
    description: 'We only help you manage leads that contact you. No spam, no bulk blasting. Built to respect WhatsApp Business policies.',
    icon: 'ShieldCheck',
  },
] as const

export const PLAN_VISIBLE_FEATURES: Record<string, string[]> = {
  basic: [
    'Manual notes and lead tracking',
    'Up to 10 leads',
    '1 pipeline (3 stages)',
    'Basic activity timeline',
    'No WhatsApp or templates',
    'No campaigns',
  ],
  starter: [
    'WhatsApp inbox (1 number)',
    'Send approved templates in chat',
    'Create up to 10 templates',
    'AI suggested replies (click → edit → send)',
    'Manual AI summaries on demand',
    '50 AI actions/month',
    'No campaigns',
  ],
  growth: [
    '3 campaigns/month',
    'Up to 1,500 recipients per campaign',
    'Up to 3,000 recipients per month',
    'Create up to 50 templates',
    'AI template builder: 20/month',
    'Unlimited AI messages',
    'Includes all Starter features',
  ],
  team: [
    '20 campaigns/month',
    'Up to 5,000 recipients per campaign',
    'Up to 50,000 recipients per month',
    'Create up to 200 templates',
    'AI template builder: 100/month',
    'Schedule campaigns + auto-retry',
    'Includes all Growth features',
  ],
  enterprise: [
    'Unlimited campaigns',
    'Unlimited recipients per campaign',
    'Unlimited recipients per month',
    'Unlimited templates',
    'Unlimited AI template builder',
    'Multi-number WhatsApp + priority support',
  ],
} as const

export const PRICING_PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    price: 0,
    currency: '₹',
    period: 'month',
    description: 'Get started with manual lead tracking and simple CRM.',
    features: PLAN_VISIBLE_FEATURES.basic,
    cta: 'Start Free',
    highlighted: false,
  },
  {
    id: 'starter',
    name: 'Starter',
    price: 499,
    currency: '₹',
    period: 'month',
    description: 'Single-number WhatsApp inbox with AI replies and summaries.',
    features: PLAN_VISIBLE_FEATURES.starter,
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 999,
    currency: '₹',
    period: 'month',
    description: 'Campaigns + templates + unlimited AI messages for growing teams.',
    features: PLAN_VISIBLE_FEATURES.growth,
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    id: 'team',
    name: 'Team',
    price: 1999,
    currency: '₹',
    period: 'month',
    description: 'High-volume campaigns and automation for teams and agencies.',
    features: PLAN_VISIBLE_FEATURES.team,
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 4999,
    currency: '₹',
    period: 'month',
    description: 'Custom deployments with multi-number WhatsApp and priority support.',
    features: PLAN_VISIBLE_FEATURES.enterprise,
    cta: 'Contact Us',
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

export const TESTIMONIALS = [
  {
    quote: 'Before LeadBuddie, I was juggling 3 phones and losing leads daily. Now all my WhatsApp chats are in one place, and the AI helps me reply faster.',
    author: 'Rajesh Kumar',
    company: 'Thuli Paintings',
    location: 'Chennai',
    rating: 5,
    metrics: {
      primary: '40%',
      primaryLabel: 'more deals closed',
      secondary: '2 months',
      secondaryLabel: 'to see results',
    },
  },
  {
    quote: 'The AI reply suggestions are a game-changer. I can respond to customers in seconds instead of minutes. My team loves the shared inbox.',
    author: 'Priya Sharma',
    company: 'Home Decor Solutions',
    location: 'Bangalore',
    rating: 5,
    metrics: {
      primary: '30%',
      primaryLabel: 'faster response time',
      secondary: '3x',
      secondaryLabel: 'conversion rate',
    },
  },
  {
    quote: 'As a contractor, I get 20-30 WhatsApp enquiries daily. LeadBuddie helps me prioritize which leads are hot and which can wait.',
    author: 'Amit Patel',
    company: 'Patel Construction',
    location: 'Ahmedabad',
    rating: 5,
    metrics: {
      primary: '100%',
      primaryLabel: 'follow-up rate',
      secondary: '0',
      secondaryLabel: 'missed leads',
    },
  },
  {
    quote: 'The chat inbox feels just like WhatsApp but better. I can see all conversations, add notes, and my team knows exactly what\'s happening with each lead.',
    author: 'Sunita Reddy',
    company: 'Reddy Interiors',
    location: 'Hyderabad',
    rating: 5,
    metrics: {
      primary: '50%',
      primaryLabel: 'time saved',
      secondary: '2x',
      secondaryLabel: 'team efficiency',
    },
  },
  {
    quote: 'Started with the free trial and was hooked. The AI summaries save me so much time - I can understand a lead\'s full context in 30 seconds.',
    author: 'Vikram Singh',
    company: 'Singh Electricals',
    location: 'Delhi',
    rating: 5,
    metrics: {
      primary: '90%',
      primaryLabel: 'faster lead review',
      secondary: '5 min',
      secondaryLabel: 'avg response time',
    },
  },
  {
    quote: 'Best investment for my business. The unified inbox means I can manage everything from my laptop instead of being stuck on my phone.',
    author: 'Meera Nair',
    company: 'Nair Plumbing Services',
    location: 'Kochi',
    rating: 5,
    metrics: {
      primary: '60%',
      primaryLabel: 'productivity boost',
      secondary: '24/7',
      secondaryLabel: 'lead management',
    },
  },
] as const

export const SEO = {
  title: 'LeadBuddie - AI-Powered WhatsApp Lead Manager',
  description: 'Never lose a WhatsApp lead again. AI-powered lead management for businesses worldwide. Track leads, automate follow-ups, close more deals.',
  keywords: 'WhatsApp CRM, lead management, AI lead scoring, WhatsApp Business API, CRM, lead management',
} as const

