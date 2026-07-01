/*
 * Product Awareness Agent — the "sends the RIGHT product" wow.
 * Story in one glance: a business with many products → a customer asks (or
 * clicks a WhatsApp ad) → Buddie matches the correct product from the catalog →
 * replies with its photo/video, brochure, price and payment link, then offers
 * the matching booking. Every detail comes from the owner's catalog (fact-locked).
 * Server component — pure CSS, mobile-first (columns stack, arrow rotates).
 */
import { Pill, P } from './atoms'

/* Owner's catalog — multiple products, one is matched to the enquiry. */
const CATALOG = [
  { name: 'Water Softener', emoji: '💧', matched: true },
  { name: 'RO Purifier', emoji: '🚰', matched: false },
  { name: 'Alkaline Filter', emoji: '⚗️', matched: false },
  { name: 'Kitchen Chimney', emoji: '🍳', matched: false },
]

const ASSET_LEGEND = ['Image / Video', 'Brochure (PDF)', 'Payment link', 'Website link']

function FlowArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 py-1 lg:py-0">
      <span className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-brand">{label}</span>
      <span
        aria-hidden
        className="flex h-8 w-8 items-center justify-center rounded-full text-base font-extrabold text-white shadow-sm"
        style={{ background: P.brandGrad }}
      >
        <span className="lg:hidden">↓</span>
        <span className="hidden lg:inline">→</span>
      </span>
    </div>
  )
}

export function ProductAwareness() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">Product Awareness Agent</div>
          <h2 className="mt-3 font-heading text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-4xl">
            Selling many products? Buddie sends the right one.
          </h2>
          <p className="mt-3.5 text-[0.97rem] leading-relaxed text-text-secondary">
            When a customer asks about a product — or clicks your WhatsApp ad — Buddie matches it to your
            catalog and replies with the right photo or video, brochure, price and payment link. Then
            offers the matching booking. Every detail comes from your catalog, so it’s always accurate.
          </p>
        </div>

        {/* Flow: enquiry → catalog match → product reply */}
        <div className="grid items-center gap-5 lg:grid-cols-[minmax(0,0.95fr)_auto_minmax(0,1.05fr)] lg:gap-7">
          {/* 1. The trigger + catalog */}
          <div className="flex flex-col gap-4">
            {/* Trigger */}
            <div className="rounded-[22px] border border-border bg-bg-card p-5">
              <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted">Customer asks — or clicks your ad</div>
              <div className="mt-3 max-w-[85%] self-start rounded-2xl rounded-tl-md bg-bg-elevated px-3.5 py-2 text-[0.8125rem] leading-snug text-text-primary shadow-sm">
                Do you have a water softener?
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-[11px] font-semibold text-text-muted">or</span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-semibold"
                  style={{ background: P.chip, color: P.brandHover, border: `1px solid ${P.chipBorder}` }}
                >
                  📣 Clicked your “Water Softener” ad
                </span>
              </div>
            </div>

            {/* Catalog */}
            <div className="rounded-[22px] border border-border bg-bg-card p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted">Your catalog</span>
                <span className="text-[10px] font-semibold text-text-muted">4 products</span>
              </div>
              <div className="flex flex-col gap-2">
                {CATALOG.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-2.5 rounded-xl border px-2.5 py-2"
                    style={
                      c.matched
                        ? { borderColor: P.chipBorder, background: P.chip }
                        : { borderColor: 'var(--color-border)', background: 'var(--color-bg-elevated)' }
                    }
                  >
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-bg-card text-sm">
                      {c.emoji}
                    </span>
                    <span className={`flex-1 text-[0.8125rem] ${c.matched ? 'font-bold text-text-primary' : 'font-medium text-text-secondary'}`}>
                      {c.name}
                    </span>
                    {c.matched && (
                      <Pill style={{ background: P.brandGrad, color: '#fff', fontSize: 9.5, padding: '2px 8px' }}>matched ✓</Pill>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Arrow */}
          <FlowArrow label="Buddie matches" />

          {/* 3. The product reply Buddie sends */}
          <div className="rounded-[24px] border border-border-light bg-bg-card p-5 sm:p-6" style={{ boxShadow: `0 26px 64px -30px ${P.glow}` }}>
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg text-xs font-extrabold text-white" style={{ background: P.brandGrad }}>
                ✦
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-text-muted">Buddie · sent just now</span>
            </div>

            {/* WhatsApp-style product card */}
            <div className="overflow-hidden rounded-2xl border border-border bg-bg-elevated">
              {/* image/video banner */}
              <div className="relative flex h-32 items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(37,211,102,0.16), rgba(37,211,102,0.04))' }}>
                <span className="text-4xl">💧</span>
                <span className="absolute right-2.5 top-2.5 rounded-md bg-black/55 px-2 py-0.5 text-[10px] font-semibold text-white">▶ Video</span>
              </div>
              {/* details */}
              <div className="p-3.5">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm font-bold tracking-tight text-text-primary">Kent Water Softener</span>
                  <span className="font-heading text-sm font-extrabold text-brand">₹18,500</span>
                </div>
                <p className="mt-1 text-[0.75rem] leading-snug text-text-secondary">
                  Removes hardness — protects your RO, geyser &amp; taps. Free installation.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-bg-card px-2.5 py-1.5 text-[11px] font-semibold text-text-primary">
                    📄 Water-Softener.pdf
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-bold text-white" style={{ background: P.brandGrad }}>
                    🔗 Pay / Buy now →
                  </span>
                </div>
              </div>
            </div>

            {/* booking offer */}
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-border bg-bg-elevated px-3 py-2.5">
              <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-extrabold" style={{ background: P.successSoft, color: P.success }}>📅</span>
              <span className="text-[0.8125rem] font-medium text-text-primary">Would you like to book a free site visit?</span>
            </div>
          </div>
        </div>

        {/* Asset legend + trust line */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {ASSET_LEGEND.map((a) => (
              <span
                key={a}
                className="rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{ background: P.chip, color: P.brandHover, border: `1px solid ${P.chipBorder}` }}
              >
                {a}
              </span>
            ))}
            <Pill style={{ background: P.successSoft, color: P.success, fontSize: 11, padding: '5px 11px' }}>Growth &amp; above</Pill>
          </div>
          <p className="max-w-xl text-center text-sm text-text-muted">
            Fact-locked: prices, brochures and links come straight from your catalog — Buddie never
            invents a product, and only sends one it’s confident about.
          </p>
        </div>
      </div>
    </section>
  )
}
