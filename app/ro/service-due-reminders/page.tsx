import type { Metadata } from 'next'
import { RoGuide } from '@/components/ro/RoGuide'
import { JsonLd } from '@/components/seo/JsonLd'
import { serviceDueGuide } from '@/lib/ro/guides'
import { roMetadata } from '@/lib/ro/metadata'
import { RO_PATH } from '@/lib/ro/paths'
import { roArticleSchema, roBreadcrumbSchema, roFaqSchema } from '@/lib/ro/schema'

const TITLE = 'RO Service Due Reminders for Dealers | LeadBuddie RO'

export const metadata: Metadata = roMetadata({
  title: TITLE,
  description: serviceDueGuide.description,
  path: serviceDueGuide.path,
  keywords: serviceDueGuide.keywords,
})

export default function RoServiceDuePage() {
  return (
    <>
      <JsonLd
        data={[
          roArticleSchema({
            path: serviceDueGuide.path,
            title: serviceDueGuide.title,
            description: serviceDueGuide.description,
            date: serviceDueGuide.updated,
          }),
          roFaqSchema(serviceDueGuide.faq),
          roBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'LeadBuddie RO', path: RO_PATH },
            { name: 'RO service due reminders', path: serviceDueGuide.path },
          ]),
        ]}
      />
      <RoGuide guide={serviceDueGuide} />
    </>
  )
}
