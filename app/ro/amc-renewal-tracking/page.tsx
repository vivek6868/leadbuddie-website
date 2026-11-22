import type { Metadata } from 'next'
import { RoGuide } from '@/components/ro/RoGuide'
import { JsonLd } from '@/components/seo/JsonLd'
import { amcGuide } from '@/lib/ro/guides'
import { roMetadata } from '@/lib/ro/metadata'
import { RO_PATH } from '@/lib/ro/paths'
import { roArticleSchema, roBreadcrumbSchema, roFaqSchema } from '@/lib/ro/schema'

const TITLE = 'RO AMC Renewal Tracking for Dealers | LeadBuddie RO'

export const metadata: Metadata = roMetadata({
  title: TITLE,
  description: amcGuide.description,
  path: amcGuide.path,
  keywords: amcGuide.keywords,
})

export default function RoAmcRenewalPage() {
  return (
    <>
      <JsonLd
        data={[
          roArticleSchema({
            path: amcGuide.path,
            title: amcGuide.title,
            description: amcGuide.description,
            date: amcGuide.updated,
          }),
          roFaqSchema(amcGuide.faq),
          roBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'LeadBuddie RO', path: RO_PATH },
            { name: 'RO AMC renewal tracking', path: amcGuide.path },
          ]),
        ]}
      />
      <RoGuide guide={amcGuide} />
    </>
  )
}
