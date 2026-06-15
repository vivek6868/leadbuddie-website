'use client'

import { usePathname } from 'next/navigation'
import { CONTACT } from '@/lib/constants'

/**
 * Persistent green "Chat on WhatsApp" bubble in the bottom-right corner. Indian SMB visitors
 * expect this pattern — it's the highest-conversion "talk to a human" CTA on the page.
 *
 * Hides on:
 *   • /contact — already has a prominent WhatsApp button in the page content
 *   • print — `print:hidden` so it doesn't appear in saved/printed pages
 *
 * Why a fixed-position client component? It needs `usePathname` to read the current route and
 * it has to render outside the layout's max-width content shell. Tiny client bundle.
 *
 * Prefilled message: a soft "Hi LeadBuddie team — I'd like to know more" so the visitor doesn't
 * stare at a blank compose box. They can edit before sending.
 */
const PREFILLED_MESSAGE = "Hi LeadBuddie team — I'd like to know more about your AI sales employee for WhatsApp."

const HIDE_ON_PATHS = ['/contact']

export function WhatsAppFloatingButton() {
  const pathname = usePathname()
  if (HIDE_ON_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return null
  }

  const href = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with LeadBuddie on WhatsApp (${CONTACT.phone})`}
      data-lb-fab
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg ring-4 ring-white/40 transition-all duration-200 hover:scale-105 hover:shadow-xl sm:bottom-6 sm:right-6 print:hidden"
      style={{ background: '#25D366' }}
    >
      {/* Subtle pulsing dot — signals "online", matches Indian-SMB WhatsApp convention */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          background: '#25D366',
          animation: 'lb-wa-pulse 2.4s ease-out infinite',
          opacity: 0.5,
        }}
      />
      {/* WhatsApp glyph — inline SVG so it works offline + no extra request */}
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="relative h-7 w-7 text-white"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      {/* Hover label — desktop only */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
      <style jsx>{`
        @keyframes lb-wa-pulse {
          0%   { transform: scale(1);   opacity: 0.5; }
          70%  { transform: scale(1.6); opacity: 0;   }
          100% { transform: scale(1.6); opacity: 0;   }
        }
      `}</style>
    </a>
  )
}
