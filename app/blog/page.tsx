import { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import { BlogIndex } from '@/components/blog/BlogIndex'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, collectionPageSchema, SITE_URL } from '@/lib/seo'

const TITLE = 'Guides for Indian Service & Sales Businesses | LeadBuddie'
const DESCRIPTION =
  'Practical guides for water-treatment operations, service cycles, AMC renewals, lead handling and controlled AI agents for Indian businesses.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog`, type: 'website' },
}

export default function BlogPage() {
  const allPosts = getAllPosts()

  return (
    <>
      <JsonLd
        data={[
          collectionPageSchema({
            name: 'LeadBuddie guides for Indian service and sales businesses',
            description: DESCRIPTION,
            path: '/blog',
            items: allPosts.map((post) => ({ name: post.title, path: `/blog/${post.slug}` })),
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Guides', path: '/blog' },
          ]),
        ]}
      />
      <BlogIndex />
    </>
  )
}
