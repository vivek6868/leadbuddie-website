import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/seo'

export const RO_OG_IMAGE = {
  url: '/images/brand/water-operations-hero-v1.png',
  width: 1942,
  height: 809,
  alt: 'LeadBuddie RO for Indian RO water purifier dealers and service centres',
} as const

export const RO_ENGINEER_IMAGE = {
  url: '/images/ro/engineer-using-app.webp',
  width: 1152,
  height: 864,
  alt: 'Illustration of an RO engineer in a customer’s kitchen marking a job complete on his phone',
} as const

export function roMetadata(opts: {
  title: string
  description: string
  path: string
  keywords?: string
  locale?: 'en_IN' | 'hi_IN' | 'ta_IN'
  languages?: Record<string, string>
  image?: { url: string; width: number; height: number; alt: string }
}): Metadata {
  const image = opts.image ?? RO_OG_IMAGE
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
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      images: [image.url],
    },
  }
}
