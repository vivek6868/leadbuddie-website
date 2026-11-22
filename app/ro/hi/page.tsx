import type { Metadata } from 'next'
import { RoLanding } from '@/components/ro/RoLanding'
import { JsonLd } from '@/components/seo/JsonLd'
import { roCopyHi } from '@/lib/ro/copy-hi'
import { roMetadata } from '@/lib/ro/metadata'
import { RO_HI_PATH, RO_HREFLANG, RO_PATH } from '@/lib/ro/paths'
import { leadbuddieRoSoftwareSchema, roBreadcrumbSchema, roFaqSchema } from '@/lib/ro/schema'

const TITLE = 'LeadBuddie RO हिन्दी | RO सर्विस और AMC सॉफ्टवेयर'
const DESCRIPTION =
  'भारतीय RO डीलरों के लिए LeadBuddie RO। ग्राहक रिकॉर्ड, RO इंस्टॉलेशन, सर्विस ड्यू, इंजीनियर जॉब और AMC रिन्यूअल एक जगह। Excel से शुरू करें। WhatsApp ज़रूरी नहीं।'

export const metadata: Metadata = roMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: RO_HI_PATH,
  keywords:
    'LeadBuddie RO, LeadBuddie RO हिन्दी, RO सर्विस सॉफ्टवेयर, RO AMC, वॉटर प्यूरीफायर सर्विस सॉफ्टवेयर, RO ग्राहक Excel, RO डीलर सॉफ्टवेयर',
  locale: 'hi_IN',
  languages: RO_HREFLANG,
})

export default function LeadbuddieRoHindiPage() {
  return (
    <>
      <JsonLd
        data={[
          leadbuddieRoSoftwareSchema({
            path: RO_HI_PATH,
            name: 'LeadBuddie RO',
            description: DESCRIPTION,
            inLanguage: 'hi-IN',
          }),
          roFaqSchema(roCopyHi.faq),
          roBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'LeadBuddie RO', path: RO_PATH },
            { name: 'हिन्दी', path: RO_HI_PATH },
          ]),
        ]}
      />
      <RoLanding copy={roCopyHi} localePath={RO_HI_PATH} />
    </>
  )
}
