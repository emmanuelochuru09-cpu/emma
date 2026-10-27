import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, Check, MessageSquare, Clock, Zap } from 'lucide-react';

interface RoiCalculatorProps {
  onApplyScopeToBrief: (scope: {
    packageType: string;
    addons: string[];
    estimatedPrice: number;
    timeline: string;
  }) => void;
}

export const InteractiveRoiCalculator: React.FC<RoiCalculatorProps> = ({ onApplyScopeToBrief }) => {
  const [tier, setTier] = useState<'starter' | 'business' | 'growth'>('business');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['seo', 'booking']);
  const [customerValue, setCustomerValue] = useState<number>(75000);
  const [expectedClients, setExpectedClients] = useState<number>(8);

  const customerValueId = useId();
  const expectedClientsId = useId();

  const tiers = {
    starter: {
      name: 'Starter Business Presence',
      idealFor: 'Solo practitioners, consultants, personal brands & small boutique shops',
      basePrice: 180000,
      baseTimeline: '5 to 7 days',
      features: [
        'Up to 4 custom pages (Home, About, Services, Contact)',
        '100% mobile responsive (Fast on MTN/Airtel 4G)',
        'Direct 1-tap WhatsApp chat & call button',
        'Google Business & Map search registration'
      ]
    },
    business: {
      name: 'Professional Business Engine',
      idealFor: 'Clinics, legal firms, restaurants, logistics & growing service businesses',
      basePrice: 450000,
      baseTimeline: '7 to 10 days',
      features: [
        'Up to 8 custom bespoke pages',
        'Automated client booking calendar & WhatsApp quote alerts',
        'Local Nigerian SEO & schema markup for Google ranking',
        'Sub-second page load speed & SSL certificate included'
      ]
    },
    growth: {
      name: 'High-Scale E-Commerce & Portal',
      idealFor: 'Online brands, apparel stores, wholesale, course creators & portals',
      basePrice: 950000,
      baseTimeline: '12 to 16 days',
      features: [
        'Paystack & Flutterwave card/bank transfer integration',
        'Product inventory manager & automated receipts',
        'Delivery fee calculator for Lagos, Abuja & interstate shipping',
        'Instant WhatsApp notifications for new paid orders'
      ]
    }
  };

  const addonsList = [
    { id: 'seo', name: 'Google Local SEO & Business Profile Setup', price: 60000 },
    { id: 'booking', name: 'Automated WhatsApp Booking & Paystack Setup', price: 75000 },
    { id: 'copywriting', name: 'Persuasive Sales Copywriting (All Pages)', price: 80000 },
    { id: 'express', name: 'Express Rush Turnaround (5 Days Guarantee)', price: 100000 },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentTier = tiers[tier];
  const addonsTotal = selectedAddons.reduce((acc, curr) => {
    const found = addonsList.find((a) => a.id === curr);
    return acc + (found ? found.price : 0);
  }, 0);

  const totalPrice = currentTier.basePrice + addonsTotal;
  
  // Projected monthly revenue calculation in Naira
  const monthlyProjectedRevenue = customerValue * expectedClients;
  const breakEvenMonths = Math.max(0.1, Number((totalPrice / monthlyProjectedRevenue).toFixed(1)));

  const whatsappMessage = encodeURIComponent(
    `Hello Emmanuel! I used your Website Price & ROI Calculator.\n\nPackage: ${currentTier.name}\nAddons: ${selectedAddons.map(id => addonsList.find(a => a.id === id)?.name || id).join(', ')}\nEstimated Price: ₦${totalPrice.toLocaleString()}\nTimeline: ${selectedAddons.includes('express') ? '5 Business Days (Rush)' : currentTier.baseTimeline}\n\nI would love to discuss building this for my business. Can we talk?`
  );
  const whatsappUrl = `https://wa.me/2348032568417?text=${whatsappMessage}`;

  return (
    <section id="cost-estimator" className="py-20 bg-slate-900/40 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-indigo-400 uppercase mb-3">
            <span>Transparent Investment in Naira (₦)</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Zero Hidden Charges</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display mb-4" style={{ textWrap: 'balance' }}>
            Interactive Website Pricing & Revenue Return Calculator
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            A high-performing website is not an expense—it is a digital salesperson working for you 24/7. Select your package and features below to see transparent pricing in Naira and estimated revenue returns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step 1 & 2: Package Tier & Addons Selector */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tier Selector */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-[11px] font-bold flex items-center justify-center">1</span>
                <span>Select Project Scale</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(['starter', 'business', 'growth'] as const).map((key) => {
                  const t = tiers[key];
                  const isSelected = tier === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setTier(key)}
                      className={`p-4 rounded-xl text-left border transition-all ${
                        isSelected
                          ? 'border-indigo-500 bg-indigo-950/40 text-white shadow-md'
                          : 'border-slate-800 bg-slate-900/50 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-semibold uppercase text-indigo-400 mb-1">{key}</div>
                      <div className="font-bold text-sm text-white mb-2 leading-tight">{t.name}</div>
                      <div className="text-xs text-slate-400 leading-normal mb-3">{t.idealFor}</div>
                      <div className="text-sm font-bold text-emerald-400 font-mono">
                        ₦{t.basePrice.toLocaleString()}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Tier Features */}
              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <div className="text-xs font-medium text-slate-400 mb-2">Included in this tier:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {currentTier.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Optional Addons */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-[11px] font-bold flex items-center justify-center">2</span>
                <span>Custom Upgrades & Integrations</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border text-left flex items-center justify-between gap-3 transition-colors ${
                        isChecked
                          ? 'border-indigo-500/80 bg-indigo-950/30 text-white'
                          : 'border-slate-800 bg-slate-900/40 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-medium">
                        <div>{addon.name}</div>
                        <div className="text-emerald-400 font-mono text-[11px] mt-0.5">+₦{addon.price.toLocaleString()}</div>
                      </div>
                      <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                        isChecked ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-slate-700'
                      }`}>
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Price & ROI Projection Box */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            
            {/* Price Summary Card */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-indigo-900/60 shadow-xl shadow-indigo-950/30">
              
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-400">Total Estimated Investment</div>
                  <div className="text-3xl font-extrabold text-emerald-400 font-mono mt-1">
                    ₦{totalPrice.toLocaleString()}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Timeline</div>
                  <div className="text-xs font-semibold text-white font-mono mt-1">
                    {selectedAddons.includes('express') ? '5 Days (Rush)' : currentTier.baseTimeline}
                  </div>
                </div>
              </div>

              {/* ROI Estimator Sliders */}
              <div className="py-5 space-y-4">
                <div className="text-xs font-semibold uppercase text-indigo-400 tracking-wider">
                  Projected Nigerian Client ROI
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-slate-300 mb-1.5">
                    <label htmlFor={customerValueId}>Average Value / Sale of 1 Customer:</label>
                    <span className="font-bold text-white font-mono">₦{customerValue.toLocaleString()}</span>
                  </div>
                  <input
                    id={customerValueId}
                    type="range"
                    min="10000"
                    max="500000"
                    step="5000"
                    value={customerValue}
                    onChange={(e) => setCustomerValue(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-slate-300 mb-1.5">
                    <label htmlFor={expectedClientsId}>Extra Monthly Inquiries Converted:</label>
                    <span className="font-bold text-white font-mono">{expectedClients} customers/mo</span>
                  </div>
                  <input
                    id={expectedClientsId}
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={expectedClients}
                    onChange={(e) => setExpectedClients(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                </div>

                {/* Calculation outcome */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 mt-2">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>Projected New Monthly Revenue:</span>
                    <span className="font-bold text-emerald-400 font-mono text-sm">
                      +₦{monthlyProjectedRevenue.toLocaleString()}/month
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Estimated Break-Even Horizon:</span>
                    <span className="font-semibold text-slate-200">
                      {breakEvenMonths <= 1 ? 'Under 4 weeks' : `${breakEvenMonths} months`}
                    </span>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="space-y-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 text-xs font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-500 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send This Quote to Emmanuel on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => onApplyScopeToBrief({
                    packageType: currentTier.name,
                    addons: selectedAddons.map(id => addonsList.find(a => a.id === id)?.name || id),
                    estimatedPrice: totalPrice,
                    timeline: selectedAddons.includes('express') ? '5 Business Days (Rush)' : currentTier.baseTimeline
                  })}
                  className="w-full py-2.5 px-4 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Or Fill Project Brief Form Below</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500 mt-3">
                Includes .com or .ng domain setup, SSL security, and 30-day post-launch support.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
