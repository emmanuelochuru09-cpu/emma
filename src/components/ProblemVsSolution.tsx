import React from 'react';
import { COMPARISONS } from '../data/projectsData';
import { XCircle, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';

export const ProblemVsSolution: React.FC = () => {
  return (
    <section id="why-website" className="py-20 bg-slate-900/50 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-indigo-400 uppercase mb-3">
            <span>The Reality of Modern Business</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Why a Professional Website Matters</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display mb-4" style={{ textWrap: 'balance' }}>
            Social media gets attention. A custom website closes the deal.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Many businesses make the mistake of thinking an Instagram or Facebook page is enough. But when high-intent customers search on Google or want to spend real money, here is the difference between having no website versus a custom-built growth engine:
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: The Broken Path */}
          <div className="p-8 rounded-2xl bg-slate-950/80 border border-rose-950/40 relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-rose-950/60 border border-rose-800/60 flex items-center justify-center text-rose-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">Without a Professional Website</h3>
                <p className="text-xs text-rose-400/80 font-medium">Losing up to 70% of potential buyers</p>
              </div>
            </div>

            <ul className="space-y-6">
              {COMPARISONS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5 pb-5 border-b border-slate-900 last:border-0 last:pb-0">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200 mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.withoutSite}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: The High-Performing Solution */}
          <div className="p-8 rounded-2xl bg-slate-950/90 border border-indigo-900/50 relative shadow-xl shadow-indigo-950/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-950/80 border border-indigo-700/60 flex items-center justify-center text-indigo-300">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">With Your Custom Ochuru Website</h3>
                <p className="text-xs text-indigo-400 font-medium">Turn visitors into lifetime revenue</p>
              </div>
            </div>

            <ul className="space-y-6">
              {COMPARISONS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5 pb-5 border-b border-slate-900 last:border-0 last:pb-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1 flex items-center justify-between">
                      <span>{item.title}</span>
                      <span className="text-[11px] text-emerald-400 font-medium font-mono">{item.impact}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.withOurSite}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Quick Callout quote */}
        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-300">
            <span className="font-semibold text-white">Fact:</span> 75% of users admit to making judgments on a company&apos;s credibility based on their website design alone.
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors whitespace-nowrap shrink-0"
          >
            Upgrade Your Digital Presence
          </a>
        </div>

      </div>
    </section>
  );
};
