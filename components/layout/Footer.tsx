import Link from 'next/link'
import { NAVIGATION, LEGAL_LINKS, CONTACT, BRAND } from '@/lib/constants'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Product Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {NAVIGATION.filter(item => ['Product', 'Pricing', 'Demo', 'Blog'].includes(item.name)).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog/rss.xml"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  RSS
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT.general}`}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  <Mail size={16} />
                  <span>{CONTACT.general}</span>
                </a>
              </li>
              {CONTACT.phone !== '[Your India Phone]' && (
                <li>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    <Phone size={16} />
                    <span>{CONTACT.phone}</span>
                  </a>
                </li>
              )}
              {CONTACT.address !== '[Your India Address]' && (
                <li>
                  <div className="flex items-start space-x-2 text-gray-600 text-sm">
                    <MapPin size={16} className="mt-0.5" />
                    <span>{CONTACT.address}</span>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © 2025 {BRAND.name} — Powered by {BRAND.company}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
