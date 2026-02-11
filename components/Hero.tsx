
import React, { useState, useEffect } from 'react';
import { PROFILE_IMAGE, GALLERY_IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Show hello bubble after short delay
    const timer = setTimeout(() => setShowBubble(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-12 text-center animate-in fade-in duration-1000 slide-in-from-bottom-4">
      {/* Profile Pic with Bubble */}
      <div className="relative group">
        <div className="w-40 h-40 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden ring-4 ring-[var(--primary-color)] transition-transform duration-500 hover:scale-105">
          <img 
            src={PROFILE_IMAGE} 
            alt="Arman Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Arabic + English Bubble */}
        {showBubble && (
          <div className="absolute -right-16 top-0 glass px-4 py-2 rounded-2xl rounded-bl-none shadow-lg animate-bounce animate-in zoom-in-50 duration-500">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-0.5">Marhaba!</p>
            <p className="text-sm font-bold text-[var(--primary-color)]">Hello</p>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          Arman's <span className="text-[var(--primary-color)]">Creation</span>
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
          A small creator pushing boundaries with code, design, and reverse engineering.
        </p>
      </div>

      {/* MacOS Gallery Slider */}
      <div className="w-full glass p-3 rounded-3xl shadow-xl border border-white/20">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-900 shadow-inner">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
                idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
            >
              <img 
                src={img} 
                alt={`Slide ${idx + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {GALLERY_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
