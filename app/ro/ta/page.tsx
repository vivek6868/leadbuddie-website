import type { Metadata } from 'next'
import { RoLanding } from '@/components/ro/RoLanding'
import { JsonLd } from '@/components/seo/JsonLd'
import { roCopyTa } from '@/lib/ro/copy-ta'
import { RO_ENGINEER_IMAGE, roMetadata } from '@/lib/ro/metadata'
import { visualsTa } from '@/lib/ro/visuals'
import { RO_HREFLANG, RO_PATH, RO_TA_PATH } from '@/lib/ro/paths'
import { leadbuddieRoSoftwareSchema, roBreadcrumbSchema, roFaqSchema } from '@/lib/ro/schema'

const TITLE = 'LeadBuddie RO தமிழ் | RO சேவை மற்றும் AMC மென்பொருள்'
const DESCRIPTION =
  'தமிழ்நாடு RO டீலர்களுக்கான LeadBuddie RO. வாடிக்கையாளர் பதிவு, RO நிறுவல், சேவை நிலுவை, இன்ஜினியர் வேலை, AMC renewal ஒரே இடத்தில். Excel-லிருந்து தொடங்குங்கள். WhatsApp கட்டாயம் அல்ல.'

export const metadata: Metadata = roMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: RO_TA_PATH,
  keywords:
    'LeadBuddie RO, LeadBuddie RO தமிழ், RO சேவை மென்பொருள், RO AMC, நீர் சுத்திகரிப்பு சேவை மென்பொருள், RO வாடிக்கையாளர் Excel, தமிழ்நாடு RO டீலர்',
  locale: 'ta_IN',
  languages: RO_HREFLANG,
  image: { ...RO_ENGINEER_IMAGE, alt: visualsTa.photo.alt },
})

export default function LeadbuddieRoTamilPage() {
  return (
    <>
      <JsonLd
        data={[
          leadbuddieRoSoftwareSchema({
            path: RO_TA_PATH,
            name: 'LeadBuddie RO',
            description: DESCRIPTION,
            inLanguage: 'ta-IN',
          }),
          roFaqSchema(roCopyTa.faq),
          roBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'LeadBuddie RO', path: RO_PATH },
            { name: 'தமிழ்', path: RO_TA_PATH },
          ]),
        ]}
      />
      <RoLanding copy={roCopyTa} localePath={RO_TA_PATH} />
    </>
  )
}
