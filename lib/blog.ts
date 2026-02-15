import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export type BlogCategory = 'CRM' | 'WhatsApp' | 'Automation' | 'Case Study'

export interface BlogPostMeta {
  title: string
  description: string
  slug: string
  date: string
  author: string
  category: BlogCategory
  image: string
  readTimeMinutes: number
  isPublished: boolean
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, '')
}

function readPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  const raw = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    ...(data as BlogPostMeta),
    slug: data.slug ?? slug,
    isPublished: data.isPublished !== false,
    content,
  }
}

/**
 * Returns all published posts, sorted by date desc.
 */
export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  const posts: BlogPostMeta[] = []
  for (const file of files) {
    const slug = getSlugFromFilename(file)
    const post = readPostBySlug(slug)
    if (post && post.isPublished) {
      posts.push({
        title: post.title,
        description: post.description,
        slug: post.slug,
        date: post.date,
        author: post.author,
        category: post.category,
        image: post.image,
        readTimeMinutes: post.readTimeMinutes,
        isPublished: post.isPublished,
      })
    }
  }
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return posts
}

/**
 * Returns published slugs only (for generateStaticParams and sitemap).
 */
export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug)
}

/**
 * Returns a single post by slug (including drafts). Use for post page; check isPublished for robots.
 */
export function getPostBySlug(slug: string): BlogPost | null {
  return readPostBySlug(slug)
}

/**
 * Returns categories that have at least one published post, in display order.
 */
const CATEGORY_ORDER: BlogCategory[] = ['WhatsApp', 'CRM', 'Automation', 'Case Study']

export function getCategories(): BlogCategory[] {
  const posts = getAllPosts()
  const seen = new Set<BlogCategory>()
  const result: BlogCategory[] = []
  for (const post of posts) {
    if (!seen.has(post.category)) {
      seen.add(post.category)
      result.push(post.category)
    }
  }
  return CATEGORY_ORDER.filter((c) => result.includes(c))
}

/**
 * Returns published posts in the given category, sorted by date desc.
 */
export function getPostsByCategory(category: BlogCategory): BlogPostMeta[] {
  return getAllPosts().filter((p) => p.category === category)
}

/**
 * Get related posts (published, exclude current slug), up to limit.
 */
export function getRelatedPosts(currentSlug: string, limit = 4): BlogPostMeta[] {
  const all = getAllPosts()
  return all.filter((p) => p.slug !== currentSlug).slice(0, limit)
}

/**
 * Get related posts in the same category (published, exclude current slug), up to limit.
 */
export function getRelatedPostsByCategory(
  currentSlug: string,
  category: BlogCategory,
  limit = 3
): BlogPostMeta[] {
  const all = getAllPosts()
  return all
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit)
}
