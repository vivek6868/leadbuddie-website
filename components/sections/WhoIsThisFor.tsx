import { Section } from '@/components/ui/Section'
import { CheckCircle2 } from 'lucide-react'

const VIDEO_SRC = '/videos/whatsapp-for-you.mp4'
const VIDEO_POSTER = '/images/is-leadbuddie-right-for-you.png'

const items = [
  'You get many WhatsApp enquiries daily',
  'Your team handles or shares customer chats',
  'Follow-ups are important to close sales',
  'You run ads or marketing campaigns that generate leads',
  'You want faster responses without extra effort',
]

export function WhoIsThisFor() {
  return (
    <Section id="is-leadbuddie-right-for-you" className="pt-6 md:pt-7">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Video (muted, no sound) — mobile first (top), desktop left */}
        <div className="relative order-1 lg:order-1">
          <div className="relative aspect-[4/3] lg:aspect-[4/3] lg:min-h-[340px] rounded-2xl overflow-hidden bg-teal-50 shadow-lg border border-gray-100">
            <video
              src={VIDEO_SRC}
              poster={VIDEO_POSTER}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              title="Is LeadBuddie right for you?"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="order-2 lg:order-2 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-6 lg:mb-8 text-center lg:text-left">
            Is LeadBuddie Right for You?
          </h2>
          <ul className="space-y-4 md:space-y-5">
            {items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700 group transition-transform duration-200 hover:translate-x-0.5"
              >
                <span className="mt-0.5 shrink-0 rounded-full bg-teal-50 p-0.5 group-hover:bg-teal-100 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-teal-600" strokeWidth={2} />
                </span>
                <span className="text-base md:text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
