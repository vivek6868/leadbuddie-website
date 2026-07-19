import Image from 'next/image'
import {
  CalendarCheck2,
  Check,
  CheckCircle2,
  Mic,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

function VoiceWave() {
  return (
    <span className="flex h-5 items-center gap-[3px]" aria-hidden="true">
      {[8, 14, 18, 11, 16, 9, 13, 7].map((height, index) => (
        <span
          key={`${height}-${index}`}
          className="w-[3px] rounded-full bg-[#7551dc]"
          style={{ height }}
        />
      ))}
    </span>
  )
}

/**
 * These scenes use real SMB environments as the emotional anchor and layer
 * only the minimum product UI needed to make the capability believable.
 */
export function TrainBuddieScene({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`relative isolate min-h-[520px] overflow-hidden rounded-[32px] border shadow-[0_34px_90px_rgba(19,33,64,0.22)] sm:min-h-[570px] ${
        dark ? 'border-white/15 bg-[#0d1722]' : 'border-white/90 bg-[#dfeae3]'
      }`}
    >
      <Image
        src="/images/stories/fabric-owner-trains-buddie.webp"
        alt="A fabric showroom owner teaching Buddie with a voice note"
        fill
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="object-cover object-[42%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,19,14,0.02)_32%,rgba(6,19,14,0.2)_58%,rgba(6,19,14,0.78)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#07150e]/80 via-[#07150e]/12 to-transparent" />

      <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/40 bg-[#08140f]/75 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur-md sm:left-6 sm:top-6">
        <span className="lb-scene-live-dot h-1.5 w-1.5 rounded-full bg-[#42e87c]" />
        Teaching Buddie
      </div>

      <div className="lb-scene-float absolute bottom-5 left-4 z-10 max-w-[245px] rounded-[19px] border border-white/60 bg-white/95 p-3.5 shadow-[0_20px_50px_rgba(4,20,11,0.28)] backdrop-blur sm:bottom-7 sm:left-6 sm:max-w-[270px] sm:p-4">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#eee9ff] text-[#6f45d8]"><Mic className="h-4 w-4" /></span>
          <VoiceWave />
          <span className="text-[10px] font-bold text-slate-500">0:12</span>
        </div>
        <p className="mt-3 text-[12px] font-semibold leading-relaxed text-slate-750 sm:text-[13px]">
          “Warranty is two years now. Never promise same-day delivery.”
        </p>
      </div>

      <div className="lb-scene-float-delayed absolute right-4 top-[88px] z-10 w-[min(292px,78%)] rounded-[22px] border border-[#ccefd7] bg-white/95 p-4 shadow-[0_24px_60px_rgba(5,29,16,0.3)] backdrop-blur sm:right-6 sm:top-[104px] sm:w-[310px] sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#168a42]">
            <Sparkles className="h-4 w-4" /> Buddie understood
          </div>
          <span className="rounded-full bg-[#eef8f1] px-2 py-1 text-[9px] font-bold text-[#198548]">Review first</span>
        </div>
        <p className="mt-4 text-sm font-extrabold tracking-[-0.02em] text-slate-950">Update delivery rules</p>
        <div className="mt-3 space-y-2 rounded-2xl bg-[#f4faf6] p-3 text-[11px] font-semibold text-slate-700">
          <div className="flex items-start gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 stroke-[3] text-[#169447]" /> Warranty: 2 years</div>
          <div className="flex items-start gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 stroke-[3] text-[#169447]" /> Never promise same-day delivery</div>
        </div>
        <div className="mt-3 flex gap-2">
          <span className="rounded-xl bg-[#159447] px-3.5 py-2.5 text-[10px] font-extrabold text-white shadow-[0_8px_20px_rgba(21,148,71,0.22)]">Save changes</span>
          <span className="rounded-xl border border-[#d6ccfa] bg-white px-3.5 py-2.5 text-[10px] font-bold text-[#6e41d8]">Edit</span>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-[9px] font-semibold text-slate-500"><ShieldCheck className="h-3.5 w-3.5 text-[#159447]" /> Nothing changes until you save</div>
      </div>
    </div>
  )
}

export function ActionScene() {
  return (
    <div className="relative isolate min-h-[540px] overflow-hidden rounded-[32px] border border-white/15 bg-[#10182b] shadow-[0_34px_90px_rgba(0,0,0,0.36)] sm:min-h-[590px]">
      <Image
        src="/images/stories/wellness-owner-booking.webp"
        alt="A wellness business owner welcoming a customer whose booking is already organised"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-[57%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,15,25,0.94)_0%,rgba(7,15,25,0.72)_34%,rgba(7,15,25,0.08)_69%)]" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#07111f]/75 to-transparent" />

      <div className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-[#07111f]/70 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur sm:left-6 sm:top-6">
        A customer books in 15 seconds
      </div>

      <div className="lb-scene-float absolute left-4 top-[80px] z-10 w-[min(284px,79%)] overflow-hidden rounded-[24px] border border-white/25 bg-white/[0.96] shadow-[0_26px_65px_rgba(0,0,0,0.36)] backdrop-blur sm:left-6 sm:top-[98px] sm:w-[310px]">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3.5">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#178b45]">Thamara Wellness</p><p className="mt-0.5 text-sm font-extrabold text-slate-950">Book a massage</p></div>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#e9f9ee] text-[#168a42]"><CalendarCheck2 className="h-5 w-5" /></span>
        </div>
        <div className="space-y-2.5 p-4 text-[11px]">
          <div className="rounded-xl border border-slate-200 bg-white px-3 py-2.5"><span className="block text-[9px] font-bold uppercase tracking-[0.08em] text-slate-400">Treatment</span><span className="mt-1 block font-bold text-slate-800">Deep tissue massage</span></div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-slate-200 px-3 py-2.5"><span className="block text-[9px] font-bold uppercase tracking-[0.08em] text-slate-400">Date</span><span className="mt-1 block font-bold text-slate-800">Tomorrow</span></div>
            <div className="rounded-xl border border-slate-200 px-3 py-2.5"><span className="block text-[9px] font-bold uppercase tracking-[0.08em] text-slate-400">Time</span><span className="mt-1 block font-bold text-slate-800">5:30 PM</span></div>
          </div>
          <div className="rounded-xl bg-[#159447] px-3 py-3 text-center font-extrabold text-white">Request appointment</div>
        </div>
      </div>

      <div className="lb-scene-float-delayed absolute bottom-5 right-4 z-10 w-[min(275px,77%)] rounded-[20px] border border-[#9df0b8]/40 bg-[#092217]/95 p-4 text-white shadow-[0_22px_55px_rgba(0,0,0,0.32)] backdrop-blur sm:bottom-7 sm:right-6 sm:w-[295px]">
        <div className="flex items-start gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#25d366] text-[#082315]"><CheckCircle2 className="h-5 w-5" /></span>
          <div><p className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#91f5af]">Ready for your team</p><p className="mt-1 text-sm font-extrabold">Appointment request received</p><p className="mt-1 text-[11px] leading-relaxed text-slate-300">Customer, service, date and time—already organised.</p></div>
        </div>
      </div>
    </div>
  )
}
