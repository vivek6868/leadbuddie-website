import { ImageResponse } from 'next/og'

export const alt =
  'LeadBuddie — AI sales employee for WhatsApp'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Branded 1200×630 social share image, generated at build time. Applies as the
 * default og:image and twitter:image across the site (the file-based metadata
 * convention), so links shared on WhatsApp / social look polished.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          backgroundColor: '#09111f',
          backgroundImage:
            'radial-gradient(circle at 18% 12%, rgba(118,72,210,0.38), transparent 42%), radial-gradient(circle at 88% 22%, rgba(37,211,102,0.23), transparent 38%)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              backgroundColor: '#25d366',
              color: '#092015',
              fontSize: '30px',
              fontWeight: 800,
            }}
          >
            L
          </div>
          <div style={{ color: '#ffffff', fontSize: '34px', fontWeight: 700 }}>
            LeadBuddie
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              fontSize: '72px',
              fontWeight: 800,
              lineHeight: 1.05,
              color: '#ffffff',
              letterSpacing: '-1.5px',
            }}
          >
            <span style={{ marginRight: '22px' }}>Your AI sales employee</span>
            <span style={{ color: '#6ff19b', marginRight: '22px' }}>for WhatsApp</span>
          </div>
        </div>

        {/* Footer tagline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '40px', height: '4px', borderRadius: '2px', backgroundColor: '#25d366', display: 'flex' }} />
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '30px', fontWeight: 500 }}>
            Train it. Trust it. Move every lead to the right next step.
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
