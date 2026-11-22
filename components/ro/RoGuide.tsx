import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { AmcListMock, CustomerListMock, ExcelUploadMock, JobCardMock, ServiceDueMock } from '@/components/ro/RoMocks'
import { APP_URL, RO_AMC_PATH, RO_DUE_PATH, RO_EXCEL_PATH, RO_PATH, RO_TEMPLATE_CSV, RO_TEMPLATE_XLSX, RO_UPDATED } from '@/lib/ro/paths'
import type { RoGuideContent } from '@/lib/ro/types'
import { visualsEn } from '@/lib/ro/visuals'

function formatUpdated(iso: string) {
  return new Date(`${iso}T00:00:00.000Z`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function RoGuide({ guide }: { guide: RoGuideContent }) {
  return (
    <>
      <section className="bg-[#061722] px-4 pb-14 pt-28 text-white sm:px-6 md:pt-36 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#9af3c1]">{guide.eyebrow}</p>
          <h1 className="mt-4 font-heading text-[2.1rem] font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">{guide.description}</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            LeadBuddie · {formatUpdated(guide.updated || RO_UPDATED)}
          </p>
          <a
            href={APP_URL}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#67f3bd] px-5 py-3.5 text-sm font-extrabold text-[#06271f] sm:w-auto"
          >
            Sign up and upload your Excel
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <article className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'LeadBuddie RO', href: RO_PATH },
              { label: guide.eyebrow },
            ]}
          />
          <div className="mb-10 grid gap-8">
            {guide.path === RO_AMC_PATH ? <AmcListMock copy={visualsEn} /> : null}
            {guide.path === RO_DUE_PATH ? (
              <>
                <ServiceDueMock copy={visualsEn} />
                <JobCardMock copy={visualsEn} />
              </>
            ) : null}
            {guide.path === RO_EXCEL_PATH ? (
              <>
                <CustomerListMock copy={visualsEn} />
                <div className="rounded-[24px] bg-[#06271f] p-4 sm:p-5">
                  <ExcelUploadMock copy={visualsEn} />
                </div>
              </>
            ) : null}
          </div>
          <div className="space-y-5 text-base leading-relaxed text-slate-700">
            {guide.blocks.map((block, index) => {
              if (block.type === 'p') {
                return <p key={index}>{block.text}</p>
              }
              if (block.type === 'h2') {
                return (
                  <h2
                    key={block.id}
                    id={block.id}
                    className="scroll-mt-28 pt-6 font-heading text-2xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-3xl"
                  >
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'ul') {
                return (
                  <ul key={index} className="list-disc space-y-2 pl-5">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              }
              if (block.type === 'callout') {
                return (
                  <aside key={index} className="rounded-[24px] border border-[#bcebd8] bg-[#e9faf3] p-5">
                    <p className="text-sm font-extrabold text-[#0b3c31]">{block.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#24584a]">{block.text}</p>
                  </aside>
                )
              }
              if (block.type === 'downloads') {
                return (
                  <div key={index} className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={RO_TEMPLATE_XLSX}
                      download
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06271f] px-5 py-3 text-sm font-extrabold text-white"
                    >
                      <Download className="h-4 w-4" aria-hidden="true" />
                      Download Excel
                    </a>
                    <a
                      href={RO_TEMPLATE_CSV}
                      download
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-extrabold text-slate-900"
                    >
                      <Download className="h-4 w-4" aria-hidden="true" />
                      Download CSV
                    </a>
                  </div>
                )
              }
              return (
                <div key={index} className="overflow-x-auto rounded-[24px] border border-slate-200">
                  <table className="min-w-full text-left text-sm">
                    <caption className="border-b border-slate-200 px-4 py-3 text-left text-xs font-extrabold uppercase tracking-[0.12em] text-slate-500">
                      {block.caption}
                    </caption>
                    <thead className="bg-slate-50 text-slate-900">
                      <tr>
                        {block.headers.map((header) => (
                          <th key={header} scope="col" className="px-4 py-3 font-bold">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row) => (
                        <tr key={row[0]} className="border-t border-slate-100">
                          {row.map((cell) => (
                            <td key={cell} className="px-4 py-3 align-top text-slate-700">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            })}
          </div>

          <h2 className="mt-14 font-heading text-2xl font-extrabold tracking-[-0.04em] text-slate-950">Questions</h2>
          <div className="mt-5">
            <FAQAccordion items={guide.faq} reveal={false} />
          </div>

          <div className="mt-12 rounded-[28px] bg-[#06271f] p-6 text-white sm:p-8">
            <h2 className="font-heading text-2xl font-extrabold tracking-[-0.04em]">Start with the customer file you have.</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Growth is free for the first month after signup, then ₹1,999 per month. Pay yearly for a further discount — talk to our team. WhatsApp can wait.
            </p>
            <a
              href={APP_URL}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#67f3bd] px-5 py-3.5 text-sm font-extrabold text-[#06271f] sm:w-auto"
            >
              Sign up and upload your Excel
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <nav className="mt-10" aria-label="Related">
            <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-500">Related</h2>
            <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {guide.related.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#087c5a] hover:text-[#087c5a]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </article>
    </>
  )
}
