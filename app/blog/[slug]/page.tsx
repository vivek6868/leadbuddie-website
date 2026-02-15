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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <Link href="/blog" className="inline-block text-sm text-teal-600 hover:text-teal-700 mb-4">
            ← Back to blog
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">{post.title}</h1>
          <p className="text-gray-500 text-sm mb-6">
            {post.author} · {formatDate(post.date)}
          </p>
          {post.image && (
            <div className="aspect-video relative rounded-xl overflow-hidden bg-gray-100 mb-8">
              <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="(max-width:1024px) 100vw, 896px" />
            </div>
          )}
          <div className="blog-content text-gray-700 space-y-6 font-sans [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1 [&_a]:text-teal-600 [&_a]:underline [&_a:hover]:text-teal-700 [&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_table]:font-sans [&_table]:text-sm [&_thead]:bg-gray-100 [&_th]:border [&_th]:border-gray-200 [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-ink [&_td]:border [&_td]:border-gray-200 [&_td]:px-4 [&_td]:py-3 [&_td]:text-left [&_td]:align-top [&_tr]:border-gray-200">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto -mx-4 sm:mx-0 my-6 rounded-lg border border-gray-200">
                    <table {...props} className="min-w-[480px]" />
                  </div>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <div className="mt-10 p-6 rounded-xl bg-teal-50 border border-teal-100">
            <p className="text-gray-700 mb-3">
              If you&apos;re managing WhatsApp leads manually, try LeadBuddie free.
            </p>
            <Button href="https://app.leadbuddie.com" variant="ghost" size="sm">
              Start free trial
            </Button>
          </div>

          <div className="mt-10 p-8 rounded-2xl bg-ink text-white text-center">
            <p className="text-xl font-semibold mb-4">
              Connect your existing WhatsApp Business number and start tracking leads automatically.
            </p>
            <Button href="https://app.leadbuddie.com" className="bg-white text-ink hover:bg-gray-100" size="lg">
              Try LeadBuddie Free
            </Button>
          </div>
        </div>
      </article>

      {moreInCategory.length > 0 && (
        <Section background="gray" className="pb-12 md:pb-16">
          <h2 className="text-2xl font-bold text-ink mb-6">More in {post.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreInCategory.map((p) => (
              <BlogCard key={p.slug} post={p} compact />
            ))}
          </div>
        </Section>
      )}

      {related.length > 0 && (
        <Section background="gray" className="pb-16 md:pb-24">
          <h2 className="text-2xl font-bold text-ink mb-6">Related reads</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
