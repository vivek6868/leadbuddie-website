'use client'

import { CheckCircle2, Clock, Flame, Sparkles } from 'lucide-react'

export function HeroProductPreview() {
  return (
    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
      {/* Chat List Widget */}
      <div className="mb-4">
        <h3 className="text-xs font-semibold text-white/60 mb-3 uppercase tracking-wide">Chat List</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-white">Ajay Paints</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <span className="text-sm font-medium text-white">Priya Interiors</span>
            </div>
            <span className="text-xs text-yellow-400">Follow-up due</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-white">Arjun Constructions</span>
            </div>
            <span className="text-xs text-orange-400">Hot lead</span>
          </div>
        </div>
      </div>

      {/* Lead Status Widget */}
      <div className="mb-4 p-3 rounded-lg bg-teal-500/10 border border-teal-400/20">
        <h3 className="text-xs font-semibold text-white/60 mb-2 uppercase tracking-wide">Lead Status</h3>
        <div className="space-y-1.5 text-sm">
          <div className="flex justify-between">
            <span className="text-white/70">Status:</span>
            <span className="text-white font-medium">Follow-up</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Owner:</span>
            <span className="text-white font-medium">Agent 1</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/70">Next follow-up:</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-teal-400" />
              <span className="text-teal-400 font-medium">Today 6 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Card Widget */}
      <div className="p-3 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-400/30">
        <div className="flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-semibold text-teal-300 mb-1">AI Summary</p>
            <p className="text-sm text-white/90 leading-relaxed">
              Customer wants quotation for 3BHK repainting.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

