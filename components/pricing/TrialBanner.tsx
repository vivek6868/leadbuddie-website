import { Calendar, CheckCircle2 } from 'lucide-react'

export function TrialBanner() {
  return (
    <div className="bg-gradient-to-r from-primary-600/10 to-secondary-600/10 border border-primary-600/20 rounded-lg p-6 md:p-8 mb-8">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center">
            <Calendar className="text-primary-400" size={24} />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">14-Day Free Trial</h3>
          <p className="text-dark-300 mb-4">
            Start your free trial today. No credit card required. Cancel anytime.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 text-sm text-dark-300">
              <CheckCircle2 className="text-green-400" size={16} />
              <span>Full access to all features</span>
            </li>
            <li className="flex items-center space-x-2 text-sm text-dark-300">
              <CheckCircle2 className="text-green-400" size={16} />
              <span>No credit card required</span>
            </li>
            <li className="flex items-center space-x-2 text-sm text-dark-300">
              <CheckCircle2 className="text-green-400" size={16} />
              <span>14-day money-back guarantee</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

