import { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { getAllPosts, getCategories, getPostsByCategory, type BlogCategory } from '@/lib/blog'
import { BlogCard } from '@/components/blog/BlogCard'

export const metadata: Metadata = {
  title: 'Lead Management & WhatsApp CRM Insights | LeadBuddie Blog',
  description: 'Tips and guides for Indian SMEs: manage WhatsApp leads, automate follow-ups, and close more deals with LeadBuddie.',
}

const VALID_CATEGORIES: BlogCategory[] = ['CRM', 'WhatsApp', 'Automation', 'Case Study']

function isValidCategory(value: string | undefined): value is BlogCategory {
  return value !== undefined && VALID_CATEGORIES.includes(value as BlogCategory)
}

type PageProps = { searchParams: Promise<{ category?: string }> }

export default async function BlogPage({ searchParams }: PageProps) {
  const { category: categoryParam } = await searchParams
  const category = isValidCategory(categoryParam) ? categoryParam : undefined
  const categories = getCategories()
  const allPosts = getAllPosts()
  const gridPosts = category ? getPostsByCategory(category) : allPosts

  return (
    <Section className="pt-24 pb-16 md:pt-32 md:pb-24" background="white">
      <div className="text-center mb-10 md:mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">
          Lead Management & WhatsApp CRM Insights
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
          Practical guides for Indian SMEs: WhatsApp CRM, lead automation, and closing more deals.
        </p>
        <p className="text-sm text-gray-500">
          Subscribe: <Link href="/blog/rss.xml" className="text-teal-600 hover:text-teal-700 underline">RSS feed</Link>
        </p>
      </div>

      {categories.length > 0 && (
        <nav className="flex flex-wrap justify-center gap-2 mb-10" aria-label="Blog categories">
          <Link
            href="/blog"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !category
                ? 'bg-teal-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${encodeURIComponent(cat)}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === cat
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </Link>
          ))}
        </nav>
      )}

      {allPosts.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <p>No posts yet. Check back soon.</p>
        </div>
      ) : (
        <>
          {gridPosts.length === 0 ? (
            category ? (
              <div className="text-center py-12 text-gray-500">
                <p>No posts in this category yet.</p>
              </div>
            ) : null
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gridPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </>
      )}
    </Section>
  )
}
