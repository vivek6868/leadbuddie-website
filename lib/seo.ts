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
  'LeadBuddie is customer and service software for Indian businesses. It keeps customers, installed products, service visits, AMC renewals and enquiries in one place, tells the team what needs doing and follows up — with the owner in control of what goes out.'

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
 * MobileApplication — describes the LeadBuddie Android app. A direct Play Store URL is not yet
 * available, so the schema deliberately points to the product site rather than claiming a
 * specific store listing.
 */
export const MOBILE_APPLICATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  '@id': `${SITE_URL}/#mobile-app-android`,
  name: 'LeadBuddie',
  operatingSystem: 'ANDROID',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Customer Operations',
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
  description:
    'LeadBuddie for Android — manage customers, service visits, renewals and enquiries from your phone.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    description: 'Free to download. Every new signup receives a 30-day Growth trial; paid plans start at ₹1,499/month.',
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
    alternateName: 'LeadBuddie — Customer and Service Operations Software',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Customer Operations',
    operatingSystem: 'Web, Android',
    url: opts?.url ?? SITE_URL,
    inLanguage: 'en-IN',
    description:
      opts?.description ??
      'Customer and service software that tracks service visits, AMC renewals and enquiries, prepares the next follow-up from your own business information, and hands work to your team.',
    keywords:
      'water purifier service management software, RO service management software, AMC renewal software, service due tracking, travel agency enquiry software, retail order request software, WhatsApp Business automation',
    featureList: [
      'Follow-ups prepared from the customer’s own history',
      'Customers, installed units, service visits and AMC renewals in one place',
      'AI replies to WhatsApp enquiries when enabled for the applicable plan and business controls',
      'Train your AI by chat or voice',
      'AI-assisted product and service drafting on eligible plans, with owner review before save',
      'Approved business knowledge and reply safety rules',
      'Product-aware next actions: booking, quote, order, callback or handover',
      'WhatsApp booking and quote-request forms',
      'Understands customer WhatsApp voice notes and captures spoken details on requests',
      'AI voice replies in English, Hindi, Tamil and Malayalam on eligible plans',
      'Language-aware replies and inbox translation where supported',
      'Plan-eligible follow-ups with pause, mute and quiet-hours controls',
      'Lead qualification and team handover',
      'Bookings board for callbacks, demos, site visits and other configured requests',
      'Shared team inbox with assignment and notes',
      'WhatsApp campaigns for eligible plans and approved templates',
      'AMC renewal tools for eligible water-treatment businesses',
      'Multi-number WhatsApp support (up to 5 numbers)',
      'WhatsApp Business integration',
    ],
    audience: {
      '@type': 'BusinessAudience',
      name: 'Indian water-treatment, travel and retail businesses',
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
  audience?: string
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
      name: opts.audience ?? 'Water purifier and water treatment dealers',
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

/**
 * Collection/listing page (the blog index, the resources hub). Gives Google the page's identity
 * plus an ordered ItemList of what it links to, which is what earns the listing rich results and
 * helps the individual guides get discovered from one crawl.
 */
export function collectionPageSchema(opts: {
  name: string
  description: string
  path: string
  items: { name: string; path: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}${opts.path}#collection`,
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: opts.items.length,
      itemListElement: opts.items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.name,
        url: `${SITE_URL}${it.path}`,
      })),
    },
  }
}

/** Step-by-step page (/how-it-works). */
export function howToSchema(opts: {
  name: string
  description: string
  path: string
  steps: { title: string; description: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    inLanguage: 'en-IN',
    publisher: { '@id': `${SITE_URL}/#organization` },
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  }
}
