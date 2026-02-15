import { Section } from '@/components/ui/Section'
import { TryNowButton } from '@/components/sections/TryNowButton'
import { Globe, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Video file: add your 10-second clip at:
 *   public/videos/chatbot-lead-flow.mp4
 * (or .webm). Name must match the src below.
 */
const VIDEO_SRC = '/videos/chatbot-lead-flow.mp4'

const pillars = [
  {
    icon: Globe,
    step: '01',
    title: 'We build your website',
    description: 'No site yet? We design and build a professional website so you have a real presence online.',
  },
  {
    icon: MessageCircle,
    step: '02',
    title: 'We add a WhatsApp-style chatbot',
    description: 'Visitors chat on your site. We plug in a chatbot that feels like WhatsApp — familiar and instant.',
  },
  {
    icon: ArrowRight,
    step: '03',
    title: 'Every conversation → LeadBuddie',
    description: 'Each chat becomes a lead in your LeadBuddie inbox. No copy-paste, no lost enquiries.',
  },
]

export function ChatbotWebsiteSection() {
  return (
    <Section id="chatbot-website" background="gray">
      {/* Headline block — wow moment */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700 mb-4">
          Chatbot + Website
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-ink leading-tight mb-4">
          Website. Chatbot. Leads in LeadBuddie.
          <br />
          <span className="text-teal-600">We do all three.</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Don&apos;t have a website? We build it. Need more leads from it? We add a chatbot. Every conversation lands in LeadBuddie — so you never miss a potential customer.
        </p>
      </div>

      {/* Three pillars */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {pillars.map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={item.step}
              className={cn(
                'relative rounded-2xl border bg-white p-6 lg:p-7 shadow-sm transition-all duration-300',
                'hover:shadow-lg hover:border-teal-200/80 hover:-translate-y-0.5',
                i === 1 && 'ring-2 ring-teal-500/20 border-teal-200/80 shadow-md'
              )}
            >
              {i === 1 && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-teal-500 text-white text-[10px] font-bold uppercase tracking-wide">
                  Most popular
                </div>
              )}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 ring-1 ring-teal-100">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600/80">
                    Step {item.step}
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink mt-0.5 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              {i < pillars.length - 1 && (
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block text-teal-300" aria-hidden>
                  <ArrowRight className="h-5 w-5" />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* One-line proof */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-12 text-sm text-gray-600">
        <span className="inline-flex items-center gap-1.5">
          <CheckCircle2 className="h-4 w-4 text-teal-600" />
          We design & build websites
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CheckCircle2 className="h-4 w-4 text-teal-600" />
          We add the chatbot
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CheckCircle2 className="h-4 w-4 text-teal-600" />
          Leads flow into LeadBuddie
        </span>
      </div>

      {/* Video — see it in action */}
      <div className="max-w-4xl mx-auto mb-10">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
          See it in action
        </p>
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100 ring-1 ring-black/5">
          <video
            src={VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            title="Website chatbot creates leads in LeadBuddie"
          >
            <track kind="captions" />
          </video>
        </div>
      </div>

      <div className="text-center">
        <TryNowButton />
      </div>
    </Section>
  )
}
