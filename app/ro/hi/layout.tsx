import { Noto_Sans_Devanagari } from 'next/font/google'

const hindi = Noto_Sans_Devanagari({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function HindiRoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="hi-IN" className={`${hindi.className} [&_.font-heading]:[font-family:inherit]`}>
      {children}
    </div>
  )
}
