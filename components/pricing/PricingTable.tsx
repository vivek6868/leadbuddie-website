import { PRICING_PLANS } from '@/lib/constants'
import { Check, X } from 'lucide-react'

const allFeatures = [
  'Included Users',
  'WhatsApp Numbers',
  'Unified Chat Inbox',
  'AI Reply Assist',
  'AI Auto-Welcome & First Reply',
  'AI Conversation Summaries',
  'Follow-up Status & Reminders',
  'Multiple Workspaces',
  'Priority Support',
]

function getFeatureValue(planId: string, feature: string): boolean | string {
  const plan = PRICING_PLANS.find(p => p.id === planId)
  if (!plan) return false
  
  const featureMap: Record<string, Record<string, string | boolean>> = {
    starter: {
      'Included Users': '1',
      'WhatsApp Numbers': '1',
      'Unified Chat Inbox': true,
      'AI Reply Assist': true,
      'AI Auto-Welcome & First Reply': false,
      'AI Conversation Summaries': true,
      'Follow-up Status & Reminders': true,
      'Multiple Workspaces': false,
      'Priority Support': false,
    },
    growth: {
      'Included Users': '5',
      'WhatsApp Numbers': '1',
      'Unified Chat Inbox': true,
      'AI Reply Assist': true,
      'AI Auto-Welcome & First Reply': true,
      'AI Conversation Summaries': true,
      'Follow-up Status & Reminders': true,
      'Multiple Workspaces': true,
      'Priority Support': false,
    },
    team: {
      'Included Users': '20',
      'WhatsApp Numbers': '3',
      'Unified Chat Inbox': true,
      'AI Reply Assist': true,
      'AI Auto-Welcome & First Reply': true,
      'AI Conversation Summaries': true,
      'Follow-up Status & Reminders': true,
      'Multiple Workspaces': true,
      'Priority Support': true,
    },
    enterprise: {
      'Included Users': 'Custom',
      'WhatsApp Numbers': 'Custom',
      'Unified Chat Inbox': true,
      'AI Reply Assist': true,
      'AI Auto-Welcome & First Reply': true,
      'AI Conversation Summaries': true,
      'Follow-up Status & Reminders': true,
      'Multiple Workspaces': true,
      'Priority Support': true,
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

