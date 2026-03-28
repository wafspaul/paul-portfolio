
import React from 'react';
import { TabType } from '../types';
import ImpactDashboard from './ImpactDashboard';
import { CASE_STUDIES, PARTNERSHIPS, TRAINING, IDENTITY_CARDS, EXPERTISE } from '../constants';
import { ArrowUpRight, ExternalLink, Target, Cpu, Users, GraduationCap, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target size={24} />,
  Cpu: <Cpu size={24} />,
  Users: <Users size={24} />,
  GraduationCap: <GraduationCap size={24} />,
};

interface SectionRendererProps {
  activeTab: TabType;
  onOpenCaseStudy: (slug: string) => void;
}

const SectionRenderer: React.FC<SectionRendererProps> = ({ activeTab, onOpenCaseStudy }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
        {renderContent(activeTab, onOpenCaseStudy)}
      </motion.div>
    </AnimatePresence>
  );
};

const renderContent = (activeTab: TabType, onOpenCaseStudy: (slug: string) => void) => {
  switch (activeTab) {
    case TabType.BIO:
      return (
        <div className="py-12 space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-6">
              <p className="text-xl leading-relaxed text-gray-300 font-light">
                Program coordinator, AI literacy educator, and solo product builder with <span className="text-bronze font-normal">6+ years' experience</span> at the intersection of digital inclusion, education technology, and community development in Kenya. Scaled digital skills programs to 6,000+ learners, trained 700+ refugees with 60% employment outcomes through the Danish Refugee Council, and established a community tech hub serving 250+ users per month.
              </p>
              <p className="text-xl leading-relaxed text-gray-300 font-light">
                Specialising in <span className="text-bronze font-normal">AI for Education & Digital Inclusion</span> — with deep roots in program design, community training, and building live technology tools that translate digital access into real economic outcomes across Kenya.
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="p-6 bg-[#111] border border-white/5 rounded-sm">
                <h4 className="text-xs font-bold uppercase tracking-widest text-bronze mb-4">Quick Stats</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-white/5 pb-2">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">Experience</span>
                    <span className="text-lg font-mono text-white">6+ Years</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/5 pb-2">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">Learners</span>
                    <span className="text-lg font-mono text-white">6,000+</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/5 pb-2">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">Location</span>
                    <span className="text-lg font-mono text-white">Nairobi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Identity Cards - Inspired by buildwithrv.com */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IDENTITY_CARDS.map((card, idx) => (
              <div key={idx} className="group p-8 bg-[#111] border border-white/5 rounded-sm hover:border-bronze transition-all relative">
                <div className="text-bronze mb-6 group-hover:scale-110 transition-transform duration-500">
                  {iconMap[card.icon]}
                </div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">{card.label}</h4>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Expertise Grid - More visual than simple tags */}
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Core Expertise</h3>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EXPERTISE.map((item, idx) => (
                <div key={idx} className="space-y-6">
                  <h4 className="text-lg font-bold text-white uppercase tracking-widest flex items-center gap-3">
                    <span className="text-bronze text-xs">0{idx + 1}</span>
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed min-h-[60px]">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-1.5 px-3 py-1 bg-white/5 text-[9px] text-gray-500 uppercase tracking-widest border border-white/5">
                        <CheckCircle2 size={10} className="text-bronze" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-2xl font-bold text-white uppercase tracking-widest mb-8 text-center">Career Vision</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Scale AI literacy and digital skills programs that directly improve learning and livelihood outcomes for youth across East Africa — moving from training rooms to measurable employment',
                'Build the public evidence base for digital inclusion in Kenya — making connectivity gaps visible so NGOs, governments, and telcos act on data, not assumptions',
                'Bridge the gap between digital skills training and real employment — because a trained youth without a job is a broken pipeline that the whole ecosystem needs to fix',
                'Contribute to Kenya\'s AI governance conversation as a practitioner who has worked with 6,000+ learners on the ground — where policy meets reality'
              ].map((vision, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-sm">
                  <span className="text-bronze font-mono">/0{idx + 1}</span>
                  <p className="text-gray-400 text-sm leading-relaxed">{vision}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case TabType.COMMUNITY:
      return (
        <div className="py-12 space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-white uppercase tracking-widest mb-8">Strategic Partnerships</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 text-xs font-bold uppercase tracking-widest text-bronze">Organization</th>
                    <th className="py-4 px-4 text-xs font-bold uppercase tracking-widest text-bronze">Role</th>
                    <th className="py-4 px-4 text-xs font-bold uppercase tracking-widest text-bronze">Impact</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {PARTNERSHIPS.map((p, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-6 px-4 font-bold text-white">{p.organization}</td>
                      <td className="py-6 px-4 text-gray-400">{p.role}</td>
                      <td className="py-6 px-4 text-gray-400">{p.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-8 bg-[#111] border border-white/5 rounded-sm">
               <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-4">Leadership</h4>
               <p className="text-sm text-gray-400 leading-relaxed">
                 Scaled Ajira Digital to 6,000+ learners across Kenya, focusing on marginalized youth and regional inclusivity.
               </p>
             </div>
             <div className="p-8 bg-[#111] border border-white/5 rounded-sm">
               <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-4">Community Hubs</h4>
               <p className="text-sm text-gray-400 leading-relaxed">
                 Established community coworking hubs in rural areas, solving last-mile internet access and fostering local tech ecosystems.
               </p>
             </div>
             <div className="p-8 bg-[#111] border border-white/5 rounded-sm">
               <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-4">Governance</h4>
               <p className="text-sm text-gray-400 leading-relaxed">
                 Engaged cross-sector stakeholders including the ICT Authority and County Governments to align tech initiatives with national policy.
               </p>
             </div>
          </div>
        </div>
      );

    case TabType.IMPACT:
      return <ImpactDashboard />;

    case TabType.INNOVATIONS:
      return (
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <div 
              key={study.slug}
              onClick={() => onOpenCaseStudy(study.slug)}
              className="group cursor-pointer p-8 bg-[#111] border border-white/5 rounded-sm hover:border-bronze transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-bronze scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-mono text-bronze uppercase tracking-widest">{study.duration}</span>
                <ArrowUpRight size={18} className="text-gray-600 group-hover:text-bronze transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-bronze transition-colors">
                {study.title}
              </h3>
              <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                {study.content}
              </p>
              <div className="flex flex-wrap gap-2">
                {study.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-2 py-1 bg-white/5 text-[9px] text-gray-500 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );

    case TabType.TRAINING:
      return (
        <div className="py-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-widest text-bronze">Date</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-widest text-bronze">Program</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-widest text-bronze">Audience</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-widest text-bronze">Outcome</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {TRAINING.map((t, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4 font-mono text-gray-500 whitespace-nowrap">{t.date}</td>
                    <td className="py-6 px-4 font-bold text-white">{t.program}</td>
                    <td className="py-6 px-4 text-gray-400">{t.audience}</td>
                    <td className="py-6 px-4 text-gray-400">{t.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default SectionRenderer;
