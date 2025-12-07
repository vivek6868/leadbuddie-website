export const BRAND = {
  name: 'LeadBuddie',
  tagline: 'WhatsApp-first chat inbox and AI copilot for Indian service businesses',
  company: 'Hutliv Technologies',
  founded: 2025,
} as const

export const CONTACT = {
  general: 'hello@hutliv.com',
  support: 'support@leadbuddie.com',
  phone: '[Your India Phone]', // TODO: Fill in actual phone
  address: '[Your India Address]', // TODO: Fill in actual address
} as const

export const NAVIGATION = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const

export const LEGAL_LINKS = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Refund Policy', href: '/refund-policy' },
  { name: 'Shipping Policy', href: '/shipping-policy' },
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

export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: 499,
    currency: '₹',
    period: 'month',
    description: 'For solo owners getting organized on WhatsApp',
    features: [
      '1 user seat',
      '1 WhatsApp Business number',
      'Unified WhatsApp chat inbox',
      'Lead CRM with notes & follow-ups',
      'Manual AI reply assist & summaries',
      'Email support',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 999,
    currency: '₹',
    period: 'month',
    description: 'For small teams who want AI to help with replies',
    features: [
      'Up to 5 team members',
      'Full chats workspace with assignments',
      'AI auto-welcome & first response',
      'AI conversation summaries',
      'Follow-up statuses & reminders',
      'Priority email support',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    id: 'team',
    name: 'Team',
    price: 1499,
    currency: '₹',
    period: 'month',
    description: 'For high-volume teams and agencies',
    features: [
      'Up to 20 team members',
      'Multiple workspaces/brands support',
      'Advanced assignment & role controls',
      'SLA-friendly follow-up views',
      'Access to upcoming automations & reports',
      'Priority support',
    ],
    cta: 'Talk to Sales',
    highlighted: false,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 4999,
    currency: '₹',
    period: 'month',
    description: 'Custom deployments & SLAs for larger organisations',
    features: [
      'Everything in Team',
      'Custom onboarding & training',
      'Dedicated account manager',
      'Custom limits & integrations',
      'Data export & audit options',
      'SLA-backed support',
    ],
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
    quote: 'Before LeadBuddie, I was juggling 3 phones and losing leads daily. Now all my WhatsApp chats are in one place, and the AI helps me reply faster. Closed 40% more deals in just 2 months!',
    author: 'Rajesh Kumar',
    company: 'Thuli Paintings',
    location: 'Chennai',
    rating: 5,
  },
  {
    quote: 'The AI reply suggestions are a game-changer. I can respond to customers in seconds instead of minutes. My team loves the shared inbox - no more "who\'s handling this lead?" confusion.',
    author: 'Priya Sharma',
    company: 'Home Decor Solutions',
    location: 'Bangalore',
    rating: 5,
  },
  {
    quote: 'As a contractor, I get 20-30 WhatsApp enquiries daily. LeadBuddie helps me prioritize which leads are hot and which can wait. Never missed a follow-up since we started using it.',
    author: 'Amit Patel',
    company: 'Patel Construction',
    location: 'Ahmedabad',
    rating: 5,
  },
  {
    quote: 'The chat inbox feels just like WhatsApp but better. I can see all conversations, add notes, and my team knows exactly what\'s happening with each lead. Worth every rupee!',
    author: 'Sunita Reddy',
    company: 'Reddy Interiors',
    location: 'Hyderabad',
    rating: 5,
  },
  {
    quote: 'Started with the free trial and was hooked. The AI summaries save me so much time - I can understand a lead\'s full context in 30 seconds instead of reading long chat histories.',
    author: 'Vikram Singh',
    company: 'Singh Electricals',
    location: 'Delhi',
    rating: 5,
  },
  {
    quote: 'Best investment for my small business. The unified inbox means I can manage everything from my laptop instead of being stuck on my phone. Customer support is also very responsive.',
    author: 'Meera Nair',
    company: 'Nair Plumbing Services',
    location: 'Kochi',
    rating: 5,
  },
] as const

export const SEO = {
  title: 'LeadBuddie - AI-Powered WhatsApp Lead Manager for SMBs',
  description: 'Never lose a WhatsApp lead again. AI-powered lead management for contractors and small businesses worldwide. Track leads, automate follow-ups, close more deals.',
  keywords: 'WhatsApp CRM, lead management, SMB, AI lead scoring, WhatsApp Business API, contractor CRM, lead management India',
} as const

