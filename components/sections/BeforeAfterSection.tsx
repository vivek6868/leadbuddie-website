import { Section } from '@/components/ui/Section'
import { X, CheckCircle2 } from 'lucide-react'

const beforeItems = [
  'Searching chats',
  'Missed follow-ups',
  'Team confusion',
  'Lost customers',
]

const afterItems = [
  'All leads organized',
  'Follow-ups on time',
  'Faster replies',
  'More conversions',
]

export function BeforeAfterSection() {
  return (
    <Section background="white">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-ink mb-10">
        Before vs After LeadBuddie
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
        {/* Before */}
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Before LeadBuddie</h3>
          <ul className="space-y-3">
            {beforeItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-600">
                <X className="h-5 w-5 text-red-400 flex-shrink-0" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* After */}
        <div className="rounded-2xl border border-teal-200 bg-teal-50/50 p-6 md:p-8">
          <h3 className="text-lg font-semibold text-teal-800 mb-4">After LeadBuddie</h3>
          <ul className="space-y-3">
            {afterItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-teal-900">
                <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
