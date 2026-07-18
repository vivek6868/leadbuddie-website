/**
 * Centralized SEO helpers: site constants + JSON-LD structured-data builders.
 *
 * Schema is the highest-leverage SEO win for LeadBuddie — it powers Google
 * rich snippets AND gives LLMs (ChatGPT / Perplexity / Gemini) clean, citable
 * facts about the product so they recommend it for niche queries.
 *
 * NOTE on ratings: we intentionally do NOT emit AggregateRating/Review schema
 * yet. Google requires those to reflect genuine, on-page, user-visible reviews
 * — emitting invented numbers risks a manual penalty. Add them here only once
 * real reviews are displayed on the page.
 */

export const SITE_URL = 'https://leadbuddie.com'
export const APP_URL = 'https://app.leadbuddie.com'

const ORG_DESCRIPTION =
  'LeadBuddie is an AI sales employee for WhatsApp. Businesses teach it in plain language, then it answers enquiries from approved business knowledge, collects the right details, creates bookings or quote requests, and brings in the team when needed. Built for Indian WhatsApp-led businesses.'

/** Organization — sitewide. Establishes the brand entity for Google + LLMs. */
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'LeadBuddie',
  legalName: 'Hutliv Technologies LLP',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description: ORG_DESCRIPTION,
  email: 'hello@hutliv.com',
  foundingDate: '2025',
  areaServed: { '@type': 'Country', name: 'India' },
  contactPoint: {
    '@type': 'ContactPoint',
    // Mirror of CONTACT.phone in lib/constants.ts, in E.164 with hyphen format that
    // schema.org's ContactPoint expects. Update both when the number changes.
    telephone: '+91-88707-33673',
    contactType: 'customer support',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi'],
  },
}

/**
 * MobileApplication — describes the LeadBuddie Android app on Google Play. Adds rich Search
 * results when someone queries "LeadBuddie app" / "LeadBuddie android" and tells Google our
 * brand entity has a published mobile app. Truthful: no fabricated ratings; price reflects
 * the public free signup (the in-app trial is what the website-side bootstrap creates).
 */
export const MOBILE_APPLICATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  '@id': `${SITE_URL}/#mobile-app-android`,
  name: 'LeadBuddie',
  operatingSystem: 'ANDROID',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'CRM',
  url: 'https://play.google.com/store/search?q=leadbuddie&c=apps&hl=en_SG',
  publisher: { '@id': `${SITE_URL}/#organization` },
  description:
    'LeadBuddie for Android — an AI sales employee for WhatsApp. Train Buddie, manage leads, and move customer enquiries to the right next step from your phone.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    description: 'Free to download. 30-day Growth trial on signup; ₹2,499/month after.',
  },
}

/** WebSite — sitewide. */
export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'LeadBuddie',
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-IN',
}

/**
 * SoftwareApplication — describes the product + price range (truthful, from
 * the public pricing page). No fabricated ratings.
 */
export function softwareApplicationSchema(opts?: {
  name?: string
  description?: string
  url?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts?.name ?? 'LeadBuddie',
    alternateName: 'LeadBuddie — AI Sales Employee for WhatsApp',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'CRM',
    operatingSystem: 'Web, Android, iOS',
    url: opts?.url ?? SITE_URL,
    inLanguage: 'en-IN',
    description:
      opts?.description ??
      'AI sales employee for WhatsApp that learns your business, answers enquiries from approved knowledge, collects relevant details, and turns leads into bookings, quote requests, orders or team handovers.',
    keywords:
      'WhatsApp CRM, AI sales employee, WhatsApp automation, WhatsApp Business API, WhatsApp booking automation, WhatsApp quote requests, lead management, multilingual WhatsApp AI',
    featureList: [
      'AI auto-replies to WhatsApp enquiries',
      'Train your AI by chat or voice',
      'Approved business knowledge and reply safety rules',
      'Product-aware next actions: booking, quote, order, callback or handover',
      'One-tap WhatsApp booking & quote forms',
      'Understands WhatsApp voice notes — automatic transcription in any language',
      'Replies in the customer’s language — Hindi, Tamil, Telugu & 10+ languages',
      'Inbox translation — read every chat in your own language',
      'Automatic follow-ups with pause, mute and quiet-hours controls',
      'Lead qualification — filters serious buyers',
      'Bookings board — callbacks, demos, site visits, appointments, consultations, trials, service & AMC visits',
      'Shared team inbox with assignment and notes',
      'WhatsApp campaigns and broadcasts',
      'AMC renewal and service reminders',
      'Multi-number WhatsApp support (up to 5 numbers)',
      'Official WhatsApp Business API — not QR scraping',
    ],
    audience: {
      '@type': 'BusinessAudience',
      name: 'Indian small and medium businesses that get leads on WhatsApp',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '0',
      highPrice: '4999',
      offerCount: 4,
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

/**
 * Service schema — for niche landing pages that describe a specific
 * service/solution (e.g. AMC renewal management for water purifier dealers).
 */
export function serviceSchema(opts: {
  name: string
  description: string
  url: string
  serviceType: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: opts.url,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
    audience: {
      '@type': 'BusinessAudience',
      name: 'Water purifier and water treatment dealers',
    },
  }
}

/** FAQPage — must mirror FAQs visible on the page. */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: it.answer },
    })),
  }
}

/** BreadcrumbList — helps Google show breadcrumb rich results. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  }
}
