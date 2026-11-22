import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/seo'

export const RO_OG_IMAGE = {
  url: '/images/brand/water-operations-hero-v1.png',
  width: 1942,
  height: 809,
  alt: 'LeadBuddie RO for Indian RO water purifier dealers and service centres',
} as const

export function roMetadata(opts: {
  title: string
  description: string
  path: string
  keywords?: string
  locale?: 'en_IN' | 'hi_IN' | 'ta_IN'
  languages?: Record<string, string>
}): Metadata {
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: {
      canonical: opts.path,
      languages: opts.languages,
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: `${SITE_URL}${opts.path}`,
      type: ['/ro', '/ro/hi', '/ro/ta', '/ro/pricing'].includes(opts.path) ? 'website' : 'article',
      locale: opts.locale ?? 'en_IN',
      siteName: 'LeadBuddie',
      images: [RO_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      images: [RO_OG_IMAGE.url],
    },
  }
}
