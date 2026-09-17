'use client'

/*
 * Buddie Voice — customers speak, Buddie listens, speaks back, and files the request.
 * Facts mirror leadmate-hutliv (Sep 2026): voice notes understood on every Buddie plan;
 * spoken replies on Growth (default voice) and Scale (four voices) in English, Hindi,
 * Tamil and Malayalam; owner modes Off / Smart / Customer asks; never spoken for menus,
 * links or hand-overs. Scenes are illustrative — keep them request-shaped, never a
 * false booking confirmation.
 */
import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  AudioLines,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Ear,
  Languages,
  Mic,
  SlidersHorizontal,
  Volume2,
} from 'lucide-react'

type Scene = {
  id: string
  label: string
  native: string
  business: string
  customerSeconds: string
  customerSaid: string
  customerMeaning: string
  buddieSeconds: string
  buddieSaid: string
  buddieMeaning: string
  requestTitle: string
  fields: { label: string; value: string; pending?: boolean }[]
}

const SCENES: Scene[] = [
  {
    id: 'ta',
    label: 'Tamil',
    native: 'தமிழ்',
    business: 'AC service · Chennai',
    customerSeconds: '0:09',
    customerSaid: 'வீட்டு AC சரியா கூல் ஆகல. நாளைக்கு காலையில யாராவது வந்து பார்க்க முடியுமா? அண்ணா நகர்.',
    customerMeaning: 'The AC at home isn’t cooling. Can someone come and check tomorrow morning? Anna Nagar.',
    buddieSeconds: '0:07',
    buddieSaid: 'கண்டிப்பா. நாளை காலை சர்வீஸ் விசிட்டுக்கு ரிக்வெஸ்ட் போடறேன் — நேரத்தை எங்க டீம் உறுதி பண்ணுவாங்க.',
    buddieMeaning: 'Sure. I’m raising a service-visit request for tomorrow morning — our team will confirm the time.',
    requestTitle: 'Service visit request',
    fields: [
      { label: 'Issue', value: 'AC not cooling' },
      { label: 'Area', value: 'Anna Nagar' },
      { label: 'Preferred', value: 'Tomorrow, morning' },
      { label: 'Language', value: 'Tamil' },
    ],
  },
  {
    id: 'hi',
    label: 'Hindi',
    native: 'हिन्दी',
    business: 'Holiday packages · Delhi',
    customerSeconds: '0:08',
    customerSaid: 'हम चार लोग दिसंबर में गोवा जाना चाहते हैं। पैकेज का रेट बता दीजिए।',
    customerMeaning: 'Four of us want to go to Goa in December. Please share the package price.',
    buddieSeconds: '0:06',
    buddieSaid: 'ज़रूर! चार लोगों के गोवा पैकेज के लिए — आप किस शहर से निकलेंगे?',
    buddieMeaning: 'Of course! For a Goa package for four — which city will you travel from?',
    requestTitle: 'Goa quote request',
    fields: [
      { label: 'Package', value: 'Goa holiday' },
      { label: 'Travellers', value: '4 people' },
      { label: 'When', value: 'December' },
      { label: 'From', value: 'Asking now…', pending: true },
    ],
  },
  {
    id: 'ml',
    label: 'Malayalam',
    native: 'മലയാളം',
    business: 'Yoga studio · Kochi',
    customerSeconds: '0:07',
    customerSaid: 'നാളെ രാവിലെ ട്രയൽ ക്ലാസ് ഉണ്ടോ? ഞാനും അമ്മയും വരാം.',
    customerMeaning: 'Is there a trial class tomorrow morning? My mother and I would like to come.',
    buddieSeconds: '0:06',
    buddieSaid: 'രണ്ടു പേർക്കുള്ള ട്രയൽ ക്ലാസ് റിക്വസ്റ്റ് എടുക്കാം. നിങ്ങളുടെ പേര് പറയാമോ?',
    buddieMeaning: 'I can take a trial-class request for two. May I have your name?',
    requestTitle: 'Trial class request',
    fields: [
      { label: 'Class', value: 'Yoga trial' },
      { label: 'People', value: '2' },
      { label: 'Preferred', value: 'Tomorrow, morning' },
      { label: 'Name', value: 'Asking now…', pending: true },
    ],
  },
  {
    id: 'en',
    label: 'English',
    native: 'English',
    business: 'Water purifier service · Bengaluru',
    customerSeconds: '0:10',
    customerSaid: 'Hi, my RO purifier has been leaking since morning. Can a technician come today? I’m in Whitefield.',
    customerMeaning: '',
    buddieSeconds: '0:08',
    buddieSaid: 'Sorry about that. I’ve noted a service request for the leak in Whitefield — our team will confirm the technician’s time shortly.',
    buddieMeaning: '',
    requestTitle: 'Service request',
    fields: [
      { label: 'Issue', value: 'RO purifier leaking' },
      { label: 'Area', value: 'Whitefield' },
      { label: 'Preferred', value: 'Today' },
      { label: 'Priority', value: 'Urgent' },
    ],
  },
]

const PILLARS = [
  {
    icon: Ear,
    kicker: 'Hears',
    title: 'Voice notes, understood',
    copy: 'Buddie transcribes customer voice notes, checks the language, and answers the question inside them — no typing needed on either side.',
  },
  {
    icon: Volume2,
    kicker: 'Speaks',
    title: 'Replies in a natural voice',
    copy: 'When a customer speaks, Buddie can answer with a short voice note in English, Hindi, Tamil or Malayalam — the same checked answer it wrote, read aloud.',
  },
  {
    icon: ClipboardCheck,
    kicker: 'Captures',
    title: 'Voice becomes a request',
    copy: 'Dates, areas, people and needs spoken in a voice note land as structured fields on a request your team can act on.',
  },
]

const VOICES = ['Asha', 'Arun', 'Maya', 'Kiran']

const WAVE = [6, 11, 16, 9, 18, 13, 7, 15, 20, 12, 8, 14, 17, 10, 6, 13, 19, 11, 8, 15, 12, 7, 10, 14]

function Waveform({ tone }: { tone: 'customer' | 'buddie' }) {
  return (
    <span className="flex h-6 flex-1 items-center gap-[2.5px]" aria-hidden="true">
      {WAVE.map((h, i) => (
        <span
          key={i}
          className={`lb-voice-bar w-[3px] shrink-0 rounded-full ${
            tone === 'customer' ? 'bg-slate-400' : 'bg-[#0f7a3a]'
          }`}
          style={{ height: h, animationDelay: `${(i % 8) * 0.11}s` }}
        />
      ))}
    </span>
  )
}

function VoiceBubble({ tone, seconds }: { tone: 'customer' | 'buddie'; seconds: string }) {
  const isBuddie = tone === 'buddie'
  return (
    <div
      className={`flex w-[250px] max-w-full items-center gap-2.5 rounded-2xl px-3 py-2.5 shadow-sm sm:w-[280px] ${
        isBuddie ? 'ml-auto rounded-br-md bg-[#d9fdd3]' : 'rounded-bl-md bg-white'
      }`}
    >
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${
          isBuddie ? 'bg-[#128c4a] text-white' : 'bg-slate-100 text-slate-500'
        }`}
      >
        {isBuddie ? <AudioLines className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
      </span>
      <Waveform tone={tone} />
      <span className="text-[10px] font-bold tabular-nums text-slate-500">{seconds}</span>
    </div>
  )
}

function PhoneScene({ scene }: { scene: Scene }) {
  const reduce = useReducedMotion()
  const enter = (delay: number) =>
    reduce
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-[#25d366]/20 blur-[80px]" />
      <div className="relative overflow-hidden rounded-[38px] border border-white/15 bg-[#0b141a] p-2 shadow-[0_40px_110px_rgba(0,0,0,0.5)]">
        <div className="overflow-hidden rounded-[31px] bg-[#efeae2]">
          <div className="flex items-center gap-3 bg-[#075e54] px-4 pb-3 pt-4 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-sm font-extrabold">B</span>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold">Your business</p>
              <p className="truncate text-[10px] text-white/70">{scene.business}</p>
            </div>
            <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.1em]">
              <span className="lb-scene-live-dot h-1.5 w-1.5 rounded-full bg-[#7dffa8]" /> Buddie
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={scene.id}
              className="min-h-[468px] space-y-2.5 px-3 py-4 sm:min-h-[452px]"
              exit={reduce ? undefined : { opacity: 0, transition: { duration: 0.15 } }}
            >
              <motion.div {...enter(0)}>
                <VoiceBubble tone="customer" seconds={scene.customerSeconds} />
              </motion.div>

              <motion.div {...enter(0.35)} className="max-w-[88%] rounded-xl border border-black/5 bg-white/75 px-3 py-2 text-[11.5px] leading-snug text-slate-700 backdrop-blur">
                <p className="mb-1 flex items-center gap-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#128c4a]">
                  <Ear className="h-3 w-3" /> Buddie heard · {scene.label}
                </p>
                <p lang={scene.id} className="font-semibold text-slate-800">{scene.customerSaid}</p>
                {scene.customerMeaning && <p className="mt-1 text-slate-500">“{scene.customerMeaning}”</p>}
              </motion.div>

              <motion.div {...enter(0.8)}>
                <VoiceBubble tone="buddie" seconds={scene.buddieSeconds} />
              </motion.div>

              <motion.div {...enter(1.05)} className="ml-auto max-w-[88%] rounded-xl rounded-tr-sm bg-[#d9fdd3] px-3 py-2 text-[11.5px] leading-snug text-[#12351f] shadow-sm">
                <p lang={scene.id} className="font-semibold">{scene.buddieSaid}</p>
                {scene.buddieMeaning && <p className="mt-1 text-[#3f6b4d]">“{scene.buddieMeaning}”</p>}
              </motion.div>

              <motion.div {...enter(1.5)} className="rounded-2xl border border-[#bfe8cc] bg-white p-3 shadow-[0_14px_30px_rgba(8,40,22,0.12)]">
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-1.5 text-[9.5px] font-extrabold uppercase tracking-[0.12em] text-[#168a42]">
                    <CheckCircle2 className="h-3.5 w-3.5" /> {scene.requestTitle}
                  </p>
                  <span className="rounded-full bg-[#eef1ff] px-2 py-0.5 text-[9px] font-bold text-[#5b44c9]">From voice</span>
                </div>
                <dl className="mt-2.5 grid grid-cols-2 gap-1.5">
                  {scene.fields.map((f) => (
                    <div key={f.label} className={`rounded-lg px-2 py-1.5 ${f.pending ? 'border border-dashed border-amber-300 bg-amber-50' : 'bg-[#f3faf5]'}`}>
                      <dt className="text-[8.5px] font-bold uppercase tracking-[0.1em] text-slate-400">{f.label}</dt>
                      <dd className={`truncate text-[11px] font-bold ${f.pending ? 'text-amber-700' : 'text-slate-800'}`}>{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export function BuddieVoice({ headingLevel = 'h2', className = 'py-20 lg:py-28' }: { headingLevel?: 'h1' | 'h2'; className?: string }) {
  const [active, setActive] = useState(0)
  const scene = SCENES[active]
  const Heading = headingLevel

  return (
    <section
      id="buddie-voice"
      aria-labelledby="buddie-voice-heading"
      className={`relative isolate scroll-mt-24 overflow-hidden bg-[#06101c] px-4 text-white sm:px-6 lg:px-8 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#7c4fe3]/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full bg-[#25d366]/15 blur-[120px]" />
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_minmax(0,420px)] lg:items-center lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#25d366]/30 bg-[#25d366]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8bf0aa]">
              <AudioLines className="h-3.5 w-3.5" /> New · Buddie Voice
            </div>
            <Heading
              id="buddie-voice-heading"
              className="mt-5 max-w-2xl font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-[3.6rem]"
            >
              Your customers talk.{' '}
              <span className="bg-gradient-to-r from-[#77ec9e] via-[#b8f5c9] to-[#a98bff] bg-clip-text text-transparent">
                Buddie talks back—and writes it up.
              </span>
            </Heading>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Most customers in India would rather send a WhatsApp voice note than type. Buddie understands what they said,
              replies with a natural voice note in their language, and turns the conversation into a complete request for your team.
            </p>

            <div className="mt-8" role="tablist" aria-label="Choose a language example">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Hear it in</p>
              <div className="flex flex-wrap gap-2">
                {SCENES.map((s, i) => {
                  const selected = i === active
                  return (
                    <button
                      key={s.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-controls="buddie-voice-scene"
                      onClick={() => setActive(i)}
                      className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition ${
                        selected
                          ? 'border-[#25d366] bg-[#25d366] text-[#082315] shadow-[0_10px_30px_rgba(37,211,102,0.3)]'
                          : 'border-white/15 bg-white/[0.04] text-slate-200 hover:border-white/30 hover:bg-white/[0.08]'
                      }`}
                    >
                      <span lang={s.id}>{s.native}</span>
                      {s.id !== 'en' && (
                        <span className={`text-[11px] font-semibold ${selected ? 'text-[#0d4a26]' : 'text-slate-500'}`}>{s.label}</span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div id="buddie-voice-scene" role="tabpanel" aria-live="polite">
            <PhoneScene scene={scene} />
            <p className="mt-4 text-center text-[11px] text-slate-500">Illustrative conversation · your team confirms the final booking or price</p>
          </div>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-3">
          {PILLARS.map(({ icon: Icon, kicker, title, copy }) => (
            <div key={kicker} className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#25d366]/15 text-[#77ec9e]">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-400">{kicker}</span>
              </div>
              <h3 className="mt-4 text-[15px] font-bold tracking-[-0.02em] text-white">{title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[26px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 sm:p-7">
            <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#8bf0aa]">
              <SlidersHorizontal className="h-4 w-4" /> You decide when Buddie speaks
            </div>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
              {[
                { name: 'Smart', copy: 'A short voice reply when the customer spoke or asked for voice.', tag: 'Default' },
                { name: 'Customer asks', copy: 'Only when they tap 🔊 Explain by voice or ask for it.' },
                { name: 'Off', copy: 'Buddie still understands voice notes and replies in text.' },
              ].map((m) => (
                <div key={m.name} className={`rounded-2xl border p-3.5 ${m.tag ? 'border-[#25d366]/40 bg-[#25d366]/[0.08]' : 'border-white/10 bg-white/[0.03]'}`}>
                  <p className="flex items-center justify-between text-sm font-bold text-white">
                    {m.name}
                    {m.tag && <span className="rounded-full bg-[#25d366] px-1.5 py-0.5 text-[9px] font-extrabold uppercase text-[#082315]">{m.tag}</span>}
                  </p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-400">{m.copy}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[12.5px] leading-relaxed text-slate-400">
              Buddie never reads out menus, links or hand-overs, and every spoken reply says exactly what the written answer says—nothing more.
            </p>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
            <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#b9a4ff]">
              <Languages className="h-4 w-4" /> By plan
            </div>
            <ul className="mt-5 divide-y divide-white/10 text-sm">
              <li className="flex items-start justify-between gap-4 pb-3">
                <span className="font-bold text-white">Starter</span>
                <span className="text-right text-slate-400">Understands customer voice notes</span>
              </li>
              <li className="flex items-start justify-between gap-4 py-3">
                <span className="font-bold text-white">Growth</span>
                <span className="text-right text-slate-400">+ Voice replies · 60 min/month · Buddie’s default voice</span>
              </li>
              <li className="flex items-start justify-between gap-4 pt-3">
                <span className="font-bold text-white">Scale</span>
                <span className="text-right text-slate-400">
                  200 min/month · choose a voice
                  <span className="mt-2 flex flex-wrap justify-end gap-1.5">
                    {VOICES.map((v) => (
                      <span key={v} className="rounded-full border border-white/15 px-2 py-0.5 text-[11px] font-semibold text-slate-300">{v}</span>
                    ))}
                  </span>
                </span>
              </li>
            </ul>
            {headingLevel === 'h2' && <Link href="/whatsapp-voice-ai" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#77ec9e] transition hover:gap-2.5">
              How Buddie Voice works <ChevronRight className="h-4 w-4" />
            </Link>}
          </div>
        </div>
      </div>
    </section>
  )
}
