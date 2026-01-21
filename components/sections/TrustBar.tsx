export function TrustBar() {
  return (
    <section className="bg-ink border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm text-white/80">
          <span className="flex items-center gap-1.5">
            <span className="text-teal-400">✓</span>
            Built for WhatsApp-first businesses
          </span>
          <span className="hidden md:inline text-white/40">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-teal-400">✓</span>
            Team Inbox • Pipeline • Follow-ups • Campaigns
          </span>
          <span className="hidden md:inline text-white/40">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-teal-400">✓</span>
            Works with WhatsApp Business Platform
          </span>
        </div>
      </div>
    </section>
  )
}

