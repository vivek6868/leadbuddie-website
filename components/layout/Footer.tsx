import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { BRAND, CONTACT, LEGAL_LINKS } from '@/lib/constants'

const columns = [
  {
    title: 'Product',
    links: [
      { name: 'Product', href: '/product' },
      { name: 'How it works', href: '/how-it-works' },
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Product demo', href: '/demo' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { name: 'Water treatment', href: '/water-purifier-crm' },
      { name: 'Travel agencies', href: '/travel-agencies' },
      { name: 'Retail businesses', href: '/retail-businesses' },
      { name: 'RO service operations', href: '/ro-service-management' },
      { name: 'AMC renewal operations', href: '/amc-renewal-software' },
      { name: 'Buddie agent', href: '/ai-employee' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { name: 'Resources', href: '/resources' },
      { name: 'Blog', href: '/blog' },
      { name: 'AMC calculator', href: '/amc-revenue-calculator' },
      { name: 'Customer story', href: '/case-study' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  },
] as const

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07111f] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1.85fr]">
          <div className="max-w-md">
            <p className="font-heading text-2xl font-extrabold tracking-[-0.04em]">LeadBuddie</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">LeadBuddie keeps track of your customers, service visits, renewals and enquiries — and tells your team what needs doing today. Built in India for water treatment, travel and retail businesses.</p>
            <a href="https://app.leadbuddie.com" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-3 text-sm font-bold text-[#082315] transition hover:-translate-y-0.5 hover:bg-[#68eb95]">Start your 30-day trial <ArrowUpRight className="h-4 w-4" /></a>
            <div className="mt-8 space-y-3 text-sm text-slate-400">
              <a href={`mailto:${CONTACT.general}`} className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" />{CONTACT.general}</a>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" />{CONTACT.address}</p>
            </div>
          </div>

          <div className="grid gap-9 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#8bf0aa]">{column.title}</h2>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-slate-300 transition hover:text-white">{link.name}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} {BRAND.name}. A product of {BRAND.company}, India.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((link) => <Link key={link.href} href={link.href} className="transition hover:text-slate-200">{link.name}</Link>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
