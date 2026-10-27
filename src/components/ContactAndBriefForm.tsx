import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Mail, MessageSquare, ArrowRight, ShieldCheck, Copy, Check, PhoneCall } from 'lucide-react';

export interface ProjectInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  projectType: string;
  budget: string;
  timeline: string;
  details: string;
  submittedAt: string;
}

interface ContactAndBriefFormProps {
  prefilledScope: {
    packageType?: string;
    addons?: string[];
    estimatedPrice?: number;
    timeline?: string;
  } | null;
  onInquirySubmitted: (inquiry: ProjectInquiry) => void;
}

export const ContactAndBriefForm: React.FC<ContactAndBriefFormProps> = ({
  prefilledScope,
  onInquirySubmitted
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [projectType, setProjectType] = useState('Professional Business Engine (5–8 pages)');
  const [budget, setBudget] = useState('₦350,000 - ₦700,000');
  const [timeline, setTimeline] = useState('Ready to start within 1–2 weeks');
  const [details, setDetails] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<ProjectInquiry | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync prefilled scope from ROI calculator or Showcase
  useEffect(() => {
    if (prefilledScope) {
      if (prefilledScope.packageType) {
        setProjectType(prefilledScope.packageType);
      }
      if (prefilledScope.estimatedPrice) {
        setBudget(`₦${prefilledScope.estimatedPrice.toLocaleString()} (Calculated Estimate)`);
      }
      if (prefilledScope.timeline) {
        setTimeline(prefilledScope.timeline);
      }
      if (prefilledScope.addons && prefilledScope.addons.length > 0) {
        setDetails(
          (prev) => (prev ? prev + '\n' : '') + `Requested Addons: ${prefilledScope.addons?.join(', ')}`
        );
      }
    }
  }, [prefilledScope]);

  const generateWhatsAppUrl = (inquiry: ProjectInquiry) => {
    const message = `Hello Emmanuel! My name is ${inquiry.name}. I submitted a project inquiry for a website on your portfolio:\n\n• Business Name: ${inquiry.businessName || 'Independent'}\n• Email: ${inquiry.email}\n• Phone: ${inquiry.phone || 'N/A'}\n• Package: ${inquiry.projectType}\n• Budget: ${inquiry.budget}\n• Timeline: ${inquiry.timeline}\n• Details: ${inquiry.details || 'None provided'}\n\nWhen can we discuss this?`;
    return `https://wa.me/2348032568417?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);

    const newInquiry: ProjectInquiry = {
      id: 'inq_' + Date.now(),
      name,
      email,
      phone,
      businessName,
      projectType,
      budget,
      timeline,
      details,
      submittedAt: new Date().toLocaleString()
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedInquiry(newInquiry);
      onInquirySubmitted(newInquiry);

      // Automatically launch WhatsApp with the pre-formatted inquiry message!
      const waUrl = generateWhatsAppUrl(newInquiry);
      window.open(waUrl, '_blank');
    }, 350);
  };

  const copySummary = () => {
    if (!submittedInquiry) return;
    const text = `Website Project Inquiry for Emmanuel Ochuru:\nName: ${submittedInquiry.name}\nBusiness: ${submittedInquiry.businessName}\nEmail: ${submittedInquiry.email}\nPhone: ${submittedInquiry.phone}\nProject: ${submittedInquiry.projectType}\nBudget: ${submittedInquiry.budget}\nTimeline: ${submittedInquiry.timeline}\nNotes: ${submittedInquiry.details}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-emerald-400 uppercase mb-3">
            <span>Direct WhatsApp & Call Available</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300 font-mono">08032568417</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display mb-4" style={{ textWrap: 'balance' }}>
            Ready to give your business the online presence it deserves?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Tell me about your business. Submitting this form will automatically open a direct WhatsApp chat with Emmanuel Ochuru on <strong className="text-emerald-400">08032568417</strong> with your project details ready to send.
          </p>
        </div>

        <div className="p-6 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
          
          {submittedInquiry ? (
            <div className="space-y-6 text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                  Inquiry Ready & Redirecting to WhatsApp!
                </h3>
                <p className="text-sm text-slate-300 max-w-lg mx-auto">
                  Thank you, <span className="font-semibold text-white">{submittedInquiry.name}</span>. Your project summary has been prepared. If WhatsApp did not open automatically, tap the button below to send it to <strong className="text-emerald-400 font-mono">08032568417</strong> right away.
                </p>
              </div>

              {/* Summary Box */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 max-w-lg mx-auto text-left text-xs space-y-2">
                <div className="font-semibold text-slate-200 border-b border-slate-800 pb-2 flex items-center justify-between">
                  <span>Prepared Project Brief:</span>
                  <span className="text-emerald-400 font-mono font-medium">{submittedInquiry.budget}</span>
                </div>
                <div className="text-slate-300"><span className="text-slate-400">Business:</span> {submittedInquiry.businessName || 'Independent Business'}</div>
                <div className="text-slate-300"><span className="text-slate-400">Package Scope:</span> {submittedInquiry.projectType}</div>
                <div className="text-slate-300"><span className="text-slate-400">Timeline:</span> {submittedInquiry.timeline}</div>
                {submittedInquiry.phone && <div className="text-slate-300"><span className="text-slate-400">Your Phone:</span> {submittedInquiry.phone}</div>}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href={generateWhatsAppUrl(submittedInquiry)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-emerald-950"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly on WhatsApp (08032568417)</span>
                </a>

                <a
                  href={`tel:08032568417`}
                  className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Call 08032568417</span>
                </a>

                <button
                  type="button"
                  onClick={copySummary}
                  className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-2 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy Brief'}</span>
                </button>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setSubmittedInquiry(null)}
                  className="text-xs text-slate-400 hover:text-white transition-colors underline underline-offset-4"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Babatunde Adeleke"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="babatunde@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Business Name or Brand
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Prime Logistics or Lagos Glow Spa"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your WhatsApp / Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 0803 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Project Scale
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="Starter Business Presence">Starter Business Presence (1–4 pages)</option>
                    <option value="Professional Business Engine">Professional Business Engine (5–8 pages)</option>
                    <option value="High-Scale E-Commerce & Portal">E-Commerce Store & Paystack</option>
                    <option value="Website Redesign & Speed Optimization">Website Redesign & Optimization</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Budget in Naira (₦)
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors font-mono"
                  >
                    <option value="₦150,000 - ₦300,000">₦150,000 – ₦300,000 (Starter)</option>
                    <option value="₦350,000 - ₦700,000">₦350,000 – ₦700,000 (Business Engine)</option>
                    <option value="₦750,000 - ₦1,500,000">₦750,000 – ₦1,500,000 (Store & Custom)</option>
                    <option value="₦1,500,000+">₦1,500,000+ (Enterprise Portal)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Desired Launch Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="Rush (Within 5-7 days)">Rush (Within 5–7 days)</option>
                    <option value="Standard (Within 2 weeks)">Standard (Within 2 weeks)</option>
                    <option value="Within the next 30 days">Within next 30 days</option>
                    <option value="Flexible / Exploring">Flexible / Exploring</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  What specific features or results do you need?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about what you sell, whether you need Paystack payment, automated WhatsApp booking, Google local search, or special forms..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-y"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Redirects immediately to Emmanuel&apos;s WhatsApp on <strong>08032568417</strong></span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wide transition-all shadow-lg shadow-emerald-950 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing WhatsApp...' : 'Submit & Message on WhatsApp (08032568417)'}</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
