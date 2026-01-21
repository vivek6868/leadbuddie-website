import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { BookOpen, Video, FileText, Play } from 'lucide-react'

const resources = [
  {
    type: 'video',
    icon: Video,
    title: 'Complete Product Demo',
    description: 'See how LeadBuddie helps Indian businesses manage WhatsApp leads and close more deals.',
    featured: true,
    href: '/demo',
  },
  {
    type: 'guide',
    icon: BookOpen,
    title: 'WhatsApp Business API Setup Guide',
    description: 'Step-by-step guide to connecting your WhatsApp Business number to LeadBuddie.',
    featured: false,
    href: '/resources',
  },
  {
    type: 'case-study',
    icon: FileText,
    title: 'Case Study: Thuli Paintings',
    description: 'How a Chennai-based painting contractor increased deals by 40% using LeadBuddie.',
    featured: false,
    href: '/resources',
  },
  {
    type: 'video',
    icon: Video,
    title: 'AI Reply Suggestions Tutorial',
    description: 'Learn how to use AI-powered reply suggestions to respond faster to leads.',
    featured: false,
    href: '/demo',
  },
  {
    type: 'guide',
    icon: BookOpen,
    title: 'Best Practices for WhatsApp Lead Management',
    description: 'Tips and strategies for managing WhatsApp leads effectively.',
    featured: false,
    href: '/resources',
  },
  {
    type: 'case-study',
    icon: FileText,
    title: 'Case Study: Home Decor Solutions',
    description: 'How a Bangalore agency improved response times by 30% with LeadBuddie.',
    featured: false,
    href: '/resources',
  },
]

export function ResourcesSection() {
  const featuredResource = resources.find(r => r.featured)
  const otherResources = resources.filter(r => !r.featured)

  return (
    <Section background="gray">
      <SectionHeader
        label="Insights worth stealing"
        title="500+ businesses. Thousands of leads. One report."
        description="Learn from real businesses using LeadBuddie to manage WhatsApp leads"
        centered
        className="mb-16"
      />
      
      {/* Featured Resource */}
      {featuredResource && (
        <div className="mb-12 max-w-4xl mx-auto">
          <Card className="p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                <featuredResource.icon className="text-teal-600" size={32} />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4">
                  Featured
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-ink mb-3">
                  {featuredResource.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {featuredResource.description}
                </p>
                <Button href={featuredResource.href} size="lg">
                  <Play className="inline mr-2" size={20} />
                  Watch Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Other Resources Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {otherResources.map((resource, index) => (
          <Card key={index} hover className="p-6 h-full flex flex-col">
            <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
              <resource.icon className="text-teal-600" size={24} />
            </div>
            <h4 className="text-xl font-bold text-ink mb-2">
              {resource.title}
            </h4>
            <p className="text-gray-600 mb-4 flex-1">
              {resource.description}
            </p>
            <Button href={resource.href} variant="ghost" size="sm">
              Learn More →
            </Button>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button href="/resources" variant="outline" size="lg">
          View All Resources
        </Button>
      </div>
    </Section>
  )
}

