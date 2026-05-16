import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
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
  iconBg: string
  iconText: string
  title: string
  description: string
  badge?: string
}

const CAPABILITIES: Capability[] = [
  {
    icon: MessageSquare,
    iconBg: 'bg-teal-50',
    iconText: 'text-teal-600',
    title: 'Replies on your behalf',
    description:
      'Reads the lead’s question, checks history, and drafts or sends a relevant reply. You decide what auto-sends and what you review.',
  },
  {
    icon: FileText,
    iconBg: 'bg-violet-50',
    iconText: 'text-violet-600',
    title: 'Sends the right asset, automatically',
    description:
      'Catalog PDF, AMC plan brochure, product image, install video — your AI agent attaches the right asset based on what the customer asked. No copy-paste. No "which file was it again?"',
  },
  {
    icon: Target,
    iconBg: 'bg-cyan-50',
    iconText: 'text-cyan-600',
    title: 'Qualifies leads automatically',
    description:
      'Detects intent — price enquiry, ready to buy, complaint — and tags every conversation so you spend time on the hot ones.',
  },
  {
    icon: Clock,
    iconBg: 'bg-amber-50',
    iconText: 'text-amber-600',
    title: 'Follows up without you remembering',
    description:
      'Sends the right follow-up at the right time when a lead goes quiet. In your tone, with your context.',
  },
  {
    icon: Heart,
    iconBg: 'bg-rose-50',
    iconText: 'text-rose-600',
    title: 'Triages complaints early',
    description:
      'Detects frustrated customers, responds with care, and pings you before things escalate.',
  },
  {
    icon: PhoneCall,
    iconBg: 'bg-indigo-50',
    iconText: 'text-indigo-600',
    title: 'Voice calls',
    description:
      'Same co-pilot, picking up calls when you cannot. Phone and chat under one assistant — one customer history, one tone.',
  },
]

export function AiCopilotCapabilities() {
  return (
    <Section background="white">
      <SectionHeader
        label="What your AI co-pilot does"
        title="Five capabilities. One assistant that lives inside your inbox."
        description="Each capability is opt-in and transparent. You stay in control of what auto-sends and what comes to you for approval."
        centered
        className="mb-16"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CAPABILITIES.map(({ icon: Icon, iconBg, iconText, title, description, badge }) => (
          <Card key={title} hover className="flex flex-col h-full">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} ${iconText}`}>
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              {badge && (
                <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                  {badge}
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-ink mb-2 leading-snug">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
