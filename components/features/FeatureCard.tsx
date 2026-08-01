import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  index?: number
}

export function FeatureCard({ title, description, icon: Icon, index = 0 }: FeatureCardProps) {
  return (
    <article
      data-reveal
      style={{ ['--reveal-delay' as string]: `${Math.min(index, 6) * 0.05}s` } as React.CSSProperties}
      className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-25px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#b9eac8] hover:shadow-[0_30px_75px_-32px_rgba(15,23,42,0.28)]"
    >
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#effaf2] text-[#168a42]">
        <Icon className="h-5 w-5" strokeWidth={1.9} />
      </span>
      <h3 className="mt-8 font-heading text-xl font-extrabold tracking-[-0.035em] text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
    </article>
  )
}
