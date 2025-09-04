"use client"
import React, { useState, useEffect } from 'react';
const Fallback = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Add a small delay before hiding
          setTimeout(() => {
            setIsVisible(false);
          }, 500);
          return 100;
        }
        // Random increment for more natural loading feel
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 transition-opacity duration-500 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative text-center">
        {/* Logo/Brand Animation */}
        <div className="mb-8">
          <div className="relative w-24 h-24 mx-auto mb-4">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-spin"></div>
            {/* Inner pulsing circle */}
            <div className="absolute inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse flex items-center justify-center">
              {/* Heart icon representing volunteer spirit */}
              <svg className="w-8 h-8 text-white animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            {/* Orbiting dots */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
              <div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-400 rounded-full transform translate-x-1 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-green-400 rounded-full transform -translate-x-1/2 translate-y-1"></div>
              <div className="absolute top-1/2 left-0 w-2 h-2 bg-yellow-400 rounded-full transform -translate-x-1 -translate-y-1/2"></div>
            </div>
          </div>
        </div>

        {/* Brand Name with typewriter effect */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          <span className="inline-block animate-fade-in-up">V</span>
          <span className="inline-block animate-fade-in-up delay-100">o</span>
          <span className="inline-block animate-fade-in-up delay-200">l</span>
          <span className="inline-block animate-fade-in-up delay-300">u</span>
          <span className="inline-block animate-fade-in-up delay-400">n</span>
          <span className="inline-block animate-fade-in-up delay-500">t</span>
          <span className="inline-block animate-fade-in-up delay-600">e</span>
          <span className="inline-block animate-fade-in-up delay-700">e</span>
          <span className="inline-block animate-fade-in-up delay-800">r</span>
          <span className="inline-block animate-fade-in-up delay-900">H</span>
          <span className="inline-block animate-fade-in-up delay-1000">u</span>
          <span className="inline-block animate-fade-in-up delay-1100">b</span>
        </h1>
        
        <p className="text-gray-600 mb-8 animate-fade-in-up delay-1200">
          Making a difference together
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Loading...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Loading text with dots animation */}
        <div className="flex items-center justify-center text-gray-500">
          <span className="mr-2">Preparing your experience</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-150"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1100 { animation-delay: 1.1s; }
        .delay-1200 { animation-delay: 1.2s; }
      `}</style>
    </div>
  );
};

export default Fallback