import React from 'react';
import { Checklist as ChecklistItem } from '@/types/api';

interface ChecklistProps {
  items: ChecklistItem[];
  title?: string;
}

export const Checklist: React.FC<ChecklistProps> = ({
  items,
  title = "Course Checklist"
}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-green-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-teal-200 rounded-full opacity-30 animate-float animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Course Checklist
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">{title}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed in this comprehensive learning journey
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
              {items && items.map((item, index) => (
                <div 
                  key={index} 
                  className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-green-50 transition-all duration-300 animate-fade-in-up hover-lift"
                  style={{ '--index': index } as React.CSSProperties}
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 w-8 h-8 border-2 border-green-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-gray-800 leading-relaxed font-medium group-hover:text-green-700 transition-colors">
                      {item.text}
                    </p>
                  </div>
                  
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-green-100 group-hover:text-green-700 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl text-center">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Get Started?</h3>
              <p className="text-gray-600">Complete all checklist items to maximize your learning experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};