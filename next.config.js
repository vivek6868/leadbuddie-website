/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Category listings moved from a query string (/blog?category=Operations) to real routes so they
  // prerender and get indexed. These keep the old links — anything already shared or crawled —
  // working and consolidate their equity onto the new URL.
  //
  // 301 rather than `permanent: true`, which emits a 308: both are permanent and Google treats them
  // alike, but 301 is what every other crawler, proxy and analytics tool expects.
  //
  // Next forwards the original query string to the destination, so the landing URL keeps a stray
  // ?category=. Harmless: the destination is a static page carrying a self-referencing canonical to
  // the clean URL, which is what search engines index. Stripping it would need middleware, and
  // making every request dynamic to tidy a legacy param is a bad trade.
  async redirects() {
    const categories = [
      ['Operations', 'operations'],
      ['Automation', 'automation'],
      ['WhatsApp', 'whatsapp'],
      ['CRM', 'crm'],
      ['Case Study', 'case-study'],
      ['Case%20Study', 'case-study'],
    ]
    return categories.map(([value, slug]) => ({
      source: '/blog',
      has: [{ type: 'query', key: 'category', value }],
      destination: `/blog/category/${slug}`,
      statusCode: 301,
    }))
  },
}

module.exports = nextConfig
