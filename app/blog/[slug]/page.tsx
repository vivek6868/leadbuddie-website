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

const BASE_URL = 'https://leadbuddie.com'

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

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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
              className="inline-flex items-center rounded-full border border-brand/30 bg-brand/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-light transition-colors hover:bg-brand/25"
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

          <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-brand/15 text-sm font-bold text-text-primary">
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
      </header>

      {/* ============ COVER IMAGE ============ */}
      {post.image && (
        <div className="relative -mt-2 px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto aspect-[16/9] max-w-4xl overflow-hidden rounded-2xl border border-white/[0.08] bg-bg-elevated shadow-[0_30px_90px_-20px_rgba(0,0,0,0.6)]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width:1024px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent" />
          </div>
        </div>
      )}

      {/* ============ ARTICLE BODY ============ */}
      <article className="mx-auto max-w-3xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 md:pt-16 md:pb-20">
        <div className="rounded-[28px] border border-white/10 bg-black px-6 py-8 shadow-[0_30px_100px_rgba(0,0,0,0.5)] md:px-10 md:py-12">
          <div
            className={[
              'blog-content font-sans text-[1.05rem] leading-[1.85] text-white/85 space-y-6',
              // Headings
              '[&_h2]:mt-14 [&_h2]:mb-5 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-white',
              '[&_h2]:pb-3 [&_h2]:border-b [&_h2]:border-white/10',
              '[&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white',
              // Body
              '[&_p]:text-white/80 [&_p]:leading-[1.85]',
              '[&_strong]:text-white [&_strong]:font-semibold',
              '[&_em]:text-white/90',
              // Lists
              '[&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-3',
              '[&_ul>li]:relative [&_ul>li]:pl-6 [&_ul>li]:text-white/80',
              '[&_ul>li]:before:content-[""] [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[0.7em] [&_ul>li]:before:h-1.5 [&_ul>li]:before:w-1.5 [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-brand-light',
              '[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-3 [&_ol_li]:text-white/80 [&_ol_li]:pl-1 [&_ol_li::marker]:text-brand-light [&_ol_li::marker]:font-semibold',
              // Links
              '[&_a]:text-brand-light [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-brand-light/40 hover:[&_a]:text-white hover:[&_a]:decoration-white/70',
              // Quotes, separators
              '[&_blockquote]:border-l-4 [&_blockquote]:border-brand [&_blockquote]:bg-white/[0.03] [&_blockquote]:pl-5 [&_blockquote]:py-3 [&_blockquote]:rounded-r-xl [&_blockquote]:italic [&_blockquote]:text-white/90',
              '[&_hr]:my-12 [&_hr]:border-white/10',
              // Inline code
              '[&_code]:rounded [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.92em] [&_code]:text-white',
            ].join(' ')}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                table: ({ node, ...props }) => (
                  <div className="my-8 -mx-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] sm:mx-0">
                    <table {...props} className="w-full min-w-[560px] border-collapse text-[0.95rem]" />
                  </div>
                ),
                thead: ({ node, ...props }) => <thead {...props} className="bg-white/[0.06]" />,
                th: ({ node, style, ...props }) => (
                  <th
                    {...props}
                    style={style}
                    className="border-b border-white/10 px-5 py-3.5 text-left text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white/95"
                  />
                ),
                tr: ({ node, ...props }) => (
                  <tr
                    {...props}
                    className="border-b border-white/[0.06] last:border-b-0 transition-colors hover:bg-white/[0.04]"
                  />
                ),
                td: ({ node, style, ...props }) => (
                  <td
                    {...props}
                    style={style}
                    className="px-5 py-4 align-top text-white/85 [&_strong]:text-white"
                  />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Author signature card */}
        <div className="mt-12 flex flex-wrap items-center gap-5 rounded-3xl border border-white/[0.08] bg-bg-card/80 p-6 backdrop-blur-sm md:p-7">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-brand/15 text-base font-bold text-text-primary">
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
          <Button href="/demo" variant="lime" size="md">
            Book a demo
          </Button>
        </div>
      </article>

      {/* ============ MORE IN CATEGORY ============ */}
      {moreInCategory.length > 0 && (
        <Section background="elevated" className="!pt-12 !pb-12 md:!pb-16">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted md:text-sm">
              More in {post.category}
            </h2>
            <Link
              href={`/blog?category=${encodeURIComponent(post.category)}`}
              className="text-xs font-semibold text-brand-light hover:text-text-primary"
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
              className="text-xs font-semibold text-brand-light hover:text-text-primary"
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
