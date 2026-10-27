import React, { useState } from 'react';
import { DEFAULT_AD_PRESETS, AdCreativePreset } from '../data/adPresetsData';
import { Copy, Check, Sparkles, Sliders, MessageCircle, Instagram, Search, Linkedin, Eye, PhoneCall } from 'lucide-react';

interface AdCampaignStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSimulateAdClick: () => void;
}

export const AdCampaignStudioModal: React.FC<AdCampaignStudioModalProps> = ({
  isOpen,
  onClose,
  onSimulateAdClick
}) => {
  const [activeChannel, setActiveChannel] = useState<'instagram_feed' | 'instagram_story' | 'whatsapp_pitch' | 'google_search' | 'linkedin_b2b'>('instagram_feed');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Customization controls
  const [businessName, setBusinessName] = useState('Ochuru Digital');
  const [founderName, setFounderName] = useState('Emmanuel Ochuru');
  const [phoneNumber, setPhoneNumber] = useState('08032568417');
  const [userEmail, setUserEmail] = useState('emmanuelochuru02@gmail.com');
  const [targetCity, setTargetCity] = useState('Lagos, Abuja & Nationwide');

  if (!isOpen) return null;

  const currentPreset = DEFAULT_AD_PRESETS.find((p) => p.channel === activeChannel) || DEFAULT_AD_PRESETS[0];

  const getCustomizedBody = (preset: AdCreativePreset) => {
    return preset.body
      .replace(/Emmanuel Ochuru/g, founderName)
      .replace(/Ochuru Web Studio|Ochuru Digital/g, businessName)
      .replace(/08032568417/g, phoneNumber)
      .replace(/\[Owner Name \/ Business Team\]/g, 'Alhaji / Manager')
      .replace(/\[Business Name\]/g, 'Prime Care Clinic')
      .replace(/\[products \/ services \/ client reviews\]/g, 'quality service and 5-star customer reviews')
      .replace(/\[Industry\/Service\]/g, 'private healthcare & consulting')
      .replace(/\[City\]/g, targetCity);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const directWhatsAppUrl = `https://wa.me/234${phoneNumber.replace(/^0+/, '')}?text=${encodeURIComponent(
    'Hello Emmanuel! I saw your web design advert. I would like to get a quote for my business.'
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Top Modal Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/30 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white font-display">
                Ad Campaign Studio & WhatsApp Client Outreach Kit
              </h2>
              <p className="text-xs text-slate-400">
                Ready-to-run marketing adverts to promote your web design services with WhatsApp: <span className="text-emerald-400 font-mono font-semibold">{phoneNumber}</span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Channel Selector Bar */}
        <div className="px-6 py-2.5 bg-slate-950/60 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveChannel('instagram_feed')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors ${
              activeChannel === 'instagram_feed' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Instagram Feed Ad</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveChannel('instagram_story')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors ${
              activeChannel === 'instagram_story' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Story & WhatsApp Status</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveChannel('whatsapp_pitch')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors ${
              activeChannel === 'whatsapp_pitch' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Pitch Script</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveChannel('google_search')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors ${
              activeChannel === 'google_search' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Google Sponsored Ad</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveChannel('linkedin_b2b')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors ${
              activeChannel === 'linkedin_b2b' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn Post</span>
          </button>
        </div>

        {/* Modal Main Content: Split 2-Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
          
          {/* Left Column: Live Realistic Ad Preview */}
          <div className="lg:col-span-7 p-6 bg-slate-950 flex flex-col items-center justify-center">
            
            <div className="w-full max-w-md">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className="font-semibold uppercase tracking-wider text-emerald-400">Live Rendered Ad Mockup</span>
                <span>{currentPreset.channelLabel}</span>
              </div>

              {/* Instagram Feed Ad Mockup */}
              {activeChannel === 'instagram_feed' && (
                <div className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
                  {/* Instagram Top Bar */}
                  <div className="px-3 py-2.5 flex items-center justify-between border-b border-slate-800 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 p-[1.5px]">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-bold text-[10px] text-white">
                          OD
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-white text-[12px] leading-tight">ochuru.digital</div>
                        <div className="text-[10px] text-slate-400">Sponsored · WhatsApp Available</div>
                      </div>
                    </div>
                    <span className="text-slate-500">•••</span>
                  </div>

                  {/* Ad Image */}
                  <div className="relative aspect-square bg-slate-950 overflow-hidden">
                    <img
                      src="/src/assets/images/hero_web_agency_1793124791316.jpg"
                      alt="Web design agency ad"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                      <div className="text-xs font-bold text-white font-display">
                        &quot;I build high-converting websites for businesses ready to scale.&quot;
                      </div>
                      <div className="text-[11px] text-emerald-300 font-mono mt-0.5">
                        WhatsApp: {phoneNumber}
                      </div>
                    </div>
                  </div>

                  {/* CTA Banner Bar */}
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 flex items-center justify-between text-xs font-semibold text-white transition-colors"
                  >
                    <span>Chat on WhatsApp: {phoneNumber}</span>
                    <span className="text-sm font-bold">›</span>
                  </a>

                  {/* Caption */}
                  <div className="p-3 text-xs text-slate-300 space-y-1.5 max-h-36 overflow-y-auto bg-slate-900/90">
                    <p className="font-bold text-white text-xs">{currentPreset.headline}</p>
                    <p className="whitespace-pre-line text-[11px] text-slate-300">{getCustomizedBody(currentPreset)}</p>
                    <div className="text-[11px] text-emerald-400 font-mono">
                      {currentPreset.hashtags?.join(' ')}
                    </div>
                  </div>
                </div>
              )}

              {/* Instagram Story Ad Mockup */}
              {activeChannel === 'instagram_story' && (
                <div className="rounded-2xl border-4 border-slate-800 bg-slate-950 overflow-hidden shadow-2xl relative aspect-[9/16] max-h-[500px] mx-auto flex flex-col justify-between p-4 text-white">
                  <div className="flex items-center justify-between text-xs pt-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-[9px]">OD</div>
                      <span className="font-semibold text-xs">ochuru.digital</span>
                      <span className="text-[10px] text-slate-400">Sponsored</span>
                    </div>
                    <span className="text-slate-400">✕</span>
                  </div>

                  <div className="my-auto text-center px-4 space-y-3">
                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-600 text-[10px] font-bold tracking-wider uppercase">
                      Attention Business Owners
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight leading-tight">
                      {currentPreset.headline}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentPreset.subheadline}
                    </p>
                    <div className="text-emerald-400 font-mono font-bold text-sm">
                      WhatsApp: {phoneNumber}
                    </div>
                  </div>

                  <div className="text-center pb-2">
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold shadow-lg block"
                    >
                      Chat on WhatsApp: {phoneNumber}
                    </a>
                  </div>
                </div>
              )}

              {/* WhatsApp Pitch Script Mockup */}
              {activeChannel === 'whatsapp_pitch' && (
                <div className="rounded-xl border border-slate-800 bg-[#0b141a] overflow-hidden shadow-2xl text-xs">
                  <div className="px-3 py-2 bg-[#202c33] flex items-center justify-between text-slate-300">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white text-[10px]">
                        EO
                      </div>
                      <div>
                        <div className="font-semibold text-white">{founderName}</div>
                        <div className="text-[10px] text-emerald-400 font-mono">{phoneNumber} · Online</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 space-y-2 bg-[#0b141a] max-h-72 overflow-y-auto">
                    <div className="bg-[#005c4b] text-slate-100 p-3 rounded-2xl rounded-tr-none shadow-sm whitespace-pre-line text-xs leading-relaxed">
                      {getCustomizedBody(currentPreset)}
                      <div className="text-[9px] text-emerald-200 text-right mt-1">11:42 AM · Delivered ✓✓</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Google Search Mockup */}
              {activeChannel === 'google_search' && (
                <div className="rounded-xl border border-slate-800 bg-white p-5 text-slate-900 shadow-2xl text-left space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="font-bold text-slate-900">Sponsored</span>
                    <span>·</span>
                    <span className="text-slate-700 truncate">{currentPreset.subheadline}</span>
                  </div>

                  <div className="text-blue-700 text-base font-semibold hover:underline cursor-pointer">
                    {currentPreset.headline}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentPreset.body}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200 text-xs">
                    <div className="text-blue-700 font-medium">WhatsApp: {phoneNumber}</div>
                    <div className="text-blue-700 font-medium">Packages from ₦180,000</div>
                    <div className="text-blue-700 font-medium">Delivered in 7 Days</div>
                    <div className="text-blue-700 font-medium">Free Website Audit</div>
                  </div>
                </div>
              )}

              {/* LinkedIn Post Mockup */}
              {activeChannel === 'linkedin_b2b' && (
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-2xl text-left space-y-3 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden">
                      <img src="/src/assets/images/portrait_founder_1793124791914.jpg" alt="Founder" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{founderName}</div>
                      <div className="text-slate-400 text-[11px]">Web Architect & Growth Consultant · WhatsApp: {phoneNumber}</div>
                      <div className="text-slate-500 text-[10px]">1d · Edited · 🌐</div>
                    </div>
                  </div>

                  <p className="whitespace-pre-line text-slate-200 leading-relaxed max-h-48 overflow-y-auto">
                    {getCustomizedBody(currentPreset)}
                  </p>

                  <div className="pt-2 border-t border-slate-800 text-slate-400 flex items-center justify-between text-xs">
                    <span>👍 248 likes</span>
                    <span>46 comments · 19 reposts</span>
                  </div>
                </div>
              )}

              {/* Action Buttons Below Mockup */}
              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleCopy(getCustomizedBody(currentPreset), currentPreset.id)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2 transition-colors shadow-sm"
                >
                  {copiedId === currentPreset.id ? <Check className="w-4 h-4 text-emerald-200" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedId === currentPreset.id ? 'Copied to Clipboard!' : 'Copy Ad Copy'}</span>
                </button>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Test WhatsApp Link</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Customization & Deployment Tips */}
          <div className="lg:col-span-5 p-6 bg-slate-900 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider">
                <Sliders className="w-4 h-4 text-emerald-400" />
                <span>Personalize Your Details</span>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">WhatsApp & Call Number:</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-emerald-400 font-mono font-bold focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Your Name / Title:</label>
                <input
                  type="text"
                  value={founderName}
                  onChange={(e) => setFounderName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Studio / Brand Name:</label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Target Locations / Cities:</label>
                <input
                  type="text"
                  value={targetCity}
                  onChange={(e) => setTargetCity(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5 text-xs">
                <div className="font-semibold text-emerald-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Pro Marketing Tip for {currentPreset.channelLabel}:</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {currentPreset.tips}
                </p>
                <div className="text-slate-500 text-[11px]">
                  Target Audience: <span className="text-slate-300">{currentPreset.targetAudience}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="text-xs text-slate-400 font-mono">
                WhatsApp: {phoneNumber}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Done
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
