import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  getCategories,
  getPostsByCategory,
  categoryFromSlug,
  categorySlug,
  categoryPath,
} from '@/lib/blog'
import { BlogIndex } from '@/components/blog/BlogIndex'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, collectionPageSchema, SITE_URL } from '@/lib/seo'

type Props = { params: Promise<{ category: string }> }

/** One static page per category that actually has posts. */
export function generateStaticParams() {
  return getCategories().map((category) => ({ category: categorySlug(category) }))
}

/** A slug outside that set is a 404, not an empty listing. */
export const dynamicParams = false

const COPY: Record<string, { title: string; description: string }> = {
  Operations: {
    title: 'Service Operations Guides for Water Treatment & RO Businesses',
    description:
      'How to run installs, service-due dates, technician job cards, visits and AMC renewals without losing customers to a forgotten date.',
  },
  Automation: {
    title: 'Business Automation Guides for Indian SMBs',
    description:
      'Where automation genuinely saves an Indian service business time — reminders, follow-ups and the repetitive work worth handing over.',
  },
  WhatsApp: {
    title: 'WhatsApp Guides for Indian Businesses',
    description:
      'Practical WhatsApp guides for Indian businesses: replying faster, handling enquiries at volume, renewal reminders and using AI without risking your number.',
  },
  CRM: {
    title: 'CRM & Lead Management Guides for Indian Businesses',
    description:
      'Choosing and running a CRM that fits how Indian service and sales businesses actually work — leads, follow-ups, ownership and customer history.',
  },
  'Case Study': {
    title: 'LeadBuddie Customer Stories',
    description:
      'How Indian service businesses use LeadBuddie to run customers, service visits, renewals and enquiries.',
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categoryFromSlug((await params).category)
  if (!category) return {}

  const copy = COPY[category] ?? {
    title: `${category} guides`,
    description: `LeadBuddie guides filed under ${category}.`,
  }
  const title = `${copy.title} | LeadBuddie`
  const path = categoryPath(category)

  return {
    title,
    description: copy.description,
    alternates: { canonical: path },
    openGraph: { title, description: copy.description, url: `${SITE_URL}${path}`, type: 'website' },
  }
}

export default async function BlogCategoryPage({ params }: Props) {
  const category = categoryFromSlug((await params).category)
  if (!category) notFound()

  const posts = getPostsByCategory(category)
  const copy = COPY[category]
  const path = categoryPath(category)

  return (
    <>
      <JsonLd
        data={[
          collectionPageSchema({
            name: copy?.title ?? `${category} guides`,
            description: copy?.description ?? `LeadBuddie guides filed under ${category}.`,
            path,
            items: posts.map((post) => ({ name: post.title, path: `/blog/${post.slug}` })),
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Guides', path: '/blog' },
            { name: category, path },
          ]),
        ]}
      />
      <BlogIndex category={category} />
    </>
  )
}
