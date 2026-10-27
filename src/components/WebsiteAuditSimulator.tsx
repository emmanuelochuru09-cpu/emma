import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, CheckCircle, ArrowRight, RefreshCw, Smartphone, Search, Zap } from 'lucide-react';

interface WebsiteAuditSimulatorProps {
  onAuditComplete: (result: { urlOrName: string; score: number; issues: string[] }) => void;
}

export const WebsiteAuditSimulator: React.FC<WebsiteAuditSimulatorProps> = ({ onAuditComplete }) => {
  const [businessName, setBusinessName] = useState('');
  const [hasSite, setHasSite] = useState<'yes' | 'no' | 'unhappy'>('no');
  const [isMobileFriendly, setIsMobileFriendly] = useState<boolean | null>(null);
  const [hasBooking, setHasBooking] = useState<boolean | null>(null);
  const [ranksOnGoogle, setRanksOnGoogle] = useState<boolean | null>(null);
  
  const [submitted, setSubmitted] = useState(false);

  const calculateAudit = () => {
    let score = 100;
    const issues: string[] = [];

    if (hasSite === 'no') {
      score = 25;
      issues.push('Zero Google search visibility for your service');
      issues.push('Customer trust drop due to lack of a verified website domain');
      issues.push('Losing high-value leads who want direct booking/pricing upfront');
    } else {
      if (hasSite === 'unhappy') {
        score -= 20;
        issues.push('Outdated aesthetic failing to command premium market rates');
      }
      if (isMobileFriendly === false) {
        score -= 30;
        issues.push('Poor mobile experience causing 60%+ immediate bounce rate');
      }
      if (hasBooking === false) {
        score -= 20;
        issues.push('Friction in client intake—requiring repetitive manual messaging');
      }
      if (ranksOnGoogle === false) {
        score -= 25;
        issues.push('Missing structured schema and local SEO keywords');
      }
    }

    return {
      score: Math.max(20, score),
      issues: issues.length > 0 ? issues : ['Your foundation is good, but performance and conversion optimization will unlock scale.']
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) return;
    setSubmitted(true);
    const result = calculateAudit();
    onAuditComplete({
      urlOrName: businessName,
      score: result.score,
      issues: result.issues
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setBusinessName('');
    setHasSite('no');
    setIsMobileFriendly(null);
    setHasBooking(null);
    setRanksOnGoogle(null);
  };

  const result = submitted ? calculateAudit() : null;

  return (
    <section id="website-audit" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-indigo-400 uppercase mb-3">
            <span>Free Interactive Audit Tool</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Takes 60 Seconds</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display mb-3" style={{ textWrap: 'balance' }}>
            Is your online presence helping or hurting your sales?
          </h2>
          <p className="text-sm text-slate-300">
            Check where your business stands today and get a complimentary diagnostic report before building.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Question 1 */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                  Your Business Name or Current Website URL:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Consulting or www.mybusiness.com"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Question 2 */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                  What is your current website situation?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setHasSite('no')}
                    className={`p-3 rounded-xl text-left border text-xs transition-colors ${
                      hasSite === 'no' ? 'border-indigo-500 bg-indigo-950/40 text-white' : 'border-slate-800 bg-slate-950 text-slate-400'
                    }`}
                  >
                    <div className="font-semibold text-slate-200 mb-0.5">No website yet</div>
                    <div>Only social media or word of mouth</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasSite('unhappy')}
                    className={`p-3 rounded-xl text-left border text-xs transition-colors ${
                      hasSite === 'unhappy' ? 'border-indigo-500 bg-indigo-950/40 text-white' : 'border-slate-800 bg-slate-950 text-slate-400'
                    }`}
                  >
                    <div className="font-semibold text-slate-200 mb-0.5">Outdated / DIY site</div>
                    <div>Doesn&apos;t represent our quality</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasSite('yes')}
                    className={`p-3 rounded-xl text-left border text-xs transition-colors ${
                      hasSite === 'yes' ? 'border-indigo-500 bg-indigo-950/40 text-white' : 'border-slate-800 bg-slate-950 text-slate-400'
                    }`}
                  >
                    <div className="font-semibold text-slate-200 mb-0.5">Existing site active</div>
                    <div>Needs redesign & optimization</div>
                  </button>
                </div>
              </div>

              {/* Follow-up Questions if they have a site */}
              {hasSite !== 'no' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-800/80">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-300 mb-1.5">Loads fast on mobile phones?</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setIsMobileFriendly(true)}
                        className={`flex-1 py-1.5 px-3 text-xs rounded-lg border ${
                          isMobileFriendly === true ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsMobileFriendly(false)}
                        className={`flex-1 py-1.5 px-3 text-xs rounded-lg border ${
                          isMobileFriendly === false ? 'bg-rose-950 text-rose-300 border-rose-800' : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        No / Slow
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-300 mb-1.5">Has instant booking or direct sales?</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setHasBooking(true)}
                        className={`flex-1 py-1.5 px-3 text-xs rounded-lg border ${
                          hasBooking === true ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setHasBooking(false)}
                        className={`flex-1 py-1.5 px-3 text-xs rounded-lg border ${
                          hasBooking === false ? 'bg-rose-950 text-rose-300 border-rose-800' : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-300 mb-1.5">Shows on page 1 of Google local search?</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setRanksOnGoogle(true)}
                        className={`flex-1 py-1.5 px-3 text-xs rounded-lg border ${
                          ranksOnGoogle === true ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setRanksOnGoogle(false)}
                        className={`flex-1 py-1.5 px-3 text-xs rounded-lg border ${
                          ranksOnGoogle === false ? 'bg-rose-950 text-rose-300 border-rose-800' : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        No / Unsure
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-white text-sm transition-all shadow-lg shadow-indigo-950"
                >
                  Generate Diagnostic Report
                </button>
              </div>

            </form>
          ) : (
            result && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-slate-950 border border-slate-800">
                  <div>
                    <div className="text-xs uppercase font-semibold text-slate-400 mb-1">Audit Score for &quot;{businessName}&quot;</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                      {result.score < 50 ? 'High Growth Vulnerability' : 'Optimization Potential'}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`text-4xl font-black font-mono tabular-nums ${
                      result.score < 50 ? 'text-amber-400' : 'text-emerald-400'
                    }`}>
                      {result.score}/100
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-300 tracking-wider mb-3">
                    Identified Bottlenecks & Fixes:
                  </h4>
                  <ul className="space-y-2.5">
                    {result.issues.map((issue, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300">
                        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-indigo-200">
                    <span className="font-bold text-white">How We Solve This:</span> I will personally build a custom, speed-optimized website with Google SEO and direct booking to fix all of these bottlenecks in under 10 days.
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-3 py-2 text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      Reset
                    </button>
                    <a
                      href="#contact"
                      className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors whitespace-nowrap"
                    >
                      Fix My Website Now
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
};
