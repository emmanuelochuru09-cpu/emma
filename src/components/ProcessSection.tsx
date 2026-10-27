import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Strategic Discovery & Requirements',
      description: 'We clarify what you sell, your target customers in Nigeria or overseas, and identify the exact conversion features (Paystack, WhatsApp booking, or portfolio) needed to grow.',
      duration: 'Day 1–2',
      deliverable: 'Structure & wireframe plan'
    },
    {
      number: '02',
      title: 'Bespoke Brand & UI Prototype',
      description: 'Zero generic templates. We craft a distinct, high-authority visual interface tailored to your brand colors and typography that commands instant customer trust.',
      duration: 'Day 3–4',
      deliverable: 'Live interactive preview link'
    },
    {
      number: '03',
      title: 'Engineering, Paystack & SEO Setup',
      description: 'Built for lightning-fast loading on mobile networks (under 1s), integrated WhatsApp order routing, card/transfer payment gateways, and Google local search indexing.',
      duration: 'Day 5–7',
      deliverable: 'Full staging environment test'
    },
    {
      number: '04',
      title: 'Domain Launch & Dedicated Handover',
      description: 'We connect your custom .com or .ng domain, configure SSL security, set up business email forwarding, and show you how to manage inquiries effortlessly.',
      duration: 'Day 8–10',
      deliverable: 'Live website + 30 days support'
    }
  ];

  const whatsappUrl = `https://wa.me/2348032568417?text=${encodeURIComponent(
    'Hello Emmanuel! I want to start my website project with you. Can we discuss on WhatsApp?'
  )}`;

  return (
    <section className="py-20 bg-slate-900/30 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-400 uppercase mb-3">
            <span>Transparent & Guaranteed Delivery</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Zero Technical Stress</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display mb-4" style={{ textWrap: 'balance' }}>
            From idea to a live revenue-generating website in 7 to 10 days.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            You don&apos;t need to worry about hosting, code, DNS records, or payment gateway APIs. We handle every detail while you stay focused on serving your customers.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                    {step.duration}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white font-display mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-900 text-[11px] text-slate-300">
                <span className="text-slate-400">Deliverable: </span>
                <span className="text-slate-200 font-medium">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Founder Trust Callout */}
        <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-3 flex justify-center">
            <div className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-xl bg-slate-900">
              <img
                src="/src/assets/images/portrait_founder_1793124791914.jpg"
                alt="Emmanuel Ochuru, Lead Web Developer and Growth Strategist"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          <div className="md:col-span-9">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
              Direct Senior Craftsmanship & Nigerian Support
            </div>
            <h3 className="text-xl font-bold text-white font-display mb-3">
              You work directly with Emmanuel Ochuru—available directly on WhatsApp: 08032568417.
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              &quot;When you hire me at Ochuru Digital, there are no middlemen, excuses, or abandoned projects. You get fast communication, regular milestone updates on WhatsApp, and a website tailored to help your business make money from day one.&quot;
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <span className="font-semibold text-white">Emmanuel Ochuru</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Lead Web Developer</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-mono font-bold flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: 08032568417</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
