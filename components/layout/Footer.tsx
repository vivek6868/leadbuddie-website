import Link from 'next/link'
import { NAVIGATION, LEGAL_LINKS, CONTACT, BRAND } from '@/lib/constants'
import { Mail, MapPin } from 'lucide-react'
import { MetaTechProviderBadge } from '@/components/sections/MetaTechProviderBadge'

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MetaTechProviderBadge variant="footer" />
        <div className="mb-8 grid grid-cols-1 gap-8 pt-4 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-heading font-semibold text-text-primary">Product</h3>
            <ul className="space-y-2">
              {NAVIGATION.filter((item) => ['Product', 'Pricing', 'Demo', 'Blog'].includes(item.name)).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog/rss.xml" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                  RSS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading font-semibold text-text-primary">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading font-semibold text-text-primary">Legal</h3>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading font-semibold text-text-primary">Contact</h3>
            <p className="mb-3 text-sm font-medium text-text-primary">{BRAND.company}</p>
            <ul className="space-y-3">
              {CONTACT.address && (
                <li>
                  <div className="flex items-start space-x-2 text-sm text-text-secondary">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                    <span>{CONTACT.address}</span>
                  </div>
                </li>
              )}
              <li>
                <a href={`mailto:${CONTACT.general}`} className="flex items-center space-x-2 text-sm text-text-secondary transition-colors hover:text-text-primary">
                  <Mail size={16} />
                  <span>{CONTACT.general}</span>
                </a>
              </li>
              <li>
                <a href={CONTACT.whatsappUrl} className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                  Phone / WhatsApp: {CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="text-center">
            <p className="text-sm text-text-secondary">© 2026 {BRAND.name} — Powered by {BRAND.company}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
