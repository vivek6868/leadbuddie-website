import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'

export function DemoSection() {
  return (
    <Section background="gray">
      <SectionHeader
        label="Watch & Learn"
        title="See LeadBuddie in Action"
        description="Watch how teams use LeadBuddie to never miss a lead and close more deals"
        centered
        className="mb-16"
      />
      
      {/* Featured Video */}
      <div className="mb-16 max-w-4xl mx-auto">
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/fqg46eP9tmQ?si=UoXmi7uisM6IY7z-"
            title="LeadBuddie Product Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>

      <div className="text-center">
        <Button href="/demo" size="lg">
          View Full Demo Page
        </Button>
      </div>
    </Section>
  )
}

