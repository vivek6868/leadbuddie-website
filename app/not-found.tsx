import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <Section className="pt-40 pb-32">
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-400">
          404 — page not found
        </p>
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          This page went quiet. Your leads don’t have to.
        </h1>
        <p className="mb-8 text-lg text-text-secondary">
          The page you’re looking for doesn’t exist or has moved. Here’s where to go instead:
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to homepage
          </Button>
          <Button href="/demo" variant="secondary" size="lg">
            Watch the demo
          </Button>
        </div>
        <p className="mt-10 text-sm text-text-secondary">
          Looking for something specific? Try{' '}
          <Link href="/product" className="text-primary-400 hover:underline">
            Product
          </Link>
          ,{' '}
          <Link href="/pricing" className="text-primary-400 hover:underline">
            Pricing
          </Link>{' '}
          or the{' '}
          <Link href="/blog" className="text-primary-400 hover:underline">
            Blog
          </Link>
          .
        </p>
      </div>
    </Section>
  )
}
