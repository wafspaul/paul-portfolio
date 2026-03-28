
import React from 'react';
import { CaseStudy } from '../types';
import { X, CheckCircle2, ListFilter, Cpu, Target, ExternalLink } from 'lucide-react';

interface CaseStudyModalProps {
  study: CaseStudy;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl max-h-full bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
        <div className="flex justify-between items-center p-6 border-b border-white/10 sticky top-0 bg-[#0a0a0a] z-10">
          <div>
            <span className="text-[10px] font-mono text-bronze uppercase tracking-widest">{study.organization}</span>
            <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">{study.title}</h2>
          </div>
          <div className="flex items-center gap-3">
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-bronze text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                View Live <ExternalLink size={14} />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-12">
          {/* Header Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Role</h4>
              <p className="text-sm font-bold text-white">{study.role}</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Duration</h4>
              <p className="text-sm font-bold text-white">{study.duration}</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Location</h4>
              <p className="text-sm font-bold text-white">{study.location}</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Impact</h4>
              <p className="text-sm font-bold text-bronze">{study.metrics[0]?.value} {study.metrics[0]?.label}</p>
            </div>
          </div>

          {/* Detailed Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-10">
              <section>
                <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Target size={18} className="text-bronze" />
                  The Challenge
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">{study.challenge.problem}</p>
                <ul className="space-y-2">
                  {study.challenge.constraints.map(c => (
                    <li key={c} className="text-sm text-gray-400 flex gap-2">
                      <span className="text-red-900/50">!</span> {c}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Cpu size={18} className="text-bronze" />
                  Technical Approach
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">{study.approach.strategy}</p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Tools & Tech</h5>
                    <div className="flex flex-wrap gap-2">
                      {study.approach.tools.map(t => (
                        <span key={t} className="px-2 py-1 bg-white/5 border border-white/5 rounded-sm text-[10px] font-mono text-gray-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Stakeholders</h5>
                    <div className="flex flex-wrap gap-2">
                      {study.approach.stakeholders.map(s => (
                        <span key={s} className="px-2 py-1 bg-white/5 border border-white/5 rounded-sm text-[10px] uppercase tracking-widest text-gray-500">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" />
                  Outcome & Impact
                </h3>
                <div className="p-6 bg-white/5 border-l-2 border-green-500/50 space-y-4">
                  <p className="text-gray-200">{study.outcome.results}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div>
                      <h6 className="text-[10px] uppercase tracking-widest text-gray-500">Sustainability</h6>
                      <p className="text-xs text-gray-400">{study.outcome.sustainability}</p>
                    </div>
                    <div>
                      <h6 className="text-[10px] uppercase tracking-widest text-gray-500">Scalability</h6>
                      <p className="text-xs text-gray-400">{study.outcome.scalability}</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="md:col-span-4 space-y-6">
              <div className="p-6 bg-[#111] border border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-bronze mb-4">Key Metrics</h4>
                <div className="space-y-6">
                  {study.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="text-3xl font-bold text-white">{m.value}</div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-500">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
