import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { TESTIMONIALS } from '@/lib/constants'
import { ArrowLeft, Quote, X, CheckCircle2 } from 'lucide-react'

const waterPurifier = TESTIMONIALS[0]

const beforeItems = [
  'Searching through chats to find conversations',
  'Missed follow-ups and lost leads',
  'Team confusion over who replied to whom',
  'Customers slipping through the cracks',
]

const afterItems = [
  'All leads in one organized inbox',
  'Follow-ups on time, every time',
  'Clear ownership and faster replies',
  'More conversions and happier customers',
]

const howItWorksSteps = [
  { step: 1, title: 'Connected WhatsApp', body: 'Mastec Water Purifier connected their existing WhatsApp Business number to LeadBuddie in minutes.' },
  { step: 2, title: 'Team used shared inbox', body: 'Everyone could see conversations, assign chats, and respond from one place instead of multiple phones.' },
  { step: 3, title: 'Follow-ups on time', body: 'Reminders and pipeline views meant no lead was forgotten. Responses and follow-ups became much easier.' },
]

export const metadata: Metadata = {
  title: 'Case Study: Mastec Water Purifier | LeadBuddie',
  description: 'How Mastec Water Purifier handles 60–100 WhatsApp leads per day with LeadBuddie. Easier responses and follow-ups.',
}

export default function CaseStudyPage() {
  return (
    <>
      {/* Hero + highlight cards */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-ink mb-8 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to home
          </Link>
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-wide mb-3">
            Case Study
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-4 leading-tight max-w-3xl">
            Mastec Water Purifier: Managing 60–100 Leads per Day
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            How one service business stopped drowning in WhatsApp enquiries and started closing more deals.
          </p>
          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-2xl md:text-3xl font-bold text-teal-600">{waterPurifier.metrics.primary}</p>
              <p className="text-gray-600 font-medium">{waterPurifier.metrics.primaryLabel}</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-2xl md:text-3xl font-bold text-teal-600">{waterPurifier.metrics.secondary}</p>
              <p className="text-gray-600 font-medium">{waterPurifier.metrics.secondaryLabel}</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-2xl md:text-3xl font-bold text-teal-600">1</p>
              <p className="text-gray-600 font-medium">shared inbox</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <Section background="gray" className="relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-ink text-center mb-12">
            Before vs After LeadBuddie
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-red-100 bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-6 flex items-center gap-2">
                <X className="h-5 w-5 text-red-400" strokeWidth={2} />
                Before LeadBuddie
              </h3>
              <ul className="space-y-4">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <X className="h-5 w-5 text-red-300 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-teal-200 bg-white p-6 md:p-8 shadow-sm ring-1 ring-teal-100">
              <h3 className="text-lg font-semibold text-teal-800 mb-6 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-500" strokeWidth={2} />
                After LeadBuddie
              </h3>
              <ul className="space-y-4">
                {afterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-teal-900">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* How it works – mini timeline */}
      <Section background="white" className="relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-100/30 rounded-full blur-3xl translate-x-1/3 pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-ink text-center mb-12">
            How it worked for them
          </h2>
          <div className="space-y-8">
            {howItWorksSteps.map(({ step, title, body }, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center flex-shrink-0">
                    {step}
                  </div>
                  {i < howItWorksSteps.length - 1 && (
                    <div className="w-0.5 flex-1 min-h-[24px] bg-teal-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-ink mb-2">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Product screenshot */}
      <Section background="gray" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-ink text-center mb-4">
            One inbox. One team.
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
            The shared WhatsApp inbox and lead pipeline Mastec Water Purifier uses every day.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/graphics/hero/hero-dashboard.svg"
                alt="LeadBuddie dashboard – shared inbox and pipeline"
                fill
                className="object-contain p-4"
                unoptimized
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonial standout + mid CTA */}
      <Section background="white" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="rounded-3xl border-2 border-teal-100 bg-gradient-to-br from-white to-teal-50/30 p-8 md:p-12 shadow-lg">
            <Quote className="h-10 w-10 text-teal-400 mb-6" />
            <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
              &ldquo;{waterPurifier.quote}&rdquo;
            </p>
            <footer className="text-gray-700 font-semibold not-italic">
              — {waterPurifier.author}
            </footer>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">Ready to get the same results?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/demo" variant="lime" size="lg">
                Book Free Setup
              </Button>
              <Button
                href="https://app.leadbuddie.com"
                size="lg"
                className="bg-white border-2 border-gray-300 text-ink hover:bg-gray-50"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-cyan-50/30 to-teal-100/20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-teal-200/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
            Join businesses like Mastec Water Purifier
          </h2>
          <p className="text-gray-600 mb-8">
            Set up in minutes. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/demo" variant="lime" size="lg">
              Book Free Setup
            </Button>
            <Button
              href="https://app.leadbuddie.com"
              size="lg"
              className="bg-white border-2 border-gray-300 text-ink hover:bg-gray-50"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
