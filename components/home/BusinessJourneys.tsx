import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MessageCircleMore, Sparkles } from 'lucide-react'

const BUSINESS_JOURNEYS = [
  {
    name: 'Travel & tour businesses',
    examples: 'Travel agencies · Tour operators · Visa services',
    image: '/images/stories/travel-owner-ready-lead.webp',
    imageAlt: 'A travel agency owner receiving a complete quote request',
    imagePosition: 'object-[62%_center]',
    outcome: 'Quote request ready',
    enquiry: '“Bali for four people in December.”',
    automation: 'Answers package questions and collects travel dates, departure city and travellers.',
    teamGets: 'A complete request ready to price—not a chat transcript.',
  },
  {
    name: 'Appointment businesses',
    examples: 'Wellness · Salons · Clinics · Consultants',
    image: '/images/stories/wellness-owner-booking.webp',
    imageAlt: 'A wellness business owner welcoming an organised appointment customer',
    imagePosition: 'object-[64%_center]',
    outcome: 'Booking request ready',
    enquiry: '“Can I book a deep-tissue massage tomorrow evening?”',
    automation: 'Recommends the relevant service and collects the date, time and customer details.',
    teamGets: 'A validated appointment request ready to confirm.',
  },
  {
    name: 'Retail & product businesses',
    examples: 'Footwear · Fashion · Furniture · Local stores',
    image: '/images/stories/retail-owner-order-request.webp',
    imageAlt: 'A footwear shop owner helping a customer after receiving a product request',
    imagePosition: 'object-[58%_center]',
    outcome: 'Product request ready',
    enquiry: '“I need brown leather shoes in size 9.”',
    automation: 'Answers from the real catalogue, collects size and preference, and never invents stock or price.',
    teamGets: 'A product enquiry ready for an order, callback or store visit.',
  },
  {
    name: 'Home & field-service businesses',
    examples: 'Water treatment · AC service · Interiors · Repairs',
    image: '/images/stories/home-service-inspection.webp',
    imageAlt: 'A home-service team arriving for an organised site inspection',
    imagePosition: 'object-[60%_center]',
    outcome: 'Inspection request ready',
    enquiry: '“I need a water purifier for my home.”',
    automation: 'Understands the requirement, collects location and visit preference, then stops at the right moment.',
    teamGets: 'A site inspection or quote request with the useful context attached.',
  },
] as const

function JourneyStep({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MessageCircleMore
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.11em] text-[#168a42]">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#e9f9ee] text-[#168a42]"><Icon className="h-3.5 w-3.5" /></span>
        {label}
      </div>
      <p className="mt-2 text-[12px] font-semibold leading-relaxed text-slate-700">{children}</p>
    </div>
  )
}

export function BusinessJourneys() {
  return (
    <section id="businesses" className="scroll-mt-24 bg-[#f2f7f3] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#168a42]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#25d366]" />
              Built around your business outcome
            </div>
            <h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl">Different businesses. <span className="text-slate-400">The right work completed automatically.</span></h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-slate-600 lg:pb-1">Buddie does not force every customer into the same chatbot flow. It understands what they want, completes the smallest useful action and gives your team something ready to use.</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {BUSINESS_JOURNEYS.map((journey) => (
            <article key={journey.name} className="group overflow-hidden rounded-[30px] border border-slate-200/90 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <Image
                  src={journey.image}
                  alt={journey.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover transition duration-700 group-hover:scale-[1.025] ${journey.imagePosition}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/90 via-[#07111f]/5 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-[#07111f]/70 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.11em] text-white backdrop-blur-md">
                  Fully automatic until the next action
                </div>
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                  <div className="text-white">
                    <p className="text-xl font-extrabold tracking-[-0.035em] sm:text-2xl">{journey.name}</p>
                    <p className="mt-1 text-[11px] font-semibold text-slate-300">{journey.examples}</p>
                  </div>
                  <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-[#25d366] px-3 py-2 text-[10px] font-extrabold text-[#082315] sm:inline-flex"><CheckCircle2 className="h-3.5 w-3.5" /> {journey.outcome}</span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-[#e9f9ee] px-3 py-2 text-[10px] font-extrabold text-[#168a42] sm:hidden"><CheckCircle2 className="h-3.5 w-3.5" /> {journey.outcome}</div>
                <div className="grid gap-4 md:grid-cols-[0.85fr_auto_1.1fr_auto_1fr] md:items-start">
                  <JourneyStep icon={MessageCircleMore} label="Customer asks">{journey.enquiry}</JourneyStep>
                  <ArrowRight className="hidden h-4 w-4 self-center text-slate-300 md:block" />
                  <JourneyStep icon={Sparkles} label="Buddie handles it">{journey.automation}</JourneyStep>
                  <ArrowRight className="hidden h-4 w-4 self-center text-slate-300 md:block" />
                  <JourneyStep icon={CheckCircle2} label="Your team gets">{journey.teamGets}</JourneyStep>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-start justify-between gap-5 rounded-[24px] border border-[#ccebd5] bg-white px-5 py-5 sm:flex-row sm:items-center sm:px-7">
          <div><p className="text-base font-extrabold tracking-[-0.025em] text-slate-950">Your business is different?</p><p className="mt-1 text-sm text-slate-600">Show us how a lead becomes revenue. We’ll show you what Buddie can automate.</p></div>
          <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#25d366] px-5 py-3 text-sm font-extrabold text-[#082315] shadow-[0_12px_30px_rgba(37,211,102,0.22)] transition hover:-translate-y-0.5 hover:bg-[#5ee889]">Map my customer journey <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  )
}
