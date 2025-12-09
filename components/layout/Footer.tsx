import Link from 'next/link'
import { NAVIGATION, LEGAL_LINKS, CONTACT, BRAND } from '@/lib/constants'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {NAVIGATION.filter(item => ['Features', 'Pricing', 'How It Works'].includes(item.name)).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-dark-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {NAVIGATION.filter(item => ['About', 'Contact'].includes(item.name)).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-dark-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-dark-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT.general}`}
                  className="flex items-center space-x-2 text-dark-400 hover:text-white transition-colors text-sm"
                >
                  <Mail size={16} />
                  <span>{CONTACT.general}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.support}`}
                  className="flex items-center space-x-2 text-dark-400 hover:text-white transition-colors text-sm"
                >
                  <Mail size={16} />
                  <span>{CONTACT.support}</span>
                </a>
              </li>
              {CONTACT.phone !== '[Your India Phone]' && (
                <li>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="flex items-center space-x-2 text-dark-400 hover:text-white transition-colors text-sm"
                  >
                    <Phone size={16} />
                    <span>{CONTACT.phone}</span>
                  </a>
                </li>
              )}
              {CONTACT.address !== '[Your India Address]' && (
                <li>
                  <div className="flex items-start space-x-2 text-dark-400 text-sm">
                    <MapPin size={16} className="mt-0.5" />
                    <span>{CONTACT.address}</span>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8">
          <div className="flex flex-col items-center space-y-2 text-center">
            <p className="text-dark-400 text-xs">
              © 2025 {BRAND.name} • A product by {BRAND.company}
            </p>
            <p className="text-dark-500 text-xs">
              Owned and operated by Vivek Dhandapani
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

