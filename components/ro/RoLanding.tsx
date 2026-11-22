import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  CalendarClock,
  Check,
  ClipboardCheck,
  Droplets,
  FileSpreadsheet,
  Inbox,
  MessageCircle,
  RefreshCw,
  Smartphone,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import {
  AmcListMock,
  CustomerListMock,
  EngineerPhoneMock,
  ExcelUploadMock,
  JobCardMock,
  ServiceDueMock,
} from '@/components/ro/RoMocks'
import { APP_URL, RO_EXCEL_PATH, RO_HI_PATH, RO_LOCALES, RO_PRICING_PATH, RO_TA_PATH, SUPPORT_EMAIL } from '@/lib/ro/paths'
import type { RoCopy } from '@/lib/ro/types'
import { visualsEn, visualsHi, visualsTa } from '@/lib/ro/visuals'

const ICONS: Record<RoCopy['capabilities'][number]['id'], LucideIcon> = {
  customers: FileSpreadsheet,
  installations: Droplets,
  dues: CalendarClock,
  requests: Inbox,
  engineers: Wrench,
  history: ClipboardCheck,
  amc: RefreshCw,
}

function SignupLink({
  children,
  tone = 'solid',
}: {
  children: React.ReactNode
  tone?: 'solid' | 'dark'
}) {
  const className =
    tone === 'solid'
      ? 'inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#67f3bd] px-5 py-3.5 text-sm font-extrabold text-[#06271f] shadow-[0_18px_46px_rgba(71,235,173,0.24)] transition hover:-translate-y-0.5 hover:bg-[#8af7cd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#67f3bd] sm:w-auto'
      : 'inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-extrabold text-[#06271f] transition hover:bg-[#e7fff5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto'
  return (
    <a href={APP_URL} className={className}>
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  )
}

export function RoLanding({ copy, localePath }: { copy: RoCopy; localePath: string }) {
  const visuals = localePath === RO_HI_PATH ? visualsHi : localePath === RO_TA_PATH ? visualsTa : visualsEn
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#061722] px-4 pb-16 pt-28 text-white sm:px-6 md:pb-24 md:pt-36 lg:px-8">
        <Image
          src="/images/brand/water-operations-hero-v1.png"
          alt="An RO service team reviewing customer work in the office"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#061722_0%,rgba(6,23,34,0.96)_38%,rgba(6,23,34,0.72)_68%,rgba(6,23,34,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,23,34,0.2)_0%,#061722_92%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-extrabold tracking-[0.04em] text-[#9af3c1]">{copy.productName}</p>
              <nav aria-label="Language" className="flex flex-wrap gap-2">
                {RO_LOCALES.map((locale) => {
                  const current = locale.href === localePath
                  const className = current
                    ? 'rounded-full bg-white px-3 py-1 text-xs font-extrabold text-[#06271f]'
                    : 'rounded-full border border-white/15 px-3 py-1 text-xs font-bold text-slate-200 transition hover:border-white/40 hover:text-white'
                  return current ? (
                    <span key={locale.href} aria-current="page" className={className}>
                      {locale.label}
                    </span>
                  ) : (
                    <Link key={locale.href} href={locale.href} hrefLang={locale.hrefLang} className={className}>
                      {locale.label}
                    </Link>
                  )
                })}
              </nav>
            </div>
            <p className="mt-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-400">{copy.eyebrow}</p>
            <h1 className="mt-4 font-heading text-[2.15rem] font-extrabold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-[3.4rem]">
              {copy.h1}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">{copy.lede}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">{copy.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <SignupLink>{copy.primaryCta}</SignupLink>
              <Link
                href={RO_EXCEL_PATH}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/[0.07] px-5 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/[0.13] sm:w-auto"
              >
                {copy.secondaryCta}
              </Link>
            </div>
            <ul className="mt-6 space-y-2 text-sm font-semibold text-slate-300">
              {copy.trust.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#67f3bd]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <CustomerListMock copy={visuals} tone="dark" />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#087c5a]">{copy.audienceEyebrow}</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h2 className="font-heading text-3xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl">
              {copy.audienceTitle}
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-slate-600">{copy.audienceLede}</p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {copy.audiences.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-slate-200 bg-white p-5">
                <h3 className="text-base font-extrabold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-24 bg-[#eaf3f0] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#087c5a]">{copy.capabilityEyebrow}</p>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl">
            {copy.capabilityTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">{copy.capabilityLede}</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {copy.capabilities.map((item) => {
              const Icon = ICONS[item.id]
              return (
                <article key={item.id} className="rounded-[24px] border border-slate-200 bg-white p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#e9faf3] text-[#087c5a]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-extrabold leading-snug text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.copy}</p>
                </article>
              )
            })}
          </div>
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
            <ServiceDueMock copy={visuals} />
            <AmcListMock copy={visuals} />
          </div>
        </div>
      </section>

      <section id="engineer-app" className="scroll-mt-24 bg-[#06271f] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#9af3c1]">{copy.engineerEyebrow}</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              {copy.engineerTitle}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">{copy.engineerLede}</p>
            <p className="mt-4 text-sm font-semibold text-[#9af3c1]">{copy.engineerFoot}</p>
          </div>
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <figure className="min-w-0">
              <Image
                src="/images/ro/engineer-using-app.webp"
                alt={visuals.photo.alt}
                width={1152}
                height={864}
                sizes="(min-width: 1024px) 58vw, 100vw"
                priority
                loading="eager"
                className="h-auto w-full rounded-[28px] border border-white/10"
              />
              <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                {visuals.photo.caption}
              </figcaption>
            </figure>
            <div className="grid items-start gap-8">
            <ol className="grid gap-3">
              {copy.engineerPoints.map((point, index) => {
                const Icon = [Smartphone, ClipboardCheck, Check][index] ?? Smartphone
                return (
                  <li key={point.title} className="flex gap-4 rounded-[24px] border border-white/10 bg-white/[0.05] p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#67f3bd] text-[#06271f]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-base font-extrabold">{point.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-300">{point.copy}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
            <div className="grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-1">
              <EngineerPhoneMock copy={visuals} />
              <JobCardMock copy={visuals} tone="dark" />
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#087c5a]">{copy.whatsappEyebrow}</p>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl">
            {copy.whatsappTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">{copy.whatsappLede}</p>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <article className="rounded-[28px] border border-[#bcebd8] bg-[#e9faf3] p-6 sm:p-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#087c5a]">{copy.withoutKicker}</p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-slate-950">{copy.withoutTitle}</h3>
              <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
                {copy.withoutPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#087c5a]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 text-slate-700">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-6 text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-500">{copy.withKicker}</p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-slate-950">{copy.withTitle}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{copy.withCopy}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#061722] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#9af3c1]">{copy.flowEyebrow}</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">{copy.flowTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">{copy.flowLede}</p>
            <div className="mt-8">
              <ExcelUploadMock copy={visuals} />
            </div>
          </div>
          <ol className="space-y-3">
            {copy.flow.map((step, index) => (
              <li key={step.title} className="flex gap-4 rounded-[22px] border border-white/10 bg-white/[0.05] p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#67f3bd] text-xs font-extrabold text-[#06271f]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#087c5a]">{copy.pricingEyebrow}</p>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl">
            {copy.pricingTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">{copy.pricingLede}</p>
          <Link href={RO_PRICING_PATH} className="mt-4 inline-flex text-sm font-extrabold text-[#087c5a] underline-offset-2 hover:underline">
            {copy.priceListLabel}
          </Link>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            <article className="rounded-[28px] border border-[#087c5a] bg-[#06271f] p-6 text-white sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-heading text-3xl font-extrabold tracking-[-0.04em]">{copy.growthName}</h3>
                <span className="rounded-full bg-[#67f3bd] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#06271f]">
                  {copy.growthKicker}
                </span>
              </div>
              <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                {copy.growthTimeline.map((step) => (
                  <li key={step.when} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#9af3c1]">{step.when}</p>
                    <p className="mt-2 font-heading text-3xl font-extrabold tracking-[-0.04em]">{step.price}</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">{step.detail}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.14em] text-[#9af3c1]">{copy.growthIncludes}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {copy.growthPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#67f3bd]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <SignupLink>{copy.growthCta}</SignupLink>
              </div>
            </article>

            <article className="flex flex-col rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#087c5a]">{copy.scaleKicker}</p>
              <h3 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.04em] text-slate-950">{copy.scaleName}</h3>
              <p className="mt-3 font-heading text-4xl font-extrabold tracking-[-0.04em] text-slate-950">
                {copy.scalePrice}{' '}
                <span className="text-base font-semibold text-slate-500">{copy.scalePeriod}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{copy.scaleCopy}</p>
              <ul className="mt-5 space-y-2">
                {copy.scalePoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-semibold text-slate-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#087c5a]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-7">
                <a
                  href={APP_URL}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3.5 text-sm font-extrabold text-slate-900 transition hover:border-[#087c5a] hover:text-[#087c5a]"
                >
                  {copy.scaleCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-600">{copy.starterNote}</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
            {copy.annualLead}{' '}
            <Link href="/contact" className="font-extrabold text-[#087c5a] underline-offset-2 hover:underline">
              {copy.annualCta}
            </Link>
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-500">{copy.pricingNote}</p>
        </div>
      </section>

      <section id="guides" className="scroll-mt-24 bg-[#061722] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#9af3c1]">{copy.guidesEyebrow}</p>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
            {copy.guidesTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">{copy.guidesLede}</p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {copy.guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group flex min-h-64 flex-col rounded-[28px] border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:border-[#67f3bd]/45 hover:bg-white/[0.09]"
              >
                <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#8af7cd]">{guide.label}</span>
                <h3 className="mt-8 text-2xl font-extrabold leading-tight tracking-[-0.035em]">{guide.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{guide.copy}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-extrabold text-[#8af7cd]">
                  {copy.guidesCta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-t border-slate-200 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
            {copy.faqTitle}
          </h2>
          <p className="mt-3 text-center text-sm text-slate-600">
            {copy.faqLede}{' '}
            <a className="font-bold text-[#087c5a] underline-offset-2 hover:underline" href={`mailto:${SUPPORT_EMAIL}`}>
              {copy.supportLabel}
            </a>
          </p>
          <div className="mt-8">
            <FAQAccordion items={copy.faq} reveal={false} />
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#092331] px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#9af3c1]">{copy.finalEyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
            {copy.finalTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300">{copy.finalLede}</p>
          <div className="mt-8 flex justify-center">
            <SignupLink tone="dark">{copy.finalCta}</SignupLink>
          </div>
        </div>
      </section>
    </>
  )
}
