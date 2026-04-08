import { Section } from '@/components/ui/Section'
import { Zap, Inbox, Instagram } from 'lucide-react'

const valueProps = [
  {
    icon: Inbox,
    title: 'One inbox for your entire team',
    copy: 'Bring WhatsApp chats and Instagram conversations into one place so nobody is switching apps to find context.',
  },
  {
    icon: Zap,
    title: 'Reply faster with real CRM context',
    copy: 'Assignments, notes, stages, reminders, and AI summaries stay attached to the conversation your team is working on.',
  },
  {
    icon: Instagram,
    title: 'Capture every social lead cleanly',
    copy: 'Track WhatsApp and Instagram leads from first message to won deal with a workflow built for modern buying journeys.',
  },
]

export function ValuePropositions() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-3">
        {valueProps.map(({ icon: Icon, title, copy }) => (
          <div key={title} className="rounded-[28px] border border-border bg-bg-card/90 p-7">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-subtle text-brand-light">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary">{title}</h3>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">{copy}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
