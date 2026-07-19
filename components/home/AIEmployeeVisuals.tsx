import Image from 'next/image'
import { ArrowRight, Check, CheckCircle2, FileText, Mic, Sparkles } from 'lucide-react'

/**
 * Marketing visuals deliberately show a complete, understandable business story.
 * The colourful image adds energy, while the foreground makes the product outcome
 * obvious to an owner in a few seconds.
 */
export function TrainBuddieScene({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`relative isolate min-h-[470px] overflow-hidden rounded-[30px] border p-4 shadow-[0_32px_80px_rgba(19,33,64,0.18)] sm:min-h-[535px] sm:p-6 ${
        dark ? 'border-white/15 bg-[#11172c]' : 'border-white/80 bg-[#eaf4ee]'
      }`}
    >
      <Image
        src="/images/brand/buddie-learning-core.png"
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="object-cover object-center opacity-90"
      />
      <div className={`absolute inset-0 ${dark ? 'bg-[radial-gradient(circle_at_50%_47%,transparent_5%,rgba(8,14,31,0.2)_52%,rgba(8,14,31,0.75)_100%)]' : 'bg-[radial-gradient(circle_at_50%_46%,transparent_6%,rgba(234,244,238,0.1)_51%,rgba(234,244,238,0.72)_100%)]'}`} />

      <div className="relative z-10 flex items-center justify-between">
        <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] ${dark ? 'border-white/15 bg-[#10172c]/75 text-white' : 'border-white/80 bg-white/80 text-slate-700'}`}>
          <span className="lb-scene-live-dot h-1.5 w-1.5 rounded-full bg-[#25d366]" /> Live learning
        </span>
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] font-bold ${dark ? 'bg-[#25d366]/15 text-[#91f5af]' : 'bg-[#ddf8e5] text-[#14833f]'}`}>
          <Check className="h-3 w-3 stroke-[3]" /> Nothing changes until saved
        </span>
      </div>

      <div className="lb-scene-float absolute left-4 top-[112px] z-10 w-[min(245px,67%)] rounded-[20px] border border-white/80 bg-white/95 p-3.5 shadow-[0_20px_42px_rgba(22,39,58,0.18)] backdrop-blur sm:left-6 sm:top-[132px] sm:w-[255px] sm:p-4">
        <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#3f24a8]">
          <span className="grid h-6 w-6 place-items-center rounded-lg bg-[#eee8ff] text-[#6e41d8]"><Mic className="h-3.5 w-3.5" /></span>
          You teach Buddie
        </div>
        <p className="mt-3 text-[12px] font-semibold leading-relaxed text-slate-700 sm:text-[13px]">
          “For Bali packages, ask for dates and travellers. Never promise the final price.”
        </p>
      </div>

      <div className="lb-scene-pulse absolute left-1/2 top-[48%] z-10 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[27px] border border-white/50 bg-[#101831]/75 text-white shadow-[0_0_0_12px_rgba(105,75,222,0.13),0_0_54px_rgba(113,74,232,0.65)] backdrop-blur sm:h-24 sm:w-24">
        <Sparkles className="h-8 w-8 text-[#e9ddff] sm:h-9 sm:w-9" />
      </div>
      <div className={`absolute left-1/2 top-[calc(48%+56px)] z-10 -translate-x-1/2 whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[0.1em] ${dark ? 'text-white' : 'text-[#263c5d]'}`}>Buddie understands</div>

      <div className="lb-scene-float-delayed absolute bottom-5 right-4 z-10 w-[min(267px,76%)] rounded-[20px] border border-[#c7efd3] bg-white/95 p-3.5 shadow-[0_20px_42px_rgba(20,73,47,0.18)] backdrop-blur sm:bottom-7 sm:right-6 sm:w-[285px] sm:p-4">
        <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#168a42]">
          <span className="grid h-6 w-6 place-items-center rounded-lg bg-[#dcf8e4] text-[#168a42]"><CheckCircle2 className="h-3.5 w-3.5" /></span>
          Buddie learns
        </div>
        <div className="mt-3 rounded-xl bg-[#effaf2] px-3 py-2.5 text-[12px] font-bold text-slate-800">Bali package → Quote request</div>
        <div className="mt-2 space-y-1.5 text-[11px] font-semibold text-slate-600">
          <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#159449]" /> Collect dates and travellers</div>
          <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#159449]" /> Never promise the final price</div>
        </div>
        <div className="mt-3 flex gap-2"><span className="rounded-lg bg-[#149447] px-3 py-2 text-[10px] font-extrabold text-white">Save changes</span><span className="rounded-lg border border-[#ccbfff] px-3 py-2 text-[10px] font-bold text-[#6e41d8]">Edit</span></div>
      </div>

      <div className="lb-scene-orbit absolute left-[19%] top-[49%] z-10 h-2.5 w-2.5 rounded-full bg-[#29d86e] shadow-[0_0_18px_#29d86e]" />
      <div className="lb-scene-orbit-reverse absolute right-[17%] top-[35%] z-10 h-3 w-3 rounded-full bg-[#a778ff] shadow-[0_0_18px_#a778ff]" />
    </div>
  )
}

export function ActionScene() {
  return (
    <div className="relative isolate overflow-hidden rounded-[30px] border border-white/15 bg-[#10182b] p-4 shadow-[0_32px_80px_rgba(0,0,0,0.32)] sm:p-6">
      <div className="absolute -left-20 top-10 h-52 w-52 rounded-full bg-[#7248e8]/35 blur-[80px]" />
      <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-[#12c866]/25 blur-[90px]" />
      <div className="relative flex items-center justify-between text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-300">
        <span>One WhatsApp conversation</span><span className="rounded-full bg-[#25d366]/15 px-2.5 py-1.5 text-[#91f5af]">Smallest right action</span>
      </div>
      <div className="relative mt-8 grid gap-4 lg:grid-cols-[0.9fr_auto_1.1fr] lg:items-center">
        <div className="lb-scene-float rounded-[22px] border border-white/15 bg-white/[0.09] p-4 backdrop-blur">
          <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#bde8ff]"><span className="h-2 w-2 rounded-full bg-[#54c9ff]" /> Customer says</div>
          <div className="mt-3 rounded-2xl rounded-bl-md bg-white px-3.5 py-3 text-sm font-semibold leading-relaxed text-[#192541]">“Need Bali for four people in December.”</div>
          <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-300"><span className="grid h-6 w-6 place-items-center rounded-lg bg-[#25d366] text-[#082315]"><Sparkles className="h-3.5 w-3.5" /></span> Buddie recognises the product and goal</div>
        </div>
        <div className="relative mx-auto hidden h-16 w-16 lg:block"><div className="lb-scene-wave absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-[#69c6ff] via-[#ae91ff] to-[#25d366]" /><div className="lb-scene-wave-dot absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_22px_#b8a3ff]" /><ArrowRight className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-[#80f2a6]" /></div>
        <div className="lb-scene-float-delayed rounded-[22px] border border-[#4dca80]/35 bg-[#edfdf2] p-4 shadow-[0_20px_42px_rgba(7,39,20,0.22)]">
          <div className="flex items-center justify-between"><div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#14833f]"><FileText className="h-4 w-4" /> Buddie creates</div><span className="rounded-full bg-[#dcf8e4] px-2 py-1 text-[9px] font-bold text-[#14833f]">Quote request</span></div>
          <div className="mt-3 rounded-xl bg-white p-3"><div className="text-sm font-bold text-slate-900">A useful request for your team</div><div className="mt-3 grid grid-cols-2 gap-1.5">{['15–22 Dec', '4 travellers', 'Departure city', 'Bali package'].map((item) => <span key={item} className="rounded-lg bg-[#f1f8f3] px-2 py-1.5 text-[10px] font-semibold text-slate-600">{item}</span>)}</div></div>
          <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-[#386049]"><CheckCircle2 className="h-4 w-4 text-[#169447]" /> No false booking confirmation. No transcript to decode.</div>
        </div>
      </div>
    </div>
  )
}
