import React, { useState } from 'react';
import { ArrowRight, MessageSquare, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenAdStudio: () => void;
  onAuditClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAdStudio, onAuditClick }) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const hotspots = [
    {
      id: 1,
      x: '24%',
      y: '48%',
      title: 'High-Converting Brand Aesthetic',
      desc: 'Position your business as a trusted market leader so customers never doubt if you are legitimate.'
    },
    {
      id: 2,
      x: '55%',
      y: '38%',
      title: 'Sub-Second Page Load',
      desc: 'Lightning-fast on Nigerian mobile networks (MTN, Airtel, Glo 4G) so you never lose an impatient buyer.'
    },
    {
      id: 3,
      x: '82%',
      y: '62%',
      title: 'Automated Paystack & WhatsApp Flow',
      desc: 'Accept card payments, bank transfers, or automated consultation bookings direct to your WhatsApp.'
    }
  ];

  const whatsappHeroUrl = `https://wa.me/2348032568417?text=${encodeURIComponent(
    'Hello Emmanuel! I saw your web design advert. I need a professional website for my business to grow. Can we discuss pricing and timeline?'
  )}`;

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background ambient subtle gradient */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Quiet human kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-indigo-400 uppercase mb-4">
              <span>Bespoke Web Development & Growth</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Emmanuel Ochuru</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 font-mono">WhatsApp: 08032568417</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.12] mb-6 font-display" style={{ textWrap: 'balance' }}>
              I build custom websites for people and businesses needing a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-sky-300">commanding online presence to grow</span>.
            </h1>

            {/* Value Body */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Stop losing paying customers to competitors simply because you don&apos;t have an official website. We build custom, ultra-fast websites with Paystack payments, automated WhatsApp bookings, and Google SEO that turn casual visitors into confirmed revenue.
            </p>

            {/* Action CTA Area */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 active:scale-95 transition-all shadow-lg shadow-emerald-950 flex items-center gap-2 whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp: 08032568417</span>
              </a>

              <a
                href="#cost-estimator"
                className="px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:text-white transition-all whitespace-nowrap"
              >
                View Pricing in Naira (₦)
              </a>

              <button
                type="button"
                onClick={onAuditClick}
                className="text-xs text-slate-400 hover:text-white underline underline-offset-4 transition-colors"
              >
                Free 60-Second Website Test
              </button>
            </div>

            {/* Quick Guarantees & Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Launched in 5–10 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Paystack & WhatsApp Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% Owned by You</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset with Interactive Hotspots */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
              
              {/* Top Window Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">ochurudigital.com</span>
                <span className="text-[11px] text-emerald-400 font-medium">Bespoke Build</span>
              </div>

              {/* Main 16:9 Image with Fallback */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/hero_web_agency_1793124791316.jpg"
                  alt="Modern web design workstation creating responsive high-converting business websites"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Subtle dark gradient scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Interactive Hotspots */}
                {hotspots.map((spot) => (
                  <div
                    key={spot.id}
                    className="absolute"
                    style={{ left: spot.x, top: spot.y }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-all ${
                        activeHotspot === spot.id
                          ? 'bg-emerald-500 text-white ring-4 ring-emerald-400/30 scale-110'
                          : 'bg-white/90 text-slate-950 hover:bg-white hover:scale-110'
                      }`}
                      aria-label={`View detail for ${spot.title}`}
                    >
                      +
                    </button>

                    {/* Popover */}
                    {activeHotspot === spot.id && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 bg-slate-900/95 backdrop-blur-md border border-slate-700 text-left rounded-lg shadow-xl z-20 text-xs">
                        <p className="font-semibold text-white mb-1">{spot.title}</p>
                        <p className="text-slate-300 leading-normal text-[11px]">{spot.desc}</p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Live Floating Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-200 font-medium">Packages from:</span>
                    <span className="text-emerald-400 font-bold font-mono">₦180,000</span>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenAdStudio}
                    className="text-[11px] text-indigo-300 hover:text-white underline underline-offset-2 transition-colors whitespace-nowrap"
                  >
                    Ad Campaign Kit →
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Adjacency Proof Row: Full-width quantitative metrics strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl md:text-3xl font-extrabold text-white font-display tabular-nums tracking-tight">
              100%
            </div>
            <div className="text-xs text-slate-400 mt-1">Mobile & Tablet Optimized</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl md:text-3xl font-extrabold text-emerald-400 font-display tabular-nums tracking-tight">
              2.4x
            </div>
            <div className="text-xs text-slate-400 mt-1">Average Inbound Lead Increase</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl md:text-3xl font-extrabold text-sky-400 font-display tabular-nums tracking-tight">
              &lt; 0.9s
            </div>
            <div className="text-xs text-slate-400 mt-1">Fast Load on Nigerian 4G</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl md:text-3xl font-extrabold text-amber-400 font-display tabular-nums tracking-tight">
              08032568417
            </div>
            <div className="text-xs text-slate-400 mt-1">Direct WhatsApp Line</div>
          </div>
        </div>

      </div>
    </section>
  );
};
