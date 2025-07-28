import React from 'react';
import { YouTubePlayer } from '@/components/ui/YouTubePlayer';
import { Button } from '@/components/ui/Button';

import { Medium, CtaText } from '@/types/api';

interface HeroSectionProps {
  title: string;
  description: string;
  media: Medium[];
  ctaText: CtaText;
  price?: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  media,
  ctaText,
  price = 1000
}) => {
  const trailerVideo = media.find(item => item.type === 'video' || (item.url && item.url.includes('youtube')));
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Featured Course
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            
            <div 
              className="text-xl text-gray-600 leading-relaxed prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            
            <div className="flex items-center space-x-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-green-600">৳{price}</span>
                <span className="text-xl text-gray-400 line-through ml-2">৳{price * 2}</span>
              </div>
              <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                50% OFF
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="text-lg px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                {ctaText.text}
              </Button>
              <button className="text-lg px-10 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                View Curriculum
              </button>
            </div>
            
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.9 (2,847 reviews)
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-7.5l-.828-.828A4 4 0 0021 5.757l-.172.172m1.414 0L12 16.172l-9.242-9.243" />
                </svg>
                15,432+ students
              </div>
            </div>
          </div>
          
          <div className="order-first lg:order-last animate-fade-in-right">
            {trailerVideo && (
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative">
                  <YouTubePlayer videoUrl={trailerVideo.url} title={title} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};