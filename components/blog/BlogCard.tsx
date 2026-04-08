import Link from 'next/link'
import Image from 'next/image'
import type { BlogPostMeta } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPostMeta
  compact?: boolean
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })
}

export function BlogCard({ post, compact = false }: BlogCardProps) {
  const href = `/blog/${post.slug}`

  if (compact) {
    return (
      <Link
        href={href}
        className="group block overflow-hidden rounded-[24px] border border-border bg-bg-card/92 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-1 hover:border-border-light hover:shadow-[0_28px_80px_rgba(0,0,0,0.32)]"
      >
        <div className="relative aspect-video bg-bg-elevated">
          {post.image ? (
            <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
          ) : (
            <div className="absolute inset-0 bg-brand-subtle" />
          )}
        </div>
        <div className="p-4">
          <h3 className="line-clamp-2 font-semibold text-text-primary transition-colors group-hover:text-brand-light">{post.title}</h3>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className="group block h-full overflow-hidden rounded-[26px] border border-border bg-bg-card/94 shadow-[0_22px_60px_rgba(0,0,0,0.24)] transition-all hover:-translate-y-1 hover:border-border-light hover:shadow-[0_30px_90px_rgba(0,0,0,0.34)]"
    >
      <div className="relative aspect-video bg-bg-elevated">
        {post.image ? (
          <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-brand-subtle">
            <span className="text-sm font-medium text-brand-light/80">Blog</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <span className="mb-3 inline-flex rounded-full border border-brand/25 bg-brand-subtle px-2.5 py-1 text-xs font-medium text-brand-light">
          {post.category}
        </span>
        <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-text-primary transition-colors group-hover:text-brand-light">
          {post.title}
        </h3>
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-text-secondary">{post.description}</p>
        <div className="flex items-center gap-3 text-xs text-text-muted">
          <span>{post.readTimeMinutes} min read</span>
          <span>•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
      </div>
    </Link>
  )
}
