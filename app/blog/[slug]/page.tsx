import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ArrowLeft, Clock, User } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { getPostBySlug, getAllSlugs, getRelatedPosts, getRelatedPostsByCategory } from '@/lib/blog'
import { BlogCard } from '@/components/blog/BlogCard'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ReadingProgress } from '@/components/blog/ReadingProgress'
import { TableOfContents } from '@/components/blog/TableOfContents'

const BASE_URL = 'https://leadbuddie.com'

interface TocItem {
  id: string
  text: string
  level: number
}

function getPlainText(node: any): string {
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(getPlainText).join('')
  if (node && node.props && node.props.children) return getPlainText(node.props.children)
  return ''
}

function extractToc(content: string): TocItem[] {
  const headingRegex = /^(##|###) (.*)$/gm
  const items: TocItem[] = []
  let match
  // Remove markdown code blocks first to avoid matching code block comments
  const cleanContent = content.replace(/```[\s\S]*?```/g, '')
  while ((match = headingRegex.exec(cleanContent)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
    items.push({ id, text, level })
  }
  return items
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Not Found' }

  const title = `${post.title} | LeadBuddie Blog`
  const description = post.description
  const canonical = `${BASE_URL}/blog/${slug}`
  const ogImage = post.image ? `${BASE_URL}${post.image}` : undefined

  return {
    title,
    description,
    alternates: { canonical },
    robots: post.isPublished ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      type: 'article',
      title,
      description,
      url: canonical,
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      ...(ogImage && { images: [{ url: ogImage }] }),
    },
    twitter: {
      card: ogImage ? 'summary_large_image' : 'summary',
      title,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug, 4)
  const moreInCategory = getRelatedPostsByCategory(slug, post.category, 3)
  const tocItems = extractToc(post.content)

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: post.category, href: `/blog?category=${encodeURIComponent(post.category)}` },
    { label: post.title },
  ]

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'LeadBuddie',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/images/logo.png` },
    },
    image: post.image ? `${BASE_URL}${post.image}` : `${BASE_URL}/images/logo.png`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${slug}` },
    articleSection: post.category,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Blog', item: `${BASE_URL}/blog` },
      {
        '@type': 'ListItem',
        position: 2,
        name: post.category,
        item: `${BASE_URL}/blog?category=${encodeURIComponent(post.category)}`,
      },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE_URL}/blog/${slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <ReadingProgress />

      {/* ============ ARTICLE HERO ============ */}
      <header className="relative overflow-hidden bg-ink pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-800 to-ink-900" />
          <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-teal-400/15 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumb items={breadcrumbItems} />

            <Link
              href="/blog"
              className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to blog
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={`/blog?category=${encodeURIComponent(post.category)}`}
                className="inline-flex items-center rounded-full border border-brand/30 bg-brand/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-hover transition-colors hover:bg-brand/25"
              >
                {post.category}
              </Link>
              <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
                <Clock className="h-3.5 w-3.5" />
                {post.readTimeMinutes} min read
              </span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-text-primary md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-text-secondary md:text-lg">
              {post.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-border pt-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand/20 bg-brand/10 text-sm font-bold text-text-primary">
                {post.author
                  .split(' ')
                  .map((p) => p[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-text-primary">
                  <User className="mr-1 inline h-3.5 w-3.5 -mt-0.5 text-text-muted" />
                  {post.author}
                </span>
                <time className="text-xs text-text-muted" dateTime={post.date}>
                  Published {formatDate(post.date)}
                </time>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ COVER IMAGE ============ */}
      {post.image && (
        <div className="relative -mt-2 px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto aspect-[21/9] max-w-7xl overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent" />
          </div>
        </div>
      )}

      {/* ============ ARTICLE BODY & SIDEBAR ============ */}
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 md:pt-16 md:pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px]">
          {/* Main article content */}
          <div className="min-w-0">
            <div
              className={[
                'blog-content font-sans text-[1.125rem] leading-[1.95] text-text-primary/95 space-y-8',
              ].join(' ')}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ node, children, ...props }) => {
                    const text = getPlainText(children)
                    const id = text
                      .toLowerCase()
                      .replace(/[^\w\s-]/g, '')
                      .replace(/\s+/g, '-')
                      .replace(/-+/g, '-')
                    return (
                      <h2
                        id={id}
                        className="scroll-mt-24 mt-14 mb-5 font-display text-2xl font-bold tracking-tight text-text-primary border-b border-border pb-3"
                        {...props}
                      >
                        {children}
                      </h2>
                    )
                  },
                  h3: ({ node, children, ...props }) => {
                    const text = getPlainText(children)
                    const id = text
                      .toLowerCase()
                      .replace(/[^\w\s-]/g, '')
                      .replace(/\s+/g, '-')
                      .replace(/-+/g, '-')
                    return (
                      <h3
                        id={id}
                        className="scroll-mt-24 mt-10 mb-3 text-xl font-semibold text-text-primary"
                        {...props}
                      >
                        {children}
                      </h3>
                    )
                  },
                  p: ({ node, ...props }) => (
                    <p {...props} className="text-text-secondary/90 leading-[1.95] mb-6" />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul {...props} className="list-none pl-0 space-y-4 my-6" />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="relative pl-7 text-text-secondary/90">
                      <span className="absolute left-0 top-[0.65em] h-2 w-2 rounded-full bg-brand" />
                      {props.children}
                    </li>
                  ),
                  ol: ({ node, ...props }) => (
                    <ol
                      {...props}
                      className="list-decimal pl-6 space-y-4 my-6 text-text-secondary/90 marker:text-brand-hover marker:font-semibold"
                    />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      {...props}
                      className="border-l-4 border-brand bg-bg-secondary/40 pl-6 py-4 my-8 rounded-r-2xl italic text-text-primary/95"
                    />
                  ),
                  code: ({ node, ...props }) => (
                    <code
                      {...props}
                      className="rounded bg-bg-secondary text-text-primary px-1.5 py-0.5 text-[0.9em] font-mono"
                    />
                  ),
                  table: ({ node, ...props }) => (
                    <div className="my-8 -mx-2 overflow-x-auto rounded-2xl border border-border bg-bg-card/50 sm:mx-0">
                      <table {...props} className="w-full min-w-[560px] border-collapse text-[0.95rem]" />
                    </div>
                  ),
                  thead: ({ node, ...props }) => <thead {...props} className="bg-bg-secondary/70" />,
                  th: ({ node, style, ...props }) => (
                    <th
                      {...props}
                      style={style}
                      className="border-b border-border px-5 py-3.5 text-left text-[0.72rem] font-bold uppercase tracking-[0.12em] text-text-primary"
                    />
                  ),
                  tr: ({ node, ...props }) => (
                    <tr
                      {...props}
                      className="border-b border-border/60 last:border-b-0 transition-colors hover:bg-bg-secondary/30"
                    />
                  ),
                  td: ({ node, style, ...props }) => (
                    <td
                      {...props}
                      style={style}
                      className="px-5 py-4 align-top text-text-secondary [&_strong]:text-text-primary"
                    />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Author signature card */}
            <div className="mt-16 flex flex-wrap items-center gap-5 rounded-3xl border border-border bg-bg-card/40 p-6 backdrop-blur-sm md:p-7">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-brand/20 bg-brand/10 text-base font-bold text-text-primary">
                {post.author
                  .split(' ')
                  .map((p) => p[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-[0.14em] text-text-muted">Written by</p>
                <p className="mt-0.5 text-base font-semibold text-text-primary">{post.author}</p>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                  Working with Indian SMBs to fix how leads move through WhatsApp and Instagram.
                </p>
              </div>
              <Button href="/demo" variant="primary" size="md">
                Book a demo
              </Button>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              <div className="rounded-2xl border border-border bg-bg-card/40 p-5 backdrop-blur-sm">
                <TableOfContents items={tocItems} />
              </div>

              {/* Author Widget */}
              <div className="rounded-2xl border border-border bg-bg-card/40 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-border bg-brand/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/founder.png"
                      alt={post.author}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-primary">{post.author}</p>
                    <p className="text-[10px] text-text-muted">Founder, LeadBuddie</p>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                  Helping Indian SMBs and RO dealers plug leaks, recover recurring AMC revenue, and automate CRM follow-ups.
                </p>
                <div className="mt-4">
                  <Button href="/demo" variant="outline" size="sm" className="w-full text-xs">
                    Book free setup
                  </Button>
                </div>
              </div>

              {/* LeadBuddie Banner CTA */}
              <div className="relative overflow-hidden rounded-2xl border border-brand/35 bg-gradient-to-br from-brand/10 via-bg-card/95 to-bg-card/95 p-5 shadow-lg">
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand/15 blur-xl" />
                <h4 className="text-sm font-bold text-text-primary">Ready to scale?</h4>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                  Get WhatsApp auto-replies, automated AMC renewals, and a multi-agent team inbox on your own number.
                </p>
                <div className="mt-4">
                  <Button href="https://app.leadbuddie.com" variant="primary" size="sm" className="w-full text-xs">
                    Start 1-Month Trial
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ============ MORE IN CATEGORY ============ */}
      {moreInCategory.length > 0 && (
        <Section background="elevated" className="!pt-12 !pb-12 md:!pb-16">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted md:text-sm">
              More in {post.category}
            </h2>
            <Link
              href={`/blog?category=${encodeURIComponent(post.category)}`}
              className="text-xs font-semibold text-brand-hover hover:text-text-primary"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {moreInCategory.map((p) => (
              <BlogCard key={p.slug} post={p} compact />
            ))}
          </div>
        </Section>
      )}

      {/* ============ RELATED READS ============ */}
      {related.length > 0 && (
        <Section className="!pt-8 !pb-16 md:!pb-24">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted md:text-sm">
              Related reads
            </h2>
            <Link
              href="/blog"
              className="text-xs font-semibold text-brand-hover hover:text-text-primary"
            >
              All posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} compact />
            ))}
          </div>
        </Section>
      )}

      <FinalCTA />
    </>
  )
}
