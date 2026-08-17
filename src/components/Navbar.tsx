import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 px-6 sm:px-10 md:px-14 py-4 md:py-6 flex items-center justify-between transition-all duration-300 ${
        scrolled 
          ? 'bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5 md:py-4' 
          : 'bg-transparent'
      }`}
    >
      {/* Brand Logo */}
      <div 
        id="salonix-logo" 
        className="flex items-center gap-2.5 cursor-pointer group select-none"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="w-6 h-6 flex items-center justify-center text-white/90 group-hover:scale-105 transition-transform">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current stroke-[2.2]">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <span className="text-white font-extrabold text-lg md:text-xl tracking-wider font-heading flex items-start">
          SALONIX<span className="text-[10px] ml-0.5 mt-0.5 text-neutral-400 font-normal">®</span>
        </span>
      </div>

      {/* Right Action Controls */}
      <div className="flex items-center gap-3 md:gap-3.5">
        <button
          id="nav-book-now-btn"
          onClick={onOpenBooking}
          className="group px-5 md:px-6 py-2.5 md:py-2.5 rounded-full bg-white text-black font-semibold text-xs md:text-sm flex items-center gap-2 hover:bg-neutral-200 active:scale-95 transition-all shadow-lg hover:shadow-white/10"
        >
          <span>Book now</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </button>

        <button
          id="nav-menu-toggle-btn"
          onClick={onOpenMenu}
          aria-label="Toggle navigation menu"
          className="w-10 h-10 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 hover:border-white/40 text-white flex flex-col items-center justify-center gap-1.5 transition-all active:scale-95 shadow-md"
        >
          <span className="w-4 h-[1.5px] bg-white rounded-full"></span>
          <span className="w-4 h-[1.5px] bg-white rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

