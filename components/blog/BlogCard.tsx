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
      <Link href={href} className="group block bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md hover:border-teal-200 transition-all">
        <div className="aspect-video relative bg-gray-100">
          {post.image ? (
            <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
          ) : (
            <div className="absolute inset-0 bg-teal-100" />
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-ink group-hover:text-teal-600 transition-colors line-clamp-2">{post.title}</h3>
        </div>
      </Link>
    )
  }

  return (
    <Link href={href} className="group block h-full bg-white rounded-xl border border-[#EAEAEA] shadow-sm overflow-hidden hover:shadow-md hover:border-teal-200 transition-all">
      <div className="aspect-video relative bg-gray-100">
        {post.image ? (
          <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw" />
        ) : (
          <div className="absolute inset-0 bg-teal-100 flex items-center justify-center">
            <span className="text-teal-600/50 text-sm font-medium">Blog</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-600 mb-2">
          {post.category}
        </span>
        <h3 className="text-lg font-semibold text-ink mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{post.description}</p>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span>{post.readTimeMinutes} min read</span>
          <span>·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
      </div>
    </Link>
  )
}
