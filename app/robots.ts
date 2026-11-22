import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/ro',
        '/ro/pricing',
        '/ro/hi',
        '/ro/ta',
        '/ro/amc-renewal-tracking',
        '/ro/service-due-reminders',
        '/ro/excel-customers',
        '/downloads/leadbuddie-ro-customer-template.csv',
        '/downloads/leadbuddie-ro-customer-template.xlsx',
      ],
      disallow: '/api/',
    },
    sitemap: 'https://leadbuddie.com/sitemap.xml',
  }
}
