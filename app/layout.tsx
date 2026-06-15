import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { DemoModalProvider } from '@/components/providers/DemoModalProvider'
import { ScrollRevealClient } from '@/components/ui/ScrollRevealClient'
import { JsonLd } from '@/components/seo/JsonLd'
import { SEO } from '@/lib/constants'
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, MOBILE_APPLICATION_SCHEMA, SITE_URL } from '@/lib/seo'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: 'Hutliv Technologies LLP' }],
  creator: 'Hutliv Technologies LLP',
  publisher: 'Hutliv Technologies LLP',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://leadbuddie.com',
    title: SEO.title,
    description: SEO.description,
    siteName: 'LeadBuddie',
    // og:image is provided by app/opengraph-image.tsx (generated, branded 1200×630)
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.title,
    description: SEO.description,
    // twitter:image is provided by app/opengraph-image.tsx
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // Facebook (Meta) Business domain verification — required to enable WhatsApp Business API
    // domain claims, Conversions API, ad attribution, etc. Next.js renders this server-side as
    // <meta name="facebook-domain-verification" content="..." /> inside <head> on every page.
    // Static SSR — Facebook's scraper will see it (the JS-injected path their docs warn about
    // would not have worked).
    other: {
      'facebook-domain-verification': 'fjj2o4b7g8hqpc6d3cgg3c93wkt2go',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) - Analytics GA4 + Ads */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YKTEHGXVMY"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YKTEHGXVMY');
              gtag('config', 'AW-17930856536');
            `,
          }}
        />
        {/* Event snippet for Purchase conversion - call gtag_report_conversion on CTA click */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-17930856536/wtseCNjOv_IbENjQjOZC',
                  'value': 1.0,
                  'currency': 'SGD',
                  'transaction_id': '',
                  'event_callback': callback
                });
                return false;
              }
              document.addEventListener('DOMContentLoaded', function() {
                document.body.addEventListener('click', function(e) {
                  var a = e.target.closest('a[href*="app.leadbuddie.com"]');
                  if (a && a.href) {
                    e.preventDefault();
                    gtag_report_conversion(a.href);
                  }
                });
              });
            `,
          }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary">
        <JsonLd data={[ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, MOBILE_APPLICATION_SCHEMA]} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <DemoModalProvider>
            <ScrollRevealClient />
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            {/* Persistent "Chat on WhatsApp" bubble — hides itself on the /contact page where
                the same CTA already lives. Renders once, follows the user across navigation. */}
            <WhatsAppFloatingButton />
          </DemoModalProvider>
        </ThemeProvider>
        <script
          src="https://app.leadbuddie.com/widget.js"
          data-lb-key="HutlivTech123nologies"
          data-lb-theme="light"
          async
        ></script>
      </body>
    </html>
  )
}

