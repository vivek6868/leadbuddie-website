import QRCode from 'qrcode'
import { PLAY_STORE } from '@/lib/constants'

/**
 * "Get it on Google Play" badge + QR code for the LeadBuddie Android app.
 *
 * Server Component: the QR SVG is generated at render time on the server (no client JS, no
 * external image request, works offline / in CSP-strict environments). Cached as part of the
 * page render — the QR cost is effectively a one-time string concat.
 *
 * The visible button is a clean LeadBuddie-styled card (not Google's official badge image)
 * to avoid the Google Play brand-asset licensing dance + so it sits naturally in our footer
 * design. Conveys the same message: "this app is on Google Play, scan or tap."
 *
 * QR encoding: defaults are fine for a URL of this length (error correction 'M' covers up to
 * ~15% loss, which is what scanners need for being printed or photographed off a laptop screen).
 *
 * To change the destination: edit `PLAY_STORE.url` in lib/constants.ts and rebuild. The QR
 * regenerates automatically.
 */
export async function PlayStoreBadge() {
  const qrSvgString = await QRCode.toString(PLAY_STORE.url, {
    type: 'svg',
    margin: 1,
    width: 120,
    color: {
      dark: '#111827',  // gray-900 — visible on light + dark backgrounds
      light: '#FFFFFF',
    },
  })

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-gray-900 font-semibold text-sm">Get the LeadBuddie app</h3>
      <div className="flex items-start gap-4">
        {/* Tap-to-install card */}
        <a
          href={PLAY_STORE.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download LeadBuddie on Google Play"
          className="group flex items-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-2.5 transition-all hover:border-gray-400 hover:shadow-sm"
        >
          {/* Google Play triangular play icon — multi-colored */}
          <svg
            aria-hidden
            viewBox="0 0 96 96"
            className="h-8 w-8 shrink-0"
          >
            <defs>
              <linearGradient id="gp-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00C0F1" />
                <stop offset="100%" stopColor="#005FB0" />
              </linearGradient>
              <linearGradient id="gp-red" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF3B3B" />
                <stop offset="100%" stopColor="#E60022" />
              </linearGradient>
              <linearGradient id="gp-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD400" />
                <stop offset="100%" stopColor="#FFA700" />
              </linearGradient>
              <linearGradient id="gp-green" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00E472" />
                <stop offset="100%" stopColor="#00A140" />
              </linearGradient>
            </defs>
            {/* The four-quadrant triangular Play icon */}
            <path d="M14 14 L48 48 L14 82 Z"        fill="url(#gp-blue)"   />
            <path d="M14 14 L48 48 L82 28 Z"        fill="url(#gp-red)"    />
            <path d="M82 28 L48 48 L82 68 Z"        fill="url(#gp-yellow)" />
            <path d="M14 82 L48 48 L82 68 Z"        fill="url(#gp-green)"  />
          </svg>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-gray-500">Get it on</span>
            <span className="text-base font-semibold leading-tight text-gray-900">Google Play</span>
          </div>
        </a>

        {/* QR card — visible on desktop only (mobile users just tap the badge). Helps owners
            who view the site on a laptop scan with their phone, the most common conversion path
            for Indian SMB software. */}
        <div className="hidden flex-col items-center gap-1 sm:flex">
          <div
            className="rounded-lg border border-gray-300 bg-white p-1.5"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: qrSvgString }}
            aria-label="QR code to LeadBuddie on Google Play"
            role="img"
          />
          <span className="text-[10px] text-gray-500">Scan to install</span>
        </div>
      </div>
    </div>
  )
}
