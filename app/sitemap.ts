import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const SITE_LAST_MODIFIED = new Date('2026-09-21T00:00:00.000Z')

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://leadbuddie.com'
  const blogPosts = getAllPosts()
  const blogEntries: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/blog`, lastModified: SITE_LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.9 },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.dateModified ?? post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  return [
    {
      url: baseUrl,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-employee`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/whatsapp-voice-ai`,
      lastModified: new Date('2026-09-17T00:00:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Niche landing pages — primary SEO targets for the water-treatment vertical
    {
      url: `${baseUrl}/water-purifier-crm`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/travel-agencies`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/retail-businesses`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/amc-renewal-software`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/ro-service-management`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/water-purifier-lead-management`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/amc-revenue-calculator`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-study`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/product`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/demo`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/shipping-policy`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/data-deletion-instructions`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...blogEntries,
  ]
}
