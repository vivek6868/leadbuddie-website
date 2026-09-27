'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '27328051046851553'

/**
 * Meta (Facebook) Pixel. Mount once in the root layout. Uses the LeadBuddie pixel
 * unless NEXT_PUBLIC_META_PIXEL_ID overrides it.
 *
 * - PageView on first load (base snippet) and on every client-side route change
 *   (App Router navigations don't reload the page, so the base snippet alone misses them).
 * - Lead on clicks to app.leadbuddie.com (signup/login CTAs — same links the Google Ads
 *   conversion listens to in app/layout.tsx).
 * - Contact on clicks to wa.me (WhatsApp CTAs).
 */
export function MetaPixel() {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (!PIXEL_ID) return
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    window.fbq?.('track', 'PageView')
  }, [pathname])

  useEffect(() => {
    if (!PIXEL_ID) return
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!a) return
      if (a.href.includes('app.leadbuddie.com')) window.fbq?.('track', 'Lead')
      else if (a.href.includes('wa.me/')) window.fbq?.('track', 'Contact')
    }
    // Capture phase so we record the click before the gtag conversion handler
    // calls preventDefault and redirects.
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  if (!PIXEL_ID) return null

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}
