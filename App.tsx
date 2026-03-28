
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import TabNav from './components/TabNav';
import GeometricBackground from './components/GeometricBackground';
import SectionRenderer from './components/SectionRenderer';
import CaseStudyModal from './components/CaseStudyModal';
import { TabType } from './types';
import { CASE_STUDIES } from './constants';
import { ChevronUp } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.BIO);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenCaseStudy = (slug: string) => {
    setSelectedCaseStudy(slug);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseCaseStudy = () => {
    setSelectedCaseStudy(null);
    document.body.style.overflow = 'auto';
  };

  const currentStudy = CASE_STUDIES.find(s => s.slug === selectedCaseStudy);

  return (
    <div className="min-h-screen relative selection:bg-bronze selection:text-black">
      <GeometricBackground />
      
      <main className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pb-32">
        <Hero />
        
        <TabNav 
          activeTab={activeTab} 
          onTabChange={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: document.querySelector('nav')?.offsetTop || 0, behavior: 'smooth' });
          }} 
        />

        <div className="min-h-[60vh]">
          <SectionRenderer 
            activeTab={activeTab} 
            onOpenCaseStudy={handleOpenCaseStudy} 
          />
        </div>
      </main>

      {/* Footer / Copyright */}
      <footer className="relative z-10 py-12 border-t border-white/5 text-center no-print">
        <div className="text-[10px] uppercase tracking-[0.4em] text-gray-600">
          Paul Wamocha &copy; {new Date().getFullYear()} &mdash; AI for Education & Digital Inclusion
        </div>
      </footer>

      {/* Case Study Modal */}
      {currentStudy && (
        <CaseStudyModal 
          study={currentStudy} 
          onClose={handleCloseCaseStudy} 
        />
      )}

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-[60] p-4 bg-bronze text-black rounded-full shadow-2xl hover:scale-110 transition-transform no-print"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Print View Helpers */}
      <div className="hidden print:block print-only p-8 text-black bg-white font-serif">
        <h1 className="text-4xl font-bold uppercase mb-2">Paul Wamocha</h1>
        <p className="text-lg mb-8">AI for Education & Digital Inclusion | Program Manager | Nairobi, Kenya</p>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl border-b border-black mb-4">Professional Profile</h2>
            <p>Program coordinator, AI literacy educator, and product builder with 6+ years' experience scaling digital skills programs to 6,000+ learners across Kenya. Specialist in AI for Education & Digital Inclusion, with a proven track record in humanitarian settings, government tech, and independent product development.</p>
          </section>
          {/* Add more print sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default App;
