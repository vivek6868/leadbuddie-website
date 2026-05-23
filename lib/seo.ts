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
  'LeadBuddie is a Customer Operations Platform for WhatsApp-first businesses in India. Track leads, customers, AMC renewals, service visits and follow-ups from one workspace — with industry packs starting with water treatment dealers.'

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
    telephone: '+91-9003444702',
    contactType: 'customer support',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi'],
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
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'CRM',
    operatingSystem: 'Web, Android, iOS',
    url: opts?.url ?? SITE_URL,
    description:
      opts?.description ??
      'Customer Operations Platform for WhatsApp-first businesses — lead, customer, AMC renewal and follow-up management in one workspace.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '0',
      highPrice: '4999',
      offerCount: 5,
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
