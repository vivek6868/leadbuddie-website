import { CONTACT } from '@/lib/constants'

export const APP_URL = 'https://app.leadbuddie.com'
export const SUPPORT_EMAIL = CONTACT.general

export const RO_PATH = '/ro'
export const RO_HI_PATH = '/ro/hi'
export const RO_TA_PATH = '/ro/ta'
export const RO_PRICING_PATH = '/ro/pricing'

export const RO_LOCALES = [
  { href: RO_PATH, label: 'English', hrefLang: 'en-IN' },
  { href: RO_HI_PATH, label: 'हिन्दी', hrefLang: 'hi-IN' },
  { href: RO_TA_PATH, label: 'தமிழ்', hrefLang: 'ta-IN' },
] as const

export const RO_HREFLANG = {
  'en-IN': RO_PATH,
  'hi-IN': RO_HI_PATH,
  'ta-IN': RO_TA_PATH,
  'x-default': RO_PATH,
} as const
export const RO_AMC_PATH = '/ro/amc-renewal-tracking'
export const RO_DUE_PATH = '/ro/service-due-reminders'
export const RO_EXCEL_PATH = '/ro/excel-customers'

export const RO_TEMPLATE_CSV = '/downloads/leadbuddie-ro-customer-template.csv'
export const RO_TEMPLATE_XLSX = '/downloads/leadbuddie-ro-customer-template.xlsx'

export const RO_UPDATED = '2026-11-22'
