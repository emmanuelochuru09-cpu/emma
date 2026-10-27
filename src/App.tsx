import React, { useState, useEffect } from 'react';
import { TopNav } from './components/TopNav';
import { HeroSection } from './components/HeroSection';
import { ProblemVsSolution } from './components/ProblemVsSolution';
import { LiveShowcase } from './components/LiveShowcase';
import { InteractiveRoiCalculator } from './components/InteractiveRoiCalculator';
import { WebsiteAuditSimulator } from './components/WebsiteAuditSimulator';
import { ProcessSection } from './components/ProcessSection';
import { ContactAndBriefForm, ProjectInquiry } from './components/ContactAndBriefForm';
import { AdCampaignStudioModal } from './components/AdCampaignStudioModal';
import { InquiriesDrawer } from './components/InquiriesDrawer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { Footer } from './components/Footer';
import { ShowcaseProject } from './data/projectsData';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function App() {
  const [isAdStudioOpen, setIsAdStudioOpen] = useState(false);
  const [isInquiriesDrawerOpen, setIsInquiriesDrawerOpen] = useState(false);
  const [inquiries, setInquiries] = useState<ProjectInquiry[]>([]);
  
  const [prefilledScope, setPrefilledScope] = useState<{
    packageType?: string;
    addons?: string[];
    estimatedPrice?: number;
    timeline?: string;
  } | null>(null);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ochuru_inquiries');
      if (saved) {
        setInquiries(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleNewInquiry = (inquiry: ProjectInquiry) => {
    setInquiries((prev) => {
      const updated = [inquiry, ...prev];
      try {
        localStorage.setItem('ochuru_inquiries', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleClearInquiries = () => {
    setInquiries([]);
    try {
      localStorage.removeItem('ochuru_inquiries');
    } catch {
      // ignore
    }
  };

  const handleSelectProjectForBrief = (project: ShowcaseProject) => {
    setPrefilledScope({
      packageType: `Similar to ${project.title} (${project.industry})`,
      timeline: project.timeframe,
      addons: project.features.slice(0, 3)
    });

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyRoiScope = (scope: {
    packageType: string;
    addons: string[];
    estimatedPrice: number;
    timeline: string;
  }) => {
    setPrefilledScope(scope);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAudit = () => {
    const auditEl = document.getElementById('website-audit');
    if (auditEl) {
      auditEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappDirectBannerUrl = `https://wa.me/2348032568417?text=${encodeURIComponent(
    'Hello Emmanuel! I would like to inquire about building a website for my business.'
  )}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Top Banner with Direct WhatsApp Line and Ad Studio link */}
      <div className="bg-emerald-950/80 border-b border-emerald-900/60 px-4 py-2 text-center text-xs text-emerald-200 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span className="flex items-center gap-1.5 font-medium">
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
          <span>Need a website to grow your business? Chat directly with Emmanuel on WhatsApp:</span>
          <a
            href={whatsappDirectBannerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold font-mono underline hover:text-emerald-300"
          >
            08032568417
          </a>
        </span>
        <span className="hidden sm:inline text-emerald-700">·</span>
        <button
          type="button"
          onClick={() => setIsAdStudioOpen(true)}
          className="text-emerald-300 hover:text-white font-semibold underline underline-offset-2 transition-colors"
        >
          Open Ad Campaign Kit (Instagram, WhatsApp, Google & LinkedIn Ads) →
        </button>
      </div>

      {/* Top Nav adhering strictly to Top Bar Contract */}
      <TopNav
        onOpenAdStudio={() => setIsAdStudioOpen(true)}
        onOpenInquiries={() => setIsInquiriesDrawerOpen(true)}
        inquiryCount={inquiries.length}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenAdStudio={() => setIsAdStudioOpen(true)}
          onAuditClick={handleScrollToAudit}
        />

        {/* The Cost of Having No Site vs With Custom Website in Nigeria */}
        <ProblemVsSolution />

        {/* Live Client Showcase with Filter & Specifications Modal */}
        <LiveShowcase onSelectProjectForBrief={handleSelectProjectForBrief} />

        {/* Interactive Price & Client ROI Calculator in Naira (₦) */}
        <InteractiveRoiCalculator onApplyScopeToBrief={handleApplyRoiScope} />

        {/* 60-Second Website Readiness Audit */}
        <WebsiteAuditSimulator
          onAuditComplete={({ urlOrName, score }) => {
            setPrefilledScope((prev) => ({
              ...prev,
              addons: [...(prev?.addons || []), `Audit diagnostic for ${urlOrName} (Score: ${score}/100)`]
            }));
          }}
        />

        {/* 4-Step Process & Senior Craftsmanship Guarantee */}
        <ProcessSection />

        {/* Direct Inbound Lead Capture & WhatsApp Redirect Booking Form */}
        <ContactAndBriefForm
          prefilledScope={prefilledScope}
          onInquirySubmitted={handleNewInquiry}
        />
      </main>

      {/* Clean Footer */}
      <Footer onOpenAdStudio={() => setIsAdStudioOpen(true)} />

      {/* Floating 1-Tap WhatsApp Contact Widget */}
      <FloatingWhatsAppButton />

      {/* Multi-Platform Ad Campaign Studio Modal */}
      <AdCampaignStudioModal
        isOpen={isAdStudioOpen}
        onClose={() => setIsAdStudioOpen(false)}
        onSimulateAdClick={() => {
          const heroEl = document.querySelector('h1');
          if (heroEl) {
            heroEl.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Recorded Inquiries Drawer */}
      <InquiriesDrawer
        isOpen={isInquiriesDrawerOpen}
        onClose={() => setIsInquiriesDrawerOpen(false)}
        inquiries={inquiries}
        onClearInquiries={handleClearInquiries}
      />

    </div>
  );
}
