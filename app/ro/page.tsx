import type { Metadata } from 'next'
import { RoLanding } from '@/components/ro/RoLanding'
import { JsonLd } from '@/components/seo/JsonLd'
import { roCopyEn } from '@/lib/ro/copy-en'
import { RO_ENGINEER_IMAGE, roMetadata } from '@/lib/ro/metadata'
import { RO_HREFLANG, RO_PATH } from '@/lib/ro/paths'
import { leadbuddieRoSoftwareSchema, roBreadcrumbSchema, roFaqSchema } from '@/lib/ro/schema'

const TITLE = 'LeadBuddie RO | RO Service & AMC Software India'
const DESCRIPTION =
  'LeadBuddie RO keeps RO customers, installations, service dues, engineer jobs and AMC renewals in one place. Start from your Excel. WhatsApp is optional.'

export const metadata: Metadata = roMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: RO_PATH,
  keywords:
    'LeadBuddie RO, LeadBuddie, RO service management software, AMC management software for RO dealers, water purifier service software India, RO customer Excel, RO service due reminders',
  locale: 'en_IN',
  languages: RO_HREFLANG,
  image: RO_ENGINEER_IMAGE,
})

export default function LeadbuddieRoPage() {
  return (
    <>
      <JsonLd
        data={[
          leadbuddieRoSoftwareSchema({
            path: RO_PATH,
            name: 'LeadBuddie RO',
            description: DESCRIPTION,
            inLanguage: 'en-IN',
          }),
          roFaqSchema(roCopyEn.faq),
          roBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'LeadBuddie RO', path: RO_PATH },
          ]),
        ]}
      />
      <RoLanding copy={roCopyEn} localePath={RO_PATH} />
    </>
  )
}
