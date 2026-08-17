import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// High-Resolution Custom Provided Hero Images
const SLIDES = [
  {
    id: 1,
    url: 'https://kelechieze.wordpress.com/wp-content/uploads/2026/08/chatgpt-image-aug-17-2026-09_32_31-am.png',
    alt: 'Luxury salon interior and atmosphere',
  },
  {
    id: 2,
    url: 'https://kelechieze.wordpress.com/wp-content/uploads/2026/08/chatgpt-image-aug-17-2026-09_32_42-am.png',
    alt: 'High fashion salon artistry',
  },
  {
    id: 3,
    url: 'https://kelechieze.wordpress.com/wp-content/uploads/2026/08/chatgpt-image-aug-17-2026-09_33_03-am.png',
    alt: 'Luxury salon styling studio',
  },
];

interface HeroSlideshowProps {
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

export const HeroSlideshow: React.FC<HeroSlideshowProps> = ({ currentSlide, onSlideChange }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      onSlideChange((currentSlide + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, onSlideChange]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none z-0 bg-[#0c0b0a]">
      {/* Background Image Carousel with Smooth Crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={SLIDES[currentSlide].url}
            alt={SLIDES[currentSlide].alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[center_top] transform scale-100 filter brightness-[0.88] contrast-[1.06]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Lighting & Contrast Gradient Overlays */}
      {/* Left side atmospheric dark gradient mask for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 w-full md:w-[70%] pointer-events-none" />

      {/* Top and bottom subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75 pointer-events-none" />

      {/* Subtle Slide Indicators */}
      <div className="absolute bottom-8 right-32 md:right-40 z-30 hidden sm:flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            id={`slide-dot-${idx}`}
            onClick={() => onSlideChange(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
