import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function ServiceCard({ title, description, icon, color = '#00B8D9' }: ServiceCardProps) {
  return (
    <div className="card group hover:translate-y-[-5px] transition-all duration-300">
      <div 
        className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
        style={{ backgroundColor: `${color}20` }}
      >
        <div className="text-3xl" style={{ color }}>
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-[#00B8D9] transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
}
