import { Metadata } from 'next'
import Link from 'next/link'
import { Rss, ArrowRight } from 'lucide-react'
import { getAllPosts, getCategories, getPostsByCategory, type BlogCategory } from '@/lib/blog'
import { BlogCard } from '@/components/blog/BlogCard'

export const metadata: Metadata = {
  title: 'WhatsApp & Instagram CRM Insights | LeadBuddie Blog',
  description:
    'Guides for teams using WhatsApp and Instagram to manage leads, automate follow-ups, and close more deals with LeadBuddie.',
  alternates: { canonical: '/blog' },
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
  const filteredPosts = category ? getPostsByCategory(category) : allPosts

  // No category filter: top post is the featured hero, rest go in grid.
  // Category filtered: skip featured, show everything in grid.
  const featuredPost = !category && filteredPosts.length > 0 ? filteredPosts[0] : null
  const gridPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts

  return (
    <>
      {/* ============ HERO ============ */}
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-bg-primary px-4 pt-28 pb-16 sm:px-6 lg:px-8 md:pt-36 md:pb-24">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary" />
          <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl animate-pulse-slow delay-500" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-hover backdrop-blur-sm animate-fade-in-up">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            LeadBuddie field notes
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-6xl animate-fade-in-up delay-300">
            WhatsApp &amp; Instagram <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-brand-hover via-teal-600 to-indigo-600 bg-clip-text text-transparent">
              CRM insights for Indian SMBs.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg animate-fade-in-up delay-500">
            Practical guides on managing leads in DMs, fixing follow-up leaks, and building a calmer sales workflow — written from real dealer floors, not generic templates.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm animate-fade-in-up delay-700">
            <Link
              href="/blog/rss.xml"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-card px-3 py-1.5 text-text-secondary transition-all hover:bg-bg-elevated hover:text-text-primary shadow-sm"
            >
              <Rss className="h-3.5 w-3.5 text-text-muted" />
              RSS feed
            </Link>
            <span className="text-text-muted">·</span>
            <span className="text-text-secondary">
              {allPosts.length} {allPosts.length === 1 ? 'post' : 'posts'} published
            </span>
          </div>
        </div>
      </section>

      {/* ============ STICKY CATEGORY NAV ============ */}
      <div className="sticky top-16 z-30 border-b border-border bg-bg-primary/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 scrollbar-hide sm:px-6 lg:px-8">
          <CategoryPill href="/blog" label="All" active={!category} count={allPosts.length} />
          {categories.map((cat) => (
            <CategoryPill
              key={cat}
              href={`/blog?category=${encodeURIComponent(cat)}`}
              label={cat}
              count={getPostsByCategory(cat).length}
              active={category === cat}
            />
          ))}
        </div>
      </div>

      {/* ============ CONTENT ============ */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 md:py-20">
        {allPosts.length === 0 ? (
          <EmptyState
            title="No posts yet"
            body="We're writing the first guides. Check back soon — or subscribe to the RSS feed."
          />
        ) : filteredPosts.length === 0 ? (
          <EmptyState
            title={`No posts in ${category}`}
            body="Try another category, or browse everything."
            cta={{ label: 'View all posts', href: '/blog' }}
          />
        ) : (
          <>
            {featuredPost && (
              <div className="mb-12 md:mb-16" data-reveal>
                <div className="mb-4 flex items-baseline justify-between gap-4">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted md:text-sm">
                    Featured
                  </h2>
                  <span className="text-[11px] text-text-muted md:text-xs">Most recent</span>
                </div>
                <BlogCard post={featuredPost} featured />
              </div>
            )}

            {gridPosts.length > 0 && (
              <>
                <div className="mb-6 flex items-baseline justify-between gap-4">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted md:text-sm">
                    {category ? `In ${category}` : 'More reads'}
                  </h2>
                  <span className="text-[11px] text-text-muted md:text-xs">
                    {gridPosts.length} {gridPosts.length === 1 ? 'post' : 'posts'}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {gridPosts.map((post, i) => (
                    <div
                      key={post.slug}
                      data-reveal
                      style={{ ['--reveal-delay' as any]: `${i * 0.05}s` }}
                    >
                      <BlogCard post={post} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </section>

      {/* ============ NEWSLETTER / RSS CTA ============ */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 md:pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-secondary/40 px-6 py-10 text-center md:px-12 md:py-14">
          <div className="pointer-events-none absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="relative">
            <h2 className="font-display text-2xl font-bold leading-tight text-text-primary md:text-3xl">
              Get new playbooks the day they ship.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
              We write one deep playbook a month for SMB owners running sales on WhatsApp and Instagram. Subscribe via RSS or come talk to the team directly.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/blog/rss.xml"
                className="inline-flex items-center gap-2 rounded-full bg-text-primary px-5 py-2.5 text-sm font-semibold text-bg-primary transition-transform hover:scale-[1.02]"
              >
                <Rss className="h-4 w-4" />
                Subscribe via RSS
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-card px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:bg-bg-secondary"
              >
                Talk to us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------- Sub-components ---------- */

function CategoryPill({
  href,
  label,
  count,
  active,
}: {
  href: string
  label: string
  count?: number
  active: boolean
}) {
  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
        active
          ? 'border-brand bg-brand/10 text-brand-hover font-semibold shadow-sm shadow-brand/10'
          : 'border-border bg-bg-card text-text-secondary hover:border-brand/40 hover:bg-bg-elevated hover:text-text-primary'
      }`}
    >
      <span>{label}</span>
      {typeof count === 'number' && (
        <span
          className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold transition-colors duration-300 ${
            active ? 'bg-brand/20 text-brand-hover' : 'bg-bg-elevated text-text-muted group-hover:text-text-secondary'
          }`}
        >
          {count}
        </span>
      )}
    </Link>
  )
}

function EmptyState({
  title,
  body,
  cta,
}: {
  title: string
  body: string
  cta?: { label: string; href: string }
}) {
  return (
    <div className="mx-auto max-w-md rounded-3xl border border-white/[0.08] bg-bg-card/60 px-8 py-12 text-center backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{body}</p>
      {cta && (
        <Link
          href={cta.href}
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          {cta.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}
