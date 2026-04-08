import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { getPostBySlug, getAllSlugs, getRelatedPosts, getRelatedPostsByCategory } from '@/lib/blog'
import { BlogCard } from '@/components/blog/BlogCard'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FinalCTA } from '@/components/sections/FinalCTA'

const BASE_URL = 'https://leadbuddie.com'

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
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
      title,
      description,
      url: canonical,
      ...(ogImage && { images: [{ url: ogImage }] }),
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

  return (
    <>
      <article className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <Link href="/blog" className="mb-4 inline-block text-sm text-brand-light hover:text-text-primary">
            ← Back to blog
          </Link>
          <h1 className="font-display mb-4 text-4xl font-bold text-text-primary md:text-5xl">{post.title}</h1>
          <p className="mb-6 text-sm text-text-muted">
            {post.author} • {formatDate(post.date)}
          </p>

          {post.image && (
            <div className="relative mb-8 aspect-video overflow-hidden rounded-[28px] border border-border bg-bg-elevated">
              <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="(max-width:1024px) 100vw, 896px" />
            </div>
          )}

          <div className="rounded-[30px] border border-border bg-bg-card/92 px-6 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:px-8 md:py-9">
            <div className="blog-content space-y-6 font-sans text-[1.04rem] leading-8 text-[#d8d8e8] [&_h1]:font-display [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-text-primary [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-text-primary [&_p]:leading-8 [&_strong]:text-text-primary [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_li]:pl-1 [&_a]:text-brand-light [&_a]:underline [&_a:hover]:text-text-primary [&_blockquote]:border-l-4 [&_blockquote]:border-brand [&_blockquote]:pl-4 [&_blockquote]:italic [&_hr]:border-border [&_table]:my-8 [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-2xl [&_table]:text-sm [&_thead]:bg-bg-elevated [&_th]:border [&_th]:border-border [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-text-primary [&_td]:border [&_td]:border-border [&_td]:px-4 [&_td]:py-3 [&_td]:align-top">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  table: ({ node, ...props }) => (
                    <div className="my-6 -mx-1 overflow-x-auto rounded-2xl border border-border sm:mx-0">
                      <table {...props} className="min-w-[480px]" />
                    </div>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          <div className="mt-10 rounded-[24px] border border-border bg-bg-card/90 p-6">
            <p className="mb-3 text-text-secondary">
              If you&apos;re still managing WhatsApp and Instagram leads manually, try LeadBuddie free.
            </p>
            <Button href="https://app.leadbuddie.com" variant="ghost" size="sm">
              Start free trial
            </Button>
          </div>

          <div className="mt-10 rounded-[28px] bg-[linear-gradient(140deg,rgba(124,58,237,0.22),rgba(15,15,26,0.96)_46%,rgba(221,42,123,0.14))] p-8 text-center text-white">
            <p className="mb-4 text-xl font-semibold">
              Bring your WhatsApp and Instagram conversations into one CRM and start tracking leads automatically.
            </p>
            <Button href="https://app.leadbuddie.com" className="bg-white text-ink hover:bg-gray-100" size="lg">
              Try LeadBuddie Free
            </Button>
          </div>
        </div>
      </article>

      {moreInCategory.length > 0 && (
        <Section background="gray" className="pb-12 md:pb-16">
          <h2 className="mb-6 text-2xl font-bold text-text-primary">More in {post.category}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {moreInCategory.map((p) => (
              <BlogCard key={p.slug} post={p} compact />
            ))}
          </div>
        </Section>
      )}

      {related.length > 0 && (
        <Section background="gray" className="pb-16 md:pb-24">
          <h2 className="mb-6 text-2xl font-bold text-text-primary">Related reads</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
