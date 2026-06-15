/*
 * Shared visual atoms for the WhatsApp-Premium homepage redesign.
 * Ported from the Claude Design handoff (buddie/site/atoms.jsx) into the site's
 * light/green token system. Pure presentational — CSS keyframes live in
 * globals.css (lb-halo / lb-eye / lb-typing-dot / lb-float), so no client JS.
 */
import { ReactNode, CSSProperties } from 'react'

/* WhatsApp Premium palette constants for spots Tailwind tokens don't cover
 * (gradients, glows, computed avatar sizing). Mirrors :root in globals.css. */
export const P = {
  brand: '#25D366',
  brandHover: '#1FB855',
  brandGrad: 'linear-gradient(135deg, #25D366 0%, #1FB855 100%)',
  glow: 'rgba(37,211,102,0.20)',
  pupil: '#0F172A',
  success: '#16A34A',
  successSoft: 'rgba(22,163,74,0.10)',
  danger: '#DC2626',
  dangerSoft: 'rgba(220,38,38,0.10)',
  chip: '#ECFDF3',
  chipBorder: 'rgba(37,211,102,0.30)',
} as const

/* ─── Buddie's face ──────────────────────────────────────────────────────── */
// Soft squircle with animated blinking eyes + optional pulse halo. Reads from
// 28px (desk header) up to 96px (hero card / final CTA).
export function BuddieFace({
  size = 96,
  halo = false,
  mood = 'thinking',
  floating = false,
}: {
  size?: number
  halo?: boolean
  mood?: 'thinking' | 'happy'
  floating?: boolean
}) {
  const eyeH = Math.max(2, size * 0.18)
  const eyeW = size * 0.13
  const pupil = size * 0.085
  const pupilOffsetX = mood === 'thinking' ? size * 0.012 : 0
  const pupilOffsetY = mood === 'happy' ? -size * 0.01 : mood === 'thinking' ? -size * 0.012 : 0

  return (
    <div
      className={floating ? 'lb-float' : undefined}
      style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}
    >
      {halo && (
        <span
          aria-hidden
          className="lb-halo"
          style={{
            position: 'absolute',
            inset: -size * 0.06,
            borderRadius: size * 0.35,
            background: P.glow,
            filter: 'blur(2px)',
          }}
        />
      )}

      <div
        style={{
          position: 'relative',
          width: size,
          height: size,
          borderRadius: size * 0.28,
          background: P.brandGrad,
          boxShadow: `0 ${size * 0.18}px ${size * 0.35}px -${size * 0.12}px ${P.glow}, inset 0 1px 0 rgba(255,255,255,0.20)`,
          overflow: 'hidden',
        }}
      >
        {/* sheen */}
        <span
          aria-hidden
          style={{
            position: 'absolute',
            top: -size * 0.32,
            left: -size * 0.22,
            width: size * 0.95,
            height: size * 0.65,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 70%)',
          }}
        />

        {/* eyes */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: size * 0.13,
          }}
        >
          {[0, 1].map((i) => (
            <div
              key={i}
              className="lb-eye"
              style={{
                width: eyeW,
                height: eyeH,
                borderRadius: 999,
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animationDelay: i === 0 ? '0s' : '0.04s',
              }}
            >
              <span
                style={{
                  width: pupil,
                  height: pupil,
                  borderRadius: '50%',
                  background: P.pupil,
                  transform: `translate(${pupilOffsetX}px, ${pupilOffsetY}px)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* tiny smile — only at larger sizes */}
        {size >= 80 && mood === 'happy' && (
          <span
            style={{
              position: 'absolute',
              bottom: size * 0.18,
              left: '50%',
              transform: 'translateX(-50%)',
              width: size * 0.18,
              height: size * 0.08,
              borderBottom: `${Math.max(2, size * 0.025)}px solid #fff`,
              borderRadius: '0 0 999px 999px',
              opacity: 0.85,
            }}
          />
        )}
      </div>
    </div>
  )
}

/* ─── Pill ───────────────────────────────────────────────────────────────── */
export function Pill({
  children,
  className = '',
  dot = false,
  dotColor,
  style,
}: {
  children: ReactNode
  className?: string
  dot?: boolean
  dotColor?: string
  style?: CSSProperties
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${className}`}
      style={style}
    >
      {dot && (
        <span
          className="lb-live-dot h-1.5 w-1.5 rounded-full"
          style={{ background: dotColor ?? 'currentColor' }}
        />
      )}
      {children}
    </span>
  )
}

/* ─── Typing dots ────────────────────────────────────────────────────────── */
export function TypingDots({ color = P.brand, size = 5 }: { color?: string; size?: number }) {
  return (
    <span className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="lb-typing-dot"
          style={{
            width: size,
            height: size,
            borderRadius: '50%',
            background: color,
            animationDelay: `${i * 0.18}s`,
          }}
        />
      ))}
    </span>
  )
}

/* ─── WhatsApp glyph ─────────────────────────────────────────────────────── */
export function WhatsAppGlyph({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.47 14.45c-.23.64-1.14 1.18-1.85 1.34-.5.11-1.16.19-3.37-.73-2.83-1.17-4.65-4.05-4.79-4.24-.14-.19-1.14-1.52-1.14-2.9 0-1.38.73-2.06.99-2.34.26-.28.57-.35.76-.35h.55c.18 0 .42-.07.66.5.23.57.78 1.97.85 2.11.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.49-.14.14-.28.28-.12.56.16.28.71 1.18 1.53 1.91 1.06.95 1.96 1.25 2.24 1.39.28.14.45.12.61-.07.16-.19.71-.83.9-1.11.19-.28.38-.23.64-.14.26.09 1.65.78 1.94.92.28.14.47.21.54.33.07.12.07.69-.16 1.34z" />
    </svg>
  )
}

/* ─── Phone mockup ───────────────────────────────────────────────────────── */
// Compact iPhone-style frame with a WhatsApp-like chat. width drives every
// internal dimension so it scales cleanly.
type PhoneMsg = { side: 'in' | 'out'; text: string; time: string; ai?: boolean }

export function Phone({
  width = 150,
  name = 'Ramesh K.',
  hint = 'Buddie · typing',
  messages,
}: {
  width?: number
  name?: string
  hint?: string
  messages: PhoneMsg[]
}) {
  const h = width * 2.08
  return (
    <div
      style={{
        width,
        height: h,
        position: 'relative',
        borderRadius: width * 0.16,
        background: '#0F172A',
        padding: width * 0.025,
        boxShadow: '0 28px 60px -20px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: width * 0.13,
          background: '#0B0F1A',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* notch */}
        <span
          style={{
            position: 'absolute',
            top: width * 0.025,
            left: '50%',
            transform: 'translateX(-50%)',
            width: width * 0.27,
            height: width * 0.055,
            background: '#0F172A',
            borderRadius: 999,
            zIndex: 2,
          }}
        />
        {/* status time */}
        <div
          style={{
            padding: `${width * 0.05}px ${width * 0.08}px ${width * 0.02}px`,
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: width * 0.045,
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 600,
          }}
        >
          <span>9:41</span>
          <span>•••</span>
        </div>
        {/* chat header */}
        <div
          style={{
            padding: `${width * 0.03}px ${width * 0.05}px`,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <BuddieFace size={width * 0.12} mood="happy" />
          <div>
            <div style={{ fontSize: width * 0.055, fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
              {name}
            </div>
            <div
              style={{
                fontSize: width * 0.038,
                color: P.brand,
                marginTop: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <TypingDots color={P.brand} size={3} />
              {hint}
            </div>
          </div>
        </div>
        {/* messages */}
        <div
          style={{
            flex: 1,
            padding: width * 0.045,
            display: 'flex',
            flexDirection: 'column',
            gap: width * 0.035,
            justifyContent: 'flex-end',
          }}
        >
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                alignSelf: m.side === 'out' ? 'flex-end' : 'flex-start',
                maxWidth: '82%',
                padding: `${width * 0.035}px ${width * 0.05}px`,
                borderRadius: width * 0.07,
                borderTopRightRadius: m.side === 'out' ? width * 0.02 : width * 0.07,
                borderTopLeftRadius: m.side === 'in' ? width * 0.02 : width * 0.07,
                background: m.side === 'out' ? P.brandGrad : 'rgba(255,255,255,0.08)',
                color: '#fff',
                fontSize: width * 0.05,
                lineHeight: 1.35,
              }}
            >
              {m.ai && (
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 3,
                    fontSize: width * 0.034,
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.85)',
                    marginBottom: 3,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  ✦ Buddie
                </div>
              )}
              {m.text}
              <div
                style={{
                  fontSize: width * 0.033,
                  color: 'rgba(255,255,255,0.55)',
                  marginTop: 4,
                  textAlign: 'right',
                }}
              >
                {m.time} {m.side === 'out' && '✓✓'}
              </div>
            </div>
          ))}
        </div>
        {/* input */}
        <div
          style={{
            padding: `${width * 0.035}px ${width * 0.04}px ${width * 0.065}px`,
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div
            style={{
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 999,
              padding: `${width * 0.025}px ${width * 0.05}px`,
              fontSize: width * 0.04,
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            Type a message…
          </div>
        </div>
      </div>
    </div>
  )
}
