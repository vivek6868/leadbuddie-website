import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FileText, BookOpen, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources - LeadBuddie',
  description: 'Helpful resources, guides, and documentation for LeadBuddie',
}

const resources = [
  {
    icon: BookOpen,
    title: 'Getting Started Guide',
    description: 'Learn how to set up your WhatsApp Business API and connect it to LeadBuddie.',
    href: '#',
  },
  {
    icon: FileText,
    title: 'API Documentation',
    description: 'Technical documentation for integrating LeadBuddie with your existing tools.',
    href: '#',
  },
  {
    icon: HelpCircle,
    title: 'Help Center',
    description: 'Find answers to common questions and troubleshooting tips.',
    href: '#',
  },
]

export default function ResourcesPage() {
  return (
    <>
      <Section className="pt-32 pb-16">
        <SectionHeader
          title="Resources & Documentation"
          description="Everything you need to get the most out of LeadBuddie"
          centered
        />
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} hover className="text-center">
              <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mx-auto mb-4">
                <resource.icon className="text-teal-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-6">{resource.description}</p>
              <Button href={resource.href} variant="outline" className="w-full">
                Coming Soon
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray" className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need more help?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our support team is here to help you succeed.
          </p>
          <Button href="/contact" size="lg">
            Contact Support
          </Button>
        </div>
      </Section>
    </>
  )
}

