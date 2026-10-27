import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/2348032568417?text=${encodeURIComponent(
    'Hello Emmanuel! I saw your web design showcase and I would like to get a professional website for my business. Can we talk?'
  )}`;

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-2xl shadow-emerald-950/80 border border-emerald-400/40 transition-all hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-100"></span>
        </span>
        <MessageSquare className="w-4 h-4 fill-white" />
        <span className="whitespace-nowrap">Chat on WhatsApp: <span className="font-mono font-bold">08032568417</span></span>
      </a>
    </aside>
  );
};
