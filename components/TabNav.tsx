
import React from 'react';
import { TabType } from '../types';

interface TabNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TabNav: React.FC<TabNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = Object.values(TabType);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 no-print">
      <div className="max-w-4xl mx-auto flex overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`
              flex-1 min-w-[120px] py-6 px-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 relative
              ${activeTab === tab ? 'text-bronze' : 'text-gray-500 hover:text-gray-300'}
            `}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-bronze" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default TabNav;
