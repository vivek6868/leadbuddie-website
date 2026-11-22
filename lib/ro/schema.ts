import { SITE_URL } from '@/lib/seo'
import { SUPPORT_EMAIL } from '@/lib/ro/paths'
import type { RoFaq } from '@/lib/ro/types'

/** Listed RO prices. No yearly figure — that discount is quoted by the team. */
export function roPriceOffers(url: string) {
  return [
    {
      '@type': 'Offer',
      name: 'Growth',
      price: '1999',
      priceCurrency: 'INR',
      url,
      availability: 'https://schema.org/InStock',
      description:
        'Free for the first month after signup, then Rs 1,999 per month. Includes the LeadBuddie Engineer app. Pay yearly for a further discount — talk to the team.',
    },
    {
      '@type': 'Offer',
      name: 'Scale',
      price: '3999',
      priceCurrency: 'INR',
      url,
      availability: 'https://schema.org/InStock',
      description:
        'Rs 3,999 per month. Water-treatment Autopilot: chase renewals, book service from a customer reply, assign the engineer, and follow up on payment.',
    },
    {
      '@type': 'Offer',
      name: 'Starter',
      price: '1499',
      priceCurrency: 'INR',
      url,
      availability: 'https://schema.org/InStock',
      description: 'Smaller plan at Rs 1,499 per month.',
    },
  ]
}

const FEATURES = [
  'Customer database and Excel import',
  'RO purifier and installation records',
  'Service schedules and upcoming dues',
  'Customer service requests',
  'Engineer assignment and digital job cards',
  'LeadBuddie Engineer app: assigned jobs, digital job cards and job completion on the engineer’s phone',
  'Job completion, service history and payment tracking',
  'AMC tracking and renewals',
  'Works manually without WhatsApp: customers, service due, booking, engineer assignment, job cards, payments and AMC renewals',
  'Optional WhatsApp for automated reminders, follow-ups and more',
]

/**
 * SoftwareApplication for LeadBuddie RO only.
 * No AggregateRating, Review, or usage counts — none are approved.
 * Prices are the RO offer, not the shared pricing page.
 */
export function leadbuddieRoSoftwareSchema(opts: {
  path: string
  name: string
  description: string
  inLanguage: 'en-IN' | 'hi-IN' | 'ta-IN'
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts.name,
    alternateName: 'LeadBuddie RO',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'RO service and AMC management',
    operatingSystem: 'Web',
    url: `${SITE_URL}${opts.path}`,
    inLanguage: opts.inLanguage,
    description: opts.description,
    image: `${SITE_URL}/images/brand/water-operations-hero-v1.png`,
    featureList: FEATURES,
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Indian residential RO dealers, installers, service centres and AMC businesses',
      geographicArea: { '@type': 'Country', name: 'India' },
    },
    offers: roPriceOffers(`${SITE_URL}${opts.path}`),
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

export function roArticleSchema(opts: {
  path: string
  title: string
  description: string
  date: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    inLanguage: 'en-IN',
    datePublished: opts.date,
    dateModified: opts.date,
    image: `${SITE_URL}/images/brand/water-operations-hero-v1.png`,
    mainEntityOfPage: `${SITE_URL}${opts.path}`,
    author: {
      '@type': 'Organization',
      name: 'LeadBuddie',
      url: SITE_URL,
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
    about: {
      '@type': 'SoftwareApplication',
      name: 'LeadBuddie RO',
      url: `${SITE_URL}/ro`,
    },
  }
}

export function roFaqSchema(items: RoFaq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

export function roBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export const RO_SUPPORT_NOTE = `Support: ${SUPPORT_EMAIL}`
