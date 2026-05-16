import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import {
  MessageSquare,
  Target,
  Clock,
  Heart,
  PhoneCall,
  FileText,
  type LucideIcon,
} from 'lucide-react'

type Capability = {
  icon: LucideIcon
  tone: string
  title: string
  description: string
}

const CAPABILITIES: Capability[] = [
  {
    icon: MessageSquare,
    tone: 'from-teal-400/20 to-teal-500/5 text-teal-300 border-teal-400/30',
    title: 'Replies on your behalf',
    description:
      'Reads the lead’s question, checks history, and drafts or sends a relevant reply. You decide what auto-sends and what you review.',
  },
  {
    icon: FileText,
    tone: 'from-violet-400/20 to-violet-500/5 text-violet-300 border-violet-400/30',
    title: 'Sends the right asset, automatically',
    description:
      'Catalog PDF, AMC plan brochure, product image, install video — your AI agent attaches the right asset based on what the customer asked. No copy-paste.',
  },
  {
    icon: Target,
    tone: 'from-cyan-400/20 to-cyan-500/5 text-cyan-300 border-cyan-400/30',
    title: 'Qualifies leads automatically',
    description:
      'Detects intent — price enquiry, ready to buy, complaint — and tags every conversation so you spend time on the hot ones.',
  },
  {
    icon: Clock,
    tone: 'from-amber-400/20 to-amber-500/5 text-amber-300 border-amber-400/30',
    title: 'Follows up without you remembering',
    description:
      'Sends the right follow-up at the right time when a lead goes quiet. In your tone, with your context.',
  },
  {
    icon: Heart,
    tone: 'from-rose-400/20 to-rose-500/5 text-rose-300 border-rose-400/30',
    title: 'Triages complaints early',
    description:
      'Detects frustrated customers, responds with care, and pings you before things escalate.',
  },
  {
    icon: PhoneCall,
    tone: 'from-indigo-400/20 to-indigo-500/5 text-indigo-300 border-indigo-400/30',
    title: 'Voice calls',
    description:
      'Same co-pilot, picking up calls when you cannot. Phone and chat under one assistant — one customer history, one tone.',
  },
]

export function AiCopilotCapabilities() {
  return (
    <Section>
      <SectionHeader
        label="What your AI co-pilot does"
        title="Five capabilities. One assistant that lives inside your inbox."
        description="Each capability is opt-in and transparent. You stay in control of what auto-sends and what comes to you for approval."
        centered
        className="mb-14 md:mb-16"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CAPABILITIES.map(({ icon: Icon, tone, title, description }, i) => (
          <article
            key={title}
            data-reveal
            style={{ ['--reveal-delay' as any]: `${i * 0.06}s` }}
            className="group relative flex h-full flex-col rounded-3xl border border-white/[0.08] bg-bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-bg-card"
          >
            {/* Soft accent glow on hover */}
            <span className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-brand/0 via-brand/0 to-brand/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border bg-gradient-to-br ${tone} mb-5`}>
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </div>

            <h3 className="relative text-lg font-semibold leading-snug text-text-primary mb-2">
              {title}
            </h3>
            <p className="relative text-[15px] leading-relaxed text-text-secondary">
              {description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
