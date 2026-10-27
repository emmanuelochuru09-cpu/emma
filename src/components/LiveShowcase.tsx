import React, { useState } from 'react';
import { SHOWCASE_PROJECTS, ShowcaseProject } from '../data/projectsData';
import { Monitor, Tablet, Smartphone, ExternalLink, Check, ArrowUpRight, Layers } from 'lucide-react';

interface LiveShowcaseProps {
  onSelectProjectForBrief: (project: ShowcaseProject) => void;
}

export const LiveShowcase: React.FC<LiveShowcaseProps> = ({ onSelectProjectForBrief }) => {
  const [filter, setFilter] = useState<'all' | 'hospitality' | 'services' | 'ecommerce'>('all');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);

  const filteredProjects = filter === 'all' 
    ? SHOWCASE_PROJECTS 
    : SHOWCASE_PROJECTS.filter((p) => p.industry === filter);

  return (
    <section id="portfolio" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header and Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-indigo-400 uppercase mb-3">
              <span>Client Showcase & Proof of Work</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Engineered for Tangible Revenue</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display" style={{ textWrap: 'balance' }}>
              Websites crafted to outperform your industry competition.
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  filter === 'all' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Projects
              </button>
              <button
                type="button"
                onClick={() => setFilter('services')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  filter === 'services' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Professional & B2B
              </button>
              <button
                type="button"
                onClick={() => setFilter('hospitality')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  filter === 'hospitality' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Hospitality & Dining
              </button>
              <button
                type="button"
                onClick={() => setFilter('ecommerce')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  filter === 'ecommerce' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                E-Commerce Store
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden flex flex-col group hover:border-slate-700 transition-all shadow-lg hover:shadow-indigo-950/20"
            >
              {/* Media Container with 4:3 Aspect Ratio */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Metric Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs font-bold text-emerald-400 font-mono">
                  {project.metric}
                </div>

                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] text-slate-300">
                  {project.timeframe}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-display mb-1 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                    <span>{project.clientName}</span>
                    <span aria-hidden="true">·</span>
                    <span className="capitalize">{project.industry}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {project.outcome}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-1.5 mb-6 text-xs text-slate-400">
                    {project.features.slice(0, 3).map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectProjectForBrief(project)}
                    className="px-3.5 py-1.5 text-xs font-medium text-white bg-slate-800 hover:bg-indigo-600 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Build Something Similar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detailed specification */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="text-xs font-semibold uppercase text-indigo-400 tracking-wider mb-1">
                    Project Blueprint
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-slate-400">{selectedProject.clientName} · {selectedProject.timeframe}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Modal Image */}
              <div className="rounded-xl overflow-hidden mb-6 border border-slate-800">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Detailed specs */}
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-400 mb-2">The Business Challenge & Delivery</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.description}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-400 mb-2">Engineered Deliverables</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 p-2 rounded bg-slate-950/60 border border-slate-800">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA button */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSelectProjectForBrief(selectedProject);
                    setSelectedProject(null);
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors"
                >
                  Request a Site Like This
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
