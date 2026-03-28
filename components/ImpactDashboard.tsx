
import React from 'react';
import { METRICS } from '../constants';
import { Award } from 'lucide-react';

const ImpactDashboard: React.FC = () => {
  return (
    <div className="space-y-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {METRICS.map((metric, idx) => (
          <div 
            key={idx} 
            className="p-8 bg-[#111] border border-white/5 rounded-sm hover:border-bronze/50 transition-all group"
          >
            <div className="text-4xl font-bold text-bronze mb-2 tracking-tighter group-hover:scale-105 transition-transform origin-left">
              {metric.value}
            </div>
            <div className="text-lg font-bold text-white uppercase tracking-wider mb-2">
              {metric.label}
            </div>
            <p className="text-sm text-gray-400">
              {metric.context}
            </p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white uppercase tracking-widest mb-8 flex items-center gap-3">
          <Award className="text-bronze" />
          Technical Certifications
        </h3>
        <div className="flex flex-wrap gap-4">
          {[
            'AWS Certified Cloud Practitioner',
            'Google Project Management',
            'ICDL Data Analysis (Power BI)',
            'ALX Virtual Assistant',
            'Huawei HCIA',
            'ICDL Project Planning'
          ].map((cert, idx) => (
            <span 
              key={idx}
              className="px-4 py-2 bg-[#111] border border-white/10 rounded-full text-xs font-mono text-gray-300 hover:border-bronze hover:text-bronze transition-colors"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactDashboard;
