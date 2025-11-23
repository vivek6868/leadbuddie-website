export const BRAND = {
  name: 'LeadBuddie',
  tagline: 'AI-Powered WhatsApp Lead Manager for SMBs Worldwide',
  company: 'Hutliv Technologies',
  founded: 2025,
} as const

export const CONTACT = {
  general: 'hello@hutliv.com',
  support: 'support@hutliv.com',
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
] as const

export const FEATURES = [
  {
    id: 'ai-scoring',
    title: 'AI Lead Scoring',
    description: 'Automatically score and prioritize leads based on conversation quality, intent, and engagement.',
    icon: 'Brain',
  },
  {
    id: 'whatsapp-integration',
    title: 'WhatsApp Integration',
    description: 'Seamlessly connect your WhatsApp Business number and manage all leads in one place.',
    icon: 'MessageCircle',
  },
  {
    id: 'smart-followups',
    title: 'Smart Follow-up Reminders',
    description: 'Never miss a follow-up with AI-powered reminders based on lead behavior and conversation context.',
    icon: 'Bell',
  },
  {
    id: 'pipeline',
    title: 'Lead Pipeline Management',
    description: 'Organize leads through customizable stages from initial contact to closed deal.',
    icon: 'Workflow',
  },
  {
    id: 'notes-timeline',
    title: 'Notes & Communication Timeline',
    description: 'Track all conversations, notes, and interactions in a unified timeline view.',
    icon: 'FileText',
  },
  {
    id: 'ai-summaries',
    title: 'AI-Powered Summaries',
    description: 'Get instant AI summaries of conversations to quickly understand lead context.',
    icon: 'Sparkles',
  },
] as const

export const PRICING_PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    price: 299,
    currency: '₹',
    period: 'month',
    description: 'Perfect for solo contractors',
    features: [
      'Up to 100 leads/month',
      'AI-powered lead summaries',
      'Manual WhatsApp integration',
      'Basic lead scoring',
      'Follow-up reminders',
      'Email support',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 599,
    currency: '₹',
    period: 'month',
    description: 'Best for growing businesses',
    features: [
      'Up to 500 leads/month',
      'WhatsApp Business API integration',
      'Auto-reply messages',
      'Advanced AI lead scoring',
      'Smart follow-up automation',
      'Priority email support',
      'Custom lead pipelines',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: 1999,
    currency: '₹',
    period: 'month',
    description: 'For teams and agencies',
    features: [
      'Unlimited leads',
      'Team collaboration',
      'Multi-user access',
      'Advanced analytics',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 priority support',
      'White-label options',
    ],
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

export const TESTIMONIALS = [
  {
    quote: 'Closed 40% more leads with LeadBuddie. Never missing a follow-up changed our business.',
    author: 'Thuli Paintings',
    location: 'Chennai',
  },
] as const

export const SEO = {
  title: 'LeadBuddie - AI-Powered WhatsApp Lead Manager for SMBs',
  description: 'Never lose a WhatsApp lead again. AI-powered lead management for contractors and small businesses worldwide. Track leads, automate follow-ups, close more deals.',
  keywords: 'WhatsApp CRM, lead management, SMB, AI lead scoring, WhatsApp Business API, contractor CRM, lead management India',
} as const

