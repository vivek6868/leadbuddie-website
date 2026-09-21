import type { Metadata } from 'next'
import { WATER_TREATMENT_FAQ, WaterTreatmentAgentPage } from '@/components/landing/WaterTreatmentAgentPage'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  softwareApplicationSchema,
  SITE_URL,
} from '@/lib/seo'

const PATH = '/water-purifier-crm'
const TITLE = 'Water Purifier & RO Service Management Software | LeadBuddie'
const DESCRIPTION =
  'Agentic operations software for water purifier and RO businesses in India. Connect customers, installed units, service work, visits, AMC renewals and the next cycle. WhatsApp is optional.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'water purifier service management software, RO service management software India, water treatment business software, water purifier dealer software, purifier service due management, RO technician visit management, AMC renewal software India, water purifier CRM alternative, water purifier customer management',
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    type: 'website',
  },
}

export default function WaterPurifierCrmPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Water Purifier and RO Service Management Software',
            serviceType: 'Agentic operations software for water purifier and RO businesses',
            description: DESCRIPTION,
            url: `${SITE_URL}${PATH}`,
          }),
          softwareApplicationSchema({
            name: 'LeadBuddie — Water Treatment Operations',
            description: DESCRIPTION,
            url: `${SITE_URL}${PATH}`,
          }),
          faqSchema(WATER_TREATMENT_FAQ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Water Treatment Operations', path: PATH },
          ]),
        ]}
      />
      <WaterTreatmentAgentPage />
    </>
  )
}
