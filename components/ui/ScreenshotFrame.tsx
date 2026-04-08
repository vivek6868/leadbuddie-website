'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { Badge } from './Badge'

interface ScreenshotFrameProps {
  src?: string
  alt: string
  label?: string
  status?: 'connected' | 'pending' | 'ai-summary' | 'pending-reply'
  className?: string

  /**
   * Best for product screenshots with readable UI.
   * - '4/3' is ideal for your WhatsApp Automation screenshot.
   * - '1/1' only for icon-like previews.
   * - '3/2' for product cards (landscape format).
   */
  aspect?: '4/3' | '1/1' | '16/9' | '3/2'

  /**
   * Use 'contain' for text-heavy screenshots so nothing is cropped.
   * Use 'cover' only for decorative images.
   */
  fit?: 'contain' | 'cover'

  /**
   * If true, disables hover transforms (useful on mobile / reduced motion).
   */
  disableHover?: boolean
}

export function ScreenshotFrame({
  src,
  alt,
  label,
  status,
  className = '',
  aspect = '4/3',
  fit = 'contain',
  disableHover = false,
}: ScreenshotFrameProps) {
  const [imageError, setImageError] = useState(false)

  const statusLabels = useMemo(
    () => ({
      connected: { text: 'Connected', variant: 'success' as const },
      pending: { text: 'Pending', variant: 'gray' as const },
      'ai-summary': { text: 'AI Summary', variant: 'teal' as const },
      'pending-reply': { text: 'Pending Reply', variant: 'default' as const },
    }),
    []
  )

  const aspectStyle = useMemo(() => {
    switch (aspect) {
      case '16/9':
        return { aspectRatio: '16 / 9' }
      case '1/1':
        return { aspectRatio: '1 / 1' }
      case '3/2':
        return { aspectRatio: '3 / 2' }
      case '4/3':
      default:
        return { aspectRatio: '4 / 3' }
    }
  }, [aspect])

  const objectClass = fit === 'cover' ? 'object-cover' : 'object-contain'

  // If there's no label provided, use status label. If neither, render nothing.
  const badgeText = label || (status ? statusLabels[status].text : '')
  const badgeVariant = status ? statusLabels[status].variant : 'teal'

  return (
    <div className={`relative ${className}`}>
      <div
        className={[
          'group relative overflow-hidden rounded-2xl',
          'border border-border bg-bg-elevated shadow-[0_24px_90px_rgba(0,0,0,0.34)]',
          'transition-all duration-300',
          !disableHover
            ? 'hover:-translate-y-1 hover:border-border-light hover:shadow-[0_32px_120px_rgba(0,0,0,0.42)]'
            : '',
        ].join(' ')}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="pointer-events-none absolute -inset-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-glow via-transparent to-wa-glow blur-3xl" />
        </div>

        <div className="relative w-full bg-bg-elevated" style={aspectStyle}>
          {src && !imageError ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 420px, 480px"
              className={`${objectClass} rounded-2xl`}
              onError={() => setImageError(true)}
              priority={true}
              unoptimized={src.endsWith('.svg')}
            />
          ) : null}

          {/* Label / Status Badge */}
          {(label || status) && (
            <div className="absolute right-4 top-4 z-10">
              <Badge variant={badgeVariant}>{badgeText}</Badge>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
