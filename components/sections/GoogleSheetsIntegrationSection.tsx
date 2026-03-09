import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, Sheet } from 'lucide-react'
import Image from 'next/image'

const bullets = [
  'Auto-sync new leads to Google Sheets in real time',
  'Export complete lead data anytime',
  'Share lead updates and reports with your team',
  'No manual copy-paste work',
]

// Uses image from public/images/google-sheets.png
const GOOGLE_SHEETS_IMAGE_SRC = '/images/google-sheets.png?v=2'

export function GoogleSheetsIntegrationSection() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="mb-4 inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
            Google Sheets Integration
          </span>

          <h2 className="text-3xl font-bold text-ink leading-tight md:text-4xl lg:text-5xl">
            Connect LeadBuddie with Google Sheets
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
            Automatically sync your leads to Google Sheets and export data anytime for reporting, backup,
            or team sharing. Keep everything updated without manual copy-paste.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Secure connection, controlled access, disconnect anytime.
          </p>

          <ul className="mt-8 space-y-3">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button href="https://app.leadbuddie.com" size="lg">
              Connect Google Sheets
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            {GOOGLE_SHEETS_IMAGE_SRC ? (
              <Image
                src={GOOGLE_SHEETS_IMAGE_SRC}
                alt="Google Sheets integration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100" />
                <div className="relative flex h-full w-full flex-col items-center justify-center px-6 text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-teal-200 bg-white text-teal-600">
                    <Sheet className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700 md:text-base">
                    Google Sheets integration image
                  </p>
                  <p className="mt-2 text-xs text-gray-500 md:text-sm">
                    Replace this placeholder with your final integration visual.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
