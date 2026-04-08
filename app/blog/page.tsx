import { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { getAllPosts, getCategories, getPostsByCategory, type BlogCategory } from '@/lib/blog'
import { BlogCard } from '@/components/blog/BlogCard'

export const metadata: Metadata = {
  title: 'WhatsApp & Instagram CRM Insights | LeadBuddie Blog',
  description: 'Guides for teams using WhatsApp and Instagram to manage leads, automate follow-ups, and close more deals with LeadBuddie.',
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
    <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mb-10 rounded-[32px] border border-border bg-[linear-gradient(140deg,rgba(124,58,237,0.16),rgba(15,15,26,0.94)_42%,rgba(221,42,123,0.12))] px-6 py-10 text-center shadow-[0_28px_90px_rgba(0,0,0,0.3)] md:mb-12 md:px-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
          WhatsApp & Instagram CRM Insights
        </h1>
        <p className="mx-auto mb-2 max-w-2xl text-lg text-text-secondary">
          Practical guides for teams building a better WhatsApp + Instagram CRM workflow.
        </p>
        <p className="text-sm text-text-muted">
          Subscribe: <Link href="/blog/rss.xml" className="text-brand-light underline hover:text-text-primary">RSS feed</Link>
        </p>
      </div>

      {categories.length > 0 && (
        <nav className="flex flex-wrap justify-center gap-2 mb-10" aria-label="Blog categories">
          <Link
            href="/blog"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !category
                ? 'bg-brand text-white'
                : 'border border-border bg-bg-card text-text-secondary hover:border-border-light hover:text-text-primary'
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
                  ? 'bg-brand text-white'
                  : 'border border-border bg-bg-card text-text-secondary hover:border-border-light hover:text-text-primary'
              }`}
            >
              {cat}
            </Link>
          ))}
        </nav>
      )}

      {allPosts.length === 0 ? (
        <div className="py-16 text-center text-text-secondary">
          <p>No posts yet. Check back soon.</p>
        </div>
      ) : (
        <>
          {gridPosts.length === 0 ? (
            category ? (
              <div className="py-12 text-center text-text-secondary">
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
