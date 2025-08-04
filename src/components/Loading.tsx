import React, { useEffect, useState } from 'react';
import { Progress } from './ui/progress';
import { cn } from '../lib/utils';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: '#006400', marginTop: '-100px', marginBottom: '-50px' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-4 h-4 border border-white rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-6 h-6 border border-white rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-20 left-20 w-3 h-3 border border-white rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-10 right-10 w-5 h-5 border border-white rounded-full animate-pulse delay-1000" />
      </div>

      <div className="text-center space-y-8 z-10">
        {/* Logo Section */}
        <div className="flex items-center justify-center space-x-6">
          {/* DNA Icon */}
          </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            iGEM Brno 2025
          </h1>
          
          {/* Loading text with dots */}
          <div className="flex items-center justify-center space-x-3 text-2xl text-white/90">
            <span className="font-medium">Loading</span>
            <div className="flex space-x-1">
              <div 
                className="w-2 h-2 bg-white rounded-full animate-bounce"
                style={{ animationDelay: '0ms' }}
              />
              <div 
                className="w-2 h-2 bg-white rounded-full animate-bounce"
                style={{ animationDelay: '150ms' }}
              />
              <div 
                className="w-2 h-2 bg-white rounded-full animate-bounce"
                style={{ animationDelay: '300ms' }}
              />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-96 mx-auto space-y-2">
          <Progress value={progress} className="h-3" />
          <p className="text-white/70 text-sm font-medium">
            {progress}% Complete
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-white/80 text-lg font-light max-w-md mx-auto leading-relaxed">
          Synthetic Biology • Innovation • Research
        </p>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-1 h-1 bg-white rounded-full opacity-60 animate-ping",
              i % 2 === 0 ? "animate-pulse" : "animate-bounce"
            )}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;