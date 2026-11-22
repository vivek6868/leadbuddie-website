import { Noto_Sans_Tamil } from 'next/font/google'

const tamil = Noto_Sans_Tamil({
  subsets: ['tamil', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function TamilRoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="ta-IN" className={`${tamil.className} [&_.font-heading]:[font-family:inherit]`}>
      {children}
    </div>
  )
}
