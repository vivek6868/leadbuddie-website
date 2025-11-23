import { PRICING_PLANS } from '@/lib/constants'
import { Check, X } from 'lucide-react'

const allFeatures = [
  'Monthly Leads Limit',
  'AI-Powered Summaries',
  'Lead Scoring',
  'Follow-up Reminders',
  'WhatsApp Integration',
  'Auto-reply Messages',
  'Team Collaboration',
  'Priority Support',
  'Custom Pipelines',
  'Advanced Analytics',
]

function getFeatureValue(planId: string, feature: string): boolean | string {
  const plan = PRICING_PLANS.find(p => p.id === planId)
  if (!plan) return false
  
  const featureMap: Record<string, Record<string, boolean | string>> = {
    'basic': {
      'Monthly Leads Limit': '100 leads',
      'AI-Powered Summaries': true,
      'Lead Scoring': true,
      'Follow-up Reminders': true,
      'WhatsApp Integration': 'Manual',
      'Auto-reply Messages': false,
      'Team Collaboration': false,
      'Priority Support': false,
      'Custom Pipelines': false,
      'Advanced Analytics': false,
    },
    'pro': {
      'Monthly Leads Limit': '500 leads',
      'AI-Powered Summaries': true,
      'Lead Scoring': true,
      'Follow-up Reminders': true,
      'WhatsApp Integration': true,
      'Auto-reply Messages': true,
      'Team Collaboration': false,
      'Priority Support': true,
      'Custom Pipelines': true,
      'Advanced Analytics': false,
    },
    'business': {
      'Monthly Leads Limit': 'Unlimited',
      'AI-Powered Summaries': true,
      'Lead Scoring': true,
      'Follow-up Reminders': true,
      'WhatsApp Integration': true,
      'Auto-reply Messages': true,
      'Team Collaboration': true,
      'Priority Support': true,
      'Custom Pipelines': true,
      'Advanced Analytics': true,
    },
  }
  
  return featureMap[planId]?.[feature] ?? false
}

export function PricingTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-dark-700">
            <th className="text-left p-4 font-semibold">Feature</th>
            {PRICING_PLANS.map((plan) => (
              <th key={plan.id} className="text-center p-4 font-semibold">
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allFeatures.map((feature, index) => (
            <tr key={index} className="border-b border-dark-800">
              <td className="p-4 text-dark-300">{feature}</td>
              {PRICING_PLANS.map((plan) => {
                const value = getFeatureValue(plan.id, feature)
                return (
                  <td key={plan.id} className="p-4 text-center">
                    {value === true ? (
                      <Check className="text-green-400 mx-auto" size={20} />
                    ) : value === false ? (
                      <X className="text-red-400 mx-auto" size={20} />
                    ) : (
                      <span className="text-dark-300 text-sm">{value}</span>
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

