import type { Metadata } from 'next'
import { RoGuide } from '@/components/ro/RoGuide'
import { JsonLd } from '@/components/seo/JsonLd'
import { excelGuide } from '@/lib/ro/guides'
import { roMetadata } from '@/lib/ro/metadata'
import { RO_PATH } from '@/lib/ro/paths'
import { roArticleSchema, roBreadcrumbSchema, roFaqSchema } from '@/lib/ro/schema'

const TITLE = 'Manage RO Customers from Excel | LeadBuddie RO'

export const metadata: Metadata = roMetadata({
  title: TITLE,
  description: excelGuide.description,
  path: excelGuide.path,
  keywords: excelGuide.keywords,
})

export default function RoExcelCustomersPage() {
  return (
    <>
      <JsonLd
        data={[
          roArticleSchema({
            path: excelGuide.path,
            title: excelGuide.title,
            description: excelGuide.description,
            date: excelGuide.updated,
          }),
          roFaqSchema(excelGuide.faq),
          roBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'LeadBuddie RO', path: RO_PATH },
            { name: 'RO customers from Excel', path: excelGuide.path },
          ]),
        ]}
      />
      <RoGuide guide={excelGuide} />
    </>
  )
}
