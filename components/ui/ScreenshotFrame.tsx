'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { Badge } from './Badge'
import { Monitor } from 'lucide-react'

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
          'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3),0_10px_30px_-10px_rgba(0,0,0,0.2)]',
          'transition-all duration-300',
          !disableHover
            ? 'hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4),0_15px_40px_-15px_rgba(0,0,0,0.3)] hover:scale-[1.02]'
            : '',
        ].join(' ')}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Subtle gradient glow on hover */}
        <div className="pointer-events-none absolute -inset-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-200/20 via-transparent to-slate-200/20 blur-3xl" />
        </div>

        {/* Image Container - No browser frame, just the image */}
        <div className="relative w-full bg-transparent" style={aspectStyle}>
          {src && !imageError ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 420px, 480px"
              className={`${objectClass} rounded-2xl`}
              onError={() => setImageError(true)}
              priority={false}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="text-center">
                <Monitor className="mx-auto mb-2 text-gray-400" size={30} />
                <p className="text-sm text-gray-500">{alt}</p>
              </div>
            </div>
          )}

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
