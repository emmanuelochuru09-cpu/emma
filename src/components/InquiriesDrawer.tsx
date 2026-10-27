import React from 'react';
import { ProjectInquiry } from './ContactAndBriefForm';
import { Mail, Phone, Calendar, Trash2, X } from 'lucide-react';

interface InquiriesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  inquiries: ProjectInquiry[];
  onClearInquiries: () => void;
}

export const InquiriesDrawer: React.FC<InquiriesDrawerProps> = ({
  isOpen,
  onClose,
  inquiries,
  onClearInquiries
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg h-full bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <div>
              <h3 className="text-base font-bold text-white font-display">Client Inquiries & Briefs</h3>
              <p className="text-xs text-slate-400">Recorded from the advert landing page</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Inquiries list */}
          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            {inquiries.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-400">
                No inquiries submitted yet. When customers submit your brief form, they will appear here.
              </div>
            ) : (
              inquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-bold text-white text-sm">{inq.name}</div>
                      <div className="text-slate-400">{inq.businessName || 'Independent Business'}</div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">{inq.submittedAt}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 pt-1 border-t border-slate-900">
                    <div><span className="text-slate-500">Package:</span> {inq.projectType}</div>
                    <div><span className="text-slate-500">Budget:</span> {inq.budget}</div>
                  </div>

                  {inq.details && (
                    <div className="p-2.5 rounded bg-slate-900 text-slate-300 text-[11px] leading-relaxed">
                      {inq.details}
                    </div>
                  )}

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-900">
                    <a
                      href={`mailto:${inq.email}?subject=RE: Your Website Project Inquiry`}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-[11px] flex items-center gap-1.5 transition-colors"
                    >
                      <Mail className="w-3 h-3" />
                      <span>Reply via Email</span>
                    </a>

                    {inq.phone && (
                      <a
                        href={`tel:${inq.phone}`}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] flex items-center gap-1.5 transition-colors"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call</span>
                      </a>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          {inquiries.length > 0 && (
            <button
              type="button"
              onClick={onClearInquiries}
              className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1.5 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg ml-auto transition-colors"
          >
            Close Drawer
          </button>
        </div>

      </div>
    </div>
  );
};
