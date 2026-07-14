/*
 * Voice Notes & Any Language — the "Buddie actually understands your customers" wow.
 * Story in one glance: a customer sends a WhatsApp VOICE NOTE in Tamil → Buddie
 * hears it (transcript), understands, and replies instantly in the customer's own
 * language → the owner reads the whole chat translated into THEIR language.
 * Mirrors how real Indian customers talk on WhatsApp: voice first, own language.
 * Server component — pure CSS, mobile-first (columns stack, arrow rotates).
 */
import { Pill, P } from './atoms'

const LANGUAGES = [
  'हिन्दी Hindi',
  'தமிழ் Tamil',
  'తెలుగు Telugu',
  'ಕನ್ನಡ Kannada',
  'മലയാളം Malayalam',
  'मराठी Marathi',
  'ગુજરાતી Gujarati',
  'বাংলা Bengali',
  'English + Hinglish',
]

/* WhatsApp-style voice note bubble: play button + waveform + duration. */
function VoiceNote() {
  /* Static waveform bars — heights picked to read as natural speech. */
  const bars = [7, 12, 9, 15, 11, 16, 8, 13, 10, 15, 7, 11, 14, 9, 12, 6, 10, 13, 8, 11]
  return (
    <div className="flex max-w-[88%] items-center gap-2.5 self-start rounded-2xl rounded-tl-md bg-bg-elevated px-3 py-2.5 shadow-sm">
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] text-white"
        style={{ background: P.brandGrad }}
        aria-hidden
      >
        ▶
      </span>
      <span className="flex h-7 items-end gap-[2.5px]" aria-hidden>
        {bars.map((h, i) => (
          <span
            key={i}
            className="w-[3px] rounded-full"
            style={{ height: h, background: i < 8 ? P.brand : 'var(--color-border)' }}
          />
        ))}
      </span>
      <span className="text-[11px] font-semibold text-text-muted">0:11</span>
    </div>
  )
}

/* Small "translated for you" strip that sits under a bubble in the owner's inbox. */
function TranslationStrip({ text }: { text: string }) {
  return (
    <div
      className="mt-1.5 flex max-w-[88%] items-start gap-1.5 self-start rounded-xl border border-dashed px-2.5 py-1.5"
      style={{ borderColor: P.chipBorder, background: P.chip }}
    >
      <span className="mt-px text-[10px]" aria-hidden>
        🌐
      </span>
      <span className="text-[0.72rem] leading-snug" style={{ color: P.brandHover }}>
        {text}
      </span>
    </div>
  )
}

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

export function VoiceAndLanguage() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-brand">Voice Notes &amp; Every Language</div>
          <h2 className="mt-3 font-heading text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-4xl">
            Your customers talk. Buddie understands.
          </h2>
          <p className="mt-3.5 text-[0.97rem] leading-relaxed text-text-secondary">
            Real customers don&rsquo;t type in English — they send voice notes in Tamil, type in Hindi,
            mix Hinglish. Buddie hears every voice note, understands the language, replies in it — and
            shows you the whole chat translated into <em>your</em> language.
          </p>
        </div>

        {/* Flow: voice note in Tamil → Buddie hears → reply in Tamil (+ owner translation) */}
        <div className="grid items-center gap-5 lg:grid-cols-[minmax(0,0.95fr)_auto_minmax(0,1.05fr)] lg:gap-7">
          {/* 1. Customer sends a voice note */}
          <div className="flex flex-col gap-4">
            <div className="rounded-[22px] border border-border bg-bg-card p-5">
              <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted">
                Customer sends — 11:42 PM
              </div>
              <div className="mt-3 flex flex-col gap-2">
                <VoiceNote />
                <div className="max-w-[88%] self-start rounded-2xl rounded-tl-md bg-bg-elevated px-3.5 py-2 text-[0.8125rem] leading-snug text-text-primary shadow-sm">
                  நாளைக்கு வர முடியுமா?
                </div>
              </div>
            </div>

            {/* Buddie hears it */}
            <div className="rounded-[22px] border border-border bg-bg-card p-5">
              <div className="mb-2.5 flex items-center gap-2">
                <span
                  className="inline-flex h-6 w-6 items-center justify-center rounded-lg text-xs"
                  style={{ background: P.successSoft }}
                  aria-hidden
                >
                  🎙️
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted">
                  Buddie hears the voice note
                </span>
              </div>
              <div className="rounded-xl border border-border bg-bg-elevated px-3 py-2.5 text-[0.8125rem] leading-snug text-text-secondary">
                <span className="font-semibold text-text-primary">Transcript:</span> &ldquo;RO service
                வேணும், water taste கொஞ்சம் வித்தியாசமா இருக்கு&rdquo;
              </div>
              <p className="mt-2 text-[0.72rem] leading-snug text-text-muted">
                Transcribed in seconds — voice notes are understood like typed messages, in any language.
              </p>
            </div>
          </div>

          {/* 2. Arrow */}
          <FlowArrow label="Buddie replies" />

          {/* 3. Buddie replies in the customer's language; owner reads it in theirs */}
          <div
            className="rounded-[24px] border border-border-light bg-bg-card p-5 sm:p-6"
            style={{ boxShadow: `0 26px 64px -30px ${P.glow}` }}
          >
            <div className="mb-3 flex items-center gap-2">
              <span
                className="inline-flex h-6 w-6 items-center justify-center rounded-lg text-xs font-extrabold text-white"
                style={{ background: P.brandGrad }}
              >
                ✦
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-text-muted">
                Buddie · replies in Tamil, instantly
              </span>
            </div>

            <div className="flex flex-col">
              <div
                className="max-w-[92%] self-end rounded-2xl rounded-tr-md px-3.5 py-2.5 text-[0.8125rem] leading-snug text-white shadow-sm"
                style={{ background: P.brandGrad }}
              >
                கண்டிப்பா! நாளைக்கு காலை 10–12 அல்லது மாலை 4–6 — எது வசதியா இருக்கும்? Service visit
                book பண்ணிடறேன் 👍
              </div>

              {/* Owner-side translation of the same chat */}
              <div className="mt-4 rounded-2xl border border-border bg-bg-elevated p-3.5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted">
                    What you see in your inbox
                  </span>
                  <Pill style={{ background: P.chip, color: P.brandHover, fontSize: 9.5, padding: '2px 8px', border: `1px solid ${P.chipBorder}` }}>
                    🌐 Translate: English
                  </Pill>
                </div>
                <TranslationStrip text="Customer: “I need RO service — the water tastes a little different. Can you come tomorrow?”" />
                <TranslationStrip text="Buddie: “Of course! Tomorrow 10–12 or 4–6 — which works for you? I’ll book the service visit.”" />
              </div>
            </div>

            {/* booking outcome */}
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-border bg-bg-elevated px-3 py-2.5">
              <span
                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-extrabold"
                style={{ background: P.successSoft, color: P.success }}
              >
                📅
              </span>
              <span className="text-[0.8125rem] font-medium text-text-primary">
                Service visit booked — from a voice note, while you slept.
              </span>
            </div>
          </div>
        </div>

        {/* Language pills + trust line */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {LANGUAGES.map((l) => (
              <span
                key={l}
                className="rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{ background: P.chip, color: P.brandHover, border: `1px solid ${P.chipBorder}` }}
              >
                {l}
              </span>
            ))}
          </div>
          <p className="max-w-xl text-center text-sm text-text-muted">
            Buddie replies in the language the customer used. You pick your inbox language once — every
            chat is translated for you automatically. No copy-pasting into Google Translate.
          </p>
        </div>
      </div>
    </section>
  )
}
