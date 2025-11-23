import { Section } from '@/components/ui/Section'
import { MessageCircle, XCircle, Clock, FileSpreadsheet } from 'lucide-react'

const problems = [
  {
    icon: MessageCircle,
    title: 'Leads Lost in WhatsApp',
    description: 'Important customer inquiries get buried in endless WhatsApp chats. You miss follow-ups and lose potential business.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Messy Excel Tracking',
    description: 'Trying to track leads in Excel sheets is time-consuming and error-prone. Data gets outdated and disorganized.',
  },
  {
    icon: Clock,
    title: 'Missed Follow-ups',
    description: 'Without reminders, you forget to follow up with leads. Days turn into weeks, and opportunities slip away.',
  },
  {
    icon: XCircle,
    title: 'No Lead Prioritization',
    description: 'You can\'t tell which leads are hot and which are cold. You waste time on low-quality leads.',
  },
]

export function ProblemStatement() {
  return (
    <Section className="bg-dark-800/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Are You Losing Leads Every Day?
        </h2>
        <p className="text-lg text-dark-300 max-w-2xl mx-auto">
          If you're using WhatsApp for business, you know the struggle. Here's what SMBs worldwide face:
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {problems.map((problem, index) => {
          const IconComponent = problem.icon
          return (
            <div
              key={index}
              className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 hover:border-primary-600/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="text-red-400" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                  <p className="text-dark-300">{problem.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

