import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { SEO } from '@/lib/constants'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: 'Hutliv Technologies' }],
  creator: 'Hutliv Technologies',
  publisher: 'Hutliv Technologies',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.title,
    description: SEO.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // Add your verification codes here when available
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) - AW-17930856536 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17930856536"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
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
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <script
          src="https://app.leadbuddie.com/widget.js"
          data-lb-key="HutlivTech123nologies"
          async
        />
      </body>
    </html>
  )
}

