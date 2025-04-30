'use client';

import React, { useState } from 'react';

interface TabData {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabData[];
  defaultTab?: string;
  className?: string;
}

export default function Tabs({ tabs, defaultTab, className = '' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-wrap border-b border-[#00B8D9]/30 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'text-[#00B8D9] border-b-2 border-[#00B8D9]'
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`transition-opacity duration-300 ${
              activeTab === tab.id ? 'block opacity-100' : 'hidden opacity-0'
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
