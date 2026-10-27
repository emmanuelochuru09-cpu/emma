import React from 'react';
import { MessageSquare } from 'lucide-react';

interface TopNavProps {
  onOpenAdStudio: () => void;
  onOpenInquiries: () => void;
  inquiryCount: number;
}

export const TopNav: React.FC<TopNavProps> = ({ onOpenAdStudio, onOpenInquiries, inquiryCount }) => {
  const whatsappUrl = `https://wa.me/2348032568417?text=${encodeURIComponent(
    'Hello Emmanuel! I want to inquire about getting a professional website built for my business.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-white hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 font-display"
        >
          Ochuru Digital
        </a>

        {/* Zone 2: 4 concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a 
            href="#portfolio" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Showcase Work
          </a>
          <a 
            href="#why-website" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Why A Website
          </a>
          <a 
            href="#cost-estimator" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Pricing (₦)
          </a>
          <button 
            type="button"
            onClick={onOpenAdStudio}
            className="hover:text-emerald-300 text-emerald-400 font-medium transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Ad Campaign Kit</span>
            <span className="text-[10px] uppercase font-semibold tracking-wider bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 px-1.5 py-0.5 rounded">
              Ready To Run
            </span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          {inquiryCount > 0 && (
            <button
              type="button"
              onClick={onOpenInquiries}
              className="text-xs text-slate-400 hover:text-white transition-colors whitespace-nowrap px-2 py-1"
              title="View recorded inquiries"
            >
              Inquiries ({inquiryCount})
            </button>
          )}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 active:scale-95 transition-all shadow-sm shadow-emerald-950 whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp: 08032568417</span>
          </a>
        </div>
      </div>
    </header>
  );
};
