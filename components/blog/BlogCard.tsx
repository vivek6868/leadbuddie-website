import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Clock } from 'lucide-react'
import type { BlogPostMeta } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPostMeta
  /** Compact variant used in related-posts / footer grids */
  compact?: boolean
  /** Featured variant used at the top of the blog index */
  featured?: boolean
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })
}

export function BlogCard({ post, compact = false, featured = false }: BlogCardProps) {
  const href = `/blog/${post.slug}`

  /* ---------- Featured variant ---------- */
  if (featured) {
    return (
      <Link
        href={href}
        className="group relative grid h-full overflow-hidden rounded-[28px] border border-white/[0.08] bg-bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-bg-card md:grid-cols-2"
      >
        <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[320px]">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width:768px) 100vw, 50vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-brand/30 to-bg-elevated" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 via-transparent to-transparent md:bg-gradient-to-r" />
          <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-lime" />
            Latest
          </span>
        </div>

        <div className="flex flex-col justify-center p-7 md:p-10">
          <span className="mb-4 inline-flex w-fit rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-light">
            {post.category}
          </span>
          <h2 className="font-display text-2xl font-bold leading-tight text-text-primary md:text-3xl">
            {post.title}
          </h2>
          <p className="mt-4 line-clamp-3 text-base leading-relaxed text-text-secondary md:text-[17px]">
            {post.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-muted">
            <span className="text-text-secondary">{post.author}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTimeMinutes} min read
            </span>
          </div>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light transition-colors group-hover:text-text-primary">
            Read the guide
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    )
  }

  /* ---------- Compact (related-posts) variant ---------- */
  if (compact) {
    return (
      <Link
        href={href}
        className="group block h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-bg-card"
      >
        <div className="relative aspect-video bg-bg-elevated">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width:768px) 100vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-brand-subtle" />
          )}
        </div>
        <div className="p-4">
          <span className="mb-2 inline-flex rounded-full border border-brand/25 bg-brand/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-light">
            {post.category}
          </span>
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-text-primary transition-colors group-hover:text-brand-light">
            {post.title}
          </h3>
          <div className="mt-2 text-[11px] text-text-muted">
            {post.readTimeMinutes} min read · {formatDate(post.date)}
          </div>
        </div>
      </Link>
    )
  }

  /* ---------- Default card ---------- */
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-bg-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-bg-elevated">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand/20 to-bg-elevated">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-light/80">Blog</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <span className="mb-3 inline-flex w-fit rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-light">
          {post.category}
        </span>
        <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-text-primary transition-colors group-hover:text-brand-light">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-secondary">
          {post.description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4 text-[11px] text-text-muted">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTimeMinutes} min · {formatDate(post.date)}
          </span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  )
}
