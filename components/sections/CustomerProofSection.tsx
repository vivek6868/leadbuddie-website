import { Section } from '@/components/ui/Section'

export function CustomerProofSection() {
  return (
    <Section background="gray" className="pt-12 md:pt-16 pb-6 md:pb-7">
      <h2 className="text-center text-xl md:text-2xl font-bold text-ink mb-6">
        Trusted by Growing Service Businesses
      </h2>
      <div className="max-w-3xl mx-auto">
        <blockquote className="relative rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-4">
            &ldquo;Handling 60–100 leads per day was very time-consuming. After LeadBuddie, responses and follow-ups became much easier.&rdquo;
          </p>
          <footer className="text-gray-600 font-medium not-italic">
            — Water Purifier Business Owner
          </footer>
        </blockquote>
      </div>
    </Section>
  )
}
